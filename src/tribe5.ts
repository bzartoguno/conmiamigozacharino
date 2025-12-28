import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe5: Tribe = {
  name: "Railblade Raiders",
  percentAngry: 10,
  priceVariability: 33,
  insults: createGoblinExcuses("Railblade Raiders"),

  items: [
    {
      name: "Glowy Piece of Paper!",
      price: 6000,
      description: "(Annabel’s Fresh scratch ticket: scratching off this ticket will fully restore all allies—including health, spell slots, class features, item cooldowns, and more. This ticket can only be used five times before it dissolves.)",
    },
    {
      name: "Black and Yellow Barrel of Fidget Spinners & Sickness",
      price: 2000,
      description: "(Deals 1d10 true damage if you are within 5 ft of this object. I think you're smart enough to figure out why.)",
    },
    {
      name: "Mama Headache Barrel",
      price: 2000,
      description: "(Contains gasoline that triples fire damage after it is applied.)",
    },
    {
      name: "Not a Beehive",
      price: 4000,
      description: "(Chainsaw Sword, + STR to hit, deals 1d20 + CON + STR slashing damage.)",
    },
    {
      name: "Lead Belcher",
      price: 4000,
      description: "(A portable cannon that may explode if used too much, + STR to hit, deals 1d12 + CON + STR blunt damage.)",
    },
    {
      name: "Gallon of Americano Blood",
      price: 2000,
      description: "(It's a jug of oil that doubles fire damage after it is applied.)",
    },
    {
      name: "Whizz Bang",
      price: 2000,
      description: "(Dangerous firework bundle capable of lighting up the night sky in just a flash.)",
    },
    {
      name: "Aaaaggghh!",
      price: 2000,
      description: "(Flash grenade.)",
    },
    {
      name: "Fwoosh!!!",
      price: 4000,
      description: "(Flamethrower, +DEX to hit, deals 1d12 + CON + DEX fire damage. WARNING: WILL NOT WORK IF WET.)",
    },
    {
      name: "Nice Dwarf’s Ticket!",
      price: 6000,
      description: "(Pat's get-out-of-jail scratch ticket; scratching this ticket will teleport you back to the last place you slept. It can only be used five times before it dissolves.)",
    },
    {
      name: "Zip Zap Dead",
      price: 4000,
      description: "(Tesla Coil Pistol, +DEX to hit, deals 1d12 + CON + DEX lightning damage. WARNING: WILL NOT WORK IF WET.)",
    },
    {
      name: "Stupid Slippery Ticket",
      price: 6000,
      description: "(Keoki's leave-no-trace-behind scratch-off ticket; wipe away your physical evidence of any crime you've committed in the last month. It can only be used five times before it dissolves.)",
    },
    {
      name: "Danger Lady's Meany Stick",
      price: 4000,
      description: "(Witch's Broom, while riding your current fly speed is equal to half of your walking speed. It may have a mind of its own.)",
    },
    {
      name: "Sometimes works, sometimes doesn't",
      price: 2000,
      description:
        "(Moonsliver Cloak: this cloak makes the wearer invisible while outdoors at night. It doesn't work for a week before and after a lunar eclipse.)",
    },
    {
      name: "One cool jacket",
      price: 4000,
      description:
        "(Storm Rider Jacket, AC is now 12; gain resistance to lightning and a flight speed of 45.)",
    },
    {
      name: "Cat Cape, Cat Cape, your wearing a Cat Cape!",
      price: 6000,
      description:
        "(Cape of Nine Lives, this cape is guarded by a mischievous cat spirit that protects you from death nine times. Whenever you take damage that would otherwise reduce your hit points to 0, you are instead reduced to 1 hit point. If an effect would kill you instantly without causing damage, that effect is nullified. However, each time the cape saves your life, you gradually take on feline traits—whiskers, cat ears, and habits like the compulsion to knock things over. Casting Greater Restoration or Remove Curse can reverse these changes.)",
    },
  ],
};
