import { Tribe } from "./types";

export const tribeRunestoneRelay: Tribe = {
  name: "Runestone Relay",
  owner: "Pat Redrockson",
  percentAngry: 0,
  priceVariability: 0,
  insults: [""],
  items: [
    {
      name: "Message Delivery",
      price: 5,
      description: "Sending simple messages on runestones to local destinations",
    },
    {
      name: "Package Delivery",
      price: 5,
      description: "Hold onto an item to be delivered at certain time & place",
    },
    {
      name: "A year-long subscription to the Daily Newspaper",
      price: 5,
      description: "",
    },
    {
      name: "Urgent Message",
      price: 5,
      description: "Will literally hunt the target down to hand deliver them a message",
    },
    {
      name: "Singing Telegram",
      price: 100,
      description: "",
    },
  ],
};
