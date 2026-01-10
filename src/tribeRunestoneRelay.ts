import { Tribe } from "./types";

export const tribeRunestoneRelay: Tribe = {
  name: "Runestone Relay",
  owner: "Pat Redrockson",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          ],
  items: [
    {
      name: "Message Delivery",
      price: 5,
      description: "Sending simple messages on runestones to local destinations.",
    },
    {
      name: "Package Delivery",
      price: 5,
      description: "Hold onto an item to be delivered at a certain time and place.",
    },
    {
      name: "A year-long subscription to the Daily Newspaper",
      price: 5,
      description: "",
    },
    {
      name: "Urgent Message",
      price: 5,
      description: "Will literally hunt the target down to hand-deliver them a message.",
    },
    {
      name: "Singing Telegram",
      price: 100,
      description: "",
    },
    {
      name: "Waterproof Mail Pouch",
      price: 12,
      description:
        "Oiled canvas pouch with a roll-top and clasp. Keeps letters dry in rain, snow, and regrettable river crossings.",
    },
    {
      name: "Document Tube (map/scroll carrier)",
      price: 9,
      description:
        "Rigid tube with shoulder strap. Ideal for maps, notices, permits, and 'please don’t crease this' paperwork.",
    },
    {
      name: "Courier’s  Guide (pocket booklet)",
      price: 2,
      description:
        "Simple illustrated guide for common way around towns without getting lost. Includes a page on 'How to Avoid Angry kobalts goblins and childern with humongo swords on their backs.'",
    },
  ],
};
