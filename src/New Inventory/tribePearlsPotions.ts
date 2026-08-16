import { Tribe } from "./types";

export const tribePearlsPotions: Tribe = {
  name: "Pearl's Potions",
  owner: "Pearl",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Oh no, another customer! Please don't talk to me!",
          "H-h-how can I help you today?",
          "Pearl's Potions, I, um... ugh... I forgot what I was going to say...",
          "Please, respectfully, don't talk to me... I get scared when people talk to me...",
          "...",
          "...",
          "...",
          "...",
          "...",
          "...",
          ],
  items: [
    {
      name: "Healing Potion",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Heals 2d4 + 2.",
    },
    {
      name: "Greater Health Potion",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Heals 4d4 + 4.",
    },
    {
      name: "Antidote",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Cures basic poisons.",
    },
    {
      name: "Poison",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
    },
    {
      name: "Superior Healing Potion",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Heals 8d4 + 8.",
    },
    {
      name: "Potion of Growth",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "When you drink this potion, you double in size and grow bigger by one size catagory, weapons deal an additional 1d4. This lasts for 1 hour.",
    },
    {
      name: "Potion of Diminishing",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "When you drink this potion, you shrink in size and grow smaller by one size catagory, weapons deal an 1d4 less. This lasts for 1 hour.",
    },
    {
      name: "Supreme Healing Potion",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Heals 10d4 + 20.",
    },
    {
      name: "Sleep",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "When you drink this potion, you fall unconscious for 8 hour and counts as a long rest if left undisturbed. The potion's magic ends if you take damage or someone uses an action to shake or slap you awake.",
    },
    {
      name: "Hill Giant's Strength",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Increase your STR by +6 for one hour.",
    },
    {
      name: "Shadow Dancer's Nimbleness",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Increase your DEX by +6 for one hour.",
    },
    {
      name: "Deva's Enlightenment",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Increase your INT by +6 for one hour.",
    },
    {
      name: "Unicorn's Empathy",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Increase your WIS by +6 for one hour.",
    },
    {
      name: "Potion of Sphinx's Grace",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Increase your CHA by +6 for one hour.",
    },
    {
      name: "Invisible",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
    },
    {
      name: "Potion of Climbing",
      rarity: "Common",
      itemType: "Potion",
      attunment: false,
      price: 40,
      description: "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.",
    },
    {
      name: "Potion of Healing",
      rarity: "Common",
      itemType: "Potion",
      attunment: false,
      price: 40,
      description: `You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.
Heal 2d4 + 2`,
    },
    {
      name: "Potion of Watchful Rest",
      rarity: "Common",
      itemType: "Potion",
      attunment: false,
      price: 40,
      description: `When you drink this potion, you gain the following benefits for the next 8 hours: magic can't put you to sleep, and you can remain awake during a long rest and still gain its benefits.
This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves.`,
    },
    {
      name: "Belt of Giant Strength",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no effect on you.
Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The Belt of Stone Giant Strength and the Belt of Frost Giant Strength look different, but they have the same effect.
Type | Strength | Rarity
Hill Giant | 21 | Rare`,
    },
    {
      name: "Elixir of Health",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.",
    },
    {
      name: "Oil of Etherealness",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.",
    },
    {
      name: "Periapt of Proof against Poison",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.",
    },
    {
      name: "Potion of Aqueous Form",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: `When you drink this potion, you transform into a pool of water. You return to your true form after 10 minutes or if you are incapacitated or die.
You're under the following effects while in this form:
Liquid Movement. You have a swimming speed of 30 feet. You can move over or through other liquids. You can enter and occupy the space of another creature. You can rise up to your normal height, and you can pass through even Tiny openings. You extinguish nonmagical flames in any space you enter.
Watery Resilience. You have resistance to nonmagical damage. You also have advantage on Strength, Dexterity, and Constitution saving throws.
Limitations. You can't talk, attack, cast spells, or activate magic items. Any objects you were carrying or wearing meld into your new form and are inaccessible, though you continue to be affected by anything you're wearing, such as armor.`,
    },
    {
      name: "Potion of Clairvoyance",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink this potion, you gain the effect of the Clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
    },
    {
      name: "Potion of Diminution",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink this potion, you gain the \"reduce\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
    },
    {
      name: "Potion of Gaseous Form",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water.",
    },
    {
      name: "Potion of Giant Strength",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: `When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). This potion has no effect on you if your Strength is equal to or greater than that score.
This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.
Type of Giant | Strength | Rarity
Frost/Stone Giant | 23 | Rare
Fire Giant | 25 | Rare`,
    },
    {
      name: "Potion of Superior Healing",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: `You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.
Heal 8d4+8`,
    },
    {
      name: "Potion of Heroism",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no concentration required). This blue potion bubbles and steams as if boiling.",
    },
    {
      name: "Potion of Invulnerability",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquified iron.",
    },
    {
      name: "Potion of Maximum Power",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: `The first time you cast a damage-dealing spell of 4th level or lower within 1 minute after drinking the potion, instead of rolling dice to determine the damage dealt, you can instead use the highest number possible for each die.
This glowing purple liquid smells of sugar and plum, but it has a muddy taste`,
    },
    {
      name: "Potion of Mind Control",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: `When you drink a Potion of Mind Control, you can cast a Dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.
A Potion of Mind Control produces the effect of a Dominate Beast, a Dominate Person (humanoid), or a Dominate Monster spell (see the table below). If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.
Potion of …        Rarity
Mind control (beast)        Rare
Mind control (humanoid)        Rare`,
    },
    {
      name: "Potion of Mind Reading",
      rarity: "Rare",
      itemType: "Potion",
      attunment: false,
      price: 1000,
      description: "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
    },
    {
      name: "Blood of the Lycanthrope Antidote",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "This clear potion has dark red flecks within, resembling clotted blood. When you drink this potion, it removes the curse of lycanthropy from you if that curse was imposed by a lycanthrope’s bite or similar effect.",
    },
    {
      name: "Bottled Breath",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.
If you exhale the breath, you gain the effect of the Gust of Wind spell. If you hold the breath, you don’t need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn’t give you the benefit of exhaling the breath.`,
    },
    {
      name: "Mummy Rot Antidote",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "White dust swirls constantly within this pale gray potion. When you drink the potion, it cures you of mummy rot.",
    },
    {
      name: "Oil of Slipperiness",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a Freedom of Movement spell for 8 hours.
Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.`,
    },
    {
      name: "Periapt of Health",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed while you wear the pendant.",
    },
    {
      name: "Philter of Love",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
    },
    {
      name: "Potion of Advantage",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `When you drink this potion, you gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour.
This potion takes the form of a sparkling, golden mist that moves and pours like water`,
    },
    {
      name: "Potion of Animal Friendship",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
    },
    {
      name: "Potion of Fire Breath",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.
This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.`,
    },
    {
      name: "Potion of Giant Strength",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). This potion has no effect on you if your Strength is equal to or greater than that score.
