"""Tkinter character window and local interactions."""
#cd "/Volumes/Bag O Holdn/Project BuddyBuddy/Actual Code"
# python3 -m buddybuddy.app
from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path
import random
import sys
import tkinter as tk
from tkinter import scrolledtext, simpledialog
from typing import Callable, TypeVar
import warnings

from cyn_bot import CynBot
from PIL import Image, ImageOps, ImageTk

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
Animation = TypeVar("Animation")


@dataclass(frozen=True)
class DirectionalAnimation:
    """The source artwork and its transparency-preserving horizontal mirror."""

    original: list[Frame]
    mirrored: list[Frame]


@dataclass(frozen=True)
class OverlayConfiguration:
    """The usable overlay background and its transparency state."""

    background: str
    transparent: bool
    error: str | None = None


def frames_for_direction(
    animation: DirectionalAnimation,
    facing: int,
    *,
    directional: bool = True,
) -> list[Frame]:
    """Select a facing without coupling it to animation frame progression."""
    if directional and facing > 0:
        return animation.mirrored
    return animation.original


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


def next_horizontal_position(
    x: int, sprite_width: int, screen_width: int, direction: int
) -> tuple[int, int]:
    """Return the next bounded x position and facing for one walking step."""
    right_edge = max(0, screen_width - sprite_width)
    facing = -1 if direction < 0 else 1
    if x <= 0 and facing < 0:
        facing = 1
    elif x >= right_edge and facing > 0:
        facing = -1
    next_x = max(0, min(right_edge, x + 4 * facing))
    return next_x, facing


def _configure_overlay_window(
    window: tk.Tk,
    *,
    backend: str | None = None,
    warn: Callable[[str], object] = warnings.warn,
    character_factory: Callable[..., tk.Widget] = tk.Label,
    report: Callable[[str, str], object] | None = None,
) -> OverlayConfiguration:
    """Configure the borderless overlay and report what is actually usable."""
    def configured(operation: str, action: Callable[[], object]) -> object:
        try:
            result = action()
        except tk.TclError as error:
            if report is not None:
                report(operation, f"ERROR: {error}")
            raise
        if report is not None:
            report(operation, "OK")
        return result

    window.overrideredirect(True)
    window.attributes("-topmost", True)
    selected_backend = backend or str(window.tk.call("tk", "windowingsystem"))
    tk_patch_level = str(window.tk.call("info", "patchlevel"))
    if selected_backend == "aqua":
        probe: tk.Widget | None = None
        operation = (
            "window.configure(bg='systemTransparent', bd=0, "
            "highlightthickness=0)"
        )
        try:
            configured(
                operation,
                lambda: window.configure(
                    bg=MACOS_TRANSPARENT_BACKGROUND, bd=0, highlightthickness=0
                ),
            )
            operation = "tk.Label(window, bg='systemTransparent')"
            probe = configured(
                operation,
                lambda: character_factory(window, bg=MACOS_TRANSPARENT_BACKGROUND),
            )
            operation = "window.attributes('-transparent', True)"
            configured(operation, lambda: window.attributes("-transparent", True))
        except tk.TclError as error:
            failure = f"{operation}: {error}"
            warning = (
                "macOS character transparency requires an Aqua Tk build; "
                f"failed operation {failure}"
            )
            warn(warning)
            print(
                "BuddyBuddy transparency diagnostic: "
                f"tk windowingsystem={window.tk.call('tk', 'windowingsystem')}; "
                f"Tk patch level={window.tk.call('info', 'patchlevel')}; "
                f"Python executable={sys.executable}; transparency error={failure}",
                file=sys.stderr,
            )
            configured(
                "window.configure(bg='#ff00ff', bd=0, highlightthickness=0)",
                lambda: window.configure(bg=OVERLAY_COLOR, bd=0, highlightthickness=0),
            )
            return OverlayConfiguration(OVERLAY_COLOR, False, failure)
        finally:
            if probe is not None:
                probe.destroy()
        return OverlayConfiguration(MACOS_TRANSPARENT_BACKGROUND, True)

    configured(
        "window.configure(bg='#ff00ff', bd=0, highlightthickness=0)",
        lambda: window.configure(bg=OVERLAY_COLOR, bd=0, highlightthickness=0),
    )
    transparency_error = None
    transparent = False
    if selected_backend == "win32":
        try:
            configured(
                "window.wm_attributes('-transparentcolor', '#ff00ff')",
                lambda: window.wm_attributes("-transparentcolor", OVERLAY_COLOR),
            )
            transparent = True
        except tk.TclError as error:
            transparency_error = str(error)
            warn(f"Character transparency is unavailable: {error}")
    else:
        warn(
            "Character transparency is unavailable on this Tk windowing system: "
            f"backend={selected_backend}; Tk patch level={tk_patch_level}."
        )
    return OverlayConfiguration(OVERLAY_COLOR, transparent, transparency_error)


