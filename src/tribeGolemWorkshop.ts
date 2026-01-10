import { Item, Tribe } from "./types";

export interface GolemWorkshopItem extends Item {
  priceText?: string;
}

export const tribeGolemWorkshop: Tribe & { items: GolemWorkshopItem[] } = {
  name: "Golem Workshop",
  owner: "Goldhand Redrockson",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          ],
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
