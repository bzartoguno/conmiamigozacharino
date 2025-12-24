import { Tribe } from "./types";

export const tribeBookBombs: Tribe = {
  name: "Book Bombs",
  owner: "Bill",
  percentAngry: 0,
  priceVariability: 5,
  insults: ["Oh sorry were sold out of that"],
  items: [
    {
      name: "Traps and Treasures: Explosive Edition",
      price: 20,
      description:
        "A guide on incorporating explosive traps into dungeons, homes, and safeguarding treasures.",
    },
    {
      name: "Art of Fireworks",
      price: 20,
      description:
        "A book on the creation and artistry behind magical and non magical fireworks.",
    },
    {
      name: "Alchemy of Explosives",
      price: 30,
      description: "Gain proficiency with Alchemy & chemical-based explosives.",
    },
    {
      name: "Explosive Runes for Dummies",
      price: 30,
      description:
        "An introductory guide to magical runes that explode when read or triggered.",
    },
    {
      name: "Cool people don't look at EXPLOSIONS",
      price: 40,
      description:
        "Gain proficiency with all vehicles, but when you leave the vehicle it combusts.",
    },
  ],
};
