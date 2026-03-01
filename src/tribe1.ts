import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe1: Tribe = {
  name: "Beastbinders Tribe",
  percentAngry: 10,
  priceVariability: 97,
  insults: createGoblinExcuses("Beastbinders Tribe"),

  items: [
    {
      name: "A Useless Piece of Paper",
      price: 35,
      description:
        "(A coupon that offers 10% off your next purchase anywhere; valid for one use only.)",
    },
    {
      name: "Mini Moo Moo",
      price: 10,
      description: "(A stolen calf.)",
    },
    {
      name: "Beehive",
      price: 15,
      description: "(Contains an angry Asian giant hornet hive in a jar. Deals 4d4 poison damage; the hornets stay 1d4 rounds before leaving.)",
    },
    {
      name: "Morning Screamer",
      price: 15,
      description: "(Most likely a stolen rooster.)",
    },
    {
      name: "Fish Friend Suit",
      price: 35,
      description: "(Shark suit, available in blue or gray.)",
    },
    {
      name: "Nom",
      price: 10,
      description:
        "(No one likes him, and he keeps finding his way back despite attempts to get rid of him. Thus, he is bound in rope and offered to you.)",
    },
    {
      name: "Silver Gr Gr",
      price: 35,
      description: "(A silverback gorilla that comes with 16 metal baseball bats.)",
    },
    {
      name: "Walking Fleece",
      price: 10,
      description:
        "(A little lamb, wearing a collar that states it belongs to Mary.)",
    },
    {
      name: "Nope Noodle",
      price: 15,
      description:
        "(A non-venomous snake that enjoys masquerading as a scarf.)",
    },
    {
      name: "Da Forever Friend",
      price: 10,
      description: "(An origami frog made with love and care.)",
    },
    {
      name: "Sadness",
      price: 10,
      description: "(A rubber ball that never bounces.)",
    },
    {
      name: "Goblin Clothes",
      price: 15,
      description:
        "(Clothes stolen from a child who neglected to put them away.)",
    },
    {
      name: "Oh no the squirrels are back!",
      price: 35,
      description:
        "(Horn of the Hunt, blowing into this horn will cause all creatures with an INT of 8 or less to come running toward your location.)",
    },
    {
      name: "Squirrel-Be-Gone!",
      price: 35,
      description:
        "(Beast Flare, lighting this homemade flare will cause all creatures with an INT of 4 or less to run away.)",
    },
    {
      name: "Baby!",
      price: 35,
      description:
        "(It's a bag of flour wrapped in a blanket with big googly eyes. It kind of looks like a baby if you squint. When you open the bag, flour explodes everywhere, dealing 1d4 damage to all creatures in a 1,000-foot radius.)",
    },
  ],
};
