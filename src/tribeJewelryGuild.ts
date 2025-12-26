import { Item, Tribe } from "./types";

export interface JewelryGuildItem extends Item {
  priceText?: string;
}

export const tribeJewelryGuild: Tribe & { items: JewelryGuildItem[] } = {
  name: "Jewelry Guild",
  owner: "Garry",
  percentAngry: 0,
  priceVariability: 12,
  insults: ["Trade a gem for a grin—Garry appraises with a spark in his eye."],
  items: [
    {
      name: "Trinket Trade",
      price: 0,
      priceText: "???",
    },
    {
      name: "Regular Ring, Neckless, or Earrings",
      price: 10,
      description: "Simple adornments forged for everyday shine.",
    },
    {
      name: "Degrading Diamond Dust",
      price: 500,
      description: "Sparkling grit that weakens enchantments over time.",
    },
    {
      name: "Emerald Entrancement",
      price: 500,
      description: "Green-hued charm that entices attention your way.",
    },
    {
      name: "Obsidian Oath",
      price: 500,
      description: "A dark pledge sealed in volcanic glass.",
    },
    {
      name: "Petrifying Pyrite Pebbles",
      price: 500,
      description: "Fool's gold stones that stiffen the will and limbs.",
    },
    {
      name: "Phantom Pearl Powder",
      price: 500,
      description: "Iridescent dust that shimmers between realities.",
    },
    {
      name: "Reaper Ruby",
      price: 500,
      description: "Crimson gem that whispers of mortality.",
    },
    {
      name: "Soul Swapping Sapphire",
      price: 500,
      description: "Azure crystal rumored to mirror another's essence.",
    },
    {
      name: "Empty Memory Stone",
      price: 1000,
      description: "A blank gem waiting to be etched with new recollections.",
    },
  ],
};
