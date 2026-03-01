import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket: Tribe = {
  name: "One of the white shops",
  percentAngry: 30,
  priceVariability: 30,
  insults: blackMarketInsults,
  items: [
    {
      name: "Contract of Shadow Labor",
      price: 9500,
      description: "Binds a spirit to work for the user for one year. Often used for dangerous or illegal labor."
    },
    {
      name: "The Map of Lost Bounties",
      price: 8000,
      description: "Tracks the location of forgotten criminals or fugitives in real time within a 10-mile radius, revealing their movements, stashes, and hideouts."
    },
    {
      name: "Book Bomb's Bootleg Death Note",
      price: 7500,
      description: "Write down someone's name, and they'll take 500 points of damage within the next week. No, you do not choose when this will happen. Usable once per month."
    },
    {
      name: "Void Shot Ammo",
      price: 10000,
      description: "Bullets that erase the target from existence, if they hit. Only three bullets remain."
    },
    {
      name: "Emblem of an Unfinished Goddess",
      price: 9000,
      description: "While wearing this item, you will be able to ___[add three words of your choice] as long as you are in the good graces of this deity."
    },
    {
      name: "Contract of Eternal Service",
      price: 8500,
      description: "Draw up a contract that binds one of the signer's souls to serve the other. Until the contract is fulfilled, they will be brought back from the grave to finish their task."
    },
    {
      name: "Refilling Tonic of a Criminal Mastermind",
      price: 6500,
      description: "Predicts the next moves of law enforcement or bounty hunters for 30 days, allowing the user to evade capture. Cooldown: 30 days."
    },
    {
      name: "Hangman’s Noose",
      price: 5500,
      description: "Renders the target silent and forgettable when not in direct sight. Lasts for 1 hour or until removed."
    },
    {
      name: "Traveler’s Parcel",
      price: 7000,
      description: "Transports any item across planes instantly. Usable once per week."
    },
    {
      name: "Blackmail Contract of Absolute Loyalty",
      price: 10000,
      description: "Forces the signee into absolute loyalty, with severe penalties for disobedience."
    },
    {
      name: "Forge Bound Fire Elemental",
      price: 9000,
      description: "Burns away impurities in metal, granting +5 to the created item. Occasionally curses the item out of spite."
    },
    {
      name: "Soul Screaming Shotgun",
      price: 8000,
      description: "A shotgun; each kill increases damage by 1d6. Starts with DEX to hit, 1d6+DEX piercing damage."
    }
  ],
};
