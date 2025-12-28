import { Tribe } from "./types";

export const tribeOPapiesOracleReadings: Tribe = {
  name: "O-Papies Oracle Readings",
  owner: "Papy",
  percentAngry: 0,
  priceVariability: 0,
  insults: [""],
  items: [
    {
      name: "Near Future Reading",
      price: 100,
      description: "Get a vague hint about what is going to happen this session.",
    },
    {
      name: "Compatible Reading",
      price: 150,
      description: "Receive a compatibility reading between two subjects.",
    },
    {
      name: "Far Future Reading",
      price: 200,
      description: "Get a vague hint about what is going to happen in the next couple of sessions.",
    },
    {
      name: "Near Future Blessing",
      price: 300,
      description: "Gain a small boon tied to your near future.",
    },
    {
      name: "Far Future Blessing",
      price: 400,
      description:
        "Get a vague hint at three possible endings to the current campaign—the worst, the best, and the current trajectory.",
    },
  ],
};
