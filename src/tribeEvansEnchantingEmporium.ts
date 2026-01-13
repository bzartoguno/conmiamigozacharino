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
      name: "Custom enchanting job",
      price: 0,
      priceText: "????",
      description: "Have something else in mind, don't spare the details let's hash it out together!",
    },
    {
      name: "Spell Scroll",
      price: 100,
      priceText: "???",
      description: "Scrolls scribed to match the level of the spell you seek. 100 Gold per level of Spell, so a LV 1 scroll is 100, a LV 2 scroll is 200, etc",
    },
    {
      name: "Inspect Magical Item",
      price: 10,
      description: "Quick appraisal in the arcane spectrum to gauge an item's potential.",
    },
    {
      name: "Remove Enchantment",
      price: 50,
      description: "With the fact being that each time can only hold one enchantment sometimes you need to remove it. Safely lift a lingering enchantment without harming the item, so long as it's not cursed.",
    },
    {
      name: "Common Enchantment",
      price: 10,
      description: `Roll a 1d20 and apply it to your item!
      1- Spontaneous Combustion (Curse): This item will explode when it break, dealing 2d10+5 fire damage.  
      2- Magnetic Attraction (Curse): Metal objects within 5 feet will slowly be pulled towards this item if they are lighter, but if they are heavier this item will be attached to it instead.  
      3- Bed time (Curse): Who ever holds this item temperarly has narcolepsy.  
      4- Gross (Curse): This item drips dirty smelly water continuously when held and it's always where your hands are holding it.  
      5- Tongue-Tying (Curse): This item when in a persons inventory makes them only speak gibberish.  
      6- Never Lost: You always know which direction it item is located reguardless of distance.  
      7- Smol: This item shrinks to the size of a mouse permanently.  
      8- BIG: This item grows to the size of a elephant permanently.  
      9- My eyes: Who ever willing holds this item temperarly become blind.  
      10- Bright like a diamond: This item can eminate a soft glow like a torch, this effect can be turn on and off as a bonus action!
      11-14- Cantrip Based Enchantment: Pick a cantrip from any class and apply it to this item this item only holds five charges and grains them after a long rest.
      15-17- 1st level Based Enchantment: Pick a 1st level spell from any class and apply it to this item this item only holds five charges and grains them after a long rest.
      18-20- 2nd level Based Enchantment: Pick a 2nd level spell from any class and apply it to this item this item only holds five charges and grains them after a long rest.`,
    },
    {
      name: "Uncommon Enchantment",
      price: 100,
      description: `Roll a 1d12 and apply it to your item!
      1- C-c-cold (Curse): This item when in a persons inventory will lower their AC by 1 for every hour they hold it (Max of 5)
      2- H-h-hot (Curse): This item when in a persons inventory for every turn you don't move to a new spot you take 1d4 fire damge, this item isn't active when the sun sets.
      3- (Curse):
      4- (Curse):
      5- 
      6- 
      7-
      8-
      9-
      10-
      11- 3rd level Based Enchantment: Pick a 3rd level spell from any class and apply it to this item this item only holds four charges and grains them after a long rest.
      12- 4th level Based Enchantment: Pick a 4th level spell from any class and apply it to this item this item only holds four charges and grains them after a long rest.`,
    },
    {
      name: "Rare Enchantment",
      price: 1000,
      description: `Roll a 1d10 and apply it to your item!
      1- (Curse)
      2- (Curse)
      3- (Curse)
      4- 
      5-
      6-
      7-
      8-
      9- 5th level Based Enchantment: Pick a 5th level spell from any class and apply it to this item this item only holds three charges and grains them and grains them after after seven days.
      10- 6th level Based Enchantment: Pick a 6th level spell from any class and apply it to this item this item only holds three charges and grains them after and grains them after after seven days.`,
    },
    {
      name: "Very Rare Enchantment",
      price: 10000,
      description: `Roll a 1d8 and apply it to your item!
      1- (Curse)
      2- (Curse)
      3- 
      4-
      5-
      6-
      7- 7th level Based Enchantment: Pick a 7th level spell from any class and apply it to this item this item only holds two charges and grains them after after fourteen days.
      8- 8th level Based Enchantment: Pick a 8th level spell from any class and apply it to this item this item only holds two charges and grains them after after fourteen days.`,
    },
    {
      name: "Legendary Enchantment",
      price: 100000,
      description: `Roll a 1d6 and apply it to your item!
      1- (Curse)
      2- 
      3-
      4-
      5-
      6- 9th level Based Enchantment: Pick a 9th level spell from any class and apply it to this item this item only holds one charges and grains them after after twenty one days.`,
    },
    {
      name: "Enchantmenter grimoire",
      price: 10,
      description: "When an enchantment is removed you can instead learn it and put it into this book! Then when you go to enchant instead of rolling to find out which enchantment, after pay the apropitace cost, you got used to one you learned using this book instead.",
    },
    {
      name: "Custom enchanting job",
      price: 0,
      priceText: "????",
      description: "Have something else in mind, don't spare the details let's hash it out together!",
    },
  ],
};
