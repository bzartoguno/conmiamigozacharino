import { Item, Tribe } from "../types";

export interface LabyrinthineLibraryItem extends Item {
  priceText?: string;
}

export const tribeLabyrinthineLibrary: Tribe & {
  items: LabyrinthineLibraryItem[];
} = {
  name: "Labyrinthine Library",
  owner: "Larry",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "If your looking to buy books we don't do that here, all books in here must stay sadly.",
          "Welcome to Labyrinthine Library, please be quiet; the books are sleeping. It's hard to put them back to sleep.",
          "Yes, this is a dungeon, but we are not a part of the Dungeon Crawler Guild. This is considered an easy dungeon, but you will have to fight for knowledge.",
          "Don't worry the books here will regenerate so if you cut one in half don't worry anout it.",
          "If you come across an ink or paper element, leave it be. It's just reprinting old books that adventures set on fire.",
          "Listen, I can't quite leave the desk at the moment. I need to return some books; if you give me a hand and quietly put these books back for me, that would be great! Make a DC 14 Stealth check to quietly make your way into the labyrinth. If you succeed, I’ll pay you 25 gp. If you fail, you take 1 point of damage, get a bandage for the paper cut, and receive 5 gp.",

          "If your looking to buy books we don't do that here, all books in here must stay sadly.",
          "Welcome to Labyrinthine Library, please be quiet; the books are sleeping. It's hard to put them back to sleep.",
          "Yes, this is a dungeon, but we are not a part of the Dungeon Crawler Guild. This is considered an easy dungeon, but you will have to fight for knowledge.",
          "Don't worry the books here will regenerate so if you cut one in half don't worry anout it.",
          "If you come across an ink or paper element, leave it be. It's just reprinting old books that adventures set on fire.",
          "If your looking to buy books we don't do that here, all books in here must stay sadly.",
          "Welcome to Labyrinthine Library, please be quiet; the books are sleeping. It's hard to put them back to sleep.",
          "Yes, this is a dungeon, but we are not a part of the Dungeon Crawler Guild. This is considered an easy dungeon, but you will have to fight for knowledge.",
          "Don't worry the books here will regenerate so if you cut one in half don't worry anout it.",
          "If you come across an ink or paper element, leave it be. It's just reprinting old books that adventures set on fire.",
          "If your looking to buy books we don't do that here, all books in here must stay sadly.",
          "Welcome to Labyrinthine Library, please be quiet; the books are sleeping. It's hard to put them back to sleep.",
          "Yes, this is a dungeon, but we are not a part of the Dungeon Crawler Guild. This is considered an easy dungeon, but you will have to fight for knowledge.",
          "Don't worry the books here will regenerate so if you cut one in half don't worry anout it.",
          "If you come across an ink or paper element, leave it be. It's just reprinting old books that adventures set on fire.",
          
          ],
  items: [
    {
      name: "Are you looking for knowledge?",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "When you're ready to explore, let me know what interests you. You can choose a specific topic or go for a general overview. But be warned - each level you explore will require a greater toll. You might lose health, spell slots, or even unique abilities. However, the deeper you go, the more knowledge you'll gain.",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "The Labyrinth Library is definitely worth the risk. You'll uncover a wealth of information about your chosen topic. So, if you're ready for the challenge, prepare for an adventure full of rewards!",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "",
    },
    {
      name: "Heart Weaver's Primer",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This pristine book smells faintly of a random scent you find pleasing. When found, the book contains the following spells: Antipathy/Sympathy, Charm Person, Dominate Person, Enthrall, Hypnotic Pattern, Modify Memory, and Suggestion. It functions as a spellbook for you.
While you are holding the book, you can use it as a spellcasting focus for your wizard spells.
The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:
- If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the enchantment school.
- When you cast an enchantment spell, you can expend 1 charge to impose disadvantage on the first saving throw one target makes against the spell.`,
    },
    {
      name: "Teleportation Tablet",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `This clay tablet is eight inches long, four inches wide, and half an inch thick. Inscribed on it is the sigil sequence for a permanent teleportation circle. A creature that studies the sequence for 10 minutes can make a DC 21 Intelligence (Arcana) check, learning the circle’s destination on a success.
You can use an action to break the tablet in half, turning it to dust. If the tablet is broken while it is on the same plane of existence as the teleportation circle whose sigil sequence was engraved on it, a 10-foot-diameter teleportation circle of glowing blue light appears on the ground in an unoccupied space you choose within 30 feet of you. This teleportation circle has the characteristics of one created using the Teleportation Circle spell, except that it connects to the teleportation circle whose sigil sequence appears on the tablet.
The teleportation circle created by the tablet disappears at the end of your next turn.`,
    },
    {
      name: "Feywild Shard",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This warm crystal glints with the sunset colors of the Feywild sky and evokes whispers of emotional memory. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.
When you use a Metamagic option on a spell while you are holding or wearing the shard, you can roll on the Wild Magic Surge table in the Player's Handbook. If the result is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.
If you don't have the Wild Magic Sorcerous Origin, once this property is used to roll on the Wild Magic Surge table, it can't be used again until the next dawn.`,
    },
    {
      name: "Draakhorn",
      rarity: "Unique",
      itemType: "Wondrous Item",
      attunment: false,
      price: 20000,
      description: `The Draakhorn was a gift from Tiamat in the war between dragons and giants. It was once the horn of her ancient red dragon consort, Ephelomon, that she gave to dragonkind to help them in their war against the giants. The Draakhorn is a signaling device, and it is so large that it requires two Medium creatures (or one Large or larger) to hold it while a third creature sounds it, making the earth resonate to its call. The horn has been blasted with fire into a dark ebony hue and is wrapped in bands of bronze with draconic runes that glow with purple eldritch fire.
The low, moaning drone of the Draakhorn discomfits normal animals within a few miles, and it alerts all dragons within two thousand miles to rise and be wary, for great danger is at hand. Coded blasts were once used to signal specific messages. Knowledge of those codes has been lost to the ages.
Those with knowledge of the Draakhorn’s history know that it was first built to signal danger to chromatic dragons —- a purpose the Cult of the Dragon has corrupted to call chromatic dragons to the Well of Dragons from across the North.
While the horn is sounding, a creature must make a DC 15 Constitution saving throw the first time on a turn the creature enters a 150-foot cone in front of the horn or starts its turn there. On a failed save, the creature takes 27 (6d8) thunder damage and is knocked prone. On a successful save, the creature takes half damage and isn’t knocked prone. The horn can’t be turned or aimed at a specific target.`,
    }
  ],
};
