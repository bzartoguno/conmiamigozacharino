import { Item, Tribe } from "./types";

export interface JewelryGuildItem extends Item {
  priceText?: string;
}

export const tribeJewelryGuild: Tribe & { items: JewelryGuildItem[] } = {
  name: "Jewelry Guild",
  owner: "Garry",
  percentAngry: 0,
  priceVariability: 12,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "Welcome, welcome, to the Jewelry Guild, where we give you the glimmer that will make you shine!",
          "We used to be on the outs with the law, but then the nobility said what we could do well, 'reformed.'",
          "Although no one says it, the other guilds—Applegarth, Archives, Dungeon Crawler, and Navigation—actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? And the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it's not too much trouble, we have a mud scraper by the door—just clean off your shoes, please. It's really to keep these carpets clean.",
          "You look like a smart chap; a customer sold this strange gem last week and I think it may be a historical treasure. If you could help me pore over these books—make a DC 14 History check—I’d really appreciate it. If you succeed, I'll pay you 40 gp. If you fail, you take 1 point of damage, get a bandage for your paper cut, and receive 30 gp.",

          "Welcome, welcome, to the Jewelry Guild, where we give you the glimmer that will make you shine!",
          "We used to be on the outs with the law, but then the nobility said what we could do well, 'reformed.'",
          "Although no one says it, the other guilds—Applegarth, Archives, Dungeon Crawler, and Navigation—actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? And the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it's not too much trouble, we have a mud scraper by the door—just clean off your shoes, please. It's really to keep these carpets clean.",
          "Welcome, welcome, to the Jewelry Guild, where we give you the glimmer that will make you shine!",
          "We used to be on the outs with the law, but then the nobility said what we could do well, 'reformed.'",
          "Although no one says it, the other guilds—Applegarth, Archives, Dungeon Crawler, and Navigation—actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? And the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it's not too much trouble, we have a mud scraper by the door—just clean off your shoes, please. It's really to keep these carpets clean.",
          "Welcome, welcome, to the Jewelry Guild, where we give you the glimmer that will make you shine!",
          "We used to be on the outs with the law, but then the nobility said what we could do well, 'reformed.'",
          "Although no one says it, the other guilds—Applegarth, Archives, Dungeon Crawler, and Navigation—actually get the majority of their funds from us.",
          "Did you know that our guild master is actually a Sea Giant? And the Dungeon Crawler's guild leader keeps their soul in a pickle jar! Neither did I until last week.",
          "If it's not too much trouble, we have a mud scraper by the door—just clean off your shoes, please. It's really to keep these carpets clean.",
          
          ],
  items: [
    {
      name: "Stonky's Ring",
      rarity: "????",
      itemType: "Ring",
      attunment: true,
      price: 50000,
      description: `While wearing this ring, you can cast the Telekinesis spell at will, but you can target only objects that aren't being worn or carried.
Any character who attunes to the ring gains control of Stonky's creations, though the skitterwidgets ignore commands spoken more than 30 feet away from them.`,
    },
    {
      name: "Luba's Tarokka of Souls",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Not all lingering spirits are tragic souls, lost on their way to the hereafter. Some languish as prisoners, souls so wicked mortals dare not free them upon an unsuspecting afterlife.
Created by a figure of Vistani legend,
Luba's Tarokka of Souls
shaped the destiny of countless heroes. The prophecies of this deck of cards also revealed great evils and guided its creator into the path of nefarious forces. Untold times the deck's creator, Mother Luba, narrowly escaped doom, spared only by her keen insights. But even for her not all wickedness could be escaped. In the most dire cases, Mother Luba managed to ensnare beings of pure evil amid the strands of fate, imprisoning them within her tarroka deck. There these foul spirits dwell still, trapped within a nether-realm hidden amid shuffling cards, waiting for fate to turn foul — as it inevitably will.
Like all tarokka decks, the
Tarokka of Souls
is a lavishly illustrated collection of fifty-four cards, comprising the fourteen cards of the high deck and forty other cards divided into four suits: coins, glyphs, stars, and swords.
Random Properties.
The artifact has the following random properties, which you can determine by rolling on the tables in the "Artifacts" section of the
Dungeon Master's Guide
:
2 minor detrimental properties
2 minor beneficial properties
Spells.
While holding the deck, you can use an action to cast one of the following spells (save DC 18) from it:
Comprehend Languages
,
Detect Evil and Good
,
Detect Magic
,
Detect Poison and Disease
,
Locate Object
, or
Scrying
. Once you use the deck to cast a spell, you can't cast that spell again from it until the next dawn.
Enduring Vision.
While holding the deck, you automatically succeed on Constitution saving throws made to maintain your concentration on divination spells.
Twist of Fate.
As an action, you can draw a card from the deck and twist the fortune of another creature you can see within 15 feet of you. Choose one of the following effects:
Weal.
The creature has advantage on attack rolls, ability checks, and saving throws for the next hour.
Woe.
The creature has disadvantage on attack rolls, ability checks, and saving throws for the next hour.
The deck can be used in this way twice, and you regain all expended uses at the next dawn.
Prisoners of Fate.
Whenever you use the Twist of Fate property, there is a chance that one of the souls trapped in the deck escapes. Roll d100 and consult the Souls of the Tarokka table. If you roll one of the high cards, the soul associated with it escapes. You can find its statistics in the
Monster Manual
. If you roll a soul that has already escaped, roll again.
Souls of the Tarokka
d100
Card
Soul
1
Artifact
Flameskull
2
Beast
Wraith
3
Broken One
Banshee
4
Darklord
Vampire
5
Donjon
Mummy
6
Executioner
Death knight
7
Ghost
8
Horseman
Mummy lord
9
Innocent
Ghost
10
Marionette
Mummy
11
Mists
Wraith
12
Raven
Vampire spawn
13
Seer
Vampire
14
Tempter
Vampire spawn
15-00
—
The released soul appears at a random location within 10d10 miles of you and terrorizes the living. Until the released soul is destroyed, it gains the benefit of a weal from the deck's Twist of Fate property, and both you and the original target of Twist of Fate suffer the effect of woe.
Shuffling Fate.
If you go 7 days without using the Twist of Fate property, your attunement to
Luba's Tarroka of Souls
ends, and you can't attune to it again until after another creature uses Twist of Fate on you.
Destroying the Deck.
Luba's Tarokka of Souls
can be destroyed only if all fourteen souls within are released and destroyed. This reveals a fifteenth soul, a
lich
, that inhabits the Nether card, which appears only when the fourteen souls are defeated. If this ancient entity is destroyed, the Nether card vanishes and the deck becomes a normal tarokka deck, with no special properties, but it includes a new card of the DM's design.`,
    },
    {
      name: "Ring of Winter",
      rarity: "Artifact",
      itemType: "Ring",
      attunment: true,
      price: 10000,
      description: `The
Ring of Winter
is a golden band that resizes to fit snugly on the finger of its wearer. A thin layer of frost coats the outside of the ring, which normal heat can't melt. The ring feels ice cold to the touch and initially numbs the hand that wears it, but this cold ceases to be felt by one who is attuned to the ring.
The
Ring of Winter
is sentient and tries to take control of any creature that wears it (see "Sentient Magic Items" in chapter 7 of the
Dungeon Master's Guide
). If it succeeds, the ring compels its wearer to cause undue harm to everyone and everything around it, in a cold-hearted attempt to incur the wrath of enemies and bring about the wearer's doom.
Sentience.
The
Ring of Winter
is a sentient chaotic evil item with an Intelligence of 14, a Wisdom of 14, and a Charisma of 17. The ring communicates by transmitting emotion to the creature carrying or wielding it, and it has hearing and normal vision out to a range of 60 feet. The ring craves destruction, and it likes inflicting indiscriminate harm on others.
Nondetection.
The
Ring of Winter
defies attempts to magically locate it. Neither the ring nor its wearer can be targeted by any divination magic or perceived through magical scrying sensors.
Frozen Time.
As long as you wear the ring, you don't age naturally. This effect is similar to suspended animation, in that your age doesn't catch up to you once the ring is removed. The ring doesn't protect its wearer from magical or supernatural aging effects, such as the Horrifying Visage of a ghost.
Cold Immunity.
While attuned to and wearing the ring, you have immunity to cold damage and don't suffer any ill effects from extreme cold (see chapter 5 of the
Dungeon Master's Guide
).
Magic.
The
Ring of Winter
has 12 charges and regains all its expended charges daily at dawn. While wearing the ring, you can expend the necessary number of charges to activate one of the following properties:
You can expend 1 charge as an action and use the ring to lower the temperature in a 120-foot-radius sphere centered on a point you can see within 300 feet of you. The temperature in that area drops 20 degrees per minute, to a minimum of -30 degrees Fahrenheit. Frost and ice begin to form on surfaces once the temperature drops below 32 degrees. This effect is permanent unless you use the ring to end it as an action, at which point the temperature in the area returns to normal at a rate of 10 degrees per minute.
You can cast one of the following spells from the ring (spell save DC 17) by expending the necessary number of charges:
Bigby's Hand
(2 charges; the hand is made of ice, is immune to cold damage, and deals bludgeoning damage instead of force damage as a clenched fist),
Cone of Cold
(2 charges), Flesh to Ice (3 charges; as
Flesh to Stone
except that the target turns to solid ice with the density and durability of stone),
Ice Storm
(2 charges),
Otiluke's Freezing Sphere
(3 charges),
Sleet Storm
(1 charge),
Spike Growth
(1 charge; the spikes are made of ice), or
Wall of Ice
(2 charges).
You can expend the necessary number of charges as an action and use the ring to create either an inanimate ice object (2 charges) or an animated ice creature (4 charges). The ice object can't have any moving parts, must be able to fit inside a 10-foot cube, and has the density and durability of metal or stone (your choice). The ice creature must be modeled after a beast with a challenge rating of 2 or less. The ice creature has the same statistics as the beast it models, with the following changes: the creature is a construct with vulnerability to fire damage, immunity to cold and poison damage, and immunity to the following conditions: charmed, exhaustion, frightened, paralyzed, petrified, and poisoned. The ice creature obeys only its creator's commands. The ice object or creature appears in an unoccupied space within 60 feet of you. It melts into a pool of normal water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8 of the
Dungeon Master's Guide
to determine the hit points of an inanimate object if they become necessary.
Other Properties.
The
Ring of Winter
is rumored to possess other properties that can be activated only by an evil being whose will the ring can't break. Frost giants have long believed that the ring can be used to freeze entire worlds, while a djinni in the service of a Calishite pasha once claimed that the ring could be used to summon and control white dragons, as well as a mighty ice primordial named Cryonax.
Destroying the Ring.
The ring is nigh indestructible, resisting even the most intense magical heat. If it is placed on the finger of the powerful arch fey known as the Summer Queen, the ring melts away and is destroyed forever.`,
    },
    {
      name: "Band of Loyalty",
      rarity: "Common",
      itemType: "Ring",
      attunment: true,
      price: 40,
      description: "If you are reduced to 0 hit points while attuned to a Band of Loyalty, you instantly die. These rings are favored by spies who can’t afford to fall into enemy hands.",
    },
    {
      name: "Cleansing Stone",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `A cleansing stone is a sphere 1 foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person.
Such stones are often embedded in pedestals in public squares in Aundair or in high-end Ghallanda inns.`,
    },
    {
      name: "Clockwork Amulet",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: false,
      price: 40,
      description: `This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.
When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can't be used again until the next dawn.`,
    },
    {
      name: "Dark Shard Amulet",
      rarity: "Common",
      itemType: "Wondrous Item",
      attunment: true,
      price: 40,
      description: `This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:
-You can use the amulet as a spellcasting focus for your warlock spells.
-You can try to cast a cantrip that you don't know. The cantrip must be on the Warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.`,
    },
    {
      name: "Jewel of Three Prayers",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The
Jewel of Three Prayers
is a Vestige of Divergence. In ancient times, Alyxian the Apotheon bore this amulet as a symbol of his covenant with three Prime Deities: Sehanine the Moon Weaver, Avandra the Change Bringer, and Corellon the Arch Heart. When the jewel is found, only Sehanine’s power thrums within its dormant heart. The power of the other two deities waits to be reawakened by a hero - or heroes - who can follow in Alyxian’s footsteps.
Dormant State.
In this state, the
Jewel of Three Prayers
is a glittering golden disk attached to a fine golden chain. The chain magically resizes to function as a necklace for the creature that wears it.
In its Dormant State, the jewel has the following properties:
You gain a +1 bonus to AC while wearing the jewel.
While wearing or holding the jewel, you can use an action to cause it to shed bright light in a 15-foot radius and dim light for an additional 15 feet. The light lasts until you extinguish it (no action required).
The jewel has 3 charges and regains all its expended charges daily at dawn. While holding the jewel, you can expend 1 charge from it to cast the
Invisibility
spell.
Awakened State.
In this state, the jewel has received the blessing of Avandra the Change Bringer. Three delicate spires unfurl from the jewel’s center, like the buds of flowers opening in the spring. Three lapis lazuli stones rest like dewdrops on these spires.
The following benefits of the jewel improve:
The bonus that the jewel confers to your AC increases to +2.
Its number of charges increases to 5.
The jewel gains the following additional properties, which you can use while wearing or holding it:
You can expend 1 of the jewel’s charges (no action required) to end one of the following conditions on yourself: grappled, paralyzed, or restrained.
When another creature you can see within 60 feet of you fails a saving throw, you can expend 1 of the jewel’s charges as a reaction to enable that creature to reroll the saving throw, potentially turning a failure into a success. The creature must use the new roll.
Exalted State.
In this state, the jewel has received the blessing of Corellon the Arch Heart. A gleaming emerald surrounded by a halo of gold appears on the jewel.
The following benefits of the jewel improve:
The bonus that the jewel confers to your AC increases to +3.
Its number of charges increases to 7.
The jewel gains the following additional properties, which you can use while wearing or holding it:
You gain the ability to breathe water, and you gain a swimming speed equal to your walking speed.
Each of your allies within 30 feet of you gains the ability to breathe water and gains a swimming speed equal to its walking speed.
As a bonus action, you can expend 1 of the jewel’s charges to target yourself or one willing creature you can see within 15 feet of yourself. The target teleports to an unoccupied space of your choice within 15 feet of yourself, along with any equipment the target is wearing or carrying. The target appears in a flash of golden radiance, and each creature of your choice within 5 feet of the target’s new location must make a DC 18 Constitution saving throw. On a failed save, the creature takes a 4d10 radiant damage and is blinded until the start of your next turn. On a successful save, the creature takes half as much damage and isn’t blinded.`,
    },
    {
      name: "Nightfall Pearl",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: "Used to summon night, this 6-inch-diameter, jet-black orb is cold to the touch. You can spend 10 minutes to activate it, causing the area within 10 miles of it at the moment of activation to become night even if it is daytime. This night lasts for 24 hours, until you cancel it as an action, or until your attunement to the pearl ends. Once used, the pearl can't be used again for 24 hours.",
    },
    {
      name: "Ring of Djinni Summoning",
      rarity: "Legendary",
      itemType: "Ring",
      attunment: true,
      price: 5000,
      description: `While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane.
While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions.
After the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.`,
    },
    {
      name: "Ring of Elemental Command",
      rarity: "Legendary",
      itemType: "Ring",
      attunment: true,
      price: 5000,
      description: `This ring is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane.
While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane.
The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.
Ring of Air Elemental Command.
You can expend 2 of the ring's charges to cast
Dominate Monster
on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.
If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:
You have resistance to lightning damage.
You have a flying speed equal to your walking speed and can hover.
You can cast the following spells from the ring, expending the necessary number of charges:
Chain Lightning
(3 charges),
Gust of Wind
(2 charges), or
Wind Wall
(1 charge).
Ring of Earth Elemental Command.
You can expend a 2 of the ring's charges to cast
Dominate Monster
on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.
If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:
You have resistance to acid damage.
You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest occupied space you last occupied.
You can cast the following spells from the ring, expending the necessary number of charges:
Stone Shape
(2 charges),
Stoneskin
(3 charges), or
Wall of Stone
(3 charges).
Ring of Fire Elemental Command.
You can expend 2 of the ring's charges to cast
Dominate Monster
on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.
If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:
You are immune to fire damage.
You can cast the following spells from the ring, expending the necessary number of charges:
Burning Hands
(1 charge),
Fireball
(2 charges), and
Wall of Fire
(3 charges).
Ring of Water Elemental Command.
You can expend 2 of the ring's charges to cast
Dominate Monster
on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.
If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:
You can breathe underwater and have a swimming speed equal to your walking speed.
You can cast the following spells from the ring, expending the necessary number of charges:
Create or Destroy Water
(1 charge),
Control Water
(3 charges),
Ice Storm
(2 charges), or
Wall of Ice
(3 charges).`,
    },
    {
      name: "Ring of Spell Turning",
      rarity: "Legendary",
      itemType: "Ring",
      attunment: true,
      price: 5000,
      description: "While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.",
    },
    {
      name: "Ring of Three Wishes",
      rarity: "Legendary",
      itemType: "Ring",
      attunment: false,
      price: 5000,
      description: `While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the
Wish
spell from it. The ring becomes nonmagical when you use the last charge.`,
    },
    {
      name: "Ruby Weave Gem",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `While you are holding this gem, you can use it as a spellcasting focus for your spells.
The gem has 3 charges and regains all expended charges daily at dawn. When you cast a spell while holding this gem, you can expend up to 3 charges to ignore the spell’s material components with a gold piece cost, up to 500 gp per charge expended.
When you finish a long rest, choose a spell from any class list. The spell you choose must be of a level you can cast. You know the chosen spell and can cast it with your spell slots of the appropriate level until the end of your next long rest.`,
    },
    {
      name: "Spell Gem",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Wondrous item, rarity varies (attunement optional)
A
spell gem
can contain one spell from any class's spell list. You become aware of the spell when you learn the gems properties. While holding the gem. you can cast the spell from it as an action if you know the spell or if the spell is on your class spell list. Doing so doesn‘t require any components and doesn't require attunement. The spell then disappears from the gem.
If the spell is of a higher level than you can normally cast. you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check. the spell disappears from the gem with no other effect.
Each
spell gem
has a maximum level for the spell it can store. The spell level determines the gems rarity and the stored spell's saving throw DC and attack bonus. as shown in the Spell Gem table.
You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed. you must provide them. but they can be worth half as much as normal.
Once imbued with a spell. the gem can't be imbued again until the next dawn.
Deep gnomes created these magic gemstones and keep the creation process a secret.
Spell Gem
Max. Spell Level
Gemstone
Rarity
Save DC
Attack Bonus
Cantrip
Obsidian
Uncommon
13
+5
1st
Lapis lazuli
Uncommon
13
+5
2nd
Quartz
Rare
13
+5
3rd
Bloodstone
Rare
15
+7
4th
Amber
Very rare
15
+9
5th
Jade
Very rare
17
+9
6th
Topaz
Very rare
17
+10
7th
Star ruby
Legendary
18
+10
8th
Ruby
Legendary
18
+10
9th
Diamond
Legendary
19
+11`,
    },
    {
      name: "Talisman of Pure Good",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.
If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.
The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.`,
    },
    {
      name: "Talisman of the Sphere",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `When you make an Intelligence (Arcana) check to control a
Sphere of Annihilation
while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a
Sphere of Annihilation
, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 x your Intelligence modifier.`,
    },
    {
      name: "Talisman of Ultimate Evil",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.
If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.
The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.`,
    },
    {
      name: "Amulet of Health",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is 19 or higher without it.",
    },
    {
      name: "Amulet of Protection from Turning",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `While you wear this amulet of silver and turquoise, you have advantage on saving throws against effects that turn undead.
If you fail a saving throw against such an effect, you can choose to succeed instead. You can do so three times, and expended uses recharge daily at dawn.
Each time an effect that turns undead is used against you, the amulet glows with silvery blue light for a few seconds.`,
    },
    {
      name: "Amulet of the Devout",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.
While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn. (This is a +2 item)`,
    },
    {
      name: "Gem of Seeing",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem.
The gem regains 1d3 expended charges daily at dawn.`,
    },
    {
      name: "Necklace of Fireballs",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: false,
      price: 1000,
      description: `This necklace has 1d6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level Fireball spell (save DC 15).
You can hurl multiple beads, or even the whole necklace as one action. When you do so, increase the level of the Fireball by 1 for each bead beyond the first.`,
    },
    {
      name: "Ring of Animal Influence",
      rarity: "Rare",
      itemType: "Ring",
      attunment: false,
      price: 1000,
      description: `This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:
- Animal Friendship (save DC 13)
- Fear (save DC 13), targeting only beasts that have an Intelligence of 3 or lower
- Speak with Animals`,
    },
    {
      name: "Ring of Evasion",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
    },
    {
      name: "Ring of Feather Falling",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
    },
    {
      name: "Ring of Free Action",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: "While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.",
    },
    {
      name: "Ring of Protection",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
    },
    {
      name: "Ring of Resistance",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: `You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the DM chooses or determines randomly.
10	Damage Type	Gem
1	Acid	Pearl
2	Cold	Tourmaline
3	Fire	Garnet
4	Force	Sapphire
5	Lightning	Citrine
6	Necrotic	Jet
7	Poison	Amethyst
8	Psychic	Jade
9	Radiant	Topaz
10	Thunder	Spinel`,
    },
    {
      name: "Ring of Spell Storing",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: `This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contain 1d6 - 1 levels of stored spells chosen by the DM.
Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.
While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.`,
    },
    {
      name: "Ring of Temporal Salvation",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: "If you die while wearing this gray crystal ring, you vanish and reappear in an unoccupied space within 5 feet of the space you left (or the nearest unoccupied space). You have a number of hit points equal to 3d6 + your Constitution modifier. If your hit point maximum is lower than the number of hit points you regain, your hit point maximum rises to a similar amount. If you have any levels of exhaustion, reduce your level of exhaustion by 1. Once the ring is used, it turns to dust and is destroyed.",
    },
    {
      name: "Ring of the Ram",
      rarity: "Rare",
      itemType: "Ring",
      attunment: true,
      price: 1000,
      description: `The ring has 3 charges, and to regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to make a ranged spell attack against one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.
Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.`,
    },
    {
      name: "Spell Gem (Fix this)",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `A spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gems properties. While holding the gem. you can cast the spell from it as an action if you know the spell or if the spell is on your class spell list. Doing so doesn‘t require any components and doesn't require attunement. The spell then disappears from the gem.
If the spell is of a higher level than you can normally cast. you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check. the spell disappears from the gem with no other effect.
Each spell gem has a maximum level for the spell it can store. The spell level determines the gems rarity and the stored spell's saving throw DC and attack bonus. as shown in the Spell Gem table.
You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed. you must provide them. but they can be worth half as much as normal.
Once imbued with a spell. the gem can't be imbued again until the next dawn.
Deep gnomes created these magic gemstones and keep the creation process a secret.`,
    },
    {
      name: "Amulet of Proof Against Detection and Location",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
    },
    {
      name: "Amulet of the Devout",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.
While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn. (This is a +1 item)`,
    },
    {
      name: "Brooch of Living Essence",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral.",
    },
    {
      name: "Brooch of Shielding",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
    },
    {
      name: "Circlet of Blasting",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.",
    },
    {
      name: "Circlet of Human Perfection",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer.
Removing the circlet ends the effect.`,
    },
    {
      name: "Elemental Gem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.
Gem | Summoned Elemental
Blue sapphire | Air elemental
Yellow diamond | Earth elemental
Red corundum | Fire elemental
Emerald | Water elemental`,
    },
    {
      name: "Emerald Pen",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This pen is tipped with an emerald nib and requires no ink to write. While holding this pen, you can cast Illusory Script at will, requiring no material components.",
    },
    {
      name: "Fabulist Gem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `This glittering red gem is commonly found embedded in a ring or brooch.
While wearing the gem, you gain the following benefits.
Counterfeit Coins. You can use your action to magically create a pile of coins, worth no more than 100 gp total, in an unoccupied space within 10 feet of yourself. The pile must appear on a surface that can support it. After 1 hour, the coins vanish, regardless of where they are. Once this action is used, it can’t be used again until the next dawn.
Illusory Fashion. As a bonus action, you can magically change the appearance of your clothing and armor. You can change the style, color, and apparent quality of what you’re wearing, or you can make it appear as if you were wearing different garments entirely. In either case, the changes wrought by this magic fail to pass physical inspection.`,
    },
    {
      name: "Gem of Brightness",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: `This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:
-The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.
-The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
-The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.
When all of the gem's charges are expended, the gem becomes a non magical jewel worth 50 gp.`,
    },
    {
      name: "Necklace of Adaptation",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as Cloudkill and Stinking Cloud effects, inhaled poisons, and the breath weapons of some dragons).",
    },
    {
      name: "Pearl of Power",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
    },
    {
      name: "Ring of Jumping",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "While wearing this ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
    },
    {
      name: "Ring of Obscuring",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "This band of iron resembles a skull and is cold to the touch. It has 3 charges and regains 1d3 expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the Fog Cloud spell from it, with the following changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no concentration required).",
    },
    {
      name: "Ring Of Puzzler's Wit",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: false,
      price: 250,
      description: `This gold ring bears a fluorite stone and is enchanted to sharpen the wearer’s mind.
The ring has 3 charges and regains 1d4 − 1 expended charges daily at dawn. When you make an Intelligence check, you can expend 1 charge to grant yourself advantage on the check.`,
    },
    {
      name: "Ring of Swimming",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: false,
      price: 250,
      description: "You have a swimming speed of 40 feet while wearing this ring.",
    },
    {
      name: "Ring of the Orator",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "This ring has 6 charges. While you wear it, you can expend 1 of its charges to project your voice to be heard clearly by all creatures within 1 mile of yourself, regardless of intervening noise, for 1 minute. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks this projection. If you project your voice while speaking a language the listening creatures don’t understand, you can make the creatures understand what you’re saying. You must be able to see the creatures to make them understand. The ring regains 1d6 expended charges daily at dawn.",
    },
    {
      name: "Ring of Warmth",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
    },
    {
      name: "Ring of Water Walking",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: false,
      price: 250,
      description: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
    },
    {
      name: "Rings of Shared Suffering",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: true,
      price: 250,
      description: "These rings come in linked pairs. If you possess the Mark of Sentinel, you can use a bonus action to form a link to the creature attuned to the other ring; from then on, whenever that creature suffers damage, they only suffer half of that damage and you take the rest. This effect continues until you end it as a bonus action or until you or the other creature removes their ring. This effect isn't limited by range. A creature cannot be attuned to more than one ring of shared suffering.",
    },
    {
      name: "Spell Gem",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: true,
      price: 250,
      description: `Wondrous item, rarity varies (attunement optional)
A
spell gem
can contain one spell from any class's spell list. You become aware of the spell when you learn the gems properties. While holding the gem. you can cast the spell from it as an action if you know the spell or if the spell is on your class spell list. Doing so doesn‘t require any components and doesn't require attunement. The spell then disappears from the gem.
If the spell is of a higher level than you can normally cast. you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check. the spell disappears from the gem with no other effect.
Each
spell gem
has a maximum level for the spell it can store. The spell level determines the gems rarity and the stored spell's saving throw DC and attack bonus. as shown in the Spell Gem table.
You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed. you must provide them. but they can be worth half as much as normal.
Once imbued with a spell. the gem can't be imbued again until the next dawn.
Deep gnomes created these magic gemstones and keep the creation process a secret.
Spell Gem
Max. Spell Level
Gemstone
Rarity
Save DC
Attack Bonus
Cantrip
Obsidian
Uncommon
13
+5
1st
Lapis lazuli
Uncommon
13
+5
2nd
Quartz
Rare
13
+5
3rd
Bloodstone
Rare
15
+7
4th
Amber
Very rare
15
+9
5th
Jade
Very rare
17
+9
6th
Topaz
Very rare
17
+10
7th
Star ruby
Legendary
18
+10
8th
Ruby
Legendary
18
+10
9th
Diamond
Legendary
19
+11`,
    },
    {
      name: "Chipped Gemstone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A non-magical gem, about the size of a fingernail. You can buy or sell it for this price.",
    },
    {
      name: "Degrading Diamond Dust",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This item comes in a 12 oz magic-resistant baggie, because when you take an oz and blow it onto a nonmagical, nonliving object, it will slowly dissolve over 12 hours. There are 12 oz in this bag.",
    },
    {
      name: "Emerald Entrancement (This item can be socketed into any weapon)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "When this item, or weapon if socketed, hits an unwilling creature, they will need to make a 16 WIS SAV or be under the effects of 'Charmed.'",
    },
    {
      name: "Obsidian Oath (This item can be socketed into any armor)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "When purchased you get two of these. When you make a promise with another person who has the twin Obsidian, the other one will resonate, and each item will embed itself in its respective holder. If either person breaks their end of the promise it will shatter violently, dealing 20d20 piercing damage, and the other will dissolve. However, if the promise is upheld for the duration, the obsidian will dissolve peacefully.",
    },
    {
      name: "Petrifying Pyrite Pebbles (This item can be socketed into any weapon)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "When this item, or weapon if socketed, hits, it will petrify a half-inch radius around that spot, lasting 1 minute. If an entire limb gets petrified, the rest of that creature gets petrified.",
    },
    {
      name: "Phantom Pearl Powder",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "This item comes in a 12 oz magic-resistant baggie, because when you take an oz and blow it onto a nonmagical, nonliving object it becomes intangible but it stays in location and can't be moved by nonmagical means; this effect lasts 12 hours. There are 12 oz in this bag. If the object is inside of something when the 12 hours are up it will immediately slide out to a space that will fit its dimensions, dealing no damage.",
    },
    {
      name: "Reaper Ruby (This item can be socketed into any weapon)",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "When this item, or weapon if socketed, hits a creature other than a construct, you heal half of the damage dealt.",
    },
    {
      name: "Soul Swapping Sapphire",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "While holding this item, if it touches another creature other than a construct, both holder and target creature will have to make a INT SAV of 26. On a fail, both souls will swap places; class, ability, items, etc. will not pass over unless they are tied to the souls. Souls may not be swapped with bodies that have been soul-swapped with them. This item will dissolve after 12 uses.",
    },
    {
      name: "Flawed Gemstone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A non-magical gem, about the size of a finger. You can buy or sell it for this price.",
    },
    {
      name: "Empty Memory Stone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A specially crafted gemstone that can hold memories; placing this to your head will allow you to transfer memories into or out of this item. However, once transferred into this item, that person will lose the memory forever, remaining in that stone. Proficiency and expertise, knowledge of how to cast spells, and any other learned technique may also be transferred into this item, but in return you will lose those as well.",
    },
    {
      name: "Flawless Gemstone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A non-magical gem, about the size of a baseball. You can buy or sell it for this price.",
    },
    {
      name: "Radiant Gemstone",
      rarity: "Uncommon",
      itemType: "Wondrous Item",
      attunment: false,
      price: 250,
      description: "A non-magical gem, about the size of a watermelon. You can buy or sell it for this price.",
    },
    {
      name: "Amulet of the Black Skull",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.
The amulet has 6 charges and regains 1d6 charges daily at dawn. While wearing the amulet, you can use an action to expend 1 of its charges to transport yourself and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you. This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb.
If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.
Black Skull Transformation
d100        Transformation
01-20        The symbol of Acererak is burned into your flesh, a curse that can only be removed with a Remove Curse spell or similar magic. Until the curse ends, your hit points can't be restored by magic.
21-35        You grow larger as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.
36-50        You grow smaller as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.
51-70        You arrive at the destination wearing nothing but the Amulet of the Black Skull. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you.
71-95        You are paralyzed for 1 minute or until this effect is ended with a Lesser Restoration spell or similar magic.
96-00        You become petrified. This effect can be ended only with a Greater Restoration spell or similar magic.`,
    },
    {
      name: "Amulet of the Devout",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.
While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn. (This is a +3 item)`,
    },
    {
      name: "Amulet of the Planes",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the Plane Shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence.",
    },
    {
      name: "Horned Ring",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `Source - Waterdeep: Dungeon of the Mad Mage
Ring, very rare (requires attunement)
Allows an attuned wearer to ignore Undermountain's magical restrictions (see "Alterations to Magic" in source).`,
    },
    {
      name: "Ring of Amity",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `This ring is carved from hematite and bears an engraving of the friend rune.
When you first attune to this ring, you can touch one willing creature and form a magical bond between the two of you. While this bond lasts, whenever you are subjected to a spell or magical effect that restores hit points, the bonded creature also receives the benefits of the spell or effect.
You can bond with a different creature whenever you finish a long rest, provided that you can touch the creature and the creature is willing.
A creature can benefit from only one ring of amity’s bond at a time. The bond ends if either you or the creature travels to a different plane of existence, if you bond with a different creature at the end of a long rest, or if you sever the bond as a bonus action.
Invoking the Rune.
When the bonded creature hits a target with an attack roll, you can use your reaction to invoke the ring’s rune if you are within 60 feet of the bonded creature. The bonded creature’s attack is then turned into a critical hit.
Once the rune has been invoked, it can’t be invoked again until the next dawn.`,
    },
    {
      name: "Ring of Red Fury",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `This ring has a stripe of ruidium running through it. While wearing the ring, you gain the following benefits:
You can breathe water.
You gain a swimming speed equal to your walking speed.
Ruidium Rage.
As a bonus action, you can use the ring to gain the following benefits, which last for 1 minute or until you are incapacitated:
You have advantage on Strength checks and Strength saving throws.
When you hit with an attack, you can add your proficiency bonus to the damage roll.
Difficult terrain doesn’t cost you extra movement, and you are immune to the paralyzed and restrained conditions.
You can’t use this property of the ring again until you finish a long rest.
Ruidium Corruption.
When you use the Ruidium Rage property of the ring, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of exhaustion. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save.
If Ruidium Is Destroyed.
If the Apotheon is killed or redeemed, all of the ruidium in Exandria is destroyed instantly, and the
Ring of Red Fury
becomes a
Ring of Free Action
.`,
    },
    {
      name: "Ring of Regeneration",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.",
    },
    {
      name: "Ring of Shooting Stars",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `While wearing this ring in dim light or darkness, you can cast
Dancing Lights
and
Light
from the ring at will. Casting either spell from the ring requires an action.
The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.
Faerie Fire.
You can expend 1 charge as an action to cast
Faerie Fire
from the ring.
Ball Lightning.
You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.
Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.
As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created.
Spheres
Lightning Damage
4
2d4
3
2d6
2
5d4
1
4d12
Shooting Stars.
You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.`,
    },
    {
      name: "Ring of Telekinesis",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `While wearing this ring, you can cast the
Telekinesis
spell at will, but you can target only objects that aren't being worn or carried.`,
    },
    {
      name: "Sage's Signet",
      rarity: "Very Rare",
      itemType: "Ring",
      attunment: true,
      price: 2500,
      description: `Ring, varies (requires attunement by a Spellcaster)
This gilded ring bears a beautiful engraving and is imbued with powers of keen wisdom and foresight. While wearing this ring, you can use an action to cast the
Augury
spell from the ring. Once you use the ring to cast the spell, the ring can’t cast the spell again until the next dawn.
Six varieties of Sage’s Signet rings exist, each with a different signet (see the table below). A ring’s signet determines its rarity as well as the additional spells it can cast. While wearing a Sage’s Signet, you can cast each of its additional spells once from the ring using your Intelligence as the spellcasting ability. Once you cast each of the additional spells from the ring, it can’t cast the spell again until the next dawn.
Sage’s Signet
Signet
Rarity
Spells
Bear
Very Rare
Enlarge/Reduce
,
Polymorph
Hart
Very Rare
Aura of Vitality
,
Mass Cure Wounds
Lion
Very Rare
Destructive Wave
,
Fireball
Serpent
Rare
Fear
,
Hex
Songbird
Rare
Charm Person
,
Hypnotic Pattern
Wolf
Very Rare
Freedom of Movement
,
Pass Without Trace`,
    },
    {
      name: "Sanctum Amulet",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `A black opal pendant hangs at the base of this pearlescent chain. The sacred rune is inscribed on the back of the pendant.
While wearing this item, you have resistance to necrotic damage. Additionally, you can cast the
Spare the Dying
cantrip using either an action or a bonus action.
Invoking the Rune.
When a creature you can see within 60 feet of you is reduced to 0 hit points as a result of taking damage, you can use your reaction to invoke the item’s rune, causing the pendant to flash with pale light. The creature then instead drops to 1 hit point.
Once the rune has been invoked, it can’t be invoked again until the next dawn.`,
    },
    {
      name: "Spell Gem",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `Wondrous item, rarity varies (attunement optional)
A
spell gem
can contain one spell from any class's spell list. You become aware of the spell when you learn the gems properties. While holding the gem. you can cast the spell from it as an action if you know the spell or if the spell is on your class spell list. Doing so doesn‘t require any components and doesn't require attunement. The spell then disappears from the gem.
If the spell is of a higher level than you can normally cast. you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check. the spell disappears from the gem with no other effect.
Each
spell gem
has a maximum level for the spell it can store. The spell level determines the gems rarity and the stored spell's saving throw DC and attack bonus. as shown in the Spell Gem table.
You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed. you must provide them. but they can be worth half as much as normal.
Once imbued with a spell. the gem can't be imbued again until the next dawn.
Deep gnomes created these magic gemstones and keep the creation process a secret.
Spell Gem
Max. Spell Level
Gemstone
Rarity
Save DC
Attack Bonus
Cantrip
Obsidian
Uncommon
13
+5
1st
Lapis lazuli
Uncommon
13
+5
2nd
Quartz
Rare
13
+5
3rd
Bloodstone
Rare
15
+7
4th
Amber
Very rare
15
+9
5th
Jade
Very rare
17
+9
6th
Topaz
Very rare
17
+10
7th
Star ruby
Legendary
18
+10
8th
Ruby
Legendary
18
+10
9th
Diamond
Legendary
19
+11`,
    }
  ],
};