This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.
Type of Giant | Strength | Rarity
Hill Giant | 21 | Uncommon`,
    },
    {
      name: "Potion of Growth",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "When you drink this potion, you gain the \"enlarge\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny beat to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
    },
    {
      name: "Potion of Greater Healing",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.
Heal 4d4+4`,
    },
    {
      name: "Potion of Poison",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `This concoction looks, smells, and tastes like a Potion of Healing or other beneficial potion. However, it is actually poison masked by illusion magic. An Identify spell reveals its true nature.
If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.`,
    },
    {
      name: "Potion Of Polychromy",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `When you drink this potion, you and everything you are wearing or carrying take on a rainbow-hued appearance for 1 hour. During that time, you can use a bonus action to turn any color or combination of colors you choose. If you mimic the colors of your surroundings, your hues continually shift to match your surroundings, and you have advantage on Dexterity (Stealth) checks until you change your colors again or the potion wears off.
The potion is separated into seven brightly colored bands of immiscible liquids and has a syrupy taste.`,
    },
    {
      name: "Potion of Psionic Fortitude",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `When you drink this potion, you have advantage for 1 hour on saving throws you make to avoid or end the charmed or stunned condition on yourself.
This black potion swirls with shimmering flecks of pink and purple.`,
    },
    {
      name: "Potion of Resistance",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: `When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below.
d10 Damage Type
1 Acid
2 Cold
3 Fire
4 Force
5 Lightning
6 Necrotic
7 Poison
8 Psychic
9 Radiant
10 Thunder`,
    },
    {
      name: "Potion of Water Breathing",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
    },
    {
      name: "Thessaltoxin Antidote",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "This potion appears to change color and texture each time you look at it. When you drink the potion, it ends the Polymorph effect imposed by thessaltoxin.",
    },
    {
      name: "Belt of Giant Strength",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no effect on you.
Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The Belt of Stone Giant Strength and the Belt of Frost Giant Strength look different, but they have the same effect.
Type | Strength | Rarity
Stone/Frost Giant | 23 | Very Rare
Fire Giant | 25 | Very Rare`,
    },
    {
      name: "Oil of Sharpness",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.",
    },
    {
      name: "Potion of Flying",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
    },
    {
      name: "Potion of Giant Strength",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). This potion has no effect on you if your Strength is equal to or greater than that score.
This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.
Type of Giant | Strength | Rarity
Cloud Giant | 27 | Very Rare`,
    },
    {
      name: "Potion of Supreme Healing",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.
Heal 10d4+20`,
    },
    {
      name: "Potion of Invisibility",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
    },
    {
      name: "Potion of Longevity",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a
potion of longevity
, there is a 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.`,
    },
    {
      name: "Potion of Mind Control",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `When you drink a Potion of Mind Control, you can cast a Dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.
A Potion of Mind Control produces the effect of a Dominate Beast, a Dominate Person (humanoid), or a Dominate Monster spell (see the table below). If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.
Potion of …        Rarity
Mind control (monster)	Very rare`,
    },
    {
      name: "Potion of Possibility",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `When you drink this clear potion, you gain two Fragments of Possibility, each of which looks like a Tiny, grayish bead of energy that follows you around, staying within 1 foot of you at all times. Each fragment lasts for 8 hours or until used.
When you make an attack roll, an ability check, or a saving throw, you can expend your fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against you, you can expend your fragment to roll a d20 and choose which of the d20s to use, the one you rolled or the one the attacker rolled.
If the original d20 roll has advantage or disadvantage, you roll your d20 after advantage or disadvantage has been applied to the original roll.
While you have one or more Fragments of Possibility from this potion, you can't gain another Fragment of Possibility from any source.`,
    },
    {
      name: "Potion of Speed",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: `When you drink this potion, you gain the effect of the
Haste
spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.`,
    },
    {
      name: "Potion of Vitality",
      rarity: "Very Rare",
      itemType: "Potion",
      attunment: false,
      price: 2500,
      description: "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
    }
  ],
};
