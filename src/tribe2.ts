import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe2: Tribe = {
  name: "Grubcar Clan",
  percentAngry: 20,
  priceVariability: 81,
  insults: createGoblinExcuses("Grubcar Clan"),

  items: [
    {
      name: "Waste of Good Napkin",
      price: 110,
      description: "(A coupon that offers 25% off your next purchase anywhere; valid for one use only.)",
    },
    {
      name: "Snack?",
      price: 35,
      description: "(Some thrown-out food found in a dumpster, heals 6d4 + the knowledge of eating trash.)",
    },
    {
      name: "Goblin Hand Sanitizer",
      price: 35,
      description: "(An unopened jar of peanut butter, heals 2d6.)",
    },
    {
      name: "Dino!",
      price: 110,
      description: "(Dinosaur nuggets with your choice of dipping sauce, heals 6d6.)",
    },
    {
      name: "Garbage Crown!",
      price: 75,
      description: "(A Burger King crown that will stay on your head until you take it off.)",
    },
    {
      name: "Disappointment",
      price: 75,
      description: "(A batch of perfectly baked cookies, but the goblins don't have any milk to go with them. Each cookie heals for 5 HP.)",
    },
    {
      name: "Soup?",
      price: 35,
      description: "(A soggy bowl of cereal, heals 2d8.)",
    },
    {
      name: "Doctor Be GONE!",
      price: 110,
      description: "(A shiny red apple that regenerates after half of it is gone. Each bite is an action and heals for 1 HP.)",
    },
    {
      name: "Hobo Gum",
      price: 35,
      description: "(A rock, small enough to chew on.)",
    },
    {
      name: "Terrible Seasonal Cookie Thief",
      price: 75,
      description: "(Santa's hat.)",
    },
    {
      name: "The One True Enemy",
      price: 75,
      description: "(A bar of soap, with a bite taken out of it?)",
    },
    {
      name: "Last Week's Fish Trip",
      price: 110,
      description: "(Six left boots, three fish, one fishing pole with a pair of pants on the hook, and a tombstone.)",
    },
    {
      name: "Holly's Grail",
      price: 110,
      description: "(A fresh Costco rotisserie chicken, probably stolen from a person named Holly because her receipt is still in the bag. Heals for 6d12.)",
    },
    {
      name: "No no no I'm your brother! Remember we used to laugh and play down by the river, and Mom would always make us a sandwich when we came inside covered in mud!",
      price: 35,
      description:
        "(Potion of Forget-Me-Not. After drinking this potion, you will be forgotten by everyone who knows you, unless they have psionic or psychic immunity or resistance.)",
    },
    {
      name: "Liquid Golden Cat Eyes",
      price: 75,
      description:
        "(A permanent potion of darkvision up to 120 feet. After drinking it and while in darkness, your eyes shift from their original color to a golden yellow and your pupils stretch, giving them a slitted, cat-like appearance.)",
    },
    {
      name: "You really hurt my feelings, why would you do that!",
      price: 110,
      description:
        "(Liar's Breath, after drinking this potion you gain a +10 to all Deception rolls; however, you are also unable to answer truthfully to any question. The effects of this potion last for 5 hours.)",
    },
  ],
};
