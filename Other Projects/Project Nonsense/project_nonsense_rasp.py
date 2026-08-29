#!/usr/bin/env python3
"""
project_nonsense_rasp.py

Raspberry Pi / Linux version of project_nonsense_player_tv_time_dynamic.py.

What changed from the Mac version:
- Uses Raspberry Pi / Linux-style video folders instead of /Volumes/...
- Uses VLC/cvlc only. QuickTime Player and AppleScript are removed.
- Finds common Raspberry Pi VLC locations automatically.
- Uses optional global hotkeys through pynput when available.
- Falls back to basic terminal hotkeys if pynput is not installed.

Hotkeys:
- `  stop the program
- |  skip the current clip
- _  toggle fullscreen preference

Tip:
Set PROJECT_NONSENSE_BASE if your drive mounts somewhere different:
export PROJECT_NONSENSE_BASE="/media/pi/Bag O Holdn/Videos (Project Nonsense)"
python3 project_nonsense_rasp.py
"""

import os
import random
import select
import shutil
import subprocess
import sys
import termios
import threading
import time
import tty
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Tuple, Union

try:
    from pynput import keyboard as pynput_keyboard
except Exception:
    pynput_keyboard = None


# =====================
# CONFIG VARIABLES
# =====================

# The script will try these base folders in order.
# The chosen base folder should contain two folders named TV and Movies.
DEFAULT_USER = os.environ.get("USER", "pi")
PROJECT_NONSENSE_BASE_CANDIDATES = [
    os.environ.get("PROJECT_NONSENSE_BASE"),
    f"/media/{DEFAULT_USER}/Bag O Holdn/Videos (Project Nonsense)",
    "/media/pi/Bag O Holdn/Videos (Project Nonsense)",
    "/mnt/Bag O Holdn/Videos (Project Nonsense)",
    str(Path.home() / "Videos (Project Nonsense)"),
    "/Volumes/Bag O Holdn/Videos (Project Nonsense)",  # kept as a last-resort fallback
]

# These are the file types the script will treat as videos.
VIDEO_EXTENSIONS = (".mp4", ".mkv", ".avi", ".mov", ".m4v", ".webm")

# Remember the last few clips so the same clip is not chosen again too soon.
REPEAT_HISTORY = 892

# Wait this many seconds after a clip ends before starting the next one.
DELAY_BETWEEN_CLIPS = 0.5

# Special value used when the user chooses dynamic TV Time mode.
TV_TIME_CHOICE = "__TV_TIME__"

# Start videos fullscreen by default.
FULLSCREEN_BY_DEFAULT = True

# Show folders that can be included in TV playback.
# These names can be exact folder names, but the script also tries a forgiving
# case-insensitive/punctuation-insensitive folder match on Raspberry Pi.
SHOW_OPTIONS = [
    "Arcane",
    "Azumanga Daioh",
    "Batman Brave n Bold",
    "Bluey",
    "Delicious in Dungeon",
    "Epithet Erased",
    "Gwain Saga Episodes",
    "Huanted Hotel",
    "Justice League",
    "Justice League Unlimited",
    "Gravity falls",
    "Kid Cosmic",
    "Kirby: Right Back At Ya!",
    "Konosuba",
    "Murder Drones",
    "Owl House",
    "Phineas and Ferb",
    "Ranma",
    "Ranma 2024",
    "Sailor Moon",
    "The Amazing Digital Circus",
    "The Apothecary Diaries",
    "Win or Lose",
    "Youtube",
    "Zombie Land Saga",
]

# Anime-only preset built from SHOW_OPTIONS names.
ANIME_SHOWS = [
    "Arcane",
    "Azumanga Daioh",
    "Delicious in Dungeon",
    "Huanted Hotel",
    "Konosuba",
    "Ranma",
    "Ranma 2024",
    "Sailor Moon",
    "The Apothecary Diaries",
    "Zombie Land Saga",
]

