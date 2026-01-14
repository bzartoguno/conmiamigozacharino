import { Item, Tribe } from "./types";

export interface YeOldHomeDepotItem extends Item {
  priceText?: string;
}

export const tribeYeOldHomeDepot: Tribe & { items: YeOldHomeDepotItem[] } = {
  name: "Ye Old Home Depot",
  owner: "Henry",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "I’ve got a little stamp challenge folks do for fun. Take a minute and pull one of your companions into a quick in-character moment, just a short question, a check-in, a joke, or a pep talk. Nothing long, just enough to feel real.  |  Stamp Quest (Scene Partner): Pull another PC into a short 30–60 second roleplay moment (a question, a check-in, a joke, a pep talk). | Reward: 4 Stamps",
          "Hey, if you’ve stepped on someone’s toes even a little today, give them a quick in-character apology for something minor. No drama, just so there's no blood in the water between, ya.  |  Stamp Quest (Apology Tour): Apologize (in-character) to a party member for something minor you did this session. | Reward: 3 Stamps",
          "Alright, this one’s a quiet game some regulars like.  |  Stamp Quest (One liners): Subtly quote movies, shows, or books loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of quotes you successfully make.",
          "One last stamp challenge, easy peasy lemon squeeze.  |  Stamp Quest (Tableau): When the party enters a new place, describe one small sensory detail (smell, sound, texture) in-character. | Reward: 2 Stamps",
          "",
          "",
          "",
          "",
          "",
          "give me a DC 14 Persuasion check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Plank of Wood (it’s a freshly cut 2x4)",
      price: 1,
      description: "Straight, smooth lumber ready for framing or quick fixes.",
    },
    {
      name: "Box of Iron Nails (100 count)",
      price: 5,
      description: "Reliable fasteners for framing, patching, and everyday builds.",
    },
    {
      name: "Sturdy Claw Hammer",
      price: 12,
      description: "Balanced grip with a claw that yanks mistakes back out.",
    },
    {
      name: "Coiled Hemp Rope (50 ft)",
      price: 8,
      description: "Tough, weather-ready rope for hauling, tying, and towing.",
    },
    {
      name: "Weatherproof Paint (gallon)",
      price: 18,
      description: "Neutral base coat that shrugs off rain and road dust.",
    },
    {
      name: "Bag of Quick-Set Concrete",
      price: 22,
      description: "Just add water for posts, steps, or a speedy patch job.",
    },
    {
      name: "Pair of Reinforced Work Gloves",
      price: 7,
      description: "Thick palms and knuckle guards to keep splinters away.",
    },
    {
      name: "Door Hinges & Screws Kit",
      price: 9,
      description: "Matching hinges, screws, and shims to square up any entryway.",
    },
    {
      name: "Custom Lumber Cutting",
      price: 0,
      priceText: "Price may vary",
      description: "Cut sheets and boards to fit without wasting a single inch.",
    },
    {
      name: "Wheelbarrow Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Haul gravel, soil, or stone without buying the whole cart.",
    },
  ],
};
