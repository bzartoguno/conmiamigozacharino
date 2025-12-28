import { Tribe } from "./types";

export const tribeArchivesGuild: Tribe = {
  name: "Archives Guild",
  owner: "Andrew Verion 2",
  percentAngry: 0,
  priceVariability: 0.5,
  insults: [""],
  items: [
    {
      name: "Sell a Common Item",
      price: 100,
      description: "Common items are everyday objects that are easily found, and NO WE DO NOT TAKE MERCHANDISE FROM OTHER SHOPS.",
    },
    {
      name: "Sell an Uncommon Item",
      price: 200,
      description: "Uncommon items are objects that are not easily found but usually have some kind of weak magical effect. NO WE DO NOT TAKE MERCHANDISE FROM OTHER SHOPS.",
    },
    {
      name: "Sell a Rare Item",
      price: 300,
      description: "Rare items are objects that are hard to find and usually have a moderate magical effect. NO WE DO NOT TAKE MERCHANDISE FROM OTHER SHOPS.",
    },
    {
      name: "Sell a Very Rare Item",
      price: 500,
      description: "Very rare items are objects that are extremely hard to find and usually have a strong magical effect.",
    },
    {
      name: "Sell a Legendary Item",
      price: 500000,
      description: "Legendary items are objects that are nearly impossible to find and usually have a powerful magical effect.",
    },
    {
      name: "Sell an Artifact Item",
      price: 50000000,
      description: "Artifact items are objects that are even harder to find and usually have a powerful magical effect.",
    },
  ],
};
