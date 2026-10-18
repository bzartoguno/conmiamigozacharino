import { Item, Tribe } from "./types";

interface BulletsBuffsBeyondItem extends Item {
  priceLabel?: string;
}

interface BulletsBuffsBeyondTribe extends Omit<Tribe, "items"> {
  items: BulletsBuffsBeyondItem[];
}

export const tribeBulletsBuffsBeyond: BulletsBuffsBeyondTribe = {
  name: "Bullets, Buffs, & Beyond",
  owner: "Bob",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "You there! You are looking pretty brave! I made a new gun! I want to try it out, so if you want just put this apple on your head and go stand by that tree over there. Then I'll shoot! (Make a DC 14 Athletics. If you succeed, you don't get shot & you get 125 gp. If you fail, well um... you take 30 point of damage and get 125 gp.",

          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          
          ],
  items: [
    {
      name: "Killer's Ammo",
      description: "Only one ammo type can be used at a time; this option doubles the damage dice rolled.",
      price: 500,
    },
    {
      name: "Hunter's Ammo",
      description: "Only one ammo type can be used at a time; this option triples the weapon's range.",
      price: 700,
    },
    {
      name: "Protective Father's Ammo",
      description:
        "Only one ammo type can be used at a time; when you shoot a close friend, you heal them instead of hurting them.",
      price: 900,
    },
    {
      name: "Mother's Revenge Ammo",
      description:
        "Only one ammo type can be used at a time; add an additional die to the weapon for every five HP you are below maximum.",
      price: 1000,
    },
    {
      name: "Get Down Armor Wax",
      description: "Only one wax can be used at a time; gain +3 to AC when next to an ally.",
      price: 1500,
    },
    {
      name: "Hardened Stance Shield Wax",
      description:
        "Only one wax can be used at a time; if you do not use any movement speed on your turn, you gain +15 to AC.",
      price: 2000,
    },
    {
      name: "Medical Wax",
      description: "Only one wax can be used at a time; it heals 5 HP during your turn.",
      price: 3000,
    },
    {
      name: "Got anything... out back",
      description: "Please message me about what you would like so we can hash out the details.",
      price: 0,
      priceLabel: "Price may vary",
    },
    {
      name: "Brass & Brush Cleaning Kit",
      price: 12,
      description:
        "A tidy roll-up kit with brushes, patches, oil, and a rag—keeps your gear clean, reliable, and less embarrassing in public.",
    },
    {
      name: "Practice Rounds",
      price: 10,
      description:
        "Inert training rounds for safe loading drills and practice; great for learning without wasting the real stuff or to trick a friend because they deal 0 damage.",
    },
    {
      name: "Earplugs",
      price: 3,
      description:
        "Simple reusable earplugs in a tiny tin can because hearing loss is forever.",
    },

  ],
};
