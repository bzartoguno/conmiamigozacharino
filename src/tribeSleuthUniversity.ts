import { Item, Tribe } from "./types";

export interface SleuthUniversityItem extends Item {
  priceText?: string;
}

export const tribeSleuthUniversity: Tribe & { items: SleuthUniversityItem[] } = {
  name: "Sleuth University",
  owner: "Professor Layton",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          ],
  items: [
    {
      name: "Lost & Found",
      price: 5,
      description: "Track misplaced belongings through the campus network.",
    },
    {
      name: "Hire a Private Investigator / Spy / Ninja",
      price: 10,
      priceText: "Novice 10 Gold, Apprentice 25 Gold, or Master 50 Gold",
      description: "Pick the level of stealth support that fits your mystery.",
    },
    {
      name: "Rent Experimental Spell / Magic Item",
      price: 20,
      description: "Borrow cutting-edge arcana for field tests and capers.",
    },
    {
      name: "High-Quality Architecture Blueprints",
      price: 30,
      description: "Detailed, trustworthy plans for infiltration or restoration.",
    },
    {
      name: "Artisans Tomes of Learning",
      price: 75,
      description: "Fill in an empty skill with anything from the artisan's tool/kit list plus Enchanting, Engineering, & Magic-tech. You can have three different artisans' skills, but only ten are shared between all three.",
    },
  ],
};
