# BuddyBuddy desktop companion

BuddyBuddy is a **non-AI, fully local** desktop companion built with Python and
Tkinter. It uses the animated GIF art in `../CYN-images`; it does not call a
model, API, network service, or analytics service.

## Run it

1. Install Python 3.10 or newer with Tk support.
2. Open a terminal in this `Actual Code` folder.
3. Run:

   ```bash
   python3 -m buddybuddy.app
   ```

The default memory file is `~/.buddybuddy/memory.json`. Override either path:

```bash
python3 -m buddybuddy.app --images ../CYN-images --memory ./my-memory.json
```

## Controls and features

- **Drag** Cyn with the left mouse button; **double-click** to talk.
- **Right-click** for Talk, Walk, Sleep, Rename, and Quit.
- **Ctrl+Shift+B** opens the message window while BuddyBuddy has focus.
- The transparent, always-on-top character plays idle, walking, sleeping,
  talking, reacting, and dragging GIF animations.
- Conversations use a small keyword/response table in `buddybuddy/app.py`.
  Edit `RESPONSES` to give the companion more non-AI dialogue.
- Name, personality, preferences, and the latest 50 messages are kept in a
  human-readable JSON file.

## Test the non-graphical core

```bash
python3 -m unittest discover -s tests -v
```

Tk transparency support varies by desktop/window manager. Windows supports the
transparent color used here; on unsupported systems the magenta window color
may remain visible. The memory and behavior tests do not require a display.
