import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket4: Tribe = {
  name: "One of the green star shops",
  percentAngry: 15,
  priceVariability: 30,
  insults: blackMarketInsults,  
  items: [
    {
      name: "Shadow Suite",
      price: 65_000,
      description: "A mystery collection of amenities whose details are revealed upon purchase."
    },
    {
      name: "Distilled Drop of Discord",
      price: 70_000,
      description: "A volatile magical agent that can be applied during item creation. The item gains an unpredictable but powerful enchantment — or a flaw."
    },
    {
      name: "Mint Mualer",
      price: 55_000,
      description: "A single root cutting that looks like a mint sprig. When planted in soil tainted by blood, hate, and betrayal, it grows into a powerful carnivorous vine with unknown potential."
    },
    {
      name: "Mythril Golem Core",
      price: 75_000,
      description: "Can be added to any golem, regardless of its material. Grants limited intelligence and allows it to obey verbal commands from up to 500 miles away. Lasts 10 years."
    },
    {
      name: "Heart of the Fallen Star",
      price: 60_000,
      description: "A gemstone that grants control over gravity in a 500-foot radius for 10 minutes. Usable once per day."
    },
    {
      name: "Booklet of Monstrous Absorption",
      price: 50_000,
      description: "This booklet consumes monster corpses and reveals the species' weaknesses, current surroundings, and any nearby dens of the same type."
    },
    {
      name: "Shop Stock",
      price: 55_000,
      description: "Own a little bit of stock in a shop of your choice. Financial and magical benefits vary depending on the shop. More information provided upon purchase."
    },
    {
      name: "Secret Files",
      price: 60_000,
      description: "Pick any shop — this file contains all their blackmail material. Whether you use it for leverage or gossip is up to you."
    }
  ],
};
