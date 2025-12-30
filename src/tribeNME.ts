import { Item, Tribe } from "./types";

export interface NMEItem extends Item {
  priceText?: string;
}

export const tribeNME: Tribe & { items: NMEItem[] } = {
  name: "N.M.E.",
  owner: "Fred the Vampire",
  percentAngry: 0,
  priceVariability: 0,
  insults: ["Power and secrets come at a cost—blood or coin will do."],
  items: [
    {
      name: "Blood for Knowledge",
      price: 0,
      priceText: "10-50 Permanent HPs",
      description: "Trade lasting vitality for forbidden lore from Fred's archives.",
    },
    {
      name: "Blood for Power",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Sacrifice strength to gain raw, volatile power.",
    },
    {
      name: "Blood for Blackmail",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Offer your essence to secure leverage over rivals.",
    },
    {
      name: "Blood for An Endless Elixir",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Bleed into a vial that never runs dry—at a price to your lifeforce.",
    },
    {
      name: "Blood for Spectral Servant",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Summon a bound spirit to serve, fueled by your own blood.",
    },
    {
      name: "Blood for Legendary Artifact",
      price: 0,
      priceText: "Loss of 15-35 Permanent HPs",
      description: "Secure an artifact of legend by pledging a deeper sacrifice.",
    },
    {
      name: "Random Illegal Blueprint",
      price: 50,
      description: "Schematics too risky for open markets, offered discreetly.",
    },
    {
      name: "Random Illegal Weapons",
      price: 100,
      description: "A surprise weapon smuggled from forbidden caches.",
    },
    {
      name: "Scroll of True Resurrection",
      price: 150000,
      description: "A rare scroll capable of restoring the fallen—if you dare pay.",
    },
    {
      name: "Random Illegal Contraptions",
      price: 0,
      priceText: "150-2,000 Gold",
      description: "Unpredictable devices with prices to match their volatility.",
    },
  ],
};
