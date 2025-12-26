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
      price: 50,
    },
    {
      name: "Hire a Servant for a Month",
      description: "Novice service tier support for four weeks.",
      price: 25,
    },
    {
      name: "Hire a Maid for a Month",
      description: "Apprentice service tier support for four weeks.",
      price: 50,
    },
    {
      name: "Hire a Butler for a Month",
      description: "Master service tier support for four weeks.",
      price: 100,
    },
    {
      name: "Hire a Bounty Hunter for a Job",
      description: "Apprentice contract level engagement.",
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
      description: "A one-year residency for an expert sage.",
      price: 2000,
    },
    {
      name: "Contact a Master Craftsperson to Stay in Your Town for One Year",
      description: "A one-year residency for a master craftsperson.",
      price: 5000,
    },
    {
      name: "Contact a Herald to Stay in Your Town for One Year",
      description: "A one-year residency for a herald.",
      price: 1000,
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
