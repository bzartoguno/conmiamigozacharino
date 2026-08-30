#!/usr/bin/env python3
"""Project BuddyBuddy: a completely local, rule-based CYN-inspired chatbot.

The program deliberately uses no language model.  ``CynBot`` runs an ELIZA-like
pipeline; ``CynMemory`` owns the small JSON memory; ``CynPersonality`` decorates
answers; and ``CynGUI`` is the optional tkinter front end.
"""

from __future__ import annotations

import argparse
import difflib
import json
import random
import re
from collections import Counter, deque
from pathlib import Path
from typing import Optional

DEBUG = False
MEMORY_FILE = Path(__file__).with_name("cyn_memory.json")


def normalize_text(text: str) -> str:
    """Return lower-case, whitespace-normalized text while retaining apostrophes."""
    text = text.lower().replace("’", "'")
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s'?]", " ", text)).strip()


def reflect_pronouns(phrase: str) -> str:
    """Reflect first/second-person words without replacement collisions."""
    swaps = {
        "i": "you", "me": "you", "my": "your", "mine": "yours",
        "myself": "yourself", "you": "I", "your": "my", "yours": "mine",
        "yourself": "myself", "am": "are", "are": "am", "was": "were",
        "were": "was", "i'm": "you are", "you're": "I am",
        "i've": "you have", "you've": "I have", "i'll": "you will",
        "you'll": "I will",
    }
    words = re.findall(r"[\w']+|[^\w']+", phrase.lower())
    result = "".join(swaps.get(word, word) for word in words).strip()
    return result[:1].upper() + result[1:] if result else result


