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
      description: "Get a vague hint as to what is going to happend this session",
    },
    {
      name: "Compatible Reading",
      price: 150,
      description: "",
    },
    {
      name: "Far Future Reading",
      price: 200,
      description: "Get a vague hint as to what is going to happen in the next could of sessions",
    },
    {
      name: "Near Future Blessing",
      price: 300,
      description: "",
    },
    {
      name: "Far Future Blessing",
      price: 400,
      description:
        "Get a vague hint as three of the possible endings to the current campaign the worst, the best and the current",
    },
  ],
};
