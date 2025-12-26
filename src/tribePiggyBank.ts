import { Item, Tribe } from "./types";

export interface PiggyBankItem extends Item {
  priceLabel?: string;
}

interface PiggyBankTribe extends Omit<Tribe, "items"> {
  items: PiggyBankItem[];
}

export const tribePiggyBank: PiggyBankTribe = {
  name: "The Piggy Bank, no hammers inside.",
  owner: "???",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Set up an account",
      price: 0,
      priceLabel: "Free",
    },
    {
      name: "Shop Quest",
      price: 0,
      priceLabel: "Earn Stamps",
    },
    {
      name: "Local Quests",
      price: 50,
    },
    {
      name: "Guild Quest",
      price: 100,
    },
    {
      name: "Town Quest",
      price: 150,
    },
  ],
};
