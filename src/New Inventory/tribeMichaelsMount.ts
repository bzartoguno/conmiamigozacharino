import { Item, Tribe } from "../types";

export interface MichaelsMountItem extends Item {
  priceText?: string;
}

export const tribeMichaelsMount: Tribe & { items: MichaelsMountItem[] } = {
  name: "Michael's Mount",
  owner: "Michael",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "These here critters count as companions, partner, and you can only ride with one companion at a time. If you end up wranglin’ more than one, you’ll need to send the extras back to your base or homestead. If that ain’t possible, then no deal—you can’t take on another. Any pet or mount you earn's gonna start out as a young’un, a baby, or a little sprout. Figured it’d be mighty fun watchin’ you two grow together as your trail gets longer and your legend gets bigger. Just holler at me before or after a session if you want your little sidekick to age up some. I want this to be a good time for the both of us, so keep this in mind: once that critter grows up, their maximum health doubles, and they get +2 to every raw stat. On top of that, they’ll gain +5 feet to whatever kind of movement they’ve got—walkin’, flyin’, swimmin’, diggin’, you name it. Now, funny thing about young companions… they’re quicker to learn new tricks, and they’ve got a better shot at pickin’ up unique habits or effects like developin’ a taste for strength potions and gettin’ real beefy over time. Sometimes that tiny terror of yours might be able to carry more passengers, or maybe it’s walkin’ around with a +6 Strength while it’s still just a little fella. Don’t underestimate a baby critter; they bite hardest when folks ain’t lookin’.",
          "These here critters count as companions, partner, and you can only ride with one companion at a time. If you end up wranglin’ more than one, you’ll need to send the extras back to your base or homestead. If that ain’t possible, then no deal—you can’t take on another. Any pet or mount you earn's gonna start out as a young’un, a baby, or a little sprout. Figured it’d be mighty fun watchin’ you two grow together as your trail gets longer and your legend gets bigger. Just holler at me before or after a session if you want your little sidekick to age up some. I want this to be a good time for the both of us, so keep this in mind: once that critter grows up, their maximum health doubles, and they get +2 to every raw stat. On top of that, they’ll gain +5 feet to whatever kind of movement they’ve got—walkin’, flyin’, swimmin’, diggin’, you name it. Now, funny thing about young companions… they’re quicker to learn new tricks, and they’ve got a better shot at pickin’ up unique habits or effects like developin’ a taste for strength potions and gettin’ real beefy over time. Sometimes that tiny terror of yours might be able to carry more passengers, or maybe it’s walkin’ around with a +6 Strength while it’s still just a little fella. Don’t underestimate a baby critter; they bite hardest when folks ain’t lookin’.",
          "These here critters count as companions, partner, and you can only ride with one companion at a time. If you end up wranglin’ more than one, you’ll need to send the extras back to your base or homestead. If that ain’t possible, then no deal—you can’t take on another. Any pet or mount you earn's gonna start out as a young’un, a baby, or a little sprout. Figured it’d be mighty fun watchin’ you two grow together as your trail gets longer and your legend gets bigger. Just holler at me before or after a session if you want your little sidekick to age up some. I want this to be a good time for the both of us, so keep this in mind: once that critter grows up, their maximum health doubles, and they get +2 to every raw stat. On top of that, they’ll gain +5 feet to whatever kind of movement they’ve got—walkin’, flyin’, swimmin’, diggin’, you name it. Now, funny thing about young companions… they’re quicker to learn new tricks, and they’ve got a better shot at pickin’ up unique habits or effects like developin’ a taste for strength potions and gettin’ real beefy over time. Sometimes that tiny terror of yours might be able to carry more passengers, or maybe it’s walkin’ around with a +6 Strength while it’s still just a little fella. Don’t underestimate a baby critter; they bite hardest when folks ain’t lookin’.",
          "Say there, if you’re willin’ to get your hands a bit dirty, I could sure use a hand cleanin’ out the stables where I keep the wilder stock. They spook easy, so you’ll need to keep ‘em calm while you work. Give me a DC 12 Animal Handling check. If you pass, I’ll pay you 60 gp. If you fail, you’ll take 5 damage (one of ‘em gets to kickin’ or bitin’) and you still walk away with 10 gp for the effort.",
          ],
  items: [
    {
      name: "Dolphin Delighter",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
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
      name: "War horse",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself, not sure how but they can.)
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
      name: "Velociraptor",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
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
      name: "Baby Purple Worm",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      Size: Huge (3x4)
      Creature Type: Monstrosity (Mount)
      Armor Class: 17
      Hit Points: 120
      Speed: 50, 30 Burrow
      Resistances: Poison & nonmagical Bludgeoning
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
      Maw Rider: Rider’s weapon attacks deal an additional rider damage die on creatures that are prone, surprised, or underground.
      Child Action
      POWER CHOP: On hit, rider’s attack deals an additional extra 3 rider damage die.
      Teen Action
      Burrow Bash: Rider attacks a target in difficult terrain, auto-critting on hit.
      Adult Action
      Quake Assist: Range 30ft radius, targets must make a DC 14 CON save or be stunned for 1 turn including rider.`,
    },
    {
      name: "Woolly Mammoth",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: `
      Type of Companion: Helpers (This NPC boost either skills, stats, or how you might defend yourself)
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
      name: "Plesiosaurus",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `
      Type of Companion: Helpers (This NPC boost either skills, stats, or how you might defend yourself)
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
      name: "Hippogriff",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `
      Type of Companion: Helpers (This NPC boost either skills, stats, or how you might defend yourself)
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
      name: "Pegasus",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself, not sure how but they can.)
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
      name: "Charlatan's Die",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: "Whenever you roll this six-sided die, you can control which number it rolls.",
    },
    {
      name: "Medal of the Wetlands",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "When you use an action to trace the edge of this medal, difficult terrain doesn’t cost you extra movement for 1 hour. Once this property has been used, it can’t be used again, and the medal becomes nonmagical.",
    },
    {
      name: "Feather of Diatryma Summoning",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This bright plume is made from the feather of a diatryma (pronounced dee-ah-TRY-mah), a Large, colorful, flightless bird native to the Underdark. If you use an action to speak the command word and throw the feather into a Large unoccupied space on the ground within 5 feet of you, the feather becomes a living diatryma for up to 6 hours, after which it reverts to its feather form. It reverts to feather form early if it drops to 0 hit points or if you use an action to speak the command word again while touching the bird.
When the diatryma reverts to its feather form, the magic of the feather can't be used again until 7 days have passed.
The diatryma uses the statistics of an axe beak, except that its beak deals piercing damage instead of slashing damage. The creature is friendly to you and your companions, and it can be used as a mount. It understands your languages and obeys your spoken commands. If you issue no commands, the diatryma defends itself but takes no other actions.`,
    },
    {
      name: "Figurine of Wondrous Power",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `A Figurine of Wondrous Power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manuel for the creature's statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.
===PLEASE PICK ONE OF THESE===
Bronze Griffon (Rare). This bronze statuette is of a griffon rampant. It can become a griffon for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed.
Ebony Fly (Rare). This ebony statuette is carved in the likeness of a horsefly. It can become a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 days have passed.
Golden Lions (Rare). These gold statuettes of lions are always created in pairs. You can use one figurine or both simultaneously. Each can become a lion for up to 1 hour. Once a lion has been used, it can't be used again until 7 days have passed.
Ivory Goats (Rare). These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows
-The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.
-The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.
-The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the net 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.
Marble Elephant (Rare). This marble statuette is about 4 inches high and long. It can become an elephant for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed.
Onyx Dog (Rare). This onyx statuette of a dog can become a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed.
Serpentine Owl (Rare). This serpentine statuette of an owl can become a giant owl for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.`,
    },
    {
      name: "Prehistoric Figurines of Wondrous Power",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world.
As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature’s statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.
===
Kyanite Pteranodon (Rare). This figurine becomes a pteranodon for up to 8 hours. If your size is Medium or smaller, you can ride the pteranodon as a mount. Once it has been used, it can’t be used again until 7 days have passed.`,
    },
    {
      name: "Prehistoric Figurines of Wondrous Power",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world.
As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature’s statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.
===
Pyrite Plesiosaurus (Uncommon). This figurine becomes a plesiosaurus for up to 12 hours and can be ridden as a mount. Once it has been used, it can’t be used again until 4 days have passed.
While you are riding the plesiosaurus, you can use it to cast Water Breathing at will.`,
    },
    {
      name: "Saddle of the Cavalier",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
    },
    {
      name: "Figurine of Wondrous Power",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `A Figurine of Wondrous Power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manuel for the creature's statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.
Obsidian Steed (Very Rare). This polished obsidian horse can become a nightmare for up to 24 hours. The nightmare fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed.
If you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.`,
    },
    {
      name: "Prehistoric Figurines of Wondrous Power",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world.
As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature’s statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.
===
Carnelian Triceratops (Very Rare). This figurine becomes a triceratops for up to 6 hours and can be ridden as a mount. Once it has been used, it can’t be used again until 10 days have passed.`,
    }
  ],
};
