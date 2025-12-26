import { Item, Tribe } from "./types";

export interface MichaelsMountItem extends Item {
  priceText?: string;
}

export const tribeMichaelsMount: Tribe & { items: MichaelsMountItem[] } = {
  name: "Michael's Mount",
  owner: "Michael",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
    "Saddle up for the mount that matches your momentum.",
  ],
  items: [
    {
      name: "War horse",
      price: 500,
      description: "Speed Mount • 60 Speed",
    },
    {
      name: "Woolly Mammoth",
      price: 700,
      description: "Defensive Mount • 45 Speed",
    },
    {
      name: "Velociraptor",
      price: 600,
      description: "Attack Mount • 35 Speed",
    },
    {
      name: "Plesiosaurus",
      price: 300,
      description: "Defensive Mount • 40 Swimming Speed",
    },
    {
      name: "Dolphin Delighter",
      price: 350,
      description: "Attack Mount • 50 Swimming Speed",
    },
    {
      name: "Pegasus",
      price: 1000,
      description: "Speed Mount • 90 Flying Speed",
    },
    {
      name: "Hippogriff",
      price: 800,
      description: "Defensive Mount • 60 Flying Speed",
    },
    {
      name: "Baby Purple Worm",
      price: 1700,
      description: "Attack Mount • 20 Burrow Speed",
    },
  ],
};
