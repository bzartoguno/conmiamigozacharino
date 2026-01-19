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
          "My name is Scrooge McDuck, and I run the world's most successful banking business in the world.",
          "Here at the Piggy Bank, we keep your money safe so you don't have to!",
          "Money shouldn't be idle and must be put to work, you know. Just having petty cash is good but you might just as well be stranded on a desert island. For all the good it does.",
          "Money should never stagnate, but like ocean currents, circulate, like the ocean currents that control the world's weather. You see, circulating money controls the economy. Money must keep moving to fulfill its obligation. And if you squeeze it too tight, you'll stop its circulation.",
          "Bah, humbug!",

          "Here at the Piggy Bank, we keep your money safe so you don't have to!",
          "Money shouldn't be idle and must be put to work, you know. Just having petty cash is good but you might just as well be stranded on a desert island. For all the good it does.",
          "Money should never stagnate, but like ocean currents, circulate, like the ocean currents that control the world's weather. You see, circulating money controls the economy. Money must keep moving to fulfill its obligation. And if you squeeze it too tight, you'll stop its circulation.",
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