def _create_character_label(root: tk.Tk, background: str) -> tk.Label:
    """Build the real character widget used by both the app and diagnostic."""
    return tk.Label(
        root, bg=background, bd=0, borderwidth=0, highlightthickness=0,
        padx=0, pady=0, width=0, height=0, relief=tk.FLAT, cursor="hand2",
    )


def choose_animation(
    animations: list[Animation], previous: Animation | None, rng: random.Random
) -> Animation:
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


def mirror_rgba_frames(frames: list[Image.Image]) -> list[Image.Image]:
    """Return horizontal copies of RGBA frames, including their alpha channels."""
    return [ImageOps.mirror(frame.convert("RGBA")) for frame in frames]


def _read_gif_frames(path: Path) -> tuple[list[Image.Image], list[int]]:
    """Read GIF frames independently of mirroring and retain frame durations."""
    frames: list[Image.Image] = []
    durations: list[int] = []
    with Image.open(path) as image:
        for index in range(getattr(image, "n_frames", 1)):
            image.seek(index)
            frames.append(image.convert("RGBA").copy())
            durations.append(max(1, int(image.info.get("duration", ANIMATION_INTERVAL_MS))))
    return frames, durations


def _set_frame_duration(frame: Frame, duration: int) -> Frame:
    """Attach source timing to a Tk image without wrapping the Tk object."""
    setattr(frame, "buddybuddy_duration_ms", duration)
    return frame


def frame_duration(frame: Frame) -> int:
    """Return a loaded frame's GIF duration, with a safe legacy default."""
    return int(getattr(frame, "buddybuddy_duration_ms", ANIMATION_INTERVAL_MS))


def load_animation_library(
    candidates: dict[Behavior, list[str]],
    loader: Callable[[str], DirectionalAnimation],
) -> dict[Behavior, list[DirectionalAnimation]]:
    """Load readable candidates and fill missing actions with a safe animation."""
    loaded = {
        behavior: animations
        for behavior, names in candidates.items()
        if (
            animations := [
                frames for name in names if (frames := loader(name)).original
            ]
        )
    }
    if not loaded:
        return {}
    fallback = loaded.get(Behavior.IDLE, next(iter(loaded.values())))
    return {behavior: loaded.get(behavior, fallback) for behavior in Behavior}


def generate_chat_response(chatbot: CynBot, message: str) -> str:
    """Route BuddyBuddy chat input through the shared cyn_bot engine."""
    return chatbot.respond(message)


def format_chat_entry(speaker: str, message: str) -> str:
    """Format one transcript entry without depending on a presentation toolkit."""
    return f"{speaker}: {message.strip()}\n\n"


@dataclass(frozen=True)
class ChatExchange:
    """The outcome of submitting one message to a chat responder."""

    response: str | None = None
    error: str | None = None


