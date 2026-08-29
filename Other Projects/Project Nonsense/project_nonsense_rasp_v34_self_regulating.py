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
- Self-regulates video playback with ffprobe and skips likely Pi 3 troublemakers.
- Caches video checks so the same file does not need to be analyzed every run.
- Keeps a permanent de-duplicated text list of every skipped movie/TV episode.

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
import json
import select
import shutil
import subprocess
import sys
import termios
import threading
import time
import tty
from datetime import datetime
from fractions import Fraction
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
    f"/home/darkwizard/Videos",
    "//home/darkwizard/Videos",
    "/mnt/home/darkwizardVideos",
    str(Path.home() / "Videos"),
    "/Volumes/home/darkwizard/Videos",  # kept as a last-resort fallback
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

# =====================
# VIDEO SELF-REGULATOR
# =====================
#
# Project Nonsense will inspect a video BEFORE playing it.
# Videos that look too risky for a Raspberry Pi 3 are skipped.
#
# IMPORTANT:
# The program does NOT delete videos by default.
# A metadata check can predict likely trouble, but cannot guarantee that
# a particular video would actually desync.
SELF_REGULATE_VIDEOS = True

# Skip a video when its calculated risk score reaches this number.
# 85 is intentionally conservative: it blocks strong trouble signs while
# still allowing ordinary H.264 videos to play.
VIDEO_RISK_SCORE_TO_SKIP = 85

# H.264 bitrate thresholds used by the risk scorer.
HIGH_H264_BITRATE_MBPS = 12.0
VERY_HIGH_H264_BITRATE_MBPS = 20.0

# A nominal/average FPS mismatch causes a deeper frame-timing sample.
VFR_METADATA_DIFFERENCE = 0.05

# Number of early video packets/frames to sample when checking possible VFR.
VFR_SAMPLE_PACKETS = 240

# Persistent cache.
# Once a file has been checked, Project Nonsense remembers the answer.
# The cache automatically becomes invalid if the file size or modification
# time changes.
VIDEO_SAFETY_CACHE_VERSION = 1
VIDEO_SAFETY_CACHE_FILE = Path.home() / ".project_nonsense_video_safety_cache.json"

# A permanent human-readable list of videos the self-regulator skipped.
# Existing entries are loaded at startup so the same video is never added twice.
SKIPPED_VIDEO_LOG = Path.home() / "project_nonsense_skipped_videos.txt"

# Show folders that can be included in TV playback.
# These names can be exact folder names, but the script also tries a forgiving
# case-insensitive/punctuation-insensitive folder match on Raspberry Pi.
SHOW_OPTIONS = [
    "Among Us",
    "Arcane",
    "Azumanga Daioh",
    "Batman Brave n Bold",
    "Bluey",
    "Delicious in Dungeon",
    "Epithet Erased",
    "Gwain Saga Episodes",
    "Haunted Hotel",
    "Justice League",
    "Justice League Unlimited",
    "Gravity falls",
    "Kid Cosmic",
    "Kirby Right Back At Ya!",
    "Konosuba",
    "Miss Kobayashi",
    "Murder Drones",
    "My Adventures with Superman",
    "Owl House",
    "Phineas and Ferb",
    "Ranma",
    "Ranma 2024",
    "Sailor Moon",
    "The Amazing Digital Circus",
    "The Apothecary Diaries",
    "Win or Lose",
    "Witch Hat Atelier",
    "X-Men Evolution",
    "Youtube",
    "Zombie Land Saga",
]

# Anime-only preset built from SHOW_OPTIONS names.
ANIME_SHOWS = [
    "Arcane",
    "Azumanga Daioh",
    "Delicious in Dungeon",
    "Haunted Hotel",
    "Konosuba",
    "Miss Kobayashi",
    "Ranma",
    "Ranma 2024",
    "Sailor Moon",
    "The Apothecary Diaries",
    "Witch Hat Atelier",
    "Zombie Land Saga",
]

