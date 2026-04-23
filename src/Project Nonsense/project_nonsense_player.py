import os                  # Lets Python work with folders and file paths
import random              # Lets Python pick a random video
import subprocess          # Lets Python launch another program, like VLC
from pynput import keyboard  # Lets Python listen for keyboard presses
import time                # Lets Python pause between clips
import shutil              # Lets Python look for programs in common locations
import tkinter as tk
from tkinter import ttk

# to start use this
#.  /usr/bin/python3 "/Volumes/Bag O Holdn/Videos (Project Nonsense)/project_nonsense_player.py"

# =====================
# CONFIG VARIABLES
# =====================

# Folder that contains your TV clips
TV_FOLDER = "/Volumes/Bag O Holdn/Videos (Project Nonsense)/TV"

# Folder that contains your Movie clips
MOVIE_FOLDER = "/Volumes/Bag O Holdn/Videos (Project Nonsense)/Movies"

# These are the file types the script will treat as videos
VIDEO_EXTENSIONS = (".mp4", ".mkv", ".avi", ".mov", ".m4v")

# Remember the last few clips so the same clip is not chosen again too soon
REPEAT_HISTORY = 294

# Wait this many seconds after a clip ends before starting the next one
DELAY_BETWEEN_CLIPS = .5

# Show folders that can be included in TV playback
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
    "Kid Cosmic",
    "Kirby: Right Back At Ya!",
    "Konosuba",
    "Murder Drones",
    "Owl House",
    "Phineas and Ferb",
    "Ranma",
    "Ranma 2024",
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
    "The Apothecary Diaries",
    "Zombie Land Saga",
]

