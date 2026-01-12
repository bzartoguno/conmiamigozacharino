import { Item, Tribe } from "./types";

export interface PawsClawsMawsItem extends Item {
  priceText?: string;
}

export const tribePawsClawsMaws: Tribe & { items: PawsClawsMawsItem[] } = {
  name: "Paws, Claws, & Maws",
  owner: "Wah",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "Before you go, here’s one of our little stamp challenges. It’s just for fun and to keep the journey lively. Try a light accent or a small voice quirk in-character for at least two conversations… but keep it subtle.  |  Stamp Quest (It’s a mi Mario): Try using an accent when talking with your character for at least two conversations. | Reward: 3 Stamps",
          "Not everything’s about supplies and coin; sometimes it's more about the journey before your destination. Here’s a stamp challenge we give to adventurers to help keep things lively: ask one of your companions what they really want out of this adventure, and get an honest answer.  |  Stamp Quest (What Do You Want?): Ask another PC about their personal goal (revenge, treasure, love, knowledge, etc.) and get a genuine answer. | Reward: 5 Stamps",
          "Fair deals keep groups together. I’ve got a stamp challenge that encourages that sort of thinking. Offer a companion a fair trade, something you both actually want. If they accept, you’ve earned it.  |. Stamp Quest (Trade Offer): Propose a fair trade with another PC (not a gift). If they accept, you succeed. | Reward: 4 Stamps",
          "One last thing, this one’s simple, but it changes the mood fast. When someone in your group has a big moment, good or bad, react in-character and make it memorable. Do it a few times if the opportunity shows up.  |  Stamp Quest (Hype Crew): When someone rolls big (good or bad), react in-character to make it memorable. | Reward: 2 Stamps (repeatable, max 3)",
          ],
  items: [
    {
      name: "Baby Basilisk",
      price: 100,
      description: ` (Baby Basilisk)
        Size: Small
        Creature Type: Beast 
        Armor Class: 13
        Hit Points: 30
        Speed: 30 ft.
        Resistances: N/A
        Age: Baby
        STR: +1 (12)
        DEX: -3 (4)
        CON: 0 (11)
        INT: -4 (2)
        WIS: -3 (3)
        CHR: -3 (4)
        Abilities
        Stone Glare: On a natural 18 or higher on an attack roll, the target is petrified.
        Child Action
        Tail Trip: +6 to hit, 1d4 bludgeoning damage and reduce the target’s movement by 10 ft.
        Teen Action
        Fake Flash: Once per short rest, force one creature to make a DC 12 Constitution save or be blinded for 1 round.
        Adult Action
        Bite: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3)`,
    },
    {
      name: "Chimera Chick",
      price: 100,
      description: `(Attack pet)
        Size: Small
        Creature Type: Aberration 
        Armor Class: 12
        Hit Points: 30
        Speed: 25 ft.
        Resistances: N/A
        Age: Baby
        STR: +2 (15)
        DEX: -2 (7)
        CON: +2 (15)
        INT: -3 (3)
        WIS: 0 (10)
        CHR: -2 (6)
        Abilities
        Multiattack: The chimera makes three attacks because it has three heads.
        Child Action
        Bite: +7 to hit, 2d6 + 3 piercing damage.
        Teen Action
        Headbutt: +8 to hit, 1d12 + 4 bludgeoning damage.
        Adult Action
        Breath Attack: The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much on a successful one.`,
    },
    {
      name: "Displacer Kitten",
      price: 100,
      description: `(Support Pet)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 15
        Hit Points: 40
        Speed: 40 ft.
        Resistances: N/A
        Age: Baby
        STR: +2 (14)
        DEX: 0 (11)
        CON: +1 (12)
        INT: -4 (2)
        WIS: -1 (8)
        CHR: -4 (3)
        Abilities
        Out of Place: The kitten can teleport up to 10 ft. as a reaction once per round.
        Child Action
        Cuddle Cloak: Grants +1 AC to the owner for 1 minute.
        Teen Action
        Flicker: Choose one ally to teleport 10 ft. to a visible space.
        Adult Action
        Mirage Meow: Once per short rest, creates a mirror image of a creature within 10 ft., lasting until a long rest.`,
    },
    {
      name: "Faerie Chest Weasel",
      price: 100,
      description: `(Support Pet)
        Size: Tiny
        Creature Type: Fey 
        Armor Class: 14
        Hit Points: 30
        Speed: 30 ft., 40 ft. Climb
        Resistances: N/A
        Age: Baby
        STR: -3 (4)
        DEX: +3 (16)
        CON: +1 (12)
        INT: +2 (15)
        WIS: 0 (10)
        CHR: +4 (18)
        Abilities
        Frustration Feeding: Owner deals additional attack damage depending on how well-fed their pet is.
        Child Action
        Lock It: Lock a door, chest, gate, window, or similar entry. It can only be opened by passing a Strength check of 10 + highest stat × 2.
        Teen Action
        Pocket: Functions like a Bag of Holding, following all applicable rules.
        Adult Action
        No You: Once per day, the pet can magically redirect an attack back onto the attacker.`,
    },
    {
      name: "Griffon Egg",
      price: 100,
      description: `(Attack Pet)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 12
        Hit Points: 30
        Speed: 30 ft., 40 ft. Fly
        Resistances: N/A
        Age: Baby
        STR: +2 (14)
        DEX: 0 (11)
        CON: +1 (12)
        INT: -4 (2)
        WIS: -1 (9)
        CHR: -3 (3)
        Abilities
        Keen Sight: This pet has advantage on Wisdom (Perception) checks that rely on sight.
        Child Action
        Peck: +6 to hit, 1d8 piercing damage.
        Teen Action
        Scratch: +6 to hit, 2d6 slashing damage.
        Adult Action
        Skydrop: Dive-bomb a target. That target must make a DC 17 Dexterity saving throw, taking 4d6 bludgeoning damage on a failed save, or half as much on a successful one. Both the pet and the target take half the damage dealt.`,
    },
    {
      name: "Mimic Spawn",
      price: 100,
      description: `(Support Pet)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 13
        Hit Points: 20
        Speed: 20 ft., 30 ft. Climb
        Resistances: N/A
        Age: Baby
        STR: +1 (13)
        DEX: -1 (8)
        CON: 0 (11)
        INT: -5 (1)
        WIS: -1 (9)
        CHR: -3 (4)
        Abilities
        Mimic: This pet can eat objects and add them to its mimic catalog. Baby mimics can only mimic 1 item until they reach the teen stage.
        Child Action
        Hide With Me: The pet and its owner gain advantage on Stealth checks if their hiding spot isn't mobile.
        Teen Action
        Sticky Tongue: This pet grapples a target within 10 ft. The escape DC is 10 + the owner's highest stat × 2.
        Adult Action
        Metamorph: This pet can now mimic basic machinery, as long as the object is not size Large or bigger.`,
    },
    {
      name: "Owlbear Cub",
      price: 100,
      description: `(Attack Pet)
        Size: Small
        Creature Type: Beast 
        Armor Class: 13
        Hit Points: 40
        Speed: 40 ft.
        Resistances: N/A
        Age: Baby
        STR: +3 (16)
        DEX: -1 (8)
        CON: +1 (13)
        INT: -4 (3)
        WIS: -1 (8)
        CHR: -4 (3)
        Abilities
        Heavy Coat: At the start of each day, choose to gain resistance to bludgeoning, slashing, or piercing damage.
        Child Action
        Beak: +7 to hit, 1d10 + 5 piercing damage.
        Teen Action
        Claws: +7 to hit, 2d8 + 5 slashing damage.
        Adult Action
        Bear Hug Blitz: Once per short rest, grapple a single target. If successful, the owlbear may make up to four attacks against the grappled target.`,
    },
    {
      name: "Phantom Mouse",
      price: 100,
      description: `(Support Pet)
        Size: Tiny
        Creature Type: Undead 
        Armor Class: 15
        Hit Points: 45
        Speed: 45 ft., 10 ft. Burrow
        Resistances: N/A
        Age: Baby
        STR: 0 (10)
        DEX: +7 (24)
        CON: 0 (10)
        INT: 0 (10)
        WIS: 0 (10)
        CHR: 0 (10)
        Abilities
        Whispering Echo: Speak a simple message to the mouse and it will repeat it until commanded to stop.
        Child Action
        Flicker Squeak: Reveals any invisible creatures within 10 ft. of this pet.
        Teen Action
        Soul Sniff: Detect any undead or spirits within 300 ft.
        Adult Action
        Haunt Echo: Once per day, force a creature to relive a memory. The target must make a DC 13 Wisdom save or be frightened for 1 round.`,
    },
    {
      name: "Pseudodragon Tyke",
      price: 100,
      description: `(Support Pet)
      Size: Tiny
      Creature Type: Dragon 
      Armor Class: 14
      Hit Points: 10
      Speed: 10 ft., 25 ft. Fly
      Resistances: N/A
      Age: Baby
      STR: -5 (2)
      DEX: 0 (11)
      CON: -1 (9)
      INT: -2 (6)
      WIS: -1 (8)
      CHR: -2 (6)
      Abilities
      Little Hoarder: Every week, gain 10% of your total wealth across all currencies.
      Child Action
      Sting: Target must make a DC 12 Constitution saving throw. On a failure, they are paralyzed for 2 minutes (cannot be used to start or during combat).
      Teen Action
      Telepathic Link: You and your pet can communicate telepathically within 30 ft.
      Adult Action
      Knockout Gas: This pet breathes a 15 ft. cone of knockout gas. Each creature in the area must make a DC 17 Constitution save or fall unconscious.`,
    },
    {
      name: "Shadow Pup",
      price: 100,
      description: `(Attack Pet)
      Size: Small
      Creature Type: Beast 
      Armor Class: 13
      Hit Points: 40
      Speed: 40 ft.
      Resistances: N/A
      Age: Baby
      STR: +1 (12)
      DEX: 0 (10)
      CON: -1 (9)
      INT: -5 (1)
      WIS: -1 (8)
      CHR: -5 (1)
      Abilities
      Shadowmeld: This pet can meld into its owner's shadow and be summoned out of it at will.
      Child Action
      Bite: +6 to hit, 2d6 piercing damage.
      Teen Action
      Fetch: This pet ignores opportunity attacks and will drag a target back to its owner at all costs.
      Adult Action
      Speak: This pet lets out a sonic bark in a 10 ft. cone. Each creature in that area must make a DC 12 Constitution save or take 3d4 thunder damage.`,
    },
  ],
};
