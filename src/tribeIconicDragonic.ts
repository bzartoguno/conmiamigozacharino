import { Tribe } from "./types";

export const tribeIconicDragonic: Tribe = {
  name: "Iconic Dragonic",
  owner: "Keoki",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Before you go, here’s one of our little stamp challenges. It’s just for fun and to keep the journey lively. Try a light accent or a small voice quirk in-character for at least two conversations… but keep it subtle.  |  Stamp Quest (It’s a mi Mario): Try using an accent when talking with your character for at least two conversations. | Reward: 3 Stamps",
          "Not everything’s about supplies and coin; sometimes it's more about the journey before your destination. Here’s a stamp challenge we give to adventurers to help keep things lively: ask one of your companions what they really want out of this adventure, and get an honest answer.  |  Stamp Quest (What Do You Want?): Ask another PC about their personal goal (revenge, treasure, love, knowledge, etc.) and get a genuine answer. | Reward: 5 Stamps",
          "Fair deals keep groups together. I’ve got a stamp challenge that encourages that sort of thinking. Offer a companion a fair trade, something you both actually want. If they accept, you’ve earned it.  |. Stamp Quest (Trade Offer): Propose a fair trade with another PC (not a gift). If they accept, you succeed. | Reward: 4 Stamps",
          "One last thing, this one’s simple, but it changes the mood fast. When someone in your group has a big moment, good or bad, react in-character and make it memorable. Do it a few times if the opportunity shows up.  |  Stamp Quest (Hype Crew): When someone rolls big (good or bad), react in-character to make it memorable. | Reward: 2 Stamps (repeatable, max 3)",
          "",
          "",
          "",
          "",
          "",
          "give me a DC 14 Arcana check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Lunar Dragon Wand",
      price: 300000,
      description:
        `This wand looks like polished bone or silverwood, etched with tiny crescent-scale motifs. In dim light, the engravings resemble a shifting star map.
        As an action, you can Moonshift: you tap the wand to your chest and speak a command word. Choose a new set of class levels whose total equals your character level. For the next 8 hours or until you finish a long rest, your class levels are replaced by the chosen arrangement.
        Things like (Ability scores, Race/species traits, Background features, Feats, Proficiency bonus, Equipment and magic items you’re wearing/carrying) Do not change at all
        Once you use Moonshift, you can’t use it again until you finish a long rest. If you drop to 0 HP, you revert to your normal class`,
    },
    {
      name: "Solar Dragon Hourglass Necklace",
      price: 300000,
      description:
        `A heavy gold chain holds a tiny dark crystal hourglass filled with glittering gold sand. 
        Bonus Action: Flip the hourglass pendant and speak a command word. For 1 minute (10 rounds), the combat turn order reverses, starting with you. How to run it at the table (simple and consistent)
        Look at the current initiative order (highest to lowest). Find your position in that order. The new turn order becomes: You → the creature who would have gone before you → continuing backward through the list, wrapping around to the end as needed.
        Example: Original: A → B → You → D → E Reversed starting with you: You → B → A → E → D
        You can use Solar Reversal twice per long rest. The effect ends early if: You remove the necklace or You are incapacitated.`,
    },
    {
      name: "Five-Pointed Chromatic Dragonic Crown",
      price: 300000,
      description:
        `This is not a subtle headpiece. The metal is mirror-bright, the points curve like dragon horns. In sunlight it throws little prismatic flares that make the wearer look like they’re standing on a stage.
        When you finish a long rest (or at dawn, your choice), you set the crown to one element until your next long rest: Red (Fire), White (Cold), Blue (Lightning), Black (Acid), or Green (Poison). While set, you gain resistance to that damage type.
        While the crown is set, when a creature you can see deals you the chosen damage type, you can use your reaction to reflect it. You take the damage as normal (after resistance). The attacker takes radiant damage equal to the damage you actually took from that instance (after resistance).
        You can reflect damage up to 5 times per long rest (one per crown point). You regain all uses when you finish a long rest.`,
    },
    {
      name: "Metallic Dragon Anvil and Hammer",
      price: 300000,
      description: `It's an anvil is small enough to fit on a cart. Its surface is etched with five metallic dragon scale patterns. The hammer’s head looks like a dragon’s clenched jaw.
        Core feature: Dragonforged Union
        You can use the anvil and hammer to fuse two magic items into one. This is a deliberate process, not a quick trick. This item needs 8 hours of work (can be done during a long rest). You must have a heat source (mundane fire is fine), smith’s tools, and both items present for the full duration.
        Step 1: Choose Frame & Inlay
        Pick two magic items:
        - Frame item: Determines the final item’s form (what it is), base statistics, and whether it requires attunement.
        - Inlay item: Contributes a single Signature Trait that you choose from its magical properties.
        The result is a single item called an Alloyed [Frame Item Name]. The original two items are consumed into the new one (unless a mishap says otherwise).
        Step 2: Pick the Signature Trait
        Choose one meaningful feature from the Inlay item to carry over. Use these guidelines to keep it clean and fair:
        - If the Inlay grants +X to attack/AC/saves, you may carry over only if the Frame does not already grant the same kind of bonus.
        - If the Inlay grants spells or charges, the Alloyed item gains that spell/ability with the same recharge rules (or the same number of charges), but it cannot exceed 10 charges total.
        - If the Inlay grants multiple daily powers, pick one of them as the Signature Trait.
        Cosmetic things (glowing, minor sounds, color changes) can come along for free, because Keoki would be offended if the finished piece didn’t look cool.
        Step 3: Make the Forge Check
        At the end of the 8 hours, make a check using Arcana or STR (W/ Smith’s tools). DC = 12 + the highest rarity modifier between the two items: Common +0, Uncommon +1, Rare +3, Very Rare +5, Legendary +8, Artifact +10. On success: the items fuse as intended. On failure: roll once on the Mishap results below Roll 1d4:
        1- Brittle Bond: Fusion succeeds, but the Signature Trait works only once, then burns out permanently.
        2- Split Temper: Fusion succeeds, but only one of the two items’ magic packages is active at a time. You can switch which package is active after a short rest.
        3- Rebound: Fusion succeeds, but when you use the Signature Trait, you take 1d6 force damage.
        4- Upitty: Fusion succeeds perfectly… but the item gains a bit of a personality (talkative, vain, demands polishing, hates being worn with “cheap” gear, etc).`,
    },
    {
      name: "Talisman of the Gemstone Dragon",
      price: 300000,
      description:
        `A thumb-sized rainbow crystal shard set in a sleek silver frame. When you finish a long rest, choose one mode for the talisman until your next long rest:
        Concave Mode: Basically, no change.
        Convex Mode: Attack rolls against you are “flipped.”
        Convex Mode rules: When a creature makes an attack roll against you (melee, ranged, or spell attack), the attack hits if the total attack roll is LOWER than your AC. AKA, it hits if (d20 + bonuses) is less than your AC. However, Nat 1 becomes a critical hit against you. While Nat 20s are critical misses.`,
    },
    {
      name: "Bedlam Earrings of the Floral Dragon",
      price: 300000,
      description:
        `These earrings have three modes, each activated as an action, and each effect is centered on your current location when you activate it. Once chosen, that mode’s terrain effect lingers where it was created; it doesn’t “follow” you unless a mode explicitly says it does. These are meant to feel like you’re dropping a dramatic environmental set-piece onto the scene.
        These earrings have 3 charges. As an action, you expend 1 charge to activate one mode (Dune, Mistborn, or Fablehaven). The effect lasts 1 minute unless otherwise stated, and the earrings regain 1d3 charges daily at dawn. Your save DC for any earring effects is 8 + your proficiency bonus + your INT, WIS, or CHR modifier. 
        Mode 1: Dune Mode
        You create a whirlwind of gravel, dirt, and sand that turns the area into a violent, grinding hazard. It’s part sandstorm, part rock-slinging cyclone, and it’s meant to disrupt melee piles and protect your team from that one brutal hit that would otherwise drop someone.
        Dune Field (battlefield effect): When activated, a 30-foot-radius storm erupts centered on you (stays centered on that point). The area is difficult terrain, and creatures inside have disadvantage on ranged weapon attacks due to the swirling grit and flying debris. A creature that enters the area for the first time on a turn or starts its turn there must make a Strength saving throw. On a failure, it takes 3d8 bludgeoning damage and is pushed 10 feet directly away from the storm’s center. On a success, it takes half damage and isn’t pushed. While Dune Mode is active, you can use your reaction when a creature you can see within 30 feet would be reduced to 0 HP by bludgeoning, piercing, or slashing damage. You fling a slab of compacted grit like a dragon’s wing-shield:
        - Reduce the triggering damage by 4d10 + your proficiency bonus.
        - If this prevents the creature from dropping to 0 HP, the attacker takes 2d10 bludgeoning damage from the ricocheted strike.
        Mode 2: Mistborn Mode
        You conjure an enormous, soft, dawn-thick fog, the kind that turns silhouettes into myths. You can move through it like you belong there, and you can teleport within it as a bonus action, which makes it feel like the battlefield is full of fake angles and impossible entrances.
        Dawn Fog (battlefield effect): When activated, fog billows outward in a huge bank: a 120-foot-radius sphere. The area is heavily obscured for everyone except you, and nonmagical flames are snuffed when they enter the fog. Wind disperses it only if it’s exceptionally strong; otherwise, it holds for the full duration. While the fog lasts, you gain Fog-Sight: you can see normally within the fog.
        Bonus Action teleport: While Mistborn Mode is active, you can use a bonus action to teleport up to 60 feet to an unoccupied space within the fog that you can see with Fog-Sight. This teleport does not provoke opportunity attacks. You can do this teleport a number of times equal to your proficiency bonus during that 1-minute duration.
        Mode 3: Fablehaven Mode
        This is the “nature explodes” mode. Bushes, flowers, and trees grow fast enough to crack stone, and the battlefield becomes a living storybook.
        Rapid Overgrowth (battlefield effect): When activated, plants erupt in a 60-foot-radius area centered on you (stays centered on that point). The ground becomes heavily overgrown and counts as difficult terrain for creatures of your choice (you can exempt allies when you create it). The area provides light cover (+2 AC) to Medium or smaller creatures that are prone behind the growth.
        Each creature you choose in the area when it appears must make a Strength saving throw. On a failure, it becomes restrained by vines and thorny stems. On a success, it isn’t restrained, but its speed is reduced by 10 feet until the start of its next turn. A restrained creature can use an action to make a Strength (Athletics) check against your save DC, freeing itself on a success. The creature can also repeat the saving throw at the end of each of its turns, ending the restraint on a success. In addition, large or larger creatures that fail the initial saving throw have their speed reduced to 0 while restrained. If they succeed on a later save/check to break free, their speed returns normally, but the terrain remains difficult.`,
    },
    {
      name: "Synapse-Silk Robes of the Elder Brain Dragon",
      price: 300000,
      description:
        `A mesmerizing purple silk robe with white trim, though in some upper circles this item is considered illegal, but for you dear adventurer I won't mind if you take it off my hands.
        As an action you can choose up to PB creatures (your proficiency bonus) that you can see within 90 feet. Each target must make a Wisdom saving throw against your spell save.
        On a failure, a creature becomes your Thrall for up to 1 hour, as long as you concentrate (as if concentrating on a spell). While you maintain this, you can’t concentrate on other spells/effects. A Thrall is charmed by you, and you have a telepathic link with it while it’s within 1 mile.
        Bonus Action (on your turn): Issue a single, clear mental order (one sentence) that applies to any number of Thralls, like: "Guard me and stop anyone from reaching the door.", “Focus attacks on that mage.”, or “Surround them, don’t kill, just disable.” Whereupon each thrall will do its best to follow out those orders. They will do this as if they were acting of their own free will.
        This condition ends if they take damage and they fail the save. If you command a Thrall to do something clearly self-destructive (Stand there and let us mug you) or it leaves your control radius.`,
    },
  ],
};