# Cartoon-only preset built from SHOW_OPTIONS names.
CARTOON_SHOWS = [
    "Batman Brave n Bold",
    "Bluey",
    "Epithet Erased",
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
# VLC FINDER
# =====================

def find_vlc_path():
    """
    Try several ways to find the VLC executable on macOS.
    Return the full path if found, otherwise return None.
    """

    # First, check whether a normal terminal command named "vlc" exists
    vlc_from_path = shutil.which("vlc")
    if vlc_from_path:
        return vlc_from_path

    # Next, check the most common app bundle locations on a Mac
    common_locations = [
        "/Applications/VLC.app/Contents/MacOS/VLC",
        os.path.expanduser("~/Applications/VLC.app/Contents/MacOS/VLC"),
    ]

    for location in common_locations:
        if os.path.exists(location):
            return location

    # Finally, ask macOS metadata search to look for the VLC app bundle
    try:
        result = subprocess.run(
            ["mdfind", "kMDItemCFBundleIdentifier == 'org.videolan.vlc'"],
            capture_output=True,
            text=True,
            check=False,
        )

        for line in result.stdout.splitlines():
            app_path = line.strip()
            if app_path.endswith("VLC.app"):
                possible_executable = os.path.join(app_path, "Contents", "MacOS", "VLC")
                if os.path.exists(possible_executable):
                    return possible_executable
    except Exception:
        pass

    return None


# Exact location of the VLC program on your Mac
# This tries to find VLC automatically instead of assuming one location
VLC_PATH = find_vlc_path()

# Print out useful debug info so you can see what the script is using
print("TV_FOLDER:", TV_FOLDER)
print("MOVIE_FOLDER:", MOVIE_FOLDER)
print("TV exists:", os.path.exists(TV_FOLDER))
print("Movie exists:", os.path.exists(MOVIE_FOLDER))
print("VLC_PATH:", VLC_PATH)
print("VLC exists:", os.path.exists(VLC_PATH) if VLC_PATH else False)
print("Player plan:", "Use VLC first, fall back to QuickTime Player if VLC is missing")
print("Hotkeys:", "backtick: stop program | |: skip clip | _: toggle fullscreen")

# =====================
# LOAD VIDEO LISTS
# =====================
def get_videos(folder):
    """
    Go through a folder and all subfolders.
    Collect every video file that matches the allowed extensions.
    Skip hidden junk files like ._Encanto.mp4.
    """
    videos = []

    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.startswith(".") or file.startswith("._"):
                continue

            if file.lower().endswith(VIDEO_EXTENSIONS):
                videos.append(os.path.join(root, file))

    return videos


def choose_tv_shows():
    """
    Ask the user which show folders should be included using a popup window.
    If no boxes are checked, return an empty list so playback uses movies only.
    """
    selected_shows = []

    def apply_preset(target_names):
        target_set = set(target_names)
        for show_name, bool_var in checkbox_vars.items():
            bool_var.set(show_name in target_set)

    def submit_selection():
        nonlocal selected_shows
        selected_shows = [
            show_name for show_name in SHOW_OPTIONS if checkbox_vars[show_name].get()
        ]
        root.destroy()

    root = tk.Tk()
    root.title("Project Nonsense Player Setup")
    root.geometry("420x620")
    root.resizable(False, True)

    ttk.Label(
        root,
        text="Choose TV shows to include.\nLeave everything unchecked to play only movies.",
        justify="left",
    ).pack(anchor="w", padx=12, pady=(12, 8))

    preset_frame = ttk.Frame(root)
    preset_frame.pack(fill="x", padx=12, pady=(0, 8))
    ttk.Button(preset_frame, text="All", command=lambda: apply_preset(SHOW_OPTIONS)).pack(side="left", padx=(0, 6))
    ttk.Button(preset_frame, text="Cartoon", command=lambda: apply_preset(CARTOON_SHOWS)).pack(side="left", padx=(0, 6))
    ttk.Button(preset_frame, text="Anime", command=lambda: apply_preset(ANIME_SHOWS)).pack(side="left", padx=(0, 6))
    ttk.Button(preset_frame, text="Indie", command=lambda: apply_preset(INDIE_SHOWS)).pack(side="left", padx=(0, 6))
    ttk.Button(preset_frame, text="Clear", command=lambda: apply_preset([])).pack(side="left")

    canvas = tk.Canvas(root, borderwidth=0, highlightthickness=0)
    scrollbar = ttk.Scrollbar(root, orient="vertical", command=canvas.yview)
    checkbox_frame = ttk.Frame(canvas)
    canvas.configure(yscrollcommand=scrollbar.set)

    canvas.pack(side="left", fill="both", expand=True, padx=(12, 0), pady=(0, 8))
    scrollbar.pack(side="right", fill="y", padx=(0, 12), pady=(0, 8))
    canvas_window = canvas.create_window((0, 0), window=checkbox_frame, anchor="nw")

    def on_frame_configure(_event):
        canvas.configure(scrollregion=canvas.bbox("all"))

    def on_canvas_configure(event):
        canvas.itemconfigure(canvas_window, width=event.width)

    checkbox_frame.bind("<Configure>", on_frame_configure)
    canvas.bind("<Configure>", on_canvas_configure)

    checkbox_vars = {}
    for show_name in SHOW_OPTIONS:
        bool_var = tk.BooleanVar(value=False)
        checkbox_vars[show_name] = bool_var
        ttk.Checkbutton(checkbox_frame, text=show_name, variable=bool_var).pack(anchor="w", padx=6, pady=2)

    ttk.Button(root, text="Start Playback", command=submit_selection).pack(anchor="e", padx=12, pady=(0, 12))
    root.protocol("WM_DELETE_WINDOW", submit_selection)
    root.mainloop()
    return selected_shows


def get_tv_videos_from_selected_shows(selected_shows):
    """
    Load TV videos from only the show folders selected by the user.
    """
    videos = []
    missing_folders = []

    for show_name in selected_shows:
        show_folder = os.path.join(TV_FOLDER, show_name)
        if os.path.isdir(show_folder):
            videos.extend(get_videos(show_folder))
        else:
            missing_folders.append(show_folder)

    if missing_folders:
        print("\nThese selected show folders were not found:")
        for folder in missing_folders:
            print("-", folder)

    return videos


selected_tv_shows = choose_tv_shows()
print("\nSelected shows:")
for show in selected_tv_shows:
    print("-", show)
if not selected_tv_shows:
    print("- none (movies only mode)")

tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)
movie_videos = get_videos(MOVIE_FOLDER)

# Show how many videos were found
print("TV videos found:", len(tv_videos))
print("Movie videos found:", len(movie_videos))

# Stop immediately if there are no movie clips, or no clips at all.
if not movie_videos:
    print("No movie clips were found. Check your movie folder path and files.")
    exit()

if not tv_videos and selected_tv_shows:
    print("No TV clips were found for selected shows. Playback will use movies only.")

if not tv_videos and not selected_tv_shows:
    print("No TV shows selected. Playback will use movies only.")

if not tv_videos and not movie_videos:
    print("No playable videos were found. Check your folder paths and video files.")
    exit()

