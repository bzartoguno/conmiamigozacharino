import { Item, Tribe } from "./types";

export interface ValhallaMartItem extends Item {
  priceText?: string;
}

export const tribeValhallaMart: Tribe & { items: ValhallaMartItem[] } = {
  name: "Valhalla Mart",
  owner: "Victor",
  percentAngry: 0,
  priceVariability: 8,
  insults: ["Heroes never fall empty-handed—equip yourself for the next saga."],
  items: [
    {
      name: "Blast from the Past",
      price: 10000,
      description: "Blow into this horn and you will “recive” one mundane or magical item from one of your retired or deceased PCs. The item must be one you previously owned, cannot be an artifact, and is subject to DM approval. If the item is unique in the campaign, it cannot be duplicated—this creates a single, story-consistent return.",
    },
    {
      name: "Gjallarhorn Replica",
      price: 10000,
      description:
        "Requires attunement. As an action, blow the horn; creatures within 60 ft that can hear you are affected. Choose Rally (allies gain temp HP equal to your proficiency bonus + your Cha modifier and advantage on their next saving throw against fear within 1 minute) or Dread (enemies must make a Wisdom save, DC = 8 + PB + Cha; on a failure they are frightened of you until the end of your next turn). Once per long rest.",
    },
    {
      name: "Langskip Whistle",
      price: 10000,
      description:
        "Requires attunement. While outdoors, as an action you whistle to summon a spectral langskip and ghostly crew for 1 hour. It can carry up to 10 Medium creatures and their gear, and travels on water (it may also “skim” across calm ground like mist at half speed). Its speed is 40 ft + 10 ft for each of your PCs that has died or retired in this campaign (max +40). Once per long rest.",
    },
    {
      name: "Soul-bound Compass",
      price: 500,
      description: "Requires attunement. At dawn, choose a fallen/retired PC and one unresolved goal (or let the DM choose). The needle points toward the nearest meaningful lead—place, person, or clue—tied to that thread. While following it, you have advantage on Survival checks to navigate or track. If there is no valid thread on this plane, it points true north and grows icy cold.",
    },
    {
      name: "Harald Pendant",
      price: 10000,
      description:
        "Requires attunement. Once per long rest, as a bonus action you invoke the name of a fallen/retired hero you played. For 10 minutes you take on a spectral aspect: you gain one skill proficiency they had (or expertise if you already have that proficiency), can speak any languages they spoke, and once during the duration you may add a d10 to an ability check, attack roll, or saving throw. Your eyes and voice briefly echo theirs.",
    },    
    {
      name: "Last Will Scroll (Inheritance Item)",
      price: 12000,
      description:
        "When a PC dies, this scroll lets them designate one non-cursed item they carried as “bound to the line.” That item becomes findable by the next character from that player (DM chooses a reasonable moment to recover it).",
    },
    {
      name: "Valkyrie’s Ring",
      price: 9000,
      description:
        "While wearing it, when you drop to 0 HP you can choose to drop to 1 HP instead (once). After it saves you, the ring cracks and becomes nonmagical.",
    },
    {
      name: "Einherjar Nameplate (Inheritance Item)",
      price: 90000,
      description:
        "Attach to a weapon, or focus. Add an adtioninal damage die to this item if possible. When this PC dies this item will becomes findable by the next character from that player (DM chooses a reasonable moment to recover it).",
    },
  ],
};
