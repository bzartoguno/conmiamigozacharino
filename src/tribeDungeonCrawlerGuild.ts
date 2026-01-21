import { Tribe } from "./types";

export const tribeDungeonCrawlerGuild: Tribe = {
  name: "Dungeon Crawler Guild",
  owner: "Doug Doug",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          "Hi I'm Doug Doug and this is my familiar Rosa the sea otter! Welcome to the Dungeon Crawler Guild where we raise up new adventurers in relative safety!",
          "I once went through a dungeon where 10 wheels of cheese spawn in every second, man that was fun.",
          "Sometimes I hear a bunch of voices in my head, calling me bald. I started calling them twitch chat, I'm not crazy. I was tested, turns out I was actually being haunted, I get rid of them.",
          "Babaga-boosh!",
          "The darkness is really getting to me.",
          "Hey, you look like you'd like to dive into danger head first! My partner Parker is taking a little bit to get here, and there's an adventuring party in the dungeon coming up the stairs, but one of them hurt their leg. If it's not too much trouble, some help? You just need to help me with a DC 14 Acrobatics check to get this guy up the stairs. If you succeed, I’ll pay you 23 gp. If you fail, you kind of dropped the guy a few times, and that wasn't very nice, so I'll pay you 8 gp for your time.",
          ],
  items: [
    {
      name: "Basic Information about a Dungeon",
      description: "Provides basic details about a dungeon, including its layout, dungeon gimmicks, and potential hazards.",
      price: 10,
    },
    {
      name: "Retrieval Team",
      description: "Pay before you enter the dungeon. If you don't return after a set amount of time we'll send a team to retrieve you. Whether you get lost or may have kicked the bucket.",
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
      description: "Our ultimate package for the true dungeon enthusiast. Enjoy tax-free status on all your dungeon loot and services. Additionally, you'll receive exclusive access to members-only dungeons and events throughout the year. Though you will need to occasionally babysit people who want to be escorted through a dungeon.",
      price: 1000,
    },
    {
      name: "Greeting Adventurers!",
      description: "We welcome you to this public dungeon! Feel free to explore and have fun. Though we will have to tax any loot you find here. Because we put that money back into maintaining the dungeon and making sure that it doesn't spawn more monsters causing an outbreak in the nearby town. Any money left over from that we put towards setting up new adventures like yourself!",
      price: 0,
    },
    {
      name: "Sack of Sand",
      description: "Well, it's a sack of sand. We feel bad charging for it, but it's surprisingly useful for setting off traps early or weighing down pressure plates for puzzles.",
      price: 2,
    },
    {
      name: "Cooking Kit",
      description: "It's a basic cooking kit for preparing meals in almost any environment. Includes a small pot, pan, utensils, basic spices, and a little booklet on how to prep and cook monsters you can find in dungeons.",
      price: 7,
    },
  ],
};
