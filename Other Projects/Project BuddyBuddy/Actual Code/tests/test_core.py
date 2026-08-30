import random
from pathlib import Path
import tempfile
import unittest

from buddybuddy.behavior import Behavior, BehaviorController
from buddybuddy.app import (
    GIF_CANDIDATES,
    OVERLAY_COLOR,
    _configure_overlay_window,
    animation_dimensions,
    clamp_overlay_position,
    choose_animation,
    load_animation_library,
    sequence_frame,
)
from buddybuddy.memory import CompanionMemory, MemoryStore


class BehaviorTests(unittest.TestCase):
    def test_long_inactivity_sleeps(self):
        changes = []
        controller = BehaviorController(changes.append, random.Random(1))
        self.assertEqual(controller.choose_next(inactive_seconds=181), Behavior.SLEEP)
        self.assertEqual(changes, [Behavior.SLEEP])


class AnimationTests(unittest.TestCase):
    class FakeImage:
        def __init__(self, width, height):
            self._width, self._height = width, height

        def width(self):
            return self._width

        def height(self):
            return self._height
        
    def test_seeded_selection_is_repeatable(self):
        animations = [["first"], ["second"], ["third"]]
        first = choose_animation(animations, None, random.Random(7))
        second = choose_animation(animations, None, random.Random(7))
        self.assertIs(first, second)

    def test_selection_does_not_immediately_repeat(self):
        animations = [["first"], ["second"]]
        self.assertIs(
            choose_animation(animations, animations[0], random.Random(1)), animations[1]
        )

    def test_behavior_candidates_and_frame_sequence_align(self):
        self.assertEqual(GIF_CANDIDATES[Behavior.IDLE][0], "Waiting1-CYN.gif")
        self.assertEqual(GIF_CANDIDATES[Behavior.IDLE][-1], "Waiting9-CYN.gif")
        self.assertEqual(GIF_CANDIDATES[Behavior.WALK][-1], "Walking6-CYN.gif")
        self.assertEqual(GIF_CANDIDATES[Behavior.SLEEP][-1], "Sitting3-CYN.gif")
        self.assertEqual(sequence_frame(["a", "b"], 0), ("a", 1))
        self.assertEqual(sequence_frame(["a", "b"], 1), ("b", 0))

    def test_unreadable_action_safely_uses_idle_fallback(self):
        candidates = {Behavior.IDLE: ["idle.gif"], Behavior.TALK: ["missing.gif"]}
        library = load_animation_library(
            candidates, lambda name: [["idle-frame"]] if name == "idle.gif" else []
        )
        self.assertIs(library[Behavior.TALK], library[Behavior.IDLE])
        self.assertIs(library[Behavior.REACT], library[Behavior.IDLE])
        
    def test_animation_dimensions_cover_every_frame(self):
        frames = [self.FakeImage(80, 120), self.FakeImage(128, 96)]
        self.assertEqual(animation_dimensions(frames), (128, 120))

    def test_overlay_position_uses_dynamic_bounds(self):
        self.assertEqual(
            clamp_overlay_position(950, 760, (128, 96), (1024, 768)), (896, 672)
        )
        self.assertEqual(clamp_overlay_position(-20, -4, (128, 96), (1024, 768)), (0, 0))

    def test_every_gif_frame_has_the_dedicated_transparency_color(self):
        image_dir = Path(__file__).resolve().parents[2] / "CYN-images"
        for path in image_dir.glob("*.gif"):
            data = path.read_bytes()
            global_palette = 13
            position = global_palette
            if data[10] & 0x80:
                position += 3 * 2 ** ((data[10] & 7) + 1)
            transparent_index = None
            frame_count = 0
            while data[position] != 0x3B:
                marker = data[position]
                position += 1
                if marker == 0x21:
                    label = data[position]
                    position += 1
                    if label == 0xF9:
                        size = data[position]
                        payload = position + 1
                        transparent_index = data[payload + 3] if data[payload] & 1 else None
                        position += size + 2
                    else:
                        position = self._skip_gif_sub_blocks(data, position)
                    continue
                self.assertEqual(marker, 0x2C, path.name)
                packed = data[position + 8]
                position += 9
                palette = global_palette
                if packed & 0x80:
                    palette = position
                    position += 3 * 2 ** ((packed & 7) + 1)
                self.assertIsNotNone(transparent_index, path.name)
                offset = palette + 3 * transparent_index
                self.assertEqual(data[offset : offset + 3], bytes((255, 0, 255)), path.name)
                position += 1  # LZW minimum code size
                position = self._skip_gif_sub_blocks(data, position)
                transparent_index = None
                frame_count += 1
            self.assertGreater(frame_count, 0, path.name)

    @staticmethod
    def _skip_gif_sub_blocks(data, position):
        while data[position]:
            position += data[position] + 1
        return position + 1


class OverlayConfigurationTests(unittest.TestCase):
    class FakeWindow:
        def __init__(self, transparency_error=None):
            self.calls = []
            self.transparency_error = transparency_error

        def overrideredirect(self, value):
            self.calls.append(("overrideredirect", value))

        def attributes(self, *values):
            self.calls.append(("attributes",) + values)

        def configure(self, **values):
            self.calls.append(("configure", values))

        def wm_attributes(self, *values):
            self.calls.append(("wm_attributes",) + values)
            if self.transparency_error:
                raise self.transparency_error

    def test_windows_uses_color_key(self):
        window = self.FakeWindow()
        self.assertTrue(_configure_overlay_window(window, platform="win32"))
        self.assertIn(("wm_attributes", "-transparentcolor", OVERLAY_COLOR), window.calls)

    def test_unsupported_platform_warns_without_configuring_color_key(self):
        window, messages = self.FakeWindow(), []
        self.assertFalse(_configure_overlay_window(window, platform="linux", warn=messages.append))
        self.assertEqual(len(messages), 1)
        self.assertFalse(any(call[0] == "wm_attributes" for call in window.calls))

    def test_windows_tcl_failure_warns(self):
        import tkinter as tk

        window, messages = self.FakeWindow(tk.TclError("not supported")), []
        self.assertFalse(_configure_overlay_window(window, platform="win32", warn=messages.append))
        self.assertIn("not supported", messages[0])


class MemoryTests(unittest.TestCase):
    def test_round_trip_and_history_limit(self):
        with tempfile.TemporaryDirectory() as folder:
            store = MemoryStore(Path(folder) / "memory.json")
            memory = CompanionMemory(name="Buddy", preferences={"color": "purple"})
            for number in range(60):
                memory.remember("you", str(number))
            store.save(memory)
            loaded = store.load()
            self.assertEqual(loaded.name, "Buddy")
            self.assertEqual(loaded.preferences["color"], "purple")
            self.assertEqual(len(loaded.interactions), 50)
            self.assertEqual(loaded.interactions[0]["message"], "10")

    def test_invalid_file_uses_defaults(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "memory.json"
            path.write_text("not json", encoding="utf-8")
            self.assertEqual(MemoryStore(path).load().name, "Cyn")


if __name__ == "__main__":
    unittest.main()
