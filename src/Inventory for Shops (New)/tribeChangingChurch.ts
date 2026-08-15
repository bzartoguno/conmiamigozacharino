import { Tribe } from "./types";

export const tribeChangingChurch: Tribe = {
  name: "Changing Church",
  owner: "All Father",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "Welcome, child. Do not be afraid. The building is supposed to change. It is a holy structure that can shift to fit the needs of any faith.",
          "There are a million paths in this world, but any holy figure will tell you they can all be reduced to one: love one another.",
          "'The most important step a person can take. It's not the first one, is it? It's the next one.' A wise man told me that once, and I believe it is one of the truest things out there.",
          "We practice nearly all faiths, in preparation for anyone interested in the ones above.",
          "Worrying is like worshiping the problem; you can stop at any time.",
          "Child, I beg you for your aid. There is a poor child in a house just down the street, possessed by a demon. If you come with me, we may exorcise this fiend. I'll go through the ritual; you just need to make a DC 14 Religion check to help me sort these. If you succeed, I’ll give you a Supreme Healing Potion (Heals 10d4+20). If you fail, don't worry—we were able to save the child, and I'll give you a Healing Potion (Heals 2d4+2).",

          "Welcome, child. Do not be afraid. The building is supposed to change. It is a holy structure that can shift to fit the needs of any faith.",
          "There are a million paths in this world, but any holy figure will tell you they can all be reduced to one: love one another.",
          "'The most important step a person can take. It's not the first one, is it? It's the next one.' A wise man told me that once, and I believe it is one of the truest things out there.",
          "We practice nearly all faiths, in preparation for anyone interested in the ones above.",
          "Worrying is like worshiping the problem; you can stop at any time.","Welcome, child. Do not be afraid. The building is supposed to change. It is a holy structure that can shift to fit the needs of any faith.",
          "There are a million paths in this world, but any holy figure will tell you they can all be reduced to one: love one another.",
          "'The most important step a person can take. It's not the first one, is it? It's the next one.' A wise man told me that once, and I believe it is one of the truest things out there.",
          "We practice nearly all faiths, in preparation for anyone interested in the ones above.",
          "Worrying is like worshiping the problem; you can stop at any time.","Welcome, child. Do not be afraid. The building is supposed to change. It is a holy structure that can shift to fit the needs of any faith.",
          "There are a million paths in this world, but any holy figure will tell you they can all be reduced to one: love one another.",
          "'The most important step a person can take. It's not the first one, is it? It's the next one.' A wise man told me that once, and I believe it is one of the truest things out there.",
          "We practice nearly all faiths, in preparation for anyone interested in the ones above.",
          "Worrying is like worshiping the problem; you can stop at any time.",
          ],
  items: [
    {
      name: "Prosthetic Limb",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This item replaces a lost limb a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die.",
    },
    {
      name: "Strixhaven Pennant",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This magic pennant bears the symbol of Strixhaven or one of its colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. While you wave the pennant, the symbol on it glitters, and the pennant sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
    },
    {
      name: "Holy Avenger",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.
While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.`,
    },
    {
      name: "Holy Symbol of Ravenkind",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The
Holy Symbol of Ravenkind
is a unique holy symbol sacred to the good-hearted faithful of Barovia. It predates the establishment of any church in Barovia. According to legend, it was delivered to a paladin named Lugdana by a giant raven — or an angel in the form of a giant raven. Lugdana used the holy symbol to root out and destroy nests of vampires until her death. The high priests of Ravenloft kept and wore the holy symbol after Lugdana's passing.
The holy symbol is a platinum amulet shaped like the sun, with a large crystal embedded in its center. The holy symbol has 10 charges for the following properties. It regains 1d6 + 4 charges daily at dawn.
Hold Vampires.
As an action, you can expend 1 charge and present the holy symbol to make it flare with holy power. Vampires and vampire spawn within 30 feet of the holy symbol when it flares must make a DC 15 Wisdom saving throw. On a failed save, a target is paralyzed for 1 minute. It can repeat the saving throw at the end of each of its turns to end the effect on itself.
Turn Undead.
If you have the Turn Undead or the Turn the Unholy feature, you can expend 3 charges when you present the holy symbol while using that feature. When you do so, undead have disadvantage on their saving throws against the effect.
Sunlight.
As an action, you can expend 5 charges while presenting the holy symbol to make it shed bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight and lasts for 10 minutes or until you end the effect (no action required).`,
    },
    {
      name: "Belt of Dwarvenkind",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While wearing this belt, you gain the following benefits:
- Your Constitution score increases by 2, to a maximum of 20.
-You have advantage on Charisma (Persuasion) checks made to interact with dwarves.
In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.
- If you aren't a dwarf, you gain the following additional benefits while wearing the belt:
- You have advantage on saving throws against poison, and you have resistance against poison damage.
- You have darkvision out to a range of 60 feet.
- You can speak, read, and write Dwarvish.`,
    },
    {
      name: "Devotee's Censer",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: true,
      price: 1000,
      description: `The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra 1d8 radiant damage.
As a bonus action, you can speak the command word to cause the flail to emanate a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain 1d4 hit points. This property can't be used again until the next dawn`,
    },
    {
      name: "Necklace of Prayer Beads",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This necklace has 1d4 + 2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.
Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.
d20        Bead of …        Spell
1-6        Blessing        Bless
7-12        Curing        Cure Wounds (2nd level) or Lesser Restoration
13-16        Favor        Greater Restoration
17-18        Smiting        Branding Smite
19        Summons        Planar Ally
20        Wind Walking        Wind Walk`,
    },
    {
      name: "Alright Blessing",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Holy Vigor: Gain temporary hit points equal to your level + your Charisma modifier for the next 8 hours.
2- Divine Speed: Your movement speed is doubled for the next 10 minutes.
3- Sacred Shield: For the next hour, gain resistance to necrotic and poison damage.
4- Celestial Vision: For the next 8 hours, gain darkvision out to a range of 60 feet, or an additional 60 feet if you already have darkvision.
5- Enduring Light: Your ability to see in darkness, both magical and non-magical, permanently increases by 30 feet.
6- Sacred Health: Permanently gain +1 bonus to Constitution saving throws.`,
    },
    {
      name: "Balance of Harmony",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This scale bears celestial symbols on one pan and fiendish symbols on the other. You can use the scale to cast Detect Evil and Good as a ritual. Doing so requires you to place the scale on a solid surface, then sprinkle the pans with holy water or place a transparent gem worth 100 gp in each pan. The scale remains motionless if it detects nothing, tips to one side or the other for good (consecrated) or evil (desecrated), and fluctuates slightly if it detects a creature appropriate to the spell but neither good nor evil. By touching the scales after casting the ritual, you instantly learn any information the spell can normally convey, and then the effect ends.",
    },
    {
      name: "Pocket Hymnal & Common Prayers",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A well-loved collection of hymns and everyday prayers with sturdy binding and notes for holy days and rites.",
    },
    {
      name: "Travel Altar Kit",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A compact fold-out altar with a cloth, candle holder, and tiny little slots—perfect for respectful prayers on the road.",
    },
    {
      name: "Minor Blessing",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Light's Guidance: For the next hour, you emit a soft glow, shedding bright light in a 10-foot radius and dim light for an additional 10 feet.
2- Blessed Aura: For the next hour, you and allies within 5 feet gain a +1 bonus to AC.
3- Divine Whisper: Gain advantage on your next Wisdom (Perception) check as a deity guides your senses for the next 24 hours.
4- Celestial Light: A soft, radiant light surrounds you for 1 hour, providing bright light in a 10-foot radius.
5- Purifying Presence: For the next hour, food and drink you touch are purified of poison and disease.
6- Guardian's Grace: For the next 24 hours, the first time you drop to 0 hit points, you instead drop to 1 hit point and are teleported to the last place you slept.`,
    },
    {
      name: "Healing",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Go back up to maximum HP.",
    },
    {
      name: "Ceremony Supply Satchel",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A neatly organized satchel with incense cones, chalk, ribbon, and sealing wax for officiants who like being prepared.",
    },
    {
      name: "Curse/Hex Removal",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Remove a curse or hex.",
    },
    {
      name: "Candle of Invocation",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the Detect Good and Evil spell. The DM chooses the god and associated alignment or determines the alignment randomly.
d20        Alignment
1-2        Chaotic evil
3-4        Chaotic neutral
5-7        Chaotic good
8-9        Neutral evil
10-11        Neutral
12-13        Neutral good
14-15        Lawful evil
16-17        Lawful neutral
18-20        Lawful good
The candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time.
While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot.
Alternatively, when you light the candle for the first time, you can cast the Gate spell with it. Doing so destroys the candle.`,
    },
    {
      name: "Far Gear",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `While attuned to this device, you have a +1 bonus to Charisma saving throws. and you have advantage on Charisma (Intimidation) checks.
Aberrant Ally. You can conjure an aberrant creature from the chaos of the multiverse to serve you. This functions as the Conjure Celestial spell (no concentration required), except the creature you summon is an aberration of challenge rating 4 or lower. Once you use this feature of the far gear, it cannot be used again until the next dawn.
Unnatural Bane. You can cast the Bane spell (save DC 15), which affects any number of creatures within range for 1 minute. Once you use this feature of the far gear, it cannot be used again until the next dawn.
Part of a Whole. While this component is not installed in the Orrery of the Wanderer, its magic might function sporadically or with unpredictable side effects, as determined by the DM.`,
    },
    {
      name: "Omega Blessing",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Eternal Blessing: Choose one skill or tool. You gain permanent proficiency with that skill or tool. If you already have proficiency you gain expertise.
2- Hallowed Healer: When you cast a spell that heals hit points, add an additional d8 for each level you currently have.
3- Heavenly Aura: You permanently gain the ability to cast Sanctuary on yourself once per long rest without using a spell slot.
4- Celestial Resilience: You permanently gain resistance to necrotic and radiant damage.
5- Archangel's Wings: You gain the ability to sprout ethereal wings, granting you a flying speed of 60 feet for up to 1 hour, once per long rest.
 6- Celestial Companion: You gain the Find Familiar spell as a cantrip; the creature type is celestial and takes on traits to represent that.`,
    }
  ],
};
