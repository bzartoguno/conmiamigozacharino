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
- The walking artwork faces left as supplied. BuddyBuddy uses those original
  frames when moving left and mirrors them when moving right.
- Conversations are powered by the full local `CynBot` engine in `cyn_bot.py`,
  including its intent detection, personality, conversation state, and fact
  recall. After you send a chat message, CYN's response appears in the speech
  bubble above the character; there is no separate simplified chat table in the
  companion window.
- Name, personality, preferences, and the latest 50 messages are kept in a
  human-readable JSON file.
- Facts learned by `CynBot` are stored beside that file as `cyn_memory.json`.

## Character-window transparency

Transparency applies only to the borderless character window. The chat window
and speech bubble remain ordinary opaque windows. Support depends on the Tk
windowing-system features included with Python; installing Python 3.10 or newer
does not by itself guarantee that the required transparency attributes exist.

- **macOS (Aqua):** BuddyBuddy requests Aqua's `-transparent` window attribute
  and uses `systemTransparent` for the window and character-widget background.
  This requires an Aqua Tk build that implements both features. It does not use
  the Windows color-key option on macOS.
- **Windows:** BuddyBuddy retains the `-transparentcolor` color-key path on Tk
  builds that provide it. The character window and character widget use the
  matching `#ff00ff` key color, which shows through the GIF's transparent areas.
- **Other Tk windowing systems:** no color-key or per-window transparency path
  is configured. X11, Wayland, and similar environments therefore use the
  visible `#ff00ff` character-window background.

If the Aqua attributes or the Windows color-key attribute are rejected by the
installed Tk version, BuddyBuddy emits a runtime warning on standard error and
continues running. The character remains usable, but its window background may
be visible instead of transparent. On unsupported platforms it likewise warns
and uses the visible magenta fallback. Test the overlay with the exact Python/Tk
build intended for distribution.

## Test the non-graphical core

```bash
python3 -m unittest discover -s tests -v
```
