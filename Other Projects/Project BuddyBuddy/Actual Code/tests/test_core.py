import random
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

from PIL import Image

from buddybuddy.behavior import Behavior, BehaviorController
from buddybuddy.app import (
    DirectionalAnimation,
    CompanionApp,
    GIF_CANDIDATES,
    MACOS_TRANSPARENT_BACKGROUND,
    OVERLAY_COLOR,
    _configure_overlay_window,
    _read_gif_frames,
    animation_dimensions,
    clamp_overlay_position,
    choose_animation,
    generate_chat_response,
    frames_for_direction,
    load_animation_library,
    mirror_rgba_frames,
    next_horizontal_position,
    sequence_frame,
)
from buddybuddy.memory import CompanionMemory, MemoryStore
from cyn_bot import CynBot


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
            candidates,
            lambda name: DirectionalAnimation(["idle-frame"], ["idle-mirror"])
            if name == "idle.gif"
            else DirectionalAnimation([], []),
        )
        self.assertIs(library[Behavior.TALK], library[Behavior.IDLE])
        self.assertIs(library[Behavior.REACT], library[Behavior.IDLE])

    def test_left_movement_selects_original_frames(self):
        animation = DirectionalAnimation(["left-1", "left-2"], ["right-1", "right-2"])
        self.assertIs(frames_for_direction(animation, -1), animation.original)

    def test_right_movement_selects_mirrored_frames(self):
        animation = DirectionalAnimation(["left-1", "left-2"], ["right-1", "right-2"])
        self.assertIs(frames_for_direction(animation, 1), animation.mirrored)

    def test_nondirectional_animation_ignores_facing(self):
        animation = DirectionalAnimation(["idle"], ["mirrored-idle"])
        self.assertIs(
            frames_for_direction(animation, 1, directional=False), animation.original
        )
        
    def test_animation_dimensions_cover_every_frame(self):
        frames = [self.FakeImage(80, 120), self.FakeImage(128, 96)]
        self.assertEqual(animation_dimensions(frames), (128, 120))

    def test_real_transparent_image_is_mirrored_with_alpha_intact(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "transparent.png"
            source = Image.new("RGBA", (3, 1), (0, 0, 0, 0))
            source.putpixel((0, 0), (255, 0, 0, 255))
            source.putpixel((1, 0), (0, 255, 0, 128))
            source.save(path)

            with Image.open(path) as actual_image:
                mirrored = mirror_rgba_frames([actual_image])[0]

            self.assertEqual(mirrored.getpixel((2, 0)), (255, 0, 0, 255))
            self.assertEqual(mirrored.getpixel((1, 0)), (0, 255, 0, 128))
            self.assertEqual(mirrored.getpixel((0, 0))[3], 0)

    def test_gif_reader_preserves_each_frame_duration(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "timed.gif"
            frames = [
                Image.new("RGBA", (2, 1), (255, 0, 0, 255)),
                Image.new("RGBA", (2, 1), (0, 0, 0, 0)),
            ]
            frames[0].save(
                path,
                save_all=True,
                append_images=frames[1:],
                duration=[40, 90],
                loop=0,
                disposal=2,
            )

            loaded, durations = _read_gif_frames(path)

            self.assertEqual(len(loaded), 2)
            self.assertEqual(durations, [40, 90])
            self.assertEqual(loaded[1].getpixel((0, 0))[3], 0)

    def test_mirror_failure_keeps_original_photo_frames(self):
        rgba = [Image.new("RGBA", (1, 1), (255, 0, 0, 255))]
        with (
            patch("buddybuddy.app._read_gif_frames", return_value=(rgba, [75])),
            patch("buddybuddy.app.ImageTk.PhotoImage", side_effect=lambda image: image.copy()),
            patch("buddybuddy.app.mirror_rgba_frames", side_effect=ValueError("bad mirror")),
            self.assertWarnsRegex(RuntimeWarning, "bad mirror.*using original frames"),
        ):
            animation = CompanionApp._load_gif(Path("sample.gif"))

        self.assertIs(animation.mirrored, animation.original)

    def test_overlay_position_uses_dynamic_bounds(self):
        self.assertEqual(
            clamp_overlay_position(950, 760, (128, 96), (1024, 768)), (896, 672)
        )
        self.assertEqual(clamp_overlay_position(-20, -4, (128, 96), (1024, 768)), (0, 0))

    def test_movement_left(self):
        self.assertEqual(next_horizontal_position(40, 20, 100, -1), (36, -1))

    def test_movement_right(self):
        self.assertEqual(next_horizontal_position(40, 20, 100, 1), (44, 1))

    def test_movement_reverses_at_left_edge(self):
        self.assertEqual(next_horizontal_position(0, 20, 100, -1), (4, 1))

    def test_movement_reverses_at_right_edge(self):
        self.assertEqual(next_horizontal_position(80, 20, 100, 1), (76, -1))

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
        class Tcl:
            def __init__(self, backend):
                self.backend = backend

            def call(self, *values):
                return self.backend if values == ("tk", "windowingsystem") else "8.6.15"

        def __init__(
            self, transparency_error=None, background_error=None, backend="aqua"
        ):
            self.calls = []
            self.transparency_error = transparency_error
            self.background_error = background_error
            self.tk = self.Tcl(backend)

        def overrideredirect(self, value):
            self.calls.append(("overrideredirect", value))

        def attributes(self, *values):
            self.calls.append(("attributes",) + values)
            if values and values[0] == "-transparent" and self.transparency_error:
                raise self.transparency_error

        def configure(self, **values):
            self.calls.append(("configure", values))
            if (
                values.get("bg") == MACOS_TRANSPARENT_BACKGROUND
                and self.background_error
            ):
                raise self.background_error

        def wm_attributes(self, *values):
            self.calls.append(("wm_attributes",) + values)
            if self.transparency_error:
                raise self.transparency_error

    class FakeCharacter:
        def __init__(self, window, **values):
            window.calls.append(("character", values))

        def destroy(self):
            pass

    def test_windows_uses_color_key(self):
        window = self.FakeWindow()
        result = _configure_overlay_window(window, backend="win32")
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertTrue(result.transparent)
        self.assertIn(("wm_attributes", "-transparentcolor", OVERLAY_COLOR), window.calls)

    def test_darwin_uses_aqua_transparency_without_a_fake_title_bar(self):
        window = self.FakeWindow()
        result = _configure_overlay_window(
            window, backend="aqua", character_factory=self.FakeCharacter
        )
        self.assertEqual(result.background, MACOS_TRANSPARENT_BACKGROUND)
        self.assertTrue(result.transparent)
        self.assertEqual(window.calls[0], ("overrideredirect", True))
        self.assertIn(("attributes", "-topmost", True), window.calls)
        self.assertIn(("attributes", "-transparent", True), window.calls)
        self.assertIn(
            (
                "configure",
                {
                    "bg": MACOS_TRANSPARENT_BACKGROUND,
                    "bd": 0,
                    "highlightthickness": 0,
                },
            ),
            window.calls,
        )
        self.assertFalse(
            any("-transparentcolor" in call for call in window.calls), window.calls
        )
        self.assertFalse(any(call[0] == "title" for call in window.calls))

    def test_darwin_tcl_failure_warns(self):
        import tkinter as tk

        window = self.FakeWindow(tk.TclError("Aqua transparency unavailable"))
        messages = []
        result = _configure_overlay_window(
            window,
            backend="aqua",
            warn=messages.append,
            character_factory=self.FakeCharacter,
        )
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertFalse(result.transparent)
        self.assertIn("window.attributes('-transparent', True)", result.error)
        self.assertEqual(len(messages), 1)
        self.assertIn("Aqua Tk", messages[0])
        self.assertIn("Aqua transparency unavailable", messages[0])
        self.assertFalse(
            any("-transparentcolor" in call for call in window.calls), window.calls
        )

    def test_unsupported_platform_warns_without_configuring_color_key(self):
        window, messages = self.FakeWindow(backend="x11"), []
        result = _configure_overlay_window(
            window, warn=messages.append
        )
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertFalse(result.transparent)
        self.assertEqual(len(messages), 1)
        self.assertIn("backend=x11", messages[0])
        self.assertIn("Tk patch level=8.6.15", messages[0])
        self.assertFalse(any(call[0] == "wm_attributes" for call in window.calls))

    def test_windows_tcl_failure_warns(self):
        import tkinter as tk

        window, messages = self.FakeWindow(tk.TclError("not supported")), []
        result = _configure_overlay_window(
            window, backend="win32", warn=messages.append
        )
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertFalse(result.transparent)
        self.assertEqual(result.error, "not supported")
        self.assertIn("not supported", messages[0])

    def test_darwin_root_background_failure_never_returns_system_transparent(self):
        import tkinter as tk

        window = self.FakeWindow(background_error=tk.TclError("unknown color name"))
        messages = []
        result = _configure_overlay_window(
            window,
            backend="aqua",
            warn=messages.append,
            character_factory=self.FakeCharacter,
        )
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertFalse(result.transparent)
        self.assertIn("window.configure", result.error)
        self.assertNotIn(("attributes", "-transparent", True), window.calls)

    def test_darwin_character_background_is_probed_before_transparency(self):
        import tkinter as tk

        def rejecting_character(window, **values):
            window.calls.append(("character", values))
            raise tk.TclError("label rejects systemTransparent")

        window, messages = self.FakeWindow(), []
        result = _configure_overlay_window(
            window,
            backend="aqua",
            warn=messages.append,
            character_factory=rejecting_character,
        )
        self.assertEqual(result.background, OVERLAY_COLOR)
        self.assertFalse(result.transparent)
        self.assertIn("tk.Label", result.error)
        self.assertNotIn(("attributes", "-transparent", True), window.calls)


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


class ChatIntegrationTests(unittest.TestCase):
    class FakeCynBot:
        def __init__(self):
            self.messages = []

        def respond(self, message):
            self.messages.append(message)
            return "cyn_bot response"

    def test_buddybuddy_routes_chat_messages_to_cyn_bot(self):
        bot = self.FakeCynBot()
        self.assertEqual(generate_chat_response(bot, "Hello Cyn"), "cyn_bot response")
        self.assertEqual(bot.messages, ["Hello Cyn"])

    def test_cyn_bot_drives_buddybuddy_replies_and_memory(self):
        with tempfile.TemporaryDirectory() as folder:
            bot = CynBot(Path(folder) / "cyn_memory.json", seed=3)
            self.assertIn("Name stored. Hello, Ada.", bot.respond("My name is Ada."))
            self.assertIn("Ada", bot.respond("What is my name?"))


class SpeechBubbleTests(unittest.TestCase):
    class FakeRoot:
        def winfo_x(self):
            return 80

        def winfo_y(self):
            return 80

    class FakeToplevel:
        instances = []

        def __init__(self, _root):
            self.exists = True
            self.destroyed = False
            self.callback = None
            self.__class__.instances.append(self)

        def overrideredirect(self, _value):
            pass

        def attributes(self, *_values):
            pass

        def geometry(self, _value):
            pass

        def after(self, _delay, callback):
            self.callback = callback

        def winfo_exists(self):
            return self.exists

        def destroy(self):
            self.destroyed = True
            self.exists = False

    class FakeLabel:
        def __init__(self, *_args, **_kwargs):
            pass

        def pack(self):
            pass

    def test_expired_bubble_does_not_prevent_or_close_its_replacement(self):
        app = CompanionApp.__new__(CompanionApp)
        app.root = self.FakeRoot()
        app.bubble = None
        self.FakeToplevel.instances = []

        with patch("buddybuddy.app.tk.Toplevel", self.FakeToplevel), patch(
            "buddybuddy.app.tk.Label", self.FakeLabel
        ):
            app.say("first")
            first = app.bubble
            first.exists = False

            app.say("second")
            second = app.bubble

            self.assertIsNot(first, second)
            self.assertTrue(second.winfo_exists())
            first.callback()
            self.assertIs(app.bubble, second)
            self.assertFalse(second.destroyed)


if __name__ == "__main__":
    unittest.main()
