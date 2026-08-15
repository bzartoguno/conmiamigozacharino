import { Item, Tribe } from "./types";

interface ApplegarthItem extends Item {
  priceLabel?: string;
}

interface ApplegarthTribe extends Omit<Tribe, "items"> {
  items: ApplegarthItem[];
}

export const tribeApplegarthGuild: ApplegarthTribe = {
  name: "Applegarth Guild",
  owner: "John Applegarth",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "You know I used to be an adventurer like you, but then I took an arrow to the knee.",
          "Hey there! Welcome to the Applegarth Guild! You got a problem? We got a person!",
          "Did you know that adventurers are more likely to encounter flying alligators than the average citizen? Neither did I 'til last week.",
          "Originally we were going to call this place 'Tony's place,' and everyone we hired had to be named Tony, we'd have big Tony, little Tony, Tony two shoes, regular Tony. But HR said that was name discrimination so we didn't go through with that.",
          "We know that finding a job is the hardest part to get your foot in the door, so let us do the legwork for you, if you're interested.",
          "I don't know about you, but my brain is kind of melting with all these files. If you're not too busy, I wouldn't mind a helping hand. If you can make a go of it, give me a DC 14 Investigation check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          
          "You know I used to be an adventurer like you, but then I took an arrow to the knee.",
          "Hey there! Welcome to the Applegarth Guild! You got a problem? We got a person!",
          "Did you know that adventurers are more likely to encounter flying alligators than the average citizen? Neither did I 'til last week.",
          "Originally we were going to call this place 'Tony's place,' and everyone we hired had to be named Tony, we'd have big Tony, little Tony, Tony two shoes, regular Tony. But HR said that was name discrimination so we didn't go through with that.",
          "We know that finding a job is the hardest part to get your foot in the door, so let us do the legwork for you, if you're interested.",
          "You know I used to be an adventurer like you, but then I took an arrow to the knee.",
          "Hey there! Welcome to the Applegarth Guild! You got a problem? We got a person!",
          "Did you know that adventurers are more likely to encounter flying alligators than the average citizen? Neither did I 'til last week.",
          "Originally we were going to call this place 'Tony's place,' and everyone we hired had to be named Tony, we'd have big Tony, little Tony, Tony two shoes, regular Tony. But HR said that was name discrimination so we didn't go through with that.",
          "We know that finding a job is the hardest part to get your foot in the door, so let us do the legwork for you, if you're interested.",
          "You know I used to be an adventurer like you, but then I took an arrow to the knee.",
          "Hey there! Welcome to the Applegarth Guild! You got a problem? We got a person!",
          "Did you know that adventurers are more likely to encounter flying alligators than the average citizen? Neither did I 'til last week.",
          "Originally we were going to call this place 'Tony's place,' and everyone we hired had to be named Tony, we'd have big Tony, little Tony, Tony two shoes, regular Tony. But HR said that was name discrimination so we didn't go through with that.",
          "We know that finding a job is the hardest part to get your foot in the door, so let us do the legwork for you, if you're interested.",
          
          ],
  items: [
    {
      name: "Mighty Servant of Leuk-o",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Named for the warlord who infamously employed it, the
Mighty Servant of Leuk-o
is a fantastically powerful, 10-foot-tall machine that turns into an animate construct when piloted. Crafted of a gleaming black alloy of unknown origin, the servant is often described as a combination of a disproportioned dwarf and an oversized beetle. The servant contains enough space for 1 ton of cargo and a crew compartment within, from which up to two Medium creatures can control it — and potentially execute a spree of unstoppable destruction.
Tales of the servant's origins involve more conjecture than fact, often referring to otherworldly beings, the mysterious Barrier Peaks in Oerth, and the supposedly related device known as the
Machine of Lum the Mad
. The best details on the device's origins and operation can be found in the
Mind of Metal
, a tome of artificer's secrets that connects the device to the traditions of the lost Olman people, and which was written by Lum the Mad's several times over granddaughter, Lum the Maestro, while she reconstructed the long disassembled
Mighty Servant of Leuk-o
.
Dangerous Attunement.
Two creatures can be attuned to the servant at a time. If a third creature tries to attune to it, nothing happens.
The servant's controls are accessed by a hatch in its upper back, which is easily opened while there are no creatures attuned to the artifact.
Attuning to the artifact requires two hours, which can be undertaken as part of a long rest, during which time you must be inside the servant, interacting with its controls. While crew members are attuning themselves, any creature or structure outside and within 50 feet of the servant has a 25 percent chance of being accidentally targeted by one of its Destructive Fist attacks once during the attunement. This process must be undergone every time a creature attunes itself to the artifact.
Controlling the Servant.
While any creatures are attuned to the artifact, attuned creatures can open the hatch as easily as any other door. Other creatures can open the hatch as an action with a successful DC 25 Dexterity check using thieves' tools. A
Knock
spell cast on the hatch also opens it until the start of the caster's next turn.
A creature can enter or exit through the hatch by spending 10 feet of movement. Those inside the servant have total cover from effects originating outside it. The controls within it allow creatures to see outside without obstruction.
While you are inside the servant, you can command it by using the controls. During your turn (for either attuned creature), you can command it in the following ways:
Open or close the hatch (no action required, once per turn)
Move the servant up to its speed (no action required)
As an action, you can command the servant to take one of the actions in its stat block or some other action.
When a creature provokes an opportunity attack from the servant, you can use your reaction to command the servant to make one Destructive Fist attack against that creature.
While there are no attuned creatures inside the servant, it is an inert object.
Ghost in the Machine.
Upon his death, the soul of the mighty warlord Leuk-o was drawn into the artifact and has become its animating force. The servant has been known to attack or move of its own accord, particularly if doing so will cause destruction. Once every 24 hours, the servant, at the DM's discretion, takes one action while uncrewed.
If the servant loses half of its hit points or more, each creature attuned to it must succeed on a DC 20 Wisdom saving throw or be charmed for 24 hours. While charmed in this way, the creature goes on a destructive spree, seeking to destroy structures and attack any unattuned creatures within sight of the servant, starting with those threatening the artifact — preferably using the servant, if possible.
Self-Destruct.
By inputting a specific series of lever pulls and button presses, the servant's two crew members can cause it to explode. The self-destruct code is not revealed to crew members when they attune to the artifact. If the code is discovered (the DM determines how), it requires two attuned crew members to be inside the servant and spend their actions on 3 consecutive rounds performing the command. Should the crew members begin the process of entering the code, though, the servant uses its Ghost in the Machine property and turns the crew members against each other.
If the crew members successfully implement the code, at the end of the third round, the servant explodes. Every creature in a 100 foot-radius sphere centered on the servant must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 87 (25d6) force damage, 87 (25d6) lightning damage, and 87 (25d6) thunder damage. On a successful save, a creature takes half as much damage. Objects and structures in the area take triple damage. Creatures inside the servant are slain instantly and leave behind no remains.
This does not destroy the servant permanently. Rather, 2d6 days later, its parts — left arm, left leg, right arm, right leg, lower torso, and upper torso — drop from the sky in random places within 1,000 miles of the explosion. If brought within 5 feet of one another, the pieces reconnect and reform the servant.
Destroying the Servant.
The servant can be destroyed in two ways. After it has self-destructed, its disconnected pieces can be melted down in one of the forge-temples of its ancient Olman creators. Alternatively, if the servant strikes the
Machine of Lum the Mad
, both artifacts explode in an eruption that is three times the size and three times the damage as the servant's Self-Destruct property.
Mighty Servant of Leuk-o
Huge Construct
Armor Class
22 (natural armor)
Hit Points
310 (27d12 + 135)
Speed
60 ft.
STR
DEX
CON
INT
WIS
CHA
30 (+10)
14 (+2)
20 (+5)
1 (-5)
14 (+2)
10 (+0)
Saving Throws:
Wis +9, Cha +7
Skills:
Perception +9
Damage Resistances:
piercing, slashing
Damage Immunities:
acid, bludgeoning, cold, fire, lightning, necrotic, poison, psychic, radiant
Condition Immunities:
all conditions but invisible and prone
Senses:
blindsight 120 ft., passive Perception 19
Languages:
understands the languages of creatures attuned to it but can't speak
Challenge:
—
Proficiency Bonus:
+7
Immutable Existence.
The servant is immune to any spell or effect that would alter its form or send it to another plane of existence.
Magic Resistant Construction.
The servant has advantage on saving throws against spells and other magical effects, and spell attacks made against it have disadvantage.
Regeneration.
The servant regains 10 hit points at the start of its turn. If it is reduced to 0 hit points, this trait doesn't function until an attuned creature spends 24 hours repairing the artifact or until the artifact is subjected to lightning damage.
Standing Leap.
The servant's long jump is up to 50 feet and its high jump is up to 25 feet, with or without a running start.
Unusual Nature.
The servant doesn't require air, food, drink, or sleep.
Actions
Destructive Fist.
Melee or Ranged Weapon Attack
: +17 to hit, reach 10 ft. or range 120 ft., one target.
Hit
: 36 (4d12 + 10) force damage. If the target is an object, it takes triple damage.
Crushing Leap.
If the servant jumps at least 25 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the servant and must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 26 (4d12) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone.`,
    },
    {
      name: "Contact a Herald to Stay in Your Town for One Year",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: false,
      price: 10000,
      description: "A herald will come and live in your town for one year. During this time, they will train your guards rigorously and raise the town to a higher standard of living. They will also directly take control of the Reputation & Renown and Defence & Security branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also proactively participate in town events related to the branches they control.",
    },
    {
      name: "Feather Token",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical.",
    },
    {
      name: "Medal of Muscle",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "You can squeeze this medal tightly in the palm of your hand as an action. Doing so gives you advantage on Strength checks and Strength saving throws for 1 hour. Once this property has been used, it can’t be used again, and the medal becomes nonmagical.",
    },
    {
      name: "Hire a Professional Line-Stand for One Day (This is a real job people do I was surprised too)",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "They stand in queues for permits, tickets, or appointments. They’ll hold your place and hand it off to you at the right moment no bribery or forgery included.",
    },
    {
      name: "Hire a Muscle Crew for One Job",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "They pull stuck carts and wagons out of mud, snow, and sand. A small platoon of guards or just need a beefy hype squad they got you covered.",
    },
    {
      name: "Witchlight Watch",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This ornate pocket watch is fastened to the end of a gold chain. It glows with a faint golden light when opened, and it makes a soft ticking noise that can be heard only by the creature holding it. The face of the watch shows a miniature painting of the Witchlight Carnival ringed by a tiny henge, orbited at night by a mote of light small enough to slip through the eye of a needle. This light causes the henge to cast shadows, and these shadows allow the watch's owner to track the passage of time.
Carnival Setup and Takedown.
The creature attuned to the watch can use an action to initiate the packing up or the unpacking of the Witchlight Carnival, provided the creature and the carnival are on the same plane of existence. In the span of 1 hour, all objects that are elements of the carnival are magically whisked about until everything is packed up and ready for travel, or unpacked and assembled. The watch has no effect on creatures, which can move about freely and safely while the carnival is being set up or taken down. Once the process of packing up or unpacking the carnival begins, it can't be stopped until the task is complete. When the watch is used to pack up or unpack the carnival, this property cannot be used again until 8 hours have elapsed.
Additional Properties.
The pocket watch has the following additional properties:
While carrying the watch, the creature attuned to it can cast the
Fire Bolt
,
Invisibility
, or
Message
spell as an action, requiring no spell components and using Intelligence as the spellcasting ability. After the watch's
Invisibility
spell is cast, roll a d8; on a roll of 3 or 8, the watch can't be used to cast this spell again until the next dawn.
The creature attuned to the watch gains 30 pounds. This extra weight vanishes when the attunement ends.
The creature attuned to the watch must eat and drink eight times the normal amount each day.`,
    },
    {
      name: "Contact a Master Craftsperson to Stay in Your Town for One Year",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: "A master craftsperson will come and live in your town for one year. During this time, they will repair and improve your town. They will also directly take control of the Landscape/Wandering Titan and Industry & Craft branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also participate in town events related to the branches they control.",
    },
    {
      name: "Hire a Bounty Hunter for a Job",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "They will track down and capture an NPC and bring them to you, or go out and kill any monster for you. Depending on the difficulty of the target, you may need to send multiple bounty hunters.",
    },
    {
      name: "Charon's Token",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "Teleport to a town you have previously visited; one-time use.",
    },
    {
      name: "Hire a Butler, Maid, or Servant for a Month",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They will support you for four weeks. Obeys basic commands and chores so long as they are reasonable and doesn't harm themselves.",
    },
    {
      name: "Hire an Apology Courier (Local) for One Job",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They deliver awkward messages within the same town with discretion, tact, and a straight face. This is a person-to-person delivery, not a mail service—no long-distance routes or ongoing post.",
    },
    {
      name: "Hire an Intern for One Week",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They retrieve specific records, deliver copies, and verify citations or reference details exactly as requested. They research, interpretation, or investigation—only fetch and verify what you specify.",
    },
    {
      name: "Hire a Seamstress for One Week",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They patch tents, uniforms, cloaks, bedrolls, straps, and travel gear with practical durability in mind. This is repair work, and with the right tools and materials enchant armor and clothing.",
    },
    {
      name: "Hire a Stable Hand for One Month",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They feed, groom, muck stalls, and provide basic obedience training for mounts and pets. This is care and handling labor only—they do not sell or purchase mounts on your behalf.",
    },
    {
      name: "Hire a Nanny for One Month",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They watch kids, teach basic lessons, enforce manners, and keep little chaos-goblins from reinventing arson as a hobby. They will not teach combat techniques or offensive magic (yes, that includes Vicious Mockery).",
    },
    {
      name: "Hire a Scribe for One Month",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They copy contracts, organize ledgers, file permits, and witness signatures as an official neutral party. Great for keeping your paperwork clean, consistent, and hard to dispute later.",
    },
    {
      name: "Hire a Lawyer for One Month",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They will represent you in legal matters for one month. They can help with disputes, contracts, and other legal issues that may arise during your adventures.",
    },
    {
      name: "Hire a Biohazard Cleaner for One Job",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "They clean up blood, ooze, slime, ichor, and other adventurer-grade messes using masks, rags, bins, and strong stomachs. They don’t ask questions and just point them where you want them.",
    },
    {
      name: "Guild Contract hire Applegarth, Archivist, Dungeon Crawler, Navigation, or Jewelry Guild for a reasonable long-term job (please message me about what you would like so we can hash out the details)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(please message me about what you would like so we can hash out the details) (Custom contract terms available upon request.)",
      priceLabel: "Price may vary",
    },
    {
      name: "Contact a Sage to Stay in Your Town for One Year",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: "A sage will come and live in your town for one year. During this time, they will provide wisdom and advice to you and your citizens. They will also directly take control of the Economic & Trade and Reputation & Renown branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also participate in town events related to the branches they control.",
    }
  ],
};
