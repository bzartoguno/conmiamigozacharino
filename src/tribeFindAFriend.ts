import { Tribe } from "./types";

export const tribeFindAFriend: Tribe = {
  name: "Find a Friend",
  owner: "Fran",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          ],
  items: [
    {
      name: "Amber (Kalashtar, Psychic human)",
      price: 0,
      description: `Amber is a girl failure. Due to her some 'family' history and clumsy nature she has picked up a few minor psionic abilities like telepathy and a bit of clairvoyance.
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      Special Abilities: I'm sorry what were you saying? (Amber can blank out a weak willed creature's mind for a short time making them unable to act or remember anything for 1 round, once per day)
      Highest Stat: +2 Intelligence
      Con: May occasionally be overwhelmed by large crowds.`,
    },
    {
      name: "Jade (Teoran)",
      price: 0,
      description: `Jade is a quite person who prefers to stay in the background. He doesn't like to talk at all he'll just nod or shake his head. Though he does have a knack for being in the right place at the right time for protecting his charges.
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      Special Abilities: Get down Mr. President (Once per day Jade can take a hit for you that would drop you to 0 HP, he takes the damage instead and you remain at HP your current health)
      Highest Stat: +2 Constitution
      Con: Jade has a fear of large bodies water like lakes, rivers, and oceans.`,
    },
    {
      name: "Johnny boi (Dwarf)",
      price: 0,
      description: `Johnny is an odd fellow, he likes monsters more then people. He'll ramble on for hours on just about any monster and how they evolved, what they eat, and how they hunt. He is a bit socially awkward but means well.
      Type of Companion: Helpers (This NPC boost either skills, stats, or can effect shops and other NPCs)
      Boosts: Animal Handling and Nature Skills now have advantage when Johnny is around.
      Special Abilities: Monster Lore (Johnny can identify monsters and give you information about them after clearly looking at them)
      Highest Stat: +2 Wisdom
      Con: Depending on how fluffy the creature is Johnny may care more about it then you.`,
    },
    {
      name: "Kip, Mapach (Humanoid Racoon)",
      price: 0,
      description: `Kip is a part-timer for Runestone Relay as one of a reporters. Always looking for a good story and hopes that joining up with a adventuring party will give him the scoop of a lifetime. Tho he can get carried away when something sparkly is nearby.
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      Special Abilities: Going in the papers (Once per day Kip can write up a short article about you and your adventures that gets published in the Runestone Relay, giving you bit of fame in the nearby area.)
      Highest Stat: +2 Charisma
      Con: Kip is easily distracted by shiny objects and may become drawn towards on them for a short time.`,
    },
    {
      name: "Phil & Bill (Faries)",
      price: 0,
      description: `Phil & Bill, are duo of henchmen that use to work for Fairies of Flora but were let go due to their bumbling nature. They mean well but tend to mess things up before they get better
      Type of Companion: Helpers (This NPC boost either skills, stats, or can effect shops and other NPCs)
      Boosts: Acrobatics and Stealth skills now have advantage when both Phil & Bill are around.
      Special Abilities: We're on it Boss (Once per day you can hand off a task to Phil & Bill, they will take care of it for you while you focus on other things)
      Highest Stat: +2 Dexterity
      Con: They only response if you talk to them in a mobster accent.`,
    },
    {
      name: "Warlock Homes (Human)",
      price: 0,
      description: `Warlock Homes is are longest resident here at Find a Friend. He's a bit of a detective type always looking to solve mysteries and puzzles stuff like that but hasn't quite figured out how to do it talked to people properly.
      Type of Companion: Helpers (This NPC boost either skills, stats, or can effect shops and other NPCs)
      Boosts: Investigation and History Skills now have advantage when Warlock Homes is around.
      Special Abilities: Warlock Homes, I have a case for you (Once per day Warlock Homes can solve a mystery or puzzle for you)
      Highest Stat: +2 Intelligence
      Con: Will call everyone 'Watson' regardless of their name.`,
    },
    {
      name: "Wilford, Tortle (Humanoid turtle)",
      price: 0,
      description: `Wilford is one of the oldest tortles around older then most elves really. and in his waxing years he wants to pick traveling the world, again, to see what's new out there. Before he kicks the bucket.
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      Special Abilities: It's been so long how have you been? (While Wilford is with you all prices at shops are halved, except for autiontion house, black market, and goblinn market.)
      Highest Stat: +2 Charisma
      Con: Wilford is quite old and increases travel time between cities and towns by 2 days, regardless of distance.`,
    },
    {
      name: "Sancho, Cyclop (One eyed giant)",
      price: 0,
      description: `Sancho is a bit of a softy. Not much going on up his his big'o head, but he means well. He really likes helping out, just that you need to really explain things to him simply. Else he might get overwhelmed and start to cry.
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      Special Abilities: Sancho Throw (Once per day Sancho can pick up attempt a grapple check on a medium or smaller creature and then throw them up to 80 feet in a straight line, dealing 3d6+6 bludgeoning damage on impact.)
      Highest Stat: +6 Strength
      Con: Sancho really likes hugs and may attempt to hug anyone when he people tell him that he did a good job`,
    },
    {
      name: "Destry, (Half wood elf)",
      price: 0,
      description: `Destry is a cowgirl on a mission, you see when she was left out in the desert to die she found a gun made out the horns of a demon and angel's halo. Since then she's been on a quest to find out more about the gun and it's origins. 
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      Special Abilities: Go back to where you came from (Once per day Destry can banish a fiend or celestial creature back to their home plane, the creature must make a DC 15 Charisma saving throw or be banished.)
      Highest Stat: +2 Dexterity
      Con: Destry has a habit of calling everyone partner and claims that her gun talks to her.`,
    },
  ],
};
