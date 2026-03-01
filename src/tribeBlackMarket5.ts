import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket5: Tribe = {
  name: "One of the blue star shops",
  percentAngry: 10,
  priceVariability: 30,
  insults: blackMarketInsults,
  items: [
    {
      name: "Chain of Domination",
      price: 80_000,
      description: "A powerful chain that binds any beast or elemental to the user’s will for 24 hours, overriding all resistance."
    },
    {
      name: "10 Shadowflame Grenades",
      price: 90_000,
      description: "Grenades that create magical darkness and deal 8d6 fire damage within a 30-foot radius. One time use per item."
    },
    {
      name: "Soul Resonance Harp",
      price: 95_000,
      description: "An ethereal harp that evokes overwhelming emotions in creatures within 100 feet. Reduces the player’s maximum hit points by 1d6 per use."
    },
    {
      name: "Ambrosia Turned Sugar",
      price: 100_000,
      description: "Grants near-invulnerability, godlike strength, and spellcasting for 1 minute. Causes extreme exhaustion and prevents magic recovery for 24 hours."
    },
    {
      name: "Bad Spice",
      price: 75_000,
      description: "Adding this cursed spice to a meal causes anyone who eats it to roll low on a custom wild magic table."
    },
    {
      name: "Phantom Engine",
      price: 85_000,
      description: "Modifies any steampunk vehicle to become invisible and intangible for 10 minutes. Recharges after 24 hours."
    },
    {
      name: "Tesla Storm Gauntlets",
      price: 90_000,
      description: "Gauntlets that deal 8d8 lightning damage in a 30-foot line. The user risks electrocution each time (DC 18 Constitution save to avoid taking damage)."
    },
    {
      name: "The Saboteur's Toolkit",
      price: 95_000,
      description: "A highly illegal toolkit for sabotaging mechanical devices, causing them to malfunction or explode. Usable once per day."
    }
  ],
};
