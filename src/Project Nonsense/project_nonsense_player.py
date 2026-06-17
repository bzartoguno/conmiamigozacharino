import os                  # Lets Python work with folders and file paths
import random              # Lets Python pick a random video
import subprocess          # Lets Python launch another program, like VLC
from pynput import keyboard  # Lets Python listen for keyboard presses
import time                # Lets Python pause between clips
import shutil              # Lets Python look for programs in common locations
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
REPEAT_HISTORY = 892

# Wait this many seconds after a clip ends before starting the next one
DELAY_BETWEEN_CLIPS = .5

# On macOS, QuickTime Player supports Picture-in-Picture through its View menu.
# Keep this True so the } hotkey can control Picture-in-Picture.
# Set this to False if you want to go back to using VLC first.
PREFER_QUICKTIME_PLAYER = True

# Special value used when the user chooses dynamic TV Time mode
TV_TIME_CHOICE = "__TV_TIME__"

# Show folders that can be included in TV playback
SHOW_OPTIONS = [
    "Arcane",
    "Azumanga Daioh",
    "Batman Brave n Bold",
    "Bluey",
    "Delicious In Dungeon",
    "Epithet Erased",
    "Gravity falls",
    "Gwain Saga Episodes",
    "Haunted Hotel",
    "Justice League",
    "Justice League Unlimited",
    "Kid Cosmic",
    "Kirby Right Back At Ya!",
    "Konosuba",
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
    "Youtube",
    "Zombie Land",
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
    "Kirby Right Back At Ya!",
    "My Adventures with Superman",
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
print("Player plan:", "Use QuickTime Player first, fall back to VLC if QuickTime fails" if PREFER_QUICKTIME_PLAYER else "Use VLC first, fall back to QuickTime Player if VLC is missing")
print(" ")
print("Hotkeys:", "backtick: stop program | |: skip clip | _: toggle fullscreen in QuickTime | }: toggle QuickTime Picture-in-Picture | {: toggle double speed")

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
    Return chosen show names from SHOW_OPTIONS or a preset group.
    """
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

        # Preserve order while removing duplicates
        unique_indexes = list(dict.fromkeys(selected_indexes))
        return [SHOW_OPTIONS[i] for i in unique_indexes]




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

def choose_single_show_playback_options(selected_shows):
    """
    If one specific show was selected, ask how that show should play.
    Return whether TV clips should stay randomized and whether movies should play.
    """
    if tv_time_enabled or len(selected_shows) != 1:
        return True, True

    print(f"\nOnly one show was selected: {selected_shows[0]}")

    while True:
        order_choice = input("Play this show in order or keep it randomized? Type 'order' or 'random': ").strip().lower()
        if order_choice in ("order", "ordered", "in order", "o"):
            should_randomize_tv = False
            break
        if order_choice in ("random", "randomized", "randomise", "r"):
            should_randomize_tv = True
            break
        print("Invalid choice. Type 'order' or 'random'.")

    while True:
        movie_choice = input("Should movies play too? Type 'yes' or 'no': ").strip().lower()
        if movie_choice in ("yes", "y"):
            should_play_movies = True
            break
        if movie_choice in ("no", "n"):
            should_play_movies = False
            break
        print("Invalid choice. Type 'yes' or 'no'.")

    return should_randomize_tv, should_play_movies


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
tv_time_enabled = selected_tv_shows == TV_TIME_CHOICE
current_tv_time_preset = None
tv_videos = []
randomize_tv_videos, play_movies = choose_single_show_playback_options(selected_tv_shows if not tv_time_enabled else [])


def refresh_tv_time_videos_if_needed(force=False):
    """
    In TV Time mode, check the system clock and switch presets when needed.
    This runs before every TV clip, so crossing 1 PM or 7 PM changes the next clip.
    """
    global selected_tv_shows, tv_videos, current_tv_time_preset

    if not tv_time_enabled:
        return

    preset_name, preset_shows = choose_tv_time_preset()

    # The clock is checked every time, but the folders are only rescanned
    # when the preset actually changes. This keeps it fast.
    if force or preset_name != current_tv_time_preset:
        current_tv_time_preset = preset_name
        selected_tv_shows = preset_shows
        tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)

        print(f"\nTV Time clock check: now using {preset_name} shows.")
        print("Selected shows:")
        for show in selected_tv_shows:
            print("-", show)
        print("TV videos found:", len(tv_videos))


def get_tv_to_movie_ratio():
    """
    Make TV-vs-movie playback proportional to the current TV preset.
    Example: 220 TV clips and 10 movie clips => 22 TV clips per 1 movie clip.
    """
    return max(1, round(len(tv_videos) / len(movie_videos)))


if tv_time_enabled:
    refresh_tv_time_videos_if_needed(force=True)
else:
    tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)
    print("\nSelected shows:")
    for show in selected_tv_shows:
        print("-", show)

movie_videos = get_videos(MOVIE_FOLDER) if play_movies else []

# Keep single-show ordered playback predictable from one run to the next.
if not randomize_tv_videos:
    tv_videos.sort()

# Show how many videos were found
print("TV videos found:", len(tv_videos))
print("Movie videos found:", len(movie_videos))
print("TV playback order:", "randomized" if randomize_tv_videos else "in order")
print("Movies enabled:", "yes" if play_movies else "no")

# Stop immediately if the selected TV folders have no usable videos.
# Movies are optional when a single show is selected.
if not tv_videos or (play_movies and not movie_videos):
    print("Check your folder paths and ensure there are video files.")
    exit()

if play_movies:
    print("Dynamic TV-to-movie ratio:", get_tv_to_movie_ratio(), "TV clips per movie clip")
else:
    print("Movies disabled for this single-show run.")

# =====================
# GLOBAL STOP FLAG
# =====================
stop_program = False
skip_current_video = False
current_process = None
current_player = None
quicktime_should_be_fullscreen = False
quicktime_should_be_picture_in_picture = False
playback_speed_double = False


def get_current_playback_rate():
    """Return the playback speed that should be used for the current and next clips."""
    return 2.0 if playback_speed_double else 1.0


def set_quicktime_playback_rate(rate):
    """Set QuickTime document 1 playback speed when a document is open."""
    script = f'''
    tell application "QuickTime Player"
        if (count of documents) = 0 then
            return "NO_DOCUMENTS"
        end if
        set rate of document 1 to {rate}
        return "RATE_SET"
    end tell
    '''

    try:
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            check=False,
        )
        output = result.stdout.strip()
        if output:
            return output
        if result.stderr.strip():
            return f"RATE_SCRIPT_ERROR: {result.stderr.strip()}"
        return "RATE_SCRIPT_NO_OUTPUT"
    except Exception as error:
        return f"RATE_EXCEPTION: {error}"


def apply_quicktime_playback_rate_preference():
    """Apply the remembered playback speed to a newly opened QuickTime clip."""
    return set_quicktime_playback_rate(get_current_playback_rate())


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

def set_quicktime_picture_in_picture(should_enable):
    """
    Toggle QuickTime Picture-in-Picture on macOS.

    This tries three things, in this order:
    1. Use a real QuickTime Picture-in-Picture menu item if macOS exposes one.
    2. Click a real Picture-in-Picture button in the QuickTime controls if Accessibility can see it.
    3. Fall back to a "fake PiP" mode: Float on Top + small bottom-right window.

    The fallback is useful because some QuickTime versions expose the PiP control as
    an on-screen playback button instead of a normal AppleScript menu item.
    """

    enable_text = "true" if should_enable else "false"

    script = f"""
    on lowerText(theText)
        set oldDelims to AppleScript's text item delimiters
        set upperChars to "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        set lowerChars to "abcdefghijklmnopqrstuvwxyz"

        repeat with i from 1 to length of upperChars
            set AppleScript's text item delimiters to character i of upperChars
            set textParts to text items of theText
            set AppleScript's text item delimiters to character i of lowerChars
            set theText to textParts as text
        end repeat

        set AppleScript's text item delimiters to oldDelims
        return theText
    end lowerText

    on clickMenuItemNamed(possibleNames)
        tell application "System Events"
            tell process "QuickTime Player"
                repeat with menuBarItem in menu bar items of menu bar 1
                    repeat with possibleName in possibleNames
                        try
                            set foundItem to menu item (possibleName as text) of menu 1 of menuBarItem
                            if exists foundItem then
                                click foundItem
                                return true
                            end if
                        end try
                    end repeat
                end repeat
            end tell
        end tell

        return false
    end clickMenuItemNamed

    on setFloatOnTop(wantedState)
        tell application "System Events"
            tell process "QuickTime Player"
                repeat with menuBarItem in menu bar items of menu bar 1
                    try
                        set floatItem to menu item "Float on Top" of menu 1 of menuBarItem
                        if exists floatItem then
                            set isChecked to false

                            try
                                set markValue to value of attribute "AXMenuItemMarkChar" of floatItem
                                if markValue is not missing value and markValue is not "" then
                                    set isChecked to true
                                end if
                            end try

                            if wantedState is true and isChecked is false then
                                click floatItem
                            else if wantedState is false and isChecked is true then
                                click floatItem
                            end if

                            return true
                        end if
                    end try
                end repeat
            end tell
        end tell

        return false
    end setFloatOnTop

    on clickPictureInPictureButton(theElement)
        tell application "System Events"
            try
                repeat with b in buttons of theElement
                    set buttonText to ""

                    try
                        set buttonText to buttonText & " " & (name of b as text)
                    end try
                    try
                        set buttonText to buttonText & " " & (description of b as text)
                    end try
                    try
                        set buttonText to buttonText & " " & ((value of attribute "AXTitle" of b) as text)
                    end try
                    try
                        set buttonText to buttonText & " " & ((value of attribute "AXDescription" of b) as text)
                    end try
                    try
                        set buttonText to buttonText & " " & ((value of attribute "AXHelp" of b) as text)
                    end try

                    set buttonText to my lowerText(buttonText)

                    if buttonText contains "picture" or buttonText contains "pip" then
                        click b
                        return true
                    end if
                end repeat

                repeat with childElement in UI elements of theElement
                    if my clickPictureInPictureButton(childElement) then
                        return true
                    end if
                end repeat
            end try
        end tell

        return false
    end clickPictureInPictureButton

    tell application "QuickTime Player"
        if (count of documents) = 0 then
            return "NO_DOCUMENTS"
        end if
        activate
    end tell

    delay 0.5

    tell application "System Events"
        tell process "QuickTime Player"
            set frontmost to true
        end tell
    end tell

    delay 0.2

    if {enable_text} is true then
        -- Try true native PiP first.
        set menuWorked to my clickMenuItemNamed({{"Enter Picture in Picture", "Enter Picture-in-Picture", "Picture in Picture", "Picture-in-Picture"}})
        if menuWorked is true then
            return "TRUE_PIP_ON_MENU"
        end if

        -- Try clicking the real playback-control PiP button.
        tell application "System Events"
            tell process "QuickTime Player"
                try
                    if my clickPictureInPictureButton(window 1) then
                        return "TRUE_PIP_ON_BUTTON"
                    end if
                end try
            end tell
        end tell

        -- Fallback: fake PiP using Float on Top and a small window.
        try
            set desktopBounds to {{0, 0, 1440, 900}}
            try
                tell application "Finder"
                    set desktopBounds to bounds of window of desktop
                end tell
            end try

            set screenLeft to item 1 of desktopBounds
            set screenTop to item 2 of desktopBounds
            set screenRight to item 3 of desktopBounds
            set screenBottom to item 4 of desktopBounds

            my setFloatOnTop(true)

            tell application "System Events"
                tell process "QuickTime Player"
                    set pipWidth to 480
                    set pipHeight to 270
                    set marginRight to 30
                    set marginBottom to 90

                    set size of window 1 to {{pipWidth, pipHeight}}
                    set position of window 1 to {{screenRight - pipWidth - marginRight, screenBottom - pipHeight - marginBottom}}
                end tell
            end tell

            return "FAKE_PIP_ON"
        on error errMsg
            return "PIP_ON_ERROR: " & errMsg
        end try

    else
        -- Try native exit PiP first.
        set menuWorked to my clickMenuItemNamed({{"Exit Picture in Picture", "Exit Picture-in-Picture", "Leave Picture in Picture", "Leave Picture-in-Picture"}})
        if menuWorked is true then
            return "TRUE_PIP_OFF_MENU"
        end if

        -- Fallback: turn Float on Top off and restore a normal window.
        try
            my setFloatOnTop(false)

            tell application "System Events"
                tell process "QuickTime Player"
                    set normalWidth to 960
                    set normalHeight to 540

                    set size of window 1 to {{normalWidth, normalHeight}}
                    set position of window 1 to {{100, 100}}
                end tell
            end tell

            return "FAKE_PIP_OFF"
        on error errMsg
            return "PIP_OFF_ERROR: " & errMsg
        end try
    end if
    """

    try:
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            check=False,
        )

        output = result.stdout.strip()
        error_output = result.stderr.strip()

        if output:
            return output
        if error_output:
            return f"PIP_SCRIPT_ERROR: {error_output}"
        return "PIP_SCRIPT_NO_OUTPUT"
    except Exception as error:
        return f"PIP_EXCEPTION: {error}"


def apply_quicktime_picture_in_picture_preference():
    """
    If Picture-in-Picture preference is enabled, apply it to the newly opened
    QuickTime document. This makes the setting carry over to the next clip.
    """
    if not quicktime_should_be_picture_in_picture:
        return ""

    # Give QuickTime a moment to finish creating the movie window.
    # The PiP controls often do not exist immediately after opening the file.
    time.sleep(0.75)

    last_result = ""
    for _ in range(3):
        last_result = set_quicktime_picture_in_picture(True)
        if last_result and last_result != "NO_DOCUMENTS" and "ERROR" not in last_result:
            return last_result
        time.sleep(0.5)

    return last_result

def on_press(key):
    """
    This function runs whenever a key is pressed.
    If the backtick key (`) is pressed:
    - mark the program to stop
    - kill the current VLC video
    - stop listening for more keys
    """
    global stop_program, skip_current_video, current_process, current_player, quicktime_should_be_fullscreen, quicktime_should_be_picture_in_picture, playback_speed_double
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

        if key.char == '}':
            quicktime_should_be_picture_in_picture = not quicktime_should_be_picture_in_picture
            mode_text = "ON" if quicktime_should_be_picture_in_picture else "OFF"
            print(f"Picture-in-Picture preference is now {mode_text}.")

            if current_player == "quicktime":
                pip_result = set_quicktime_picture_in_picture(quicktime_should_be_picture_in_picture)
                print("QuickTime PiP result:", pip_result)
                if pip_result == "NO_DOCUMENTS":
                    print("No QuickTime document is open. The setting will apply to the next QuickTime clip.")
                elif pip_result == "PIP_MENU_ITEM_NOT_FOUND":
                    print("QuickTime Picture-in-Picture menu item was not found. Make sure the video window is active and your Terminal/Python app has Accessibility permission.")
            else:
                print("This will apply to the next QuickTime clip.")

        if key.char == '{':
            playback_speed_double = not playback_speed_double
            speed_text = "2x" if playback_speed_double else "normal speed"
            print(f"Playback speed preference is now {speed_text}.")

            if current_player == "quicktime":
                rate_result = set_quicktime_playback_rate(get_current_playback_rate())
                print("QuickTime speed result:", rate_result)
            elif current_player == "vlc" and current_process:
                print("VLC speed will apply on the next clip. Skip the current clip if you want it immediately.")
            else:
                print("This will apply to the next clip.")

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
        f"--rate={get_current_playback_rate()}",
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
    apply_quicktime_playback_rate_preference()
    apply_quicktime_fullscreen_preference()
    apply_quicktime_picture_in_picture_preference()
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
    Play the selected video.
    On macOS this prefers QuickTime Player so the Picture-in-Picture hotkey
    can work. If QuickTime fails, VLC is used as a fallback when available.
    """
    global current_process, current_player

    print("Playing:", video)

    try:
        if PREFER_QUICKTIME_PLAYER:
            try:
                play_with_quicktime(video)
            except Exception as quicktime_error:
                print(f"QuickTime Player failed for {video}: {quicktime_error}")
                if VLC_PATH:
                    print("Trying VLC instead...")
                    play_with_vlc(video)
                else:
                    print("VLC was not found, so there is no fallback player available.")
        else:
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


ordered_tv_index = 0


def choose_ordered_tv_video():
    """Return the next TV video in sorted order, looping back to the start."""
    global ordered_tv_index

    if ordered_tv_index >= len(tv_videos):
        ordered_tv_index = 0

    video = tv_videos[ordered_tv_index]
    ordered_tv_index += 1
    return video


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

        if randomize_tv_videos:
            video = choose_video(tv_videos, tv_history)
        else:
            video = choose_ordered_tv_video()
        play_video(video)

    if stop_program:
        break

    if not play_movies:
        continue

    # Play 1 Movie clip. After the movie finishes, the next loop checks TV Time again.
    video = choose_video(movie_videos, movie_history)
    play_video(video)

print("Program stopped safely.")
