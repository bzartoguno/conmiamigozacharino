import { Tribe } from "./types";

export const tribeBlackMarket3: Tribe = {
  name: "Amber Alley",
  percentAngry: 1,
  priceVariability: 30,
  insults: [
    "The Amber Alley is angry at you and doesn't want to trade with you!",
  ],
  items: [
    {
      name: "Iconic Dragonic's Dragonbone Dagger",
      price: 45_000,
      description: "A dagger that bypasses all magical protections and inflicts permanent, unhealable scars upon its victims.",
    },
    {
      name: "Make a Monster's Brand of the Abyss",
      price: 40_000,
      description: "A sinister brand that grants Abyssal Strike, adding 1d8 necrotic damage to melee attacks. Each critical hit earns a corruption mark.",
    },
    {
      name: "Michael's Mount's Nightmare Bridle",
      price: 35_000,
      description: "A cursed bridle that transforms any mount into a shadowy version capable of ethereal travel and phasing through walls.",
    },
    {
      name: "Paws, Claws, & Maw's Cage of the Captured Beast",
      price: 30_000,
      description: "An enchanted cage designed to capture and pacify any non-sentient creature, ensuring no chance of escape.",
    },
    {
      name: "Valhalla Mart's Horn of the Eternal Raid",
      price: 50_000,
      description: "A legendary horn that summons a spectral army of Viking raiders for 1 hour. Usable once per month.",
    },                
  ]
}
