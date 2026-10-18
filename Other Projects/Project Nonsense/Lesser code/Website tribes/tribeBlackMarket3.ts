import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket3: Tribe = {
  name: "One of the yellow star shops",
  percentAngry: 20,
  priceVariability: 30,
  insults: blackMarketInsults,  
  items: [
    {
      name: "Glittery Bowtie",
      price: 40_000,
      description: "This bowtie is so sparkly and dazzling it will make enemies blink when attacking this pet/mount. Grants +15 AC against ranged attacks."
    },
    {
      name: "Broken Bell",
      price: 35_000,
      description: "This tiny, rusted bell hangs from any creature. Once per long rest, as a reaction, it may ring it granting any one creature another turn."
    },
    {
      name: "Jar of Conditional Kindness",
      price: 30_000,
      description: "A powdery jar that produces a magical treat once per day. The effects are haste, invisibility, resistance, & regeneration. But the treat only forms after the pet sacrifices a hit point willingly (can be healed)."
    },
    {
      name: "Pink Fuzzy Mat in the Shape of a Heart",
      price: 30_000,
      description: "After your pet/mount sleeps on this mat, they gain temp HP equal to half of your max HP."
    },
    {
      name: "Crystal of Captured",
      price: 45_000,
      description: "Touch any sentient, organic, living creature to this crystal to pull it into a small pocket space. Over time, the creature mentally breaks to obey every order of whoever holds the crystal (2d4 weeks). The creature inside can't escape until the holder gives it the command setting it free."
    },
    {
      name: "Bloodmoon Warpaint",
      price: 50_000,
      description: "Once applied, this crimson dye cannot be removed. The creature bearing it becomes immune to fear and takes no damage from the first blow in every battle. However, it becomes unnaturally eager for violence, even if only slightly threatened."
    }
  ],
};
