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
      name: "Bigby's Beneficent Bracelet",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `This gorgeous jewelry piece, crafted by the wizard Bigby himself, consists of four gold rings attached via delicate chains to a wrist cuff studded with sapphires and diamonds.
Random Properties.
The bracelet has the following random properties, determined by rolling on the appropriate table in the
Dungeon Master’s Guide
:
1 minor beneficial property
1 major beneficial property
1 minor detrimental property
Dexterous Fingers.
While wearing the bracelet, you can cast
Mage Hand
.
Force Sculpture.
By focusing and channeling the bracelet’s magic for 1 minute, you can create a spectral copy of a Large or smaller nonmagical object. The copy appears in an unoccupied space within 10 feet of you, and it is made of tangible but translucent force that mimics the size, weight, and other properties of the object it’s copying. The copy must appear on a surface or liquid that can support it. Creatures can touch and interact with the copy as if it were a nonmagical object.
The copy is immune to all damage and can’t be dispelled, but a
Disintegrate
spell destroys it immediately. Otherwise, the copy disappears after 8 hours or when you dismiss it as an action.
The bracelet can create up to three copies and regains all expended uses at dawn.
Helpful Hand.
As an action, you can use the bracelet to cast
Bigby's Hand
as a 9th-level spell (spell attack bonus +13). When you cast the spell this way, the spell doesn’t require concentration. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Bowl of Commanding Water Elementals",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the Conjure Elemental spell. The bowl can't be used this way again until the next dawn.
The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.`,
    },
    {
      name: "Brazier of Commanding Fire Elementals",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a fire elemental, as if you had cast the Conjure Elemental spell. The brazier can't be used this way again until the next dawn.",
    },
    {
      name: "Censer of Controlling Air Elementals",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `While incense is burning in this censer, you can use an action to speak the censer's command word and summon an air elemental, as if you had cast the Conjure Elemental spell. The censer can't be used this way again until the next dawn.
This 6-inch wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.`,
    },
    {
      name: "Stone of Controlling Earth Elementals",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn. This stone weighs 5 pounds.",
    },
    {
      name: "Balloon Pack",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This backpack contains the spirit of an air elemental and a compact leather balloon. While you’re wearing the backpack, you can deploy the balloon as an action and gain the effect of the Levitate spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you’re falling and gain the effect of the Feather Fall spell for yourself.
When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.
After the spirit departs, the backpack’s property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack.`,
    },
    {
      name: "Type of Elemental",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Water Elemental - 1,000G (Speed: 30 ft, Swim: 90 ft)
Air Elemental - 1,200G (Speed: 90 ft, Fly: 60 ft)
Earth Elemental - 1,250G (Speed: 30 ft, Burrow: 15 ft)
Ice Elemental - 1,400G (Speed: 30 ft, Glide: 20 ft)
Fire Elemental - 1,500G (Speed: 50 ft)
Metal Elemental - 1,600G (Speed: 25 ft)
Lightning Elemental - 1,750G (Speed: 60 ft)
Cosmic (Arcane) Elemental - 3,000G (Speed: 15 ft, Swim: 15 ft, Climb: 15 ft, Fly: 15 ft, Burrow`,
    },
    {
      name: "Size Options",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Tiny - 500G (AC: 13, HP: 1 to Age HP)
Small - 1,000G (AC: 15, HP: 2 to Age HP)
Medium - 2,000G (AC: 17, HP`,
    },
    {
      name: "Age Category",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Young - 800G (HP: 30, Susceptible, friendly)
Adult - 1,200G (HP: 60, Willful, Obedience)
Elder - 2,500G (HP`,
    },
    {
      name: "Personality Customization",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `(Optional)
Fierce +2 STR
Nimble +2 DEX
Resilient +2 CON
Keen +2 INT
Wise +2 WIS
Charming +2 CHA`,
    },
    {
      name: "Additional Accessories",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Make it glow! (Emits a faint glow, illuminating a 30 ft radius) 800G
Friendship Bracelet (Grants minor regeneration restoring heal while not in combat.) 1,500G
Any Color Bow (Allows telepathic communication with the elemental, up to 1 mile) 1,800G
Power Snack (Boosts elemental attacks, increasing damage dice by one level (e.g., d6 to d8, d8 to d10) 2,000G
Toasts Besties Scarf (Allows the elemental to take half of the damage dealt to its bonded owner, usable once per short rest.)`,
    },
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
        }
  ],
};
