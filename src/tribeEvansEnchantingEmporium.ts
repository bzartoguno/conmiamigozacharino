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
      name: "Inspect Magical Item",
      price: 10,
      description: "Quick appraisal in the arcane spectrum to gauge an item's potential.",
    },
    {
      name: "Spell Scroll",
      price: 100,
      priceText: "100 Gold per level of Spell, so a LV 1 scroll is 100, a LV 2 scroll is 200, etc",
      description: "Scrolls scribed to match the level of the spell you seek.",
    },
    {
      name: "Remove Enchantment",
      price: 1000,
      description: "With the fact being that each time can only hold one enchantment sometimes you need to remove it. Safely lift a lingering enchantment without harming the item, so long as it's not cursed.",
    },
    {
      name: "Common Enchantment",
      price: 10,
      description: `Roll a 1d20 and apply it to your item!
      1- Never Lost: You always know which direction it item is located reguardless of distance.
      2- Spontaneous Combustion: This item will explode when it break, dealing 3d10+5 fire damage.
      3- Magnetic Attraction: Metal objects within 5 feet will slowly be pulled towards this item if they are lighter, but if they are heavier this item will be attached to it instead.
      4- Smol: This item shrinks to the size of a mouse permanently.
      5- BIG: This item grows to the size of a elephant permanently.
      6- My eyes: Who ever willing holds this item temperarly become blind.
      7- Bed time: Who ever willing holds this item temperarly has narcolepsy.`,
    },
    {
      name: "Uncommon Enchantment",
      price: 100,
      description: `Roll a 1d12 and apply it to your item!`,
    },
    {
      name: "Rare Enchantment",
      price: 1000,
      description: `Roll a 1d10 and apply it to your item!`,
    },
    {
      name: "Very Rare Enchantment",
      price: 10000,
      description: `Roll a 1d8 and apply it to your item!`,
    },
    {
      name: "Legendary Enchantment",
      price: 100000,
      description: `Roll a 1d6 and apply it to your item!`,
    },
    {
      name: "Enchantmenter grimoire",
      price: 10,
      description: "When an enchantment is removed you can instead learn it and put it into this book! Then when you go to enchant instead of rolling to find out which enchantment, after pay the apropitace cost, you got used to one you learned using this book instead.",
    },
  ],
};