# Cartoon-only preset built from SHOW_OPTIONS names.
CARTOON_SHOWS = [
    "Among Us",
    "Batman Brave n Bold",
    "Bluey",
    "Gravity falls",
    "Justice League",
    "Justice League Unlimited",
    "Kid Cosmic",
    "Kirby Right Back At Ya!",
    "My Adventures with Superman",
    "Owl House",
    "Phineas and Ferb",
    "X-Men Evolution",
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



# Known alternate folder spellings/names.
# The resolver still tries exact and punctuation-insensitive matching first.
SHOW_FOLDER_ALIASES = {
    "Haunted Hotel": ["Huanted Hotel"],
    "Kirby Right Back At Ya!": ["Kirby: Right Back At Ya!"],
    "My Adventures with Superman": ["My Adventure with Superman"],
    "Zombie Land Saga": ["Zombie Land"],
}

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
    return Path(f"/home/darkwizard/Videos")


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


def find_ffprobe_path() -> Optional[str]:
    """
    Find ffprobe on Raspberry Pi / Linux.
    ffprobe is installed as part of the ffmpeg package.
    """
    found = shutil.which("ffprobe")
    if found:
        return found

    common_locations = [
        "/usr/bin/ffprobe",
        "/usr/local/bin/ffprobe",
        "/snap/bin/ffprobe",
    ]

    for location in common_locations:
        if os.path.exists(location):
            return location

    return None


BASE_FOLDER = find_project_nonsense_base()
TV_FOLDER = BASE_FOLDER / "TV"
MOVIE_FOLDER = BASE_FOLDER / "Movies"
VLC_PATH = find_vlc_path()
FFPROBE_PATH = find_ffprobe_path()


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
print("FFPROBE_PATH:", FFPROBE_PATH)
print("Video self-regulator:", "ON" if SELF_REGULATE_VIDEOS else "OFF")
print("Self-regulator skip score:", VIDEO_RISK_SCORE_TO_SKIP)
print("Player plan:", "Use VLC/cvlc on Raspberry Pi / Linux")
print("Hotkeys:", "backtick: stop program | |: skip clip | _: toggle fullscreen preference")
print("Optional:", "install pynput for global hotkeys; terminal fallback is built in")


# =====================
# VIDEO SELF-REGULATOR
# =====================

video_safety_cache = {}
runtime_blocked_videos = set()
documented_skipped_entries = set()


def rate_to_float(value: str) -> float:
    """Convert an ffprobe fraction such as 30000/1001 into a float."""
    if not value or value == "0/0":
        return 0.0

    try:
        return float(Fraction(value))
    except Exception:
        return 0.0


def safe_float(value, default: float = 0.0) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def safe_int(value, default: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def load_video_safety_cache() -> None:
    """
    Load cached video checks from the user's home folder.
    """
    global video_safety_cache

    video_safety_cache = {}

    try:
        if not VIDEO_SAFETY_CACHE_FILE.is_file():
            return

        data = json.loads(
            VIDEO_SAFETY_CACHE_FILE.read_text(
                encoding="utf-8",
                errors="replace",
            )
        )

        if data.get("version") != VIDEO_SAFETY_CACHE_VERSION:
            return

        cached_files = data.get("files", {})
        if isinstance(cached_files, dict):
            video_safety_cache = cached_files

    except Exception as error:
        print("Video safety cache could not be loaded:", error)
        video_safety_cache = {}


def save_video_safety_cache() -> None:
    """
    Save cached checks. Failure to save never stops Project Nonsense.
    """
    try:
        payload = {
            "version": VIDEO_SAFETY_CACHE_VERSION,
            "files": video_safety_cache,
        }

        VIDEO_SAFETY_CACHE_FILE.write_text(
            json.dumps(payload, indent=2),
            encoding="utf-8",
        )

    except Exception as error:
        print("Video safety cache could not be saved:", error)


def file_signature(video: str):
    """
    Return values that change when the video itself changes.
    """
    try:
        stat = os.stat(video)
        return stat.st_size, stat.st_mtime_ns
    except OSError:
        return None, None


def probe_video_metadata(video: str):
    """
    Read only video metadata. This is much lighter than decoding the movie.
    """
    if not FFPROBE_PATH:
        return None

    command = [
        FFPROBE_PATH,
        "-v", "error",
        "-select_streams", "v:0",
        "-show_entries",
        "stream=codec_name,profile,width,height,pix_fmt,r_frame_rate,avg_frame_rate,bit_rate",
        "-show_entries",
        "format=bit_rate",
        "-of", "json",
        video,
    ]

    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            timeout=30,
            check=False,
        )

        if result.returncode != 0:
            return None

        return json.loads(result.stdout)

    except Exception:
        return None


def confirm_variable_frame_rate(video: str) -> bool:
    """
    Take a short sample of real video-frame timestamps.

    r_frame_rate vs avg_frame_rate is only a warning sign.
    This second check looks at actual frame timing so ordinary files are less
    likely to be skipped by mistake.
    """
    if not FFPROBE_PATH:
        return False

    command = [
        FFPROBE_PATH,
        "-v", "error",
        "-select_streams", "v:0",
        "-read_intervals", f"%+#{VFR_SAMPLE_PACKETS}",
        "-show_frames",
        "-show_entries", "frame=best_effort_timestamp_time",
        "-of", "json",
        video,
    ]

    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            timeout=45,
            check=False,
        )

        if result.returncode != 0:
            return False

        data = json.loads(result.stdout)

        timestamps = []

        for frame in data.get("frames", []):
            value = frame.get("best_effort_timestamp_time")
            try:
                timestamps.append(float(value))
            except (TypeError, ValueError):
                continue

        if len(timestamps) < 30:
            return False

        intervals = []

        for index in range(1, len(timestamps)):
            difference = timestamps[index] - timestamps[index - 1]

            if difference > 0:
                intervals.append(difference)

        if len(intervals) < 20:
            return False

        sorted_intervals = sorted(intervals)
        median = sorted_intervals[len(sorted_intervals) // 2]

        if median <= 0:
            return False

        # Count intervals that differ from the median frame duration by >15%.
        unusual = [
            interval
            for interval in intervals
            if abs(interval - median) / median > 0.15
        ]

        unusual_ratio = len(unusual) / len(intervals)

        # Requiring at least 10% of sampled frame intervals to be different
        # helps avoid calling an occasional odd timestamp "VFR".
        return unusual_ratio >= 0.10

    except Exception:
        return False


def calculate_video_risk(video: str):
    """
    Return a risk assessment for Raspberry Pi 3 playback.

    This is intentionally a predictor, not a guarantee.
    """
    data = probe_video_metadata(video)

    if not data:
        return {
            "safe": False,
            "score": 100,
            "main_problem": "COULD NOT READ VIDEO METADATA",
            "reason": "ffprobe could not inspect this video reliably.",
            "details": "Unknown format",
        }

    streams = data.get("streams", [])

    if not streams:
        return {
            "safe": False,
            "score": 100,
            "main_problem": "NO NORMAL VIDEO STREAM",
            "reason": "ffprobe did not find a usable first video stream.",
            "details": "No video stream",
        }

    stream = streams[0]
    format_data = data.get("format", {})

    codec = str(stream.get("codec_name", "unknown")).lower()
    profile = str(stream.get("profile", ""))
    pixel_format = str(stream.get("pix_fmt", "")).lower()

    width = safe_int(stream.get("width"))
    height = safe_int(stream.get("height"))

    nominal_fps = rate_to_float(stream.get("r_frame_rate", "0/0"))
    average_fps = rate_to_float(stream.get("avg_frame_rate", "0/0"))

    bitrate = stream.get("bit_rate")
    if not bitrate:
        bitrate = format_data.get("bit_rate")

    bitrate_mbps = safe_float(bitrate) / 1_000_000

    problems = []

    def add_problem(score: int, name: str, reason: str):
        problems.append({
            "score": score,
            "name": name,
            "reason": reason,
        })

    # Codecs that are substantially more concerning on a Pi 3.
    if codec in ("hevc", "h265"):
        add_problem(
            100,
            "HEVC / H.265",
            "HEVC is a strong Pi 3 trouble candidate and may fall behind the audio.",
        )

    if codec == "av1":
        add_problem(
            100,
            "AV1 VIDEO",
            "AV1 is far too demanding to trust for smooth Pi 3 playback.",
        )

    if codec == "vp9":
        add_problem(
            95,
            "VP9 VIDEO",
            "VP9 can require substantial software decoding work on a Pi 3.",
        )

    # 10-bit formats commonly include '10' in names such as yuv420p10le.
    if "10" in pixel_format:
        add_problem(
            100,
            "10-BIT VIDEO",
            "10-bit video is much more demanding for this older Raspberry Pi.",
        )

    if width > 1920 or height > 1080:
        add_problem(
            100,
            "ABOVE 1080P",
            f"The video is {width}x{height}, above the Pi 3-friendly 1080p range.",
        )

    if average_fps > 60.1:
        add_problem(
            95,
            "ABOVE 60 FPS",
            f"The video averages about {average_fps:.2f} FPS.",
        )

    if codec == "h264" and bitrate_mbps >= VERY_HIGH_H264_BITRATE_MBPS:
        add_problem(
            90,
            "VERY HIGH BITRATE H.264",
            f"The H.264 bitrate is about {bitrate_mbps:.2f} Mbps.",
        )
    elif codec == "h264" and bitrate_mbps >= HIGH_H264_BITRATE_MBPS:
        add_problem(
            70,
            "HIGH BITRATE H.264",
            f"The H.264 bitrate is about {bitrate_mbps:.2f} Mbps.",
        )

    # r_frame_rate and avg_frame_rate differing only triggers a deeper check.
    possible_vfr = False

    if nominal_fps > 0 and average_fps > 0:
        if abs(nominal_fps - average_fps) > VFR_METADATA_DIFFERENCE:
            possible_vfr = confirm_variable_frame_rate(video)

    if possible_vfr:
        add_problem(
            90,
            "CONFIRMED VARIABLE FRAME TIMING",
            (
                "A short frame-timestamp sample showed meaningful timing variation. "
                "Since your symptom is audio getting ahead of video, this is a strong "
                "reason to skip this file."
            ),
        )

    if problems:
        problems.sort(key=lambda item: item["score"], reverse=True)
        worst = problems[0]
        score = worst["score"]
        main_problem = worst["name"]
        reason = worst["reason"]
    else:
        score = 0
        main_problem = "NONE"
        reason = "No strong Pi 3 playback warning was found."

    safe = score < VIDEO_RISK_SCORE_TO_SKIP

    details = (
        f"{codec} {profile} | "
        f"{width}x{height} | "
        f"{bitrate_mbps:.2f} Mbps | "
        f"{average_fps:.3f} fps | "
        f"{pixel_format}"
    ).strip()

    return {
        "safe": safe,
        "score": score,
        "main_problem": main_problem,
        "reason": reason,
        "details": details,
    }


def check_video_safety(video: str):
    """
    Check the cache first. If needed, inspect the video and cache the answer.
    """
    if not SELF_REGULATE_VIDEOS:
        return {
            "safe": True,
            "score": 0,
            "main_problem": "SELF-REGULATOR OFF",
            "reason": "Video checking is disabled.",
            "details": "",
        }

    if not FFPROBE_PATH:
        # Preserve old Project Nonsense behavior if ffprobe is unavailable.
        return {
            "safe": True,
            "score": 0,
            "main_problem": "FFPROBE NOT INSTALLED",
            "reason": "Could not inspect video, so Project Nonsense allowed it.",
            "details": "",
        }

    size, mtime_ns = file_signature(video)

    cached = video_safety_cache.get(video)

    if cached:
        if (
            cached.get("size") == size
            and cached.get("mtime_ns") == mtime_ns
        ):
            return cached.get("result", {
                "safe": True,
                "score": 0,
                "main_problem": "CACHE ERROR",
                "reason": "",
                "details": "",
            })

    print()
    print("Self-regulator checking:")
    print(video)

    result = calculate_video_risk(video)

    video_safety_cache[video] = {
        "size": size,
        "mtime_ns": mtime_ns,
        "result": result,
    }

    save_video_safety_cache()

    return result


def clean_video_title(path: Path) -> str:
    """
    Return a display-friendly video name without the file extension.
    """
    return path.stem


def format_skipped_video_entry(video: str) -> str:
    """
    Turn an absolute video path into the simple permanent log format:

        Movie: Movie Name
        TV: Show Name - Episode Name

    If a TV episode is inside a season subfolder, keep that useful part:

        TV: Bluey - Season 2/Episode 4
    """
    video_path = Path(video)

    try:
        relative_movie = video_path.relative_to(MOVIE_FOLDER)

        # Most movies are directly in Movies, but preserve subfolders if present.
        if len(relative_movie.parts) == 1:
            movie_name = clean_video_title(relative_movie)
        else:
            parent_parts = list(relative_movie.parts[:-1])
            parent_parts.append(clean_video_title(relative_movie))
            movie_name = "/".join(parent_parts)

        return f"Movie: {movie_name}"

    except ValueError:
        pass

    try:
        relative_tv = video_path.relative_to(TV_FOLDER)

        if not relative_tv.parts:
            return f"TV: {clean_video_title(video_path)}"

        show_name = relative_tv.parts[0]

        if len(relative_tv.parts) == 1:
            episode_name = clean_video_title(relative_tv)
        else:
            episode_parts = list(relative_tv.parts[1:-1])
            episode_parts.append(clean_video_title(relative_tv))
            episode_name = "/".join(episode_parts)

        return f"TV: {show_name} - {episode_name}"

    except ValueError:
        # This should normally never happen because Project Nonsense only
        # chooses videos from TV_FOLDER and MOVIE_FOLDER.
        return f"Video: {clean_video_title(video_path)}"


def load_skipped_video_log() -> None:
    """
    Read the existing skipped-video text file so videos documented during
    earlier runs are not added again.
    """
    global documented_skipped_entries

    documented_skipped_entries = set()

    try:
        if not SKIPPED_VIDEO_LOG.is_file():
            return

        for raw_line in SKIPPED_VIDEO_LOG.read_text(
            encoding="utf-8",
            errors="replace",
        ).splitlines():
            entry = raw_line.strip()

            if entry:
                documented_skipped_entries.add(entry)

    except Exception as error:
        print("Skipped-video list could not be loaded:", error)


def log_skipped_video(video: str, result) -> None:
    """
    Add a skipped video to the permanent text list exactly once.

    The risk details still appear in the terminal when the video is skipped,
    but the text file stays intentionally simple.
    """
    entry = format_skipped_video_entry(video)

    if entry in documented_skipped_entries:
        return

    try:
        with SKIPPED_VIDEO_LOG.open("a", encoding="utf-8") as log_file:
            log_file.write(entry + "\n")

        documented_skipped_entries.add(entry)

    except Exception as error:
        print("Skipped-video list could not be updated:", error)


def choose_safe_video(videos: List[str], history: List[str]) -> Optional[str]:
    """
    Pick a random video, check it, and automatically reject likely Pi 3
    troublemakers.

    Unsafe videos are NOT deleted. They are blocked for the rest of this run.
    Cached results make future runs much faster.
    """
    available = [
        video
        for video in videos
        if video not in history and video not in runtime_blocked_videos
    ]

    if not available:
        # If history is the only reason nothing is available, reset history.
        history.clear()
        available = [
            video
            for video in videos
            if video not in runtime_blocked_videos
        ]

    while available:
        video = random.choice(available)
        available.remove(video)

        result = check_video_safety(video)

        if result["safe"]:
            history.append(video)

            while len(history) > REPEAT_HISTORY:
                history.pop(0)

            if SELF_REGULATE_VIDEOS and FFPROBE_PATH:
                print(
                    "Self-regulator: SAFE "
                    f"(score {result['score']}) - {os.path.basename(video)}"
                )

            return video

        runtime_blocked_videos.add(video)
        log_skipped_video(video, result)

        print()
        print("=" * 72)
        print("SELF-REGULATOR SKIPPED A VIDEO")
        print("=" * 72)
        print("Video:", video)
        print("Risk score:", result["score"])
        print("Main problem:", result["main_problem"])
        print("Why:", result["reason"])
        print("Details:", result["details"])
        print("The file was NOT deleted.")
        print("=" * 72)
        print()

    return None


load_video_safety_cache()
load_skipped_video_log()


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

    Matching order:
    1. Exact folder name
    2. Case/punctuation-insensitive name
    3. Known aliases for older/misspelled folder names
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

    for alias in SHOW_FOLDER_ALIASES.get(show_name, []):
        alias_path = TV_FOLDER / alias
        if alias_path.is_dir():
            return alias_path

        wanted_alias = normalize_folder_name(alias)
        for child in TV_FOLDER.iterdir():
            if child.is_dir() and normalize_folder_name(child.name) == wanted_alias:
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

    if SELF_REGULATE_VIDEOS and not FFPROBE_PATH:
        print()
        print("WARNING: Video self-regulation is ON, but ffprobe was not found.")
        print("Install it with:")
        print("sudo apt update && sudo apt install ffmpeg")
        print()
        print("Until ffprobe is installed, videos will play without safety checks.")

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

                video = choose_safe_video(tv_videos, tv_history)

                if video is None:
                    print("No safe TV videos remain for the current selection.")
                    stop_program = True
                    break

                play_video(video)

            if stop_program:
                break

            # Play one movie clip. After the movie finishes, the next loop checks TV Time again.
            video = choose_safe_video(movie_videos, movie_history)

            if video is None:
                print("No safe movie videos remain.")
                stop_program = True
                break

            play_video(video)

    except KeyboardInterrupt:
        print("\nControl + C pressed! Stopping program...")
        stop_program = True
        stop_current_process()

    print("Program stopped safely.")


if __name__ == "__main__":
    main()
