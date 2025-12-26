import { Item, Tribe } from "./types";

export interface FairiesOfFloraItem extends Item {
  priceText?: string;
}

export const tribeFairiesOfFlora: Tribe & { items: FairiesOfFloraItem[] } = {
  name: "Fairies of Flora",
  owner: "Poppy",
  percentAngry: 0,
  priceVariability: 0,
  insults: ["Whispers among the petals guide the bold buyer."],
  items: [
    {
      name: "Buy a Shambling Mound / Chi Chi Chia Automaton / Walking Mushroom",
      price: 0,
      priceText: "???",
      description: "Seedlings ???, Saplings ???, or Fully Grown ???",
    },
    {
      name: "I need a plumber who can work around the clock.",
      price: 0,
      priceText: "???",
      description: "Request any plant-based power-up from Nintendo",
    },
    {
      name: "I want a new house for my other spouse.",
      price: 0,
      priceText: "???",
      description:
        "I've requested any fruit or vegetable seeds from a cloud giant that will grow big enough to carve a house out of.",
    },
    {
      name: "Hire a any color Hydrangeas / Treant / Wood Elf",
      price: 0,
      priceText: "???",
      description: "Seedlings ???, Saplings ???, or Fully Grown ???",
    },
    {
      name: "I know a guy who needs to take a break and smell a flower",
      price: 0,
      priceText: "???",
      description:
        "Soul Seizer chrysanthemum- This deceptive flower will bloom if an organic creature gets within 5 feet of it and tries to drain that creature's soul, killing it immediately.",
    },
  ],
};
