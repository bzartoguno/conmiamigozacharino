import os                  # Lets Python work with folders and file paths
import sys                 # Lets Python check whether it is running on macOS
import random              # Lets Python pick a random video
import subprocess          # Lets Python launch another program, like VLC
from pynput import keyboard  # Lets Python listen for keyboard presses
import time                # Lets Python pause between clips
import shutil              # Lets Python look for programs in common locations
from datetime import datetime  # Lets Python read the computer's current local time
import threading             # Lets the GUI stay responsive while videos play
import tkinter as tk         # Built-in Python window toolkit
from tkinter import messagebox, scrolledtext  # Popup messages and a small log box

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

# Backtick can close the Project Nonsense Terminal window on macOS.
# Keep this False unless you really want backtick to close EVERY Terminal window.
CLOSE_ALL_TERMINAL_WINDOWS_ON_BACKTICK = False

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
    "Delicious In Dungeon",
    "Haunted Hotel",
    "Konosuba",
    "Ranma",
    "Ranma 2024",
    "Sailor Moon",
    "The Apothecary Diaries",
    "Zombie Land",
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

# Debug information is shown in the GUI log after playback starts.

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
    """Legacy terminal selector kept only for compatibility; the GUI handles selection."""
    return SHOW_OPTIONS[:]


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
    """Legacy terminal selector kept only for compatibility; the GUI handles these options."""
    if len(selected_shows) == 1:
        return True, True
    return True, True


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
        app_log("\nThese selected show folders were not found:")
        for folder in missing_folders:
            app_log(f"- {folder}")

    return videos


# These are filled in by the clickable GUI before playback starts.
selected_tv_shows = []
tv_time_enabled = False
current_tv_time_preset = None
tv_videos = []
movie_videos = []
randomize_tv_videos = True
play_movies = True
gui_app = None
playback_thread = None


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

        app_log(f"\nTV Time clock check: now using {preset_name} shows.")
        app_log("Selected shows:")
        for show in selected_tv_shows:
            app_log(f"- {show}")
        app_log(f"TV videos found: {len(tv_videos)}")


def get_tv_to_movie_ratio():
    """
    Make TV-vs-movie playback proportional to the current TV preset.
    Example: 220 TV clips and 10 movie clips => 22 TV clips per 1 movie clip.

    When movies are disabled, the main loop still needs a TV batch size.
    Return 1 so it plays the next TV clip without dividing by an empty
    movie list.
    """
    if not play_movies or not movie_videos:
        return 1

    return max(1, round(len(tv_videos) / len(movie_videos)))


def app_log(message):
    """Write status text to the GUI log when it exists; otherwise stay quiet."""
    text_message = str(message)

    app = globals().get("gui_app")
    if app is not None:
        app.safe_log(text_message)


