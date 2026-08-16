import { Item, Tribe } from "./types";

export interface PiggyBankItem extends Item {
  priceLabel?: string;
}

interface PiggyBankTribe extends Omit<Tribe, "items"> {
  items: PiggyBankItem[];
}

export const tribePiggyBank: PiggyBankTribe = {
  name: "The Piggy Bank, no hammers inside.",
  owner: "Mr. Scrooge McDuck",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "My name is Scrooge McDuck, and I run the world's most successful banking business in the world.",
          "Here at the Piggy Bank, we keep your money safe so you don't have to!",
          "Money shouldn't be idle and must be put to work, you know. Just having petty cash is good but you might just as well be stranded on a desert island. For all the good it does.",
          "Money should never stagnate, but like ocean currents, circulate, like the ocean currents that control the world's weather. You see, circulating money controls the economy. Money must keep moving to fulfill its obligation. And if you squeeze it too tight, you'll stop its circulation.",
          "Bah, humbug!",
          ],
  items: [
    {
      name: "Set up an account",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Deposet any anount of money and it will have grow by 5% every seven days. Please keep track of this yourself.",
      priceLabel: "Free",
    },
    {
      name: "Turn in Stamps",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Rewards may vary depending on what other shops are in town",
      priceLabel: "Deposit 50 stamps & get a special reward!",
    },
    {
      name: "Local Quests",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Do a quick simple local quest around town for some quick cash, quests may vary",
    },
    {
      name: "Guild Quest",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Only avalible if there is a guild in town and varies on which guild it is.",
    },
    {
      name: "Town Quest",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Sometimes we get problems that our local heros don't have the time for or can't handle as such we get some outside assistance to help us out. As such the avaliblity of this quest may vary.",
    },
    {
      name: "Spellshard",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that's no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within.
While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank pages in the shard requires concentration (as if concentrating on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it.
A wizard can use a spellshard as a spellbook, with the usual cost in gold and time to scribe a spell into the shard.`,
    },
    {
      name: "Alchemical Compendium",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `Acrid odors cling to this stained, heavy volume. The book's metal fittings are copper, iron, lead, silver, and gold, some frozen mid-transition from one metal to another. When found, the book contains the following spells: Enlarge/Reduce, Feather Fall, Flesh to Stone, Gaseous Form, Magic Weapon, and Polymorph. It functions as a spellbook for you.
While you are holding the book, you can use it as a spellcasting focus for your wizard spells.
The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:
- If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the transmutation school.
- As an action, you can touch a nonmagical object that isn't being worn or carried and spend a number of charges to transform the target into another object. For 1 charge, the object can be no larger than 1 foot on a side. You can spend additional charges to increase the maximum dimensions by 2 feet per charge. The new object must have a gold value equal to or less than the original.`,
    },
    {
      name: "Shard of Xeluan",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This 1-foot-long shard of obsidian has veins of silver and gold beneath its cold surface.
Empowered Magic. While holding the shard, you can use it as a spellcasting focus, and it gives you a +1 bonus to your spell attack rolls.
Enhanced Strength. Your Strength score increases by 4 while the shard is on your person. The shard can't raise your Strength score above 22.
Curse. Attuning to this item extends its curse to you. You remain cursed until you are targeted by a Remove Curse spell or similar magic, or until the shard is reattached to Xeluan's petrified heart.
The shard's curse causes misfortune to befall you. When you roll a 1 on an attack roll, an ability check, or a saving throw, roll on the Shard Misfortunes table to determine the misfortune. For as long as this misfortune lasts, no other shard misfortunes befall you.
Shard Misfortunes
d6        Misfortune
1        You accidentally cut yourself with the shard and are poisoned until the next dawn.
2        You experience a vision of an ancient calamity a beautiful city threatened by crumbling mountains and erupting volcanoes and are stunned until the end of your next turn.
3        For a few seconds, the ground shakes under you. You and each creature within 10 feet of you must succeed on a DC 16 Dexterity saving throw or be knocked prone.
4        The shard releases three glowing darts of magical force that target one random creature within 30 feet of you. If no such target exists, you become the target. Each dart hits automatically and deals 3 (1d4 + 1) force damage to the target.
5        Until the next dawn, Beasts with an Intelligence score of 3 or lower are hostile to you.
6        Nothing seems to go your way. Until the next dawn, you have disadvantage on ability checks.`,
    },
    {
      name: "Soul Coin",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Soul coins are about 5 inches across and about an inch thick, minted from infernal iron. Each coin weighs one-third of a pound, and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each soul coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.
Carrying Soul Coins. To hold a soul coin is to feel the soul bound within it — overcome with rage or fraught with despair.
An evil creature can carry as many soul coins as it wishes (up to its maximum weight allowance). A nonevil creature can carry a number of soul coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of soul coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws.
Using a Soul Coin. A soul coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a soul coin and use it to do one of the following:
Drain Life. You siphon away some of the soul's essence and gain 1d10 temporary hit points.
Query. You telepathically ask the soul a question and receive a brief telepathic response. which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.
Freeing a Soul. Casting a spell that removes a curse on a soul coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from soul coins typically emerge from the River Styx as lemure devils.
A soul can also be freed by destroying the coin that contains it. A soul coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by a hellfire weapon (BG:DA, page 223) or an infernal war machine's furnace (BG:DA, page 217).
Freeing a soul from a soul coin is considered a good act, even if the soul belongs to an evil creature.
Hellish Currency. Soul coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling. and reward the faithful for services rendered.
Soul coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes.`,
    },
    {
      name: "Bracelet of Rock Magic",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `While you wear this gold bracelet, it grants you immunity to being petrified, and it allows you to cast Flesh to Stone (save DC 15) as an action. Once the spell has been cast three times, the bracelet can no longer cast it. Thereafter, you can cast Stone Shape as an action. After you have done this thirteen times, the bracelet loses its magic and turns from gold to lead.
Curse. The bracelet's affinity with earth manifests as an unusual curse. Creatures of flesh that are strongly related to earth and stone, such as stone giants and dwarves, have advantage on the saving throw against Flesh to Stone cast from the bracelet. If such a creature's save is successful, the bracelet breaks your attunement to it and casts the spell on you. You make your saving throw with disadvantage, and on a failed save you are petrified instantly.`,
    }
  ],
};
