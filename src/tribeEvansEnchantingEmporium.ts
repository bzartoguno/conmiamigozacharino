import { Item, Tribe } from "./types";

export interface EvansEnchantingItem extends Item {
  priceText?: string;
}

export const tribeEvansEnchantingEmporium: Tribe & {
  items: EvansEnchantingItem[];
} = {
  name: "Evan's Enchanting Emporium",
  owner: "Evan",
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
      name: "Try Enchanting Yourself",
      price: 0,
      priceText: "????",
      description: "A risky, dazzling experiment—attempt your own enchantment.",
    },
    {
      name: "Inspect Item",
      price: 1,
      description: "Quick appraisal to gauge an item's enchantment potential.",
    },
    {
      name: "Spell Scroll",
      price: 100,
      priceText: "100 Gold per level of Spell, so a LV 1 scroll is 100, a LV 2 scroll is 200, etc",
      description: "Scrolls scribed to match the level of the spell you seek.",
    },
    {
      name: "Arcane Consultation",
      price: 500,
      priceText: "5-500 Gold",
      description: "Strategize the perfect enchantment with Evan's guidance.",
    },
    {
      name: "Remove Enchantment",
      price: 1000,
      description: "Safely lift a lingering enchantment without harming the item, so long as it's not cursed.",
    },
    {
      name: "Common Enchantment",
      price: 10,
      description: "Practical, reliable magic for everyday heroes.",
    },
    {
      name: "Uncommon Enchantment",
      price: 100,
      description: "Tailored upgrades with a spark of rare arcana.",
    },
    {
      name: "Rare Enchantment",
      price: 1000,
      description: "Potent effects for prized gear and ambitious goals.",
    },
    {
      name: "Very Rare Enchantment",
      price: 10000,
      description: "High-tier magic with meticulous craftsmanship.",
    },
    {
      name: "Legendary Enchantment",
      price: 100000,
      description: "Mythic-level work reserved for destiny-shaping relics, what can go wrong!",
    },
  ],
};
