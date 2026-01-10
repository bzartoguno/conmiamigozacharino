import { Item, Tribe } from "./types";

export interface JewelryGuildItem extends Item {
  priceText?: string;
}

export const tribeJewelryGuild: Tribe & { items: JewelryGuildItem[] } = {
  name: "Jewelry Guild",
  owner: "Garry",
  percentAngry: 0,
  priceVariability: 12,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          ],
  items: [
    {
      name: "Trinket Trade",
      price: 0,
      priceText: "???",
    },
    {
      name: "Regular Ring, Neckless, or Earrings",
      price: 10,
      description: "Simple adornments forged for everyday shine.",
    },
    {
      name: "Degrading Diamond Dust",
      price: 500,
      description: "Sparkling grit that weakens enchantments over time.",
    },
    {
      name: "Emerald Entrancement",
      price: 500,
      description: "Green-hued charm that entices attention your way.",
    },
    {
      name: "Obsidian Oath",
      price: 500,
      description: "A dark pledge sealed in volcanic glass.",
    },
    {
      name: "Petrifying Pyrite Pebbles",
      price: 500,
      description: "Fool's gold stones that stiffen the will and limbs.",
    },
    {
      name: "Phantom Pearl Powder",
      price: 500,
      description: "Iridescent dust that shimmers between realities.",
    },
    {
      name: "Reaper Ruby",
      price: 500,
      description: "Crimson gem that whispers of mortality.",
    },
    {
      name: "Soul Swapping Sapphire",
      price: 500,
      description: "Azure crystal rumored to mirror another's essence.",
    },
    {
      name: "Empty Memory Stone",
      price: 1000,
      description: "A blank gem waiting to be etched with new recollections.",
    },
  ],
};
