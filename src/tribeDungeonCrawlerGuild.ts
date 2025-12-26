import { Tribe } from "./types";

export const tribeDungeonCrawlerGuild: Tribe = {
  name: "Dungeon Crawler Guild",
  owner: "Doug",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Basic Information about Dungeon",
      price: 10,
    },
    {
      name: "Retrieval Team",
      price: 20,
    },
    {
      name: "Premium Membership (10% less tax)",
      price: 50,
    },
    {
      name: "Escort Quest (50% less tax)",
      price: 100,
    },
    {
      name: "Premium Plus Membership (Tax-free)",
      price: 1000,
    },
  ],
};
