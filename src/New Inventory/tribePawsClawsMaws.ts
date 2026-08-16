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
          "These count as companions, yar, and please remember you can only have one companion at a time; if you end up with more than one, you will need to send the extras back to your base or home, and if that’s not possible, then you can’t take another one. Any pets or mounts you receive will start as babies or children, and I thought it would be really nice to have them grow alongside you as you keep progressing on your journey; just tell me before or after a session if you want your little buddy to age up. I want this to be enjoyable for both of us, so keep this in mind: when they grow up, their maximum health will double, all their raw stats will each get +2, and finally they’ll gain an extra 5 feet in whatever type of movement they have. Also remember, younger companions have a better chance of learning new actions or picking up unique effects, like consistently drinking strength potions, and sometimes your baby can carry more passengers or even have a +6 Strength stat while it’s still just a tiny fellow.",
          "These count as companions, yar, and please remember you can only have one companion at a time; if you end up with more than one, you will need to send the extras back to your base or home, and if that’s not possible, then you can’t take another one. Any pets or mounts you receive will start as babies or children, and I thought it would be really nice to have them grow alongside you as you keep progressing on your journey; just tell me before or after a session if you want your little buddy to age up. I want this to be enjoyable for both of us, so keep this in mind: when they grow up, their maximum health will double, all their raw stats will each get +2, and finally they’ll gain an extra 5 feet in whatever type of movement they have. Also remember, younger companions have a better chance of learning new actions or picking up unique effects, like consistently drinking strength potions, and sometimes your baby can carry more passengers or even have a +6 Strength stat while it’s still just a tiny fellow.",
          "These count as companions, yar, and please remember you can only have one companion at a time; if you end up with more than one, you will need to send the extras back to your base or home, and if that’s not possible, then you can’t take another one. Any pets or mounts you receive will start as babies or children, and I thought it would be really nice to have them grow alongside you as you keep progressing on your journey; just tell me before or after a session if you want your little buddy to age up. I want this to be enjoyable for both of us, so keep this in mind: when they grow up, their maximum health will double, all their raw stats will each get +2, and finally they’ll gain an extra 5 feet in whatever type of movement they have. Also remember, younger companions have a better chance of learning new actions or picking up unique effects, like consistently drinking strength potions, and sometimes your baby can carry more passengers or even have a +6 Strength stat while it’s still just a tiny fellow.",
          "Hey, if you’re willing to get your hands a bit dirty, I could use help cleaning out the back where I keep the more untamed animals; they can get a little jumpy, so please make a DC 14 Animal Handling check to keep them calm while you work. If you succeed, I’ll pay you 50 gp, but if you fail you take 1 point of damage and still get 15 gp, okay?",
          ],
  items: [
    {
      name: "Baby Basilisk",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: `
        Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
        Size: Small
        Creature Type: Beast 
        Armor Class: 13
        Hit Points: 30
        Speed: 30 ft.
        Resistances: N/A
        Age: Baby
        STR: +1 (12)
        DEX: -3 (4)
        CON: 0 (11)
        INT: -4 (2)
        WIS: -3 (3)
        CHR: -3 (4)
        Abilities
        Stone Glare: On a natural 18 or higher on an attack roll, the target is petrified.
        Child Action
        Tail Trip: +6 to hit, 1d4 bludgeoning damage and reduce the target’s movement by 10 ft.
        Teen Action
        Fake Flash: Once per short rest, force one creature to make a DC 12 Constitution save or be blinded for 1 round.
        Adult Action
        Bite: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 3)`,
    },
    {
      name: "Chimera Chick",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: `
        Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
        Size: Small
        Creature Type: Aberration 
        Armor Class: 12
        Hit Points: 30
        Speed: 25 ft.
        Resistances: N/A
        Age: Baby
        STR: +2 (15)
        DEX: -2 (7)
        CON: +2 (15)
        INT: -3 (3)
        WIS: 0 (10)
        CHR: -2 (6)
        Abilities
        Multiattack: The chimera makes three attacks because it has three heads.
        Child Action
        Bite: +7 to hit, 2d6 + 3 piercing damage.
        Teen Action
        Headbutt: +8 to hit, 1d12 + 4 bludgeoning damage.
        Adult Action
        Breath Attack: The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much on a successful one.`,
    },
    {
      name: "Shadow Pup",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: `
      Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself, not sure how but they can.)
      Size: Small
      Creature Type: Beast 
      Armor Class: 13
      Hit Points: 40
      Speed: 40 ft.
      Resistances: N/A
      Age: Baby
      STR: +1 (12)
      DEX: 0 (10)
      CON: -1 (9)
      INT: -5 (1)
      WIS: -1 (8)
      CHR: -5 (1)
      Abilities
      Shadowmeld: This pet can meld into its owner's shadow and be summoned out of it at will.
      Child Action
      Bite: +6 to hit, 2d6 piercing damage.
      Teen Action
      Fetch: This pet ignores opportunity attacks and will drag a target back to its owner at all costs.
      Adult Action
      Speak: This pet lets out a sonic bark in a 10 ft. cone. Each creature in that area must make a DC 12 Constitution save or take 3d4 thunder damage.`,
    },
    {
      name: "Faerie Chest Weasel",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
        Type of Companion: Helpers (This NPC boost either skills, stats, or something else)
        Size: Tiny
        Creature Type: Fey 
        Armor Class: 14
        Hit Points: 30
        Speed: 30 ft., 40 ft. Climb
        Resistances: N/A
        Age: Baby
        STR: -3 (4)
        DEX: +3 (16)
        CON: +1 (12)
        INT: +2 (15)
        WIS: 0 (10)
        CHR: +4 (18)
        Abilities
        Frustration Feeding: Owner deals additional attack damage depending on how well-fed their pet is.
        Child Action
        Lock It: Lock a door, chest, gate, window, or similar entry. It can only be opened by passing a Strength check of 10 + highest stat × 2.
        Teen Action
        Pocket: Functions like a Bag of Holding, following all applicable rules.
        Adult Action
        No You: Once per day, the pet can magically redirect an attack back onto the attacker.`,
    },
    {
      name: "Mimic Spawn",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
        Type of Companion: Helpers (This NPC boost either skills, stats, or something else)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 13
        Hit Points: 20
        Speed: 20 ft., 30 ft. Climb
        Resistances: N/A
        Age: Baby
        STR: +1 (13)
        DEX: -1 (8)
        CON: 0 (11)
        INT: -5 (1)
        WIS: -1 (9)
        CHR: -3 (4)
        Abilities
        Mimic: This pet can eat objects and add them to its mimic catalog. Baby mimics can only mimic 1 item until they reach the teen stage.
        Child Action
        Hide With Me: The pet and its owner gain advantage on Stealth checks if their hiding spot isn't mobile.
        Teen Action
        Sticky Tongue: This pet grapples a target within 10 ft. The escape DC is 10 + the owner's highest stat × 2.
        Adult Action
        Metamorph: This pet can now mimic basic machinery, as long as the object is not size Large or bigger.`,
    },
    {
      name: "Pseudodragon Tyke",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      Type of Companion: Helpers (This NPC boost either skills, stats, or something else)
      Size: Tiny
      Creature Type: Dragon 
      Armor Class: 14
      Hit Points: 10
      Speed: 10 ft., 25 ft. Fly
      Resistances: N/A
      Age: Baby
      STR: -5 (2)
      DEX: 0 (11)
      CON: -1 (9)
      INT: -2 (6)
      WIS: -1 (8)
      CHR: -2 (6)
      Abilities
      Little Hoarder: Every week, gain 10% of your total wealth across all currencies.
      Child Action
      Sting: Target must make a DC 12 Constitution saving throw. On a failure, they are paralyzed for 2 minutes (cannot be used to start or during combat).
      Teen Action
      Telepathic Link: You and your pet can communicate telepathically within 30 ft.
      Adult Action
      Knockout Gas: This pet breathes a 15 ft. cone of knockout gas. Each creature in the area must make a DC 17 Constitution save or fall unconscious.`,
    },
    {
      name: "Griffon Egg",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: `
        Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 12
        Hit Points: 30
        Speed: 30 ft., 40 ft. Fly
        Resistances: N/A
        Age: Baby
        STR: +2 (14)
        DEX: 0 (11)
        CON: +1 (12)
        INT: -4 (2)
        WIS: -1 (9)
        CHR: -3 (3)
        Abilities
        Keen Sight: This pet has advantage on Wisdom (Perception) checks that rely on sight.
        Child Action
        Peck: +6 to hit, 1d8 piercing damage.
        Teen Action
        Scratch: +6 to hit, 2d6 slashing damage.
        Adult Action
        Skydrop: Dive-bomb a target. That target must make a DC 17 Dexterity saving throw, taking 4d6 bludgeoning damage on a failed save, or half as much on a successful one. Both the pet and the target take half the damage dealt.`,
    },
    {
      name: "Owlbear Cub",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: `
        Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
        Size: Small
        Creature Type: Beast 
        Armor Class: 13
        Hit Points: 40
        Speed: 40 ft.
        Resistances: N/A
        Age: Baby
        STR: +3 (16)
        DEX: -1 (8)
        CON: +1 (13)
        INT: -4 (3)
        WIS: -1 (8)
        CHR: -4 (3)
        Abilities
        Heavy Coat: At the start of each day, choose to gain resistance to bludgeoning, slashing, or piercing damage.
        Child Action
        Beak: +7 to hit, 1d10 + 5 piercing damage.
        Teen Action
        Claws: +7 to hit, 2d8 + 5 slashing damage.
        Adult Action
        Bear Hug Blitz: Once per short rest, grapple a single target. If successful, the owlbear may make up to four attacks against the grappled target.`,
    },
    {
      name: "Owlbear Cub",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: "Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.) Size: Small Creature Type: Beast Armor Class: 13 Hit Points: 40 Speed: 40 ft. Resistances: N/A Age: Baby STR: +3 (16) DEX: -1 (8) CON: +1 (13) INT: -4 (3) WIS: -1 (8) CHR: -4 (3) Abilities Heavy Coat: At the start of each day, choose to gain resistance to bludgeoning, slashing, or piercing damage. Child Action Beak: +7 to hit, 1d10 + 5 piercing damage. Teen Action Claws: +7 to hit, 2d8 + 5 slashing damage. Adult Action Bear Hug Blitz: Once per short rest, grapple a single target. If successful, the owlbear may make up to four attacks against the grappled target.",
    },
    {
      name: "Displacer Kitten",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `
        Type of Companion: Helpers (This NPC boost either skills, stats, or something else)
        Size: Small
        Creature Type: Monstrosity 
        Armor Class: 15
        Hit Points: 40
        Speed: 40 ft.
        Resistances: N/A
        Age: Baby
        STR: +2 (14)
        DEX: 0 (11)
        CON: +1 (12)
        INT: -4 (2)
        WIS: -1 (8)
        CHR: -4 (3)
        Abilities
        Out of Place: The kitten can teleport up to 10 ft. as a reaction once per round.
        Child Action
        Cuddle Cloak: Grants +1 AC to the owner for 1 minute.
        Teen Action
        Flicker: Choose one ally to teleport 10 ft. to a visible space.
        Adult Action
        Mirage Meow: Once per short rest, creates a mirror image of a creature within 10 ft., lasting until a long rest.`,
    },
    {
      name: "Phantom Mouse",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `
        Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself, not sure how but they can.)
        Size: Tiny
        Creature Type: Undead 
        Armor Class: 15
        Hit Points: 45
        Speed: 45 ft., 10 ft. Burrow
        Resistances: N/A
        Age: Baby
        STR: 0 (10)
        DEX: +7 (24)
        CON: 0 (10)
        INT: 0 (10)
        WIS: 0 (10)
        CHR: 0 (10)
        Abilities
        Whispering Echo: Speak a simple message to the mouse and it will repeat it until commanded to stop.
        Child Action
        Flicker Squeak: Reveals any invisible creatures within 10 ft. of this pet.
        Teen Action
        Soul Sniff: Detect any undead or spirits within 300 ft.
        Adult Action
        Haunt Echo: Once per day, force a creature to relive a memory. The target must make a DC 13 Wisdom save or be frightened for 1 round.`,
    },
    {
      name: "Cuddly Strixhaven Mascot",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `Representing one of the mascots of Strixhaven, this soft, Tiny, magic toy is perfect for cuddling. If you press it to your arm, shoulder, or leg as an action, the toy stays attached there for 1 hour or until you use an action to remove it.
The toy can also be used to fight off fear. When you make a saving throw to avoid or end the frightened condition on yourself, you can give yourself advantage on the roll if the toy is on your person. You must decide to do so before rolling the d20. If the save succeeds, you can't use the toy in this way until you finish a long rest.`,
    },
    {
      name: "Claws of the Umber Hulk",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `These heavy gauntlets of brown iron are forged in the shape of an umber hulk’s claws, and they fit the wearer’s hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.
You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal).
While wearing the claws, you can’t manipulate objects or cast spells with somatic components.`,
    },
    {
      name: "Dust of Corrosion",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `As an action, you can throw this dust into the air, filling a 10-foot cube that extends out from you. Surfaces and objects made of nonmagical ferrous metal in the area instantly corrode and turn to dust, becoming useless and unsalvageable. Any creature in the area that is made wholly or partly out of ferrous metal must make a DC 13 Constitution saving throw, taking 4d8 necrotic damage on a failed save, or half as much damage on a successful one.
Found in a small packet, this dust is made from finely ground rust monster antennae. There is enough dust in each packet for one use.`,
    },
    {
      name: "Insignia of Claws",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `The jewels in this insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.
While wearing the insignia, you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical.`,
    },
    {
      name: "Dispelling Stone",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 feet and explodes in a 10-foot-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends.",
    }
  ],
};
