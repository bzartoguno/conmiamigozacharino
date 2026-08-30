PROJECT BUDDYBUDDY — LOCAL CYN CHATBOT
======================================

WHAT IT DOES
------------
Project BuddyBuddy is a standalone, old-school ELIZA-style roleplay chatbot.
It imitates a quiet, mechanically awkward, CYN-inspired conversational style
using regular expressions, keyword tables, conversation state, response
templates, randomness, pronoun reflection, and a small JSON memory. It does not
call ChatGPT, another language model, an API, or the internet.

The interface is a tkinter chat window with Send, Clear, and Exit buttons. Its
menus can save the visible transcript, select Low/Normal/High personality
intensity, disable memory or stage directions, and erase remembered facts.

INSTALLATION
------------
Python 3.9 or newer is recommended. There are no third-party packages and no
pip installation command. tkinter ships with the standard Python installers on
Windows and macOS. Some minimal Linux distributions package it separately (for
example, Ubuntu/Debian users can run: sudo apt install python3-tk).

RUNNING ON macOS (AND OTHER SYSTEMS)
------------------------------------
1. Download/copy cyn_bot.py to a folder.
2. Open Terminal and change to that folder:
       cd /path/to/folder
3. Start the graphical program:
       python3 cyn_bot.py

No API key and no network connection are needed. For a terminal-only personality
sample, run:
       python3 cyn_bot.py --test

To see intent, emotion, topic, mood, interest, irritation, and selected-template
diagnostics in the terminal while chatting, run:
       python3 cyn_bot.py --debug

HOW PATTERN MATCHING WORKS
--------------------------
CynBot.respond() normalizes input and then checks repetition, named topics,
emotional terms, and prioritized intents. Captured phrases from statements such
as "I want..." and "I dislike..." pass through classic ELIZA pronoun reflection.
The bot extracts explicit memories, updates interest/irritation/trust/mood,
selects an intent or topic response family, optionally adds restrained
personality decoration, and rejects recently used identical responses.

Named topics are retained separately from intent. Thus "I hate Uzi" can be
classified as USER_DISLIKES while still selecting an UZI-aware answer. A short
follow-up such as "homework" can also use the previous school topic. Unknown
input falls through to observation, question, utility, and quiet-listening
templates centered on a useful keyword.

CUSTOMIZING RESPONSES
---------------------
Open cyn_bot.py and edit CynBot.RESPONSES. Each key is an intent/topic and each
value is a list of possible original responses. Common categories deliberately
contain many alternatives. Templates for USER_WANTS, USER_LIKES,
USER_DISLIKES, and USER_IDENTITY may contain {capture}; this is replaced by the
pronoun-reflected part of the user's sentence. The _fallback() method contains
the unknown-input families. CynGUI.OPENINGS contains startup messages.

ADDING TRIGGER WORDS
--------------------
Edit CynBot.TRIGGERS for conversational intents, CynBot.EMOTIONS for emotional
language, and CynBot.TOPIC_WORDS for subjects and named characters. Earlier
entries have priority. Add a matching key to CynBot.RESPONSES when creating a
new category. High-priority captured sentence patterns live in
CynBot.detect_intent(). Explicit-memory patterns live in CynMemory.extract().

ADJUSTING NARRATED ACTIONS
--------------------------
CynPersonality.stage_probability defines the chance for each intensity:
Low=0.10, Normal=0.30, and High=0.40. Change those decimal values to tune the
frequency. CynPersonality.STAGES contains the action/expression phrases. The
Settings menu can turn stage directions off without editing code. Decoration
avoids adding another stage direction when the base response already has one.

MEMORY AND RESETTING IT
-----------------------
When memory is enabled, explicit facts are saved beside the program in
cyn_memory.json. The bot currently remembers a name, favorites, likes,
dislikes, and simple "I have a..." pet facts. It references them only when a
memory question or suitable opportunity occurs.

Choose Settings > Forget Everything to delete the file and clear in-memory
facts. You may also exit the program and manually delete cyn_memory.json. Turn
Settings > Memory On off to stop extracting and writing facts. Test mode always
disables writes to permanent memory.

PROJECT FILES
-------------
cyn_bot.py   Complete engine, memory, personality, GUI, and test mode.
README.txt   This guide.

The source is extensively commented at major extension points and intentionally
uses straightforward tables and functions rather than clever abstractions.
