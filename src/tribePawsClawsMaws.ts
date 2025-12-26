import { Item, Tribe } from "./types";

export interface PawsClawsMawsItem extends Item {
  priceText?: string;
}

export const tribePawsClawsMaws: Tribe & { items: PawsClawsMawsItem[] } = {
  name: "Paws, Claws, & Maws",
  owner: "Wah",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
    "Each critter is hand-raised—watch your fingers when you give them a boop.",
  ],
  items: [
    {
      name: "Baby Basilisk",
      price: 100,
      description: "A sleepy hatchling with curious eyes and a fondness for sunny rocks.",
    },
    {
      name: "Chimera Chick",
      price: 100,
      description: "A tiny trio-in-one with a purr, a bleat, and a chirp in one breath.",
    },
    {
      name: "Displacer Kitten",
      price: 100,
      description: "Two tails, eight lives, and a talent for vanishing at snack time.",
    },
    {
      name: "Faerie Chest Weasel",
      price: 100,
      description: "Guardian of small treasures with a glitter-dusted giggle.",
    },
    {
      name: "Griffon Egg",
      price: 100,
      description: "Warm, speckled, and faintly humming with sky-bound potential.",
    },
    {
      name: "Mimic Spawn",
      price: 100,
      description: "A squishy little boxlet that clicks happily when fed copper.",
    },
    {
      name: "Owlbear Cub",
      price: 100,
      description: "Downy feathers, big curious eyes, and a penchant for midnight snacks.",
    },
    {
      name: "Phantom Mouse",
      price: 100,
      description: "Barely there, but it squeaks loud enough to haunt your cheese drawer.",
    },
    {
      name: "Pseudodragon Tyke",
      price: 100,
      description: "Palm-sized, wing-whirring, and eager to nap atop spellbooks.",
    },
    {
      name: "Shadow Pup",
      price: 100,
      description: "Loyal silhouette that chases your own shadow like a wagging tail.",
    },
  ],
};
