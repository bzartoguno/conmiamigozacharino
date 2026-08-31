# BuddyBuddy desktop companion

BuddyBuddy is a **non-AI, fully local** desktop companion built with Python and
Tkinter. It uses the animated GIF art in `../CYN-images`; it does not call a
model, API, network service, or analytics service.

## Chatbot decision

CYN remains a local, rule-based bot. Its small talk, character roleplay, and
local fact recall are already served by explicit patterns, and this keeps the
companion private, offline, predictable, and free of credential management.
Adding a generative model would introduce latency, network failures, cost, and
privacy tradeoffs without a requirement for open-ended knowledge or prose.
The chat windows therefore identify the implementation as rule-based, and
unrecognized input receives an explicit fallback asking the user to rephrase.

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

To inspect frame replacement slowly, pass one GIF name. BuddyBuddy plays only
that animation at 500 ms per frame and prints its frame number, disposal mode,
and dimensions while retaining the real transparent overlay:

```bash
python3 -m buddybuddy.app --debug-gif Walking2-CYN.gif
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

- **macOS (Aqua):** BuddyBuddy deliberately uses an ordinary opaque canvas.
  Aqua transparent top-levels can retain backing-store pixels when an animated
  image changes from opaque to transparent, causing previous frames to remain
  visible regardless of Canvas deletion. The visible `#ff00ff` background is
  retained so each tick reliably erases the complete previous frame.
- **Windows:** BuddyBuddy retains the `-transparentcolor` color-key path on Tk
  builds that provide it. The character window and character widget use the
  matching `#ff00ff` key color, which shows through the GIF's transparent areas.
- **Other Tk windowing systems:** no color-key or per-window transparency path
  is configured. X11, Wayland, and similar environments therefore use the
  visible `#ff00ff` character-window background.

On Aqua, BuddyBuddy emits a runtime warning explaining that transparency is
disabled to guarantee correct animation. If the Windows color-key attribute is
rejected, BuddyBuddy warns and continues with the same visible magenta canvas.
Unsupported platforms also warn and use this reliable opaque fallback. Test the
overlay with the exact Python/Tk build intended for distribution.

### Required manual macOS verification

Fake or mocked Tk windows in the unit suite do **not** establish macOS support.
Before distributing BuddyBuddy for macOS, run this command on the target Mac
with the exact Python/Tk build being shipped:

```bash
python3 -m buddybuddy.app --diagnose
```

The diagnostic opens a real, temporary CYN overlay, loads a real GIF frame, and
prints the Tk windowing system, Tk patch level, configuration operations, and
whether initialization completed. Confirm that it reports Aqua, completes
initialization, and shows no pixels from an earlier frame. This real-window
check is the required macOS verification; display-independent tests are not a
substitute.

For the animation-specific check, additionally run `--debug-gif` on the target
Mac and watch several slow frames. The renderer keeps one Canvas, deletes every
old canvas item, forces a complete Tk update to present the blank surface, and
only then creates the single replacement image. It also prints
the GIF disposal metadata so stale opaque pixels are easy to spot.

## Test the non-graphical core

```bash
python3 -m unittest discover -s tests -v
```