class ChatHistoryController:
    """Send chat messages while publishing every outcome to a transcript sink."""

    def __init__(
        self,
        append: Callable[[str], object],
        respond: Callable[[str], str],
        *,
        bot_name: str = "CYN",
    ):
        self.append = append
        self.respond = respond
        self.bot_name = bot_name

    def send(self, message: str) -> ChatExchange:
        """Append the user entry before generating and then append the outcome."""
        self.append(format_chat_entry("You", message))
        try:
            response = self.respond(message)
        except Exception as error:
            readable_error = f"I couldn't respond: {error}"
            self.append(format_chat_entry(self.bot_name, readable_error))
            return ChatExchange(error=readable_error)
        self.append(format_chat_entry(self.bot_name, response))
        return ChatExchange(response=response)


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
        self.previous_animations: dict[Behavior, DirectionalAnimation] = {}
        self.selected_animation = choose_animation(
            self.frames[Behavior.IDLE], None, self.animation_rng
        )
        self.previous_animations[Behavior.IDLE] = self.selected_animation
        self.frame_index = 0
        self.drag_origin: tuple[int, int] | None = None
        self.bubble: tk.Toplevel | None = None
        self.chat: tk.Toplevel | None = None
        # The supplied walking artwork faces left. Movement and facing are kept
        # separate so advancing a GIF never implicitly changes orientation.
        self.direction = -1
        self.facing = -1
        self.controller = BehaviorController(self._behavior_changed)

        root.title(self.memory.name)
        overlay = _configure_overlay_window(root)
        overlay_background = (
            overlay.background if overlay.transparent else OVERLAY_COLOR
        )
        self._overlay_size = animation_dimensions(self.selected_animation.original)
        root.geometry(f"{self._overlay_size[0]}x{self._overlay_size[1]}+80+80")

        self.character = _create_character_label(root, overlay_background)
        self.character.pack(fill="both", expand=True)
        self.character.bind("<ButtonPress-1>", self._start_drag)
        self.character.bind("<B1-Motion>", self._drag)
        self.character.bind("<ButtonRelease-1>", self._finish_drag)
        self.character.bind("<Double-Button-1>", lambda _event: self.open_chat())
        self.character.bind("<Button-3>", self._show_menu)
        self.character.bind("<Control-Button-1>", self._show_menu)
        root.bind_all("<Control-Shift-B>", lambda _event: self.open_chat())

        self.menu = tk.Menu(root, tearoff=False)
        self.menu.add_command(label="Talk...", command=self.open_chat)
        self.menu.add_command(label="Walk", command=self._start_walking)
        self.menu.add_command(label="Sleep", command=lambda: self.controller.set(Behavior.SLEEP))
        self.menu.add_separator()
        self.menu.add_command(label="Rename...", command=self.rename)
        self.menu.add_command(label="Quit", command=self.close)
        self._animate()
        self._schedule_behavior()
        root.protocol("WM_DELETE_WINDOW", self.close)

    @staticmethod
    def _load_gif(path: Path) -> DirectionalAnimation:
        """Load an animation, then mirror it as a separate, recoverable step."""
        try:
            rgba_frames, durations = _read_gif_frames(path)
        except (OSError, ValueError):
            return DirectionalAnimation([], [])

        original = [
            _set_frame_duration(ImageTk.PhotoImage(frame), duration)
            for frame, duration in zip(rgba_frames, durations)
        ]
        try:
            mirrored_rgba = mirror_rgba_frames(rgba_frames)
            mirrored = [
                _set_frame_duration(ImageTk.PhotoImage(frame), duration)
                for frame, duration in zip(mirrored_rgba, durations)
            ]
        except Exception as error:
            # A broken mirror must not make otherwise readable artwork prevent
            # the companion from launching. Both facings use the originals.
            warnings.warn(
                f"Could not mirror animation {path}: {error}; using original frames",
                RuntimeWarning,
            )
            mirrored = original
        return DirectionalAnimation(original, mirrored)

    def _load_frames(self) -> dict[Behavior, list[DirectionalAnimation]]:
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
        self._size_overlay(selected.original)

    def _start_walking(self) -> None:
        """Start an explicitly requested walk toward the left when possible."""
        self.direction = 1 if self.root.winfo_x() <= 0 else -1
        self.facing = self.direction
        self.controller.set(Behavior.WALK)

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
        walking = self.controller.current == Behavior.WALK and not self.drag_origin
        if walking:
            x = self.root.winfo_x()
            next_x, self.direction = next_horizontal_position(
                x,
                self._overlay_size[0],
                self.root.winfo_screenwidth(),
                self.direction,
            )
            self.facing = self.direction

        dragging = bool(self.drag_origin and self.drag_animation.original)
        selected = self.drag_animation if dragging else self.selected_animation
        animation = frames_for_direction(
            selected,
            self.facing,
            directional=dragging or self.controller.current == Behavior.WALK,
        )
        self._size_overlay(animation)
        image, self.frame_index = sequence_frame(animation, self.frame_index)
        self.character.configure(image=image)
        self.character.image = image
        if walking:
            _, y = clamp_overlay_position(
                next_x,
                self.root.winfo_y(),
                self._overlay_size,
                (self.root.winfo_screenwidth(), self.root.winfo_screenheight()),
            )
            self.root.geometry(f"+{next_x}+{y}")
        self.root.after(frame_duration(image), self._animate)

    def _schedule_behavior(self) -> None:
        self.controller.choose_next()
        self.root.after(random.randint(7000, 13000), self._schedule_behavior)

    def _start_drag(self, event: tk.Event) -> None:
        self.drag_origin = (event.x_root - self.root.winfo_x(), event.y_root - self.root.winfo_y())
        self.frame_index = 0

    def _drag(self, event: tk.Event) -> None:
        if self.drag_origin:
            previous_x = self.root.winfo_x()
            requested_x = event.x_root - self.drag_origin[0]
            x, y = clamp_overlay_position(
                requested_x,
                event.y_root - self.drag_origin[1],
                self._overlay_size,
                (self.root.winfo_screenwidth(), self.root.winfo_screenheight()),
            )
            if x != previous_x:
                self.facing = 1 if x > previous_x else -1
            self.root.geometry(f"+{x}+{y}")

    def _finish_drag(self, _event: tk.Event) -> None:
        if self.drag_origin:
            self.drag_origin = None
            self.controller.interact()
            self.say(random.choice(["Wheee!", "New spot!", "Thanks for the lift."]))

    def _show_menu(self, event: tk.Event) -> str:
        # Retain the triggering sequence as a lightweight interaction diagnostic.
        control_click = event.num == 1 and bool(event.state & 0x4)
        self.last_contextual_click = (
            "<Control-Button-1>" if control_click else "<Button-3>"
        )
        self.menu.tk_popup(event.x_root, event.y_root)
        # In particular, prevent Control-Button-1 from continuing into drag handling.
        return "break"

    def say(self, message: str) -> None:
        previous_bubble = self.bubble
        if previous_bubble is not None:
            try:
                previous_exists = bool(previous_bubble.winfo_exists())
            except tk.TclError:
                previous_exists = False
            if previous_exists:
                try:
                    previous_bubble.destroy()
                except tk.TclError:
                    pass
        bubble = self.bubble = tk.Toplevel(self.root)
        bubble.overrideredirect(True)
        bubble.attributes("-topmost", True)
        tk.Label(bubble, text=message, bg="#fff8dc", fg="#24202b", padx=12, pady=8,
                 wraplength=240, relief="solid", bd=1).pack()
        bubble.geometry(f"+{self.root.winfo_x()}+{max(0, self.root.winfo_y() - 70)}")

        def close_bubble() -> None:
            # A callback belonging to an older bubble must not close its replacement.
            if self.bubble is not bubble:
                return
            try:
                bubble_exists = bool(bubble.winfo_exists())
            except tk.TclError:
                bubble_exists = False
            if bubble_exists:
                try:
                    bubble.destroy()
                except tk.TclError:
                    pass
            self.bubble = None

        bubble.after(4000, close_bubble)

    def open_chat(self) -> None:
        if self.chat and self.chat.winfo_exists():
            self.chat.lift()
            return
        chat = self.chat = tk.Toplevel(self.root)
        chat.title(f"Talk to {self.memory.name} — Local rule-based bot")
        chat.geometry("520x420")
        tk.Label(
            chat,
            text="LOCAL RULE-BASED BOT · NO GENERATIVE MODEL\n"
            "Replies use built-in patterns and stay on this device.",
            justify="left",
        ).pack(
            padx=12, pady=(12, 4), anchor="w"
        )
        history = scrolledtext.ScrolledText(
            chat, wrap="word", height=16, state="disabled", takefocus=False
        )
        history.pack(fill="both", expand=True, padx=12, pady=(0, 8))

        def append_history(text: str) -> None:
            history.configure(state="normal")
            history.insert("end", text)
            history.configure(state="disabled")
            history.see("end")
            # Make the user's entry visible before a potentially slow response.
            history.update_idletasks()

        history_controller = ChatHistoryController(
            append_history,
            lambda message: generate_chat_response(self.chatbot, message),
        )
        entry = tk.Entry(chat)
        entry.pack(fill="x", padx=12)
        entry.focus_set()

        def send(_event: tk.Event | None = None) -> None:
            message = entry.get().strip()
            if not message:
                return
            self.memory.remember("you", message)
            self.store.save(self.memory)
            lowered = message.lower()
            exchange = history_controller.send(message)
            entry.delete(0, "end")
            if exchange.error is not None:
                return
            response = exchange.response
            assert response is not None
            if "sleep" in lowered:
                self.controller.set(Behavior.SLEEP)
            else:
                self.controller.set(Behavior.TALK)
            self.memory.remember(self.memory.name, response)
            self.store.save(self.memory)
            # The bubble remains a secondary, temporary presentation.
            self.say(response)

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


