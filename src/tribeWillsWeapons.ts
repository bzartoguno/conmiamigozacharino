import { Tribe } from "./types";

export const tribeWillsWeapons: Tribe = {
  name: "Will's Weapons",
  owner: "Will Redrockson",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "I had to learn how to throw a punch early. You see my Sam, my older brother. Would always stand up for me and my brothers and I couldn't stand seeing him come from school home all beat up and bloody. So I decided to do something about it.",
          "A weapon has never hurt people, people hurt people. Yeah their morals in the way but we both know that if we don't do something about it first the other one might escalate it.",
          "The best defence is a good offense, is what some would say. But to me whoever strikes consitantly the hardest will usually take home the prize.",
          "They say fear is what holds us back, that's wrong fear keeps us alive. The real victor is the one who survives to see another day wether that's fighting or running.",
          "I had a six finger human come in here and demanded that I make him the best sword in the world, a luaghted at him. He tried to kill me, he didn't really count on how high I could swing.",
          "You there! You are looking pretty brave! I made a new Urumi! I want to try it out, so if you want just put this apple on your head and go stand by that tree over there. Then I'll swing! Make a DC 14 Survival check. If you succeed, you get 8 inspirations (Make a reroll on a failed skill check at some point later in time). If you fail, you take 29 point of damage slashing damage and get 80 gp for the trouble.",
          ],
  items: [
    { 
      name: "Blow Dart", 
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Piercing", 
      price: 8
    },
    {
      name: "Club",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Bludgeoning",
      price: 8
    },
    {
      name: "Dagger",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Piercing",
      price: 8
    },
    {
      name: "Light Hammer",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Bludgeoning",
      price: 8
    },
    {
      name: "Sickle",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Slashing",
      price: 8
    },
    {
      name: "Sling",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Bludgeoning",
      price: 8
    },
    {
      name: "Whip",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d4, Slashing",
      price: 8
    },
    {
      name: "Hand Axe",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Slashing",
      price: 12
    },
    {
      name: "Hand Crossbow",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Piercing",
      price: 12
    },
    {
      name: "Javelin",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Piercing",
      price: 12
    },
    {
      name: "Mace",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Bludgeoning",
      price: 12
    },
    {
      name: "Quarterstaff",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Bludgeoning",
      price: 12
    },
    {
      name: "Rapier",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Slashing",
      price: 12
    },
    {
      name: "Scimitar",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Slashing",
      price: 12
    },
    {
      name: "Shortbow",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Piercing",
      price: 12
    },
    {
      name: "Shortsword",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Slashing",
      price: 12
    },
    {
      name: "Spear",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Piercing",
      price: 12
    },
    {
      name: "Trident",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d6, Piercing",
      price: 12
    },
    {
      name: "Battleaxe",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Slashing",
      price: 16
    },
    {
      name: "Flail",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Bludgeoning",
      price: 16
    },
    {
      name: "Greatclub",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Bludgeoning",
      price: 16
    },
    {
      name: "Light Crossbow",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Piercing",
      price: 16
    },
    {
      name: "Longbow",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Piercing",
      price: 16
    },
    {
      name: "Longsword",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Slashing",
      price: 16
    },
    {
      name: "Morningstar",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Piercing",
      price: 16
    },
    {
      name: "War Pick",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Piercing",
      price: 16
    },
    {
      name: "Warhammer",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d8, Bludgeoning",
      price: 16
    },
    {
      name: "Pike",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Piercing",
      price: 20
    },
    {
      name: "Heavy Crossbow",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Piercing",
      price: 20
    },
    {
      name: "Glaive",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Slashing",
      price: 20
    },
    {
      name: "Halberd",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Slashing",
      price: 20
    },
    {
      name: "Greataxe",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Slashing",
      price: 20
    },
    {
      name: "Will's Pistol",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d10, Piercing, Range 30/90ft
      Do to this weapons interesting nature, if you have EXPERTISE with this weapon, when you hit a creature, you can immediately make another attack with it as a bonus action.`,
      price: 20
    },
    {
      name: "Lance",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d12, Piercing",
      price: 24
    },
    {
      name: "Will's Musket",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d12, Piercing, Range 40/120ft
      Do to this weapons interesting nature, if you have EXPERTISE with this weapon, when you hit a creature, you can immediately make another attack with it as a bonus action.`,
      price: 24
    },
    {
      name: "Will's Knuckle Duster",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 1d12, Bludgeoning
      Do to this weapons close nature, if you have EXPERTISE with this weapon, when deal a blow getting a creature to 3/4 health you can attempt to incapacitated that creature if it is the same size or small then you.`,
      price: 24
    },
    {
      name: "Greatsword",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 2d6, Slashing",
      price: 24
    },
    {
      name: "Maul",
      description: "+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 2d6, Bludgeoning",
      price: 24
    },
    {
      name: "Will's Taser",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 2d6, Lightning
      Do to this weapons shocking nature, if you have EXPERTISE with this weapon, when deal a blow getting a creature to under quarter health you can make that creature unconscious.`,
      price: 24
    },
    {
      name: "Will's Chakram (Blade Disc)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 3d4, Slashing, Range 20/60ft
      Do to this weapons fun nature, if you have EXPERTISE with this weapon, if you throw it and hit a creature, you can immediately make another attack with it as it comes back to you. On a different creature.`,
      price: 24
    },
    {
      name: "Will's Khopesh (Scimitar-Sickle)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 3d6, Slashing
      Due to this weapon's "edgy" nature, if you have EXPERTISE and you hit, you can deal splash damage equal to half of the total damage to a second creature within 5 feet of the original target (you automatically hit).`,
      price: 36
    },
    {
      name: "Will's Macuahuitl (Obsidian Spiked)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 3d6, Slashing
      Do to this weapons heavy blunt nature, if you have EXPERTISE with this weapon, when deal a blow getting a creature to under half health you can stun that creature.`,
      price: 36
    },
    {
      name: "Will's Naginata (Glaive-Spear)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 3d8, Slashing
      Do to this weapons long nature, if you have EXPERTISE with this weapon, you can attack creatures up to 10 feet away from you.`,
      price: 48
    },
    {
      name: "Will's Tessen (War Fan)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 3d4, Bludgeoning
      Do to this weapons defensive and compact nature, if you have EXPERTISE with this weapon, as a bonus action you turn the Tessen into a temperarue shield granding you +5 to your current AC until the start of your next turn.`,
      price: 24
    },
    {
      name: "Will's Urumi (Whip-Sword)",
      description: `+DEX or STR to hit + (Proficiency if you have it for this item) Dealing your DEX or STR + 4d10, Slashing, Range 15ft
      However, due to its extremely flexible nature, if you do not have EXPERTISE with this weapon, you will take half damage on a roll, whether you hit or miss.`,
      price: 80
    },
  ],
};
