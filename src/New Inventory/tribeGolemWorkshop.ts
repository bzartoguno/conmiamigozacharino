import { Item, Tribe } from "../types";

export interface GolemWorkshopItem extends Item {
  priceText?: string;
}

export const tribeGolemWorkshop: Tribe & { items: GolemWorkshopItem[] } = {
  name: "Golem Workshop",
  owner: "Goldhand Redrockson",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "Sometimes I lay awake at night because I have nightmares about being underwater and that one of my beloved golems opens up a bag of holding and I get sucked in, killing me.",
          "Why Hello there! Welcome to Golem Workshop, we have handymans for hire!",
          "I don't suppose your interested in Golems are you?",
          "Hehe Crazy? I was crazy once, I locked myself in a bunker, a stone bunker, a stone bunker with a comatose elf, and comatose elf make me crazy. Hehe.",
          "Oh I'll be with you in just a moment, I wouldn't want this golem to contiunually sit at the bottom of a well pumping water for 240 years with out taking a break.",
          "Oh you just in time, if you could help me jump start this golem that would be wonderful! Just give me a DC 14 Arcana check and we'll get him up and running If you succeed, I’ll pay you 20 gp. If you fail, get 5 gp.",

          "Sometimes I lay awake at night because I have nightmares about being underwater and that one of my beloved golems opens up a bag of holding and I get sucked in, killing me.",
          "Why Hello there! Welcome to Golem Workshop, we have handymans for hire!",
          "I don't suppose your interested in Golems are you?",
          "Hehe Crazy? I was crazy once, I locked myself in a bunker, a stone bunker, a stone bunker with a comatose elf, and comatose elf make me crazy. Hehe.",
          "Oh I'll be with you in just a moment, I wouldn't want this golem to contiunually sit at the bottom of a well pumping water for 240 years with out taking a break.",
          "Sometimes I lay awake at night because I have nightmares about being underwater and that one of my beloved golems opens up a bag of holding and I get sucked in, killing me.",
          "Why Hello there! Welcome to Golem Workshop, we have handymans for hire!",
          "I don't suppose your interested in Golems are you?",
          "Hehe Crazy? I was crazy once, I locked myself in a bunker, a stone bunker, a stone bunker with a comatose elf, and comatose elf make me crazy. Hehe.",
          "Oh I'll be with you in just a moment, I wouldn't want this golem to contiunually sit at the bottom of a well pumping water for 240 years with out taking a break.",
          "Sometimes I lay awake at night because I have nightmares about being underwater and that one of my beloved golems opens up a bag of holding and I get sucked in, killing me.",
          "Why Hello there! Welcome to Golem Workshop, we have handymans for hire!",
          "I don't suppose your interested in Golems are you?",
          "Hehe Crazy? I was crazy once, I locked myself in a bunker, a stone bunker, a stone bunker with a comatose elf, and comatose elf make me crazy. Hehe.",
          "Oh I'll be with you in just a moment, I wouldn't want this golem to contiunually sit at the bottom of a well pumping water for 240 years with out taking a break.",
          
          ],
  items: [
    {
      name: "Siege Golem",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: `
      These Golems are basically mechs
      Size- Gigantic  
      Type- Construct (Golem)
      AC- 18
      HP- 250
      Speed 45 ft.
      STR (+6)
      DEX (+4)
      CON (+10)
      INT (0)
      WIS (0)
      CHA (0)
      Creature Ability- Last-ditch effort (Can only be triggered if HP is lower than 83). All creature attacks have an advantage. However, this will overheat the core, dealing 2d6 fire damage to the mech and everyone inside.
      -Actions-
      Cannon (Range attack 120) +8 to hit, Hit 2d12 +6 Bludgeoning damage. Firing this cannon twice in a row will begin to overheat the Mech and deal 1d6 fire damage to everyone in the Mech.
      Punch (Melee attack) +12 to hit, Hit 4d12 +6 Bludgeoning damage.
      Quake Stomp (Range AOE attack 60): All creatures on the ground other than those in the mech must succeed on a CON SAV of 19 or be knocked prone. If a creature is already prone, they are now stunned.`,
    },
    {
      name: "Build a Base",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Talk to DM for more info.",
      priceText: "Varies",
    },
    {
      name: "Landscaping or Clay Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem and clear out and smooth out rough terrain, but can also be molded and baked to look like an intimidating statue to keep at your house.",
    },
    {
      name: "Vehicle Operator or Crystal Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem is on the smaller side but can operate vehicals or mounts, but can also be trimmed and cut down to fit where any gems can normally fit onto any item.",
    },
    {
      name: "Carpenter or Wood Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem can make any non-magical complex item out of non-magical wooden, but it can also be used for gathering wood, plants, and other herbs.",
    },
    {
      name: "Mason or Stone Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem can make any non-magical complex item out of non-magical stone, but it can also be used to mine for materials.",
    },
    {
      name: "Smith or Iron Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem can make any non-magical complex item out of non-magical metal, but it can also be used to mine for materials at greater speed.",
    },
    {
      name: "Builder or Steel Golem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This golem can build any structure out of any reasonable material along with aspects from creatures, but it can also be used to guard private places for long periods of time.",
    },
    {
      name: "Unprocessed Supplies",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "Custom Golem Construction",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "Scribe's Pen",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: `You can use this pen to write on any surface. You decide whether the writing is visible or invisible, but the writing is always visible to a person with the Mark of Scribing.
Any creature with the Mark of Scribing can use an action to touch the invisible writing, making it visible to all.
If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days.`,
    },
    {
      name: "Vox Seeker",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying vox seeker stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed.
Vox Seeker
Tiny construct, unaligned
Armor Class 14 (natural armor)
Hit Points 7 (2d4 + 2)
Speed 20 ft., climb 20 ft.
STR | DEX | CON | INT | WIS | CHA
2 (-4) | 10 (+0) | 12 (+1) | 1 (-5) | 10 (+0) | 1 (-5)
Damage Immunities: poison, psychic
Condition Immunities: blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned
Senses: blindsight 60 ft. (blind beyond this radius), passive Perception 10
Languages: —
Challenge: 1/8 (25 XP)
Voice Lock. The vox seeker must move toward and attack the source of the nearest voice within 60 feet of it, to the exclusion of all other targets, for as long as it remains operational.
Spider Climb. The vox seeker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
Actions
Pincer. Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage plus 3 lightning damage.`,
    },
    {
      name: "Lyre of Building",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While holding this lyre, you can cast Mending as an action. You can also play the lyre as a reaction when an object or a structure you can see within 300 feet of you takes damage, causing it to be immune to that damage and any further damage of the same type until the start of your next turn.
In addition, you can play the lyre as an action to cast Fabricate, Move Earth, Passwall, or Summon Construct, and that spell can't be cast from it again until the next dawn.`,
    },
    {
      name: "Rod of the Vonindod",
      rarity: "Rare",
      itemType: "Rod",
      attunment: true,
      price: 1000,
      description: `The fire giant duke Zalto hired a wizard to craft several of these adamantine rods. Each measures 4 feet long, weighs 100 pounds, and is sized to fit comfortably in a fire giant's hand. The rod has two prongs at one end and a molded handle grip on the opposite end.
The rod has 10 charges and regains 1d6 + 4 of its expended charges daily at dawn. As an action, you can grasp it by the handle and expend 1 charge to cast the Locate Object spell from it. When the rod is used to detect objects made of adamantine, such as fragments of the Vonindod construct, its range increases to 10 miles.`,
    },
    {
      name: "Sensory Stone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This small, smooth stone contains the essence of a single experience.
As an action, you or a willing creature you designate can touch the stone and experience the sensation as if it happened to the designated creature. The illusory experience is fleeting and harmless, however real it might feel in the moment.
Record Sensation. You can use your reaction to record a short sensation lasting no longer than 6 seconds experienced by a creature of your choice within 30 feet of yourself, infusing the essence of the experience into the stone. This replaces any sensation already stored within the stone.
Siphon Sensation. As a bonus action, you can draw on the stone's magic to end the charmed or frightened condition on yourself, destroying the stone in the process.`,
    },
    {
      name: "Speaking Stone",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `The key to long-distance, virtually instantaneous communication across Khorvaire is House Sivis's network of message stations. Each station contains at least one
speaking stone
, which is carved from a Siberys dragonshard and inscribed with arcane symbols that uniquely identify it. If you're a gnome with the Mark of Scribing, you can touch the stone and use an action to cast the
Sending
spell from it. The target is any other
speaking stone
whose location or unique sequence of symbols you know. A creature within 5 feet of the stone hears the message as if they were the target.
In a Sivis message station, a gnome is always on duty by the speaking stone, listening for messages that might come in and transcribing them for delivery to their intended recipients.`,
    }
  ],
};