# Cartoon-only preset built from SHOW_OPTIONS names.
CARTOON_SHOWS = [
    "Batman Brave n Bold",
    "Bluey",
    "Gravity falls",
    "Justice League",
    "Justice League Unlimited",
    "Kid Cosmic",
    "Kirby: Right Back At Ya!",
    "Owl House",
    "Phineas and Ferb",
    "Win or Lose",
]

# Indie-only preset built from SHOW_OPTIONS names.
INDIE_SHOWS = [
    "Epithet Erased",
    "Gwain Saga Episodes",
    "Murder Drones",
    "The Amazing Digital Circus",
    "Youtube",
]


# =====================
# PATH FINDERS
# =====================

def find_project_nonsense_base() -> Path:
    """
    Find the folder that contains the TV and Movies folders.
    """
    cleaned_candidates = [Path(path).expanduser() for path in PROJECT_NONSENSE_BASE_CANDIDATES if path]

    for base_folder in cleaned_candidates:
        if (base_folder / "TV").is_dir() and (base_folder / "Movies").is_dir():
            return base_folder

    # If no candidate is perfect, return the first realistic Raspberry Pi path.
    # The debug output below will make the missing folder obvious.
    return Path(f"/media/{DEFAULT_USER}/Bag O Holdn/Videos (Project Nonsense)")


def find_vlc_path() -> Optional[str]:
    """
    Try several ways to find VLC on Raspberry Pi / Linux.
    """
    for command in ("vlc", "cvlc"):
        found = shutil.which(command)
        if found:
            return found

    common_locations = [
        "/usr/bin/vlc",
        "/usr/bin/cvlc",
        "/usr/local/bin/vlc",
        "/usr/local/bin/cvlc",
        "/snap/bin/vlc",
    ]

    for location in common_locations:
        if os.path.exists(location):
            return location

    return None


BASE_FOLDER = find_project_nonsense_base()
TV_FOLDER = BASE_FOLDER / "TV"
MOVIE_FOLDER = BASE_FOLDER / "Movies"
VLC_PATH = find_vlc_path()


# =====================
# DEBUG INFO
# =====================

print("project_nonsense_rasp starting...")
print("BASE_FOLDER:", BASE_FOLDER)
print("TV_FOLDER:", TV_FOLDER)
print("MOVIE_FOLDER:", MOVIE_FOLDER)
print("TV exists:", TV_FOLDER.exists())
print("Movie exists:", MOVIE_FOLDER.exists())
print("VLC_PATH:", VLC_PATH)
print("VLC exists:", os.path.exists(VLC_PATH) if VLC_PATH else False)
print("Player plan:", "Use VLC/cvlc on Raspberry Pi / Linux")
print("Hotkeys:", "backtick: stop program | |: skip clip | _: toggle fullscreen preference")
print("Optional:", "install pynput for global hotkeys; terminal fallback is built in")


# =====================
# LOAD VIDEO LISTS
# =====================

def get_videos(folder: Path) -> List[str]:
    """
    Go through a folder and all subfolders.
    Collect every video file that matches the allowed extensions.
    Skip hidden junk files like ._Encanto.mp4.
    """
    videos: List[str] = []

    if not folder.is_dir():
        return videos

    for root, dirs, files in os.walk(folder):
        # Skip hidden directories.
        dirs[:] = [directory for directory in dirs if not directory.startswith(".")]

        for file in files:
            if file.startswith(".") or file.startswith("._"):
                continue

            if file.lower().endswith(VIDEO_EXTENSIONS):
                videos.append(str(Path(root) / file))

    return videos


def normalize_folder_name(name: str) -> str:
    """
    Make folder names easier to match across small spelling/capitalization differences.
    Example: 'Justice League: Unlimited' and 'Justice League Unlimited' match.
    """
    return "".join(character.lower() for character in name if character.isalnum())


def resolve_show_folder(show_name: str) -> Optional[Path]:
    """
    Return the actual folder path for a show.
    First tries an exact match, then a forgiving match.
    """
    exact_path = TV_FOLDER / show_name
    if exact_path.is_dir():
        return exact_path

    if not TV_FOLDER.is_dir():
        return None

    wanted = normalize_folder_name(show_name)
    for child in TV_FOLDER.iterdir():
        if child.is_dir() and normalize_folder_name(child.name) == wanted:
            return child

    return None


