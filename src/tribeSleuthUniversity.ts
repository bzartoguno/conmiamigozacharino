import { Item, Tribe } from "./types";

export interface SleuthUniversityItem extends Item {
  priceText?: string;
}

export const tribeSleuthUniversity: Tribe & { items: SleuthUniversityItem[] } = {
  name: "Sleuth University",
  owner: "Professor Layton",
  percentAngry: 0,
  priceVariability: 8,
  insults: ["Every puzzle has an answer—follow the clues you can afford."],
  items: [
    {
      name: "Lost & Found",
      price: 5,
      description: "Track misplaced belongings through the campus network.",
    },
    {
      name: "Hire a Private Investigator / Spy / Ninja",
      price: 10,
      priceText: "Novice 10 Gold, Apprentice 25 Gold, or Master 50 Gold",
      description: "Pick the level of stealth support that fits your mystery.",
    },
    {
      name: "Rent Experimental Spell / Magic Item",
      price: 20,
      description: "Borrow cutting-edge arcana for field tests and capers.",
    },
    {
      name: "High-Quality Architecture Blueprints",
      price: 30,
      description: "Detailed, trustworthy plans for infiltration or restoration.",
    },
    {
      name: "Artisans Tomes of Learning (Fill in an empty skill with anything from the artisan's tool/kit list plus Enchanting, Engineering, & Magic-tech. You can have three different artisans' skills, but only ten are shared between all three.)",
      price: 75,
      description: "Structured study to master specialized artisan disciplines.",
    },
  ],
};
