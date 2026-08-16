import { Item, Tribe } from "./types";

export interface BlossomHotelItem extends Item {
  priceText?: string;
}

export const tribeBlossomHotel: Tribe & { items: BlossomHotelItem[] } = {
  name: "Blossom Hotel",
  owner: "Perma for Winter Blossom, Marlee for Spring Blossom, Solin for Summer Blossom, Adel for Autumn Blossom & Mr. Harvy for Monsoon",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "Welcome to the Blossom Hotel, we hope you have a fantasic stay!",
          "Thank you for choosing Blossom Hotel, we promise that no one will break into your room at night, unlike some other establisments.",
          "For pations Pool hours are 5am-11pm.",
          "Oh sorry I was just reading a book, I'll be right with you.",
          "Hey, you want a cookie? Our chef baked too many, and we are trying to get rid of them before a pack of Cookie Monsters sneaks in here.",
          "Oh shoot, I forgot to run towels down to the pool, and I can't quite leave the desk right now... Hey, if you're willing to give me a hand, I'll make it worth your while! All I need is a DC 14 Stealth check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, well, I'm sorry you dropped the towels, but I'll pay you 5 gp.",

          "Welcome to the Blossom Hotel, we hope you have a fantasic stay!",
          "Thank you for choosing Blossom Hotel, we promise that no one will break into your room at night, unlike some other establisments.",
          "For pations Pool hours are 5am-11pm.",
          "Oh sorry I was just reading a book, I'll be right with you.",
          "Hey, you want a cookie? Our chef baked too many, and we are trying to get rid of them before a pack of Cookie Monsters sneaks in here.",
          "Welcome to the Blossom Hotel, we hope you have a fantasic stay!",
          "Thank you for choosing Blossom Hotel, we promise that no one will break into your room at night, unlike some other establisments.",
          "For pations Pool hours are 5am-11pm.",
          "Oh sorry I was just reading a book, I'll be right with you.",
          "Hey, you want a cookie? Our chef baked too many, and we are trying to get rid of them before a pack of Cookie Monsters sneaks in here.",
          "Welcome to the Blossom Hotel, we hope you have a fantasic stay!",
          "Thank you for choosing Blossom Hotel, we promise that no one will break into your room at night, unlike some other establisments.",
          "For pations Pool hours are 5am-11pm.",
          "Oh sorry I was just reading a book, I'll be right with you.",
          "Hey, you want a cookie? Our chef baked too many, and we are trying to get rid of them before a pack of Cookie Monsters sneaks in here.",
          
          ],
  items: [
    {
      name: "Mini Game: Riddles for Rewards",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Test your wit for rotating prizes. (Requires at least two players.)",
      priceText: "Reward may vary",
    },
    {
      name: "Mini Game: Monster Trivia Night",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Lore-heavy trivia where correct answers coins (Requires at least two players.)",
      priceText: "Reward may vary",
    },
    {
      name: "Mini Game: Guess the Guest",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Match silhouettes and rumors to the right may get room upgrades. (Requires at least two players.)",
      priceText: "Reward may vary",
    },
    {
      name: "Room, Board, & Repair Gear",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Overnight stay with hearty meals and gear repairs included.",
    },
    {
      name: "Room, Board, Repair Gear, & Spa",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Removes an additional level of exhaustion after a long rest.",
    },
    {
      name: "Room, Board, Repair Gear, Spa, & Time Dilation Chamber",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Take a long rest in eight minutes",
    },
    {
      name: "Room, Board, Repair Gear, Spa, Time Dilation Chamber, & Temp Buff",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "+25 Temperary HP lasts 8 hours, after a long rest.",
    },
    {
      name: "Black Candle Training",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Hands-on focus training with the Black Candle tradition. Taking any proficent skill to expertices.",
    },
    {
      name: "Black Candle Training",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "Blossom Hotel Season Pass",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "Lifetime access to every seasonal hotel on your world. Preforming a five minute ritual with this item will teleport you to their nearest hotel.",
    },
    {
      name: "Banner of the Krig Rune",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `Crafted from a thick, red fabric, this banner measures 5 feet high and 3 feet wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-foot pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.
Mark of Courage. As a bonus action, you can touch the unfurled banner and cause it to emanate courage. You and your allies are immune to the frightened condition while within 20 feet of it. This benefit lasts for 10 minutes or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.
Sentinel Standard. You can see invisible creatures while they are within 20 feet of the unfurled banner and within your line of sight.
Standard's Shield. As a bonus action, you can touch the unfurled banner and invoke this power. Any ranged attack roll that targets you or an ally of yours has disadvantage if the target is within 20 feet of the unfurled banner. This benefit lasts for 1 minute or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.
Gift of Battle. You can transfer the banner's magic to a place by tracing the krig rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 500-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 feet of you and during which you choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the area gains the following property:
- While in the 500-foot-radius sphere, the creatures you chose during the transfer process are immune to the frightened condition and gain a +1 bonus to attack rolls and AC.`,
    },
    {
      name: "Dodecahedron of Doom",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.
The dodecahedron can be hurled up to 60 feet as an action: A random magical effect occurs when the die comes to a rest after rolling across the ground for at least 10 feet. If an effect requires a target and no eligible target is within range, nothing happens. Spells cast by the dodecahedron require no components. Roll a d12 and consult the following table to determine the effect:
D12	Effect
1-2	The dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 (9d8) force damage on a failed save, or half as much damage on a successful one
3-4	The dodecahedron casts light on itself. The effect lasts until a creature touches the die
5-6	The dodecahedron casts Ray of Frost (+5 to hit) targeting a random creature within 60 feet that doesn't have total cover against the attack.
7-8	The dodecahedron casts Shocking Grasp (+5 to hit) on the next creature that touches it.
9-10	The dodecahedron casts Darkness on itself. The effect has a duration of 10 minutes.
11-12	The next creature to touch the dodecahedron gains 1d10 temporary hit points that last for 1 hour.`,
    },
    {
      name: "Gavel of the Venn Rune",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This wooden gavel is small by giant reckoning but nearly the size of a warhammer in human hands. The venn (friend) rune is inscribed in mithral in the base of the haft. Among giants, this item is used as part of rituals to resolve disputes. The gavel has the following properties.
Arbiter's Shield. At the start of every combat, attack rolls against you have disadvantage before the start of your first turn, provided that the gavel is on your person.
Bond of Amity. As an action, you can use the gavel to strike a point on a hard surface. The first time in the next minute that a creature within 60 feet of that point deals damage to another creature with an attack that hits, the attacker takes psychic damage equal to half the damage it dealt to the target. Once you use this property, you can't use it again until you finish a long rest.
Gift of Truth. You can transfer the gavel's magic to a place by tracing the venn rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 30-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the gavel to be within 5 feet of you. At the end, the gavel is destroyed, and the area gains the following property:
-Whenever a creature utters a lie while within the 30-foot-radius sphere, that creature takes 5 psychic damage and flinches visibly.`,
    },
    {
      name: "Orb of the Stein Rune",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This orb of granite is about the size of an adult human's fist. The stein (stone) rune appears on it in the form of crystalline veins that run across the surface. The orb has the following properties, which work only while it's on your person.
Indomitable Stand. As an action, you can channel the orb's magic to hold your ground. For the next minute or until you move any distance, you have advantage on all checks and saving throws to resist effects that force you to move. In addition, any enemy that moves to a space within 10 feet of you must succeed on a DC 12 Strength saving throw or be unable to move any farther this turn.
Stone Soul. You can't be petrified.
Earthen Step. You can cast Meld into Stone as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.
Gift of Stone. You can transfer the orb's magic to a nonmagical item (a shield or a pair of boots) by tracing the stein rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the orb is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:
- Shield. The shield is now a rare magic item that requires attunement. While you wield it, you have resistance to all damage dealt by ranged weapon attacks.
- Boots. The pair of boots is now an uncommon magic item that requires attunement. While you wear the boots, you have advantage on Strength saving throws, and you can use your reaction to avoid being knocked prone.`,
    },
    {
      name: "Ring of X-Ray Vision",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: `While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.

Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion.`,
    },
    {
      name: "Rod of the Pact Keeper, +2",
      rarity: "Rare",
      itemType: "Rod",
      attunment: true,
      price: 1000,
      description: `While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. This bonus is determined by the rod's rarity.
In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest. (This is a +2 item)`,
    },
    {
      name: "Lorehold Primer",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Lorehold Primer is a magic textbook created at Strixhaven's Lorehold College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (History) or Intelligence (Religion) check while holding the primer, you can expend 1 charge to give yourself 1d4 bonus to the check, immediately after you roll the d20.
In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the Cleric or Wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.`,
    },
    {
      name: "Pyroconverger",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `A pyroconverger is an Izzet-made flamethrower. It carries a risk of malfunction each time you use it.
As an action, you can cause the pyroconverger to project fire in a 10-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one.
Each time you use the pyroconverger, roll a d10 and add the number of times you have used it since your last long rest. If the total is 11 or higher, the pyroconverger malfunctions: you take 4d6 fire damage, and you can't use the pyroconverger again until you finish a long rest.`,
    },
    {
      name: "Quandrix Primer",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Quandrix Primer is a magic textbook created at Strixhaven's Quandrix College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (Arcana) or an Intelligence (Nature) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.
In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the Druid or Wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.`,
    },
    {
      name: "Rod of the Pact Keeper, +1",
      rarity: "Uncommon",
      itemType: "Rod",
      attunment: true,
      price: 250,
      description: `While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. This bonus is determined by the rod's rarity.
In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest. (This is a +1 item)`,
    },
    {
      name: "Silverquill Primer",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Silverquill Primer is a magic textbook created at Strixhaven's Silverquill College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make a Charisma (Intimidation) or a Charisma (Persuasion) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.
In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the Bard or Cleric spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.`,
    },
    {
      name: "Witherbloom Primer",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Witherbloom Primer is a magic textbook created at Strixhaven's Witherbloom College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (Nature) or Wisdom (Survival) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.
In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the Druid or Wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.`,
    },
    {
      name: "Cape of Enlargement",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `Ancient runes are stitched in silver thread along the hem of this grayish-purple cape.
The cape has 3 charges. As a bonus action while wearing the cape, you can expend 1 of its charges to enlarge yourself, granting yourself the following benefits:
Your size increases by one category—from Medium to Large, for example. If there isn’t enough room for your size to increase by one category, you instead become the maximum possible size in the space available.
You have advantage on Strength checks and Strength saving throws.
When you hit with an attack roll using a weapon or an unarmed strike, you can add your proficiency bonus to the attack’s damage.
These benefits last for 10 minutes or until you use another bonus action to dismiss them. The cape regains 1d3 expended charges daily at dawn.`,
    },
    {
      name: "Rod of the Pact Keeper, +3",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: true,
      price: 2500,
      description: `While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. This bonus is determined by the rod's rarity.
In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest. (This is a +3 item)`,
    }
  ],
};