def run_diagnostic(image_dir: Path) -> bool:
    """Exercise the real Tk overlay and a real artwork frame on this machine."""
    root: tk.Tk | None = None
    completed = False
    try:
        root = tk.Tk()
        print(f"BuddyBuddy diagnostic: tk windowingsystem={root.tk.call('tk', 'windowingsystem')}")
        print(f"BuddyBuddy diagnostic: Tk patch level={root.tk.call('info', 'patchlevel')}")

        def report(operation: str, result: str) -> None:
            print(f"BuddyBuddy diagnostic: transparency {operation}: {result}")

        overlay = _configure_overlay_window(root, report=report)
        background = overlay.background if overlay.transparent else OVERLAY_COLOR
        gif_path = image_dir / GIF_CANDIDATES[Behavior.IDLE][0]
        frame = tk.PhotoImage(file=str(gif_path), format="gif -index 0")
        label_operation = f"character label background={background!r}"
        try:
            character = _create_character_label(root, background)
        except tk.TclError as error:
            report(label_operation, f"ERROR: {error}")
            raise
        report(label_operation, "OK")
        character.configure(image=frame)
        character.image = frame
        character.pack(fill="both", expand=True)
        root.geometry(f"{frame.width()}x{frame.height()}+80+80")
        root.update_idletasks()
        root.update()
        print(f"BuddyBuddy diagnostic: loaded GIF frame={gif_path}")
        old_x = root.winfo_x()
        new_x, facing = next_horizontal_position(
            old_x, frame.width(), root.winfo_screenwidth(), -1
        )
        selected_frames = "mirrored" if facing > 0 else "original"
        print(
            "BuddyBuddy diagnostic: "
            f"behavior={Behavior.WALK.value} old_x={old_x} new_x={new_x} "
            f"direction={facing} facing={facing} frames={selected_frames}"
        )
        completed = True
        # Let a person inspect the genuine Aqua overlay before it self-closes.
        if sys.platform == "darwin":
            root.after(2000, root.destroy)
            root.mainloop()
        return True
    except Exception as error:
        print(f"BuddyBuddy diagnostic: initialization error={error}", file=sys.stderr)
        return False
    finally:
        print(f"BuddyBuddy diagnostic: initialization completed={str(completed).lower()}")
        if root is not None:
            try:
                if root.winfo_exists():
                    root.destroy()
            except tk.TclError:
                pass


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the local BuddyBuddy desktop companion")
    default_images = Path(__file__).resolve().parents[2] / "CYN-images"
    parser.add_argument("--images", type=Path, default=default_images)
    parser.add_argument("--memory", type=Path, default=Path.home() / ".buddybuddy" / "memory.json")
    parser.add_argument(
        "--diagnose", action="store_true",
        help="open a real temporary overlay and report Tk transparency support",
    )
    args = parser.parse_args()
    if args.diagnose:
        raise SystemExit(0 if run_diagnostic(args.images) else 1)
    root = tk.Tk()
    CompanionApp(root, args.images, MemoryStore(args.memory))
    root.mainloop()


if __name__ == "__main__":
    main()
