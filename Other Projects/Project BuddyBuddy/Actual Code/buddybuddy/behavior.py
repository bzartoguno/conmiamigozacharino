"""Deterministic behavior scheduling for the desktop companion."""

from __future__ import annotations

from enum import Enum
import random
import time
from typing import Callable


class Behavior(str, Enum):
    IDLE = "idle"
    WALK = "walk"
    SLEEP = "sleep"
    TALK = "talk"
    REACT = "react"


class BehaviorController:
    """Chooses simple behaviors without a network service or AI model."""

    def __init__(self, on_change: Callable[[Behavior], None], rng: random.Random | None = None):
        self.on_change = on_change
        self.rng = rng or random.Random()
        self.current = Behavior.IDLE
        self.last_interaction = time.monotonic()

    def set(self, behavior: Behavior) -> None:
        self.current = behavior
        self.on_change(behavior)

    def interact(self) -> None:
        self.last_interaction = time.monotonic()
        self.set(Behavior.REACT)

    def choose_next(self, inactive_seconds: float | None = None) -> Behavior:
        inactive = inactive_seconds
        if inactive is None:
            inactive = time.monotonic() - self.last_interaction
        if inactive > 180:
            selected = Behavior.SLEEP
        else:
            selected = self.rng.choices(
                [Behavior.IDLE, Behavior.WALK, Behavior.TALK], weights=[6, 3, 1], k=1
            )[0]
        self.set(selected)
        return selected
