import { Item, Tribe } from "./types";

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
          ],
  items: [
    {
      name: "Custom enchanting job",
      price: 0,
      priceText: "????",
      description: "Have something else in mind, don't spare the details let's hash it out together!",
    },
    {
      name: "Spell Scroll",
      price: 100,
      priceText: "???",
      description: "Scrolls scribed to match the level of the spell you seek. 100 Gold per level of Spell, so a LV 1 scroll is 100, a LV 2 scroll is 200, etc",
    },
    {
      name: "Inspect Magical Item",
      price: 10,
      description: "Quick appraisal in the arcane spectrum to gauge an item's potential.",
    },
    {
      name: "Remove Enchantment",
      price: 50,
      description: "With the fact being that each time can only hold one enchantment sometimes you need to remove it, so long as it's not cursed.",
    },
    {
      name: "Common Enchantment",
      price: 100,
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
      11-14- Cantrip Based Enchantment: Pick a cantrip from any class and apply it to this item this item only holds five charges and grains them after a long rest.
      15-17- 1st level Based Enchantment: Pick a 1st level spell from any class and apply it to this item this item only holds five charges and grains them after a long rest.
      18-20- 2nd level Based Enchantment: Pick a 2nd level spell from any class and apply it to this item this item only holds five charges and grains them after a long rest.`,
    },
    {
      name: "Uncommon Enchantment",
      price: 200,
      description: `Roll a 1d12 and apply it to your item!
      1- C-c-cold (Curse): This item when in a persons inventory will lower their AC by 1 for every hour they hold it (Max of 5)
      2- H-h-hot (Curse): This item when in a persons inventory for every turn you don't move to a new spot you take 1d4 fire damge, this item isn't active when the sun sets.
      3- Hit me baby one more time! (Curse): Whenever you deal damge with this item the target heals 1d4 and the target has disadvantage on all saving throws for the next 10 mintues.
      4- Therian (Binding-Curse): This item immediately warps around you or forces you to hold it any attemps to remove only causes it to move else where on your body. Once per month during the night of the full more you now transform into an animal, replacing it's stats and actions with it until the night is through.
      5- Misty: This item now has a slight faint trails of mist eminating from it, disapating after a few inches. Unless is being throw in which case it leaves a much longer trail that lasts for a few minutes.
      6- Return: This item can be teleported to the owners hands as a bonus action if it is less then a half a mile away.
      7- +1: This is now a +1 item.
      8- Sure-Footed: While this item is on your person, you have advantage on saving throws and checks to avoid being knocked prone, shoved, or forcibly moved.
      9- Steady Mind: While this item is on your person, you have advantage on Constitution saving throws to maintain concentration on a spell.
      10- Lucky Charm: While this item is on your person, once per long rest you can reroll a d20 roll you just made. You must use the new roll.
      11- 3rd level Based Enchantment: Pick a 3rd level spell from any class and apply it to this item this item only holds four charges and grains them after a long rest.
      12- 4th level Based Enchantment: Pick a 4th level spell from any class and apply it to this item this item only holds four charges and grains them after a long rest.`,
    },
    {
      name: "Rare Enchantment",
      price: 300,
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
      price: 500,
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
      price: 50000,
      description: `Roll a 1d6 and apply it to your item!
      1- Fate's Fool (Binding-Curse): ???
      2- +5: this is a item
      3- Sharpness 4 (Weapon only): Add four addintional damage dice to this item.
      4- Primal Companion: Once per day you may cast a moidied find familiar spell, but it may be a celestial being (such as a cherub or couatl), demonic being (such as a devil or demon), void being (???a or ???b), or an oblivion being (???c or ???d). These being are far strong then they may appear
      5- Sentient: This item is now Sentient and doesn't take up a compainion slot if effects may vary.
      6- 9th level Based Enchantment: Pick a 9th level spell from any class and apply it to this item this item only holds one charges and grains them after after twenty one days.`,
    },
    {
      name: "Enchantmenter grimoire",
      price: 10,
      description: "When an enchantment is removed you can instead learn it and put it into this book! Then when you go to enchant instead of rolling to find out which enchantment, after pay the apropitace cost, you got used to one you learned using this book instead.",
    },
    {
      name: "Custom enchanting job",
      price: 0,
      priceText: "????",
      description: "Have something else in mind, don't spare the details let's hash it out together!",
    },
  ],
};