def choose_tv_shows() -> Union[List[str], str]:
    """
    Ask the user which show folders should be included.
    Return chosen show names from SHOW_OPTIONS or a preset group.
    """
    print("\nChoose which TV shows to include before playback starts.")
    print("Type one or more numbers separated by commas, example: 1,4,9.")
    print("Type 'all' to include every show option.\n")
    print("Type 'cartoon' to run only cartoon shows.")
    print("Type 'anime' to run only anime shows.")
    print("Type 'indie' to run only indie shows.")
    print("Type 'tv time' to auto-pick by current time: cartoon after 5 AM, indie after 1 PM, anime after 7 PM.\n")

    for index, show_name in enumerate(SHOW_OPTIONS, start=1):
        print(f"{index}. {show_name}")

    while True:
        raw_choice = input("\nWhich shows should run? ").strip()
        lowered = raw_choice.lower()

        if lowered == "all":
            return SHOW_OPTIONS[:]
        if lowered == "cartoon":
            return CARTOON_SHOWS[:]
        if lowered == "anime":
            return ANIME_SHOWS[:]
        if lowered == "indie":
            return INDIE_SHOWS[:]
        if lowered == "tv time":
            print("\nTV Time mode selected. The clock will be checked before each TV clip.")
            return TV_TIME_CHOICE

        selected_indexes = []
        valid = True

        for piece in raw_choice.split(","):
            item = piece.strip()
            if not item.isdigit():
                valid = False
                break

            number = int(item)
            if number < 1 or number > len(SHOW_OPTIONS):
                valid = False
                break

            selected_indexes.append(number - 1)

        if not valid or not selected_indexes:
            print("Invalid choice. Enter numbers like 1,3,5 or type 'all', 'cartoon', 'anime', 'indie', or 'tv time'.")
            continue

        # Preserve order while removing duplicates.
        unique_indexes = list(dict.fromkeys(selected_indexes))
        return [SHOW_OPTIONS[i] for i in unique_indexes]


def choose_tv_time_preset() -> Tuple[str, List[str]]:
    """
    Decide which preset should run for TV Time based on local clock time.
    """
    current_hour = datetime.now().hour

    if current_hour >= 19 or current_hour < 5:
        return "anime", ANIME_SHOWS[:]
    if current_hour >= 13:
        return "indie", INDIE_SHOWS[:]
    return "cartoon", CARTOON_SHOWS[:]


def get_tv_videos_from_selected_shows(selected_shows: List[str]) -> List[str]:
    """
    Load TV videos from only the show folders selected by the user.
    """
    videos: List[str] = []
    missing_folders: List[str] = []

    for show_name in selected_shows:
        show_folder = resolve_show_folder(show_name)
        if show_folder:
            videos.extend(get_videos(show_folder))
        else:
            missing_folders.append(str(TV_FOLDER / show_name))

    if missing_folders:
        print("\nThese selected show folders were not found:")
        for folder in missing_folders:
            print("-", folder)

    return videos


# =====================
# GLOBAL STATE
# =====================

selected_tv_shows: Union[List[str], str] = []
tv_time_enabled = False
current_tv_time_preset: Optional[str] = None
tv_videos: List[str] = []
movie_videos: List[str] = []

stop_program = False
skip_current_video = False
current_process: Optional[subprocess.Popen] = None
fullscreen_enabled = FULLSCREEN_BY_DEFAULT


# =====================
# TV TIME HELPERS
# =====================

def refresh_tv_time_videos_if_needed(force: bool = False) -> None:
    """
    In TV Time mode, check the system clock and switch presets when needed.
    This runs before every TV clip, so crossing 1 PM or 7 PM changes the next clip.
    """
    global selected_tv_shows, tv_videos, current_tv_time_preset

    if not tv_time_enabled:
        return

    preset_name, preset_shows = choose_tv_time_preset()

    # The clock is checked every time, but the folders are only rescanned
    # when the preset actually changes. This keeps it fast on Raspberry Pi.
    if force or preset_name != current_tv_time_preset:
        current_tv_time_preset = preset_name
        selected_tv_shows = preset_shows
        tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)

        print(f"\nTV Time clock check: now using {preset_name} shows.")
        print("Selected shows:")
        for show in selected_tv_shows:
            print("-", show)
        print("TV videos found:", len(tv_videos))


