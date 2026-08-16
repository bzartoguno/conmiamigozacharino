import { Item, Tribe } from "./types";

export interface FizzyTalesItem extends Item {
  priceText?: string;
}

export const tribeFizzyTales: Tribe & { items: FizzyTalesItem[] } = {
  name: "Fizzy Tales",
  owner: "Candy Cane Princess",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "I’ve got a little stamp challenge folks do for fun. Take a minute and pull one of your companions into a quick in-character moment, just a short question, a check-in, a joke, or a pep talk. Nothing long, just enough to feel real.  |  Stamp Quest (Scene Partner): Pull another PC into a short 30–60 second roleplay moment (a question, a check-in, a joke, a pep talk). | Reward: 4 Stamps",
          "Hey, if you’ve stepped on someone’s toes even a little today, give them a quick in-character apology for something minor. No drama, just so there's no blood in the water between, ya.  |  Stamp Quest (Apology Tour): Apologize (in-character) to a party member for something minor you did this session. | Reward: 3 Stamps",
          "Alright, this one’s a quiet game some regulars like.  |  Stamp Quest (One liners): Subtly quote movies, shows, or books loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of quotes you successfully make.",
          "One last stamp challenge, easy peasy lemon squeeze.  |  Stamp Quest (Tableau): When the party enters a new place, describe one small sensory detail (smell, sound, texture) in-character. | Reward: 2 Stamps",
          "I built a nap hole in under the counter which is great and has no downside until someone comes into the store looking for me and I have to crawl out of under the counter which is frankly impossible to do with dignity and without looking like a sleepy princess hissing.",
          "You know I first met my husband when he saved me from a Black Licorice, I'd go into more detail but due to some story time bugdet cuts I don't remember! Then when I went back home with him I saw the most beautiful things right before my eyes. An atom bomb detonating!",
          "Ever since Gideon moved in busniess has been booming! Gerald Blood Moon and I have been talking about making Gideon our maskot! We'll wheel him out for birthday parties, celebrations, and we'll have portaites paintings avilible! So it can be fun for the whole family! Oh look he's just vibrating with such exitment! *Muffled Gideon screaming in the background*",
          "We have sweets and treats galore! Don't be afraid to take a bite! Here at Fizzy Tales we sell things at one gold above cost because we value you over making this profitable!",
          "Yeah sometime we do need to fight of 9 to 10 dentists, but ever since I discover the treat know as 'caramel apple' I've been spreading them out like mouse traps keeping those nasty dentists away.",
          "Hey there I'm so sorry to bother you the I kind of keep a secert like pocket dungeon down in my basement that helps keep this shop supplied and my amazing husband kind of got stuck in one of them so if I could get your help getting him out of there I would make it worth your while! Make a DC 14 Survival check to help me sort this out. If you succeed, I’ll pay you 80 gp. If you fail, you take 1 point of damage from a fugde monster and get 90 gp for the trouble.",

          "I built a nap hole in under the counter which is great and has no downside until someone comes into the store looking for me and I have to crawl out of under the counter which is frankly impossible to do with dignity and without looking like a sleepy princess hissing.",
          "You know I first met my husband when he saved me from a Black Licorice, I'd go into more detail but due to some story time bugdet cuts I don't remember! Then when I went back home with him I saw the most beautiful things right before my eyes. An atom bomb detonating!",
          "Ever since Gideon moved in busniess has been booming! Gerald Blood Moon and I have been talking about making Gideon our maskot! We'll wheel him out for birthday parties, celebrations, and we'll have portaites paintings avilible! So it can be fun for the whole family! Oh look he's just vibrating with such exitment! *Muffled Gideon screaming in the background*",
          "We have sweets and treats galore! Don't be afraid to take a bite! Here at Fizzy Tales we sell things at one gold above cost because we value you over making this profitable!",
          "Yeah sometime we do need to fight of 9 to 10 dentists, but ever since I discover the treat know as 'caramel apple' I've been spreading them out like mouse traps keeping those nasty dentists away.",
          "I built a nap hole in under the counter which is great and has no downside until someone comes into the store looking for me and I have to crawl out of under the counter which is frankly impossible to do with dignity and without looking like a sleepy princess hissing.",
          "You know I first met my husband when he saved me from a Black Licorice, I'd go into more detail but due to some story time bugdet cuts I don't remember! Then when I went back home with him I saw the most beautiful things right before my eyes. An atom bomb detonating!",
          "Ever since Gideon moved in busniess has been booming! Gerald Blood Moon and I have been talking about making Gideon our maskot! We'll wheel him out for birthday parties, celebrations, and we'll have portaites paintings avilible! So it can be fun for the whole family! Oh look he's just vibrating with such exitment! *Muffled Gideon screaming in the background*",
          "We have sweets and treats galore! Don't be afraid to take a bite! Here at Fizzy Tales we sell things at one gold above cost because we value you over making this profitable!",
          "Yeah sometime we do need to fight of 9 to 10 dentists, but ever since I discover the treat know as 'caramel apple' I've been spreading them out like mouse traps keeping those nasty dentists away.",
          "I built a nap hole in under the counter which is great and has no downside until someone comes into the store looking for me and I have to crawl out of under the counter which is frankly impossible to do with dignity and without looking like a sleepy princess hissing.",
          "You know I first met my husband when he saved me from a Black Licorice, I'd go into more detail but due to some story time bugdet cuts I don't remember! Then when I went back home with him I saw the most beautiful things right before my eyes. An atom bomb detonating!",
          "Ever since Gideon moved in busniess has been booming! Gerald Blood Moon and I have been talking about making Gideon our maskot! We'll wheel him out for birthday parties, celebrations, and we'll have portaites paintings avilible! So it can be fun for the whole family! Oh look he's just vibrating with such exitment! *Muffled Gideon screaming in the background*",
          "We have sweets and treats galore! Don't be afraid to take a bite! Here at Fizzy Tales we sell things at one gold above cost because we value you over making this profitable!",
          "Yeah sometime we do need to fight of 9 to 10 dentists, but ever since I discover the treat know as 'caramel apple' I've been spreading them out like mouse traps keeping those nasty dentists away.",
          
          ],
  items: [
    {
      name: "Moon Rocks",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "The eater becomes nearly weightless, jump five times as far! (A normal jump is 3+str ft going directly up or leaping is str ft away from you) floating gently for 10 minutes.",
    },
    {
      name: "Bubble Barrier",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A stick of bubble gum that, once blown, creates a semi-durable barrier with 2d12+5 HP and an AC of 13, lasting up to 10 minutes.",
    },
    {
      name: "Mirror Mints",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Allows the user to pass through mirrors into a mirror realm for up to 1 hour.",
    },
    {
      name: "Proxy Dust",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Enables control over a small doll as if inhabiting it, lasting for 1 hour.",
    },
    {
      name: "Beast-Speech Bubblegum",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "You can speak with animals for 30 minutes. If you spit it out early, the nearest small animal insults you.",
    },
    {
      name: "Cotton-Candy Cumulus",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Create a 20-ft-radius lightly obscuring cotten-candy fog for 10 minutes; wind disperses it in 1 round.",
    },
    {
      name: "Marshmallow Parachute",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Reaction when falling: reduce falling damage by 5d6 and drift 60 ft horizontally.",
    },
    {
      name: "Sour Shock Chews",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "As a bonus action,  you throw these into your mouth and crackle with energy; the next time you hit this turn, add 2d6 lightning damage.",
    },
    {
      name: "Gerald-d dry",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A carbonated drink that heals half of the drinker's HP rounded up.",
    },
    {
      name: "Winter Wafers",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "Increase a stat by 1; stats cannot exceed 18. I'm surprised these aren't more popular.",
    },
    {
      name: "Caramel Shell",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "Gain +2 AC for 1 minute; if you take cold damage, the shell cracks and ends early.",
    },
    {
      name: "Breathing Bubble",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet.
The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.`,
    },
    {
      name: "Talking Doll",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, I want a piece of candy. The doll's phrases are lost when your attunement to the doll ends.",
    },
    {
      name: "Thermal Cube",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius).",
    },
    {
      name: "Mirror of the Past",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: "The holder of this platinum hand mirror can learn something about the history of a specific object or creature by taking an action to gaze into the mirror and think of the target. Instead of the holder's reflection, the mirror presents scenes from the target's past. Information conveyed is accurate, but it is random and cryptic, and presented in no particular order. Once it is activated, the mirror gives its information for 1 minute or less, then returns to normal. It can't be used again until the next dawn.",
    },
    {
      name: "Dust of Dryness",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.
Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic.
An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one.`,
    },
    {
      name: "Mirror of Life Trapping",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.
If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.
Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.
An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.
If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.
While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.
In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.`,
    },
    {
      name: "Mirror of Reflected Pasts",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This mirror of elven design allows those who stare into it to reflect on positive memories. The 3-foot-tall mirror weighs 25 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed if reduced to 0 hit points.
While holding the mirror upright, you can use an action to speak its command word and activate it. While activated, the mirror hovers in the air, and it can be destroyed but not moved. It remains activated until you use an action to speak the command word again or your attunement to the mirror ends, at which the mirror harmlessly floats to the ground. Once the mirror has been deactivated, it can't be activated again until the next dawn.
If a non-Construct creature other than you sees its reflection in the activated mirror while within 30 feet of it, that creature must succeed on a DC 15 Wisdom saving throw or become paralyzed until the mirror is deactivated or until the creature can no longer see the mirror. A creature paralyzed by the mirror can repeat the saving throw at the end of each of its turns, ending the effect on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this mirror's effect for the next 24 hours.
While paralyzed by the mirror, the creature sees events from their past reflected in the mirror's glass. These memories aren't real, but rather idealized versions of those occurrences. Nearby observers can glimpse flashes of these memories if looking indirectly at the mirror.`,
    },
    {
      name: "Reincarnation Dust",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `When this small pouch of purple dust is sprinkled on a dead humanoid or a piece of a dead humanoid, the dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the
Reincarnate
spell had been cast on the remains.`,
    }
  ],
};
