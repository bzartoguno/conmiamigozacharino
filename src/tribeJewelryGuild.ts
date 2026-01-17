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
          "Welcome, welcome, to the Jewelry Guild, where every give you the glimmer that will make you shine!",
          "We use to be on the outs with the law, but then the nobility say what we could do we well, 'reformed.'",
          "Altho no ones says it the other guilds; Applegarth, Archives, Dungeon Crawler, and Navigation. Actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? and the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it not to much trouble we have a mud scrapper by the door just clean off your shoes please? It's really to clean these carpets.",
          "You look like a smart chap, a costmer sold this strange gem last week and I think it may be a historical treasure if you could help me poor over these books aka make DC 14 History check I'd really appreate it. If you succeed, I'll pay you 40 gp. If you fail, you take 1 point of damage, a bandaid for your paper cut and get 30 gp.",
          ],
  items: [
    {
      name: "Degrading Diamond Dust",
      price: 500,
      description: "This item comes in a 12 oz magic resistant baggy, becuase when you take an oz and blow it onto a non magical non living object, it will slowly dizolve over 12 hours. There our 12 oz in this bag.",
    },
    {
      name: "Emerald Entrancement (This item can be socked into any weapon)",
      price: 500,
      description: "When this item, or weapon if socked, hits an unwilling creature, they will need to make a 16 WIS SAV or be under the effects of 'Charmed.'",
    },
    {
      name: "Obsidian Oath (This item can be socked into any armor)",
      price: 500,
      description: "When purchused you get two of these. When you make a promise with another person who has the twin Obsidian this item the other one with resinate, and each item will embed themselves in their respective holders. If either person break their end of the promise it will shatter vilently dealing 20d20 peiring damage and the other will dizolve. However if the promise is upheld for the duration of the promise the obsidian will dizolve peacefully.",
    },
    {
      name: "Petrifying Pyrite Pebbles (This item can be socked into any weapon)",
      price: 500,
      description: "When this item, or weapon if socked, it will turn that area will petrife in half an inch radius around that spot lasting 1 minute. If an entire limb gets petrifed the rest of that creature gets petrified.",
    },
    {
      name: "Phantom Pearl Powder",
      price: 500,
      description: "This item comes in a 12 oz magic resistant baggy, becuase when you take an oz and blow it onto a non magical non living object it becomes intangable but it stays in locations and can't be moved by nonmagial means, this effect lasts 12 hours. There our 12 oz in this bag. If the object is inside of something when the 12 hours are up it will immidently slide out to a space that will fit it's dimentions dealing no damage.",
    },
    {
      name: "Reaper Ruby (This item can be socked into any weapon)",
      price: 500,
      description: "When this item, or weapon if socked, hits an creature other then a construct, you heal 1/2 of the damge dealt.",
    },
    {
      name: "Soul Swapping Sapphire",
      price: 500,
      description: "While holding this item if it touches another creature other then a construct. Both holder and target creature will have to make a INT SAV of 26 on a fail both souls will swap places, class, ability, items, etc will not pass over unless they are tied to the souls. Souls may not be swapped with bodies that soul swapped with them. This item will dizolve after 12 uses.",
    },
    {
      name: "Empty Memory Stone",
      price: 1000,
      description: "A specially crafted gemstone that can hold memories, placing this to your head will allow to transfer memories into or out of this item. However transfered into this item that person will lose the memory of forever got remaining in that stone. Proficiency and expertise, knowlegde of how to cast spells and any other learned technquie may also be transfered into this item but in return you will lose those as well.",
    },
    {
      name: "Chipped Gemstone",
      price: 250,
      description: "A non-magical gem, about the size of a finger nail. You can buy or sell it for this price.",
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
      name: "Radient Gemstone",
      price: 1250,
      description: "A non-magical gem, about the size of a watermellon. You can buy or sell it for this price.",
    },
  ],
};
