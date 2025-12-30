import { Item, Tribe } from "./types";

interface BulletsBuffsBeyondItem extends Item {
  priceLabel?: string;
}

interface BulletsBuffsBeyondTribe extends Omit<Tribe, "items"> {
  items: BulletsBuffsBeyondItem[];
}

export const tribeBulletsBuffsBeyond: BulletsBuffsBeyondTribe = {
  name: "Bullets, Buffs, & Beyond",
  owner: "Bob",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Killer's Ammo",
      description: "Only one ammo type can be used at a time; this option doubles the damage dice rolled.",
      price: 500,
    },
    {
      name: "Hunter's Ammo",
      description: "Only one ammo type can be used at a time; this option triples the weapon's range.",
      price: 700,
    },
    {
      name: "Protective Father's Ammo",
      description:
        "Only one ammo type can be used at a time; when you shoot a close friend, you heal them instead of hurting them.",
      price: 900,
    },
    {
      name: "Mother's Revenge Ammo",
      description:
        "Only one ammo type can be used at a time; add an additional die to the weapon for every five HP you are below maximum.",
      price: 1000,
    },
    {
      name: "Get Down Armor Wax",
      description: "Only one wax can be used at a time; gain +3 to AC when next to an ally.",
      price: 1500,
    },
    {
      name: "Hardened Stance Shield Wax",
      description:
        "Only one wax can be used at a time; if you do not use any movement speed on your turn, you gain +15 to AC.",
      price: 2000,
    },
    {
      name: "Medical Wax",
      description: "Only one wax can be used at a time; it heals 5 HP during your turn.",
      price: 3000,
    },
    {
      name: "Got anything... out back",
      description: "Please message me about what you would like so we can hash out the details.",
      price: 0,
      priceLabel: "Price may vary",
    },
    {
      name: "Brass & Brush Cleaning Kit",
      price: 12,
      description:
        "A tidy roll-up kit with brushes, patches, oil, and a rag—keeps your gear clean, reliable, and less embarrassing in public.",
    },
    {
      name: "Practice Rounds",
      price: 10,
      description:
        "Inert training rounds for safe loading drills and practice; great for learning without wasting the real stuff or to trick a friend because they deal 0 damage.",
    },
    {
      name: "Earplugs",
      price: 3,
      description:
        "Simple reusable earplugs in a tiny tin can because hearing loss is forever.",
    },

  ],
};
