import { Tribe } from "./types";

export const tribeSilentOath: Tribe = {
  name: "Silent Oath",
  owner: "Nacho",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "",
          "",
          "",
          "",
          "",
          "give me a DC 14 Deception check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Intel Gathering Contract",
      price: 100,
      description: "Similar to surveillance but you get more detailed information about the target including habits, secrets, and possible weaknesses.",
    },
    {
      name: "Safe Passage Contract",
      price: 200,
      description: "If your on the run we can sneak you get you to another place without alerting the local athorities.",
    },
    {
      name: "Curse & Hex Contract",
      price: 300,
      description: "",
    },
    {
      name: "Disposal Contract",
      price: 400,
      description: "",
    },
    {
      name: "Assassination Contract",
      price: 1500,
      description: "",
    },
    {
      name: "Surveillance Contract",
      price: 75,
      description: "Tails the target for 1–3 days and delivers a written routine report (where they go, who they meet, when they’re alone).",
    },
    {
      name: "Alibi Contract",
      price: 150,
      description: "We set you up with soild paperwork + witnesses for hire to place you somewhere else (inn receipts, event attendance, “I saw them there” statements).",
    },
    {
      name: "Blackmail Neutralization Contract",
      price: 250,
      description: "We recover, destroy, or replace compromising letters/items, plus identify who’s holding copies and who’s been paid to talk.",
    },
    {
      name: "Identity Scrub Contract",
      price: 300,
      description: "We set you up in a new life. We quietly removes your trail from ledgers, guestbooks, hire registries, and “helpful” guard notes—mundane bribery and record-swaps, no magic. Very popular in our line of work.",
    },
  ],
};