def get_tv_to_movie_ratio() -> int:
    """
    Make TV-vs-movie playback proportional to the current TV preset.
    Example: 220 TV clips and 10 movie clips = 22 TV clips per 1 movie clip.
    """
    if not movie_videos:
        return 1
    return max(1, round(len(tv_videos) / len(movie_videos)))


# =====================
# HOTKEY HANDLING
# =====================

def stop_current_process() -> None:
    """
    Stop VLC gracefully, then force-kill it if needed.
    """
    global current_process

    if not current_process or current_process.poll() is not None:
        return

    current_process.terminate()
    try:
        current_process.wait(timeout=3)
    except subprocess.TimeoutExpired:
        current_process.kill()
        current_process.wait(timeout=3)


def toggle_fullscreen_preference() -> None:
    """
    Toggle fullscreen for future clips.
    If xdotool is installed and VLC currently has focus, also send VLC its 'f' fullscreen hotkey.
    """
    global fullscreen_enabled

    fullscreen_enabled = not fullscreen_enabled
    print("Fullscreen preference:", "ON" if fullscreen_enabled else "OFF")

    xdotool_path = shutil.which("xdotool")
    if xdotool_path and current_process and current_process.poll() is None:
        subprocess.run([xdotool_path, "key", "f"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
    elif current_process and current_process.poll() is None:
        print("Install xdotool if you want '_' to toggle fullscreen during the current clip.")


def handle_hotkey_character(character: str) -> bool:
    """
    Handle one-character hotkeys.
    Return False when the keyboard listener should stop.
    """
    global stop_program, skip_current_video

    if character == "`":
        print("Backtick pressed! Stopping program...")
        stop_program = True
        stop_current_process()
        return False

    if character == "|":
        print("Pipe pressed! Skipping current clip...")
        skip_current_video = True
        stop_current_process()
        return True

    if character == "_":
        toggle_fullscreen_preference()
        return True

    return True


def start_pynput_keyboard_listener():
    """
    Start a global keyboard listener when pynput is available.
    This works best on Raspberry Pi Desktop with the needed permissions.
    """
    if not pynput_keyboard:
        return None

    def on_press(key):
        try:
            return handle_hotkey_character(key.char)
        except AttributeError:
            return True

    try:
        listener = pynput_keyboard.Listener(on_press=on_press)
        listener.daemon = True
        listener.start()
        print("Keyboard listener:", "pynput global hotkeys enabled")
        return listener
    except Exception as error:
        print("pynput keyboard listener could not start:", error)
        return None


def terminal_keyboard_loop() -> None:
    """
    Fallback keyboard listener using only Python's standard library.
    This usually works when the terminal keeps focus, such as over SSH.
    """
    if not sys.stdin.isatty():
        print("Terminal hotkeys unavailable because stdin is not a TTY.")
        return

    old_settings = termios.tcgetattr(sys.stdin)
    try:
        tty.setcbreak(sys.stdin.fileno())
        while not stop_program:
            readable, _, _ = select.select([sys.stdin], [], [], 0.2)
            if readable:
                character = sys.stdin.read(1)
                keep_listening = handle_hotkey_character(character)
                if not keep_listening:
                    break
    except Exception as error:
        print("Terminal keyboard listener stopped:", error)
    finally:
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old_settings)


def start_keyboard_controls() -> None:
    """
    Prefer pynput global hotkeys. Use terminal hotkeys as a no-extra-installs fallback.
    """
    listener = start_pynput_keyboard_listener()
    if listener:
        return

    print("Keyboard listener:", "using terminal fallback hotkeys")
    thread = threading.Thread(target=terminal_keyboard_loop, daemon=True)
    thread.start()


# =====================
# PLAYER FUNCTIONS
# =====================

def play_with_vlc(video: str) -> None:
    """
    Launch VLC directly and wait until the chosen video finishes.
    """
    global current_process, skip_current_video

    if not VLC_PATH:
        print("VLC was not found. Install it with: sudo apt install vlc")
        return

    skip_current_video = False

    vlc_args = [
        VLC_PATH,
        "--play-and-exit",
        "--no-video-title-show",
    ]

    if fullscreen_enabled:
        vlc_args.append("--fullscreen")

    vlc_args.append(video)

    current_process = subprocess.Popen(
        vlc_args,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    while not stop_program:
        if skip_current_video:
            stop_current_process()
            break

        if current_process.poll() is not None:
            break

        time.sleep(0.2)


def play_video(video: str) -> None:
    """
    Play one video with VLC.
    """
    global current_process

    print("Playing:", video)

    try:
        play_with_vlc(video)
    except Exception as error:
        print(f"Failed to play {video}: {error}")
    finally:
        current_process = None
        time.sleep(DELAY_BETWEEN_CLIPS)


def choose_video(videos: List[str], history: List[str]) -> str:
    """
    Pick a random video that is not in the recent-history list.
    If every video is in history, clear history and start fresh.
    """
    choices = [video for video in videos if video not in history]
    if not choices:
        history.clear()
        choices = videos[:]

    video = random.choice(choices)
    history.append(video)

    while len(history) > REPEAT_HISTORY:
        history.pop(0)

    return video


# =====================
# MAIN LOOP
# =====================

def main() -> None:
    global selected_tv_shows, tv_time_enabled, tv_videos, movie_videos, stop_program

    if not TV_FOLDER.exists() or not MOVIE_FOLDER.exists():
        print("\nCould not find the expected TV and Movies folders.")
        print("Set PROJECT_NONSENSE_BASE to the folder that contains TV and Movies.")
        print("Example:")
        print('export PROJECT_NONSENSE_BASE="/media/pi/Bag O Holdn/Videos (Project Nonsense)"')
        return

    if not VLC_PATH:
        print("\nVLC was not found. Install it with:")
        print("sudo apt update && sudo apt install vlc")
        return

    selected_tv_shows = choose_tv_shows()
    tv_time_enabled = selected_tv_shows == TV_TIME_CHOICE

    movie_videos = get_videos(MOVIE_FOLDER)

    if tv_time_enabled:
        refresh_tv_time_videos_if_needed(force=True)
    else:
        tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)
        print("\nSelected shows:")
        for show in selected_tv_shows:
            print("-", show)

    print("TV videos found:", len(tv_videos))
    print("Movie videos found:", len(movie_videos))

    if not tv_videos or not movie_videos:
        print("Check your folder paths and ensure there are video files.")
        return

    print("Dynamic TV-to-movie ratio:", get_tv_to_movie_ratio(), "TV clips per movie clip")

    start_keyboard_controls()

    tv_history: List[str] = []
    movie_history: List[str] = []

    try:
        while not stop_program:
            # Recalculate the ratio each loop because TV Time may change the active preset.
            tv_to_movie_ratio = get_tv_to_movie_ratio()

            # Play TV clips according to the current ratio.
            for _ in range(tv_to_movie_ratio):
                if stop_program:
                    break

                # This is the important part: after each completed clip, the loop comes
                # back here and checks the system clock before choosing the next TV clip.
                if tv_time_enabled:
                    refresh_tv_time_videos_if_needed()

                if not tv_videos:
                    print("No TV videos were found for the current TV Time preset.")
                    stop_program = True
                    break

                video = choose_video(tv_videos, tv_history)
                play_video(video)

            if stop_program:
                break

            # Play one movie clip. After the movie finishes, the next loop checks TV Time again.
            video = choose_video(movie_videos, movie_history)
            play_video(video)

    except KeyboardInterrupt:
        print("\nControl + C pressed! Stopping program...")
        stop_program = True
        stop_current_process()

    print("Program stopped safely.")


if __name__ == "__main__":
    main()
