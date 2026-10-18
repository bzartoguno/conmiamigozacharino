import { Item, Tribe } from "./types";

export interface JellBellItem extends Item {
  priceText?: string;
}

export const tribeJellBell: Tribe & { items: JellBellItem[] } = {
  name: "Jell Bell",
  owner: "James",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "These count as companions, and remember you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one. Any pets or mounts you receive will start as babies or children, and I thought having them grow alongside you as you progress in your journey would be fun. Let me know before or after a session if you'd like your little buddy to age up. I want this to be an enjoyable experience for both of us. Keep this in mind: when they do grow up, their maximum health will double, and all stats will get +2 to every raw stat. Finally, they'll gain an extra 5 feet in whatever type of movement they have. Remember that younger companions also have a better chance of learning new actions or getting unique effects, like consistently consuming strength potions. Your baby can hold more passengers or have a +6 Strength stat while it's just a little guy.",
          "These count as companions, and remember you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one. Any pets or mounts you receive will start as babies or children, and I thought having them grow alongside you as you progress in your journey would be fun. Let me know before or after a session if you'd like your little buddy to age up. I want this to be an enjoyable experience for both of us. Keep this in mind: when they do grow up, their maximum health will double, and all stats will get +2 to every raw stat. Finally, they'll gain an extra 5 feet in whatever type of movement they have. Remember that younger companions also have a better chance of learning new actions or getting unique effects, like consistently consuming strength potions. Your baby can hold more passengers or have a +6 Strength stat while it's just a little guy.",
          "These count as companions, and remember you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one. Any pets or mounts you receive will start as babies or children, and I thought having them grow alongside you as you progress in your journey would be fun. Let me know before or after a session if you'd like your little buddy to age up. I want this to be an enjoyable experience for both of us. Keep this in mind: when they do grow up, their maximum health will double, and all stats will get +2 to every raw stat. Finally, they'll gain an extra 5 feet in whatever type of movement they have. Remember that younger companions also have a better chance of learning new actions or getting unique effects, like consistently consuming strength potions. Your baby can hold more passengers or have a +6 Strength stat while it's just a little guy.",
          "Oh bother, I just can't quite get the tuning on my ukulele right. Mmm, say there, you look like a cheery fellow! I like to keep my slimes engaged! Do you think you can put on a little show for them? It doesn't have to be anything special; most of them have the brain of a toddler. Just put on a little jig. Make a DC 14 Performance check to entertain the slimes. If you succeed, I’ll pay you 1,000 gp. If you fail, you take 25 points of acid damage because the slime got a bit bored and started playing with you, and you get a Healing Potion (Heals 2d4+2), 500 gp, and an over-the-top apology by James with all the slimes also apologizing.",
          ],
  items: [
    {
      name: "Perfume of Bewitching",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic.",
    },
    {
      name: "1 - Slappy, +1 STR",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `2 - Zippy, +1 DEX
3 - Hardy, +1 CON
4 - Smarty, +1 INT
5 - Jumpy, +1 WIS 6 - Happy, +1 CHA`,
    },
    {
      name: "3 Star Bell",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `(1,000G) – Roll a d4, d6, d8, d10, & a d12.
4 Star Bell (2,500G) – Roll with advantage
5 Star Bell (4,000G) – Pick a category and its result, then roll for the rest.
Fuse two Slimes 500G.`,
    },
    {
      name: "1 - Tiny, AC: 13, HP: x1",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `2 & 3 - Small, AC: 15, HP: x2
4 - Medium, AC: 17, HP`,
    },
    {
      name: "1 - Liquidy, 5 HP, 10 ft Walk, 40 ft Swim",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `2 - Bubbly, 10 HP, 40 ft Walk
3 - Jiggly, 15 HP, 30 ft Walk
4 - Rubbery, 15 HP, 35 ft Walk, 10 ft Climb
5 - Sticky, 18 HP, 5 ft Walk, 5 ft Climb, 5 ft Swim
6 - Bouncy, 20 HP, 25 ft Walk, 20 ft Climb
7 - Slippery, 22 HP, ∞ ft Walk, but can't stop on its own
8 - Chunky, 25 HP, 20 ft Walk`,
    },
    {
      name: "1 - Cute Bow: Can telepathically communicate",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `2 - An Outfit: Adds +1 to Charisma checks
3 - Glitter: Leaves a sparkle trail
4 - Cozy Blanket: It's just a blanket… what a waste
5 - Snack Pouch: Heals Slime 1d6 once per long rest
6 - Squeaky Toy: Gives +1 to Performance checks
7 - Tiny Hat: Advantage on Deception checks
8 - Jingle Collar: giving +1 to CON SAV
9 - Friendship Bracelet: BFFs 4ever!
10 - Slime Plushie`,
    },
    {
      name: "1 - Pineapple Slime, Acid Resistance",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `2 - Coconut Slime, Bludgeoning Resistance
3 - Mint Slime, Cold Resistance
4 - Cherry Slime, Fire Resistance
5 - Vanilla Slime, Force Resistance
6 - Lemon Slime, Lightning Resistance
7 - Grape Slime, Necrotic Resistance
8 - Durian Slime, Piercing Resistance
9 - Lime Slime, Poison Resistance
10 - Plum Slime, Psychic Resistance
11 - Orange Slime, Radiant Resistance
12 - Banana Slime, Thunder & Slashing Resistance`,
    },
    {
      name: "Kyrzin's Ooze",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This opalescent, symbiotic goo comes sealed in a jar and slowly shifts and moves, as if endlessly exploring the jar's interior. To attune to this item, you must first drink the contents of the jar, unlocking the following properties.
Resistant.
While attuned to
Kyrzin's ooze
, you have resistance to poison and acid damage, and you're immune to the poisoned condition.
Amorphous.
As an action, you can speak a command word and cause your body to assume the amorphous qualities of an ooze. For the next minute, you (along with any equipment you're wearing or carrying) can move through a space as narrow as 1 inch wide without squeezing. Once you use this property, it can't be used again until the next dawn.
Acid Breath.
As an action, you can exhale acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 36 (8d8) acid damage on a failed save, or half as much damage on a successful one. Once you use this property, it can't be used again until the next dawn.
Symbiotic Nature.
The ooze can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the ooze ends, as it seeps out of you.
If you die while the ooze is inside you, it bursts out and engulfs you, turning your corpse into a black pudding allied with the daelkyr (see the
Monster Manual
for the black pudding's stat block).`,
    },
    {
          name: "4 Star Bell",
          price: 2500,
          description: "Roll 2d4, 2d6, 2d8, 2d10, & 2d12 and pick which ones you want.",
        },
    {
          name: "5 Star Bell",
          price: 4000,
          description: "Pick a category and its result, then roll for the rest.",
        },
    {
          name: "Fuse two Slimes",
          price: 500,
          description: "Blend any two slimes together to see what fusion forms.",
        }
  ],
};
