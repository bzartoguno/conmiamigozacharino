import { Tribe } from "./types";

export const tribeBlackMarket5: Tribe = {
  name: "Azure Abyss",
  percentAngry: 1,
  priceVariability: 30,
  insults: [
    "The Azure Abyss is angry at you and doesn't want to trade with you!",
  ],
  items: [
    {
      name: "Beastbinders Tribe's Chain of Domination",
      price: 80_000,
      description: "A powerful chain that binds any beast or elemental to the user’s will for 24 hours, overriding all resistance.",
    },
    {
      name: "Blast Wagon Caboose's 10 Shadowflame Grenades",
      price: 90_000,
      description: "Grenades that create magical darkness and deal 8d6 fire damage within a 30-foot radius. Usable once.",
    },
    {
      name: "Council of Conductor's Soul Resonance Harp",
      price: 95_000,
      description: "An ethereal harp that evokes overwhelming emotions in creatures within 100 feet. Reduces the player’s maximum hit points by 1d6 per use.",
    },
    {
      name: "Fizzy Tales's Ambrosial Candy of the Gods",
      price: 100_000,
      description: "A divine candy that grants near-invulnerability, godlike strength, and spellcasting for 1 minute. Causes cravings and prevents magic recovery for 24 hours.",
    },
    {
      name: "Grubcar Clan's Bad Spice",
      price: 75_000,
      description: "A cursed spice that, when consumed, causes wild magic effects and forces low rolls on a custom wild magic table.",
    },
    {
      name: "LocoLux Motor's Phantom Engine",
      price: 85_000,
      description: "An advanced engine upgrade that renders steampunk vehicles invisible and intangible for 10 minutes. Recharges after 24 hours.",
    },
    {
      name: "Railblade Raider's Tesla Storm Gauntlets",
      price: 90_000,
      description: "Gauntlets that deal 8d8 lightning damage in a 30-foot line. The user risks electrocution (DC 18 Constitution save to avoid 4d8 damage).",
    },
    {
      name: "Tinker Track Gang's The Saboteur's Toolkit",
      price: 95_000,
      description: "A highly illegal toolkit designed for sabotaging mechanical devices, causing malfunctions or explosions. Usable once per day.",
    },    
  ]
}
