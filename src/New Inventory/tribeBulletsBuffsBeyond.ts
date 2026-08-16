import { Item, Tribe } from "../types";

interface BulletsBuffsBeyondItem extends Item {
  priceLabel?: string;
}

interface BulletsBuffsBeyondTribe extends Omit<Tribe, "items"> {
  items: BulletsBuffsBeyondItem[];
}

export const tribeBulletsBuffsBeyond: BulletsBuffsBeyondTribe = {
  name: "Bullets, Buffs, & Beyond",
  owner: "Bob",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "You there! You are looking pretty brave! I made a new gun! I want to try it out, so if you want just put this apple on your head and go stand by that tree over there. Then I'll shoot! (Make a DC 14 Athletics. If you succeed, you don't get shot & you get 125 gp. If you fail, well um... you take 30 point of damage and get 125 gp.",

          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          "Firing range is open from 4pm-6pm; we don't do it earlier or later because I don't want to disturb my neighbors.",
          "You know studies show that keeping a ladder inside the house is more dangerous than a loaded gun. That's why I own thirty guns. In case some maniac tries to sneak in a ladder.",
          "Sometimes I lie awake at night and wonder, just how many candy does it take to stop a bullet. But I'm band from Provision's Paradise and Fizzy Tales. Guess I shouldn't have brought my guns with me when I walked in.",
          "You know most spell cast will stop casting there spells when you point a gun at them.",
          "Everything you see here is homemade, just um don't ask where it all came from.",
          
          ],
  items: [
    {
      name: "Hardened Stance Shield Wax",
      rarity: "Uncommon",
      itemType: "Armor",
      attunment: false,
      price: 250,
      description: "Only one wax can be used at a time; if you do not use any movement speed on your turn, you gain +15 to AC.",
    },
    {
      name: "Got anything... out back",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Please message me about what you would like so we can hash out the details.",
      priceLabel: "Price may vary",
    },
    {
      name: "Earplugs",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Simple reusable earplugs in a tiny tin can because hearing loss is forever.",
    },
    {
      name: "Practice Rounds",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Inert training rounds for safe loading drills and practice; great for learning without wasting the real stuff or to trick a friend because they deal 0 damage.",
    },
    {
      name: "Brass & Brush Cleaning Kit",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "A tidy roll-up kit with brushes, patches, oil, and a rag—keeps your gear clean, reliable, and less embarrassing in public.",
    },
    {
      name: "Killer's Ammo",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Only one ammo type can be used at a time; this option doubles the damage dice rolled.",
    },
    {
      name: "Hunter's Ammo",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Only one ammo type can be used at a time; this option triples the weapon's range.",
    },
    {
      name: "Protective Father's Ammo",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Only one ammo type can be used at a time; when you shoot a close friend, you heal them instead of hurting them.",
    },
    {
      name: "Mother's Revenge Ammo",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Only one ammo type can be used at a time; add an additional die to the weapon for every five HP you are below maximum.",
    },
    {
      name: "Medical Wax",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Only one wax can be used at a time; it heals 5 HP during your turn.",
    },
    {
      name: "Get Down Armor Wax",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: false,
      price: 5000,
      description: "Only one wax can be used at a time; gain +3 to AC when next to an ally.",
    },
    {
      name: "Unbreakable Arrow",
      rarity: "Common",
      itemType: "Weapon (Any)",
      attunment: false,
      price: 40,
      description: "This arrow can't be broken, except when it is within an Antimagic Field.",
    },
    {
      name: "Walloping Ammunition",
      rarity: "Common",
      itemType: "Weapon (Any)",
      attunment: false,
      price: 40,
      description: "This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
    },
    {
      name: "Ammunition, +2",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: "You have a +2 bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hits a target, the ammunition is no longer magical.",
    },
    {
      name: "Bow Of Conflagration",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: true,
      price: 1000,
      description: "Ammunition fired from this bow blazes brightly. When you hit with an attack roll using this bow, the target takes an extra 1d6 fire damage. If the target is a flammable, nonmagical object, it catches fire, taking 1d6 fire damage at the start of each of your turns until a creature uses an action to extinguish the flames.",
    },
    {
      name: "Daern's Instant Fortress",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.
The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the Knock spell and similar magic, such as that of a Chime of Opening.
Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.
The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of wish causes the roof, the door, or one wall to regain 50 hit points.`,
    },
    {
      name: "Dragon Wing Bow",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: true,
      price: 1000,
      description: `The limb tips of this magic bow are shaped like a dragon’s wings, and the weapon is infused with the essence of a chromatic, gem, or metallic dragon’s breath. When you hit with an attack roll using this magic bow, the target takes an extra 1d6 damage of the same type as the breath infused in the bow—acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder.
If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you pull back the string. The ammunition created by the bow vanishes the instant after it hits or misses a target.`,
    },
    {
      name: "Glimmering Moonbow",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: true,
      price: 1000,
      description: `This silver-and-black bow is engraved with the phases of the moon. You gain a +1 bonus to attack and damage rolls made with this magic weapon.
When you hit with a ranged attack roll using this magic bow, the target takes an extra 1d6 radiant damage. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the bow vanishes the instant after it hits or misses a target.
While wielding this magic bow, you can use a bonus action to enter a semi-incorporeal state until the start of your next turn. While semi-incorporeal, you have resistance to bludgeoning, piercing, and slashing damage. Once this bonus action is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Helm of the Gods",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While wearing this helm, you know whether there is a celestial or fiend within 30 feet of you, as well as where the creature is located, provided the creature isn't behind total cover.
Whenever you finish a long rest while wearing the helm, you can pray to one of the gods listed on the Helm of the Gods table and store the listed spell in the helm, replacing any spell that is already stored there. The save DC for the spell is 13.
The helm has 3 charges. To cast a spell from the helm, you must expend 1 charge, and the helm regains 1d3 charges daily at dawn.
Helm of the Gods
God | Spell
Athreos | Protection from Evil and Good
Ephara | Sanctuary
Erebos | Inflict Wounds
Heliod | Guiding Bolt
Iroas | Heroism
Karametra | Goodberry
Keranos | Thunderous Smite
Klothys | Entangle
Kruphix | Dissonant Whispers
Mogis | Hellish Rebuke
Nylea | Faerie Fire
Pharika | Lesser Restoration
Phenax | Charm Person
Purphoros | Searing Smite
Thassa | Identify`,
    },
    {
      name: "Starshot Crossbow",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: true,
      price: 1000,
      description: `This crossbow is crafted from blackened wood, and its limbs bear pearl inlays depicting constellations. You ignore the loading property with this crossbow. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn.
Constellations. The crossbow is decorated with three constellations. As a bonus action, you can tap one of the constellations to invoke it, expending 1 charge and producing one of the following effects:
Balance. The next time you hit a creature with a ranged attack roll using this crossbow before the end of your next turn, you or another creature of your choice within 30 feet of you can regain hit points equal to 1d8 plus your proficiency bonus.
Flames. Until the end of your next turn, when you hit a creature with a ranged attack roll using this crossbow, the attack deals an additional 2d8 fire damage.
Rogue. Until the end of your next turn, you have the invisible condition, and anything you are wearing or carrying is also invisible.`,
    },
    {
      name: "Two-Birds Sling",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: `You have a +1 bonus to attack and damage rolls made with this weapon.
When you make a ranged attack with this sling and hit a target, you can cause the ammunition to ricochet toward a second target within 10 feet of the first, and then make a ranged attack against the second target.`,
    },
    {
      name: "Wand of Lightning Bolts",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.`,
    },
    {
      name: "Wand of Wonder",
      rarity: "Rare",
      itemType: "Wand",
      attunment: true,
      price: 1000,
      description: `This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens.
If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.
If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.
The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.
d100                Effect
01-05        You cast Slow.
06-10        You cast Faerie Fire.
11-15        You are stunned until the start of your next turn, believing something awesome just happened.
16-20        You cast Gust of Wind.
21-25        You cast Detect Thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.
26-30        You cast Stinking Cloud.
31-33        Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.
34-36        An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears. See the Monster Manual for the animal's statistics.
37-46        You cast Lightning Bolt.
47-49        A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.
50-53        You enlarge the target as if you had cast Enlarge/Reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.
54-58        You cast Darkness.
59-62        Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.
63- 65        An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.
66-69        You shrink yourself as if you had cast Enlarge/Reduce on yourself.
70- 79        You cast Fireball.
80-84        You cast Invisibility on yourself.
85-87        Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.
88- 90        A stream of 1 d4 x 10 gems, each worth 1 gp, shoots from the wand 's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line .
91-95        A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
96-97        The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected .
98-00        If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn , becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic.`,
    },
    {
      name: "Ammunition, +1",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "You have a +1 bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hits a target, the ammunition is no longer magical.",
    },
    {
      name: "Deck Of Miscellany",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This wooden box contains a set of thirty-two parchment cards.
The face of each card bears an illustration of a different item or set of items. As an action, you can draw a card of your choice from the deck and throw it to the ground in an unoccupied space within 5 feet of yourself. When the card hits the ground, the card permanently transforms into the item or set of items depicted on its face. An altered deck of real-world playing cards can simulate the deck, as shown on the Deck of Miscellany table.
Deck of Miscellany
Card Item
3 ♦️ Wooden abacus
4 ♦️ Four vials of perfume
5 ♦️ 5 days’ worth of rations
6 ♦️ Iron pot
7 ♦️ Disguise kit
8 ♦️ Window (up to 5 feet wide and 5 feet high), which you can place on a vertical surface up to 5 feet thick and which allows you to look through the surface
9 ♦️ Manacles
10 ♦️ Ten sheets of parchment
3 ♥️ Three daggers
4 ♥️ Four flasks of oil
5 ♥️ Five silk robes
6 ♥️ Forgery kit
7 ♥️ Quarterstaff
8 ♥️ Fishing tackle
9 ♥️ Leather pouch containing 18 gp
10 ♥️ 10 crossbow bolts
3 ♣️ Three books, written in Common, about random historical events
4 ♣️ Canvas tent
5 ♣️ 50 feet of coiled silk rope
6 ♣️ Two crowbars
7 ♣️ Healer’s kit
8 ♣️ Eight gems worth 5 gp each
9 ♣️ Lamp
10 ♣️ 10 feet of iron chain
3 ♠️ Three spears
4 ♠️ Steel mirror
5 ♠️ 15-foot wooden pole
6 ♠️ Burlap sack
7 ♠️ Two sets of fine clothes
8 ♠️ Shovel
9 ♠️ Light hammer
10 ♠️ Ten arrows`,
    },
    {
      name: "Dried Leech",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "This leech has been dried and imbued with a mote of animating magic. If you hit a creature with a ranged attack roll using this ammunition, the leech springs to life and sinks its teeth into the target, dealing 1d4 piercing damage at the start of each of the target’s turns. If the leech deals at least 10 damage or the target dies, the leech falls off. A creature, including the target, can use its action to detach the leech. Once a leech is no longer attached to its target, the leech dies and is no longer magical.",
    },
    {
      name: "Guild Signet",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: `This ring, adorned with the symbol of a guild, allows you to cast one spell closely associated with that guild, as shown in the Guild Signet Spells table. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of the guild's recognition and favor.
A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).
Guild Signet Spells
Guild | Associated Spell
Azorious | Ensnaring Strike
Boros | Heroism
Dimir | Disguise Self
Golgari | Entangle
Gruul | Compelled Duel
Izzet | Chaos Bolt
Orzhov | Command
Rakdos | Hellish Rebuke
Selesnya | Charm Person
Simic | Expeditious Retreat`,
    },
    {
      name: "Mizzium Apparatus",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `Innovation is a dangerous pursuit, at least the way the mages of the Izzet League engage in it. As protection against the risk of an experiment going awry, they have developed a device to help channel and control their magic. This apparatus is a collection of leather straps, flexible tubing, glass cylinders, and plates, bracers, and fittings made from a magic-infused metal alloy called mizzium, all assembled into a harness. The item weighs 8 pounds.
While you are wearing the mizzium apparatus, you can use it as an arcane focus. In addition, you can attempt to cast a spell that you do not know or have prepared. The spell you choose must be on your class's spell list and of a level for which you have a spell slot, and you must provide the spell's components.
You expend a spell slot to cast the spell as normal, but before resolving it you must make an Intelligence (Arcana) check. The DC is 10 + twice the level of the spell slot you expend to cast the spell.
On a successful check, you cast the spell as normal, using your spell save DC and spellcasting ability modifier. On a failed check, you cast a different spell from the one you intended. Randomly determine the spell you cast by rolling on the table for the level of the spell slot you expended. If the slot is 6th level or higher, roll on the table for 5th-level spells.
If you try to cast a cantrip you don't know, the DC for the Intelligence (Arcana) check is 10, and on a failed check, there is no effect.
==1st-Level Spells==
d6 Spell
1 Burning Hands
2 Chaos Bolt
3 Color Spray
4 Faerie Fire
5 Fog Cloud
6 Thunderwave
==2nd-Level Spells==
d6 Spell
1 Blur
2 Gust of Wind
3 Heat Metal
4 Melf's Acid Arrow
5 Scorching Ray
6 Shatter
==3rd-Level Spells==
d6 Spell
1 Fear 
2 Feign Death
3 Fireball
4 Gaseous Form
5 Sleet Storm
6 Stinking Cloud
==4th-Level Spells==
d4 Spell
1 Confusion
2 Conjure Minor Elementals
3 Evard's Black Tentacles
4 Ice Storm
==5th-Level Spells==
d4 Spell
1 Animate Objects
2 Cloudkill
3 Cone of Cold
4 Flame Strike`,
    },
    {
      name: "Quiver of Ehlonna",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.
You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.`,
    },
    {
      name: "Smokepowder",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `Smokepowder is a magical explosive chiefly used to propel a bullet out of the barrel of a firearm. It is stored in airtight wooden kegs or tiny, waterproof leather packets. A packet contains enough Smokepowder for five shots, and a keg holds enough Smokepowder for five hundred shots.
If Smokepowder is set on fire, dropped, or otherwise handled roughly, it explodes and deals fire damage to each creature or object within 20 feet of it: 1d6 for a packet, 9d6 for a keg. A successful DC 12 Dexterity saving throw halves the damage.
Casting Dispel Magic on Smokepowder renders it permanently inert.`,
    },
    {
      name: "Winged Ammunition",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Ranged weapon attack rolls made with this ammunition ignore half and three-quarters cover. In addition, attacking at long range doesn’t impose disadvantage on ranged weapon attack rolls made with this ammunition.",
    },
    {
      name: "Ammunition, +3",
      rarity: "Very Rare",
      itemType: "Weapon",
      attunment: false,
      price: 2500,
      description: "You have a +3 bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hits a target, the ammunition is no longer magical.",
    },
    {
      name: "Arcane Cannon",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: `This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. After the cannon has fired, it must recharge for 5 minutes before it can be fired again.
The creature firing the cannon chooses the effect from the following options:
Acid Jet. The cannon discharges acid in a line 300 feet long and 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one. In addition, a creature that fails its saving throw takes 11 (2d10) acid damage at the start of each of its turns; a creature can end this damage by using its action to wash off the acid with a pint or more of water.
Fire Jet. The cannon discharges fire in a line 300 feet long and 5 feet wide. Each creature in the area must make a DC 15 Dexterity saving throw, taking 33 (6d10) fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.
Frost Shot. The cannon shoots a ball of frost to a point you can see within 1,200 feet of the cannon. The ball then expands to form a 30-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, a creature takes 22 (4d10) cold damage, and its speed is reduced by 10 feet for 1 minute. On a successful save, the creature takes half as much damage, and its speed isn't reduced. A creature whose speed is reduced by this effect can repeat the save at the end of each of its turns, ending the effect on itself on a success.
Lightning Shot. The cannon shoots a ball of lightning to a point you can see within 1,200 feet of the cannon. The lightning then expands to form a 20-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Dexterity saving throw, taking 33 (6dl0) lightning damage on a failed save, or half as much damage on a successful one. Creatures wearing metal armor have disadvantage on the save.
Poison Spray. The cannon expels poison gas in a 60-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, the creature takes 22 (4d10) poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A creature poisoned in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`,
    },
    {
      name: "Arrow of Slaying",
      rarity: "Very Rare",
      itemType: "Weapon",
      attunment: false,
      price: 2500,
      description: `An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.
Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow.
Other types of magic ammunition of this kind exist, such as bolts of slaying meant for a crossbow, though arrows are most common.`,
    },
    {
      name: "Bloodseeker Ammunition",
      rarity: "Very Rare",
      itemType: "Weapon",
      attunment: false,
      price: 2500,
      description: "Ranged attack rolls made with this ammunition have advantage against any creature doesn’t have all its hit points.",
    },
    {
      name: "Crown Of Whirling Comets",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This delicate silver tiara is decorated with stellar iconography. While you wear the crown, the gems on the tiara’s points detach and closely orbit your head.
The crown has 6 charges for the following properties, which you can use while wearing the crown:
Star Flight. As a bonus action, you can spend 1 charge to gain the power of flight for 10 minutes. For the duration, you gain a flying speed equal to your walking speed, and you can hover. While flying, you glow faintly with starlight.
Starlight Strike. As an action, you can spend any number of charges to launch bolts of frigid starlight. You launch a number of bolts equal to the number of charges spent, and you can direct the bolts to target one creature or several, so long as all creatures are within 120 feet of you and you can see them. The bolts automatically strike their targets, and each bolt deals 2d4 cold damage.
Whirling Hail. As an action, you can spend 3 charges and cast the Ice Storm spell (save DC 16).
The crown regains 1d6 expended charges daily at dawn.`,
    },
    {
      name: "Sling Bullets of Althemone",
      rarity: "Very Rare",
      itemType: "Weapon",
      attunment: false,
      price: 2500,
      description: `The sling bullets come in a pouch, which contains 1d4 + 4 bullets. Roll on the Magic Sling Bullets table for each bullet to determine its magical property.
You have a +2 bonus to attack and damage rolls made with each of these bullets. If a bullet misses its target, the bullet teleports back into the pouch. Once a bullet hits a target, the bullet loses its magic.
Magic Sling Bullets
d4
Bullet
1
Banishment.
A creature that takes damage from this bullet must succeed on a DC 15 Charisma saving throw or be banished as though affected by the
Banishment
spell.
2
Fulguration.
On a hit, this bullet deals an extra 2d8 lightning damage to its target. All other creatures within 10 feet of the target must each succeed on a DC 15 Constitution saving throw or take 1d8 thunder damage.
3
Stunning.
On a hit, this bullet deals an extra 1d10 force damage, and the target is stunned until the end of your next turn.
4
Tracking.
A creature that takes damage from this bullet is marked with a glowing rune where the bullet hit. The mark lasts 24 hours. While the creature is marked, you always know the direction to it.`,
    }
  ],
};
