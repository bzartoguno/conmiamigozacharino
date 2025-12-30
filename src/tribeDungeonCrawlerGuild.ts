import { Tribe } from "./types";

export const tribeDungeonCrawlerGuild: Tribe = {
  name: "Dungeon Crawler Guild",
  owner: "Doug",
  percentAngry: 0,
  priceVariability: 5,
  insults: ["ba", "da", "boo"],
  items: [
    {
      name: "Basic Information about a Dungeon",
      description: "Provides basic details about a dungeon, including its layout, dungeon gimmicks, and potential hazards.",
      price: 10,
    },
    {
      name: "Retrieval Team",
      description: "Pay before you enter the dungeon. If you don't return after a set amount of time we'll send a team to retrieve you. Whether you get lost or make have kicked the bucket.",
      price: 20,
    },
    {
      name: "Premium Membership (10% less tax)",
      description: "Grants you a 10% discount on all dungeon-related services and items we also take about 10% less tax on your loot. And we can send you a monthly newsletter about nearby dungeons in your area!",
      price: 50,
    },
    {
      name: "Tutor guide (50% less tax)",
      description: "Not everyone who enters a dungeon is in it for the slaughter. Some people just want to explore and have fun. With this service, we assign you a guide member who will accompany you through the dungeon, ensuring your safety. Plus, we take 50% less tax on any loot you find!",
      price: 100,
    },
    {
      name: "Ultra Membership (Tax-free)",
      description: "Our ultimate package for the true dungeon enthusiast. Enjoy tax-free status on all your dungeon loot and services. Additionally, you'll receive exclusive access to members-only dungeons and events throughout the year. Tho will need to occationally babysit people who want to be escorted through a dungeon.",
      price: 1000,
    },
    {
      name: "Greeting Adventurers!",
      description: "We welcome you to this public dungeon! Feel free to explore and have fun. Though we will have to tax any loot you find here. Becuase we put that money back into maintaining the dungeon and making sure that it doesn't spawn more monsters cuasing an outbreak in the nearby town. Any money left over from that we put towards setting up new adventures like yourself!",
      price: 0,
    },
    {
      name: "Sack of Sand",
      description: "Well it's a sack of sand. We feel bad charging for it but it's surpisingly useful for setting off traps early or weighing down pressure plates for puzzles.",
      price: 2,
    },
    {
      name: "Cooking Kit",
      description: "It's basic cooking kit for preparing meals in almost any environment. Includes a small pot, pan, utensils, basic spices, and a little booklet on how to prep and cook monsters you can find in dungeons.",
      price: 7,
    },
  ],
};
