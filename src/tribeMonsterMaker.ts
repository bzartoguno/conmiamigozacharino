import { Item, Tribe } from "./types";

export interface MonsterMakerItem extends Item {
  priceText?: string;
  category: string;
}

export const tribeMonsterMaker: Tribe & { items: MonsterMakerItem[] } = {
  name: "Make a Monster",
  owner: "Mertal",
  percentAngry: 0,
  priceVariability: 10,
  insults: ["If you can dream it, we can bolt it together and make it roar."],
  items: [
    {
      category: "Type of Elemental",
      name: "Water Elemental",
      price: 1000,
      description: "Speed: 30 ft, Swim: 90 ft",
    },
    {
      category: "Type of Elemental",
      name: "Air Elemental",
      price: 1200,
      description: "Speed: 90 ft, Fly: 60 ft",
    },
    {
      category: "Type of Elemental",
      name: "Earth Elemental",
      price: 1250,
      description: "Speed: 30 ft, Burrow: 15 ft",
    },
    {
      category: "Type of Elemental",
      name: "Ice Elemental",
      price: 1400,
      description: "Speed: 30 ft, Glide: 20 ft",
    },
    {
      category: "Type of Elemental",
      name: "Fire Elemental",
      price: 1500,
      description: "Speed: 50 ft",
    },
    {
      category: "Type of Elemental",
      name: "Metal Elemental",
      price: 1600,
      description: "Speed: 25 ft",
    },
    {
      category: "Type of Elemental",
      name: "Lightning Elemental",
      price: 1750,
      description: "Speed: 60 ft",
    },
    {
      category: "Type of Elemental",
      name: "Cosmic (Arcane) Elemental",
      price: 3000,
      description: "Speed: 15 ft, Swim: 15 ft, Climb: 15 ft, Fly: 15 ft, Burrow: 15 ft",
    },
    {
      category: "Size Options",
      name: "Tiny",
      price: 500,
      description: "AC: 13, HP: 1 to Age HP",
    },
    {
      category: "Size Options",
      name: "Small",
      price: 1000,
      description: "AC: 15, HP: 2 to Age HP",
    },
    {
      category: "Size Options",
      name: "Medium",
      price: 2000,
      description: "AC: 17, HP: 3 to Age HP, Mountable",
    },
    {
      category: "Age Category",
      name: "Young",
      price: 800,
      description: "HP: 30, Susceptible, friendly",
    },
    {
      category: "Age Category",
      name: "Adult",
      price: 1200,
      description: "HP: 60, Willful, Obedience",
    },
    {
      category: "Age Category",
      name: "Elder",
      price: 2500,
      description: "HP: 90, Independent yet powerful, gains AOE attacks",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Fierce",
      price: 0,
      priceText: "Included personality: +2 STR",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Nimble",
      price: 0,
      priceText: "Included personality: +2 DEX",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Resilient",
      price: 0,
      priceText: "Included personality: +2 CON",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Keen",
      price: 0,
      priceText: "Included personality: +2 INT",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Wise",
      price: 0,
      priceText: "Included personality: +2 WIS",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Charming",
      price: 0,
      priceText: "Included personality: +2 CHA",
      description: "Personality customization",
    },
    {
      category: "Additional Accessories",
      name: "Make it glow!",
      price: 800,
      description: "Emits a faint glow, illuminating a 30 ft radius",
    },
    {
      category: "Additional Accessories",
      name: "Friendship Bracelet",
      price: 1500,
      description: "Grants minor regeneration restoring heal while not in combat.",
    },
    {
      category: "Additional Accessories",
      name: "Any Color Bow",
      price: 1800,
      description: "Allows telepathic communication with the elemental, up to 1 mile",
    },
    {
      category: "Additional Accessories",
      name: "Power Snack",
      price: 2000,
      description: "Boosts elemental attacks, increasing damage dice by one level (e.g., d6 to d8, d8 to d10)",
    },
    {
      category: "Additional Accessories",
      name: "Toasts Besties Scarf",
      price: 3000,
      description: "Allows the elemental to take half of the damage dealt to its bonded owner, usable once per short rest.",
    },
  ],
};
