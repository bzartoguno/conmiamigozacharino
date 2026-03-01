import { Item, Tribe } from "./types";

export interface MonsterMakerItem extends Item {
  priceText?: string;
  category: string;
}

export const tribeMonsterMaker: Tribe & { items: MonsterMakerItem[] } = {
  name: "Make a Monster",
  owner: "Mertal",
  percentAngry: 0,
  priceVariability: 10,
  insults: [
          "These count as companions, oui, and please remember you may have only one companion at a time; if you find yourself with more than one, you must send the others back to your base or home, and if that is not possible, then unfortunately you cannot take another. Any pets or mounts you receive will begin as babies or children, and I think it is rather charming, non, to have them grow alongside you as you continue on your journey; just tell me before or after a session if you would like your little friend to age up a bit. I want this to be enjoyable for both of us, so keep this in mind: when they do grow, their maximum health will double, all their raw stats will each gain +2, and finally they will gain an extra 5 feet to whatever movement they have. Also, you should remember that younger companions have a better chance to learn new actions or develop unique little effects, like taking a liking to strength potions and becoming reliably stronger over time, and it may happen that your baby can carry more passengers or even has a +6 Strength while it is still only a tiny little thing.",
          "These count as companions, oui, and please remember you may have only one companion at a time; if you find yourself with more than one, you must send the others back to your base or home, and if that is not possible, then unfortunately you cannot take another. Any pets or mounts you receive will begin as babies or children, and I think it is rather charming, non, to have them grow alongside you as you continue on your journey; just tell me before or after a session if you would like your little friend to age up a bit. I want this to be enjoyable for both of us, so keep this in mind: when they do grow, their maximum health will double, all their raw stats will each gain +2, and finally they will gain an extra 5 feet to whatever movement they have. Also, you should remember that younger companions have a better chance to learn new actions or develop unique little effects, like taking a liking to strength potions and becoming reliably stronger over time, and it may happen that your baby can carry more passengers or even has a +6 Strength while it is still only a tiny little thing.",
          "These count as companions, oui, and please remember you may have only one companion at a time; if you find yourself with more than one, you must send the others back to your base or home, and if that is not possible, then unfortunately you cannot take another. Any pets or mounts you receive will begin as babies or children, and I think it is rather charming, non, to have them grow alongside you as you continue on your journey; just tell me before or after a session if you would like your little friend to age up a bit. I want this to be enjoyable for both of us, so keep this in mind: when they do grow, their maximum health will double, all their raw stats will each gain +2, and finally they will gain an extra 5 feet to whatever movement they have. Also, you should remember that younger companions have a better chance to learn new actions or develop unique little effects, like taking a liking to strength potions and becoming reliably stronger over time, and it may happen that your baby can carry more passengers or even has a +6 Strength while it is still only a tiny little thing.",
          "Oi, yes yes, I am speaking to you, you with the good eyes, d’accord; come with me, one of my lovely elementals is making a terrible little scene and throwing a proper fit, and I need a fresh pair of eyes to look at this problem, s’il vous plaît. If you are willing, make me a DC 14 Perception check to help me sort out this mess; if you succeed, I will pay you 25 gp, and if you fail, you take 15 points of damage from the elemental thrashing about, but you still receive 35 gp for the trouble, oui, because you have suffered for the cause.",
          ],
  items: [
    {
      category: "Type of Elemental",
      name: "Water Elemental",
      price: 1000,
      description: "Speed: 30 ft, Swim: 90 ft",
    },
    {
      category: "Type of Elemental",
      name: "Air Elemental",
      price: 1200,
      description: "Speed: 90 ft, Fly: 60 ft",
    },
    {
      category: "Type of Elemental",
      name: "Earth Elemental",
      price: 1250,
      description: "Speed: 30 ft, Burrow: 15 ft",
    },
    {
      category: "Type of Elemental",
      name: "Ice Elemental",
      price: 1400,
      description: "Speed: 30 ft, Glide: 20 ft",
    },
    {
      category: "Type of Elemental",
      name: "Fire Elemental",
      price: 1500,
      description: "Speed: 50 ft",
    },
    {
      category: "Type of Elemental",
      name: "Metal Elemental",
      price: 1600,
      description: "Speed: 25 ft",
    },
    {
      category: "Type of Elemental",
      name: "Lightning Elemental",
      price: 1750,
      description: "Speed: 60 ft",
    },
    {
      category: "Type of Elemental",
      name: "Cosmic (Arcane) Elemental",
      price: 3000,
      description: "Speed: 15 ft, Swim: 15 ft, Climb: 15 ft, Fly: 15 ft, Burrow: 15 ft",
    },
    {
      category: "Size Options",
      name: "Tiny",
      price: 500,
      description: "AC: 13, HP: 1 to Age HP.",
    },
    {
      category: "Size Options",
      name: "Small",
      price: 1000,
      description: "AC: 15, HP: 2 to Age HP.",
    },
    {
      category: "Size Options",
      name: "Medium",
      price: 2000,
      description: "AC: 17, HP: 3 to Age HP. Mountable.",
    },
    {
      category: "Age Category",
      name: "Young",
      price: 800,
      description: "HP: 30; susceptible and friendly.",
    },
    {
      category: "Age Category",
      name: "Adult",
      price: 1200,
      description: "HP: 60; willful, with basic obedience.",
    },
    {
      category: "Age Category",
      name: "Elder",
      price: 2500,
      description: "HP: 90; independent yet powerful, gains AoE attacks.",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Fierce",
      price: 0,
      priceText: "Included personality: +2 STR",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Nimble",
      price: 0,
      priceText: "Included personality: +2 DEX",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Resilient",
      price: 0,
      priceText: "Included personality: +2 CON",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Keen",
      price: 0,
      priceText: "Included personality: +2 INT",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Wise",
      price: 0,
      priceText: "Included personality: +2 WIS",
      description: "Personality customization",
    },
    {
      category: "Personality Customization (Optional)",
      name: "Charming",
      price: 0,
      priceText: "Included personality: +2 CHA",
      description: "Personality customization",
    },
    {
      category: "Additional Accessories",
      name: "Make it glow!",
      price: 800,
      description: "Emits a faint glow, illuminating a 30-foot radius.",
    },
    {
      category: "Additional Accessories",
      name: "Friendship Bracelet",
      price: 1500,
      description: "Grants minor regeneration, restoring health while not in combat.",
    },
    {
      category: "Additional Accessories",
      name: "Any Color Bow",
      price: 1800,
      description: "Allows telepathic communication with the elemental, up to 1 mile.",
    },
    {
      category: "Additional Accessories",
      name: "Power Snack",
      price: 2000,
      description: "Boosts elemental attacks, increasing damage dice by one level (e.g., d6 to d8, d8 to d10).",
    },
    {
      category: "Additional Accessories",
      name: "Toasts Besties Scarf",
      price: 3000,
      description: "Allows the elemental to take half of the damage dealt to its bonded owner, usable once per short rest.",
    },
  ],
};
