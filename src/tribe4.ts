import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe4: Tribe = {
  name: "Blastwagon Caboose",
  percentAngry: 5,
  priceVariability: 49,
  insults: createGoblinExcuses("Blastwagon Caboose"),

  items: [
    {
      name: "Danger Paper from Danger Lady",
      price: 5000,
      description: "(Jazz's Cream or Cremation ticket: flip a coin—heads, a 9th level Fireball is flung at the target; tails, the target is fully healed in a ball of custard. The target must be chosen before use. 5 uses total before the ticket dissolves.)",
    },
    {
      name: "Stink Fart in a Jar",
      price: 1000,
      description: "(Mustard Gas in a Mason Jar, deals 4d6 poison damage.)",
    },
    {
      name: "Anti Squirrel Food",
      price: 1000,
      description: "(C4, yes it comes with a trigger of 300 feet, deals 4d6 fire damage.)",
    },
    {
      name: "Short Stack Smoke Stack",
      price: 3000,
      description: "(A bottled up super strong smoke bomb that can clear out any building.)",
    },
    {
      name: "Snot Rocket",
      price: 3000,
      description: "(An RPG that fires sticky bombs +8 to hit dealing 2d8 acid damage, immobilizing any medium or smaller creatures for up to two turns.)",
    },
    {
      name: "Ta un ta",
      price: 3000,
      description: "(5 sticks of TNT that attracts caffeine-driven squirrels, each +4 to hit dealing 3d6 fire damage and pushes medium and smaller creatures 20ft away.)",
    },
    {
      name: "It's a Rock",
      price: 1000,
      description: "(Nope, it's a grenade. It very much does not look like a rock, deals 8d8 fire damage, and pushes medium and smaller creatures 10 ft away.)",
    },
    {
      name: "Poop Poo Pa Choo",
      price: 3000,
      description: "(Stink Bomb, so potent it can shut down any fast food joint within minutes.)",
    },
    {
      name: "Boom Juga Juga",
      price: 5000,
      description: "(Bomb potion, will go off if opened, deals 10d6 fire damage.)",
    },
    {
      name: "Black Boom",
      price: 5000,
      description: "(A grenade that creates a temporary black hole, violently pulling everything into it at extreme speed. CON save of 18 or deal 10d10 true damage.)",
    },
    {
      name: "Sneak Squeak",
      price: 1000,
      description: "(A clockwork Roomba with C4 strapped to it, designed to get rid of those pesky squirrels, deals 6d6 fire damage.)",
    },
    {
      name: "Welcome Mat",
      price: 1000,
      description: "(Landmine, designed to take care of all those pesky squirrels, deals 7d6 fire damage.)",
    },
    {
      name: "Little Rascal",
      price: 5000,
      description: "(It's a squirrel in a pet carrier, though you have a bad feeling that opening it will make something terrible happen.)",
    },
    {
      name: "Squirrel Finder",
      price: 1000,
      description:
        "(Blood Compass, drop a speck of blood into the needle of this compass and it instantly points toward the blood donor for 24 hours. However, the donor will be aware they are being tracked.)",
    },
    {
      name: "Night Light",
      price: 3000,
      description:
        "(Flare gun, deals 2d6 fire damage and lights up a 240 ft radius of the area. A terrible weapon if you're trying to hide from dinosaurs.)",
    },
    {
      name: "Stuffy!",
      price: 5,
      description:
        "(It's a stuffed animal of your choice, and no matter which goblin you show it to, they will give you a compliment and proudly show you their own stuffed animal.)",
    },
  ],
};
