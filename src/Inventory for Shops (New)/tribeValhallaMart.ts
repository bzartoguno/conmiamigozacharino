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
          "Fair deals keep groups together. I’ve got a stamp challenge that encourages that sort of thinking. Offer a companion a fair trade, something you both actually want. If they accept, you’ve earned it.  |  Stamp Quest (Trade Offer): Propose a fair trade with another PC (not a gift). If they accept, you succeed. | Reward: 4 Stamps",
          "One last thing, this one’s simple, but it changes the mood fast. When someone in your group has a big moment, good or bad, react in-character and make it memorable. Do it a few times if the opportunity shows up.  |  Stamp Quest (Hype Crew): When someone rolls big (good or bad), react in-character to make it memorable. | Reward: 2 Stamps (repeatable, max 3)",
          "No, this isn't Heaven, but you are close!",
          "Name's Victor, yes, like Victory. My mom actually named me that to go with my twin sister Val, short for Valkyrie.",
          "Do you believe in reincarnation? Well, here at Valhalla Mart we reach beyond the veil and into your past lives to give you extraordinary items!",
          "Yo",
          "Peace be with you and all that.",

          "No, this isn't Heaven, but you are close!",
          "Name's Victor, yes, like Victory. My mom actually named me that to go with my twin sister Val, short for Valkyrie.",
          "Do you believe in reincarnation? Well, here at Valhalla Mart we reach beyond the veil and into your past lives to give you extraordinary items!",
          "Yo",
          "Peace be with you and all that.","No, this isn't Heaven, but you are close!",
          "Name's Victor, yes, like Victory. My mom actually named me that to go with my twin sister Val, short for Valkyrie.",
          "Do you believe in reincarnation? Well, here at Valhalla Mart we reach beyond the veil and into your past lives to give you extraordinary items!",
          "Yo",
          "Peace be with you and all that.","No, this isn't Heaven, but you are close!",
          "Name's Victor, yes, like Victory. My mom actually named me that to go with my twin sister Val, short for Valkyrie.",
          "Do you believe in reincarnation? Well, here at Valhalla Mart we reach beyond the veil and into your past lives to give you extraordinary items!",
          "Yo",
          "Peace be with you and all that.",
          ],
  items: [
    {
      name: "Horn of Beckoning Death",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Resembling a small dragon’s horn, this arcane device glows with a hellish internal light when held. As an action while holding this horn, you can invoke a necromantic effect called the Beckoning Death.
The Beckoning Death arrives at the start of your next turn and manifests as a crimson cloud of smoke that fills a 30-foot-radius sphere centered on the horn. The sphere doesn’t move with the horn. At the start of each of your turns, the sphere’s radius increases by 30 feet. The cloud disappears after 10 minutes or when your concentration on the effect ends. Any creature (including you) that has 9 or fewer hit points when it ends its turn in the cloud is slain by the Beckoning Death. A Humanoid killed in this way instantly transforms into a zombie (see the Monster Manual). The zombie obeys the commands of the horn’s creator, the lich Szass Tam.
Once you use the horn’s property, it can’t be used again for 1 year.`,
    },
    {
      name: "Rod of Resurrection",
      rarity: "Legendary",
      itemType: "Rod",
      attunment: true,
      price: 5000,
      description: `This rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it:
Heal
(expends 1 charge) or
Resurrection
(expends 5 charges.
The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.`,
    },
    {
      name: "Ghost Lantern",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet.
While holding the lantern, you can use an action to order the spirit to leave the lantern and duplicate the effect of the Mage Hand spell. The spirit returns to the lantern when the spell ends.
If you fall unconscious within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.
The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead. Casting a Dispel Evil and Good spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical.`,
    },
    {
      name: "Glowrune Pigment",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `This set of 1d4 + 2 small paint pots contains pigments mixed from crushed luminescent gemstones. This magical paint bestows temporary magical gifts on creatures with runes drawn on their skin with this paint.
One paint pot contains enough pigment to paint one rune. A creature can spend 10 minutes to paint one of the following runes onto itself or another creature:
Journey Rune. Difficult terrain doesn’t cost the painted creature extra movement.
Life Rune. The painted creature gains 10 temporary hit points and has advantage on death saving throws.
Light Rune. The painted creature gains darkvision to a range of 30 feet. If the painted creature already has darkvision from another source, the range of its darkvision increases by 30 feet.
Mountain Rune. The painted creature is immune to being knocked prone and has advantage on Strength and Constitution saving throws.
Shield Rune. The painted creature has advantage on Dexterity saving throws against effects that deal damage.
A creature can benefit from only one painted rune at a time, so a new rune painted on a creature has no effect unless the old one is removed first. The rune’s benefits last for 8 hours or until the painted creature uses its action to wipe away the rune.`,
    },
    {
      name: "Horn of Blasting",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.
Each use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.`,
    },
    {
      name: "Iggwylv's Horn",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `You can use an action to blow this horn to cast one of the following spells from it: Arms of Hadar, Fog Cloud, Gust of Wind, or Web. If the spell requires a saving throw, the spell save DC is 13.
Once the horn has been used to cast a spell, it can’t be used to cast that spell again until the next dawn.`,
    },
    {
      name: "Einherjar Nameplate (Inheritance Item)",
      rarity: "Uncommon",
      itemType: "Armor",
      attunment: false,
      price: 250,
      description: "Attach to a weapon, or focus. Add an additional damage die to this item if possible. When this PC dies this item will become findable by the next character from that player (DM chooses a reasonable moment to recover it).",
    },
    {
      name: "Valkyrie’s Ring of Redemption",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "Requires attunement. When bought you choose either to have this ring be; +5 HP for each of your PCs that has died or retired, +5 Movement speed for every two of your PCs that has died or retired, or +1 AC for every three of your PCs that has died or retired. The choice can not be changed after you bought it.",
    },
    {
      name: "Last Will Scroll (Inheritance Item)",
      rarity: "Uncommon",
      itemType: "Scroll",
      attunment: false,
      price: 250,
      description: "When a PC dies, this scroll lets them designate one non-cursed item they carried as “bound to the line.” That item becomes findable by the next character from that player (DM chooses a reasonable moment to recover it).",
    },
    {
      name: "Last Will Scroll",
      rarity: "Uncommon",
      itemType: "Scroll",
      attunment: false,
      price: 250,
      description: "(Inheritance Item) (When a PC dies, this scroll lets them designate one non-cursed item they carried as “bound to the line.” That item becomes findable by the next character from that player (DM chooses a reasonable moment to recover it).)",
    },
    {
      name: "Soul-bound Compass",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "Requires attunement. At dawn, choose a fallen/retired PC and one unresolved goal (or let the DM choose). The needle points toward the nearest meaningful lead—place, person, or clue—tied to that thread. While following it, you have advantage on Survival checks to navigate or track. If there is no valid thread on this plane, it points true north and grows icy cold.",
    },
    {
      name: "Blast from the Past",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Blow into this horn and you will “receive” one mundane or magical item from one of your retired or deceased PCs. The item must be one you previously owned, cannot be an artifact, and is subject to DM approval. If the item is unique in the campaign, it cannot be duplicated—this creates a single, story-consistent return.",
    },
    {
      name: "Gjallarhorn Replica",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "Requires attunement. As an action, blow the horn; creatures within 60 ft that can hear you are affected. Choose Rally (allies gain temp HP equal to your proficiency bonus + your Cha modifier and advantage on their next saving throw against fear within 1 minute) or Dread (enemies must make a Wisdom save, DC = 8 + PB + Cha; on a failure they are frightened of you until the end of your next turn). Once per long rest.",
    },
    {
      name: "Langskip Whistle",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "Requires attunement. While outdoors, as an action you whistle to summon a spectral langskip and ghostly crew for 1 hour. It can carry up to 10 Medium creatures and their gear, and travels on water (it may also “skim” across calm ground like mist at half speed). Its speed is 40 ft + 10 ft for each of your PCs that has died or retired (max +100). Once per long rest.",
    },
    {
      name: "Harald Pendant",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "Requires attunement. Once per long rest, as a bonus action you invoke the name of a fallen/retired hero you played. For 10 minutes you take on a spectral aspect: you gain one skill proficiency they had (or expertise if you already have that proficiency), can speak any languages they spoke, and once during the duration you may add a d10 to an ability check, attack roll, or saving throw. Your eyes and voice briefly echo theirs.",
    }
  ],
};
