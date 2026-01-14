import { Item, Tribe } from "./types";

export interface NMEItem extends Item {
  priceText?: string;
}

export const tribeNME: Tribe & { items: NMEItem[] } = {
  name: "N.M.E.",
  owner: "Fred the Vampire",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "",
          "",
          "",
          "",
          "",
          "give me a DC 14 Medicine check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Blood for Knowledge",
      price: 0,
      priceText: "10-50 Permanent HPs",
      description: "Trade lasting vitality for forbidden lore from Fred's archives.",
    },
    {
      name: "Blood for Power",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Sacrifice strength to gain raw, volatile power.",
    },
    {
      name: "Blood for Blackmail",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Offer your essence to secure leverage over rivals.",
    },
    {
      name: "Blood for An Endless Elixir",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Bleed into a vial that never runs dry—at a price to your lifeforce.",
    },
    {
      name: "Blood for Spectral Servant",
      price: 0,
      priceText: "Loss of 5-25 Permanent HPs",
      description: "Summon a bound spirit to serve, fueled by your own blood.",
    },
    {
      name: "Blood for Legendary Artifact",
      price: 0,
      priceText: "Loss of 15-35 Permanent HPs",
      description: "Secure an artifact of legend by pledging a deeper sacrifice.",
    },
    {
      name: "Random Illegal Blueprint",
      price: 50,
      description: "Schematics too risky for open markets, offered discreetly.",
    },
    {
      name: "Random Illegal Weapons",
      price: 100,
      description: "A surprise weapon smuggled from forbidden caches.",
    },
    {
      name: "Scroll of True Resurrection",
      price: 150000,
      description: "A rare scroll capable of restoring the fallen—if you dare pay.",
    },
    {
      name: "Random Illegal Contraptions",
      price: 0,
      priceText: "150-2,000 Gold",
      description: "Unpredictable devices with prices to match their volatility.",
    },
  ],
};
