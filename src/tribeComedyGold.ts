import { Item, Tribe } from "./types";

interface ComedyGoldItem extends Item {
  priceLabel?: string;
}

interface ComedyGoldTribe extends Omit<Tribe, "items"> {
  items: ComedyGoldItem[];
}

export const tribeComedyGold: ComedyGoldTribe = {
  name: "Comedy Gold",
  owner: "Lady Laugh a Lot",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Dancing with Dragons",
      price: 0,
      description: "Advantage on Charisma or performance skills until your next long rest.",
      priceLabel: "Price may vary",
    },
    {
      name: "Goblins in the Pantry",
      price: 0,
      description: "Receive a \"Goblin Repellent\" token to avoid goblin mischief.",
      priceLabel: "Price may vary",
    },
    {
      name: "The Fool's Quest",
      price: 0,
      description: "Boost Relationship with pets or familiars.",
      priceLabel: "Price may vary",
    },
    {
      name: "Bard's Blunder",
      price: 0,
      description: "Get a \"Bardic Inspiration\" die (1d6) for use on any roll until your next long rest.",
      priceLabel: "Price may vary",
    },
    {
      name: "Wizard’s Wardrobe Woes",
      price: 0,
      description: "Boost Friendship with NPC followers.",
      priceLabel: "Price may vary",
    },
  ],
};
