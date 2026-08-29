"""Small JSON-backed settings and interaction history."""

from __future__ import annotations

from dataclasses import asdict, dataclass, field
import json
from pathlib import Path
from typing import Any


@dataclass
class CompanionMemory:
    name: str = "Cyn"
    personality: str = "playful"
    preferences: dict[str, str] = field(default_factory=dict)
    interactions: list[dict[str, str]] = field(default_factory=list)

    def remember(self, sender: str, message: str) -> None:
        self.interactions.append({"sender": sender, "message": message[:500]})
        self.interactions = self.interactions[-50:]


class MemoryStore:
    def __init__(self, path: Path):
        self.path = path

    def load(self) -> CompanionMemory:
        try:
            data: dict[str, Any] = json.loads(self.path.read_text(encoding="utf-8"))
            return CompanionMemory(
                name=str(data.get("name", "Cyn")),
                personality=str(data.get("personality", "playful")),
                preferences=dict(data.get("preferences", {})),
                interactions=list(data.get("interactions", []))[-50:],
            )
        except (OSError, ValueError, TypeError):
            return CompanionMemory()

    def save(self, memory: CompanionMemory) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        temporary = self.path.with_suffix(".tmp")
        temporary.write_text(json.dumps(asdict(memory), indent=2), encoding="utf-8")
        temporary.replace(self.path)
