import { Item, Tribe } from "./types";

export interface YeOldHomeDepotItem extends Item {
  priceText?: string;
}

export const tribeYeOldHomeDepot: Tribe & { items: YeOldHomeDepotItem[] } = {
  name: "Ye Old Home Depot",
  owner: "Henry",
  percentAngry: 0,
  priceVariability: 8,
  insults: ["Build, repair, and restock—everything you need in one lumber-scented stop."],
  items: [
    {
      name: "Plank of Wood (it’s a freshly cut 2x4)",
      price: 1,
      description: "Straight, smooth lumber ready for framing or quick fixes.",
    },
    {
      name: "Box of Iron Nails (100 count)",
      price: 5,
      description: "Reliable fasteners for framing, patching, and everyday builds.",
    },
    {
      name: "Sturdy Claw Hammer",
      price: 12,
      description: "Balanced grip with a claw that yanks mistakes back out.",
    },
    {
      name: "Coiled Hemp Rope (50 ft)",
      price: 8,
      description: "Tough, weather-ready rope for hauling, tying, and towing.",
    },
    {
      name: "Weatherproof Paint (gallon)",
      price: 18,
      description: "Neutral base coat that shrugs off rain and road dust.",
    },
    {
      name: "Bag of Quick-Set Concrete",
      price: 22,
      description: "Just add water for posts, steps, or a speedy patch job.",
    },
    {
      name: "Pair of Reinforced Work Gloves",
      price: 7,
      description: "Thick palms and knuckle guards to keep splinters away.",
    },
    {
      name: "Door Hinges & Screws Kit",
      price: 9,
      description: "Matching hinges, screws, and shims to square up any entryway.",
    },
    {
      name: "Custom Lumber Cutting",
      price: 0,
      priceText: "Price may vary",
      description: "Cut sheets and boards to fit without wasting a single inch.",
    },
    {
      name: "Wheelbarrow Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Haul gravel, soil, or stone without buying the whole cart.",
    },
  ],
};
