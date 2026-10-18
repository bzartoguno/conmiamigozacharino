import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket2: Tribe = {
  name: "One of the red star shops",
  percentAngry: 25,
  priceVariability: 30,
  insults: blackMarketInsults,
  items: [
    {
      name: "Pie of Eternal Slumber",
      price: 15000,
      description: "After consuming this pie the user is put into an unbreakable sleep for up to 10,000 years. The user can't die while sleeping. However, true love's kiss can break this effect."
    },
    {
      name: "Worn Training Booklet of 'House of Blades'",
      price: 12500,
      description: "Grants the wielder one of three effects after reading: guaranteed max damage with any bladed weapon, triple damage dice when attacking with any bladed weapon, or knowledge of how the House of Blades recruits people."
    },
    {
      name: "Game Guide Compass",
      price: 22000,
      description: "Simply mention the name of the quest you need assistance with, and the compass will guide you toward the closest important items or tasks needed to fulfill the minimum requirements for that quest."
    },
    {
      name: "Game Guide Compass",
      price: 18500,
      description: "Simply mention the name of the quest you need assistance with, and the compass will guide you toward the closest important items or tasks needed to fulfill the minimum requirements for that quest."
    },
    {
      name: "Elixir of Omnipotence",
      price: 25000,
      description: "Boosts all stats to +6 and all skills become +7. This effect lasts 8 hours. Causes extreme exhaustion after use."
    },
    {
      name: "Cornucopia of Acre Harvest",
      price: 23500,
      description: "Once per day gain an acre of edible plant-based food, 326,000 gallons of a safe drinkable substance, or 2,718,840 pounds of meat. Anything summoned by the Cornucopia will disappear in 24 hours unless consumed."
    },
    {
      name: "Vault of the Gamblin",
      price: 24000,
      description: "Place X gold coins in the vault, close it, and then open it once a day for a 50% chance to either double or lose the amount inside."
    },
    {
      name: "Just a Boring Wagon",
      price: 15500,
      description: "A wagon that prevents any road events from happening. Crew Size: 1 + Mount. Maximum Passengers: 6–10."
    }
  ],
};
