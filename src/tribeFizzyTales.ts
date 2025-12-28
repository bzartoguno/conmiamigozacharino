import { Item, Tribe } from "./types";

export interface FizzyTalesItem extends Item {
  priceText?: string;
}

export const tribeFizzyTales: Tribe & { items: FizzyTalesItem[] } = {
  name: "Fizzy Tales",
  owner: "Candy Cane Princess",
  percentAngry: 0,
  priceVariability: 0,
  insults: ["Sweet secrets fizz to the surface—pick your treat and enjoy the story."],
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
