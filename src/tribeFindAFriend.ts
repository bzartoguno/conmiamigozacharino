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
          "",
          "",
          "",
          "",
          "",
          "Give me a DC 14 Insight check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Amber (Kalashtar, Psychic human)",
      price: 0,
      description: `Amber is a girl failure. Due to some 'family' history and her clumsy nature, she has picked up a few minor psionic abilities like telepathy and a bit of clairvoyance.
      
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      
      Special Abilities: I'm sorry what were you saying? (Amber can blank out a weak-willed creature's mind for a short time, making them unable to act or remember anything for 1 round, once per day)
      
      Highest Stats: +2 Intelligence & Wisdom
      
      Con: May occasionally be overwhelmed by large crowds.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Jade (Teoran, Skilled Superhuman)",
      price: 0,
      description: `Jade is a quiet person who prefers to stay in the background. He doesn't like to talk at all; he'll just nod or shake his head. Though he does have a knack for being in the right place at the right time to protect his charges.
      
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      
      Special Abilities: Get down Mr. President (Once per day Jade can take a hit for you that would drop you to 0 HP, he takes the damage instead and you remain at your current HP)
      
      Highest Stats: +2 Strength & Constitution
      
      Con: Jade has a fear of large bodies of water like lakes, rivers, and oceans.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Johnny boi (Dwarf)",
      price: 0,
      description: `Johnny is an odd fellow; he likes monsters more than people. He'll ramble on for hours about any monster—how they evolved, what they eat, and how they hunt. He is a bit socially awkward but means well.
      
      Type of Companion: Helpers (This NPC boosts either skills or stats, or can affect shops and other NPCs)
      
      Boosts: Animal Handling and Nature Skills now have advantage when Johnny is around.
      
      Special Abilities: Monster Lore (Johnny can identify monsters and give you information about them after clearly looking at them)
      
      Highest Stats: +2 Constitution & Wisdom
      
      Con: Depending on how fluffy the creature is Johnny may care more about it than you.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Kip, Mapach (Humanoid Racoon)",
      price: 0,
      description: `Kip is a part-timer for Runestone Relay as one of the reporters. Always looking for a good story and hopes that joining up with an adventuring party will give him the scoop of a lifetime. Though he can get carried away when something sparkly is nearby.
      
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      
      Special Abilities: Going in the papers (Once per day Kip can write up a short article about you and your adventures that gets published in the Runestone Relay, giving you a bit of fame in the nearby area.)
      
      Highest Stat: +4 Charisma
      
      Con: Kip is easily distracted by shiny objects and may become drawn toward them for a short time.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Phil & Bill (Fairies)",
      price: 0,
      description: `Phil & Bill are a duo of henchmen that used to work for Fairies of Flora but were let go due to their bumbling nature. They mean well but tend to mess things up before they get better.
      
      Type of Companion: Helpers (This NPC boosts either skills or stats, or can affect shops and other NPCs)
      
      Boosts: Acrobatics and Stealth skills now have advantage when both Phil & Bill are around.
      
      Special Abilities: We're on it Boss (Once per day you can hand off a task to Phil & Bill, they will take care of it for you while you focus on other things)
      
      Highest Stats: +2 Dexterity & Wisdom
      
      Con: They only respond if you talk to them in a mobster accent.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Warlock Homes (Human)",
      price: 0,
      description: `Warlock Homes is our longest resident here at Find a Friend. He's a bit of a detective type, always looking to solve mysteries and puzzles, but hasn't quite figured out how to talk to people properly.
      
      Type of Companion: Helpers (This NPC boost either skills, stats, or can effect shops and other NPCs)
      
      Boosts: Investigation and History Skills now have advantage when Warlock Homes is around.
      
      Special Abilities: Warlock Homes, I have a case for you (Once per day Warlock Homes can solve a mystery or puzzle for you)
      
      Highest Stat: +4 Intelligence 
      
      Con: Will call everyone 'Watson' regardless of their name.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Wilford, Tortle (Humanoid turtle)",
      price: 0,
      description: `Wilford is one of the oldest tortles around, older than most elves really. In his waxing years he wants to pick up traveling the world again to see what's new out there before he kicks the bucket.
      
      Type of Companion: Gathers (After you have proven that you can gather certain types of materials, you can send this NPC to gather that material for you instead of going yourself)
      
      Special Abilities: It's been so long how have you been? (While Wilford is with you all prices at shops are halved, except for auction house, black market, and goblin market.)
      
      Highest Stats: +2 Wisdom & Charisma
      
      Con: Wilford is quite old and increases travel time between cities and towns by 2 days, regardless of distance.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Sancho, Cyclop (One eyed giant)",
      price: 0,
      description: `Sancho is a bit of a softie. Not much going on up in his big ol' head, but he means well. He really likes helping out, just that you need to explain things to him simply; otherwise he might get overwhelmed and start to cry.
      
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      
      Special Abilities: Sancho Throw (Once per day Sancho can pick up, attempt a grapple check on a medium or smaller creature, and then throw them up to 80 feet in a straight line, dealing 3d6+6 bludgeoning damage on impact.)
      
      Highest Stat: +6 Strength
      
      Con: Sancho really likes hugs and may attempt to hug anyone when people tell him that he did a good job.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Destry, (Half wood elf)",
      price: 0,
      description: `Destry is a cowgirl on a mission; you see, when she was left out in the desert to die she found a gun made out of the horns of a demon and an angel's halo. Since then she's been on a quest to find out more about the gun and its origins. 
      
      Type of Companion: Bodyguard (This is a combat NPC who will fight alongside you making fights slightly easier.)
      
      Special Abilities: Go back to where you came from (Once per day Destry can banish a fiend or celestial creature back to their home plane, the creature must make a DC 15 Charisma saving throw or be banished.)
      
      Highest Stats: +2 Dexterity & Constitution
      
      Con: Destry has a habit of calling everyone partner and claims that her gun talks to her.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Rick Shades, (Changling)",
      price: 0,
      description: `Rick is a bit of an oddball in that he grows in power with every friend he makes; the reason he isn't the strongest person is, well, because he comes on a bit strong and scares people away.
      
      Type of Companion: Wildcard (Can swap to any type of Companion at any time.)
      
      Special Abilities: Soulmates (Allows him to copy the powers aka spells, class actions, and abilities of anyone who becomes friends with him, but this can be taken away if a friend severs their bond.)
      
      Highest Stats: +1 Strength, Dexterity, & Constitution
      
      Con: Rick can be a bit overenthusiastic about making new friends and may make several faux pas if he has a chance to make a new friend.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "A. Joe [Average Joe], (Goliath)",
      price: 0,
      description: `Joe is quite normal-looking; he looks a bit bland, in all honesty. Though he is filled with wanderlust, he wants to enjoy it with others at his side instead of being off on his own.
      
      Type of Companion: Wildcard (Can swap to any type of Companion at any time.)
      
      Special Abilities: A bit about everything (Joe can pull on a well of knowledge and instantly know the average amount any given person would know in that field of study, including medicine, sword fighting, spell work, smithing, city building, etc.)
      
      Highest Stats: +1 Intelligence, Wisdom, & Charisma
      
      Con: Joe is a bit quiet because, well, whenever he gets curious he goes on what he calls a 'wiki rabbit hole deep dive.' No clue what it means, so just keep touching base with him to make sure his head isn't off in the clouds.
      
      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
    {
      name: "Murphy, (Jinx, extremely unluck human)",
      price: 0,
      description: `Murphy is a bit of an optimist; things have never gone well for Murphy nor will they, because the universe hates every Jinx, including Murphy. I cannot describe the Rube Goldberg machine that comes together to kick Murphy down the stairs or comically throw a pie in his face. But through it all Murphy keeps on smiling. 
      
      Type of Companion: Wildcard (Can swap to any type of Companion at any time.)
      
      Special Abilities: Uno Reverse! (Once per session you may make a Nat 1 become a Nat 20 or a Nat 20 become a Nat 1! However this effect stays in play for the rest of the session.)
      
      Highest Stats: NA
      
      Con: Just being near Murphy is a bad idea, thankfully they always have a bag on hand with just what they need to barely get out of the situation.

      Remember, you can only have one companion at a time. If you have more than one, you will need to send them to your base/home. If that's not possible, then you can't get one.`,
    },
  ],
};
