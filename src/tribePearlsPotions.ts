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
      description: "Heals 4d4+4",
      price: 25,
    },
    {
      name: "Poison",
      description: "Deals 3d6 & lasts 1 hour",
      price: 35,
    },
    {
      name: "Antidote",
      description: "Cures Basic Poisons",
      price: 35,
    },
    {
      name: "Invisible",
      description: "Lasts for 1 hour",
      price: 50,
    },
    {
      name: "Sleep",
      description: "Dependent upon target's sleep cycle",
      price: 50,
    },
    {
      name: "Hill Giant's Strength",
      description: "Make your STR +6 for 1 hour",
      price: 75,
    },
    {
      name: "Shadow Dancer's Nimbleness",
      description: "Make your DEX +6 for 1 hour",
      price: 75,
    },
    {
      name: "Deva's Enlightenment",
      description: "Make your INT +6 for 1 hour",
      price: 75,
    },
    {
      name: "Unicorn's Empathy",
      description: "Make your WISH +6 for 1 hour",
      price: 75,
    },
    {
      name: "Potion of Sphinx's Grace",
      description: "Make your CHR +6 for 1 hour",
      price: 75,
    },
  ],
};
