import { Tribe } from "./types";

export const tribeRunestoneRelay: Tribe = {
  name: "Runestone Relay",
  owner: "Pat Redrockson",
  percentAngry: 0,
  priceVariability: 0,
  insults: [""],
  items: [
    {
      name: "Message Delivery",
      price: 5,
      description: "Sending simple messages on runestones to local destinations.",
    },
    {
      name: "Package Delivery",
      price: 5,
      description: "Hold onto an item to be delivered at a certain time and place.",
    },
    {
      name: "A year-long subscription to the Daily Newspaper",
      price: 5,
      description: "",
    },
    {
      name: "Urgent Message",
      price: 5,
      description: "Will literally hunt the target down to hand-deliver them a message.",
    },
    {
      name: "Singing Telegram",
      price: 100,
      description: "",
    },
    {
      name: "Waterproof Mail Pouch",
      price: 12,
      description:
        "Oiled canvas pouch with a roll-top and clasp. Keeps letters dry in rain, snow, and regrettable river crossings.",
    },
    {
      name: "Document Tube (map/scroll carrier)",
      price: 9,
      description:
        "Rigid tube with shoulder strap. Ideal for maps, notices, permits, and 'please don’t crease this' paperwork.",
    },
    {
      name: "Courier’s  Guide (pocket booklet)",
      price: 2,
      description:
        "Simple illustrated guide for common way around towns without getting lost. Includes a page on 'How to Avoid Angry kobalts goblins and childern with humongo swords on their backs.'",
    },
    {
      name: "Rush Handling Sticker Sheet (set of 12)",
      price: 1,
      description:
        "Bright stickers: RUSH, THIS SIDE UP, FRAGILE, KEEP DRY, DO NOT DEFINELY NOT ANIMATED ARMOR WITH PEOPLE HIDING INSIDE, etc.",
    },
    {
      name: "Parcel Delivery (local, up to 25 lb)",
      price: 5,
      description:
        "Local parcel service for normal boxes and bundles. Includes careful handling and mild complaining.",
    },
    {
      name: "Bulk Posting Discount (10 letters at once)",
      price: 15,
      description:
        "Pre-paid bundle for sending a stack of letters. Great for guild reports, invitations, or family drama.",
    },
  ],
};
