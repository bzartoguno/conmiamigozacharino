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
- Conversations are powered by the full local `CynBot` engine in `cyn_bot.py`,
  including its intent detection, personality, conversation state, and fact
  recall. There is no separate simplified chat table in the companion window.
- Name, personality, preferences, and the latest 50 messages are kept in a
  human-readable JSON file.
- Facts learned by `CynBot` are stored beside that file as `cyn_memory.json`.

## Test the non-graphical core

```bash
python3 -m unittest discover -s tests -v
```

diff --git a/Other Projects/Project BuddyBuddy/Actual Code/README.md b/Other Projects/Project BuddyBuddy/Actual Code/README.md
index 4d9fe1f906edade7a41a4874bb02840e9881ed64..c41f4fa579c1e29c821ac06a10ee9d63b8525a1b 100755
--- a/Other Projects/Project BuddyBuddy/Actual Code/README.md	
+++ b/Other Projects/Project BuddyBuddy/Actual Code/README.md	
@@ -16,28 +16,50 @@ model, API, network service, or analytics service.
 
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
 
-Tk transparency support varies by desktop/window manager. Windows supports the
-transparent color used here; on unsupported systems the magenta window color
-may remain visible. The memory and behavior tests do not require a display.
+## Character-window transparency
+
+Only the borderless character window requests transparency. Chat and speech
+bubbles deliberately remain normal, opaque windows. Every GIF frame uses binary
+transparency and a dedicated `#ff00ff` palette entry matching the character
+window's color key. GIF has no partial alpha channel, so artwork must use fully
+transparent edge pixels rather than a matte color to avoid a colored halo.
+
+Tk exposes no single portable transparent-window API:
+
+- **Windows:** BuddyBuddy uses Tk's `-transparentcolor` support and is the fully
+  supported target. Window size follows the active GIF's pixel dimensions.
+- **macOS:** standard Aqua Tk does not implement the Windows color-key option.
+  The character window therefore cannot provide this overlay effect reliably.
+- **X11:** Tk does not provide portable per-pixel or color-key transparency;
+  behavior also varies with the compositor and window manager.
+- **Wayland:** native Wayland compositors generally do not expose this Tk
+  color-key behavior, and XWayland results vary by compositor.
+
+On an unsupported platform, or when a Windows Tk build rejects the attribute,
+BuddyBuddy emits one concise runtime warning instead of silently leaving an
+unexplained magenta rectangle. The application remains usable, but the color-key
+background is visible. Validate the overlay on the actual Windows/Tk release
+used for distribution; macOS, X11, and Wayland should be treated as known
+fallback environments. The non-graphical tests do not require a display.
