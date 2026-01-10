import { Item, Tribe } from "./types";

export interface FizzyTalesItem extends Item {
  priceText?: string;
}

export const tribeFizzyTales: Tribe & { items: FizzyTalesItem[] } = {
  name: "Fizzy Tales",
  owner: "Candy Cane Princess",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "I’ve got a little stamp challenge folks do for fun. Take a minute and pull one of your companions into a quick in-character moment, just a short question, a check-in, a joke, or a pep talk. Nothing long, just enough to feel real.  |  Stamp Quest (Scene Partner): Pull another PC into a short 30–60 second roleplay moment (a question, a check-in, a joke, a pep talk). | Reward: 4 Stamps",
          "Hey, if you’ve stepped on someone’s toes even a little today, give them a quick in-character apology for something minor. No drama, just so there's no blood in the water between, ya.  |  Stamp Quest (Apology Tour): Apologize (in-character) to a party member for something minor you did this session. | Reward: 3 Stamps",
          "Alright, this one’s a quiet game some regulars like.  |  Stamp Quest (One liners): Subtly quote movies, shows, or books loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of quotes you successfully make.",
          "One last stamp challenge, easy peasy lemon squeeze.  |  Stamp Quest (Tableau): When the party enters a new place, describe one small sensory detail (smell, sound, texture) in-character. | Reward: 2 Stamps",
          ],
  items: [
    {
      name: "Moon Rocks",
      price: 5,
      description: "The eater becomes nearly weightless, floating gently for 10 minutes.",
    },
    {
      name: "Bubble Barrier",
      price: 5,
      description:
        "A stick of bubble gum that, once blown, creates a semi-durable barrier with 2d12+5 HP and an AC of 13, lasting up to 10 minutes.",
    },
    {
      name: "Mirror Mints",
      price: 10,
      description: "Allows the user to pass through mirrors into a mirror realm for up to 1 hour.",
    },
    {
      name: "Proxy Dust",
      price: 10,
      description: "Enables control over a small doll as if inhabiting it, lasting for 1 hour.",
    },
    {
      name: "Gerald-d dry",
      price: 200,
      description: "A carbonated drink that heals half of the drinker's HP.",
    },
    {
      name: "Winter Wafers",
      price: 200,
      description: "Increase a stat by 1; stats cannot exceed 18.",
    },
  ],
};
