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
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "I am so terribly sorry—it looks like I may have a bit of a problem opening up this blood bag. If I could get some help opening this up, that would be wonderful. Please make a DC 14 Medicine check to pop this open. If you succeed, I’ll give you a Supreme Healing Potion (heals 10d4+20). If you fail, don't worry about it; I'll focus on it when you leave and I'll give you a Healing Potion (heals 2d4+2) for your trouble.",

          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          
          ],
  items: [
    {
      name: "Blood for Coffin-Safe",
      price: 0,
      priceText: `5% of current max HP (Rounded up)`,
      description: "We make room in our private vualt for any object that can fit 3ft cude. Only you and anyone you tell use can withdrawl anything from within the vualt at any N.M.E. location. Unless N.M.E. goes into hiding or destroyed.",
    },
    {
      name: "Blood for Loyal Spectral Servant",
      price: 0,
      priceText: `10% of current max HP (Rounded up)`,
      description: "We teach you a forbidden blood-rite. You learn the Spectral Servant cantrip, and you may pour spell slots into it to spawn more servants. They can’t attack, can’t use magic items, and exist to carry, fetch, open, pour, and deliver packages. Base Cast (Cantrip): 1 Spectral Servant (Concentration) Upcast (Spell Slot): +1 additional Servant per spell slot level used Example: 1st = 2 Servants, 2nd = 3 Servants, 3rd = 4 Servants, etc. Command: Bonus action to move (30 ft fly/hover) + interact with an object (150 lb) Help (Combat): A Servant may take the Help action, then immediately dissipates Limit: Only 1 Servant created by this spell can grant Help per round.",
    },
    {
      name: "Blood for Power",
      price: 0,
      priceText: `
      New raw score 20 → 10% of current max HP (Rounded up)
      New raw score 21–22 → 15% of current max HP (Rounded up)
      New raw score 23–24 → 20% of current max HP (Rounded up)
      New raw score 25–26 → 25% of current max HP (Rounded up)
      New raw score 27–28 → 30% of current max HP (Rounded up)
      New raw score 29–30 → 35% of current max HP (Rounded up)`,
      description: "We drain your blood in exchange; we boost a single stat beyond normal means.",
    },
    {
      name: "Blood for Blackmail",
      price: 0,
      priceText: `
      Minor Dirt: 10% of current max HP (discounts, small favors)
      Major Dirt: 15% of current max HP (big discounts, access, cover-ups)
      Ruinous Dirt: 20% of current max HP (force cooperation in serious situation)
      Life-Ruiner: 25% of current max HP (NPC-shaping leverage)`,
      description: "After living for so long we have acquired a little bit of dirt on everyone; care to take a look?",
    },
    {
      name: "Blood for An Endless Elixir",
      price: 0,
      priceText: "25% of current max HP (Rounded up)",
      description: "Pour any potion into this bottle to imprint it (potion is consumed). Bottle holds 1 imprint at a time. The bottle refills only when empty and only after 10 minutes of uninterrupted calm (no refill during initiative). This item takes 10 minutes to refill completely. To clear the current imprinted potion take a point of damage, drop some blood in there, and wait 10 minutes; then you may imprint a new potion into this item.",
    },
    {
      name: "Scroll of True Resurrection",
      price: 150000,
      description: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
    },
    {
      name: "Become a Vampire",
      price: 0,
      priceText: `10% of current max HP (Rounded up)`,
      description: `
      You physically stay the same race just that change it to undead, but on the bright side you had to make the active choice to become a VAMPIRE! Which, although a bit questionable, is by far more rewarding in the long run! If you can survive that long.
      HP: Lose 20 permanent hit points; if this brings you below 10, it is just 10 now.
      AC: NA, nothing changes here
      Speed: NA, nothing changes here
      Stats: add 1 point to dexterity, intelligence, & charisma (max 20)
      New Race abilities:
      Weakness: I just had to get this out of the way first. If you ever get out in the sun, get hit with holy water, get impaled with a stake, eat garlic, enter a home uninvited, or cross running water, you immediately die no death saves.
      Bloodthirst: As a vampire you will need blood to survive more specifically 9 gallon of blood from a intelligent creature every 90 days. Yeah its not that much. However, this ability and others will evolve or pop up if you consume more than 90 gallons than you need in that 90 day period. So get chuggin!`,
    },
  ],
};