def schedule_terminal_cleanup_on_macos():
    """
    Close Terminal windows left behind by Project Nonsense launchers on macOS.

    This is intentionally conservative: it targets the Terminal tab that launched
    this script, plus Terminal windows/tabs whose title or contents mention
    Project Nonsense. It avoids closing unrelated Terminal work.
    """
    if sys.platform != "darwin":
        return

    # Do not schedule the cleanup more than once.
    if getattr(schedule_terminal_cleanup_on_macos, "_scheduled", False):
        return
    schedule_terminal_cleanup_on_macos._scheduled = True

    current_tty = ""
    current_tty_short = ""
    try:
        if os.isatty(0):
            current_tty = os.ttyname(0)
            current_tty_short = os.path.basename(current_tty)
    except Exception:
        current_tty = ""
        current_tty_short = ""

    def applescript_string(value):
        return '"' + str(value).replace('\\', '\\\\').replace('"', '\\"') + '"'

    target_tty = applescript_string(current_tty)
    target_tty_short = applescript_string(current_tty_short)
    close_all_terminals = "true" if CLOSE_ALL_TERMINAL_WINDOWS_ON_BACKTICK else "false"

    apple_script = """
    set targetTty to {target_tty}
    set targetTtyShort to {target_tty_short}
    set closeAllTerminals to {close_all_terminals}

    tell application "Terminal"
        repeat with windowIndex from (count of windows) to 1 by -1
            set terminalWindow to window windowIndex
            set shouldCloseWindow to false
            if closeAllTerminals then set shouldCloseWindow to true

            try
                if (name of terminalWindow as text) contains "Project Nonsense" then set shouldCloseWindow to true
                if (name of terminalWindow as text) contains "project_nonsense" then set shouldCloseWindow to true
                if (name of terminalWindow as text) contains "Resources" then set shouldCloseWindow to true
            end try

            try
                repeat with terminalTab in tabs of terminalWindow
                    try
                        if targetTty is not "" then
                            set tabTty to (tty of terminalTab as text)
                            if tabTty is targetTty then set shouldCloseWindow to true
                            if targetTtyShort is not "" and tabTty ends with targetTtyShort then set shouldCloseWindow to true
                        end if
                    end try

                    try
                        set tabText to (contents of terminalTab as text)
                        if tabText contains "Project Nonsense" then set shouldCloseWindow to true
                        if tabText contains "project_nonsense" then set shouldCloseWindow to true
                        if tabText contains "You can close this Terminal window" then set shouldCloseWindow to true
                    end try
                end repeat
            end try

            if shouldCloseWindow then
                try
                    close terminalWindow
                end try
            end if
        end repeat
    end tell
    """.format(target_tty=target_tty, target_tty_short=target_tty_short, close_all_terminals=close_all_terminals)

    # Wait briefly so Python/Tk can finish shutting down before Terminal closes.
    command = "sleep 1; /usr/bin/osascript <<'APPLESCRIPT'\n" + apple_script + "\nAPPLESCRIPT\n"
    try:
        subprocess.Popen(
            ["/bin/sh", "-c", command],
            stdin=subprocess.DEVNULL,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            start_new_session=True,
        )
    except Exception:
        pass


def stop_current_playback_from_gui():
    """Stop playback without necessarily closing the GUI window."""
    request_shutdown(close_window=False)


def request_shutdown(reason="Stopping program...", close_window=False):
    """Stop the whole program, close the current video, and optionally close the GUI."""
    global stop_program, current_process

    stop_program = True
    app_log(reason)

    if current_process:
        try:
            current_process.terminate()
        except Exception:
            pass

    if current_player == "quicktime":
        close_quicktime_documents()

    if close_window:
        schedule_terminal_cleanup_on_macos()
        app = globals().get("gui_app")
        if app is not None:
            app.close_window_from_hotkey()


def initialize_selected_videos():
    """Load videos after the user clicks Start in the GUI."""
    global selected_tv_shows, tv_videos, movie_videos, current_tv_time_preset, ordered_tv_index

    current_tv_time_preset = None
    ordered_tv_index = 0

    if tv_time_enabled:
        refresh_tv_time_videos_if_needed(force=True)
    else:
        tv_videos = get_tv_videos_from_selected_shows(selected_tv_shows)
        app_log("\nSelected shows:")
        for show in selected_tv_shows:
            app_log(f"- {show}")

    movie_videos = get_videos(MOVIE_FOLDER) if play_movies else []

    # Keep single-show ordered playback predictable from one run to the next.
    if not randomize_tv_videos:
        tv_videos.sort()

    app_log(f"TV videos found: {len(tv_videos)}")
    app_log(f"Movie videos found: {len(movie_videos)}")
    app_log(f"TV playback order: {'randomized' if randomize_tv_videos else 'in order'}")
    app_log(f"Movies enabled: {'yes' if play_movies else 'no'}")

    # Stop immediately if the selected TV folders have no usable videos.
    # Movies are optional when a single show is selected.
    if not tv_videos or (play_movies and not movie_videos):
        message = "Check your folder paths and ensure there are video files."
        app_log(message)
        return False, message

    if play_movies:
        app_log(f"Dynamic TV-to-movie ratio: {get_tv_to_movie_ratio()} TV clips per movie clip")
    else:
        app_log("Movies disabled for this single-show run.")

    return True, "Ready"


