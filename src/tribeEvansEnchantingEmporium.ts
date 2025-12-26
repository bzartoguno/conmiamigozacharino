import { Item, Tribe } from "./types";

export interface EvansEnchantingItem extends Item {
  priceText?: string;
}

export const tribeEvansEnchantingEmporium: Tribe & {
  items: EvansEnchantingItem[];
} = {
  name: "Evan's Enchanting Emporium",
  owner: "Evan",
  percentAngry: 0,
  priceVariability: 8,
  insults: ["Every enchantment is crafted to fit your story."],
  items: [
    {
      name: "Try Enchanting Yourself",
      price: 0,
      priceText: "????",
      description: "A risky, dazzling experiment—attempt your own enchantment.",
    },
    {
      name: "Inspect Item",
      price: 1,
      description: "Quick appraisal to gauge an item's enchantment potential.",
    },
    {
      name: "Spell Scroll",
      price: 100,
      priceText: "100 Gold per level of Spell",
      description: "Scrolls scribed to match the level of the spell you seek.",
    },
    {
      name: "Arcane Consultation",
      price: 500,
      priceText: "5-500 Gold",
      description: "Strategize the perfect enchantment with Evan's guidance.",
    },
    {
      name: "Remove Enchantment",
      price: 1000,
      description: "Safely lift a lingering enchantment without harming the item.",
    },
    {
      name: "Common Enchantment",
      price: 10,
      description: "Practical, reliable magic for everyday heroes.",
    },
    {
      name: "Uncommon Enchantment",
      price: 100,
      description: "Tailored upgrades with a spark of rare arcana.",
    },
    {
      name: "Rare Enchantment",
      price: 1000,
      description: "Potent effects for prized gear and ambitious goals.",
    },
    {
      name: "Very Rare Enchantment",
      price: 10000,
      description: "High-tier magic with meticulous craftsmanship.",
    },
    {
      name: "Legendary Enchantment",
      price: 100000,
      description: "Mythic-level work reserved for destiny-shaping relics.",
    },
  ],
};
