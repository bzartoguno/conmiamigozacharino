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
      description: "Teleport to a town you have previously visited, one time use.",
      price: 50,
    },
    {
      name: "Hire for a month a Servent",
      description: "Novice service tier.",
      price: 25,
    },
    {
      name: "Hire for a month a Maid",
      description: "Apprentice service tier.",
      price: 50,
    },
    {
      name: "Hire for a month a Butler",
      description: "Master service tier.",
      price: 100,
    },
    {
      name: "Hire a Bounty Hunter for a job",
      description: "Apprentice contract level.",
      price: 100,
    },
    {
      name: "Hire a Lawyer for a case",
      description: "Apprentice contract level.",
      price: 150,
    },
    {
      name: "Hire an Engineer for a project",
      description: "Apprentice contract level.",
      price: 250,
    },
    {
      name: "Contact a Sage to stay in your town for one year",
      description: "One-year residency for an expert sage.",
      price: 2000,
    },
    {
      name: "Contact a Master Craftsmen to stay in your town for one year",
      description: "One-year residency for a master craftsperson.",
      price: 5000,
    },
    {
      name: "Contact a Harrold to stay in your town for one year",
      description: "One-year residency for a herald.",
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
