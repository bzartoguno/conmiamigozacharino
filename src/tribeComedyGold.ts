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
      description: "Gain advantage on Charisma or Performance checks until your next long rest.",
      priceLabel: "Showing are in Wee Hours 2:00 AM - 6:00 AM",
    },
    {
      name: "Goblins in the Pantry",
      price: 0,
      description: "Receive a \"Goblin Repellent\" token to avoid goblin mischief.",
      priceLabel: "Showing are in the Morning 6:00 AM - 11:00 AM",
    },
    {
      name: "The Fool's Quest",
      price: 0,
      description: "Boost your relationship with pets or familiars.",
      priceLabel: "Showing are in Midday 11:00 AM - 2:00 PM",
    },
    {
      name: "Bard's Blunder",
      price: 0,
      description: "Get a \"Bardic Inspiration\" die (1d6) for use on any roll until your next long rest.",
      priceLabel: "Showing are in Afternoon 2:00 PM - 6:00 PM",
    },
    {
      name: "Wizard’s Wardrobe Woes",
      price: 0,
      description: "Boost friendship with NPC followers.",
      priceLabel: "Showing are in the Evening 6:00 PM - 10:00 PM",
    },
    {
      name: "Improve Classes",
      price: 0,
      description: "You can gain proficiency with any CHR based skill for every two classes you attend. Unforcantely, they don't teach you expertise.",
      priceLabel: "Only available in the Night 10:00 PM - 2:00 AM",
    },
    {
      name: "Witch's Wardrobe",
      price: 10,
      description: "Allow the user to swap any set of clothing or armor they are wearing with another set they own as a bonus action. This Ring can hold up to 5 outfits/armors at a time.",
    },
    {
      name: "Year round Tickets",
      price: 100,
      description: "Doubles the effects of any show you attend.",
    },
    {
      name: "Old Props and Costumes",
      price: 1,
      description: "Sometimes costumes and props tend to ware out over time so we sell them at a discount because we know what it's like to be out on the streets with nothing to keep you warm.",
    },
  ],
};
