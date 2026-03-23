import os                  # Lets Python work with folders and file paths
import random              # Lets Python pick a random video
import subprocess          # Lets Python launch another program, like VLC
from pynput import keyboard  # Lets Python listen for keyboard presses
import time                # Lets Python pause between clips
import shutil              # Lets Python look for programs in common locations

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

# Play this many TV clips before playing 1 movie clip
TV_TO_MOVIE_RATIO = 22

# Remember the last few clips so the same clip is not chosen again too soon
REPEAT_HISTORY = 294

# Wait this many seconds after a clip ends before starting the next one
DELAY_BETWEEN_CLIPS = .5

# Show folders that can be included in TV playback
SHOW_OPTIONS = [
    "Arcane",
    "Azumanga Daioh",
    "Batman: Brave n Bold",
    "Bluey",
    "Delicious in Dungeon",
    "Epithet Erased",
    "Gwain Saga Episodes",
    "Huanted Hotel",
    "Kid Cosmic",
    "Kirby: Right Back At Ya!",
    "Murder Drones",
    "Owl House",
    "Phineas and Ferb",
    "The Amazing Digital Circus",
    "Win or Lose",
    "Youtube",
    "Zombie Land Saga",
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
print("Hotkeys:", "backtick stops the program")

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
    Ask the user which show folders should be included.
    Return only the chosen show names from SHOW_OPTIONS.
    """
    print("\nChoose which TV shows to include before playback starts.")
    print("Type one or more numbers separated by commas (example: 1,4,9).")
    print("Type 'all' to include every show option.\n")

    for index, show_name in enumerate(SHOW_OPTIONS, start=1):
        print(f"{index}. {show_name}")

    while True:
        raw_choice = input("\nWhich shows should run? ").strip()
        lowered = raw_choice.lower()

        if lowered == "all":
            return SHOW_OPTIONS[:]

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
            print("Invalid choice. Enter numbers like 1,3,5 or type 'all'.")
            continue

        # Preserve order while removing duplicates
        unique_indexes = list(dict.fromkeys(selected_indexes))
        return [SHOW_OPTIONS[i] for i in unique_indexes]


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

# =====================
# GLOBAL STOP FLAG
# =====================
stop_program = False
current_process = None
current_player = None


def close_quicktime_documents():
    """
    Ask QuickTime Player to stop and close any open documents.
    This is used when the user stops the script while QuickTime is playing.
    """
    try:
        subprocess.run(
            [
                "osascript",
                "-e",
                'tell application "QuickTime Player" to if (count of documents) > 0 then close every document saving no',
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
    except Exception:
        pass


def set_quicktime_fullscreen():
    """
    Put QuickTime into fullscreen mode using Control + Command + F.
    """
    try:
        script = '''
        tell application "QuickTime Player" to activate
        tell application "System Events"
            key code 3 using {control down, command down}
        end tell
        '''

        subprocess.run(
            ["osascript", "-e", script],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
    except Exception:
        pass


def on_press(key):
    """
    This function runs whenever a key is pressed.
    If the backtick key (`) is pressed:
    - mark the program to stop
    - kill the current VLC video
    - stop listening for more keys
    """
    global stop_program, current_process, current_player
    try:
        if key.char == '`':  # backtick pressed
            print("Backtick pressed! Stopping program...")
            stop_program = True
            if current_process:
                current_process.terminate()  # kill VLC immediately
            if current_player == "quicktime":
                close_quicktime_documents()
            return False  # stop listener
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
    global current_process, current_player

    current_player = "vlc"
    vlc_args = [VLC_PATH, "--fullscreen", "--play-and-exit", video]

    current_process = subprocess.Popen(
        vlc_args,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    current_process.wait()


def play_with_quicktime(video):
    """
    Fall back to QuickTime Player on macOS when VLC is not available.
    Open the video, start playback, and then poll QuickTime until the clip
    really finishes. This avoids treating a manual pause like the end.
    """
    global current_process, current_player, stop_program

    escaped_video = video.replace("\\", "\\\\").replace('"', '\\"')
    quicktime_script = f'''
    tell application "QuickTime Player"
        activate
        set theDoc to open POSIX file "{escaped_video}"
        play theDoc
    end tell
    '''

    current_player = "quicktime"
    current_process = subprocess.Popen(
        ["osascript", "-e", quicktime_script],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    current_process.wait()
    current_process = None
    # Give QuickTime a moment to create the window before fullscreen shortcut.
    time.sleep(0.4)
    set_quicktime_fullscreen()

    near_end_counter = 0

    while not stop_program:
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
