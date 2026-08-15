import { Item, Tribe } from "./types";

interface ComedyGoldItem extends Item {
  priceLabel?: string;
}

interface ComedyGoldTribe extends Omit<Tribe, "items"> {
  items: ComedyGoldItem[];
}

export const tribeComedyGold: ComedyGoldTribe = {
  name: "Comedy Gold",
  owner: "Lady Laugh a Lot",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          "Hello~ There I'm so glad you made it!",
          "Everything I do seems to fail upwards! I married a poor lord for his incredible music and now I'm a lady in high standing! I told him that we should invest in a theatre so we sink our money and get out of politics, but now we are worldwide! I then told him that we should teach commoners and give them large grants for fine art degrees to throw away all this money. But they turn around and start working for us instead of taking the money and running away!",
          "I'd tell you a depression joke but I suffer from mood swings! Ohohohohohohoh!",
          "What do you call it when the queen farts? A noble gas! Ohohohohohohoh!",
          "Knock knock [Who's there?] Olive! [Olive who?] I love you too! Ohohohohohohoh!",
          "Oh my this simple won't do at all! You there adventure! You look like a lively fell-o give I simply need to hear a good joke! Please tell me one (Make a DC 14 Performance. If you succeed, she give a great big belly laugh and pays you 50 gp. If you fail, you get a polite laugh and she pays you 10 gp.)",

          "Hello~ There I'm so glad you made it!",
          "Everything I do seems to fail upwards! I married a poor lord for his incredible music and now I'm a lady in high standing! I told him that we should invest in a theatre so we sink our money and get out of politics, but now we are worldwide! I then told him that we should teach commoners and give them large grants for fine art degrees to throw away all this money. But they turn around and start working for us instead of taking the money and running away!",
          "I'd tell you a depression joke but I suffer from mood swings! Ohohohohohohoh!",
          "What do you call it when the queen farts? A noble gas! Ohohohohohohoh!",
          "Knock knock [Who's there?] Olive! [Olive who?] I love you too! Ohohohohohohoh!",
          "Hello~ There I'm so glad you made it!",
          "Everything I do seems to fail upwards! I married a poor lord for his incredible music and now I'm a lady in high standing! I told him that we should invest in a theatre so we sink our money and get out of politics, but now we are worldwide! I then told him that we should teach commoners and give them large grants for fine art degrees to throw away all this money. But they turn around and start working for us instead of taking the money and running away!",
          "I'd tell you a depression joke but I suffer from mood swings! Ohohohohohohoh!",
          "What do you call it when the queen farts? A noble gas! Ohohohohohohoh!",
          "Knock knock [Who's there?] Olive! [Olive who?] I love you too! Ohohohohohohoh!",
          "Hello~ There I'm so glad you made it!",
          "Everything I do seems to fail upwards! I married a poor lord for his incredible music and now I'm a lady in high standing! I told him that we should invest in a theatre so we sink our money and get out of politics, but now we are worldwide! I then told him that we should teach commoners and give them large grants for fine art degrees to throw away all this money. But they turn around and start working for us instead of taking the money and running away!",
          "I'd tell you a depression joke but I suffer from mood swings! Ohohohohohohoh!",
          "What do you call it when the queen farts? A noble gas! Ohohohohohohoh!",
          "Knock knock [Who's there?] Olive! [Olive who?] I love you too! Ohohohohohohoh!",
          
          ],
  items: [
    {
      name: "Glamerweave",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.
When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the uncommon version of glamerweave, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn.`,
    },
    {
      name: "Instrument of Illusions",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
    },
    {
      name: "Instrument of Scribing",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: `This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting Dispel Magic on the message erases it. Otherwise, the message fades away after 24 hours.
The instrument regains all expended charges daily at dawn.`,
    },
    {
      name: "Pipe of Remembrance",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This long, delicate wooden pipe features a bowl made from smooth river stone. When the pipe is lit. smoke exhaled from it does not dissipate, instead lingering around the bearer. After 10 minutes, the smoke forms moving shapes that reenact the bearer's most impressive and heroic achievements for 5 minutes. When this realistic performance is complete, the smoke dissipates. The pipe can't be used this way again until the next dawn.",
    },
    {
      name: "Wand of Conducting",
      rarity: "Common",
      itemType: "Wand",
      attunment: false,
      price: 40,
      description: `This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.
The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.`,
    },
    {
      name: "Dragon Mask",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Each
dragon mask
is a legendary wondrous item that reshapes to fit the face and head of a wearer attuned to it. While you are wearing any
dragon mask
and attuned to it, you gain the following benefits.
Damage Absorption.
You have resistance against the mask's damage type. If you already have resistance to that damage type from another source, you instead have immunity to that damage type. If you already have immunity to that damage type from another source, whenever you are subjected to damage of that type, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.
Draconic Majesty.
While you are wearing no armor, you can add your Charisma bonus to your Armor Class.
Dragon Breath.
If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.
Dragon Sight.
You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.
Dragon Tongue.
You can speak and understand Draconic. You also have advantage on any Charisma check you make against dragons that share the mask's color.
Legendary Resistance (1/Day).
If you fail a saving throw, you can choose to succeed instead.
Black Dragon Mask
This horned mask of glossy ebony has a skull-like mien. Its damage type is acid. While you wear the mask, you gain the following benefit, in addition to those the dragon masks share.
Water Breathing.
You can breathe underwater.
Blue Dragon Mask
This mask of glossy azure has spikes around its edges and a ridged horn in its center. Its damage type is lightning. While you wear the mask, you gain the following benefit, in addition to those the dragon masks share.
Lingering Shock.
If you deal lightning damage to a creature, it can't take reactions until its next turn.
Green Dragon Mask
This mottled green mask is surmounted by a frilled crest and has leathery spiked plates along its jaw. Its damage type is poison. While you wear the mask, you gain the following benefit, in addition to those the dragon masks share.
Water Breathing.
You can breathe underwater.
Red Dragon Mask
This mask of glossy crimson has swept-back horns and spiked cheek ridges. Its damage type is fire. While you wear the mask, you gain the following benefit, in addition to those the dragon masks share.
Dragon Fire.
If you deal fire damage to a creature or flammable object, it starts burning. At the start of each of its turns, a creature burning in this way takes 1d6 fire damage. A creature that can reach the burning target can use an action to extinguish the fire.
White Dragon Mask
This gleaming mask is white with highlights of pale blue and is topped by a spined crest. Its damage type is cold. While you wear the mask, you gain the following benefit, in addition to those the dragon masks share.
Winter's Fury.
While your current hit points are equal to or less than half your hit point maximum, you deal an extra 1d8 cold damage with your melee attacks.`,
    },
    {
      name: "Instrument of the Bards",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.
You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.
You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.
===PLEASE PICK ONE===
Instrument | Rarity | Spells
All | - | Fly, Invisibility, Levitate, Protection from Evil and Good, plus the spells listed for the particular instrument
Ollamh harp | Legendary | Confusion, Control Weather, Fire Storm`,
    },
    {
      name: "Jester's Mask",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This colorful, harlequin domino mask is edged with pearls. While wearing this mask, you gain the following benefits:
Charismatic Focus.
You can use the mask as a spellcasting focus. You gain a +3 bonus to any spell attack rolls and spell saving throw DCs that use Charisma as the spellcasting ability.
Marvelous Escape.
When a creature hits you with an attack roll, you can use your reaction to disappear in a puff of smoke and colorful sparkles. You take no damage and instead teleport, along with anything you are wearing or carrying, to an unoccupied space you can see within 30 feet of yourself. Once this reaction is used, it can’t be used again until the next dawn.
Topsy-Turvy.
When you roll a 1 on a d20, you can treat the roll as if you rolled a 20 instead. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Instrument of the Bards",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.
You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.
You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.
===PLEASE PICK ONE===
Instrument | Rarity | Spells
All | - | Fly, Invisibility, Levitate, Protection from Evil and Good, plus the spells listed for the particular instrument
Canaith mandolin | Rare | Cure Wounds (3rd level), Dispel Magic, Protection from Energy (lightning only)
Cli lyre | Rare | Stone Shape, Wall of Fire, Wind Wall`,
    },
    {
      name: "Reveler's Concertina",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While holding this concertina, you gain a +2 bonus to the saving throw DC of your bard spells.
As an action, you can use the concertina to cast Otto's Irresistible Dance from the item. This property of the concertina can't be used again until the next dawn.`,
    },
    {
      name: "Rhythm Maker's Drum",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While holding this drum, you gain a bonus to spell attack rolls and to the saving throw DCs of your bard spells. The bonus is determined by the drum's rarity.
As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn. (This is a +2 item)`,
    },
    {
      name: "Siren Song Lyre",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `You can use an action to play this lyre and cast one of the following spells from it: Animal Friendship, Charm Person, Enthrall, Suggestion. If the spell requires a saving throw, the spell save DC is 13.
Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn.`,
    },
    {
      name: "Dancing with Dragons",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "Gain advantage on Charisma or Performance checks until your next long rest.",
      priceLabel: "Showings are in Wee Hours 2:00 AM - 6:00 AM",
    },
    {
      name: "Glamerweave",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Uncommon glamerweave can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glamerweave hat might have illusory butterflies fluttering around it.
When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the uncommon version of glamerweave, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn.`,
    },
    {
      name: "Instrument of the Bards",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.
You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.
You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.
===PLEASE PICK ONE===
Instrument | Rarity | Spells
All | - | Fly, Invisibility, Levitate, Protection from Evil and Good, plus the spells listed for the particular instrument
Doss lute | Uncommon | Animal Friendship, Protection from Energy (fire only), Protection from Poison
Fochlucan bandore | Uncommon | Entangle, Faerie Fire, Shillelagh, Speak with Animals
Mac-Fuirmidh cittern | Uncommon | Barkskin, Cure Wounds, Fog Cloud`,
    },
    {
      name: "Mask of the Beast",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
    },
    {
      name: "Medallion of Thoughts",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask, you can expend 1 charge and use the mask to cast the Animal Friendship spell as an action. The mask regains all expended charges at dawn.",
    },
    {
      name: "Pipes of the Sewers",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.
The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats (see the Monster Manual for statistics) with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.
Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.`,
    },
    {
      name: "Prismari Primer",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Prismari Primer is a magic textbook created at Strixhaven's Prismari College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make a Dexterity (Acrobatics) or a Charisma (Performance) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.
In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the Bard or Sorcerer spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.`,
    },
    {
      name: "Rhythm Maker's Drum",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `While holding this drum, you gain a bonus to spell attack rolls and to the saving throw DCs of your bard spells. The bonus is determined by the drum's rarity.
As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn. (This is a +1 item)`,
    },
    {
      name: "Goblins in the Pantry",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Receive a \"Goblin Repellent\" token to avoid goblin mischief.",
      priceLabel: "Showings are in the Morning 6:00 AM - 11:00 AM",
    },
    {
      name: "The Fool's Quest",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Boost your relationship and gimmicks of your pets or NPC companions.",
      priceLabel: "Showings are in Midday 11:00 AM - 2:00 PM",
    },
    {
      name: "Bard's Blunder",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Get a \"Bardic Inspiration\" die (1d6) for use on any roll until your next long rest.",
      priceLabel: "Showings are in Afternoon 2:00 PM - 6:00 PM",
    },
    {
      name: "Wizard’s Wardrobe Woes",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Boost friendship with NPC followers.",
      priceLabel: "Showings are in the Evening 6:00 PM - 10:00 PM",
    },
    {
      name: "Improve Classes",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "You can gain proficiency with any CHR-based skill for every two classes you attend. Unfortunately, they don't teach you expertise.",
      priceLabel: "Only available at Night 10:00 PM - 2:00 AM",
    },
    {
      name: "Old Props and Costumes",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Sometimes costumes and props tend to wear out over time, so we sell them at a discount because we know what it's like to be out on the streets with nothing to keep you warm.",
    },
    {
      name: "Witch's Wardrobe",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Allow the user to swap any set of clothing or armor they are wearing with another set they own as a bonus action. This Ring can hold up to 5 outfits/armors at a time.",
    },
    {
      name: "Year round Tickets",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Doubles the effects of any show you attend.",
    },
    {
      name: "Mask of the Dragon Queen",
      rarity: "Unique",
      itemType: "Wondrous Item",
      attunment: true,
      price: 20000,
      description: `Individually, the five Dragon Masks resemble the dragons they are named for. When two or more of the dragon masks are assembled, however, they transform magically into the Mask of the Dragon Queen. Each mask shrinks to become the modeled head of a chromatic dragon, appearing to roar its devotion to Tiamat where all the masks brought together are arranged crown-like on the wearer's head. Below the five masks, a new mask shapes itself, granting the wearer a draconic visage that covers the face, neck, and shoulders.
While you are attuned to and wear this mask, you can have any of the properties from any one mask. Additionally, you gain the Damage Absorption from each of the five Dragon Masks, and you gain five uses of the Legendary Resistance property.`,
    },
    {
      name: "Instrument of the Bards",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.
You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.
You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.
===PLEASE PICK ONE===
Instrument | Rarity | Spells
All | - | Fly, Invisibility, Levitate, Protection from Evil and Good, plus the spells listed for the particular instrument
Anstruth harp | Very rare | Control Weather, Cure Wounds (5th level), Wall of Thorns`,
    },
    {
      name: "Peregrine Mask",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: "While wearing this winged helm, you have a flying speed of 60 feet. In addition, you have advantage on initiative rolls.",
    },
    {
      name: "Rhythm Maker's Drum",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `While holding this drum, you gain a bonus to spell attack rolls and to the saving throw DCs of your bard spells. The bonus is determined by the drum's rarity.
As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn. (This is a +3 item)`,
    }
  ],
};
