import { Tribe } from "./types";

export const tribeYeOldDonkey: Tribe = {
  name: "Ye Old Donkey",
  owner: "Tim",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          ],
  items: [
    {
      name: "Room & Board",
      price: 1,
      description:
        "This includes breakfast, lunch, and dinner, and lasts 24 hours.",
    },
    {
      name: "Fortified Room & Board",
      price: 50,
      description:
        "Same as the last option, but you actually get a lock and key for your renforced room.",
    },
    {
      name: "Secret illegal crab fighting ring",
      price: 100,
      description: "It’s what it sounds like. Enterance fee is need but if your lucky you can probably turn it around by the end of the night.",
    },
    {
      name: "Ye Old Donkey's Lost & Found Mystery Bag",
      price: 5,
      description: `To keep this place mostly keep we will occationally pawn of any goods left behide, wanna try your luck? Roll 1d6 and get your prize.
1- A small stuffed animal (Probably belonged a goblin with how much it used to be loved.)
2- Cracked hand mirror.
3- A ring of many keys, but no idea to what the keys go to.
4- A lone sock
5- A Mismatched Patchwork Quilt, so comfy.
6- It's a small rumbling box label 'DEFINETLY NOT BEES, SHAKE BEFORE OPENING!' Well at least it's not bees.`,
    },
    {
      name: "Hot Rock Bed Warmer (Yes this is an actual thing)",
      price: 2,
      description: "We go and we pull out a stone from our hearth and you just wrap it in a blanket and go to sleep with it. It comes highly recommend from lonely single adventures- 'It makes me feel like I'm sleeping next to someone.'",
    },
    {
      name: "Ye Old Donkey's junior merry go round",
      price: 4,
      description: "We go get Bestsy out of the stables and we hook her up to the small mechanical merry go round in the corner and you get to go around it a few times.",
    },
  ],
};
