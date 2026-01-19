import { Item, Tribe } from "./types";

export interface ValhallaMartItem extends Item {
  priceText?: string;
}

export const tribeValhallaMart: Tribe & { items: ValhallaMartItem[] } = {
  name: "Valhalla Mart",
  owner: "Victor",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "Before you go, here’s one of our little stamp challenges. It’s just for fun and to keep the journey lively. Try a light accent or a small voice quirk in-character for at least two conversations… but keep it subtle.  |  Stamp Quest (It’s a mi Mario): Try using an accent when talking with your character for at least two conversations. | Reward: 3 Stamps",
          "Not everything’s about supplies and coin; sometimes it's more about the journey before your destination. Here’s a stamp challenge we give to adventurers to help keep things lively: ask one of your companions what they really want out of this adventure, and get an honest answer.  |  Stamp Quest (What Do You Want?): Ask another PC about their personal goal (revenge, treasure, love, knowledge, etc.) and get a genuine answer. | Reward: 5 Stamps",
          "Fair deals keep groups together. I’ve got a stamp challenge that encourages that sort of thinking. Offer a companion a fair trade, something you both actually want. If they accept, you’ve earned it.  |. Stamp Quest (Trade Offer): Propose a fair trade with another PC (not a gift). If they accept, you succeed. | Reward: 4 Stamps",
          "One last thing, this one’s simple, but it changes the mood fast. When someone in your group has a big moment, good or bad, react in-character and make it memorable. Do it a few times if the opportunity shows up.  |  Stamp Quest (Hype Crew): When someone rolls big (good or bad), react in-character to make it memorable. | Reward: 2 Stamps (repeatable, max 3)",
          "No this isn't Heaven, but you are close!",
          "Names Victor, yes like Vitory. My mom actually named me that to go with my twin sister Val short for Valkyrie.",
          "Do you believe in rencarnation? Well here at Valhalla Mart we reach beyond the veil and into your past lives to give you extra ordinary item!",
          "Yo",
          "Peace be with you and all that.",
          ],
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
        "Requires attunement. While outdoors, as an action you whistle to summon a spectral langskip and ghostly crew for 1 hour. It can carry up to 10 Medium creatures and their gear, and travels on water (it may also “skim” across calm ground like mist at half speed). Its speed is 40 ft + 10 ft for each of your PCs that has died or retired (max +100). Once per long rest.",
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
      name: "Valkyrie’s Ring of Redemption",
      price: 9000,
      description:
        "Requires attunement. When bought you choose either to have this ring be; +5 HP for each of your PCs that has died or retired, +5 Movement speed for every two of your PCs that has died or retired, or +1 AC for every three of your PCs that has died or retired. The choice can not be changed after you bought it.",
    },
    {
      name: "Einherjar Nameplate (Inheritance Item)",
      price: 90000,
      description:
        "Attach to a weapon, or focus. Add an adtioninal damage die to this item if possible. When this PC dies this item will becomes findable by the next character from that player (DM chooses a reasonable moment to recover it).",
    },
  ],
};
