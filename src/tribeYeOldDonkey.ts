import { Tribe } from "./types";

export const tribeYeOldDonkey: Tribe = {
  name: "Ye Old Donkey",
  owner: "Tim",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
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
