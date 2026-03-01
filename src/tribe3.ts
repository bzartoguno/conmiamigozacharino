import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe3: Tribe = {
  name: "Tinkertrack Gang",
  percentAngry: 30,
  priceVariability: 65,
  insults: createGoblinExcuses("Tinkertrack Gang"),
  items: [
    {
      name: "Funky Shimmering Card!",
      price: 600,
      description:
        "(A coupon that offers 50% off your next purchase anywhere; valid for one use only.)",
    },
    {
      name: "The Greatest Shield Ever!",
      price: 400,
      description:
        "(A normal +2 AC shield with a stick of dynamite attached to it. No, the dynamite can't be removed.)",
    },
    {
      name: "An Unbeatable Weapon!",
      price: 400,
      description: "(A regular stick.)",
    },
    {
      name: "Bad at Job",
      price: 500,
      description: "(A stolen door, frame included.)",
    },
    {
      name: "Book of Revelations!",
      price: 400,
      description:
        "(A self-help book designed to improve both your mental and physical wellbeing.)",
    },
    {
      name: "Sheriff's Authority",
      price: 400,
      description:
        "(Doug Dimmadome's hat from the Dimmsdale Dimmadome. Note: This hat does not confer any legal authority.)",
    },
    {
      name: "Beep Beep",
      price: 400,
      description:
        "(A set of car keys; you can never find the car but can always hear it lock and unlock.)",
    },
    {
      name: "Bonk",
      price: 8,
      description: "(An empty water jug that deals 1d4 bludgeoning damage.)",
    },
    {
      name: "Bottle-O-Water",
      price: 500,
      description: "(A potion of water breathing, lasts 24 hours.)",
    },
    {
      name: "Purple Ooze in a Jar",
      price: 500,
      description: "(A potion of psionic immunity, lasts 24 hours.)",
    },
    {
      name: "Fwump",
      price: 500,
      description: "(A weighted blanket.)",
    },
    {
      name: "Cotton Cloud Shake",
      price: 500,
      description:
        "(A potion of MEGA jump, allowing you to jump as high and as far as your current walking speed for 24 hours.)",
    },
    {
      name: "It is now a pillow!",
      price: 600,
      description:
        "(Wand of pillows; using a charge on this wand can transform a 30-foot area into a pillow-ish version of that area. This effect lasts for 10 minutes.)",
    },
    {
      name: "Umm you good? I AM PERFECTLY FINE NOW GET ME A BOOK. Where did your muscles go?",
      price: 500,
      description:
        "(Hat of the WizBarb, whoever puts it on has their Intelligence and Strength scores swapped with one another.)",
    },
    {
      name: "Too many whispers",
      price: 400,
      description:
        "(Town Crier's cap, while worn you become aware of every piece of news that a regular person living in the city or town you are in would be aware of—upcoming festivals, important events, or any recent scandals. You are also aware of who the major political figures of the city are. This hat does not give any information outside of a city or town.)",
    },
  ],
};
