import { Tribe } from "./types";

export const tribeArchivesGuild: Tribe = {
  name: "Archives Guild",
  owner: "Andrew Verion 2",
  percentAngry: 0,
  priceVariability: 0.5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          ],
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
