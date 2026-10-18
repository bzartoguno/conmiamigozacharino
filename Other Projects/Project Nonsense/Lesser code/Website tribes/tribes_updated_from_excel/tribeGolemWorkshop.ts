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
      name: "Stone of Golorr",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The
Stone of Golorr
is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.
Random Properties.
The
Stone of Golorr
has the following properties, determined by rolling on the tables in the "Artifacts" section in chapter 7 of the
Dungeon Master's Guide
:
1 minor beneficial property
1 minor detrimental property
Legend Lore.
The
Stone of Golorr
has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the
Legend Lore
spell.
By using the stone to cast
Legend Lore
, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.
The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.
Failed Memory.
When your attunement to the
Stone of Golorr
ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A
Remove Curse
spell cast on you has a 20 percent chance of restoring the lost knowledge and memories, and a
Greater Restoration
spell does so automatically.
Sentience.
The
Stone of Golorr
is a sentient lawful evil magic item with an Intelligence or 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. Io addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.
The
Stone of Golorr
hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see "Sentient Magic Items" in chapter 7 of the
Dungeon Master's Guide
).
Personality.
The
Stone of Golorr
has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.
Destroying the Stone.
While in stone form the aboleth isn't a creature and isn't subject to effects that target creatures. The
Stone of Golorr
is immune to all damage. Casting an
Antipathy/Sympathy
spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed. and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.`,
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
      name: "Crystal Ball",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The typical
crystal ball
, a very rare item, is about 6 inches in diameter. While touching it, you can cast the
Scrying
spell (save DC 17) with it.
The following
crystal ball
variants are legendary items and have additional properties.
Crystal Ball of Mind Reading.
You can use an action to cast the
Detect Thoughts
spell (save DC 17) while you are scrying with the crystal ball, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this
Detect Thoughts
to maintain it during its duration, but it ends if scrying ends.
Crystal Ball of Telepathy.
While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell's sensor. You can also use an action to cast the
Suggestion
spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this
Suggestion
to maintain it during its duration, but it ends if scrying ends. Once used, the
Suggestion
power of the
crystal ball
can't be used again until the next dawn.
Crystal Ball of True Seeing.
While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.`,
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
