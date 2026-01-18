import { Item, Tribe } from "./types";

export interface PiggyBankItem extends Item {
  priceLabel?: string;
}

interface PiggyBankTribe extends Omit<Tribe, "items"> {
  items: PiggyBankItem[];
}

export const tribePiggyBank: PiggyBankTribe = {
  name: "The Piggy Bank, no hammers inside.",
  owner: "Mr. Scrooge McDuck",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          "My name is Scrooge Mcduck and I run the worlds most succseful banking busniess, in the world.",
          "Here at Piggy Bank, we keep your money safe so you don't have to",
          "",
          "",
          "",
          "give me a DC 14 Intimidation check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage and get 5 gp.",
          ],
  items: [
    {
      name: "Set up an account",
      price: 0,
      description: "Deposet any anount of money and it will have grow by 5% every seven days. Please keep track of this yourself.",
      priceLabel: "Free",
    },
    {
      name: "Turn in Stamps",
      price: 0,
      description: "Rewards may vary depending on what other shops are in town",
      priceLabel: "Deposit 50 stamps & get a special reward!",
    },
    {
      name: "Local Quests",
      description: "Do a quick simple local quest around town for some quick cash, quests may vary",
      price: 50,
    },
    {
      name: "Guild Quest",
      description: "Only avalible if there is a guild in town and varies on which guild it is.",
      price: 100,
    },
    {
      name: "Town Quest",
      description: "Sometimes we get problems that our local heros don't have the time for or can't handle as such we get some outside assistance to help us out. As such the avaliblity of this quest may vary.",
      price: 150,
    },
  ],
};
