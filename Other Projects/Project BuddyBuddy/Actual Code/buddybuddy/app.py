"""Tkinter character window and local interactions."""
#cd "/Volumes/Bag O Holdn/Project BuddyBuddy/Actual Code"
# python3 -m buddybuddy.app
from __future__ import annotations

import argparse
from pathlib import Path
import random
import tkinter as tk
from tkinter import simpledialog

from .behavior import Behavior, BehaviorController
from .memory import MemoryStore


FRAME_NAMES = {
    Behavior.IDLE: ["shime1.png", "shime1_1.png", "shime1_2.png", "shime1_1.png"],
    Behavior.WALK: ["shime25a1.png", "shime25a2.png", "shime25a3.png", "shime25a4.png"],
    Behavior.SLEEP: ["shime41.png", "shime41a.png", "shime41b.png", "shime41c.png"],
    Behavior.TALK: ["shime33a.png", "shime33b.png", "shime33c.png", "shime33d.png"],
    Behavior.REACT: ["shime10.png", "shime10a.png", "shime11.png", "shime10.png"],
}

RESPONSES = {
    "hello": ["Hello!", "Hi there!", "I was hoping you would stop by."],
    "how are you": ["Doing wonderfully pixelated, thanks!", "Ready for an adventure."],
    "help": ["Right-click me for commands. You can also press Ctrl+Shift+B."],
    "sleep": ["All right. Wake me with a click."],
    "thank": ["You're welcome!", "Any time, friend."],
}