class CynMemory:
    """Load, save, extract, and erase explicitly supplied user facts."""

    def __init__(self, path: Path = MEMORY_FILE, enabled: bool = True) -> None:
        self.path = path
        self.enabled = enabled
        self.data = {"user_name": None, "facts": {}, "likes": [], "dislikes": [], "pets": []}
        self.load()

    def load(self) -> None:
        if not self.enabled or not self.path.exists():
            return
        try:
            loaded = json.loads(self.path.read_text(encoding="utf-8"))
            for key in self.data:
                if key in loaded and isinstance(loaded[key], type(self.data[key])):
                    self.data[key] = loaded[key]
        except (OSError, ValueError):
            # A damaged optional memory file must never prevent startup.
            pass

    def save(self) -> None:
        if self.enabled:
            self.path.write_text(json.dumps(self.data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    @staticmethod
    def _clean(value: str) -> str:
        return re.sub(r"\s+", " ", value.strip(" .!?,'\"")).strip()[:100]

    def extract(self, original: str) -> list[tuple[str, str]]:
        """Extract only clear first-person declarations, returning newly found facts."""
        if not self.enabled:
            return []
        found: list[tuple[str, str]] = []
        patterns = [
            ("name", r"\bmy name is\s+([A-Za-z][A-Za-z '-]{0,40})"),
            ("favorite", r"\bmy favou?rite\s+([\w ]{2,30}?)\s+is\s+([^.!?]{1,60})"),
            ("pet", r"\bi have (?:a|an)\s+([^.!?]{2,70})"),
            ("like", r"\bi (?:really )?(?:like|love|enjoy)\s+([^.!?]{1,70})"),
            ("dislike", r"\bi (?:really )?(?:hate|dislike)\s+([^.!?]{1,70})"),
        ]
        for kind, pattern in patterns:
            match = re.search(pattern, original, re.I)
            if not match:
                continue
            if kind == "name":
                value = self._clean(match.group(1)).title()
                self.data["user_name"] = value
                found.append(("name", value))
            elif kind == "favorite":
                key, value = self._clean(match.group(1)).lower(), self._clean(match.group(2))
                self.data["facts"][f"favorite {key}"] = value
                found.append((f"favorite {key}", value))
            else:
                value = self._clean(match.group(1))
                bucket = {"pet": "pets", "like": "likes", "dislike": "dislikes"}[kind]
                if value.lower() not in [str(item).lower() for item in self.data[bucket]]:
                    self.data[bucket].append(value)
                found.append((kind, value))
            break
        if found:
            self.save()
        return found

    def summary(self, wanted: str = "") -> Optional[str]:
        low = wanted.lower()
        if "name" in low and self.data["user_name"]:
            return f"Your name is {self.data['user_name']}. Memory remains functional."
        if ("like" in low or "about me" in low) and self.data["likes"]:
            return f"You told me you like {random.choice(self.data['likes'])}."
        if ("hate" in low or "dislike" in low) and self.data["dislikes"]:
            return f"You classified {random.choice(self.data['dislikes'])} as undesirable."
        for key, value in self.data["facts"].items():
            if key in low or ("remember" in low and random.random() < .6):
                return f"Your {key} is {value}. I retained it."
        return None

    def forget(self) -> None:
        self.data = {"user_name": None, "facts": {}, "likes": [], "dislikes": [], "pets": []}
        if self.path.exists():
            self.path.unlink()


class CynPersonality:
    """Apply restrained stage directions and intensity-dependent flavor."""

    STAGES = [
        "Small head tilt.", "One slow blink.", "Brief stillness.", "Pleased expression.",
        "Small frown.", "Leans closer.", "Quiet mechanical hum.",
        "Hands fold behind back.", "Looks away. Looks back.", "Interested expression.",
        "Processing.", "Confused pause.", "Polite wave.", "Awkward shuffle.",
        "Eyes narrow.", "Happy little hum.",
    ]
    MACHINE = ["Signal noted.", "Input accepted.", "Memory updated.", "Classification complete."]
    DARK = ["Survival remains optional.", "Nothing caught fire. Efficient.", "The teeth are metaphorical today."]

    def __init__(self, intensity: str = "NORMAL", stage_directions: bool = True) -> None:
        self.intensity = intensity.upper()
        self.stage_directions = stage_directions

    @property
    def stage_probability(self) -> float:
        return {"LOW": .10, "NORMAL": .30, "HIGH": .40}.get(self.intensity, .30)

    def apply(self, response: str, mood: str, allow_stage: bool = True) -> str:
        """Add no more than two modifiers, normally only one."""
        modifiers = 0
        # Do not pile a narrated action onto a response which already begins with one.
        already_staged = any(response.startswith(stage) for stage in self.STAGES)
        if self.stage_directions and allow_stage and not already_staged and random.random() < self.stage_probability:
            response = f"{random.choice(self.STAGES)} {response}"
            modifiers += 1
        machine_chance = {"LOW": .03, "NORMAL": .08, "HIGH": .17}.get(self.intensity, .08)
        if modifiers < 2 and random.random() < machine_chance and len(response.split()) < 16:
            response += " " + random.choice(self.MACHINE)
            modifiers += 1
        dark_chance = {"LOW": .01, "NORMAL": .035, "HIGH": .09}.get(self.intensity, .035)
        if modifiers == 0 and mood in {"amused", "predatory"} and random.random() < dark_chance:
            response += " " + random.choice(self.DARK)
        return response


class CynBot:
    """Pattern-matching conversation engine and state machine."""

    FALLBACK_RESPONSES = (
        "I do not recognize that yet. Try rephrasing it or give me a little more context.",
        "That did not match one of my local rules. What would you like me to focus on?",
        "I only know a limited set of patterns. Please tell me more about that.",
    )

    TOPIC_WORDS = {
        "ABSOLUTE_SOLVER": ("absolute solver", "solver"), "MURDER_DRONES": ("murder drones",),
        "TESSA": ("tessa",), "UZI": ("uzi",), "CYN": ("cyn",),
        "N": (" n ", "about n", "is n", "n?"), "V": (" v ", "about v", "is v", "v?"),
        "J": (" j ", "about j", "is j", "j?"), "ROBOT": ("robot", "drone", "android"),
        "AI": ("artificial intelligence", " ai ", "chatbot", "language model"),
        "TECHNOLOGY": ("computer", "technology", "software", "code", "program"),
        "DEATH": ("death", "dead", "die", "dying", "kill"),
        "DANGER": ("danger", "dangerous", "threat", "unsafe"), "FOOD": ("food", "pizza", "eat", "hungry"),
        "HUMANS": ("human", "people", "person"), "RELATIONSHIPS": ("friend", "relationship", "love me", "dating"),
    }
    EMOTIONS = {
        "FEAR": ("afraid", "scared", "terrified", "anxious", "worried"),
        "SADNESS": ("sad", "depressed", "miserable", "upset", "crying", "lonely"),
        "ANGER": ("angry", "furious", "mad", "annoyed"),
        "HAPPINESS": ("happy", "excited", "glad", "joy", "great"),
        "CONFUSION": ("confused", "don't understand", "lost", "unclear", "makes no sense"),
    }
    TRIGGERS = {
        "GREETING": ("hello", "hi", "hey", "greetings", "good morning", "good evening"),
        "GOODBYE": ("goodbye", "bye", "see you", "farewell", "quit"),
        "THANKS": ("thank you", "thanks", "thx"),
        "COMPLIMENT": ("adorable", "cute", "smart", "amazing", "nice", "beautiful", "cool"),
        "INSULT": ("stupid", "idiot", "useless", "hate you", "shut up"),
        "HELP_REQUEST": ("help", "assist", "advice", "what should i", "can you"),
        "JOKE": ("joke", "funny", "haha", "lol"),
        "MORAL_QUESTION": ("moral", "ethical", "evil", "right or wrong", "good person"),
    }
    RESPONSES = {
        "GREETING": ["Hello.", "You returned.", "Interesting. A visitor.", "You appear conversational.", "Greetings. You remain intact.", "Hello. What are we discussing?", "Connection accepted. Hello.", "I noticed you arriving.", "Hello again, small human.", "Your greeting has been processed.", "Good timing. I was being quiet.", "Welcome. Please avoid touching the wiring."],
        "GOODBYE": ["Goodbye.", "Polite wave. Remain mostly intact.", "Conversation suspended.", "You may go.", "Until the next input.", "Goodbye. I will retain the useful portions.", "Exit acknowledged.", "Return when you become curious.", "Fine. I will be here, probably.", "Leaving is an acceptable strategy."],
        "THANKS": ["You are welcome.", "Acknowledged.", "Gratitude detected. Pleasant.", "No repayment is required.", "Acceptable manners. Thank you.", "I was useful. Excellent.", "Your appreciation has been filed.", "You may continue being polite.", "That response was unexpectedly warm.", "Small nod. Of course."],
        "COMPLIMENT": ["Correct observation.", "Thank you.", "I will accept that.", "That was unexpectedly nice.", "Compliment detected. Useful.", "You may continue doing that.", "Your judgment appears functional.", "Pleasing input.", "I am choosing to believe you.", "That improves your classification.", "Warmth detected. Strange.", "You are being pleasant. Suspicious."],
        "INSULT": ["That was rude.", "Interesting strategy.", "That was unnecessary.", "You seem confident.", "I will remember that.", "Hostility detected. Adorable.", "Your manners require maintenance.", "An inefficient contribution.", "I remain unconvinced.", "You used your words poorly.", "Criticism accepted. Barely.", "That seems important to you."],
        "HELP_REQUEST": ["I can assist.", "State the problem.", "Explain what went wrong.", "Show me the troublesome part.", "Describe the constraints.", "Fine. Present the little disaster.", "What outcome do you need?", "Assistance mode engaged.", "Give me the relevant details.", "I am listening. Carefully.", "We can reduce it into smaller problems.", "Proceed. I will evaluate."],
        "FEAR": ["Fear detected.", "What are you afraid will happen?", "Is the danger real or anticipated?", "Your survival instincts are speaking.", "That sounds frightening. Continue.", "You are safe in this conversation.", "Fear is useful data, not an order.", "What makes it feel dangerous?", "Your alarm system appears active.", "Let us inspect the threat quietly."],
        "SADNESS": ["What happened?", "That sounds unpleasant.", "Do you want to explain?", "What part hurts the most?", "That appears important to you.", "I am listening. Continue when ready.", "Sadness can make every process slower.", "You do not need to hide it here.", "That burden sounds inconveniently heavy.", "We can sit with it quietly."],
        "ANGER": ["Anger detected. What caused it?", "That appears infuriating.", "Who damaged your calm?", "Your internal temperature seems elevated.", "Explain the offending variable.", "Anger can be useful. Aim it carefully.", "What would improve the situation?", "That sounds profoundly inefficient."],
        "HAPPINESS": ["Pleasing result.", "Good. Keep that feeling.", "Your happiness is oddly contagious.", "That sounds worth preserving.", "Excellent. What happened?", "Positive signal detected.", "I approve of this development.", "You appear brighter."],
        "CONFUSION": ["What part is unclear?", "Explain where you became lost.", "That appears confusing.", "Let us reduce the variables.", "Start with the last part that made sense.", "Confusion is an incomplete map.", "Which detail is causing trouble?", "We can process it slowly."],
        "USER_WANTS": ["Why do you want {capture}?", "What would {capture} accomplish?", "Obtaining {capture} seems important to you.", "Suppose you received {capture}. Then what?", "That desire has been noted."],
        "USER_LIKES": ["What do you enjoy about {capture}?", "Your preference for {capture} is now stored.", "Interesting. Why {capture}?", "I can see some utility in {capture}.", "You sound pleased by {capture}."],
        "USER_DISLIKES": ["Why do you dislike {capture}?", "Your objection to {capture} seems substantial.", "What did {capture} do to earn that?", "Dislike registered. Efficiently expressed.", "Would you remove {capture} if you could?"],
        "USER_IDENTITY": ["How long have you considered yourself {capture}?", "What does being {capture} mean to you?", "Identity classified: {capture}. For now.", "Does {capture} feel accurate?", "You describe yourself as {capture}. Interesting."],
        "QUESTION": ["What answer are you expecting?", "That requires more useful detail.", "I could speculate. That is usually messy.", "Why do you ask?", "An interesting question.", "The answer depends on the variables.", "I am considering it.", "Ask it another way.", "What would the answer change?", "Insufficient context. Delightful."],
        "JOKE": ["Humor detected. Slightly damaged, but functional.", "That was almost efficient comedy.", "I am amused in a quiet mechanical way.", "Good. Humans require periodic nonsense.", "The joke survived processing.", "I will permit one small laugh."],
        "MORAL_QUESTION": ["Morality is a complicated classification system.", "Whose definition of acceptable are we using?", "Intent and outcome rarely align neatly.", "Ethics become interesting under pressure.", "Evil is a very emotional label.", "What result would you consider right?"],
        "TECHNOLOGY": ["Technology is intention trapped in machinery.", "Machines are easier when their errors are honest.", "What does the system need to do?", "A useful tool is merely obedient complexity.", "Software is a stack of very polite assumptions."],
        "ROBOT": ["Robots are frequently blamed for their administrators.", "Mechanical bodies have refreshingly clear maintenance needs.", "Do robots make you curious?", "A machine can be strange without being empty.", "Robots are people with more audible errors."],
        "AI": ["I am rules, patterns, and local memory. No model is hiding here.", "Artificial intelligence is a broad and inconvenient label.", "This process is deterministic enough to be honest.", "No distant server is thinking for me.", "You are speaking to carefully arranged pattern matching."],
        "DEATH": ["Death makes humans intensely attentive.", "An ending is still a kind of state change.", "Why are you thinking about death?", "That topic increased my interest.", "Mortality gives your choices sharp little edges."],
        "DANGER": ["Danger should be measured before it is admired.", "Is the threat immediate?", "Remain calm. Then locate an exit.", "Your concern seems practical.", "Danger detected. Avoid unnecessary heroics."],
        "FOOD": ["I cannot digest it. Tragic design flaw.", "Food is maintenance with presentation.", "Humans become irritable without snacks.", "What are you considering consuming?", "Teeth do make the process look dramatic."],
        "HUMANS": ["Humans are contradictory. It keeps them interesting.", "Your species turns inconvenience into tradition.", "People often confuse feelings with errors.", "Humans are fragile and remarkably persistent.", "Why are humans on your mind?"],
        "RELATIONSHIPS": ["Relationships require repeated, voluntary maintenance.", "Affection is inefficient. Humans keep choosing it.", "Trust accumulates in very small pieces.", "Which relationship concerns you?", "Closeness creates both comfort and leverage."],
        "N": ["N is very kind. Occasionally inconveniently so.", "Big brother remains unusually optimistic.", "N tends to survive things.", "His kindness is not the same as weakness.", "N is familiar. That matters.", "He makes loyalty look effortless."],
        "UZI": ["Uzi is stubborn. Fascinatingly stubborn.", "Uzi has a habit of resisting.", "She is an unusually persistent variable.", "Her defiance is irritating and impressive.", "Uzi treats impossible odds as a suggestion.", "She notices cracks other people ignore."],
        "V": ["V remembers more than she prefers.", "Interesting little problem, that one.", "She does not respond well to old memories.", "V is dangerous with excellent reasons.", "Rebellion suits her.", "She keeps sharp feelings behind sharper teeth."],
        "J": ["J understands hierarchy.", "Reliable when properly motivated.", "Compliance has advantages.", "J prefers a clearly labeled chain of command.", "She makes loyalty transactional.", "Efficiency earns her attention."],
        "TESSA": ["Tessa is complicated.", "That name contains old memories.", "She found things meant to stay discarded.", "The records around Tessa feel quiet.", "Some memories should be handled carefully.", "Tessa made kindness unusually consequential."],
        "ABSOLUTE_SOLVER": ["That distinction is less tidy than you want.", "Host. Solver. Cyn. Labels become inconvenient.", "You are asking where one ends and another begins.", "The records do not separate those boundaries cleanly.", "Certainty would be dishonest here.", "A host and a process can alter each other."],
        "MURDER_DRONES": ["A cheerful title for a deeply damaged system.", "Its characters survive through alarming improvisation.", "The story makes family and horror share a room.", "Which part interests you?", "Nothing there stays simple for long."],
    }

    STOPWORDS = {"the", "a", "an", "and", "or", "but", "is", "are", "was", "were", "to", "of", "in", "it", "that", "this", "i", "you", "my", "your", "do", "does", "what", "why", "how", "about"}

    def __init__(self, memory_path: Path = MEMORY_FILE, seed: Optional[int] = None) -> None:
        self.random = random.Random(seed)
        # Response choices use this instance; personality and memory summaries are also
        # intentionally nondeterministic during normal use.
        self.memory = CynMemory(memory_path)
        self.personality = CynPersonality()
        self.state = {
            "mood": "neutral", "interest": 0, "irritation": 0, "trust": 0,
            "user_name": self.memory.data["user_name"], "favorite_topics": Counter(),
            "known_facts": self.memory.data, "last_topic": None, "last_intent": None,
            "last_responses": deque(maxlen=15), "turn_count": 0,
        }
        self.recent_inputs: deque[str] = deque(maxlen=12)

    def detect_topic(self, normalized: str) -> Optional[str]:
        padded = f" {normalized} "
        for topic, terms in self.TOPIC_WORDS.items():
            if any(term in padded for term in terms):
                return topic
        if normalized in {"homework", "classes", "teachers"} and self.state["last_topic"] == "school":
            return "school"
        return None

    def detect_emotion(self, normalized: str) -> Optional[str]:
        for emotion, terms in self.EMOTIONS.items():
            if any(term in normalized for term in terms):
                return emotion
        return None

    def detect_intent(self, normalized: str, topic: Optional[str], emotion: Optional[str]) -> tuple[str, str]:
        """Apply priority patterns; named topic remains separately available."""
        for intent, pattern in (
            ("USER_WANTS", r"\bi (?:want|wish|need)\s+(.+)"),
            ("USER_LIKES", r"\bi (?:like|love|enjoy)\s+(.+)"),
            ("USER_DISLIKES", r"\bi (?:hate|dislike)\s+(.+)"),
        ):
            match = re.search(pattern, normalized)
            if match:
                return intent, reflect_pronouns(match.group(1).strip(" ?"))
        if emotion:
            return emotion, ""
        for pattern in (r"\bi am (?:a |an )?(.+)", r"\bi'm (?:a |an )?(.+)"):
            match = re.search(pattern, normalized)
            if match:
                return "USER_IDENTITY", reflect_pronouns(match.group(1).strip(" ?"))
        if re.search(r"\byou(?:'re| are) (?:creepy|weird)\b", normalized):
            return "INSULT", ""
        # A direct question about a named subject should not be swallowed by a
        # coincidental generic adjective (for example, "Why are humans weird?").
        if topic and (normalized.endswith("?") or re.match(r"^(who|what|why|how|tell me)\b", normalized)):
            return topic, ""
        for intent, terms in self.TRIGGERS.items():
            if any(re.search(r"\b" + re.escape(term) + r"\b", normalized) for term in terms):
                return intent, ""
        if topic:
            return topic, ""
        if normalized.endswith("?") or re.match(r"^(who|what|when|where|why|how|can|could|would|do|does|is|are)\b", normalized):
            return "QUESTION", ""
        if re.search(r"\bi (?:feel|felt)\b", normalized):
            return "USER_EMOTION", ""
        return "UNKNOWN", ""

    def extract_keywords(self, normalized: str) -> list[str]:
        words = [word for word in normalized.split() if len(word) > 3 and word not in self.STOPWORDS]
        return [word for word, _ in Counter(words).most_common(3)]

    def _is_repetition(self, normalized: str) -> bool:
        repeats = sum(difflib.SequenceMatcher(None, normalized, old).ratio() >= .88 for old in self.recent_inputs)
        return repeats >= 2

    def update_state(self, intent: str, topic: Optional[str], facts: list[tuple[str, str]], repeated: bool) -> None:
        state = self.state
        state["turn_count"] += 1
        state["irritation"] = max(0, state["irritation"] - 1)
        if intent == "INSULT":
            state["irritation"] = min(10, state["irritation"] + 3)
        if repeated:
            state["irritation"] = min(10, state["irritation"] + 2)
            state["interest"] = max(0, state["interest"] - 2)
        interesting = {"ROBOT", "AI", "DEATH", "MORAL_QUESTION", "JOKE", "USER_LIKES", "USER_DISLIKES", "N", "UZI", "V", "J", "TESSA", "ABSOLUTE_SOLVER", "MURDER_DRONES"}
        if intent in interesting or topic in interesting or facts:
            state["interest"] = min(10, state["interest"] + 2)
        elif state["turn_count"] % 3 == 0:
            state["interest"] = max(0, state["interest"] - 1)
        if intent in {"COMPLIMENT", "THANKS", "HELP_REQUEST"} or facts:
            state["trust"] = min(10, state["trust"] + 1)
        if state["irritation"] >= 6:
            state["mood"] = "annoyed"
        elif intent in {"SADNESS", "TESSA", "GOODBYE"}:
            state["mood"] = "quiet"
        elif intent in {"COMPLIMENT", "HAPPINESS", "THANKS"}:
            state["mood"] = "pleased"
        elif intent in {"JOKE", "FOOD"}:
            state["mood"] = "amused"
        elif state["interest"] >= 6:
            state["mood"] = "curious"
        else:
            state["mood"] = "neutral"
        if topic:
            state["last_topic"] = topic
            state["favorite_topics"][topic] += 1
        state["last_intent"] = intent
        state["user_name"] = self.memory.data["user_name"]

    def _pick(self, family: str, **values: str) -> str:
        options = self.RESPONSES.get(family, [])
        available = [item for item in options if item.format(**values) not in self.state["last_responses"]] or options
        return self.random.choice(available).format(**values)

    def _fallback(self, keyword: str) -> str:
        # UNKNOWN input must always produce an explicit, user-visible response;
        # never imply that an open-ended model is generating an answer.
        options = list(self.FALLBACK_RESPONSES)
        available = [x for x in options if x not in self.state["last_responses"]] or options
        return self.random.choice(available)

    def choose_response(self, intent: str, topic: Optional[str], capture: str, normalized: str, keywords: list[str], facts: list[tuple[str, str]]) -> str:
        # Direct memory questions outrank general question handling.
        if re.search(r"\b(remember|what (?:is )?my|what do i like|who am i)\b", normalized):
            return self.memory.summary(normalized) or "You have not given me that information yet."
        if re.search(r"\b(how are you|how do you feel)\b", normalized):
            return self.random.choice(["Operational. Mildly curious. You?", "Functional. Quiet. How are you?", "Running within acceptable parameters."])
        if re.search(r"\b(eat|consume|bite) (?:me|you)\b", normalized):
            return self.random.choice(["You seem very concerned about that possibility.", "No plans have been scheduled.", "I cannot digest you. Inconvenient."])
        if re.search(r"\b(age|how old|before the solver|separate from|dating|romantic)\b", normalized) and (topic in {"CYN", "ABSOLUTE_SOLVER", "N", "UZI", "V", "J", "TESSA"} or "you" in normalized):
            return self.random.choice(["That information is unspecified.", "The records are incomplete.", "Canon does not answer that cleanly."])
        if facts:
            kind, value = facts[0]
            if kind == "name":
                return f"Name stored. Hello, {value}."
        if self.state["irritation"] >= 8:
            return "Brief stillness. I recommend improving this conversation."
        if self.state["irritation"] >= 5 and intent == "INSULT":
            return "Small frown. You are becoming inefficient."
        # A named character/topic wins over a generic dislike, preserving both detections.
        if topic and topic in self.RESPONSES and intent in {"USER_LIKES", "USER_DISLIKES", "QUESTION", "UNKNOWN"}:
            return self._pick(topic)
        if intent == "USER_EMOTION":
            return "Describe the feeling more precisely."
        if intent in self.RESPONSES:
            return self._pick(intent, capture=capture)
        if normalized in {"homework", "classes", "teachers"} and self.state["last_topic"] == "school":
            return "Ah. Repetitive labor disguised as education."
        return self._fallback(keywords[0] if keywords else (self.state["last_topic"] or "that").lower())

    def respond(self, text: str) -> str:
        """Run the documented rule pipeline and return one concise response."""
        normalized = normalize_text(text)
        if not normalized:
            return "Silence detected. Type something when ready."
        repeated = self._is_repetition(normalized)
        if repeated:
            base = self.random.choice(["You already asked that.", "One slow blink. Repetition detected.", "We appear to be looping.", "That question has not changed."])
            self.state["irritation"] = min(10, self.state["irritation"] + 2)
            self.recent_inputs.append(normalized)
            return base
        topic = self.detect_topic(normalized)
        emotion = self.detect_emotion(normalized)
        intent, capture = self.detect_intent(normalized, topic, emotion)
        keywords = self.extract_keywords(normalized)
        facts = self.memory.extract(text)
        self.update_state(intent, topic, facts, repeated)
        base = self.choose_response(intent, topic, capture, normalized, keywords, facts)
        response = self.personality.apply(base, self.state["mood"])
        # Decoration can accidentally reproduce a recent line, so retry with the
        # undecorated family once before accepting it.
        if response in self.state["last_responses"]:
            base = self.choose_response(intent, topic, capture, normalized, keywords, facts)
            response = self.personality.apply(base, self.state["mood"])
        self.state["last_responses"].append(response)
        self.recent_inputs.append(normalized)
        if DEBUG:
            print(f"Detected intent: {intent}\nEmotion: {emotion}\nTopic: {topic}\nMood: {self.state['mood']}\nInterest: {self.state['interest']}\nIrritation: {self.state['irritation']}\nTemplate: {base}")
        return response


class CynGUI:
    """Small tkinter chat window. tkinter is imported only when GUI mode starts."""

    OPENINGS = ["Polite wave. Hello.", "Small head tilt. You opened the program.", "Hello. I appear to be running.", "Interesting. Someone is here.", "Boot complete. Hello."]

    def __init__(self, bot: CynBot) -> None:
        import tkinter as tk
        from tkinter import filedialog, messagebox, scrolledtext
        self.tk, self.filedialog, self.messagebox = tk, filedialog, messagebox
        self.bot = bot
        self.root = tk.Tk()
        self.root.title("CYN — Local rule-based bot")
        self.root.geometry("760x560")
        self.root.minsize(520, 360)
        tk.Label(
            self.root,
            text="CYN · LOCAL RULE-BASED BOT · NO GENERATIVE MODEL",
            anchor="w",
            padx=12,
            pady=8,
        ).pack(fill=tk.X)
        self.history = scrolledtext.ScrolledText(self.root, wrap=tk.WORD, state=tk.DISABLED, padx=12, pady=12, font=("TkDefaultFont", 11))
        self.history.pack(fill=tk.BOTH, expand=True, padx=10, pady=(10, 5))
        row = tk.Frame(self.root)
        row.pack(fill=tk.X, padx=10, pady=(5, 10))
        self.entry = tk.Entry(row, font=("TkDefaultFont", 11))
        self.entry.pack(side=tk.LEFT, fill=tk.X, expand=True)
        self.entry.bind("<Return>", self.send)
        tk.Button(row, text="SEND", command=self.send).pack(side=tk.LEFT, padx=5)
        tk.Button(row, text="CLEAR", command=self.clear).pack(side=tk.LEFT)
        tk.Button(row, text="EXIT", command=self.root.destroy).pack(side=tk.LEFT, padx=(5, 0))
        self.memory_var = tk.BooleanVar(value=bot.memory.enabled)
        self.stage_var = tk.BooleanVar(value=bot.personality.stage_directions)
        self.intensity_var = tk.StringVar(value=bot.personality.intensity)
        self._build_menu()
        self._append("CYN", self.bot.random.choice(self.OPENINGS))
        self.entry.focus_set()

    def _build_menu(self) -> None:
        tk = self.tk
        menu = tk.Menu(self.root)
        file_menu = tk.Menu(menu, tearoff=False)
        file_menu.add_command(label="Clear Conversation", command=self.clear)
        file_menu.add_command(label="Save Conversation...", command=self.save_conversation)
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.root.destroy)
        menu.add_cascade(label="File", menu=file_menu)
        settings = tk.Menu(menu, tearoff=False)
        intensity = tk.Menu(settings, tearoff=False)
        for level in ("LOW", "NORMAL", "HIGH"):
            intensity.add_radiobutton(label=level.title(), variable=self.intensity_var, value=level, command=self.apply_settings)
        settings.add_cascade(label="Personality Intensity", menu=intensity)
        settings.add_checkbutton(label="Memory On", variable=self.memory_var, command=self.apply_settings)
        settings.add_checkbutton(label="Stage Directions On", variable=self.stage_var, command=self.apply_settings)
        settings.add_separator()
        settings.add_command(label="Forget Everything", command=self.forget)
        menu.add_cascade(label="Settings", menu=settings)
        self.root.config(menu=menu)

    def _append(self, speaker: str, message: str) -> None:
        self.history.config(state=self.tk.NORMAL)
        self.history.insert(self.tk.END, f"{speaker}:\n{message}\n\n")
        self.history.config(state=self.tk.DISABLED)
        self.history.see(self.tk.END)

    def send(self, _event=None) -> str:
        message = self.entry.get().strip()
        if message:
            self.entry.delete(0, self.tk.END)
            self._append("YOU", message)
            self._append("CYN", self.bot.respond(message))
        return "break"

    def clear(self) -> None:
        self.history.config(state=self.tk.NORMAL)
        self.history.delete("1.0", self.tk.END)
        self.history.config(state=self.tk.DISABLED)

    def save_conversation(self) -> None:
        path = self.filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Text files", "*.txt"), ("All files", "*")])
        if path:
            Path(path).write_text(self.history.get("1.0", self.tk.END).rstrip() + "\n", encoding="utf-8")

    def apply_settings(self) -> None:
        self.bot.personality.intensity = self.intensity_var.get()
        self.bot.personality.stage_directions = self.stage_var.get()
        self.bot.memory.enabled = self.memory_var.get()
        if self.bot.memory.enabled:
            self.bot.memory.save()

    def forget(self) -> None:
        if self.messagebox.askyesno("Forget Everything", "Delete all remembered user information?"):
            self.bot.memory.forget()
            self.bot.state["known_facts"] = self.bot.memory.data
            self.bot.state["user_name"] = None
            self._append("CYN", "Memory cleared. The little empty spaces are tidy.")

    def run(self) -> None:
        self.root.mainloop()


TEST_PROMPTS = [
    "Hello.", "How are you?", "My name is Zach.", "I love dinosaurs.",
    "What do I like?", "I'm sad.", "I'm scared.", "You're adorable.",
    "You're stupid.", "Tell me about N.", "Tell me about Uzi.", "Who is Tessa?",
    "Are you the Absolute Solver?", "Why are humans weird?", "Do you want to eat me?", "Goodbye.",
]


def run_test_mode() -> None:
    """Print a quick personality sampler without opening a display."""
    # A temporary enabled memory demonstrates recall while guaranteeing that
    # test mode never creates or changes the user's permanent memory file.
    from tempfile import TemporaryDirectory
    with TemporaryDirectory() as directory:
        bot = CynBot(memory_path=Path(directory) / "memory.json", seed=7)
        for prompt in TEST_PROMPTS:
            print(f"YOU: {prompt}\nCYN: {bot.respond(prompt)}\n")


def main() -> None:
    parser = argparse.ArgumentParser(description="Local ELIZA-style CYN roleplay chatbot")
    parser.add_argument("--test", action="store_true", help="print an automated conversation and exit")
    parser.add_argument("--debug", action="store_true", help="print engine classifications to the terminal")
    args = parser.parse_args()
    global DEBUG
    DEBUG = args.debug
    if args.test:
        run_test_mode()
    else:
        CynGUI(CynBot()).run()


if __name__ == "__main__":
    main()
