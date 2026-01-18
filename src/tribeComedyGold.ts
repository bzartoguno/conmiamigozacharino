import { Item, Tribe } from "./types";

interface ComedyGoldItem extends Item {
  priceLabel?: string;
}

interface ComedyGoldTribe extends Omit<Tribe, "items"> {
  items: ComedyGoldItem[];
}

export const tribeComedyGold: ComedyGoldTribe = {
  name: "Comedy Gold",
  owner: "Lady Laugh a Lot",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          "Hello~ There I'm so glad you made it!",
          "Everything I do seems to fail upwards! I married a poor lord for his incredible music and now I'm a lady in high standing! I told him that we should invest in a theatre so we sink our money and get out of politics, but now we are worldwide! I then told him that we should teach commoners and give them large grants for fine art degrees to throw away all this money. But they turn around and start working for us instead of taking the money and running away!",
          "I'd tell you a depression joke but I suffer from mood swings! Ohohohohohohoh!",
          "What do you call it when the queen farts? A noble gas! Ohohohohohohoh!",
          "Knock knock [Who's there?] Olive! [Olive who?] I love you too! Ohohohohohohoh!",
          "Oh my this simple won't do at all! You there adventure! You look like a lively fell-o give I simply need to hear a good joke! Please tell me one (Make a DC 14 Performance. If you succeed, she give a great big belly laugh and pays you 50 gp. If you fail, you get a polite laugh and she pays you 10 gp.)",
          ],
  items: [
    {
      name: "Dancing with Dragons",
      price: 0,
      description: "Gain advantage on Charisma or Performance checks until your next long rest.",
      priceLabel: "Showings are in Wee Hours 2:00 AM - 6:00 AM",
    },
    {
      name: "Goblins in the Pantry",
      price: 0,
      description: "Receive a \"Goblin Repellent\" token to avoid goblin mischief.",
      priceLabel: "Showings are in the Morning 6:00 AM - 11:00 AM",
    },
    {
      name: "The Fool's Quest",
      price: 0,
      description: "Boost your relationship and gimmicks of your pets or NPC companions.",
      priceLabel: "Showings are in Midday 11:00 AM - 2:00 PM",
    },
    {
      name: "Bard's Blunder",
      price: 0,
      description: "Get a \"Bardic Inspiration\" die (1d6) for use on any roll until your next long rest.",
      priceLabel: "Showings are in Afternoon 2:00 PM - 6:00 PM",
    },
    {
      name: "Wizard’s Wardrobe Woes",
      price: 0,
      description: "Boost friendship with NPC followers.",
      priceLabel: "Showings are in the Evening 6:00 PM - 10:00 PM",
    },
    {
      name: "Improve Classes",
      price: 0,
      description: "You can gain proficiency with any CHR-based skill for every two classes you attend. Unfortunately, they don't teach you expertise.",
      priceLabel: "Only available at Night 10:00 PM - 2:00 AM",
    },
    {
      name: "Witch's Wardrobe",
      price: 10,
      description: "Allow the user to swap any set of clothing or armor they are wearing with another set they own as a bonus action. This Ring can hold up to 5 outfits/armors at a time.",
    },
    {
      name: "Year round Tickets",
      price: 100,
      description: "Doubles the effects of any show you attend.",
    },
    {
      name: "Old Props and Costumes",
      price: 1,
      description: "Sometimes costumes and props tend to wear out over time, so we sell them at a discount because we know what it's like to be out on the streets with nothing to keep you warm.",
    },
  ],
};
