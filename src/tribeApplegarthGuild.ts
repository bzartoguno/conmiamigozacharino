import { Item, Tribe } from "./types";

interface ApplegarthItem extends Item {
  priceLabel?: string;
}

interface ApplegarthTribe extends Omit<Tribe, "items"> {
  items: ApplegarthItem[];
}

export const tribeApplegarthGuild: ApplegarthTribe = {
  name: "Applegarth Guild",
  owner: "John Applegarth",
  percentAngry: 0,
  priceVariability: 5,
  insults: [""],
  items: [
    {
      name: "Charon's Token",
      description: "Teleport to a town you have previously visited; one-time use.",
      price: 500,
    },
    {
      name: "Hire a Servant for a Month",
      description: "Novice service tier; they will support you for four weeks.",
      price: 25,
    },
    {
      name: "Hire a Bounty Hunter for a Job",
      description: "They will track down and capture an NPC and bring them to you, or go out and kill any monster for you. Depending on the difficulty of the target, you may need to send multiple bounty hunters.",
      price: 100,
    },
    {
      name: "Hire a Lawyer for a Case",
      description: "Apprentice contract level representation.",
      price: 150,
    },
    {
      name: "Hire an Engineer for a Project",
      description: "Apprentice contract level build or repair.",
      price: 250,
    },
    {
      name: "Contact a Sage to Stay in Your Town for One Year",
      description: "A sage will come and live in your town for one year. During this time, they will provide wisdom and advice to you and your citizens. They will also directly take control of the Economic & Trade and Reputation & Renown branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also participate in town events related to the branches they control.",
      price: 2000,
    },
    {
      name: "Contact a Master Craftsperson to Stay in Your Town for One Year",
      description: "A master craftsperson will come and live in your town for one year. During this time, they will repair and improve your town. They will also directly take control of the Landscape/Wandering Titan and Industry & Craft branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also participate in town events related to the branches they control.",
      price: 5000,
    },
    {
      name: "Contact a Herald to Stay in Your Town for One Year",
      description: "A herald will come and live in your town for one year. During this time, they will train your guards rigorously and raise the town to a higher standard of living. They will also directly take control of the Reputation & Renown and Defence & Security branches of your town skill tree. Drawing from their vast knowledge, they can help your town prosper and grow. They will also proactively participate in town events related to the branches they control.",
      price: 10000,
    },
    {
      name:
        "Guild Contract hire Applegarth, Archivist, Dungeon Crawler, Navigation, or Jewelry Guild for a reasonable long-term job (please message me about what you would like so we can hash out the details)",
      description: "Custom contract terms available upon request.",
      price: 0,
      priceLabel: "Price may vary",
    },
  ],
};
