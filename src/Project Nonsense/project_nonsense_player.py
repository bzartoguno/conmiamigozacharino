import os                  # Lets Python work with folders and file paths
import random              # Lets Python pick a random video
import subprocess          # Lets Python launch another program, like VLC
from pynput import keyboard  # Lets Python listen for keyboard presses
import time                # Lets Python pause between clips
import shutil              # Lets Python look for programs in common locations
import tkinter as tk       # Lets Python show a tiny startup window for show selection
from tkinter import messagebox  # Lets Python show helpful popup messages in the startup window
from datetime import datetime  # Lets Python read the computer's current local time

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

# Tracks whether the user selected the TV Time preset at startup
TV_TIME_MODE = False

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


def choose_tv_shows_from_prompt():
    """
    Fallback text prompt if the startup window cannot be opened.
    """
    global TV_TIME_MODE
    print("\nChoose which TV shows to include before playback starts.")
    print("Type one or more numbers separated by commas (example: 1,4,9).")
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
            TV_TIME_MODE = False
            return SHOW_OPTIONS[:]
        if lowered == "cartoon":
            TV_TIME_MODE = False
            return CARTOON_SHOWS[:]
        if lowered == "anime":
            TV_TIME_MODE = False
            return ANIME_SHOWS[:]
        if lowered == "indie":
            TV_TIME_MODE = False
            return INDIE_SHOWS[:]
        if lowered == "tv time":
            TV_TIME_MODE = True
            preset_name, preset_shows = choose_tv_time_preset()
            print(f"\nTV Time selected {preset_name} preset based on your current local time.")
            return preset_shows

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

        unique_indexes = list(dict.fromkeys(selected_indexes))
        TV_TIME_MODE = False
        return [SHOW_OPTIONS[i] for i in unique_indexes]


def choose_tv_shows():
    """
    Open a small startup window so the user can pick shows before playback.
    Falls back to the text prompt if the GUI cannot start.
    """
    global TV_TIME_MODE
    try:
        root = tk.Tk()
    except Exception as error:
        print("Could not open startup window. Falling back to text prompt:", error)
        return choose_tv_shows_from_prompt()

    root.title("Project Nonsense Startup")
    root.geometry("420x540")

    chosen_shows = {"value": None}

    heading = tk.Label(root, text="Choose what you'd like to watch", font=("Helvetica", 14, "bold"))
    heading.pack(pady=(12, 6))

    hint = tk.Label(root, text="Pick one or more shows, or use a preset button.")
    hint.pack(pady=(0, 8))

    list_frame = tk.Frame(root)
    list_frame.pack(fill=tk.BOTH, expand=True, padx=12)

    scrollbar = tk.Scrollbar(list_frame)
    scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    listbox = tk.Listbox(list_frame, selectmode=tk.MULTIPLE, yscrollcommand=scrollbar.set)
    listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
    scrollbar.config(command=listbox.yview)

    for show_name in SHOW_OPTIONS:
        listbox.insert(tk.END, show_name)

    def set_selection(shows, tv_time_mode=False):
        global TV_TIME_MODE
        TV_TIME_MODE = tv_time_mode
        chosen_shows["value"] = shows[:]
        root.destroy()

    def select_all():
        listbox.selection_set(0, tk.END)

    def use_selected():
        indexes = listbox.curselection()
        if not indexes:
            messagebox.showinfo("Pick a show", "Select at least one show, or use a preset button.")
            return
        set_selection([SHOW_OPTIONS[i] for i in indexes])

    button_row_1 = tk.Frame(root)
    button_row_1.pack(fill=tk.X, padx=12, pady=(8, 4))

    tk.Button(button_row_1, text="Use Selected", command=use_selected).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)
    tk.Button(button_row_1, text="Select All", command=select_all).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)

    button_row_2 = tk.Frame(root)
    button_row_2.pack(fill=tk.X, padx=12, pady=(0, 12))

    tk.Button(button_row_2, text="Cartoon", command=lambda: set_selection(CARTOON_SHOWS, tv_time_mode=False)).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)
    tk.Button(button_row_2, text="Anime", command=lambda: set_selection(ANIME_SHOWS, tv_time_mode=False)).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)
    tk.Button(button_row_2, text="Indie", command=lambda: set_selection(INDIE_SHOWS, tv_time_mode=False)).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)

    def use_tv_time():
        preset_name, preset_shows = choose_tv_time_preset()
        print(f"\nTV Time selected {preset_name} preset based on your current local time.")
        set_selection(preset_shows, tv_time_mode=True)

    button_row_3 = tk.Frame(root)
    button_row_3.pack(fill=tk.X, padx=12, pady=(0, 12))
    tk.Button(button_row_3, text="TV Time", command=use_tv_time).pack(side=tk.LEFT, expand=True, fill=tk.X, padx=2)

    root.mainloop()

    if chosen_shows["value"]:
        return chosen_shows["value"]

    print("No startup selection was made. Falling back to text prompt.")
    return choose_tv_shows_from_prompt()




def choose_tv_time_preset():
    """
    Decide which preset should run for "tv time" based on local clock time.
    """
    current_hour = datetime.now().hour

    if current_hour >= 19 or current_hour < 5:
        return "anime", ANIME_SHOWS[:]
    if current_hour >= 13:
        return "indie", INDIE_SHOWS[:]
    return "cartoon", CARTOON_SHOWS[:]

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

tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)
movie_videos = get_videos(MOVIE_FOLDER)

# Show how many videos were found
print("TV videos found:", len(tv_videos))
print("Movie videos found:", len(movie_videos))

# Stop immediately if one of the folders has no usable videos
if not tv_videos or not movie_videos:
    print("Check your folder paths and ensure there are video files.")
    exit()

# Make TV-vs-movie playback proportional to the number of files found.
# Example: 220 TV clips and 10 movie clips => 22 TV clips per 1 movie clip.
TV_TO_MOVIE_RATIO = max(1, round(len(tv_videos) / len(movie_videos)))
print("Dynamic TV-to-movie ratio:", TV_TO_MOVIE_RATIO, "TV clips per movie clip")

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