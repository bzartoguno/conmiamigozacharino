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
          "Oh my you are quite a way from home now, please take a seat, I'll put a cup of tea then we can get down to buisness shall we? Cream? Honey? Mint? Roobies? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect, before all this I was actaully an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However here at N.M.E. we perfer to take from the source then a thrid party.",
          "Hello please come and take a seat, this is N.M.E. where we make sure that your life is worth giving. Now tell me how can we help you?",
          "I am so terrible sorry I looks like it may have bit of problem opening up this blood bag, if I could get some help opening this up that would be wonderful. Please make a DC 14 Medicine check to pop this open. If you succeed, I’ll give you a Supreme Healing Potion (Heals 10d4+20). If you fail, worry about I'll focus on it when you leave and I'll give you a Healing potion (Heals 2d4+2) for your trouble.",
          ],
  items: [
    {
      name: "Blood for Power",
      price: 0,
      priceText: `New raw score 20 → 10% of current max HP (Rounded up)
                  New raw score 21–22 → 15% of current max HP (Rounded up)
                  New raw score 23–24 → 20% of current max HP (Rounded up)
                  New raw score 25–26 → 25% of current max HP (Rounded up)
                  New raw score 27–28 → 30% of current max HP (Rounded up)
                  New raw score 29–30 → 35% of current max HP (Rounded up)`,
      description: "We drain your blood in exchange we boost a single stat beyond normal means.",
    },
    {
      name: "Blood for Blackmail",
      price: 0,
      priceText: `Minor Dirt: 10% of current max HP (discounts, small favors)
                  Major Dirt: 15% of current max HP (big discounts, access, cover-ups)
                  Ruinous Dirt: 20% of current max HP (force cooperation in serious scenes)
                  Life-Ruiner: 25% of current max HP (NPC-shaping leverage)`,
      description: "After living for so long we have aquired a little bit of dirt on every, care to take a look?",
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
