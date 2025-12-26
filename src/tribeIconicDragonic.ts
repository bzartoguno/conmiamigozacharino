import { Tribe } from "./types";

export const tribeIconicDragonic: Tribe = {
  name: "Iconic Dragonic",
  owner: "Keoki",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Lunar Dragon Wand",
      price: 300000,
      description:
        "Using this wand temporarily changes the user's class level; stats, feats, race, and items stay the same.",
    },
    {
      name: "Solar Dragon Hourglass Necklace",
      price: 300000,
      description:
        "Reverse turn order starting with you; can only be used twice per long rest.",
    },
    {
      name: "Five-Pointed Chromatic Dragonic Crown",
      price: 300000,
      description:
        "Change the crown’s element to fire, ice, acid, lightning, or poison once per day. Any damage received from the chosen element is reflected back to the attacker for that day.",
    },
    {
      name: "Metallic Dragon Anvil and Hammer",
      price: 300000,
      description: "Combine any two magical items; effects may vary.",
    },
    {
      name: "Talisman of the Gemstone Dragon",
      price: 300000,
      description:
        "Invert AC; now the hit has to be lower than your AC to hit.",
    },
    {
      name: "Bedlam Earrings of the Floral Dragon",
      price: 300000,
      description:
        "Three switchable modes, each centered on your current location. Dune Mode: a whirlwind of gravel, dirt, and sand gives everyone disadvantage on attacks and checks; as a bonus action, prevent a rock attack that would otherwise drop someone to 0 HP. Morning Born Mode: a thick fog extends 240 feet, reducing all vision except tremor sense to 5 feet; as a bonus action, you can teleport within the fog. Fablehaven Mode: plant life grows rapidly within 360 feet, reducing all movement speeds except flying and hovering to 5 feet; as a bonus action, you can entangle a creature with vines to stop its movement entirely.",
    },
  ],
};
