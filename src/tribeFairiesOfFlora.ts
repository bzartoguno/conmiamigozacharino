import { Item, Tribe } from "./types";

export interface FairiesOfFloraItem extends Item {
  priceText?: string;
}

export const tribeFairiesOfFlora: Tribe & { items: FairiesOfFloraItem[] } = {
  name: "Fairies of Flora",
  owner: "Poppy",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          ],
  items: [
    {
      name: "Buy a Shambling Mound / Chi Chi Chia Automaton / Walking Mushroom",
      price: 0,
      priceText: "???",
      description: "Seedling ???, sapling ???, or fully grown ???.",
    },
    {
      name: "I need a plumber who can work around the clock.",
      price: 0,
      priceText: "???",
      description: "Request any plant-based power-up from Nintendo.",
    },
    {
      name: "I want a new house for my other spouse.",
      price: 0,
      priceText: "???",
      description:
        "Request any fruit or vegetable seeds from a cloud giant that will grow large enough to carve a house out of.",
    },
    {
      name: "Hire any color hydrangea / Treant / wood elf",
      price: 0,
      priceText: "???",
      description: "Seedling ???, sapling ???, or fully grown ???.",
    },
    {
      name: "I know a guy who needs to take a break and smell a flower",
      price: 0,
      priceText: "???",
      description:
        "Soul Seizer chrysanthemum — this deceptive flower blooms if an organic creature gets within 5 feet of it and tries to drain that creature's soul, killing it immediately.",
    },
  ],
};
