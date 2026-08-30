"""Tkinter character window and local interactions."""
#cd "/Volumes/Bag O Holdn/Project BuddyBuddy/Actual Code"
# python3 -m buddybuddy.app
from __future__ import annotations

import argparse
from pathlib import Path
import random
import sys
import tkinter as tk
from tkinter import simpledialog
from typing import Callable, TypeVar
import warnings

from cyn_bot import CynBot

from .behavior import Behavior, BehaviorController
from .memory import MemoryStore


GIF_CANDIDATES = {
    Behavior.IDLE: [f"Waiting{number}-CYN.gif" for number in range(1, 10)],
    Behavior.WALK: [f"Walking{number}-CYN.gif" for number in range(1, 7)],
    Behavior.SLEEP: [f"Sitting{number}-CYN.gif" for number in range(1, 4)],
    # There are no dedicated talk/react GIFs yet. Empty candidate lists make
    # load_animation_library deliberately fall back to the idle animations.
    Behavior.TALK: [],
    Behavior.REACT: [],
}
DRAG_GIF = "DragAround-CYN.gif"
ANIMATION_INTERVAL_MS = 100
OVERLAY_COLOR = "#ff00ff"
MACOS_TRANSPARENT_BACKGROUND = "systemTransparent"

Frame = TypeVar("Frame")

def animation_dimensions(animation: list[Frame]) -> tuple[int, int]:
    """Return bounds large enough for every image in an animation."""
    if not animation:
        raise ValueError("An animation must contain at least one frame")
    return max(frame.width() for frame in animation), max(
        frame.height() for frame in animation
    )


def clamp_overlay_position(
    x: int, y: int, overlay_size: tuple[int, int], screen_size: tuple[int, int]
) -> tuple[int, int]:
    """Keep the complete overlay on screen, including oversized overlays."""
    max_x = max(0, screen_size[0] - overlay_size[0])
    max_y = max(0, screen_size[1] - overlay_size[1])
    return max(0, min(max_x, x)), max(0, min(max_y, y))


def _configure_overlay_window(
    window: tk.Tk,
    *,
    platform: str | None = None,
    warn: Callable[[str], object] = warnings.warn,
) -> str:
    """Configure the borderless overlay and return its widget background."""
    window.overrideredirect(True)
    window.attributes("-topmost", True)
    selected_platform = platform or sys.platform
    if selected_platform == "darwin":
        try:
            window.attributes("-transparent", True)
            window.configure(
                bg=MACOS_TRANSPARENT_BACKGROUND, bd=0, highlightthickness=0
            )
        except tk.TclError as error:
            warn(
                "macOS character transparency requires an Aqua Tk build that "
                f"supports -transparent and systemTransparent: {error}"
            )
        return MACOS_TRANSPARENT_BACKGROUND

    window.configure(bg=OVERLAY_COLOR, bd=0, highlightthickness=0)
    if selected_platform.startswith("win"):
        try:
            window.wm_attributes("-transparentcolor", OVERLAY_COLOR)
        except tk.TclError as error:
            warn(f"Character transparency is unavailable: {error}")
    else:
        warn("Character transparency is unavailable on this Tk windowing system.")
    return OVERLAY_COLOR



def choose_animation(
    animations: list[list[Frame]], previous: list[Frame] | None, rng: random.Random
) -> list[Frame]:
    """Choose an animation, excluding the previous object when possible."""
    if not animations:
        raise ValueError("At least one animation is required")
    choices = [animation for animation in animations if animation is not previous]
    return rng.choice(choices or animations)


def sequence_frame(animation: list[Frame], frame_index: int) -> tuple[Frame, int]:
    """Return the current frame and the wrapped index of the following frame."""
    if not animation:
        raise ValueError("An animation must contain at least one frame")
    index = frame_index % len(animation)
    return animation[index], (index + 1) % len(animation)


def load_animation_library(
    candidates: dict[Behavior, list[str]], loader: Callable[[str], list[Frame]]
) -> dict[Behavior, list[list[Frame]]]:
    """Load readable candidates and fill missing actions with a safe animation."""
    loaded = {
        behavior: animations
        for behavior, names in candidates.items()
        if (animations := [frames for name in names if (frames := loader(name))])
    }
    if not loaded:
        return {}
    fallback = loaded.get(Behavior.IDLE, next(iter(loaded.values())))
    return {behavior: loaded.get(behavior, fallback) for behavior in Behavior}


def generate_chat_response(chatbot: CynBot, message: str) -> str:
    """Route BuddyBuddy chat input through the shared cyn_bot engine."""
    return chatbot.respond(message)


