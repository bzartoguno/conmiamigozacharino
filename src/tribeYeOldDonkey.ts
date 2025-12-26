import { Tribe } from "./types";

export const tribeYeOldDonkey: Tribe = {
  name: "Ye Old Donkey",
  owner: "Tim",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Room & Board",
      price: 1,
      description:
        "This includes Breakfast, Lunch and Dinner and lasts 24 hours.",
    },
    {
      name: "Fortified Room & Board",
      price: 50,
      description:
        "Same as the last one, but you actually get a lock and key for your room.",
    },
    {
      name: "Secret crab illegal fighting ring",
      price: 100,
      description: "It’s what it sounds like.",
    },
  ],
};
