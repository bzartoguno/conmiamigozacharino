import { Item, Tribe } from "../types";

export interface SleuthUniversityItem extends Item {
  priceText?: string;
}

export const tribeSleuthUniversity: Tribe & { items: SleuthUniversityItem[] } = {
  name: "Sleuth University",
  owner: "Docter Mcninja",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "They say the pen is mightier than the sword, but I have swung a sword at 50 pens and I can confirm that it is not the case.",
          "Back in my glory days I used to travel around with one Professor Layton—oh, the things we would get up to. Though, if I must pass down a word of advice from that time: if someone is about to grab you, set yourself on fire. They'll never see it coming.",
          "I actually teamed up with Benjamin Franklin once; not a bad guy, really, but he kept on saying 'who are you,' 'where are we going,' 'put me down.'",
          "I can't wait to clock out, and go home to see my beloved Yoshi. Oh um he's a velociraptor, I taught him how to skateboard.",
          "Sometimes the world can be quite confusing; that's why here at Sleuth University we can help you understand it a bit better!",
          "Oh good heavens! I've lost track of time! Oh tea and crumpets, and other British sounding things. I—umm, yes indeed you look like a very scary chap! Pray tell, would you be willing to lend me your skill? I need to teach a small session on how to properly terrify the lights out of somebody, and you look like you've seen that sort of thing. If you're willing to come with me and make a DC 14 Intimidation check to teach the next generation, I'll be most pleased. If you succeed, I’ll pay you 25 gp for your time. If you fail, you take 1 point of damage as you get mocked by college students and get 25 gp for the trouble.",

          "They say the pen is mightier than the sword, but I have swung a sword at 50 pens and I can confirm that it is not the case.",
          "Back in my glory days I used to travel around with one Professor Layton—oh, the things we would get up to. Though, if I must pass down a word of advice from that time: if someone is about to grab you, set yourself on fire. They'll never see it coming.",
          "I actually teamed up with Benjamin Franklin once; not a bad guy, really, but he kept on saying 'who are you,' 'where are we going,' 'put me down.'",
          "I can't wait to clock out, and go home to see my beloved Yoshi. Oh um he's a velociraptor, I taught him how to skateboard.",
          "Sometimes the world can be quite confusing; that's why here at Sleuth University we can help you understand it a bit better!",
          "They say the pen is mightier than the sword, but I have swung a sword at 50 pens and I can confirm that it is not the case.",
          "Back in my glory days I used to travel around with one Professor Layton—oh, the things we would get up to. Though, if I must pass down a word of advice from that time: if someone is about to grab you, set yourself on fire. They'll never see it coming.",
          "I actually teamed up with Benjamin Franklin once; not a bad guy, really, but he kept on saying 'who are you,' 'where are we going,' 'put me down.'",
          "I can't wait to clock out, and go home to see my beloved Yoshi. Oh um he's a velociraptor, I taught him how to skateboard.",
          "Sometimes the world can be quite confusing; that's why here at Sleuth University we can help you understand it a bit better!",
          "They say the pen is mightier than the sword, but I have swung a sword at 50 pens and I can confirm that it is not the case.",
          "Back in my glory days I used to travel around with one Professor Layton—oh, the things we would get up to. Though, if I must pass down a word of advice from that time: if someone is about to grab you, set yourself on fire. They'll never see it coming.",
          "I actually teamed up with Benjamin Franklin once; not a bad guy, really, but he kept on saying 'who are you,' 'where are we going,' 'put me down.'",
          "I can't wait to clock out, and go home to see my beloved Yoshi. Oh um he's a velociraptor, I taught him how to skateboard.",
          "Sometimes the world can be quite confusing; that's why here at Sleuth University we can help you understand it a bit better!",
          
          ],
  items: [
    {
      name: "Lost & Found",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "It's a lost and found bin, it has other peoples stuff in there, it would be rude to take it.",
      priceText: "Free",
    },
    {
      name: "Rent Capstone Experimental Spell / Magic Item",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Borrow cutting-edge arcana for field tests and capers.",
    },
    {
      name: "Forensics Lab Analysis",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Give us an item to look at we will do our best to tell you what it does.",
      priceText: "20G per sample",
    },
    {
      name: "Case Intake (Hire a PI / Spy / Intern)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Delivers information in 1–3 days. Better degree = better lead quality and lower chance of an actidental lie.",
      priceText: "Associates 10G, Bachelor 25G, Master 50G, Doctoral 75G",
    },
    {
      name: "Find the Leak",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "We audit a group’s information flow and identify the most likely source of rumors/betrayal. Gives you a short suspect list.",
    },
    {
      name: "Public Records Pull",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Property, travel logs, guild filings, arrests whatever exists in your setting’s “paper trail.”",
    },
    {
      name: "Rent: Whisper-Quill Recorder",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Records everything spoken within 10 feet for 10 minutes, then writes a transcript. Great for interviews. If you break it you pay double.",
    },
    {
      name: "Lantern of Tracking",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot-radius and dim light for an additional 30 feet.
Each Lantern of Tracking is designed to track down a certain type of creature, which is determined by rolling this creature type on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.
Lantern of Tracking
d10- Creature Type
1- Aberrations
2- Celestials
3- Constructs
4- Dragons
5- Elementals
6- Fey
7- Fiends
8- Giants
9- Monstrosities
10- Undead`,
    },
    {
      name: "Docent",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `A docent is a small metal sphere, about 2 inches across, studded with dragonshards. To attune to a docent, you must embed the item somewhere on your body, such as your chest or your eye socket.
Sentience. A docent is a sentient item of any alignment with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It perceives the world through your senses. It communicates telepathically with you and can speak, read, and understand any language it knows (see "Random Properties" below).
Life Support. Whenever you end your turn with 0 hit points, the docent can make a Wisdom (Medicine) check with a +6 bonus. If this check succeeds, the docent stabilizes you.
Random Properties. A docent has the following properties:
-Languages. The docent knows Common, Giant, and 1d4 additional languages chosen by the DM. If a docent knows fewer than six languages, it can learn a new language after it hears or reads the language through your senses.
-Skills. The docent has a +7 bonus to one of the following skills (roll a d4): (1) Arcana, (2) History, (3) Investigation, or (4) Nature.
-Spells. The docent knows one of the following spells and can cast it at will, requiring no components (roll a d6): (1-2) Detect Evil and Good or (3-6) Detect Magic. The docent decides when to cast the spell.
Personality. A docent is designed to advise and assist the warforged it's attached to. One of the simple functions of a docent is to serve as a translator. The docent's properties are under its control, and if you have a bad relationship with your docent, it might refuse to assist you`,
    },
    {
      name: "Duplicitous Manuscript",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `To you, this book is a magical spellbook. To anyone else, the book appears to be a volume of verbose romance fiction. As an action, you can change the book's appearance and alter the plot of the romance.
When found, the book contains the following spells: Hallucinatory Terrain, Major Image, Mirror Image, Mislead, Nystul's Magic Aura, Phantasmal Force, and Silent Image. It functions as a spellbook for you.
While you are holding the book, you can use it as a spellcasting focus for your wizard spells.
The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:
-If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the illusion school.
-When a creature you can see makes an Intelligence (Investigation) check to discern the true nature of an illusion spell you cast, or makes a saving throw against an illusion spell you cast, you can use your reaction and expend 1 charge to impose disadvantage on the roll.`,
    },
    {
      name: "Loadstone",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "Curse. The stone is cursed, but its magical nature is hidden; Detect Magic doesn't detect it. An Identify spell reveals the stone's true nature. If you use the Dash or Disengage action while the stone is on your person, its curse activates. Until the curse is broken with Remove Curse or similar magic, your speed is reduced by 5 feet, and your maximum load and maximum lift capacities are halved. You also become unwilling to part with the stone.",
    },
    {
      name: "Dust of Sneezing and Choking",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Found in a small container, this powder resembles very fine sand. It appears to be Dust of Disappearance, and an Identify spell reveals it to be such. There is enough of it for one use.
When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The Lesser Restoration spell can also end the effect on a creature.`,
    },
    {
      name: "Earworm",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `To attune to this symbiont, you must hold it against the skin behind your ear for the entire attunement period, whereupon it burrows into your head and bonds to your skull. While the earworm is inside you, you can speak, read, and write Deep Speech.
Spells. The earworm has 4 charges. You can cast the following spells from it, expending the necessary number of charges (spell save DC 15): Detect Thoughts (2 charges) or Dissonant Whispers (1 charge). Each time you use the earworm to cast the Detect Thought spell, it sends the information gleaned to the nearest daelkyr, or to the next nearest earworm until it reaches a daelkyr.
The earworm regains 1d4 expended charges daily at dawn.
Symbiotic Nature. The earworm can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the earworm ends, and it exits your body.`,
    },
    {
      name: "Eyes of Minute Seeing",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
    },
    {
      name: "Finder's Goggles",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:
-When you make a Wisdom (Insight) check, you can roll a d4 and add the number rolled to the check.
-As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom (Insight) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast Locate Creature to find that creature. This property can't be used again until the next dawn.`,
    },
    {
      name: "Goggles of Object Reading",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `These leather-framed goggles feature purple crystal lenses. While wearing the goggles, you have advantage on Intelligence (Arcana) checks made to reveal information about a creature or object you can see.
In addition, you can cast the Identify spell using the googles. Once you do so, you can't do so again until the next dawn.`,
    },
    {
      name: "Infernal Puzzle Box",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `An infernal puzzle box is a cube-shaped container 5 to 6 inches on a side, composed of airtight, interlocking parts made from materials found in the Nine Hells. Most of these boxes are made of infernal iron, though some are carved from bone or horn. Infernal puzzle boxes are used to safeguard diabolical contracts signed between devils and mortals, even after the terms of these contracts are fulfilled. An empty infernal puzzle box weighs 3 pounds regardless of the materials used to fashion it.
When an object small enough to fit inside an infernal puzzle box is placed in it, the container magically seals shut around the object, and no magic can force the box open. The sealed box becomes immune to all damage as well. Every infernal puzzle box is constructed with a unique means of opening it. The trick to solving the puzzle is always mundane, never magical. Once a creature figures out the trick or sequence of steps needed to open a particular infernal puzzle box, that creature can open the box as an action, allowing access to the box's contents.
A creature that spends 1 hour holding an infernal puzzle box while trying to open it can make a DC 30 Intelligence (Investigation) check. If the check succeeds, the creature figures out the trick or sequence of steps needed to open the box. If the check fails by 5 or more, the creature must make a DC 18 Wisdom saving throw, taking 42 (12d6) psychic damage on a failed save, or half as much damage on a successful one.`,
    },
    {
      name: "Inquisitive's Goggles",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The lenses of these goggles are carved from Siberys dragonshards. While garish in appearance, these goggles are a boon to any Tharashk inquisitive. To attune to the goggles, you must possess the Mark of Finding. As long as this condition is met, you gain the following benefits.
- You can add your Intuition die from the Hunter’s Intuition trait of the mark when you make Wisdom (Insight) checks.
- When you examine an object, you can make a Wisdom (Perception) check to identify the aura of the last living creature to touch the object. The DC is 13 + the number of days since the last contact occurred. If the check is successful, you learn the species of the creature and you can immediately use your Imprint Prey ability to target this creature.`,
    },
    {
      name: "Ring of Truth Telling",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "While wearing this ring, you have advantage on Wisdom (Insight) checks to determine whether someone is lying to you.",
    },
    {
      name: "Stone of Ill Luck",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This polished agate appears to be a Stone of Good Luck to anyone who tries to identify it, and it confers that item's property while on your person.
Curse. This item is cursed. While it is on your person, you take a -2 penalty to ability checks and saving throws. Until the curse is discovered, the DM secretly applies this penalty, assuming you are adding the item's bonus. You are unwilling to part with the stone until the curse is broken with remove curse or similar magic.`,
    },
    {
      name: "Wand of Magic Detection",
      rarity: "Uncommon",
      itemType: "Wand",
      attunment: false,
      price: 250,
      description: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the Detect Magic spell from it. The wand regains 1d3 expended charges daily at dawn.",
    }
  ],
};
