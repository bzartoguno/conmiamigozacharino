import random
from pathlib import Path
import tempfile
import unittest

from buddybuddy.behavior import Behavior, BehaviorController
from buddybuddy.app import (
    GIF_CANDIDATES,
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
