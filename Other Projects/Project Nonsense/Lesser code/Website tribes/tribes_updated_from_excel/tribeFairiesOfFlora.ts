import { Item, Tribe } from "./types";

export interface FairiesOfFloraItem extends Item {
  priceText?: string;
}

export const tribeFairiesOfFlora: Tribe & { items: FairiesOfFloraItem[] } = {
  name: "Fairies of Flora",
  owner: "Poppy",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "HEY! I'm flyin here!",
          "Sometime we the Don wants us to protect a kid on the Toothfairies hit list, we stake out under their bed and wait for that fairy tale punk! The kid thing that there's a monster under there, when really it's mob-sters.",
          "Bada bing! bada boom!",
          "Welcome to Fairies of Flora, we got flowers. Nothin else. What are you a cop?",
          "I miss Phil & Bill sometimes but I'm happy they get to go out there and try new things.",
          "Hey between you and me if there's a couple of kids who keep coming in here asking to join us, I really don't want to beucase well there kids but your willing to be a much cooler role model for them get them off of this crooked path I'll make it worth your time. Just make a DC 14 Persuasion check to turn them around. If your succeed, I’ll pay you 15 gp. If you fail, you get nothin.",

          "HEY! I'm flyin here!",
          "Sometime we the Don wants us to protect a kid on the Toothfairies hit list, we stake out under their bed and wait for that fairy tale punk! The kid thing that there's a monster under there, when really it's mob-sters.",
          "Bada bing! bada boom!",
          "Welcome to Fairies of Flora, we got flowers. Nothin else. What are you a cop?",
          "I miss Phil & Bill sometimes but I'm happy they get to go out there and try new things.",
          "HEY! I'm flyin here!",
          "Sometime we the Don wants us to protect a kid on the Toothfairies hit list, we stake out under their bed and wait for that fairy tale punk! The kid thing that there's a monster under there, when really it's mob-sters.",
          "Bada bing! bada boom!",
          "Welcome to Fairies of Flora, we got flowers. Nothin else. What are you a cop?",
          "I miss Phil & Bill sometimes but I'm happy they get to go out there and try new things.",
          "HEY! I'm flyin here!",
          "Sometime we the Don wants us to protect a kid on the Toothfairies hit list, we stake out under their bed and wait for that fairy tale punk! The kid thing that there's a monster under there, when really it's mob-sters.",
          "Bada bing! bada boom!",
          "Welcome to Fairies of Flora, we got flowers. Nothin else. What are you a cop?",
          "I miss Phil & Bill sometimes but I'm happy they get to go out there and try new things.",
          
          ],
  items: [
    {
      name: "Imbued Wood Focus",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `An imbued wood focus is a rod, staff, or wand cut from a tree infused with extraplanar energy. If you're a spellcaster, you can use this as a spellcasting focus.
When you cast a damage-dealing spell using this item as your spellcasting focus, you gain a +1 bonus to one damage roll of the spell, provided the damage is of the type associated with the item's wood. The types of wood and their associated damage types are listed in the Imbued Wood Focus table.
Imbued Wood Focus
Wood - Damage Type
Fernian Ash- Fire
Irian Rosewood- Radiant
Kythrian Manchineel- Acid or poison
Lamannian Oak- Lightning or thunder
Mabaran Ebony- Necrotic
Risian Pine- Cold
Shavarran Birch- Force
Xorian Wenge- Psychic`,
    },
    {
      name: "Medal of the Maze",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "When you use an action to trace the maze inscribed on this medal, you gain advantage on Wisdom checks and know the quickest route to the end of any nonmagical path or maze for 1 hour. Once this property has been used, it can’t be used again, and the medal becomes nonmagical.",
    },
    {
      name: "Pot of Awakening",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub (see the Monster Manual for statistics) at the end of that time. When the shrub awakens, its roots break the pot, destroying it.
The awakened shrub is friendly toward you. Absent commands from you, it does nothing.`,
    },
    {
      name: "Staff of Flowers",
      rarity: "Common",
      itemType: "Staff",
      attunment: false,
      price: 40,
      description: `This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would.
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into flower petals and is lost forever.`,
    },
    {
      name: "Flowers",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Any kind of non magical flower.",
      PriceText: "Free",
    },
    {
      name: "Charm of Plant Command",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This fist-sized charm is made from a bundle of dried plant stems wrapped in silver thread. Hung on a leather thong, it is typically worn around the neck or attached to a belt.
This charm has 3 charges. While you bear the charm, you can expend 1 charge as an action to cast the Speak with Plants spell. For the duration of the spell, you also have advantage on Charisma checks made to influence the behavior, demeanor. and attitude of plants. The charm regains all expended charges at dawn each day.`,
    },
    {
      name: "Gulthias Staff",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `Made from the branch of a Gulthias tree (see the blights entry in the Monster Manual), a Gulthias staff is a spongy, black length of wood. Its evil makes beasts visibly uncomfortable while within 30 feet of it. The staff has 10 charges and regains 1d6 + 4 of its expended charges daily at dusk.
If the staff is broken or burned to ashes, its wood releases a terrible, inhuman scream that can be heard out to a range of 300 feet. All blights that can hear the scream immediately wither and die.
Vampiric Strike. The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to regain a number of hit points equal to the damage dealt by the weapon. Each time a charge is spent, red blood oozes from the staff's pores, and you must succeed on a DC 12 Wisdom saving throw or be afflicted with short-term madness (see "Madness" in chapter 8 of the Dungeon Master's Guide).
Blight Bane. While you are attuned to the staff, blights and other evil plant creatures don't regard you as hostile unless you harm them.`,
    },
    {
      name: "Kagonesti Forest Shroud",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: "This cloak appears to be made of autumnal leaves woven together. While you wear this cloak, you have advantage on Dexterity (Stealth) checks, and you can use a bonus action to magically teleport, along with any equipment you are wearing or carrying, to an unoccupied space you can see within 30 feet of yourself. You then have advantage on the next attack roll you make before the end of the turn. Once this bonus action is used, it can't be used again until the next dawn.",
    },
    {
      name: "Staff of the Woodlands",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.
The staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.
Spells. You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).
You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.
Tree Form. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by detect magic. While touching the tree and using another action to speak its command, word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.`,
    },
    {
      name: "Nature's Mantle",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a spellcasting focus for your druid and ranger spells.
While you are in an area that is lightly obscured, you can Hide as a bonus action even if you are being directly observed.`,
    },
    {
      name: "I've been meaning to ask",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Make a request to the mob, but it's up the the Fairy Godfather if the mob will follow through.",
      PriceText: "Owe the Faries of Flora either a little, regular, or big favor.",
    },
    {
      name: "I know a guy who needs to take a break and smell a flower",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Soul Seizer chrysanthemum — this deceptive flower blooms if an organic creature gets within 5 feet of it and tries to drain that creature's soul, killing it immediately.",
      priceText: "Owe the Faries of Flora a big favor.",
    },
    {
      name: "Mush youm be askin so many questions?",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Hire a Walking Mushroom, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I think I found someone to be my vine-ntine, and I need help asking them out.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Hire a Shambling Mound, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I need a gift that grows.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Hire a Chi Chi Chia Automaton, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "Woodn't you like to know.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Hire a Treant, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I want a new house for my other spouse.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "You gain a seed of whatever plant you want, this see can be planted in any type of soil. when it does it will grow rapidly to a giant version of that plant acting like the spell 'tiny hut' but flavored to be a plant. But it lasts 12 hours, can be destroyed and inside is an identical seed to the seed you planted that can be harvested and reused again when current plant house is gone.",
    },
    {
      name: "I need a plumber who can work around the clock.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Request any plant-based power-up from Nintendo.",
    }
  ],
};
