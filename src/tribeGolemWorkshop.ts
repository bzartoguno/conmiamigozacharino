import { Item, Tribe } from "./types";

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
          "Sometimes I lay awake and night becuase I have nightmares about being underwater and that one of my beloved golems opens up a bag of holding and I get sucked in killing me.",
          "Why Hello there! Welcome to Golem Workshop, we have handymans for hire!",
          "I don't suppose your interested in Golems are you?",
          "Hehe Crazy? I was crazy once, I locked myself in a bunker, a stone bunker, a stone bunker with a comatose elf, and comatose elf make me crazy. Hehe.",
          "Oh I'll be with you in just a moment, I wouldn't want this golem to contiunually sit at the bottom of a well pumping water for 240 years with out taking a break.",
          "Oh you just in time, if you could help me jump start this golem that would be wonderful! Just give me a DC 14 Arcana check and we'll get him up and running If you succeed, I’ll pay you 20 gp. If you fail, get 5 gp.",
          ],
  items: [
    {
      name: "Landscaping or Clay Golem",
      price: 300,
      description: "This golem and clear out and smooth out rough terrain, but can also be molded and baked to look like an intimidating statue to keep at your house.",
    },
    {
      name: "Vehicle Operator or Crystal Golem",
      price: 400,
      description: "This golem is on the smaller side but can operate vehicals or mounts, but can also be trimmed and cut down to fit where any gems can normally fit onto any item.",
    },
    {
      name: "Carpenter or Wood Golem",
      price: 500,
      description: "This golem can make any non-magical complex item out of non-magical wooden, but it can also be used for gathering wood, plants, and other herbs.",
    },
    {
      name: "Mason or Stone Golem",
      price: 600,
      description: "This golem can make any non-magical complex item out of non-magical stone, but it can also be used to mine for matirals.",
    },
    {
      name: "Smith or Iron Golem",
      price: 700,
      description: "This golem can make any non-magical complex item out of non-magical metal, but it can also be used to mine for matirals at greater speed.",
    },
    {
      name: "Builder or Steel Golem",
      price: 800,
      description: "This golem can build any strucker out of any reasonable material along with aspets form creatures, but it can also be used to guard private places to long periods of time.",
    },
    {
      name: "Siege Golem",
      price: 1000,
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
      Cannon (Range attack 120) +8 to hit, Hit 2d12 +6 Blungening damage. Firing this cannon twice in a row will begin to overheat the Mech and deal 1d6 fire damage to everyone in the Mech.
      Punch (Melee attack) +12 to hit, Hit 4d12 +6 Blungening damage.
      Quake Stomp (Range AOE attack 60): All creatures on the ground other than those in the mech must succeed on a CON SAV of 19 or be knocked prone. If a creature is already prone, they are now stunned.`,
    },
    {
      name: "Build a Base",
      price: 0,
      priceText: "Varies",
      description: "Full-site planning, from anchor stones to final battlements.",
    },
  ],
};
