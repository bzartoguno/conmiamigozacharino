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
          "Any pets or mounts you receive will start may babies or children, and I thought having you grow alongside you as you progress in your journey would be fun. Let me know before or after a session if you'd like your little buddy to age up. I want this to be an enjoyable experience for both of us. Keep this in mind: when they do grow up, their maximum health will double as they grow, and all stats will get plus in every raw stat 2. Finally, they'll gain an extra 5 in whatever type of movement they have. Remember that younger companions also have a better chance of learning new actions or getting unique effects, like consistently consuming strength potions. Your baby can hold more passengers or has a +6 strength stat while it's just a little guy.",
          ],
  items: [
    {
      name: "3 Star Bell",
      price: 1000,
      description: "Roll a d4, d6, d8, d10, & a d12.",
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
    },
    {
      name: "Slime Size Table",
      price: 0,
      priceText: "Included roll table",
      description: `1 - Tiny, AC: 13, HP: x1\n2 & 3 - Small, AC: 15, HP: x2\n4 - Medium, AC: 17, HP: x3`,
    },
    {
      name: "Slime Temperament",
      price: 0,
      priceText: "Included roll table",
      description: `1 - Slappy, +1 STR\n2 - Zippy, +1 DEX\n3 - Hardy, +1 CON\n4 - Smarty, +1 INT\n5 - Jumpy, +1 WIS\n6 - Happy, +1 CHA`,
    },
    {
      name: "Slime Body Type",
      price: 0,
      priceText: "Included roll table",
      description: `1 - Liquidy, 5 HP, 10 ft Walk, 40 ft Swim\n2 - Bubbly, 10 HP, 40 ft Walk\n3 - Jiggly, 15 HP, 30 ft Walk\n4 - Rubbery, 15 HP, 35 ft Walk, 10 ft Climb\n5 - Sticky, 18 HP, 5 ft Walk, 5 ft Climb, 5 ft Swim\n6 - Bouncy, 20 HP, 25 ft Walk, 20 ft Climb\n7 - Slippery, 22 HP, ∞ ft Walk, but can't stop on its own\n8 - Chunky, 25 HP, 20 ft Walk`,
    },
    {
      name: "Accessories",
      price: 0,
      priceText: "Included roll table",
      description: `1 - Cute Bow: Can telepathically communicate\n2 - An Outfit: Adds +1 to Charisma checks\n3 - Glitter: Leaves a sparkle trail\n4 - Cozy Blanket: It's just a blanket… what a waste\n5 - Snack Pouch: Heals Slime 1d6 once per long rest\n6 - Squeaky Toy: Gives +1 to Performance checks\n7 - Tiny Hat: Advantage on Deception checks\n8 - Jingle Collar: giving +1 to CON SAV\n9 - Friendship Bracelet: BFFs 4ever!\n10 - Slime Plushie: Split into two once per long rest`,
    },
    {
      name: "Elemental Flavor",
      price: 0,
      priceText: "Included roll table",
      description: `1 - Pineapple Slime, Acid Resistance\n2 - Coconut Slime, Bludgeoning Resistance\n3 - Mint Slime, Cold Resistance\n4 - Cherry Slime, Fire Resistance\n5 - Vanilla Slime, Force Resistance\n6 - Lemon Slime, Lightning Resistance\n7 - Grape Slime, Necrotic Resistance\n8 - Durian Slime, Piercing Resistance\n9 - Lime Slime, Poison Resistance\n10 - Plum Slime, Psychic Resistance\n11 - Orange Slime, Radiant Resistance\n12 - Banana Slime, Thunder & Slashing Resistance`,
    },
  ],
};
