import { Item, Tribe } from "../types";

export interface NMEItem extends Item {
  priceText?: string;
}

export const tribeNME: Tribe & { items: NMEItem[] } = {
  name: "N.M.E.",
  owner: "Fred the Vampire",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "I am so terribly sorry—it looks like I may have a bit of a problem opening up this blood bag. If I could get some help opening this up, that would be wonderful. Please make a DC 14 Medicine check to pop this open. If you succeed, I’ll give you a Supreme Healing Potion (heals 10d4+20). If you fail, don't worry about it; I'll focus on it when you leave and I'll give you a Healing Potion (heals 2d4+2) for your trouble.",

          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          "Oh my, you are quite a way from home now. Please take a seat, I'll pour a cup of tea, then we can get down to business, shall we? Cream? Honey? Mint? Rooibos? Whatever you like.",
          "I'm not much of a theatrical vampire like you might expect; before all this I was actually an accountant.",
          "You will eventually discover that under the movie stereotypes, imposed mystique, and overall inflated expectations, each and every one of us is at least a touch more boring than our images would indicate. And that is not a bad thing.",
          "They say money can't buy happiness, but it sure can buy a lot of blood bags. However, here at N.M.E. we prefer to take from the source rather than a third party.",
          "Hello, please come and take a seat. This is N.M.E., where we make sure that your life is worth giving. Now tell me, how can we help you?",
          
          ],
  items: [
    {
      name: "Blood for Blackmail",
      rarity: "Uncommon",
      itemType: "Armor",
      attunment: false,
      price: 250,
      description: "(After living for so long we have acquired a little bit of dirt on everyone; care to take a look?): Minor Dirt: 10% of current max HP (discounts, small favors); Major Dirt: 15% of current max HP (big discounts, access, cover-ups); Ruinous Dirt: 20% of current max HP (force cooperation in serious situation); Life-Ruiner",
      priceText: `
      Minor Dirt: 10% of current max HP (discounts, small favors)
      Major Dirt: 15% of current max HP (big discounts, access, cover-ups)
      Ruinous Dirt: 20% of current max HP (force cooperation in serious situation)
      Life-Ruiner: 25% of current max HP (NPC-shaping leverage)`,
    },
    {
      name: "Blood for An Endless Elixir",
      rarity: "Uncommon",
      itemType: "Potion",
      attunment: false,
      price: 250,
      description: "Pour any potion into this bottle to imprint it (potion is consumed). Bottle holds 1 imprint at a time. The bottle refills only when empty and only after 10 minutes of uninterrupted calm (no refill during initiative). This item takes 10 minutes to refill completely. To clear the current imprinted potion take a point of damage, drop some blood in there, and wait 10 minutes; then you may imprint a new potion into this item.",
      priceText: "25% of current max HP (Rounded up)",
    },
    {
      name: "Blood for Power",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "We drain your blood in exchange; we boost a single stat beyond normal means.",
      priceText: `
      New raw score 20 → 10% of current max HP (Rounded up)
      New raw score 21–22 → 15% of current max HP (Rounded up)
      New raw score 23–24 → 20% of current max HP (Rounded up)
      New raw score 25–26 → 25% of current max HP (Rounded up)
      New raw score 27–28 → 30% of current max HP (Rounded up)
      New raw score 29–30 → 35% of current max HP (Rounded up)`,
    },
    {
      name: "Blood for Loyal Spectral Servant",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "We teach you a forbidden blood-rite. You learn the Spectral Servant cantrip, and you may pour spell slots into it to spawn more servants. They can’t attack, can’t use magic items, and exist to carry, fetch, open, pour, and deliver packages. Base Cast (Cantrip): 1 Spectral Servant (Concentration) Upcast (Spell Slot): +1 additional Servant per spell slot level used Example: 1st = 2 Servants, 2nd = 3 Servants, 3rd = 4 Servants, etc. Command: Bonus action to move (30 ft fly/hover) + interact with an object (150 lb) Help (Combat): A Servant may take the Help action, then immediately dissipates Limit: Only 1 Servant created by this spell can grant Help per round.",
      priceText: `10% of current max HP (Rounded up)`,
    },
    {
      name: "Blood for Coffin-Safe",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "We make room in our private vualt for any object that can fit 3ft cude. Only you and anyone you tell use can withdrawl anything from within the vualt at any N.M.E. location. Unless N.M.E. goes into hiding or destroyed.",
      priceText: `5% of current max HP (Rounded up)`,
    },
    {
      name: "Become a Vampire",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `
      You physically stay the same race just that change it to undead, but on the bright side you had to make the active choice to become a VAMPIRE! Which, although a bit questionable, is by far more rewarding in the long run! If you can survive that long.
      HP: Lose 20 permanent hit points; if this brings you below 10, it is just 10 now.
      AC: NA, nothing changes here
      Speed: NA, nothing changes here
      Stats: add 1 point to dexterity, intelligence, & charisma (max 20)
      New Race abilities:
      Weakness: I just had to get this out of the way first. If you ever get out in the sun, get hit with holy water, get impaled with a stake, eat garlic, enter a home uninvited, or cross running water, you immediately die no death saves.
      Bloodthirst: As a vampire you will need blood to survive more specifically 9 gallon of blood from a intelligent creature every 90 days. Yeah its not that much. However, this ability and others will evolve or pop up if you consume more than 90 gallons than you need in that 90 day period. So get chuggin!`,
      priceText: `10% of current max HP (Rounded up)`,
    },
    {
      name: "Scroll of True Resurrection",
      rarity: "Legendary",
      itemType: "Scroll",
      attunment: false,
      price: 5000,
      description: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
    },
    {
      name: "Bloodwell Vial",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.
In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn. (This is a +2 item but I don't know where to put it)`,
    },
    {
      name: "Butcher's Bib",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This black leather apron is perpetually covered by blood, even after being washed off. You gain the following benefits while wearing the apron:
Once per turn when you roll damage for a melee attack with a weapon, you can reroll the weapon's damage dice. If you do so, you must use the second total.
Your weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20 on the d20.`,
    },
    {
      name: "Delver's Claws",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `The back of this weatherworn leather glove is adorned with three large metal hooks shaped like a mole’s claws. Stitched into the glove’s palm is the mountain rune.
The glove is considered a simple melee weapon with the finesse and light properties, and it deals 1d4 slashing damage on a hit. While attuned to the glove, you gain a burrowing speed equal to your walking speed and blindsight to 15 feet.
Invoking the Rune. As an action, you can invoke the glove’s rune to bolster yourself with the sturdiness of the earth. Spend and roll a number of your unspent Hit Dice up to a maximum equal to your proficiency bonus. You then regain a number of hit points equal to the total roll plus your Constitution modifier.
Once the rune has been invoked, it can’t be invoked again until the next dawn`,
    },
    {
      name: "Horn of the Endless Maze",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `You can use an action to blow this horn. In response, 3d4+3 warrior spirits from the Abyss appear within 60 feet of you. They look like Minotaurs and use the statistics of a Berserker. They return to the Abyss after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.
If you blow the horn without having proficiency with all simple weapons, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.`,
    },
    {
      name: "Outer Essence Shard",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.
Roll a d4 and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.
Outer Essence Shards
d4        Property
1        Lawful. You can end one of the following conditions affecting yourself or one creature you can see within 30 feet of you: charmed, blinded, deafened, frightened, poisoned, or stunned.
2        Chaotic. Choose one creature who takes damage from the spell. That target has disadvantage on attack rolls and ability checks made before the start of your next turn.
3        Good. You or one creature of your choice that you can see within 30 feet of you gains 3d6 temporary hit points.
4        Evil. Choose one creature who takes damage from the spell. That target takes an extra 3d6 necrotic damage.`,
    },
    {
      name: "Protective Verses",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, you can touch the book's cover and cause it to lock as if you cast Arcane Lock on it. When found, the book contains the following spells: Arcane Lock, Dispel Magic, Globe of Invulnerability, Glyph of Warding, Mordenkainen's Private Sanctum, Protection from Evil and Good, and Symbol. It functions as a spellbook for you.
While you are holding the book, you can use it as a spellcasting focus for your wizard spells.
The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:
- If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the abjuration school.
- When you cast an abjuration spell, you can expend 1 charge to grant a creature you can see within 30 feet of you 2d10 temporary hit points.`,
    },
    {
      name: "Weird Tank",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `A Weird Tank is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird (see the Monster Manual for statistics) is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.
You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.
If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.
The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.`,
    },
    {
      name: "Bloodwell Vial",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.
In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn. (This is a +1 item but I don't know where to put it)`,
    },
    {
      name: "Figurine of Wondrous Power",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `A Figurine of Wondrous Power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manuel for the creature's statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.
Silver Raven (Uncommon). This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.`,
    },
    {
      name: "Gauntlets of Ogre Power",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is 19 or higher without them.",
    },
    {
      name: "Guild Keyrune",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `Associated with a particular guild, a guild keyrune is a ceremonial, stylized key, about 1 foot long, made from carved stone. Not a literal key, the item is a badge of authority that gives its bearer access to privileged places in its guild's headquarters and outposts. At the DM's discretion, a character might be given a keyrune upon attaining a renown score of 25 in their guild.
When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a creature. If there isn't enough space for the creature, the keyrune doesn't transform. See the Monster Manual for the creature's stat block — the name of which is given in bold in the keyrune's description — unless you're directed to chapter 6 of this book instead.
The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.
The creature exists for a duration specific to each keyrune. At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.
===PLEASE PICK ONE===
Rakdos Keyrune (Uncommon). This dark granite keyrune is marbled with scarlet veins and carved with the leering visage of a mischievous demon. When activated, it transforms into a cackler (see chapter 6 for the stat block) for up to 1 hour.
Simic Keyrune (Uncommon). This keyrune is assembled from coral, mother-of pearl, and chrome and adorned with the spirals and curves characteristic of Simic ornamentation. The head resembles the shell of a sea creature. On command, the keyrune turns into a category 1 krasis (see chapter 6 for the stat block) that has the Grabber and Stabilizing Legs adaptations. The transformation lasts for up to 5 hours.`,
    },
    {
      name: "House Of Cards",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This deck of cards is decorated with geometric shapes that have a protective motif. While you’re holding the deck, you can use an action to shuffle it and cause the cards to deal themselves out and transform into a shelter made of cards. The shelter can be shaped however you desire, but it must fit in a 40-foot cube centered on a point within 30 feet of you. The shelter has one door and up to four windows, and only you can open or close them. It has a floor and a roof, and it maintains a comfortable temperature inside.
The shelter has AC 15, 50 hit points, and immunity to poison and psychic damage. The shelter lasts for 24 hours, until you dismiss it as an action, or until it is reduced to 0 hit points. When the shelter’s duration ends, it transforms back into a deck of cards and appears in your hand. Once the deck has transformed into a shelter, it can’t be used again until the next dawn.`,
    },
    {
      name: "Keoghtom's Ointment",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.
As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.`,
    },
    {
      name: "Periapt of Wound Closure",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
    },
    {
      name: "Absorbing Tattoo",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `Produced by a special needle, this magic tattoo features designs that emphasize one color.
Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.
If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.
Damage Resistance. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.
Absorbing Tattoo
d10        Damage Type        Color
1        Acid        Green
2        Cold        Blue
3        Fire        Red
4        Force        White
5        Lightning        Yellow
6        Necrotic        Black
7        Poison        Violet
8        Psychic        Silver
9        Radiant        Gold
10        Thunder        Orange
Damage Absorption. When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reaction is used, it can't be used again until the next dawn.`,
    },
    {
      name: "Battle Standard of Infernal Power",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This hell-forged battle standard is made of infernal iron and fitted with a small, unopenable cage containing a quasit. The trapped quasit is incapacitated, and its cage has AC 19, 10 hit points, and immunity to all types of damage except force damage. If killed or somehow released, the quasit disappears in a cloud of smoke, and a new one appears in the cage, provided the cage is intact.
While you hold the banner, your weapon attacks and those of all allied creatures within 300 feet of you count as magical for the purposes of overcoming damage immunities and resistances.`,
    },
    {
      name: "Bloodwell Vial",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `"To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.
In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn. (This is a +3 item but I don't know where to put it)"`,
    },
    {
      name: "Chime of Exile",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 2500,
      description: "This silver chime is engraved with delicate magic sigils. While holding the chime, you can use an action to cast the Banishment spell (spell save DC 20). If the target of the spell has 50 hit points or fewer, it automatically fails its saving throw. Once the chime has been used to cast the spell, it can’t be used this way again until the next dawn.",
    },
    {
      name: "Scaled Ornament",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon’s scale, tooth, or claw, or it incorporates images in those shapes.
Slumbering (Uncommon). You have advantage on saving throws you make to avoid being charmed or frightened or to end those conditions on you.
Stirring (Rare). You gain a +1 bonus to AC, and you can’t be charmed or frightened. Moreover, each creature of your choice within 30 feet of you has advantage on saving throws it makes to avoid being charmed or frightened or to end those conditions on itself.
Wakened (Very Rare). The Wakened ornament has the Stirring property. In addition, when you would take damage of the type dealt by the breath of the dragon in whose hoard the ornament became Wakened, you can use your reaction to take no damage instead, and you regain hit points equal to the damage you would have taken. Once this property is used, it can’t be used again until the next dawn.`,
    }
  ],
};
