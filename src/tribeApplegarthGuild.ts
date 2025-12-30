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
      name: "Hire a Butler, Maid, or Servant for a Month",
      description: "They will support you for four weeks. Obeys basic commands and chores so long as they are reasonable and doesn't harm themselves.",
      price: 25,
    },
    {
      name: "Hire a Bounty Hunter for a Job",
      description: "They will track down and capture an NPC and bring them to you, or go out and kill any monster for you. Depending on the difficulty of the target, you may need to send multiple bounty hunters.",
      price: 100,
    },
    {
      name: "Hire a Lawyer for One Month",
      description: "They will represent you in legal matters for one month. They can help with disputes, contracts, and other legal issues that may arise during your adventures.",
      price: 150,
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
    {
      name: "Hire a Scribe for One Month",
      description:
        "They copy contracts, organize ledgers, file permits, and witness signatures as an official neutral party. Great for keeping your paperwork clean, consistent, and hard to dispute later.",
      price: 75,
    },
    {
      name: "Hire a Nanny for One Month",
      description:
        "They watch kids, teach basic lessons, enforce manners, and keep little chaos-goblins from reinventing arson as a hobby. They will not teach combat techniques or offensive magic (yes, that includes Vicious Mockery).",
      price: 60,
    },
    {
      name: "Hire a Stable Hand for One Month",
      description:
        "They feed, groom, muck stalls, and provide basic obedience training for mounts and pets. This is care and handling labor only—they do not sell or purchase mounts on your behalf.",
      price: 50,
    },
    {
      name: "Hire an Apology Courier (Local) for One Job",
      description:
        "They deliver awkward messages within the same town with discretion, tact, and a straight face. This is a person-to-person delivery, not a mail service—no long-distance routes or ongoing post.",
      price: 25,
    },
    {
      name: "Hire an Intern for One Week",
      description:
        "They retrieve specific records, deliver copies, and verify citations or reference details exactly as requested. They research, interpretation, or investigation—only fetch and verify what you specify.",
      price: 35,
    },
    {
      name: "Hire a Seamstress for One Week",
      description:
        "They patch tents, uniforms, cloaks, bedrolls, straps, and travel gear with practical durability in mind. This is repair work, and with the right tools and materials enchant armor and clothing.",
      price: 40,
    },
    {
      name: "Hire a Muscle Crew for One Job",
      description:
        "They pull stuck carts and wagons out of mud, snow, and sand. A small platoon of guards or just need a beefy hype squad they got you covered.",
      price: 125,
    },
    {
      name: "Hire a Biohazard Cleaner for One Job",
      description:
        "They clean up blood, ooze, slime, ichor, and other adventurer-grade messes using masks, rags, bins, and strong stomachs. They don’t ask questions and just point them where you want them.",
      price: 150,
    },
    {
      name: "Hire a Professional Line-Stand for One Day (This is a real job people do I was surprised too)",
      description:
        "They stand in queues for permits, tickets, or appointments. They’ll hold your place and hand it off to you at the right moment no bribery or forgery included.",
      price: 3,
    },
  ],
};
