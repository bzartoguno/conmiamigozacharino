import { Tribe } from "./types";

export const tribeProvisionsParadise: Tribe = {
  name: "Provision's Paradise",
  owner: "Parry Vr 36",
  percentAngry: 0,
  priceVariability: 6,
  insults: ["Keep your hands clean — reagents don't like crumbs."],
  items: [
    {
      name: "Small Components Bag",
      price: 20,
      description: "Stocked for 0–2 level spells.",
    },
    {
      name: "Minor Bag of Holding",
      price: 25,
      description: "Compact space for reagents and scrolls.",
    },
    {
      name: "Medium Components Bag",
      price: 50,
      description: "Organized for 3–5 level spells.",
    },
    {
      name: "Any 3 Kits",
      price: 75,
      description: "Bundle any three kits you need for the road.",
    },
    {
      name: "Large Components Bag",
      price: 100,
      description: "Ruggedly lined for 6–9 level spell components.",
    },
  ],
};
