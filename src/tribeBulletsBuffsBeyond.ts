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
      description: "Can only use one ammo type at a time, doubles damage dice rolled.",
      price: 500,
    },
    {
      name: "Hunter's Ammo",
      description: "Can only use one ammo type at a time, triples the weapon's range.",
      price: 700,
    },
    {
      name: "Protective Father's Ammo",
      description:
        "Can only use one ammo type at a time, when you shoot a close friend you heal instead of hurt.",
      price: 900,
    },
    {
      name: "Mother's Revenge Ammo",
      description:
        "Can only use one ammo type at a time, add an additional dice to the weapon for every five HP you are below maximum.",
      price: 1000,
    },
    {
      name: "Get Down Armor Wax",
      description: "Can only use one wax at a time, +3 to AC when next to an ally.",
      price: 1500,
    },
    {
      name: "Hardened Stance Shield Wax",
      description:
        "Can only use one wax at a time; if you do not use any movement speed on your turn, you gain +15 to AC.",
      price: 2000,
    },
    {
      name: "Medical Wax",
      description: "Can only use one wax at a time, heal 5 HP during your turn.",
      price: 3000,
    },
    {
      name: "Got anything... out back",
      description: "Please message me about what you would like so we can hash out the details.",
      price: 0,
      priceLabel: "Price may vary",
    },
  ],
};