class ProjectNonsenseApp:
    """Small clickable window for choosing shows and controlling playback."""

    def __init__(self, root):
        self.root = root
        self.root.title("Project Nonsense")
        self.root.geometry("760x720")
        self.root.protocol("WM_DELETE_WINDOW", self.on_close)

        self.mode = tk.StringVar(value="custom")
        self.show_vars = {show: tk.BooleanVar(value=False) for show in SHOW_OPTIONS}
        self.randomize_var = tk.BooleanVar(value=True)
        self.movies_var = tk.BooleanVar(value=True)
        self.status_var = tk.StringVar(value="Choose shows, then click Start Playback.")
        self.speed_var = tk.StringVar(value="Speed: normal")
        self.pip_var = tk.StringVar(value="PiP: off")
        self.fullscreen_var = tk.StringVar(value="Fullscreen: off")
        self.log_box = None

        self.build_config_screen()

    def clear_window(self):
        for child in self.root.winfo_children():
            child.destroy()

    def build_config_screen(self):
        self.clear_window()

        outer = tk.Frame(self.root, padx=14, pady=14)
        outer.pack(fill="both", expand=True)

        tk.Label(outer, text="Project Nonsense", font=("Arial", 22, "bold")).pack(anchor="w")
        tk.Label(
            outer,
            text="Pick what should play. No typing in Terminal needed.",
            font=("Arial", 12),
        ).pack(anchor="w", pady=(0, 12))

        preset_frame = tk.LabelFrame(outer, text="Quick choices", padx=8, pady=8)
        preset_frame.pack(fill="x", pady=(0, 10))

        tk.Button(preset_frame, text="All", width=10, command=lambda: self.apply_preset("all")).grid(row=0, column=0, padx=3, pady=3)
        tk.Button(preset_frame, text="Cartoon", width=10, command=lambda: self.apply_preset("cartoon")).grid(row=0, column=1, padx=3, pady=3)
        tk.Button(preset_frame, text="Anime", width=10, command=lambda: self.apply_preset("anime")).grid(row=0, column=2, padx=3, pady=3)
        tk.Button(preset_frame, text="Indie", width=10, command=lambda: self.apply_preset("indie")).grid(row=0, column=3, padx=3, pady=3)
        tk.Button(preset_frame, text="TV Time", width=10, command=lambda: self.apply_preset("tv time")).grid(row=0, column=4, padx=3, pady=3)

        tk.Label(
            preset_frame,
            text="TV Time: cartoon after 5 AM, indie after 1 PM, anime after 7 PM.",
            wraplength=700,
            justify="left",
        ).grid(row=1, column=0, columnspan=5, sticky="w", pady=(6, 0))

        show_frame = tk.LabelFrame(outer, text="Show folders", padx=8, pady=8)
        show_frame.pack(fill="both", expand=True, pady=(0, 10))

        canvas = tk.Canvas(show_frame, highlightthickness=0)
        scrollbar = tk.Scrollbar(show_frame, orient="vertical", command=canvas.yview)
        checks_frame = tk.Frame(canvas)

        checks_frame.bind(
            "<Configure>",
            lambda event: canvas.configure(scrollregion=canvas.bbox("all")),
        )

        canvas.create_window((0, 0), window=checks_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

        for index, show in enumerate(SHOW_OPTIONS):
            row = index // 3
            column = index % 3
            tk.Checkbutton(
                checks_frame,
                text=show,
                variable=self.show_vars[show],
                command=self.mark_custom_mode,
                anchor="w",
                width=23,
            ).grid(row=row, column=column, sticky="w", padx=4, pady=2)

        button_row = tk.Frame(outer)
        button_row.pack(fill="x", pady=(0, 10))
        tk.Button(button_row, text="Select All", command=lambda: self.apply_preset("all")).pack(side="left", padx=(0, 6))
        tk.Button(button_row, text="Clear", command=self.clear_show_checks).pack(side="left")

        options = tk.LabelFrame(outer, text="Playback options", padx=8, pady=8)
        options.pack(fill="x", pady=(0, 10))

        tk.Radiobutton(options, text="Randomized TV clips", variable=self.randomize_var, value=True).pack(anchor="w")
        tk.Radiobutton(options, text="In order (only used when one show is selected)", variable=self.randomize_var, value=False).pack(anchor="w")
        tk.Checkbutton(options, text="Include movies", variable=self.movies_var).pack(anchor="w", pady=(4, 0))

        tk.Label(outer, textvariable=self.status_var, wraplength=700, justify="left").pack(anchor="w", pady=(0, 10))
        tk.Button(outer, text="Start Playback", font=("Arial", 14, "bold"), command=self.start_playback).pack(fill="x", ipady=8)

    def mark_custom_mode(self):
        self.mode.set("custom")

    def set_all_checks(self, selected_shows):
        selected = set(selected_shows)
        for show, variable in self.show_vars.items():
            variable.set(show in selected)

    def apply_preset(self, preset):
        self.mode.set(preset)

        if preset == "all":
            self.set_all_checks(SHOW_OPTIONS)
            self.status_var.set("All shows selected.")
        elif preset == "cartoon":
            self.set_all_checks(CARTOON_SHOWS)
            self.status_var.set("Cartoon shows selected.")
        elif preset == "anime":
            self.set_all_checks(ANIME_SHOWS)
            self.status_var.set("Anime shows selected.")
        elif preset == "indie":
            self.set_all_checks(INDIE_SHOWS)
            self.status_var.set("Indie shows selected.")
        elif preset == "tv time":
            self.set_all_checks([])
            self.status_var.set("TV Time selected. The script will choose the preset from the clock.")

    def clear_show_checks(self):
        self.mode.set("custom")
        self.set_all_checks([])
        self.status_var.set("Cleared. Choose one or more shows, or click a quick choice.")

    def selected_shows_from_checks(self):
        return [show for show, variable in self.show_vars.items() if variable.get()]

    def start_playback(self):
        global selected_tv_shows, tv_time_enabled, randomize_tv_videos, play_movies, playback_thread, stop_program

        mode = self.mode.get()
        tv_time_enabled = mode == "tv time"

        if tv_time_enabled:
            selected_tv_shows = TV_TIME_CHOICE
            randomize_tv_videos = True
            play_movies = True
        else:
            selected_tv_shows = self.selected_shows_from_checks()

            if not selected_tv_shows:
                messagebox.showerror("Nothing selected", "Choose at least one show, or choose TV Time.")
                return

            # The old terminal version only offered ordered playback when exactly one show was selected.
            randomize_tv_videos = True if len(selected_tv_shows) != 1 else bool(self.randomize_var.get())
            play_movies = bool(self.movies_var.get())

        stop_program = False
        app_log(f"TV_FOLDER: {TV_FOLDER}")
        app_log(f"MOVIE_FOLDER: {MOVIE_FOLDER}")
        app_log(f"TV exists: {os.path.exists(TV_FOLDER)}")
        app_log(f"Movie exists: {os.path.exists(MOVIE_FOLDER)}")
        app_log(f"VLC_PATH: {VLC_PATH}")
        app_log(f"VLC exists: {os.path.exists(VLC_PATH) if VLC_PATH else False}")
        app_log("Player plan: " + ("Use QuickTime Player first, fall back to VLC if QuickTime fails" if PREFER_QUICKTIME_PLAYER else "Use VLC first, fall back to QuickTime Player if VLC is missing"))
        ok, message = initialize_selected_videos()
        if not ok:
            messagebox.showerror("Could not start", message)
            return

        self.build_control_screen()
        playback_thread = threading.Thread(target=playback_loop, daemon=True)
        playback_thread.start()

    def build_control_screen(self):
        self.clear_window()

        outer = tk.Frame(self.root, padx=14, pady=14)
        outer.pack(fill="both", expand=True)

        tk.Label(outer, text="Project Nonsense is running", font=("Arial", 20, "bold")).pack(anchor="w")
        tk.Label(outer, textvariable=self.status_var, wraplength=700, justify="left").pack(anchor="w", pady=(4, 12))

        controls = tk.LabelFrame(outer, text="Keyboard controls", padx=8, pady=8)
        controls.pack(fill="x", pady=(0, 10))

        hotkey_text = (
            "`  Stop program, close the video, and close this window\n"
            "|  Skip current clip\n"
            "_  Toggle QuickTime fullscreen\n"
            "}  Toggle QuickTime Picture-in-Picture\n"
            "{  Toggle double speed"
        )
        tk.Label(controls, text=hotkey_text, justify="left", anchor="w").pack(fill="x")

        indicator_frame = tk.Frame(outer)
        indicator_frame.pack(fill="x", pady=(0, 10))
        tk.Label(indicator_frame, textvariable=self.speed_var).pack(anchor="w")
        tk.Label(indicator_frame, textvariable=self.pip_var).pack(anchor="w")
        tk.Label(indicator_frame, textvariable=self.fullscreen_var).pack(anchor="w")

        tk.Label(outer, text="Status log").pack(anchor="w")
        self.log_box = scrolledtext.ScrolledText(outer, height=18, wrap="word")
        self.log_box.pack(fill="both", expand=True)
        self.safe_log("Keyboard controls are ready.")

    def safe_log(self, message):
        try:
            self.root.after(0, self.append_log, message)
        except Exception:
            pass

    def append_log(self, message):
        self.status_var.set(message)
        if self.log_box is not None:
            self.log_box.insert("end", message + "\n")
            self.log_box.see("end")

    def skip_clip(self):
        global skip_current_video, current_process

        skip_current_video = True
        app_log("Skipping current clip...")

        if current_player == "quicktime":
            close_quicktime_documents(close_all=False)
        elif current_player == "vlc" and current_process:
            current_process.terminate()

    def stop_program(self):
        request_shutdown("Stopping program...", close_window=False)

    def toggle_fullscreen_button(self):
        global quicktime_should_be_fullscreen

        if current_player == "quicktime":
            toggle_result = toggle_quicktime_fullscreen()
            app_log(f"QuickTime fullscreen result: {toggle_result}")
        else:
            app_log("Fullscreen preference will apply to the next QuickTime clip.")

        quicktime_should_be_fullscreen = not quicktime_should_be_fullscreen
        self.fullscreen_var.set("Fullscreen: on" if quicktime_should_be_fullscreen else "Fullscreen: off")

    def toggle_pip_button(self):
        global quicktime_should_be_picture_in_picture

        quicktime_should_be_picture_in_picture = not quicktime_should_be_picture_in_picture
        self.pip_var.set("PiP: on" if quicktime_should_be_picture_in_picture else "PiP: off")
        app_log(f"Picture-in-Picture preference is now {'ON' if quicktime_should_be_picture_in_picture else 'OFF'}.")

        if current_player == "quicktime":
            result = set_quicktime_picture_in_picture(quicktime_should_be_picture_in_picture)
            app_log(f"QuickTime PiP result: {result}")

    def toggle_speed_button(self):
        global playback_speed_double

        playback_speed_double = not playback_speed_double
        self.speed_var.set("Speed: 2x" if playback_speed_double else "Speed: normal")
        app_log(f"Playback speed preference is now {'2x' if playback_speed_double else 'normal speed'}.")

        if current_player == "quicktime":
            result = set_quicktime_playback_rate(get_current_playback_rate())
            app_log(f"QuickTime speed result: {result}")

    def close_window_from_hotkey(self):
        try:
            self.root.after(0, self.destroy_root_safely)
        except Exception:
            pass

    def destroy_root_safely(self):
        try:
            self.root.quit()
        except Exception:
            pass
        try:
            self.root.destroy()
        except Exception:
            pass

    def on_close(self):
        request_shutdown("Window closed. Stopping program...", close_window=False)
        self.root.destroy()


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
    Hotkeys:
    - ` stops playback, closes the current video, and closes the Python window
    - | skips the current clip
    - _ toggles QuickTime fullscreen
    - } toggles QuickTime Picture-in-Picture
    - { toggles double speed
    """
    global stop_program, skip_current_video, current_process, current_player, quicktime_should_be_fullscreen, quicktime_should_be_picture_in_picture, playback_speed_double
    try:
        if key.char == '`':  # backtick pressed
            request_shutdown("Backtick pressed. Stopping program...", close_window=True)
            return False  # stop listener

        if key.char == '|':
            app_log("Pipe pressed. Skipping current clip...")
            skip_current_video = True
            if current_player == "quicktime":
                close_quicktime_documents(close_all=False)
            elif current_player == "vlc" and current_process:
                current_process.terminate()

        if key.char == '_' and current_player == "quicktime":
            toggle_result = toggle_quicktime_fullscreen()
            if toggle_result == "NO_DOCUMENTS":
                app_log("No QuickTime document is open to toggle fullscreen.")
            elif toggle_result in ("TOGGLED_PRESENTATION", "TOGGLED_KEYSTROKE"):
                quicktime_should_be_fullscreen = not quicktime_should_be_fullscreen
                app = globals().get("gui_app")
                if app is not None:
                    app.fullscreen_var.set("Fullscreen: on" if quicktime_should_be_fullscreen else "Fullscreen: off")

        if key.char == '}':
            quicktime_should_be_picture_in_picture = not quicktime_should_be_picture_in_picture
            mode_text = "ON" if quicktime_should_be_picture_in_picture else "OFF"
            app_log(f"Picture-in-Picture preference is now {mode_text}.")
            app = globals().get("gui_app")
            if app is not None:
                app.pip_var.set("PiP: on" if quicktime_should_be_picture_in_picture else "PiP: off")

            if current_player == "quicktime":
                pip_result = set_quicktime_picture_in_picture(quicktime_should_be_picture_in_picture)
                app_log(f"QuickTime PiP result: {pip_result}")
                if pip_result == "NO_DOCUMENTS":
                    app_log("No QuickTime document is open. The setting will apply to the next QuickTime clip.")
                elif pip_result == "PIP_MENU_ITEM_NOT_FOUND":
                    app_log("QuickTime Picture-in-Picture menu item was not found. Make sure the video window is active and your Python app has Accessibility permission.")
            else:
                app_log("This will apply to the next QuickTime clip.")

        if key.char == '{':
            playback_speed_double = not playback_speed_double
            speed_text = "2x" if playback_speed_double else "normal speed"
            app_log(f"Playback speed preference is now {speed_text}.")
            app = globals().get("gui_app")
            if app is not None:
                app.speed_var.set("Speed: 2x" if playback_speed_double else "Speed: normal")

            if current_player == "quicktime":
                rate_result = set_quicktime_playback_rate(get_current_playback_rate())
                app_log(f"QuickTime speed result: {rate_result}")
            elif current_player == "vlc" and current_process:
                app_log("VLC speed will apply on the next clip. Skip the current clip if you want it immediately.")
            else:
                app_log("This will apply to the next clip.")

    except AttributeError:
        pass

# Start keyboard listener in background
try:
    listener = keyboard.Listener(on_press=on_press)
    listener.start()
except Exception as e:
    app_log(f"Keyboard listener could not start: {e}")
    app_log("If needed, close the window to stop the script.")


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

    app_log(f"Playing: {video}")

    try:
        if PREFER_QUICKTIME_PLAYER:
            try:
                play_with_quicktime(video)
            except Exception as quicktime_error:
                app_log(f"QuickTime Player failed for {video}: {quicktime_error}")
                if VLC_PATH:
                    app_log("Trying VLC instead...")
                    play_with_vlc(video)
                else:
                    app_log("VLC was not found, so there is no fallback player available.")
        else:
            if VLC_PATH:
                try:
                    play_with_vlc(video)
                except Exception as vlc_error:
                    app_log(f"VLC failed for {video}: {vlc_error}")
                    app_log("Trying QuickTime Player instead...")
                    play_with_quicktime(video)
            else:
                app_log("VLC not found. Trying QuickTime Player instead...")
                play_with_quicktime(video)

    except Exception as e:
        app_log(f"Failed to play {video}: {e}")

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
def playback_loop():
    """Run the same playback loop as before, but from a background thread."""
    global stop_program

    tv_history = []
    movie_history = []

    while not stop_program:
        # Recalculate the ratio each loop because TV Time may change the active preset.
        # If movies are disabled, this intentionally becomes one TV clip per loop.
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
                app_log("No TV videos were found for the current TV Time preset.")
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

    app_log("Program stopped safely.")


def main():
    global gui_app

    root = tk.Tk()
    gui_app = ProjectNonsenseApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()
