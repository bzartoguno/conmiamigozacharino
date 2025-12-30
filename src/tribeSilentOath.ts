import { Tribe } from "./types";

export const tribeSilentOath: Tribe = {
  name: "Silent Oath",
  owner: "Nacho",
  percentAngry: 0,
  priceVariability: 0,
  insults: [""],
  items: [
    {
      name: "Intel Gathering Contract",
      price: 100,
      description: "Similar to surveillance but you get more detailed information about the target including habits, secrets, and weaknesses.",
    },
    {
      name: "Safe Passage Contract",
      price: 200,
      description: "",
    },
    {
      name: "Curse & Hex Contract",
      price: 30,
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
