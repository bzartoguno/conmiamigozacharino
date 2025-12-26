import { Item, Tribe } from "./types";

export interface ValhallaMartItem extends Item {
  priceText?: string;
}

export const tribeValhallaMart: Tribe & { items: ValhallaMartItem[] } = {
  name: "Valhalla Mart",
  owner: "Victor",
  percentAngry: 0,
  priceVariability: 8,
  insults: ["Heroes never fall empty-handed—equip yourself for the next saga."],
  items: [
    {
      name: "Blast from the Past",
      price: 10000,
      description: "Take an item from a previous character and add it to your current one.",
    },
    {
      name: "Gjallarhorn Replica",
      price: 10000,
      description:
        "A small horn that, when blown, can intimidate enemies or rally NPCs, signaling a call to bravery or retreat.",
    },
    {
      name: "Langskip Whistle",
      price: 10000,
      description:
        "A magical whistle that summons a spectral langskip that moves faster with each character you've lost.",
    },
    {
      name: "Soul-bound Compass",
      price: 10000,
      description: "This compass points towards the location of significant or unfinished quests of fallen heroes.",
    },
    {
      name: "Harald Pendant",
      price: 10000,
      description:
        "Allows the wearer to briefly become a spectral version of a fallen hero for 10 minutes once per long rest.",
    },
  ],
};
