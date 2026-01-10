import { Tribe } from "./types";

export const tribePearlsPotions: Tribe = {
  name: "Pearl's Potions",
  owner: "Pearl",
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
      name: "Healing Potion",
      description: "Heals 2d4 + 2.",
      price: 10,
    },
    {
      name: "Greater Health Potion",
      description: "Heals 4d4 + 4.",
      price: 20,
    },
    {
      name: "Superior Healing Potion",
      description: "Heals 8d4 + 8.",
      price: 40,
    },
    {
      name: "Supreme Healing Potion",
      description: "Heals 10d4 + 20.",
      price: 60,
    },
    {
      name: "Poison",
      description: "If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
      price: 35,
    },
    {
      name: "Antidote",
      description: "Cures basic poisons.",
      price: 35,
    },
    {
      name: "Invisible",
      description: "When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
      price: 50,
    },
    {
      name: "Sleep",
      description: "When you drink this potion, you fall unconscious for 8 hour and counts as a long rest if left undisturbed. The potion's magic ends if you take damage or someone uses an action to shake or slap you awake.",
      price: 75,
    },
    {
      name: "Hill Giant's Strength",
      description: "Increase your STR by +6 for one hour.",
      price: 100,
    },
    {
      name: "Shadow Dancer's Nimbleness",
      description: "Increase your DEX by +6 for one hour.",
      price: 100,
    },
    {
      name: "Deva's Enlightenment",
      description: "Increase your INT by +6 for one hour.",
      price: 100,
    },
    {
      name: "Unicorn's Empathy",
      description: "Increase your WIS by +6 for one hour.",
      price: 100,
    },
    {
      name: "Potion of Sphinx's Grace",
      description: "Increase your CHA by +6 for one hour.",
      price: 100,
    },
    {
      name: "Potion of Growth",
      description: "When you drink this potion, you double in size and grow bigger by one size catagory, weapons deal an additional 1d4. This lasts for 1 hour.",
      price: 45,
    },
    {
      name: "Potion of Diminishing",
      description: "When you drink this potion, you shrink in size and grow smaller by one size catagory, weapons deal an 1d4 less. This lasts for 1 hour.",
      price: 45,
    },
  ],
};