if tv_videos:
    # Make TV-vs-movie playback proportional to the number of files found.
    # Example: 220 TV clips and 10 movie clips => 22 TV clips per 1 movie clip.
    TV_TO_MOVIE_RATIO = max(1, round(len(tv_videos) / len(movie_videos)))
    print("Dynamic TV-to-movie ratio:", TV_TO_MOVIE_RATIO, "TV clips per movie clip")
else:
    TV_TO_MOVIE_RATIO = 0
    print("Dynamic TV-to-movie ratio: 0 (movies only mode)")

# =====================
# GLOBAL STOP FLAG
# =====================
stop_program = False
skip_current_video = False
current_process = None
current_player = None
quicktime_should_be_fullscreen = False


def close_quicktime_documents(close_all=True):
    """
    Ask QuickTime Player to stop and close documents.
    - close_all=True: close every open document (used when ending the script).
    - close_all=False: close only the front/current document (used to skip clip).
    """
    close_command = (
        'if (count of documents) > 0 then close every document saving no'
        if close_all
        else 'if (count of documents) > 0 then close document 1 saving no'
    )

    try:
        subprocess.run(
            [
                "osascript",
                "-e",
                f'tell application "QuickTime Player" to {close_command}',
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
    except Exception:
        pass


def toggle_quicktime_fullscreen():
    """
    Toggle QuickTime Player fullscreen/presentation mode for document 1.
    If presentation mode scripting is unavailable, fall back to the
    standard fullscreen keystroke (Control + Command + F) via System Events.
    """
    script = '''
    tell application "QuickTime Player"
        if (count of documents) = 0 then
            return "NO_DOCUMENTS"
        end if

        try
            set isPresenting to presenting of document 1
            set presenting of document 1 to (not isPresenting)
            return "TOGGLED_PRESENTATION"
        on error
            -- Fallback: send the common fullscreen toggle shortcut.
        end try
    end tell

    tell application "System Events"
        keystroke "f" using {command down, control down}
    end tell
    return "TOGGLED_KEYSTROKE"
    '''

    try:
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            check=False,
        )
        return result.stdout.strip()
    except Exception:
        return ""


def apply_quicktime_fullscreen_preference():
    """
    If QuickTime fullscreen preference is enabled, attempt to put document 1
    into presentation/fullscreen mode. This keeps the next clips fullscreen.
    """
    global quicktime_should_be_fullscreen

    if not quicktime_should_be_fullscreen:
        return ""

    script = '''
    tell application "QuickTime Player"
        if (count of documents) = 0 then
            return "NO_DOCUMENTS"
        end if

        try
            set presenting of document 1 to true
            return "APPLIED_PRESENTATION"
        on error
            -- Fallback: send the common fullscreen toggle shortcut.
        end try
    end tell

    tell application "System Events"
        keystroke "f" using {command down, control down}
    end tell
    return "APPLIED_KEYSTROKE"
    '''

    try:
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            check=False,
        )
        return result.stdout.strip()
    except Exception:
        return ""


def on_press(key):
    """
    This function runs whenever a key is pressed.
    If the backtick key (`) is pressed:
    - mark the program to stop
    - kill the current VLC video
    - stop listening for more keys
    """
    global stop_program, skip_current_video, current_process, current_player, quicktime_should_be_fullscreen
    try:
        if key.char == '`':  # backtick pressed
            print("Backtick pressed! Stopping program...")
            stop_program = True
            if current_process:
                current_process.terminate()  # kill VLC immediately
            if current_player == "quicktime":
                close_quicktime_documents()
            return False  # stop listener
        if key.char == '|':
            print("Pipe pressed! Skipping current clip...")
            skip_current_video = True
            if current_player == "quicktime":
                close_quicktime_documents(close_all=False)
            elif current_player == "vlc" and current_process:
                current_process.terminate()
        if key.char == '_' and current_player == "quicktime":
            toggle_result = toggle_quicktime_fullscreen()
            if toggle_result == "NO_DOCUMENTS":
                print("No QuickTime document is open to toggle fullscreen.")
            elif toggle_result in ("TOGGLED_PRESENTATION", "TOGGLED_KEYSTROKE"):
                quicktime_should_be_fullscreen = not quicktime_should_be_fullscreen

    except AttributeError:
        pass


# Start keyboard listener in background
try:
    listener = keyboard.Listener(on_press=on_press)
    listener.start()
except Exception as e:
    print("Keyboard listener could not start:", e)
    print("If needed, stop the script with Control + C instead.")


