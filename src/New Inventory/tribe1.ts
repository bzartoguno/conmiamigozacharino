import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe1: Tribe = {
  name: "Beastbinders Tribe",
  percentAngry: 10,
  priceVariability: 97,
  insults: createGoblinExcuses("Beastbinders Tribe"),

  items: [
    {
      name: "Morning Screamer",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "(Most likely a stolen rooster.)",
    },
    {
      name: "Goblin Clothes",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "(Clothes stolen from a child who neglected to put them away.)",
    },
    {
      name: "A Useless Piece of Paper",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A coupon that offers 10% off your next purchase anywhere; valid for one use only.)",
    },
    {
      name: "Mini Moo Moo",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A stolen calf.)",
    },
    {
      name: "Beehive",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(Contains an angry Asian giant hornet hive in a jar. Deals 4d4 poison damage; the hornets stay 1d4 rounds before leaving.)",
    },
    {
      name: "Fish Friend Suit",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(Shark suit, available in blue or gray.)",
    },
    {
      name: "Nom",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(No one likes him, and he keeps finding his way back despite attempts to get rid of him. Thus, he is bound in rope and offered to you.)",
    },
    {
      name: "Silver Gr Gr",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A silverback gorilla that comes with 16 metal baseball bats.)",
    },
    {
      name: "Walking Fleece",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A little lamb, wearing a collar that states it belongs to Mary.)",
    },
    {
      name: "Nope Noodle",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A non-venomous snake that enjoys masquerading as a scarf.)",
    },
    {
      name: "Da Forever Friend",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(An origami frog made with love and care.)",
    },
    {
      name: "Sadness",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(A rubber ball that never bounces.)",
    },
    {
      name: "Oh no the squirrels are back!",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(Horn of the Hunt, blowing into this horn will cause all creatures with an INT of 8 or less to come running toward your location.)",
    },
    {
      name: "Squirrel-Be-Gone!",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(Beast Flare, lighting this homemade flare will cause all creatures with an INT of 4 or less to run away.)",
    },
    {
      name: "Baby!",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "(It's a bag of flour wrapped in a blanket with big googly eyes. It kind of looks like a baby if you squint. When you open the bag, flour explodes everywhere, dealing 1d4 damage to all creatures in a 1,000-foot radius.)",
    },
    {
      name: "Ersatz Eye",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
    },
    {
      name: "Cape of the Mountebank",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `This cape smells faintly of brimstone. While wearing it, you can use it to cast the Dimension Door spell as an action. This property of the cape can't be used again until the next dawn.
When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.`,
    },
    {
      name: "Eyes of Charming",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.",
    },
    {
      name: "Eyes of the Eagle",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
    },
    {
      name: "Lord's Ensemble",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `The Masked Lords of Waterdeep don this ensemble when meeting with one another. This raiment renders each lord indistinguishable from the others. The ensemble consists of three pieces — a helm, an amulet, and a robe — that function as a single magic item when worn together, but only within the city of Waterdeep and its sewers. You become attuned to the ensemble as a single item.
Lord's Helm.
This bucket helm covers your head and conceals your face. Screens over the eyes help to shroud your identity without blinding you. While you wear the helm, your voice is magically altered to sound genderless, and you are immune to magic that allows other creatures to read your thoughts, to determine whether you are lying, to know your alignment, or to know your creature type. Creatures can communicate telepathically with you only if you allow it.
Lord's Amulet.
This amulet bears the crest of Waterdeep. It functions as an
Amulet of Proof Against Detection and Location
.
Lord's Robe.
This elegant robe functions as a
Ring of Free Action
, and it creates the illusion that you have a nondescript. androgynous humanoid build and stand 6 feet tall.`,
    },
    {
      name: "Pennant of the Vind Rune",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This blue pennant is crafted from silk and is five feet long and whips about as if buffeted by a wind. The vind (wind) rune appears on its surface, looking almost like a cloud. The pennant has the following properties, which work only while it's on your person.
Wind Step.
As an action, you fly up to 20 feet. If you don't land at the end of this flight, you fall unless you have another means of staying aloft.
Comforting Wind.
You can't suffocate.
Wind's Grasp.
As a reaction when you fall, you can cause yourself to take no damage from the fall. Once you use this property, you can't use it again until you finish a short or long rest.
Wind Walker.
While you are attuned to this rune, you can cast
Levitate
as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.
Gift of Wind.
You can transfer the pennant's magic to a nonmagical item — a suit of armor, a pair of boots, or a cloak — by tracing the vind rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the pennant is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:
Armor.
The armor is now an uncommon magic item that requires attunement. You gain a bonus to speed of 5 feet while you wear the armor, and if it normally imposes disadvantage on Stealth checks, it no longer does so.
Boots/Cloak.
The pair of boots or cloak is now a rare magic item that requires attunement. While wearing the item, you can convert up to 20 feet of your movement on each of your turns into flight. If you don't land at the end of this flight, you fall unless you have another means of staying aloft. You can also cast
Feather Fall
once from the item, and you regain the ability to do so when you finish a short or long rest.`,
    }
  ],
};
