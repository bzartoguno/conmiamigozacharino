import { Tribe } from "./types";

export const tribePearlsPotions: Tribe = {
  name: "Pearl's Potions",
  owner: "Pearl",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Greater Health",
      description: "Heals 4d4 + 4.",
      price: 25,
    },
    {
      name: "Poison",
      description: "Deals 3d6 poison damage and lasts one hour.",
      price: 35,
    },
    {
      name: "Antidote",
      description: "Cures basic poisons.",
      price: 35,
    },
    {
      name: "Invisible",
      description: "Lasts for one hour.",
      price: 50,
    },
    {
      name: "Sleep",
      description: "Takes effect based on the target's sleep cycle.",
      price: 50,
    },
    {
      name: "Hill Giant's Strength",
      description: "Increase your STR by +6 for one hour.",
      price: 75,
    },
    {
      name: "Shadow Dancer's Nimbleness",
      description: "Increase your DEX by +6 for one hour.",
      price: 75,
    },
    {
      name: "Deva's Enlightenment",
      description: "Increase your INT by +6 for one hour.",
      price: 75,
    },
    {
      name: "Unicorn's Empathy",
      description: "Increase your WIS by +6 for one hour.",
      price: 75,
    },
    {
      name: "Potion of Sphinx's Grace",
      description: "Increase your CHA by +6 for one hour.",
      price: 75,
    },
  ],
};
