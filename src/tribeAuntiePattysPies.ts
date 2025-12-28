import { Tribe } from "./types";

export const tribeAuntiePattysPies: Tribe = {
  name: "Auntie Patty's Pies",
  owner: "Patty",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Goblin Berry Tart",
      price: 5,
      description: "Grants advantage on your next Stealth check.",
    },
    {
      name: "Blueberry Pie of Night Vision",
      price: 10,
      description: "Gives darkvision for two hours.",
    },
    {
      name: "Pumpkin Pie of Warmth",
      price: 15,
      description:
        "Keeps the eater comfortably warm, warding off natural cold for two hours.",
    },
    {
      name: "Strawberry Pie of Friendship",
      price: 20,
      description:
        "Eating a slice gives a +1 bonus to Animal Handling checks for one hour.",
    },
    {
      name: "Pear Pie",
      price: 25,
      description: "Increases walking speed by 5 ft until your next rest; non-stackable.",
    },
  ],
};
