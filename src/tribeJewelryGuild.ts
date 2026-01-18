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
          "Welcome, welcome, to the Jewelry Guild, where we give you the glimmer that will make you shine!",
          "We used to be on the outs with the law, but then the nobility said what we could do well, 'reformed.'",
          "Although no one says it, the other guilds—Applegarth, Archives, Dungeon Crawler, and Navigation—actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? And the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it's not too much trouble, we have a mud scraper by the door—just clean off your shoes, please. It's really to keep these carpets clean.",
          "You look like a smart chap; a customer sold this strange gem last week and I think it may be a historical treasure. If you could help me pore over these books—make a DC 14 History check—I’d really appreciate it. If you succeed, I'll pay you 40 gp. If you fail, you take 1 point of damage, get a bandage for your paper cut, and receive 30 gp.",
          ],
  items: [
    {
      name: "Degrading Diamond Dust",
      price: 500,
      description: "This item comes in a 12 oz magic-resistant baggie, because when you take an oz and blow it onto a nonmagical, nonliving object, it will slowly dissolve over 12 hours. There are 12 oz in this bag.",
    },
    {
      name: "Emerald Entrancement (This item can be socketed into any weapon)",
      price: 500,
      description: "When this item, or weapon if socketed, hits an unwilling creature, they will need to make a 16 WIS SAV or be under the effects of 'Charmed.'",
    },
    {
      name: "Obsidian Oath (This item can be socketed into any armor)",
      price: 500,
      description: "When purchased you get two of these. When you make a promise with another person who has the twin Obsidian, the other one will resonate, and each item will embed itself in its respective holder. If either person breaks their end of the promise it will shatter violently, dealing 20d20 piercing damage, and the other will dissolve. However, if the promise is upheld for the duration, the obsidian will dissolve peacefully.",
    },
    {
      name: "Petrifying Pyrite Pebbles (This item can be socketed into any weapon)",
      price: 500,
      description: "When this item, or weapon if socketed, hits, it will petrify a half-inch radius around that spot, lasting 1 minute. If an entire limb gets petrified, the rest of that creature gets petrified.",
    },
    {
      name: "Phantom Pearl Powder",
      price: 500,
      description: "This item comes in a 12 oz magic-resistant baggie, because when you take an oz and blow it onto a nonmagical, nonliving object it becomes intangible but it stays in location and can't be moved by nonmagical means; this effect lasts 12 hours. There are 12 oz in this bag. If the object is inside of something when the 12 hours are up it will immediately slide out to a space that will fit its dimensions, dealing no damage.",
    },
    {
      name: "Reaper Ruby (This item can be socketed into any weapon)",
      price: 500,
      description: "When this item, or weapon if socketed, hits a creature other than a construct, you heal half of the damage dealt.",
    },
    {
      name: "Soul Swapping Sapphire",
      price: 500,
      description: "While holding this item, if it touches another creature other than a construct, both holder and target creature will have to make a INT SAV of 26. On a fail, both souls will swap places; class, ability, items, etc. will not pass over unless they are tied to the souls. Souls may not be swapped with bodies that have been soul-swapped with them. This item will dissolve after 12 uses.",
    },
    {
      name: "Empty Memory Stone",
      price: 1000,
      description: "A specially crafted gemstone that can hold memories; placing this to your head will allow you to transfer memories into or out of this item. However, once transferred into this item, that person will lose the memory forever, remaining in that stone. Proficiency and expertise, knowledge of how to cast spells, and any other learned technique may also be transferred into this item, but in return you will lose those as well.",
    },
    {
      name: "Chipped Gemstone",
      price: 250,
      description: "A non-magical gem, about the size of a fingernail. You can buy or sell it for this price.",
    },
    {
      name: "Flawed Gemstone",
      price: 500,
      description: "A non-magical gem, about the size of a finger. You can buy or sell it for this price.",
    },
    {
      name: "Flawless Gemstone",
      price: 1000,
      description: "A non-magical gem, about the size of a baseball. You can buy or sell it for this price.",
    },
    {
      name: "Radiant Gemstone",
      price: 1250,
      description: "A non-magical gem, about the size of a watermelon. You can buy or sell it for this price.",
    },
  ],
};
