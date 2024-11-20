import { Tribe } from "./types";

export const tribeBlackMarket: Tribe = {
  name: "Twilight Tunnel",
  percentAngry: 1,
  priceVariability: 30,
  insults: [
    "The Twilight Tunnel is angry at you and doesn't want to trade with you!",
  ],
  items: [
    {
      name: "Applegarth Guild's Contract of Shadow Labor",
      price: 9_500,
      description: "A dark contract binding a spirit to work for the user for one year. Often employed for dangerous or illegal tasks.",
    },
    {
      name: "Archives Guild's The Ledger of Lost Bounties",
      price: 8_000,
      description: "A mystical ledger that tracks the location and movements of criminals or fugitives in real time.",
    },
    {
      name: "Book Bomb's Death's Ledger",
      price: 7_500,
      description: "An ominous ledger that marks a target for assassination by a powerful criminal syndicate. Usable once per month.",
    },
    {
      name: "Bullets, Buffs, & Beyond's Voidshot Rounds",
      price: 10_000,
      description: "Bullets capable of erasing a target from existence unless they pass a high-level Constitution save. Comes in packs of three.",
    },
    {
      name: "Changing Church's The Prayer of Forgotten Sins",
      price: 9_000,
      description: "A solemn prayer that erases all knowledge of the user’s past misdeeds from others’ memories. Usable once per week.",
    },
    {
      name: "Necromancy Insurance Company's Contract of Eternal Service",
      price: 8_500,
      description: "A grim contract binding a soul to eternal servitude in undeath. The resurrected retains memories and skills but is enslaved to the user.",
    },
    {
      name: "O-Papies Oracle Reading's Foresight of the Criminal Mind",
      price: 6_500,
      description: "A prophetic tool that predicts the actions of law enforcement or bounty hunters for 30 days, aiding in evasion.",
    },
    {
      name: "Robin's Rope's Hangman’s Noose",
      price: 5_500,
      description: "A sinister rope imbued with enchantments, rendering the target silent and forgettable when not in direct sight. Effect lasts for 1 hour or until removed.",
    },
    {
      name: "Runestone Relay's Traveler’s Parcel",
      price: 7_000,
      description: "A magical parcel capable of transporting any item across planes instantly. Usable once per week.",
    },
    {
      name: "Silent Oath's Blackmail Contract of Absolute Loyalty",
      price: 10_000,
      description: "A malevolent contract that enforces absolute loyalty upon the signee. Severe penalties await those who disobey.",
    },
    {
      name: "Supreme Smithy's Forge Bound Fire Elemental",
      price: 9_000,
      description: "An elemental bound to purify metal, granting +6 to the crafted item. Occasionally curses items out of spite.",
    },
    {
      name: "Will's Weapon's Soulscreaming Shotgun",
      price: 8_000,
      description: "A cursed shotgun that grows deadlier with each kill. Base damage starts at 1d6+DEX and increases by 1d6 for each successive kill.",
    },          
  ]
}
