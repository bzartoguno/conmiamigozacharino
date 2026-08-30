import random
from pathlib import Path
import tempfile
import unittest

from buddybuddy.behavior import Behavior, BehaviorController
from buddybuddy.memory import CompanionMemory, MemoryStore


class BehaviorTests(unittest.TestCase):
    def test_long_inactivity_sleeps(self):
        changes = []
        controller = BehaviorController(changes.append, random.Random(1))
        self.assertEqual(controller.choose_next(inactive_seconds=181), Behavior.SLEEP)
        self.assertEqual(changes, [Behavior.SLEEP])


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
