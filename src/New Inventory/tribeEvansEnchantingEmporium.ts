import { Item, Tribe } from "../types";

export interface EvansEnchantingItem extends Item {
  priceText?: string;
}

export const tribeEvansEnchantingEmporium: Tribe & {
  items: EvansEnchantingItem[];
} = {
  name: "Evan's Enchanting Emporium",
  owner: "Evan",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "I was actually going to call this Wally's Wonders! Because Wally is my last name and I was going to make it a family business! That was already tradmarked, so went with my frist name instead! But that's when my wife left me and took the kids with her, dragons am I right? How are you doing today!",
          "I find fear to be a very motivating factor, like the fear of wolves, taxes, undone homework, but mainly wolves.",
          "It's weird how no one ever talks about the absense of smells unprompted. The nose just isn't of conversation unless it's urgent. 'It's dark in here' normal 'Finally some quiet' relatable 'Doesn't smell liek anything here' Absolutely deranged sentance!",
          "You think having magic is cool, but well I tried casting a spell to clean the dishes and it somehow changed the gender of all of them to to their german counter parts. So I mostly do things by hand now.",
          "A group of advenuters were threating me so I cast fly on a nearby allagator and used gust to push it around.",
          "HELP! HELP MEE! I'VE TURNED MY SELF IN A POTTED PLANT! I'M POTTED PLANT EVAN! YOU GOT TO HELP ME! I HAVE A REVEARSAL WATERING CAN OVER THERE JUST GIVE ME A DC 14 MEDICINE CHECK AND I'LL TURN BACK TO NORMAL! If you succeed, Evan pays you 20 gp. If you fail, well Evan doesn't change back but offers you 5 gp for your time, you can take 15 gp more if you want to he can't stop you he's a potted right now.",

          "I was actually going to call this Wally's Wonders! Because Wally is my last name and I was going to make it a family business! That was already tradmarked, so went with my frist name instead! But that's when my wife left me and took the kids with her, dragons am I right? How are you doing today!",
          "I find fear to be a very motivating factor, like the fear of wolves, taxes, undone homework, but mainly wolves.",
          "It's weird how no one ever talks about the absense of smells unprompted. The nose just isn't of conversation unless it's urgent. 'It's dark in here' normal 'Finally some quiet' relatable 'Doesn't smell liek anything here' Absolutely deranged sentance!",
          "You think having magic is cool, but well I tried casting a spell to clean the dishes and it somehow changed the gender of all of them to to their german counter parts. So I mostly do things by hand now.",
          "A group of advenuters were threating me so I cast fly on a nearby allagator and used gust to push it around.",
          "I was actually going to call this Wally's Wonders! Because Wally is my last name and I was going to make it a family business! That was already tradmarked, so went with my frist name instead! But that's when my wife left me and took the kids with her, dragons am I right? How are you doing today!",
          "I find fear to be a very motivating factor, like the fear of wolves, taxes, undone homework, but mainly wolves.",
          "It's weird how no one ever talks about the absense of smells unprompted. The nose just isn't of conversation unless it's urgent. 'It's dark in here' normal 'Finally some quiet' relatable 'Doesn't smell liek anything here' Absolutely deranged sentance!",
          "You think having magic is cool, but well I tried casting a spell to clean the dishes and it somehow changed the gender of all of them to to their german counter parts. So I mostly do things by hand now.",
          "A group of advenuters were threating me so I cast fly on a nearby allagator and used gust to push it around.",
          "I was actually going to call this Wally's Wonders! Because Wally is my last name and I was going to make it a family business! That was already tradmarked, so went with my frist name instead! But that's when my wife left me and took the kids with her, dragons am I right? How are you doing today!",
          "I find fear to be a very motivating factor, like the fear of wolves, taxes, undone homework, but mainly wolves.",
          "It's weird how no one ever talks about the absense of smells unprompted. The nose just isn't of conversation unless it's urgent. 'It's dark in here' normal 'Finally some quiet' relatable 'Doesn't smell liek anything here' Absolutely deranged sentance!",
          "You think having magic is cool, but well I tried casting a spell to clean the dishes and it somehow changed the gender of all of them to to their german counter parts. So I mostly do things by hand now.",
          "A group of advenuters were threating me so I cast fly on a nearby allagator and used gust to push it around.",
          
          ],
  items: [
    {
      name: "Custom enchanting job",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Have something else in mind, don't spare the details let's hash it out together!",
      priceText: "????",
    },
    {
      name: "Custom enchanting job",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "Have something else in mind, don't spare the details let's hash it out together!",
      priceText: "????",
    },
    {
      name: "Spell Scroll",
      rarity: "Uncommon",
      itemType: "Scroll",
      attunment: false,
      price: 250,
      description: "Scrolls scribed to match the level of the spell you seek. 100 Gold per level of Spell, so a LV 1 scroll is 100, a LV 2 scroll is 200, etc",
      priceText: "???",
    },
    {
      name: "Inspect Magical Item",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Quick appraisal in the arcane spectrum to gauge an item's potential.",
    },
    {
      name: "Enchantmenter grimoire",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "When an enchantment is removed you can instead learn it and put it into this book! Then when you go to enchant instead of rolling to find out which enchantment, after pay the apropitace cost, you got used to one you learned using this book instead.",
    },
    {
      name: "Remove Enchantment",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "With the fact being that each time can only hold one enchantment sometimes you need to remove it, so long as it's not cursed.",
    },
    {
      name: "Common Enchantment",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `Roll a 1d20 and apply it to your item!
      1- Spontaneous Combustion (Curse): This item will explode when it break, dealing 2d10+5 fire damage.  
      2- Magnetic Attraction (Curse): Metal objects within 5 feet will slowly be pulled towards this item if they are lighter, but if they are heavier this item will be attached to it instead.  
      3- Bed time (Curse): Who ever holds this item temperarly has narcolepsy.  
      4- Gross (Curse): This item drips dirty smelly water continuously when held and it's always where your hands are holding it.  
      5- Tongue-Tying (Curse): This item when in a persons inventory makes them only speak gibberish.  
      6- Never Lost: You always know which direction it item is located reguardless of distance.  
      7- Smol: This item shrinks to the size of a mouse permanently.  
      8- BIG: This item grows to the size of a elephant permanently.  
      9- My eyes: Who ever willing holds this item temperarly become blind.  
      10- Bright like a diamond: This item can eminate a soft glow like a torch, this effect can be turn on and off as a bonus action!
      11-14- Cantrip Based Enchantment: Pick a cantrip from any class and apply it to this item; this item only holds five charges and grants them after a long rest.
      15-17- 1st level Based Enchantment: Pick a 1st level spell from any class and apply it to this item; this item only holds five charges and grants them after a long rest.
      18-20- 2nd level Based Enchantment: Pick a 2nd level spell from any class and apply it to this item; this item only holds five charges and grants them after a long rest.`,
    },
    {
      name: "Uncommon Enchantment",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Roll a 1d12 and apply it to your item!
      1- C-c-cold (Curse): This item when in a persons inventory will lower their AC by 1 for every hour they hold it (Max of 5)
      2- H-h-hot (Curse): This item, when in a person's inventory, for every turn you don't move to a new spot you take 1d4 fire damage; this item isn't active when the sun sets.
      3- Hit me baby one more time! (Curse): Whenever you deal damage with this item, the target heals 1d4 and the target has disadvantage on all saving throws for the next 10 minutes.
      4- Therian (Binding-Curse): This item immediately warps around you or forces you to hold it any attemps to remove only causes it to move else where on your body. Once per month during the night of the full more you now transform into an animal, replacing it's stats and actions with it until the night is through.
      5- Misty: This item now has a slight faint trails of mist eminating from it, disapating after a few inches. Unless is being throw in which case it leaves a much longer trail that lasts for a few minutes.
      6- Return: This item can be teleported to the owners hands as a bonus action if it is less then a half a mile away.
      7- +1: This is now a +1 item.
      8- Sure-Footed: While this item is on your person, you have advantage on saving throws and checks to avoid being knocked prone, shoved, or forcibly moved.
      9- Steady Mind: While this item is on your person, you have advantage on Constitution saving throws to maintain concentration on a spell.
      10- Lucky Charm: While this item is on your person, once per long rest you can reroll a d20 roll you just made. You must use the new roll.
      11- 3rd level Based Enchantment: Pick a 3rd level spell from any class and apply it to this item; this item only holds four charges and grants them after a long rest.
      12- 4th level Based Enchantment: Pick a 4th level spell from any class and apply it to this item; this item only holds four charges and grants them after a long rest.`,
    },
    {
      name: "Rare Enchantment",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `Roll a 1d10 and apply it to your item!
      1- Blood Price (Binding-Curse): This item immediately warps around you or forces you to hold it any attemps to remove only causes it to move else where on your body. the first time each day you roll a natural 1 on any d20 roll, you take 2d6 necrotic damage.
      2- Whispers Under Glass (Curse): While this item is on your person, you have disadvantage on Dexterity (Stealth) checks, and you cannot speak above a whisper unless you take 1 psychic damage (your choice each time).
      3- Bad Habit (Curse) Well you stat a bad habit, I'm leaving it up to you for what that is. So long as you have this item you have that habit.
      4- +2: This is a plus two item.
      5- Sharpness (Weapon only): Add an addintional damage dice to this item.
      6- The spirit of Chad protects me: While this item is on your person, once per short rest when you take damage you can use your reaction to reduce that damage by 1d10 + your proficiency bonus.
      7- Tremor Sense: Once per long rest, while this item is on your person, you gain tremorsense out to 30 feet for 1 hour (you sense vibrations through the ground)
      8- Spellward: While this item is on your person, once per long rest when you fail a saving throw against a spell you can choose to succeed instead.
      9- 5th level Based Enchantment: Pick a 5th level spell from any class and apply it to this item this item only holds three charges and grains them and grains them after after seven days.
      10- 6th level Based Enchantment: Pick a 6th level spell from any class and apply it to this item this item only holds three charges and grains them after and grains them after after seven days.`,
    },
    {
      name: "Very Rare Enchantment",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `Roll a 1d8 and apply it to your item!
      1- Abyssal Corruption (Binding-Curse): This item binds to you. Each at the start of each day roll a 1d6. On a 1, for the next 10 minutes something else takes control. The DM controls your choices during this time, but cannot make you harm yourself on purpose.
      2- Dire Therian (Binding-Curse): This item immediately warps around you or forces you to grip it. Once per month during the night of the full more you now transform into a giant animal, replacing it's stats and actions with it until the night is through.
      3- +3: This is a three item
      4- Sharpness 2 (Weapon only): Add 2 addintional damage dice to this item.
      5- Inferno Soul: While this item is on your person, you are immune to fire damage.
      6- Iron Will: While this item is on your person, you have advantage on saving throws against being charmed, frightened, paralyzed, or stunned.
      7- 7th level Based Enchantment: Pick a 7th level spell from any class and apply it to this item this item only holds two charges and grains them after after fourteen days.
      8- 8th level Based Enchantment: Pick a 8th level spell from any class and apply it to this item this item only holds two charges and grains them after after fourteen days.`,
    },
    {
      name: "Legendary Enchantment",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `Roll a 1d6 and apply it to your item!
      1- Fate's Fool (Binding-Curse): ???
      2- +5: this is a item
      3- Sharpness 4 (Weapon only): Add four addintional damage dice to this item.
      4- Primal Companion: Once per day you may cast a moidied find familiar spell, but it may be a celestial being (such as a cherub or couatl), demonic being (such as a devil or demon), void being (???a or ???b), or an oblivion being (???c or ???d). These being are far strong then they may appear
      5- Sentient: This item is now Sentient and doesn't take up a compainion slot if effects may vary.
      6- 9th level Based Enchantment: Pick a 9th level spell from any class and apply it to this item this item only holds one charges and grains them after after twenty one days.`,
    },
    {
      name: "Spell Scroll",
      rarity: "Common",
      itemType: "Scroll",
      attunment: false,
      price: 40,
      description: `A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.
If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.
Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.
The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.
Spell Level| Rarity | Save DC | Attack Bonus
Cantrip | Common | 13 | +5
1st | Common | 13 | +5
A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.`,
    },
    {
      name: "Staff of Birdcalls",
      rarity: "Common",
      itemType: "Staff",
      attunment: false,
      price: 40,
      description: `This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.`,
    },
    {
      name: "Wand of Pyrotechnics",
      rarity: "Common",
      itemType: "Wand",
      attunment: false,
      price: 40,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.`,
    },
    {
      name: "Wand of Scowls",
      rarity: "Common",
      itemType: "Wand",
      attunment: false,
      price: 40,
      description: `This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to scowl for 1 minute.
The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a Wand of Smiles.`,
    },
    {
      name: "Wand of Smiles",
      rarity: "Common",
      itemType: "Wand",
      attunment: false,
      price: 40,
      description: `This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.
The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a Wand of Scowls.`,
    },
    {
      name: "Rod of Rulership",
      rarity: "Rare",
      itemType: "Rod",
      attunment: true,
      price: 1000,
      description: "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
    },
    {
      name: "Shrieking Greaves",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `Each of these black leg guards is decorated with a motif of monstrous skulls screaming in terror.
The greaves have 3 charges. While wearing these greaves, you can use a bonus action to expend 1 charge to increase your walking speed by 30 feet, and you have advantage on Dexterity saving throws. These effects last for 1 minute. The greaves regain 1d3 expended charges daily at dawn.
Curse. The greaves are cursed, and becoming attuned to them extends the curse to you. You can’t remove the greaves or end your attunement to them until you are targeted by a Remove Curse spell or similar magic.
You have disadvantage on saving throws against the frightened condition. Whenever you start your turn frightened, the greaves release an ear-piercing scream. You and each creature within 10 feet of you must make a DC 15 Constitution saving throw, taking 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one.`,
    },
    {
      name: "Spell Scroll",
      rarity: "Rare",
      itemType: "Scroll",
      attunment: false,
      price: 1000,
      description: `"A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.
If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.
Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.
The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.
Spell Level| Rarity | Save DC | Attack Bonus
2nd | Rare | 13 | +5
3rd | Rare | 14 | +7
A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."`,
    },
    {
      name: "Spider Staff",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `The top of this magic quarterstaff is shaped like a spider. It deals an extra 1d6 poison damage on a hit when used to make a weapon attack.
Spells. The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: Spider Climb (1 charge) or Web (2 charges, spell save DC 15).
The staff regains 1d6 + 4 expended charges daily at dusk. If you expend the staff’s last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.`,
    },
    {
      name: "Staff of Charming",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `While holding this staff, you can use an action to expend 1 of its 10 charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. The staff can also be used as a magic quarterstaff.
If you are holding the staff and fail a saving throw against an enchantment spell that targets only you , you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.
The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.`,
    },
    {
      name: "Staff of Defense",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class.
Spells. The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges).
The staff regains 1d6 + 4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.`,
    },
    {
      name: "Staff of Healing",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.`,
    },
    {
      name: "Staff of Ruling",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `An ornate carving of a serpent adorned with a coursing river spirals down the length of this red and gold staff. While you're holding it, you can use an action to produce one of the following effects. Once the staff has produced an effect, it can't produce that effect again until the next dawn.
Orb of Lightning. You create a Small orb of lightning in an unoccupied space you can see within 60 feet of yourself. You concentrate on this orb as if concentrating on a spell. As a bonus action, you can move the orb up to 20 feet in any direction.
When your concentration ends, or when a creature enters the orb's space or starts its turn there, the orb detonates in a 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity saving throw, taking lightning damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one; the orb's base damage is 6d6, and if at the end of your turn the orb hasn't detonated, its damage increases by 2d6, to a maximum of 10d6.
Staff to Snake. You throw the staff to an unoccupied space within 10 feet of you, and the staff becomes a giant poisonous snake. The snake is under your control and shares your initiative count, but it takes its turn immediately after yours.
On your turn, you can mentally command the snake if it is within 60 feet of you and you don't have the incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location.
If you use a bonus action to speak the command word again, or if the snake is reduced to 0 hit points, the snake reverts to staff form in its current space.
Thunderclap. You point the staff skyward, producing a fearsome thunderclap. Each creature of your choice in a 30-foot-radius sphere centered on you must succeed on a DC 15 Constitution saving throw or have the deafened and frightened conditions until the end of your next turn.`,
    },
    {
      name: "Staff of the Ivory Claw",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, you gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage.",
    },
    {
      name: "Staff of the Rooted Hills",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `The hill rune is carved into this gnarled wooden staff. The staff magically resizes to match the height of any creature that attunes to it.
The staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it. The first time you hit any creature with the staff on your turn, the creature must succeed on a DC 12 Strength saving throw or be restrained by spectral vines until the start of your next turn.
Invoking the Rune. As an action, you can invoke the staff’s rune to cast either Hold Person (save DC 12) or Speak with Plants with the staff. When you cast Hold Person using the staff, the target is wreathed in spectral vines.
Once the rune has been invoked to cast either spell, it can’t be invoked again until the next dawn.`,
    },
    {
      name: "Staff of Withering",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `The staff has 3 charges and regains 1d3 expended charges daily at dawn.
The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.`,
    },
    {
      name: "Sun Staff",
      rarity: "Rare",
      itemType: "Staff",
      attunment: true,
      price: 1000,
      description: `Veins of sunstone run through this wooden staff. This staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it. When you hit with an attack roll using this staff, the target takes an extra 1d8 fire damage.
Solar Focus. You can use the staff as a spellcasting focus. While holding the staff, you can reroll a number of damage dice up to your proficiency bonus when you use a spell slot to cast a spell that deals fire or radiant damage. You must use the new rolls. Once this property is used, it can’t be used again until the next dawn.
Sunny Glow. As a bonus action, you can cause the staff to glow with sunlight. While glowing, the staff sheds bright light in a 15-foot radius and dim light for an additional 15 feet. The light lasts until you use another bonus action to extinguish it.`,
    },
    {
      name: "Tentacle Rod",
      rarity: "Rare",
      itemType: "Rod",
      attunment: true,
      price: 1000,
      description: "Made by the drow, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacle makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
    },
    {
      name: "Wand of Binding",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.
Spells. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).
Assisted Escape. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.`,
    },
    {
      name: "Wand of Enemy Detection",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of Fear",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.
Command. While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the Command spell (save DC 15).
Cone of Fear. While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.`,
    },
    {
      name: "Wand of Fireballs",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of Paralysis",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of Viscid Globs",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `Crafted by the drow, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting ability) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is restrained for 1 hour. After that time, the viscous material cracks and falls away.
Applying a pint or more of alcohol to the restrained creature dissolves the glob instantly, as does the application of Oil of Etherealness or Universal Solvent. The glob also dissolves instantly if exposed to sunlight. No other nonmagical processes can remove the viscous material until it deteriorates on its own.
The wand regains 1d6 + 1 expended charges daily at midnight. If you expend the wand's last charge, roll a d20. On a 1, the wand melts into harmless slime and is destroyed.
A Wand of Viscid Globs is destroyed if exposed to sunlight for 1 hour without interruption.`,
    },
    {
      name: "Wand of Winter",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand looks and feels like an icicle.
The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand, even if you are incapable of casting spells: Ray of Frost (no charges, or 1 charge to cast at 5th level; +5 to hit with ranged spell attack), Sleet Storm (3 charges; spell save DC 15), or Ice Storm (4 charges; spell save DC 15). No other components are required.
The wand regains 1d6 + 1 expended charges each day at dawn. If you expend the wand's last charge, roll a d20. On a 20, the wand melts away, forever destroyed.`,
    },
    {
      name: "Blasted Goggles",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `These tinker’s goggles have 3 charges. As an action, you can expend 1 charge to shoot a beam of fiery light from the goggles at a creature you can see within 120 feet of yourself. The target must succeed on a DC 15 Dexterity saving throw or take 3d6 fire damage. The goggles regain 1d3 expended charges daily at dawn.
Cursed. The goggles are cursed, and becoming attuned to them extends the curse to you. You can’t remove the goggles or end your attunement to them until you are targeted by a Remove Curse spell or similar magic.
Whenever you use the goggles’ fiery beam and the target rolls a 20 on the d20 for the saving throw, the goggles expose you to a flash of violent bright light. As a result, you have the blinded condition for 24 hours.`,
    },
    {
      name: "Cursed Luckstone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This flat, gray-and-black river stone is inscribed with an unknown arcane symbol and feels cool to the touch. While carrying the stone, you can gain advantage on one ability check of your choice. The stone can't be used this way again until the next dawn.
Curse. This item is cursed. Attuning to it curses you until you are targeted by a remove curse spell or similar magic. As long as you remain cursed, you cannot discard the stone, which immediately teleports back into your pocket or pack. After you use the stone's magic, your next two ability checks are made with disadvantage.`,
    },
    {
      name: "Harkon's Bite",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `A dire wolf tooth dangles from this simple cord necklace. While you wear it, the necklace grants you a +1 bonus to ability checks and saving throws.
Curse. Attuning to Harkon's Bite curses you until either Harkon Lukas removes the necklace from you or you are targeted by a Remove Curse spell or similar magic. As long as you remain cursed, you cannot remove the necklace.
Upon donning or removing the necklace, whether you are attuned to it or not, you are afflicted with werewolf lycanthropy as detailed in the Monster Manual. The curse lasts until the dawn after the next full moon. If you are still wearing the necklace at this time, you are afflicted with lycanthropy again.`,
    },
    {
      name: "Immovable Rod",
      rarity: "Uncommon",
      itemType: "Rod",
      attunment: false,
      price: 250,
      description: "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.",
    },
    {
      name: "Rod of Retribution",
      rarity: "Uncommon",
      itemType: "Rod",
      attunment: true,
      price: 250,
      description: `This adamantine rod is tipped with a glowing crystalline eye. The rod has 3 charges and regains all its expended charges daily at dawn.
When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 of the rod's charges to force the creature to make a DC 13 Dexterity saving throw. The creature takes 2d10 lightning damage on a failed save, or half as much damage on a successful one.`,
    },
    {
      name: "Spell Scroll",
      rarity: "Uncommon",
      itemType: "Scroll",
      attunment: false,
      price: 250,
      description: `A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.
If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.
Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.
The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.
Spell Level| Rarity | Save DC | Attack Bonus
Cantrip | Uncommon | 13 | +5
1st | Uncommon | 13 | +5
A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.`,
    },
    {
      name: "Staff of the Adder",
      rarity: "Uncommon",
      itemType: "Staff",
      attunment: true,
      price: 250,
      description: `You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.
You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.
The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.`,
    },
    {
      name: "Staff of the Python",
      rarity: "Uncommon",
      itemType: "Staff",
      attunment: true,
      price: 250,
      description: `You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake (see the Monster Manual for statistics) under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.
On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.
If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.`,
    },
    {
      name: "Wand of Entangle",
      rarity: "Uncommon",
      itemType: "Wand",
      attunment: true,
      price: 250,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Entangle spell (save DC 13) from it.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of Magic Missiles",
      rarity: "Uncommon",
      itemType: "Wand",
      attunment: false,
      price: 250,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile from it. For 1 charge, you cast the 1st-level version of the spell. You can increases the spell slot level by one for each additional charge you expend.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of the War Mage",
      rarity: "Uncommon",
      itemType: "Wand",
      attunment: true,
      price: 250,
      description: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity. In addition, you ignore half cover when making a spell attack. (This is a +1 item)",
    },
    {
      name: "Wand of Web",
      rarity: "Uncommon",
      itemType: "Wand",
      attunment: true,
      price: 250,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 15) from it.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Arcane Propulsion Arm",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This prosthetic appendage was developed by artificers of House Cannith. To attune to this item, you must attach it to your arm at the wrist, elbow, or shoulder, at which point the prosthetic magically forms a copy of the appendage it's replacing.