class CompanionApp:
    def __init__(
        self,
        root: tk.Tk,
        image_dir: Path,
        store: MemoryStore,
        chatbot: CynBot | None = None,
    ):
        self.root, self.image_dir, self.store = root, image_dir, store
        self.memory = store.load()
        self.chatbot = chatbot or CynBot(
            memory_path=store.path.with_name("cyn_memory.json")
        )
        self.frames = self._load_frames()
        self.drag_animation = self._load_gif(self.image_dir / DRAG_GIF)
        self.animation_rng = random.Random()
        self.previous_animations: dict[Behavior, list[tk.PhotoImage]] = {}
        self.selected_animation = choose_animation(
            self.frames[Behavior.IDLE], None, self.animation_rng
        )
        self.previous_animations[Behavior.IDLE] = self.selected_animation
        self.frame_index = 0
        self.drag_origin: tuple[int, int] | None = None
        self.bubble: tk.Toplevel | None = None
        self.chat: tk.Toplevel | None = None
        self.direction = 1
        self.controller = BehaviorController(self._behavior_changed)

        root.title(self.memory.name)
        overlay_background = _configure_overlay_window(root)
        self._overlay_size = animation_dimensions(self.selected_animation)
        root.geometry(f"{self._overlay_size[0]}x{self._overlay_size[1]}+80+80")

        self.character = tk.Label(
            root,
            bg=overlay_background,
            bd=0,
            borderwidth=0,
            highlightthickness=0,
            padx=0,
            pady=0,
            width=0,
            height=0,
            relief=tk.FLAT,
            cursor="hand2",
        )
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

    @staticmethod
    def _load_gif(path: Path) -> list[tk.PhotoImage]:
        frames = []
        index = 0
        while True:
            try:
                frames.append(tk.PhotoImage(file=str(path), format=f"gif -index {index}"))
            except tk.TclError:
                return frames
            index += 1

    def _load_frames(self) -> dict[Behavior, list[list[tk.PhotoImage]]]:
        loaded = load_animation_library(
            GIF_CANDIDATES, lambda name: self._load_gif(self.image_dir / name)
        )
        if not loaded:
            raise FileNotFoundError(f"No readable GIF animations found in {self.image_dir}")
        return loaded

    def _behavior_changed(self, behavior: Behavior) -> None:
        animations = self.frames[behavior]
        selected = choose_animation(
            animations, self.previous_animations.get(behavior), self.animation_rng
        )
        self.selected_animation = selected
        self.previous_animations[behavior] = selected
        self.frame_index = 0
        self._size_overlay(selected)

    def _size_overlay(self, animation: list[tk.PhotoImage]) -> None:
        """Resize for an animation without moving the overlay unnecessarily."""
        size = animation_dimensions(animation)
        if size == self._overlay_size:
            return
        x, y = clamp_overlay_position(
            self.root.winfo_x(),
            self.root.winfo_y(),
            size,
            (self.root.winfo_screenwidth(), self.root.winfo_screenheight()),
        )
        self._overlay_size = size
        self.root.geometry(f"{size[0]}x{size[1]}+{x}+{y}")

    def _animate(self) -> None:
        animation = (
            self.drag_animation
            if self.drag_origin and self.drag_animation
            else self.selected_animation
        )
        self._size_overlay(animation)
        image, self.frame_index = sequence_frame(animation, self.frame_index)
        self.character.configure(image=image)
        self.character.image = image
        if self.controller.current == Behavior.WALK and not self.drag_origin:
            x, y = self.root.winfo_x(), self.root.winfo_y()
            screen_limit = max(0, self.root.winfo_screenwidth() - self._overlay_size[0])
            if x <= 0 or x >= screen_limit:
                self.direction *= -1
            x, y = clamp_overlay_position(
                x + 4 * self.direction,
                y,
                self._overlay_size,
                (self.root.winfo_screenwidth(), self.root.winfo_screenheight()),
            )
            self.root.geometry(f"+{x}+{y}")
        self.root.after(ANIMATION_INTERVAL_MS, self._animate)

    def _schedule_behavior(self) -> None:
        self.controller.choose_next()
        self.root.after(random.randint(7000, 13000), self._schedule_behavior)

    def _start_drag(self, event: tk.Event) -> None:
        self.drag_origin = (event.x_root - self.root.winfo_x(), event.y_root - self.root.winfo_y())
        self.frame_index = 0

    def _drag(self, event: tk.Event) -> None:
        if self.drag_origin:
            x, y = clamp_overlay_position(
                event.x_root - self.drag_origin[0],
                event.y_root - self.drag_origin[1],
                self._overlay_size,
                (self.root.winfo_screenwidth(), self.root.winfo_screenheight()),
            )
            self.root.geometry(f"+{x}+{y}")

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
        tk.Label(chat, text="Say something to cyn_bot (all replies stay local):").pack(
            padx=12, pady=(12, 4), anchor="w"
        )
        entry = tk.Entry(chat)
        entry.pack(fill="x", padx=12)
        entry.focus_set()

        def send(_event: tk.Event | None = None) -> None:
            message = entry.get().strip()
            if not message:
                return
            self.memory.remember("you", message)
            lowered = message.lower()
            response = generate_chat_response(self.chatbot, message)
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