class CompanionApp:
    def __init__(self, root: tk.Tk, image_dir: Path, store: MemoryStore):
        self.root, self.image_dir, self.store = root, image_dir, store
        self.memory = store.load()
        self.frames = self._load_frames()
        self.frame_index = 0
        self.drag_origin: tuple[int, int] | None = None
        self.bubble: tk.Toplevel | None = None
        self.chat: tk.Toplevel | None = None
        self.direction = 1
        self.controller = BehaviorController(self._behavior_changed)

        root.title(self.memory.name)
        root.overrideredirect(True)
        root.attributes("-topmost", True)
        root.configure(bg="#ff00ff")
        try:
            root.wm_attributes("-transparentcolor", "#ff00ff")
        except tk.TclError:
            pass
        root.geometry("240x240+80+80")

        self.character = tk.Label(root, bg="#ff00ff", bd=0, cursor="hand2")
        self.character.pack(fill="both", expand=True)
        self.character.bind("<ButtonPress-1>", self._start_drag)
        self.character.bind("<B1-Motion>", self._drag)
        self.character.bind("<ButtonRelease-1>", self._finish_drag)
        self.character.bind("<Double-Button-1>", lambda _event: self.open_chat())
        self.character.bind("<Button-3>", self._show_menu)
        root.bind_all("<Control-Shift-B>", lambda _event: self.open_chat())

        self.menu = tk.Menu(root, tearoff=False)
        self.menu.add_command(label="Talk...", command=self.open_chat)
        self.menu.add_command(label="Walk", command=lambda: self.controller.set(Behavior.WALK))
        self.menu.add_command(label="Sleep", command=lambda: self.controller.set(Behavior.SLEEP))
        self.menu.add_separator()
        self.menu.add_command(label="Rename...", command=self.rename)
        self.menu.add_command(label="Quit", command=self.close)
        self._animate()
        self._schedule_behavior()
        root.protocol("WM_DELETE_WINDOW", self.close)

    def _load_frames(self) -> dict[Behavior, list[tk.PhotoImage]]:
        loaded: dict[Behavior, list[tk.PhotoImage]] = {}
        for behavior, names in FRAME_NAMES.items():
            images = []
            for name in names:
                try:
                    images.append(tk.PhotoImage(file=str(self.image_dir / name)))
                except tk.TclError:
                    continue
            if images:
                loaded[behavior] = images
        if not loaded:
            raise FileNotFoundError(f"No readable PNG sprites found in {self.image_dir}")
        fallback = next(iter(loaded.values()))
        for behavior in Behavior:
            loaded.setdefault(behavior, fallback)
        return loaded

    def _behavior_changed(self, _behavior: Behavior) -> None:
        self.frame_index = 0

    def _animate(self) -> None:
        frames = self.frames[self.controller.current]
        image = frames[self.frame_index % len(frames)]
        self.character.configure(image=image)
        self.frame_index += 1
        if self.controller.current == Behavior.WALK and not self.drag_origin:
            x, y = self.root.winfo_x(), self.root.winfo_y()
            screen_limit = self.root.winfo_screenwidth() - self.root.winfo_width()
            if x <= 0 or x >= screen_limit:
                self.direction *= -1
            self.root.geometry(f"+{max(0, min(screen_limit, x + 4 * self.direction))}+{y}")
        self.root.after(180, self._animate)

    def _schedule_behavior(self) -> None:
        self.controller.choose_next()
        self.root.after(random.randint(7000, 13000), self._schedule_behavior)

    def _start_drag(self, event: tk.Event) -> None:
        self.drag_origin = (event.x_root - self.root.winfo_x(), event.y_root - self.root.winfo_y())

    def _drag(self, event: tk.Event) -> None:
        if self.drag_origin:
            self.root.geometry(f"+{event.x_root - self.drag_origin[0]}+{event.y_root - self.drag_origin[1]}")

    def _finish_drag(self, _event: tk.Event) -> None:
        if self.drag_origin:
            self.drag_origin = None
            self.controller.interact()
            self.say(random.choice(["Wheee!", "New spot!", "Thanks for the lift."]))

    def _show_menu(self, event: tk.Event) -> None:
        self.menu.tk_popup(event.x_root, event.y_root)

    def say(self, message: str) -> None:
        if self.bubble:
            self.bubble.destroy()
        bubble = self.bubble = tk.Toplevel(self.root)
        bubble.overrideredirect(True)
        bubble.attributes("-topmost", True)
        tk.Label(bubble, text=message, bg="#fff8dc", fg="#24202b", padx=12, pady=8,
                 wraplength=240, relief="solid", bd=1).pack()
        bubble.geometry(f"+{self.root.winfo_x()}+{max(0, self.root.winfo_y() - 70)}")
        bubble.after(4000, lambda: bubble.destroy() if bubble.winfo_exists() else None)

    def open_chat(self) -> None:
        if self.chat and self.chat.winfo_exists():
            self.chat.lift()
            return
        chat = self.chat = tk.Toplevel(self.root)
        chat.title(f"Talk to {self.memory.name}")
        chat.geometry("360x130")
        tk.Label(chat, text="Say something (all replies are local rules):").pack(padx=12, pady=(12, 4), anchor="w")
        entry = tk.Entry(chat)
        entry.pack(fill="x", padx=12)
        entry.focus_set()

        def send(_event: tk.Event | None = None) -> None:
            message = entry.get().strip()
            if not message:
                return
            self.memory.remember("you", message)
            lowered = message.lower()
            response = next((random.choice(lines) for key, lines in RESPONSES.items() if key in lowered),
                            random.choice(["Tell me more!", "That sounds interesting.", "I'm listening."]))
            if "sleep" in lowered:
                self.controller.set(Behavior.SLEEP)
            else:
                self.controller.set(Behavior.TALK)
            self.memory.remember(self.memory.name, response)
            self.store.save(self.memory)
            self.say(response)
            entry.delete(0, "end")

        entry.bind("<Return>", send)
        tk.Button(chat, text="Send", command=send).pack(pady=10)

    def rename(self) -> None:
        name = simpledialog.askstring("Companion name", "What should I be called?", initialvalue=self.memory.name)
        if name and name.strip():
            self.memory.name = name.strip()[:40]
            self.root.title(self.memory.name)
            self.store.save(self.memory)
            self.say(f"My name is {self.memory.name} now!")

    def close(self) -> None:
        self.store.save(self.memory)
        self.root.destroy()


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the local BuddyBuddy desktop companion")
    default_images = Path(__file__).resolve().parents[2] / "CYN-images"
    parser.add_argument("--images", type=Path, default=default_images)
    parser.add_argument("--memory", type=Path, default=Path.home() / ".buddybuddy" / "memory.json")
    args = parser.parse_args()
    root = tk.Tk()
    CompanionApp(root, args.images, MemoryStore(args.memory))
    root.mainloop()


if __name__ == "__main__":
    main()