def get_quicktime_status():
    """
    Ask QuickTime Player about the front document.
    Return whether a document exists, whether it is playing,
    the current time, and the total duration.
    """
    try:
        script = '''
        tell application "QuickTime Player"
            if (count of documents) = 0 then
                return "NONE"
            end if

            set theDoc to document 1
            return ((playing of theDoc as string) & "|" & (current time of theDoc as string) & "|" & (duration of theDoc as string))
        end tell
        '''
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            check=False,
        )
        output = result.stdout.strip()

        if not output or output == "NONE":
            return None

        pieces = output.split("|")
        if len(pieces) != 3:
            return None

        is_playing = pieces[0].strip().lower() == "true"
        current_time = float(pieces[1].strip())
        duration = float(pieces[2].strip())
        return {
            "playing": is_playing,
            "current_time": current_time,
            "duration": duration,
        }
    except Exception:
        return None


# =====================
# HELPER FUNCTIONS
# =====================
def play_with_vlc(video):
    """
    Launch VLC directly and wait until the chosen video finishes.
    """
    global current_process, current_player, skip_current_video

    current_player = "vlc"
    skip_current_video = False
    vlc_args = [
        VLC_PATH,
        "--play-and-exit",
    ]

    vlc_args.append("--fullscreen")

    vlc_args.append(video)

    current_process = subprocess.Popen(
        vlc_args,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    while True:
        if skip_current_video:
            current_process.terminate()
            break

        if current_process.poll() is not None:
            break

        time.sleep(0.2)


def play_with_quicktime(video):
    """
    Fall back to QuickTime Player on macOS when VLC is not available.
    Open the video, start playback, and then poll QuickTime until the clip
    really finishes. This avoids treating a manual pause like the end.
    """
    global current_process, current_player, stop_program, skip_current_video

    escaped_video = video.replace("\\", "\\\\").replace('"', '\\"')
    quicktime_script = f'''
    tell application "QuickTime Player"
        activate
        set theDoc to open POSIX file "{escaped_video}"
        play theDoc
    end tell
    '''

    current_player = "quicktime"
    skip_current_video = False
    current_process = subprocess.Popen(
        ["osascript", "-e", quicktime_script],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    current_process.wait()
    current_process = None
    apply_quicktime_fullscreen_preference()
    near_end_counter = 0

    while not stop_program:
        if skip_current_video:
            close_quicktime_documents(close_all=False)
            break

        status = get_quicktime_status()

        if status is None:
            break

        current_time = status["current_time"]
        duration = status["duration"]
        is_playing = status["playing"]

        # If the video is within the last second and no longer playing,
        # count that as a real finish after it happens twice in a row.
        if duration > 0 and current_time >= max(0, duration - 1):
            if not is_playing:
                near_end_counter += 1
            else:
                near_end_counter = 0

            if near_end_counter >= 2:
                break
        else:
            near_end_counter = 0

        time.sleep(1)

    close_quicktime_documents()


def play_video(video):
    """
    Try VLC first.
    If VLC is missing or fails, use QuickTime Player instead.
    """
    global current_process, current_player

    print("Playing:", video)

    try:
        if VLC_PATH:
            try:
                play_with_vlc(video)
            except Exception as vlc_error:
                print(f"VLC failed for {video}: {vlc_error}")
                print("Trying QuickTime Player instead...")
                play_with_quicktime(video)
        else:
            print("VLC not found. Trying QuickTime Player instead...")
            play_with_quicktime(video)

    except Exception as e:
        print(f"Failed to play {video}: {e}")

    finally:
        current_process = None
        current_player = None
        time.sleep(DELAY_BETWEEN_CLIPS)


def choose_video(videos, history):
    """
    Pick a random video that is not in the recent-history list.
    If every video is in history, clear history and start fresh.
    """
    choices = [v for v in videos if v not in history]
    if not choices:
        # reset history if all videos are exhausted
        history.clear()
        choices = videos[:]
    video = random.choice(choices)
    history.append(video)
    # keep history limited
    while len(history) > REPEAT_HISTORY:
        history.pop(0)
    return video


# =====================
# MAIN LOOP
# =====================
tv_history = []
movie_history = []

while not stop_program:
    # Play TV clips according to ratio
    if tv_videos and TV_TO_MOVIE_RATIO > 0:
        for _ in range(TV_TO_MOVIE_RATIO):
            if stop_program:
                break
            video = choose_video(tv_videos, tv_history)
            play_video(video)

    if stop_program:
        break

    # Play 1 Movie clip
    video = choose_video(movie_videos, movie_history)
    play_video(video)

print("Program stopped safely.")
