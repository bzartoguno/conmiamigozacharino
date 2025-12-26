import { Item, Tribe } from "./types";

export interface GolemWorkshopItem extends Item {
  priceText?: string;
}

export const tribeGolemWorkshop: Tribe & { items: GolemWorkshopItem[] } = {
  name: "Golem Workshop",
  owner: "Goldhand Redrockson",
  percentAngry: 0,
  priceVariability: 5,
  insults: ["Every construct is forged to order—talk terms or pay in gold."],
  items: [
    {
      name: "Clay or Landscaping Golem",
      price: 300,
      description: "Gentle shapers perfect for gardens, terraces, and tidy grounds.",
    },
    {
      name: "Crystal or Vehicle Operator Golem",
      price: 400,
      description: "Precision-driven cores to pilot carts, caravans, or fragile rigs.",
    },
    {
      name: "Wood or Carpenter Golem",
      price: 500,
      description: "Reliable joiners that frame, sand, and finish on tireless cycles.",
    },
    {
      name: "Stone or Mason Golem",
      price: 600,
      description: "Foundation specialists that lift, stack, and set quarried slabs.",
    },
    {
      name: "Iron or Smith Golem",
      price: 700,
      description: "Forge-floor assistants to hammer billets and mind the bellows.",
    },
    {
      name: "Steel or Builder Golem",
      price: 800,
      description: "Architectural muscle that braces beams and locks plates in place.",
    },
    {
      name: "Siege Golem",
      price: 900,
      description: "Armored rams and throwers ready for fortified obstacles.",
    },
    {
      name: "Build a Base",
      price: 0,
      priceText: "Negotiable",
      description: "Full-site planning, from anchor stones to final battlements.",
    },
    {
      name: "Unprocessed Supplies",
      price: 0,
      priceText: "Negotiable",
      description: "Raw ore, timber, and crystal lots priced to current markets.",
    },
    {
      name: "Custom Golem Construction",
      price: 0,
      priceText: "Negotiable",
      description: "Tailored chassis, enchantments, and control runes on request.",
    },
  ],
};
