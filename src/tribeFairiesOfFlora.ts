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
          "HEY! I'm flyin here!",
          "Sometime we the Don wants us to protect a kid on the Toothfairies hit list, we stake out under their bed and wait for that fairy tale punk! The kid thing that there's a monster under there, when really it's mob-sters.",
          "Bada bing! bada boom!",
          "Welcome to Fairies of Flora, we got flowers. Nothin else. What are you a cop?",
          "I miss Phil & Bill sometimes but I'm happy they get to go out there and try new things.",
          "Hey between you and me if there's a couple of kids who keep coming in here asking to join us, I really don't want to beucase well there kids but your willing to be a much cooler role model for them get them off of this crooked path I'll make it worth your time. Just make a DC 14 Persuasion check to turn them around. If your succeed, I’ll pay you 15 gp. If you fail, you get nothin.",
          ],
  items: [
    {
      name: "Flowers",
      price: 0,
      PriceText: "Free",
      description: "Any kind of non magical flower.",
    },
    {
      name: "Mush youm be askin so many questions?",
      price: 50,
      description: "Hire a Walking Mushroom, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I think I found someone to be my vine-ntine, and I need help asking them out.",
      price: 100,
      description: "Hire a Shambling Mound, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I need a gift that grows.",
      price: 150,
      description: "Hire a Chi Chi Chia Automaton, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "Woodn't you like to know.",
      price: 200,
      description: "Hire a Treant, you pay by the hour. If you get into a fight you pay double.",
    },
    {
      name: "I want a new house for my other spouse.",
      price: 250,
      description: "You gain a seed of whatever plant you want, this see can be planted in any type of soil. when it does it will grow rapidly to a giant version of that plant acting like the spell 'tiny hut' but flavored to be a plant. But it lasts 12 hours, can be destroyed and inside is an identical seed to the seed you planted that can be harvested and reused again when current plant house is gone.",
    },
    {
      name: "I need a plumber who can work around the clock.",
      price: 500,
      description: "Request any plant-based power-up from Nintendo.",
    },{
      name: "I've been meaning to ask",
      price: 0,
      PriceText: "Owe the Faries of Flora either a little, regular, or big favor.",
      description: "Make a request to the mob, but it's up the the Fairy Godfather if the mob will follow through.",
    },
    {
      name: "I know a guy who needs to take a break and smell a flower",
      price: 0,
      priceText: "Owe the Faries of Flora a big favor.",
      description: "Soul Seizer chrysanthemum — this deceptive flower blooms if an organic creature gets within 5 feet of it and tries to drain that creature's soul, killing it immediately.",
    },    
  ],
};
