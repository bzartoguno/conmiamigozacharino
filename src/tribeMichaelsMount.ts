import { Item, Tribe } from "./types";

export interface MichaelsMountItem extends Item {
  priceText?: string;
}

export const tribeMichaelsMount: Tribe & { items: MichaelsMountItem[] } = {
  name: "Michael's Mount",
  owner: "Michael",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
    "Any pets/mounts you receive will be either children or babies cuz as you progress, your companion will grow with you, and I can’t think of a better way to do that for an animal/monster / whatever you adopt to grow with you as you do. Talk to me before or after a session if you want your little buddy to age up. I want this to be a fun experience for both of us.",
  ],
  items: [
    {
      name: "War horse",
      price: 500,
      description: `(Speed Mount)
      Size: Large (2x1)
      Creature Type: Beast (Mount)
      Armor Class: 13
      Hit Points: 45
      Speed: 60ft
      Resistances: NA 
      Crew Size: 1
      Maximum Passengers: 1
      Age: Baby
      STR: +1 (14)
      DEX: -1 (8)
      CON: 0 (9)
      INT: -4 (2)
      WIS: -1 (8)
      CHR: -3 (3)
      Abilities
      Sprinting Stride: The War Horse can Dash as a bonus action without provoking opportunity attacks.
      Child Action
      Run: Disengage & Gain an additional 30ft
      Teen Action
      Charge Through: Dash through enemies in a straight line. They must make a DC 12 STR save or be knocked prone.
      Adult Action
      Ride-by Slam: Dash and allow the rider to attack at any point along the path.`,
    },
    {
      name: "Woolly Mammoth",
      price: 700,
      description: `(Defensive Mount)
      Size: Huge (2x3)
      Creature Type: Beast (Mount)
      Armor Class: 17
      Hit Points: 100
      Speed: 45ft
      Resistances: Cold & nonmagical piercing
      Crew Size: 1
      Maximum Passengers: 2
      Age: Baby
      STR: +5 (20)
      DEX: -2 (5)
      CON: +2 (17)
      INT: -2 (4)
      WIS: -1 (7)
      CHR: -4 (2)
      Abilities
      Wooly Bulk: Rider & Passengers gains +2 AC while mounted due to cover and elevation.
      Child Action
      Mammoth Ward: Rider gains 5 temporary HP at the start of their turn.
      Teen Action
      Wool Shield: The mammoth absorbs one source of cold, fire, or lightning damage, granting resistance to that type until the end of the encounter.
      Adult Action
      Stomp: The mammoth stomps the ground. Creatures within 10 ft. must make a DC 14 Strength save or fall prone. Rider gains advantage on attacks against prone enemies.`,
    },
    {
      name: "Velociraptor",
      price: 600,
      description: `(Attack Mount)
      Size: Medium
      Creature Type: Beast (Mount)
      Armor Class: 14
      Hit Points: 35
      Speed: 35ft
      Resistances: NA
      Crew Size: 1
      Maximum Passengers: 0
      Age: Baby
      STR: -4 (2)
      DEX: 0 (10)
      CON: 0 (9)
      INT: -2 (4)
      WIS: -1 (8)
      CHR: -4 (2)
      Abilities
      Synchronized Predator: When the rider hits with a weapon attack, add 1 rider damage die in bonus damage once per turn.
      Child Action
      Quick Bite: After the rider hits with an attack, deal an additional 1 rider damage die.
      Teen Action
      Claw Boost: On hit, the rider adds their weapons' bonus damage again (no modifiers).
      Adult Action
      Tag Team: If the rider hits twice in one turn, the mount makes helps the rider made a third attack action.`,
    },
    {
      name: "Plesiosaurus",
      price: 300,
      description: `(Defensive Mount)
      Size: Large (2x1)
      Creature Type: Beast (Mount)
      Armor Class: 16
      Hit Points: 68
      Speed: 40 Swim
      Resistances: Cold & bludgeoning
      Crew Size: 1
      Maximum Passengers: 0
      Age: Baby
      STR: +1 (14)
      DEX: 0 (11)
      CON: 0 (11)
      INT: -4 (2)
      WIS: -1 (8)
      CHR: -5 (1)
      Abilities
      Aquatic Barrier: The rider gains +1 AC and half cover against ranged attacks while in water.
      Child Action
      Bubble Screen: Rider gains +3 temporary HP at the start of combat.
      Teen Action
      Submerge & Block: When targeted, the mount can submerge below the surface, imposing a disadvantage on the attack.
      Adult Action
      Wave Break: When the mount takes damage, release a 10 ft. pulse that pushes enemies five ft. away (DC 13 STR).`,
    },
    {
      name: "Dolphin Delighter",
      price: 350,
      description: `(Attack Mount)
      Size: Medium
      Creature Type: Beast (Mount)
      Armor Class: 14
      Hit Points: 27
      Speed: 50 Swim
      Resistances: Lightning
      Crew Size: 1
      Maximum Passengers: 0
      Age: Baby
      STR: 0 (10)
      DEX: 0 (9)
      CON: 0 (9)
      INT: -1 (7)
      WIS: -1 (8)
      CHR: +1 (12)
      Abilities
      Swift Support: When the rider lands an attack, deal an additional 1d4 lightning damage once per turn.
      Child Action
      Misdirct: Rider’s first attack each round deal one rider damage die on a different enemy within 15ft.
      Teen Action
      Trace Image: After the rider hits, this mount jolts the enemy for an additional rider damage die of lightning.
      Adult Action
      Chain Spark: If two enemies are hit in one turn, they both take 1d6 lightning damage.`,
    },
    {
      name: "Pegasus",
      price: 1000,
      description: `(Speed Mount)
      Size: Large (2x1)
      Creature Type: Celestial (Mount)
      Armor Class: 12
      Hit Points: 60
      Speed: 30, 90 Fly
      Resistances: Radiant
      Crew Size: 1
      Maximum Passengers: 1
      Age: Baby
      STR: +1 (14)
      DEX: 0 (11)
      CON: 0 (12)
      INT: -1 (6)
      WIS: 0 (11)
      CHR: 0 (9)
      Abilities
      Aerial Outrider: Can Dash, Disengage, & Dismount as a free action once per fight
      Child Action
      Skyfeint: Disengage while flying and gain +2 AC until the start of your next turn.
      Teen Action
      Gust Rush: Dash in a line and push enemies 5 ft. to the side (DC 13 STR).
      Adult Action
      Striking Swoop: Dash and allow rider to make an attack with +2 extra damage dice.`,
    },
    {
      name: "Hippogriff",
      price: 800,
      description: `(Defensive Mount)
      Size: Large (2x1)
      Creature Type: Celestial (Mount)
      Armor Class: 11
      Hit Points: 19
      Speed: 40, 60 Fly
      Resistances: NA
      Crew Size: 1
      Maximum Passengers: 1
      Age: Baby
      STR: +1 (14)
      DEX: 0 (9)
      CON: 0 (9)
      INT: -4 (2)
      WIS: -1 (8)
      CHR: -2 (4)
      Abilities
      Sky Shield: Rider gains +1 AC while flying and has advantage against ranged attacks.
      Child Action
      Feathered Deflection: Rider gains +2 AC until the start of their next turn.
      Teen Action
      Wind Buffer: Create 10 ft. zone of swirling wind. Allies inside gain +1 AC and ranged attacks have disadvantage.
      Adult Action
      Dive Guard: After using Dash, gain resistance to all damage until the start of your next turn.`,
    },
    {
      name: "Baby Purple Worm",
      price: 1700,
      description: `(Attack Mount)
      Size: Huge (3x4)
      Creature Type: Monstrosity (Mount)
      Armor Class: 17
      Hit Points: 120
      Speed: 50, 30 Burrow
      Resistances: Poison & nonmagical Bludeoning
      Crew Size: 1 (In Maw)
      Maximum Passengers: 3 (In tummy)
      Age: Baby
      STR: +7 (24)
      DEX: -3 (3)
      CON: +4 (18)
      INT: -5 (1)
      WIS: -2 (4)
      CHR: -5 (1)
      Abilities
      Maw Rider: Rider’s weapon attacks deal an additional rider damage die on creatures that are prone, surpised, or underground.
      Child Action
      POWER CHOP: On hit, rider’s attack deals an addional extra 3 rider damage die.
      Teen Action
      Burrow Bash: Rider attacks a target in difficult terrain, auto-critting on hit.
      Adult Action
      Quake Assist: Range 30ft radius, targets must make a DC 14 CON save or be stunned for 1 turn including rider.`,
    },
  ],
};