While attached, the prosthetic provides these benefits:
- The prosthetic is a fully capable part of your body.
- You can take an action to remove the prosthetic, and it removes itself if your attunement to it ends. It can't be removed against your will.
- The prosthetic is a magic melee weapon with which you're proficient. It deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches.`,
    },
    {
      name: "Blast Scepter",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: true,
      price: 2500,
      description: `The Blast Scepter can be used as an arcane focus.
Whoever is attuned to the Blast Scepter gains resistance to fire and lightning damage and can, as an action, use it to cast Thunderwave as a 4th level spell (save DC 16) without expending a spell slot.`,
    },
    {
      name: "Rod of Absorption",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: true,
      price: 2500,
      description: `While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy - not the spell itself - is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.
When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.
If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.
A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.`,
    },
    {
      name: "Rod of Alertness",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: true,
      price: 2500,
      description: `This rod has a flanged head and the following properties:
Alertness.
While holding this rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.
Spells.
While holding the rod, you can use an action to cast one of the following spells from it:
Detect Evil and Good
,
Detect Magic
,
Detect Poison and Disease
, or
See Invisibility
.
Protective Aura.
As an action, you can plant the shaft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.
The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.`,
    },
    {
      name: "Rod Of Hellish Flames",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: true,
      price: 2500,
      description: `Glowing cinders orbit the flanged head of this black iron rod.
This rod can be used as an arcane focus. While holding this rod, you gain the following benefits:
Hellish Resistance.
You have resistance to fire and necrotic damage.
Searing Rebuke.
You can cast the
Hellish Rebuke
spell as a 4th-level spell (save DC 16) from the rod. Once you use the rod to cast the spell, the rod can’t cast the spell again until the next dawn.
Surge of Brimstone.
Whenever you cast a spell that deals fire or necrotic damage, you can use the rod to deal the maximum damage instead of rolling. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Rod of Security",
      rarity: "Very Rare",
      itemType: "Rod",
      attunment: false,
      price: 2500,
      description: `While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.
For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).
When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.`,
    },
    {
      name: "Spell Scroll",
      rarity: "Very Rare",
      itemType: "Scroll",
      attunment: false,
      price: 2500,
      description: `A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.
