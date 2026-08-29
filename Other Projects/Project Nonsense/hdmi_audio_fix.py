#!/usr/bin/env python3
"""
Project Nonsense - HDMI Audio Fixer for Raspberry Pi

What it does:
- Detects the Raspberry Pi boot config file.
- Makes a dated backup before changing anything.
- Ensures hdmi_drive=2 is present in a global [all] section.
- Does not add the Project Nonsense block more than once.
- Optionally reboots after the change.

Run:
    sudo python3 hdmi_audio_fix.py

Optional automatic reboot:
    sudo python3 hdmi_audio_fix.py --reboot
"""

import os
import sys
import shutil
import subprocess
from datetime import datetime
from pathlib import Path

MARKER_START = "# ===== Project Nonsense HDMI Audio Fix ====="
MARKER_END = "# ===== End Project Nonsense HDMI Audio Fix ====="

FIX_BLOCK = f"""
{MARKER_START}
[all]
hdmi_drive=2
{MARKER_END}
""".lstrip()


def find_config_file():
    """
    Newer Raspberry Pi OS uses /boot/firmware/config.txt.
    Older releases commonly use /boot/config.txt.
    """
    candidates = [
        Path("/boot/firmware/config.txt"),
        Path("/boot/config.txt"),
    ]

    for path in candidates:
        if path.is_file():
            return path

    return None


def require_root():
    if os.geteuid() != 0:
        print()
        print("This program needs administrator permission because")
        print("the Raspberry Pi boot configuration is protected.")
        print()
        print("Run it like this:")
        print()
        print(f"sudo python3 {Path(__file__).resolve()}")
        print()
        sys.exit(1)


def make_backup(config_path):
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_path = config_path.with_name(
        f"{config_path.name}.project-nonsense-backup-{timestamp}"
    )

    shutil.copy2(config_path, backup_path)
    return backup_path


def remove_old_project_nonsense_block(text):
    """
    Remove an older copy of our own marked block so rerunning the program
    never creates duplicates.
    """
    start = text.find(MARKER_START)

    while start != -1:
        end = text.find(MARKER_END, start)

        if end == -1:
            # If a damaged/incomplete marker exists, leave it alone.
            break

        end += len(MARKER_END)

        # Also remove one following newline if present.
        if end < len(text) and text[end] == "\n":
            end += 1

        text = text[:start] + text[end:]
        start = text.find(MARKER_START)

    return text


def active_hdmi_drive_is_already_2(text):
    """
    Check whether there is already an uncommented hdmi_drive=2 somewhere.
    This is informational only. We still install our clearly marked [all]
    block so the setting is explicit and easy to find later.
    """
    for raw_line in text.splitlines():
        line = raw_line.strip()

        if not line or line.startswith("#"):
            continue

        compact = line.replace(" ", "").lower()

        if compact == "hdmi_drive=2":
            return True

    return False


def install_fix(config_path):
    original_text = config_path.read_text(
        encoding="utf-8",
        errors="replace",
    )

    already_had_hdmi_drive_2 = active_hdmi_drive_is_already_2(original_text)

    cleaned_text = remove_old_project_nonsense_block(original_text).rstrip()

    new_text = cleaned_text + "\n\n" + FIX_BLOCK

    # If rerunning produced exactly the same contents, no write is needed.
    if new_text == original_text:
        return False, None, already_had_hdmi_drive_2

    backup_path = make_backup(config_path)

    config_path.write_text(
        new_text,
        encoding="utf-8",
    )

    return True, backup_path, already_had_hdmi_drive_2


def reboot_now():
    try:
        subprocess.run(
            ["reboot"],
            check=False,
        )
    except Exception as error:
        print("Could not start reboot:", error)


def main():
    print()
    print("=" * 66)
    print("PROJECT NONSENSE - RASPBERRY PI HDMI AUDIO FIXER")
    print("=" * 66)

    require_root()

    config_path = find_config_file()

    if not config_path:
        print()
        print("ERROR: I could not find either:")
        print("  /boot/firmware/config.txt")
        print("or")
        print("  /boot/config.txt")
        print()
        print("No changes were made.")
        return

    print()
    print("Boot config found:")
    print(config_path)

    try:
        changed, backup_path, already_had_hdmi_drive_2 = install_fix(
            config_path
        )
    except Exception as error:
        print()
        print("ERROR: The config file could not be updated.")
        print(error)
        print()
        print("No reboot will be attempted.")
        return

    print()

    if already_had_hdmi_drive_2:
        print("An active hdmi_drive=2 setting was already present.")

    if changed:
        print("HDMI audio fix installed.")
        print()
        print("The following block is now at the end of the config:")
        print()
        print(MARKER_START)
        print("[all]")
        print("hdmi_drive=2")
        print(MARKER_END)

        if backup_path:
            print()
            print("Backup created:")
            print(backup_path)
    else:
        print("The Project Nonsense HDMI audio fix was already correct.")
        print("No config change was needed.")

    print()
    print("A reboot is required for config.txt changes to take effect.")

    auto_reboot = "--reboot" in sys.argv

    if auto_reboot:
        print()
        print("Rebooting now...")
        reboot_now()
        return

    print()
    answer = input("Reboot now? [y/N]: ").strip().lower()

    if answer in ("y", "yes"):
        print("Rebooting...")
        reboot_now()
    else:
        print()
        print("No reboot started.")
        print("When ready, run:")
        print("sudo reboot")


if __name__ == "__main__":
    main()