If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.
Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.
The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.
Spell Level| Rarity | Save DC | Attack Bonus
4th | Very Rare | 15 | +9
5th | Very Rare | 17 | +9
6th | Very Rare | 17 | +10
A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.`,
    },
    {
      name: "Staff of Dunamancy",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `This staff of polished gray wood bears numerous runes carved along its length. The staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into dust and is destroyed.
While holding the staff, you can use an action to expend 2 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus:
Fortune's Favor
(2 charges),
Pulse Wave
(3 charges), or
Gravity Sinkhole
(4 charges).
New Possibility.
If you are holding the staff and fail a saving throw against a spell that targets only you, you can turn your failed save into a successful one. This property can't be used again until the next dawn.`,
    },
    {
      name: "Staff of Fire",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `You have resistance to fire damage while you hold this staff.
The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC:
Burning Hands
(1 charge),
Fireball
(3 charges), or
Wall of Fire
(4 charges).
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.`,
    },
    {
      name: "Staff of Frost",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `You have resistance to cold damage while you hold this staff.
The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC:
Cone of Cold
(5 charges),
Fog Cloud
(1 charge),
Ice Storm
(4 charges), or
Wall of Ice
(4 charges).
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.`,
    },
    {
      name: "Staff of Power",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.
The staff has 20 charges for the following properties. The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8 + 2 charges.
Power Strike.
When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.
Spells.
While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus:
Cone of Cold
(5 charges),
Fireball
(5th-level version, 5 charges),
Globe of Invulnerability
(6 charges),
Hold Monster
(5 charges),
Levitate
(2 charges).
Lightning Bolt
(5th-level version, 5 charges),
Magic Missile
(1 charge),
Ray of Enfeeblement
(1 charge), or
Wall of Force
(5 charges).
Retributive Strike.
You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.
You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 x the number of charge in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save. a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.
Distance from Origin
Damage
10 ft. away or closer
8 x the number of charges in the staff
11 to 20 ft. away
6 x the number of charges in the staff
21 to 30 ft. away
4 x the number of charges in the staff`,
    },
    {
      name: "Staff of Striking",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.
The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.`,
    },
    {
      name: "Staff of Thunder and Lightning",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.
Lightning.
When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.
Thunder.
When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.
Lightning Strike.
You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.
Thunderclap.
You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.
Thunder and Lightning.
You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.`,
    },
    {
      name: "Voyager Staff",
      rarity: "Very Rare",
      itemType: "Staff",
      attunment: true,
      price: 2500,
      description: `You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While you hold it, you gain a +1 bonus to spell attack rolls.
This staff has 10 charges. While holding it, you can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC:
Banishment
(4 charges),
Blink
(3 charges),
Misty Step
(2 charges),
Passwall
(5 charges), or
Teleport
(7 charges).
The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes forever.`,
    },
    {
      name: "Wand of Polymorph",
      rarity: "Very Rare",
      itemType: "Wand",
      attunment: true,
      price: 2500,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the
Polymorph
spell (save DC 15) from it.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    }
  ],
};
