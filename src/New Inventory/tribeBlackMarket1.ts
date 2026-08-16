import { Tribe } from "./types";
import { blackMarketInsults } from "./tribeInsults";

export const tribeBlackMarket: Tribe = {
  name: "One of the white shops",
  percentAngry: 30,
  priceVariability: 30,
  insults: blackMarketInsults,
  items: [
    {
      name: "Crusader's Shortsword",
      rarity: "????",
      itemType: "Weapon",
      attunment: true,
      price: 50000,
      description: `This sword is a sentient lawful good +1 shortsword (Intelligence 11, Wisdom 13, Charisma 13). It has hearing and normal vision out to a range of 120 feet. It communicates by transmitting emotion to the creature carrying or wielding it.
The sword’s purpose is to fight evil. The sword has the following additional properties:
The sword continually sheds bright light in a 15-foot radius and dim light for an additional 15 feet. Only by destroying the sword can this light be extinguished.
A lawful good creature can attune itself to the sword in 1 minute.
While attuned to the weapon, the sword’s wielder can use the sword to cast the Crusader's Mantle spell. Once used, this property of the sword can’t be used again until the next dawn.`,
    },
    {
      name: "Orcus Figurine",
      rarity: "????",
      itemType: "Wondrous Item",
      attunment: false,
      price: 50000,
      description: `Carved from an ogre's petrified heart, the gray figurine depicts the Demon Prince of Undeath in ghastly detail, clutching his skull-topped wand in one hand and three severed heads by the hair in the other. The figurine smells like decaying flesh, and this scent is detectable out to a range of 5 feet.
The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all types of damage except radiant damage. A Detect Evil and Good spell or similar magic reveals that the figurine has been desecrated. As long as it has at least 1 hit point, the figurine has the following magical properties:
- Undead within 30 feet of the figurine can't be turned.
-Dead creatures within 30 feet of the figurine can't be brought back to life.
- A creature that holds the figurine while praying to Orcus for at least 1 hour has a 10 percent chance of summoning a smokey avatar of the demon lord. Once this avatar is summoned, it can't be summoned again for 30 days. Orcus's avatar has the statistics of a wraith except that it's chaotic evil. It attacks all non-undead creatures it encounters, and it disappears after 1 hour or when reduced to 0 hit points.`,
    },
    {
      name: "Radiance",
      rarity: "????",
      itemType: "Wand",
      attunment: true,
      price: 50000,
      description: `While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack. Radiance is in the form of an exquisite golden hand mirror.
While surrounded by darkness, it sheds dim light in a 5-foot radius. A creature that is attuned to Radiance can use a bonus action while holding the mirror to cast the Enhance Ability spell, choosing itself and no other creature as the spell's target. Once this property of the wand is used, it can't be used again until the next dawn.`,
    },
    {
      name: "Shield of the Silver Dragon",
      rarity: "????",
      itemType: "Armor",
      attunment: false,
      price: 50000,
      description: `This shield is a +2 shield emblazoned with a stylized silver dragon that is the emblem of the Order of the Silver Dragon. The shield whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn’t incapacitated.
A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.`,
    },
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
      name: "Tearulai",
      rarity: "????",
      itemType: "Weapon",
      attunment: true,
      price: 50000,
      description: `The longsword, Tearulai, is a sentient, neutral good Sword of Sharpness with an emerald-colored blade and precious gemstones embedded in its hilt and pommel. The sword's magical properties are suppressed until it is removed from Valdemar's skull.
When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.
When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20 you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.
In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.
Evil creatures can't attuned to Tearlurai; any evil creature that tries to do so takes 20 psychic damage. The weapon's emerald blade can't be damaged or dulled and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.
Spells. The sword has 6 charges and regains 1d4 + 2 expended charges daily at dawn. A creature attuned to the sword can use an action to expend 1 or more charges to cast one or more of the following spells from it without material components: Fly (2 charges), Polymorph (3 charges), or Transport via Plants (4 charges)
Sentience. The sword has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and truesight out to a range of 120 feet. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 feet of it.
Personality. Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielders goals run counter to its own, Tearulau attempts to take control of its wielder and escape Undermountain, whereupon it can use its Transport via Plants spell to return whence it came.`,
    },
    {
      name: "Yester Hill Axe",
      rarity: "????",
      itemType: "Weapon",
      attunment: false,
      price: 50000,
      description: "Its handle is carved with leaves and vines, and the weapon weighs half as much as a normal battleaxe. When the axe hits a plant, whether an ordinary plant or a plant creature, the target takes an extra 1d8 slashing damage. When a creature of non-good alignment wields the axe, it sprouts thorns whenever its wielder makes an attack with it. These thorns prick the wielder for 1 piercing damage after the attack is made, and this damage is considered magical.",
    },
    {
      name: "Adze of Annam",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `This massive adze is said to have been wielded by All-Father Annam, not as a weapon but as the tool he used to shape the various worlds of the Material Plane eons ago.
Random Properties.
The adze has the following random properties, determined by rolling on the appropriate table in the
Dungeon Master’s Guide
:
2 minor beneficial properties
1 major beneficial property
2 minor detrimental properties
Magic Weapon.
When a creature attunes to the adze, the artifact magically adjusts its size so that creature can wield it as a greataxe. The adze is a magic weapon that grants a +3 bonus to attack and damage rolls made with it. On a hit, the adze deals an additional 3d12 force damage. It also deals double damage to objects and structures.
Divine Mattock.
As an action, you can call upon the might of the All-Father and use the adze to cast
Move Earth
or
Fabricate
. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Akmon, Hammer of Purphoros",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Purphoros's hammer works wonders and disasters, the god of the forge using it to craft ground-breaking marvels and dangerous inventions in equal measure. Purphoros rarely bestows
Akmon
on mortals but occasionally leaves it unattended at his forge in Mount Velus. When Purphoros does permit a mortal to use the hammer, it's usually so they might bring an important work into being, wreck a force of destruction, or forge something remarkable somewhere the god isn't welcome.
Hammer of the Forge.
This magic warhammer grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using it, the target takes an extra 3d10 fire damage.
Blessing of the Forge.
If you are a worshiper of Purphoros, you gain all the following benefits for which you have the required piety:
Piety 10+.
The hammer has 1 randomly determined minor beneficial property.
Piety 25+.
The hammer has 1 randomly determined major beneficial property.
Piety 50+.
The hammer has 1 additional randomly determined major beneficial property.
If you aren't a worshiper of Purphoros, the hammer has 2 randomly determined minor detrimental properties.
See "Artifacts" in chapter 7 of the
Dungeon Master's Guide
for details on randomly determined properties.
Reforged.
While holding the hammer, you have resistance to fire damage and are immune to exhaustion. Additionally, you have proficiency with smith's tools and have advantage on all ability checks made using them.
Spells.
While the hammer is on your person, you can use an action to cast one of the following spells (save DC 18):
Animate Objects
,
Heat Metal
,
Fabricate
,
Magic Weapon
,
Mending
,
Shatter
. Once you use the hammer to cast a spell, the spell can't be cast again from it until the next dusk.
Destroying the Hammer.
To destroy the hammer, it must be taken to the realm of Tizerus, in the Underworld. There it must be coated in clay from the Mire of Punishment. The heat of the hammer hardens the clay, which fuses to it after one month. Once fully hardened, the clay-covered hammer must be swallowed and digested by a kraken.`,
    },
    {
      name: "Axe of the Dwarvish Lords",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Seeing the peril his people faced, a young dwarf prince came to believe that his people needed something to unite them. Thus, he set out to forge a weapon that would be such a symbol.
Venturing deep under the mountains, deeper than any dwarf had ever delved, the young prince came to the blazing heart of a great volcano. With the aid of Moradin, the dwarven god of creation, he first crafted four great tools: the
Brutal Pick
, the
Earthheart Forge
, the
Anvil of Songs
, and the
Shaping Hammer
. With them, he forged the
Axe of the Dwarvish Lords
.
Armed with the artifact, the prince returned to the dwarf clans and brought peace. His axe ended grudges and answered slights. The clans became allies, and they threw back their enemies and enjoyed an era of prosperity. This young dwarf is remembered as the First King. When he became old, he passed the weapon, which had become his badge of office, to his heir. The rightful inheritors passed the axe on for many generations.
Later, in a dark era marked by treachery and wickedness, the axe was lost in a bloody civil war fomented by greed for its power and the status it bestowed. Centuries later, the dwarves still search for the axe, and many adventurers have made careers of chasing after rumors and plundering old vaults to find it.
Magic Weapon.
The
Axe of the Dwarvish Lords
is a magic weapon that grants a +3 bonus to attack and damage rolls made with it. The axe also functions as a
Belt of Dwarvenkind
, a
Dwarven Thrower
, and a
Sword of Sharpness
.
Random Properties.
The axe has the following randomly determined properties:
2 minor beneficial properties
1 major beneficial property
2 minor detrimental properties
Blessings of Moradin.
If you are a dwarf attuned to the axe, you gain the following benefits:
You have immunity to poison damage.
The range of your darkvision increases by 60 feet.
You gain proficiency with artisan's tools related to blacksmithing, brewing, and stonemasonry.
Conjure Earth Elemental.
If you are holding the axe, you can use your action to cast the
Conjure Elemental
spell from it, summoning an earth elemental. You can't use this property again until the next dawn.
Travel the Depths.
You can use an action to touch the axe to a fixed piece of dwarven stonework and cast the teleport spell from the axe. If your intended destination is underground, there is no chance of a mishap or arriving somewhere unexpected. You can't use this property again until 3 days have passed.
Curse.
The axe bears a curse that affects any nondwarf that becomes attuned to it. Even if the attunement ends, the curse remains. With each passing day, the creature's physical appearance and stature become more dwarflike. After seven days, the creature looks like a typical dwarf, but the creature neither loses its racial traits nor gains the racial traits of a dwarf. The physical changes wrought by the axe aren't considered magical in nature (and therefore can't be dispelled), but they can be undone by any effect that removes a curse, such as a
Greater Restoration
or
Remove Curse
spell.
Destroying the Axe.
The only way to destroy the axe is to melt it down in the
Earthheart Forge
, where it was created. It must remain in the burning forge for fifty years before it finally succumbs to the fire and is consumed.`,
    },
    {
      name: "Baba Yaga's Mortar and Pestle",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The creations of the immortal hag Baba Yaga defy the laws of mortal magic. Among the notorious implements that cement her legend on countless worlds are the artifacts that propel her through the planes:
Baba Yaga's Mortar and Pestle
. These signature tools of Baba Yaga are a single artifact for purposes of attunement. Should the two objects become separated, the pestle appears next to the mortar at the next dawn.
Random Properties.
This artifact has the following random properties, which you can determine by rolling on the tables in the "Artifacts" section of the
Dungeon Master's Guide
:
2 minor beneficial properties
1 major beneficial property
1 minor detrimental property
Properties of the Mortar.
The mortar is a Tiny wooden bowl. However, the mortar increases in size to accommodate anything you place inside, expanding — if there's enough space — up to Large size, meaning it can hold even a Large creature.
Properties of the Pestle.
The pestle is a 6-inchlong, worn wooden tool. Once during your turn while you are holding the pestle, you can extend it into a quarterstaff or shrink it back into a pestle (no action required). As a quarterstaff, the pestle is a magic weapon that grants a +3 bonus to attack and damage rolls made with it.
The pestle has 12 charges. When you hit with a melee attack using the pestle, you can expend up to 3 of its charges to deal an extra 1d8 force damage for each charge expended. The pestle regains all expended charges daily at dawn.
Perfect Tools.
While holding the mortar and pestle, you can use your action to say the name of any nonmagical plant, mineral, or fluid and an amount of the material worth 10 gp or less. The mortar instantly fills with the desired amount of that material. Once you use this action, you can't do so again until you finish a short or long rest.
You can also use the artifact as alchemist's supplies, brewer's supplies, cook's utensils, an herbalism kit, and a poisoner's it. You have advantage on any check you make using the artifact as one of these tools.
Primal Parts.
As an action while the pestle and the mortar is within 5 feet of you, you can command the pestle to grind. For the next minute, or until you use your action to verbally command it to stop, the pestle moves on its own, grinding the contents of the mortar into a mush or fine powder that's equally useful for cooking or alchemy. At the start of each of your turns, whatever is in the mortar takes 4dl0 force damage. If this reduces the target's hit points to 0, the target is reduced to powder, pulp, or paste, as appropriate. Only magic items are unaffected. If you wish, when the pestle stops, you can have the mortar separate its contents — like powdered bone, crushed herbs, pulped organs — into separate piles.
Traverse the Night.
If you are holding the pestle while you are inside the mortar, you can use your action to verbally command the mortar to travel to a specific place or creature. You don't need to know where your destination is, but it must be a specific destination — not just the nearest river or a red dragon's lair. If the stated destination is within 1,000 miles of you, the mortar lifts into the air and vanishes. You and any creatures in the mortar travel through a dreamlike sky, with hazy reflections of the world passing by below. Creatures might see images of you streaking through the sky between your point of origin and the destination. You arrive at the location 1 hour later or, if it is night, 1 minute later.
Bones Know Their Home.
When you command the mortar to travel, you can instead throw out the dust or paste of something ground by the mortar and name a location on a different plane of existence or a different world on the Material Plane. If that material came from a creature native to the named plane or world, the mortar travels through an empty night sky to an unoccupied space at that destination, arriving in 1 minute.
Destroying the Mortar and Pestle.
The mortar and pestle are destroyed if they are crushed underfoot by the
Dancing Hut of Baba Yaga
or by Baba Yaga herself.`,
    },
    {
      name: "Bigby's Beneficent Bracelet",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `This gorgeous jewelry piece, crafted by the wizard Bigby himself, consists of four gold rings attached via delicate chains to a wrist cuff studded with sapphires and diamonds.
Random Properties.
The bracelet has the following random properties, determined by rolling on the appropriate table in the
Dungeon Master’s Guide
:
1 minor beneficial property
1 major beneficial property
1 minor detrimental property
Dexterous Fingers.
While wearing the bracelet, you can cast
Mage Hand
.
Force Sculpture.
By focusing and channeling the bracelet’s magic for 1 minute, you can create a spectral copy of a Large or smaller nonmagical object. The copy appears in an unoccupied space within 10 feet of you, and it is made of tangible but translucent force that mimics the size, weight, and other properties of the object it’s copying. The copy must appear on a surface or liquid that can support it. Creatures can touch and interact with the copy as if it were a nonmagical object.
The copy is immune to all damage and can’t be dispelled, but a
Disintegrate
spell destroys it immediately. Otherwise, the copy disappears after 8 hours or when you dismiss it as an action.
The bracelet can create up to three copies and regains all expended uses at dawn.
Helpful Hand.
As an action, you can use the bracelet to cast
Bigby's Hand
as a 9th-level spell (spell attack bonus +13). When you cast the spell this way, the spell doesn’t require concentration. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Blade of Avernus",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Magic Weapon.
The Blade of Avernus is a magic weapon that functions as a vorpal sword.
Random Properties.
The sword has the following randomly determined properties, as described in chapter 7 of the Dungeon Master’s Guide:
2 minor beneficial properties
1 major beneficial property
1 major detrimental property, which is suppressed while the sword is attuned to an archdevil
Ruler of Avernus.
As an action, you can point this sword at one devil you can see within 60 feet of you. That devil must succeed on a DC 22 Charisma saving throw or be charmed by you for 1 hour. While charmed in this way, the devil follows your orders to the best of its ability. If you command the devil to do something it perceives as suicidal, the effect ends and you can no longer use this power of the sword against that devil.
Infernal Recall.
As an action, you can use the sword to cast
Word of Recall
. Creatures transported by this spell appear in an unoccupied space within 30 feet of the current ruler of Avernus, or a sanctuary you designate if you rule Avernus.
Destroying the Sword.
The sword can be destroyed by casting it into the River Styx or melting it down in the forge that created it.`,
    },
    {
      name: "Blade of Broken Mirrors",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `A weapon of Tharizdun, this dagger is a piece of jagged stone whose blade is scribed with a maze-like pattern with no beginning or end.
Sentience.
The
Blade of Broken Mirrors
is a sentient chaotic evil weapon with an Intelligence of 21, a Wisdom of 24, and a Charisma of 24. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Abyssal and Common.
Personality.
An insane glabrezu named Ragazuu lives within the
Blade of Broken Mirrors
. The weapon yearns to cause chaos. It learns its wielder's principles, then uses those ideals to encourage reckless action. The dagger whispers ideas of revolution.
Dormant.
The dagger grants the following benefits in its dormant state:
You can speak, read, and write Abyssal.
You gain a +1 bonus to attack and damage rolls made with this magic weapon. Immediately after you make a ranged attack with this weapon, it returns to your hand.
Whenever you kill a humanoid with an attack using the
Blade of Broken Mirrors
, the blade remembers the creature's appearance. While holding the dagger, you can use an action to change your form to match any humanoid the blade remembers. Your statistics, other than your size, don't change. Any equipment you are wearing or carrying isn't transformed. You can revert to your true appearance as an action. You revert to your true appearance automatically when you die.
When the
Blade of Broken Mirrors
attunes to a new wielder, the appearances of humanoids it has killed are wiped from its memory.
Awakened.
When the dagger reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
While holding the weapon, you can use an action to cast one of the following spells from it (save DC 15):
Fabricate
,
Hallucinatory Terrain
,
Major Image
, or
Phantasmal Killer
. Once a spell has been cast using the dagger, that spell can't be cast from the dagger again until the next dawn.
Exalted.
When the dagger reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
The saving throw DC for spells cast from the dagger increases to 17.
While holding the dagger, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until you stop holding the dagger, until you attack or cast a spell that forces a creature to make a saving throw, or until you use a bonus action to become visible again.`,
    },
    {
      name: "Book of Exalted Deeds",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The definitive treatise on all that is good in the multiverse, the fabled
Book of Exalted Deeds
figures prominently in many religions. Rather than being a scripture devoted to a particular faith, the book's various authors filled the pages with their own vision of true virtue, providing guidance for defeating evil.
The
Book of Exalted Deeds
rarely lingers in one place. As soon as the book is read, it vanishes to some other corner of the multiverse where its moral guidance can bring light to a darkened world. Although attempts have been made to copy the work, efforts to do so fail to capture its magical nature or translate the benefits it offers to those pure of heart and firm of purpose.
A heavy clasp, wrought to look like angel wings, keeps the book's contents secure. Only a creature of good alignment that is attuned to the book can release the clasp that holds it shut. Once the book is opened, the attuned creature must spend 80 hours reading and studying the book to digest its contents and gain its benefits. Other creatures that peruse the book's open pages can read the text but glean no deeper meaning and reap no benefits. An evil creature that tries to read from the book takes 24d6 radiant damage. This damage ignores resistance and immunity, and can't be reduced or avoided by any means. A creature reduced to 0 hit points by this damage disappears in a blinding flash and is destroyed, leaving its possessions behind.
Benefits granted by the
Book of Exalted Deeds
last only as long as you strive to do good. If you fail to perform at least one act of kindness or generosity within the span of 10 days, or if you willingly perform an evil act, you lose all the benefits granted by the book.
Random Properties.
The
Book of Exalted Deeds
has the following random properties:
2 minor beneficial properties
2 major beneficial properties
Increased Wisdom.
After you spend the requisite amount of time reading and studying the book, your Wisdom score increases by 2, to a maximum of 24. You can't gain this benefit from the book more than once.
Enlightened Magic.
Once you've read and studied the book, any spell slot you expend to cast a cleric or paladin spell counts as a spell slot of one level higher.
Halo.
Once you've read and studied the book, you gain a protective halo. This halo sheds bright light in a 10-foot radius and dim light for an additional 10 feet. You can dismiss or manifest the halo as a bonus action. While present, the halo gives you advantage on Charisma (Persuasion) checks made to interact with good creatures and Charisma (Intimidation) checks made to interact with evil creatures. In addition, fiends and undead within the halo's bright light make attack rolls against you with disadvantage.
Destroying the Book.
It is rumored that the
Book of Exalted Deeds
can't be destroyed as long as good exists in the multiverse. However, drowning the book in the River Styx removes all writing and imagery from its pages and renders the book powerless for 1d100 years.`,
    },
    {
      name: "Book of Vile Darkness",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The contents of this foul manuscript of ineffable wickedness are the meat and drink of those in evil's thrall. No mortal was meant to know the secrets it contains, knowledge so horrid that to even glimpse the scrawled pages invites madness.
Most believe the lich-god Vecna authored the
Book of Vile Darkness
. He recorded in its pages every diseased idea, every unhinged thought, and every example of blackest magic he came across or devised. Vecna covered every vile topic he could, making the book a gruesome catalog of all mortal wrongs.
Other practitioners of evil have held the book and added their own input to its catalog of vile knowledge. Their additions are clear, for the writers of later works stitched whatever they were writing into the tome or, in some cases, made notations and additions to existing text. There are places where pages are missing, torn. or covered so completely with ink, blood, and scratches that the original text can't be divined.
Nature can't abide the book's presence. Ordinary plants wither in its presence, animals are unwilling to approach it, and the book gradually destroys whatever it touches. Even stone cracks and turns to powder if the book rests on it long enough.
A creature attuned to the book must spend 80 hours reading and studying it to digest its contents and reap its benefits. The creature can then freely modify the book's contents, provided that those modifications advance evil and expand the lore already contained within.
Whenever a non-evil creature attunes to the
Book of Vile Darkness
, that creature must make a DC 17 Charisma saving throw. On a failed save, the creature's alignment changes to neutral evil.
The
Book of Vile Darkness
remains with you only as long as you strive to work evil in the world. If you fail to perform at least one evil act within the span of 10 days, or if you willingly perform a good act, the book disappears. If you die while attuned to the book, an entity of great evil claims your soul. You can't be restored to life by any means while your soul remains imprisoned.
Random Properties.
The
Book of Vile Darkness
has the following random properties:
3 minor beneficial properties
1 major beneficial property
3 minor detrimental properties
2 major detrimental properties
Adjusted Ability Scores.
After you spend the requisite amount of time reading and studying the book, one ability score of your choice increases by 2, to a maximum of 24. Another ability score of your choice decreases by 2, to a minimum of 3. The book can't adjust your ability scores again.
Mark of Darkness.
After you spend the requisite amount of time reading and studying the book, you acquire a physical disfigurement as a hideous sign of your devotion to vile darkness. An evil rune might appear on your face, your eyes might become glossy black, or horns might sprout from your forehead. Or you might become wizened and hideous, lose all facial features, gain a forked tongue, or some other feature the DM chooses. The mark of darkness grants you advantage on Charisma (Persuasion) checks made to interact with evil creatures and Charisma (Intimidation) checks made to interact with non-evil creatures.
Command Evil.
While you are attuned to the book and holding it, you can use an action to cast the
Dominate Monster
spell on an evil target (save DC 18). You can't use this property again until the next dawn.
Dark Lore.
You can reference the
Book of Vile Darkness
whenever you make an Intelligence check to recall information about some aspect of evil, such as lore about demons. When you do so, double your proficiency bonus on that check.
Dark Speech.
While you carry the
Book of Vile Darkness
and are attuned to it, you can use an action to recite word from its pages in a foul language known as Dark Speech. Each time you do so, you take 1d12 psychic damage, and each non-evil creature within 15 feet of you takes 3d6 psychic damage.
Destroying the Book.
The
Book of Vile Darkness
allows pages to be torn from it, but any evil lore contained on those pages finds its way back into the book eventually, usually when a new author adds pages to the tome.
If a solar tears the book in two, the book is destroyed for 1d100 years, after which it reforms in some dark corner of the multiverse.
A creature attuned to the book for one hundred years can unearth a phrase hidden in the original text that, when translated to Celestial and spoken aloud, destroys both the speaker and the book in a blinding flash of radiance. However, as long as evil exists in the multiverse, the book reforms 1d10 x 100 years later.
If all evil in the multiverse is wiped out, the book turns to dust and is forever destroyed.`,
    },
    {
      name: "Book of Vile Darkness (Variant)",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The contents of this foul manuscript of ineffable wickedness are the meat and drink of those in evil's thrall. No mortal was meant to know the secrets it contains, knowledge so horrid that to even glimpse the scrawled pages invites madness.
Most believe the lich-god Vecna authored the
Book of Vile Darkness
. He recorded in its pages every diseased idea, every unhinged thought, and every example of blackest magic he came across or devised. Vecna covered every vile topic he could, making the book a gruesome catalog of all mortal wrongs.
Other practitioners of evil have held the book and added their own input to its catalog of vile knowledge. Their additions are clear, for the writers of later works stitched whatever they were writing into the tome or, in some cases, made notations and additions to existing text. There are places where pages are missing, torn. or covered so completely with ink, blood, and scratches that the original text can't be divined.
Nature can't abide the book's presence. Ordinary plants wither in its presence, animals are unwilling to approach it, and the book gradually destroys whatever it touches. Even stone cracks and turns to powder if the book rests on it long enough.
A creature attuned to the book must spend 80 hours reading and studying it to digest its contents and reap its benefits. The creature can then freely modify the book's contents, provided that those modifications advance evil and expand the lore already contained within.
Whenever a non-evil creature attunes to the
Book of Vile Darkness
, that creature must make a DC 17 Charisma saving throw. On a failed save, the creature's alignment changes to neutral evil.
The
Book of Vile Darkness
remains with you only as long as you strive to work evil in the world. If you fail to perform at least one evil act within the span of 10 days, or if you willingly perform a good act, the book disappears. If you die while attuned to the book, an entity of great evil claims your soul. You can't be restored to life by any means while your soul remains imprisoned.
Circle of Death.
While attuned to the book, you can cast
Circle of Death
(save DC 20) from it as an action. After you cast the spell, roll a d6. On a roll of 1-5, you can't use this property again until the next dawn.
Condition Immunities.
While attuned to the book, you can't be charmed or frightened.
Evil Presence.
The book houses an evil spirit that is hostile toward you. When you become attuned to the book, the spirit tries to leave the book and enter your body. If you fail a DC 20 Charisma saving throw, it succeeds, and you become an NPC under the DM's control until the intruding spirit is banished using magic such as the
Dispel Evil and Good
spell. The banished spirit returns to the book.
Adjusted Ability Scores.
After you spend the requisite amount of time reading and studying the book, one ability score of your choice increases by 2, to a maximum of 24. Another ability score of your choice decreases by 2, to a minimum of 3. The book can't adjust your ability scores again.
Mark of Darkness.
After you spend the requisite amount of time reading and studying the book, you acquire a physical disfigurement as a hideous sign of your devotion to vile darkness. An evil rune might appear on your face, your eyes might become glossy black, or horns might sprout from your forehead. Or you might become wizened and hideous, lose all facial features, gain a forked tongue, or some other feature the DM chooses. The mark of darkness grants you advantage on Charisma (Persuasion) checks made to interact with evil creatures and Charisma (Intimidation) checks made to interact with non-evil creatures.
Command Evil.
While you are attuned to the book and holding it, you can use an action to cast the
Dominate Monster
spell on an evil target (save DC 18). You can't use this property again until the next dawn.
Dark Lore.
You can reference the
Book of Vile Darkness
whenever you make an Intelligence check to recall information about some aspect of evil, such as lore about demons. When you do so, double your proficiency bonus on that check.
Dark Speech.
While you carry the
Book of Vile Darkness
and are attuned to it, you can use an action to recite word from its pages in a foul language known as Dark Speech. Each time you do so, you take 1d12 psychic damage, and each non-evil creature within 15 feet of you takes 3d6 psychic damage.
Destroying the Book.
The
Book of Vile Darkness
allows pages to be torn from it, but any evil lore contained on those pages finds its way back into the book eventually, usually when a new author adds pages to the tome.
If a solar tears the book in two, the book is destroyed for 1d100 years, after which it reforms in some dark corner of the multiverse.
A creature attuned to the book for one hundred years can unearth a phrase hidden in the original text that, when translated to Celestial and spoken aloud, destroys both the speaker and the book in a blinding flash of radiance. However, as long as evil exists in the multiverse, the book reforms 1d10 x 100 years later.
If all evil in the multiverse is wiped out, the book turns to dust and is forever destroyed.`,
    },
    {
      name: "Crook of Rao",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Ages ago, the serene god Rao created a tool to shield his fledgling faithful against the evils of the Lower Planes. Yet, as eons passed, mortals developed their own methods of dealing with existential threats, and the crook was largely forgotten. In recent ages, though, the
Crook of Rao
was rediscovered and leveraged against the rising power of the Witch Queen Iggwilv (one of the names of the wizard Tasha). Although she was defeated, Iggwilv managed to damage the crook during the battle, infecting it with an insidious curse — and the potential for future victory. In the aftermath, the crook was again lost. Occasionally it reappears, but the famed artifact is not what it was. Whether or not the artifact's bearers realize its full threat, few risk using the
Crook of Rao
— potentially for the final time.
Random Properties.
The artifact has the following random properties, which you can determine by rolling on the tables in the "Artifacts" section of the
Dungeon Master's Guide
:
2 minor beneficial properties
1 major beneficial property
1 minor detrimental property
Spells.
The crook has 6 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 18) from it:
Aura of Life
(2 charges),
Aura of Purity
(2 charges),
Banishment
(1 charge),
Beacon of Hope
(1 charge),
Mass Cure Wounds
(3 charges). The crook regains 1d6 expended charges daily at dawn.
Absolute Banishment.
While you are attuned to the crook and holding it, you can spend 10 minutes to banish all but the mightiest fiends within 1 mile of you. Any fiend with a challenge rating of 19 or higher is unaffected. Each banished fiend is sent back to its home plane and can't return to the plane the
Crook of Rao
banished it from for 100 years.
Failing Matrix.
Whenever the Crook of Rao's Absolute Banishment property is used, or when its last charge is expended, roll on the Extraplanar Reversal table. Any creatures conjured as a result of this effect appear in random unoccupied spaces within 60 feet of you and are not under your control.
Extraplanar Reversal
d100
Effect
01-25
A portal to a random plane opens. The portal closes after 5 minutes.
26-45
2d4
imps
and 2d4
quasits
appear.
46-60
1d8
succubi/incubi
appear.
61-70
1d10
barbed devils
and 1d10
vrocks
appear.
71-80
1
arcanoloth
, 1
night hag
, and 1
rakshasa
appear.
81-85
1
ice devil
and 1
marilith
appear.
86-90
1
balor
and 1
pit fiend
appear. At the DM's discretion, a portal opens into the presence of an archdevil or demon lord instead, then closes after 5 minutes.
91-00
Iggwilv's Curse (see the Iggwilv's Curse property).
Iggwilv's Curse.
When the Crook was last used against Iggwilv, the Witch Queen lashed out at the artifact, infecting its magical matrix. Over the years, this curse has spread within the crook, threatening to violently pervert its ancient magic. If this occurs, the
Crook of Rao
, as it is currently known, is destroyed, its magical matrix inverting and exploding into a 50-foot-diameter portal. This portal functions as a permanent gate spell cast by Iggwilv. The gate then, once per round on initiative count 20, audibly speaks a fiend's name in lggwilv's voice, doing so until the gate calls on every fiend ever banished by the
Crook of Rao
. If the fiend still exists, it is drawn through the gate. This process takes eighteen years to complete, at the end of which the gate becomes a permanent portal to Pazunia, the first layer of the Abyss.
Destroying or Repairing the Crook.
The
Crook of Rao
can either be destroyed or repaired by journeying to Mount Celestia and obtaining a tear from the eternally serene god Rao. One way to make the emotionless god cry would be to reunite Rao with the spirit of his first worshiper who sought revelations beyond the multiverse long ago. The Crook dissolves if immersed in the god's tear for a year and a day. If washed in the tear daily for 30 days, the Crook loses its Failing Matrix property.`,
    },
    {
      name: "Crown of Lies",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `After betraying and nearly destroying the lich Vecna, the warrior Kas found himself trapped in the Shadowfell, imprisoned in a Domain of Dread called Tovag. There, he languished as a vampire.
In time, the Dark Powers of the Shadowfell lured Kas to a hidden forge, where he found the Crown of Lies. Once Kas vowed to deliver Vecna into the Dark Powers’ clutches and donned the crown, the Dark Powers released Kas. From there, Kas set out to ruin his former master. Should Kas fail, the Dark Powers will reclaim him.
The crown is made of burnished and entwined metal rods. To attune to it, you must place it on your head and speak a true desire of your heart. You know how to attune to the crown when you touch it.
Random Properties.
The Crown of Lies has the following random properties (see the Dungeon Master’s Guide for options)
1 minor beneficial property
1 major beneficial property
1 minor detrimental property
Perfect Disguise
. While attuned to the crown, you can use an action to transform yourself to look and feel like any creature you’ve seen at least once and whose size is no more than one size smaller or larger than yours.
The new form mimics the chosen creature’s appearance exactly, including its voice. Your size and speed are replaced by the chosen creature’s. You otherwise retain your own game statistics. While in this new form, the crown melds into your person and is undetectable.
Your new form lasts until you die, your attunement to the crown ends, or you use another action to transform into a different creature or your true form. Interactions with you while you are transformed by the crown reveal no illusory magic, nor do they reveal anything other than details about the creature you’re disguised as. You count as the chosen creature for the purposes of spells, traps, and other defenses that wouldn’t target the chosen creature.
While in your disguised form, any lies you tell always seem to be true, no matter what magical or mundane methods are used to try to detect your falsehoods. You are the recipient of
Sending
spells addressed to you and the creature you are disguised as, and Scrying and similar spells that target the creature you are disguised as actually target you. The only way to reveal your true nature while transformed by the crown is with a
Wish
spell.
While wearing this crown in your true form, you can choose for the crown to be visible if you wish.
Destroying the Crown.
If a creature wearing the crown is killed by the creature it is disguised as, the crown disintegrates and is destroyed.`,
    },
    {
      name: "Daoud's Wondrous Lantern",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The lantern is a symbol of the teachings of Daoud, who was once a priest of Istus, a god of fate. When Daoud was stripped of his possessions, he developed a radical new philosophy in his quest to understand fate. He urged followers of his ideology to eschew wealth and seek out all fortunes, good and ill, to unravel the cloth of destiny.
Random Properties.
The lantern has the following random properties:
2 minor beneficial properties
1 major beneficial property
1 minor detrimental property
Precious Fuel.
The lantern burns only one source of fuel: powdered gemstones placed in the lantern's base. The lantern can hold a maximum of 10,000 gp worth of powdered gems, and it contains 9,000 gp of fuel when found. Thereafter it attempts to burn 100 gp of fuel after each year passes, keeping the lantern burning for another year. If no fuel is available, the lantern's flame goes out. You can add more fuel to the lantern as part of a short or long rest. Once added, fuel can't be removed from the lantern's base.
The lantern's flame can't be extinguished by any means other than running out of fuel. If the lantern's flame goes out, the creature attuned to it immediately dies. One exception to this rule exists (see the "Destroying the Lantern" section).
Revealing Light.
The lantern sheds bright light in a 60-foot radius and dim light for an additional 60 feet. Invisible creatures and objects are visible while in the lantern's bright light.
While attuned to the lantern, you can use a bonus action to dim the lantern, reducing the light to dim light in a 5-foot radius, or brighten the lantern back to its normal bright light radius.
Lenses.
When found, the lantern's faces display the following gem lenses: diamond, emerald, ruby, and sapphire. As part of a short or long rest, you can magically change any of these gem lenses to a different type of gem shown in the Lenses table. The gem lenses can't be removed from the lantern.
As an action while holding the lantern, you can burn some of the lantern's fuel to cast a spell (save DC 20) through one or more of its current gem lenses, as noted in the Lenses table. The spell's target or point of origin must be in the lantern's area of bright light. If there isn't enough fuel left to cast the spell, the last of the remaining fuel is expended, and the flame goes out.
Lenses
Lens Color
Spell
Fuel Cost
Amethyst
Reverse Gravity
3000gp
Diamond
Disintegrate
2000gp
Emerald
Haste
500gp
Jacinth
Flame Strike
1000gp
Ruby
Hold Monster
1000gp
Sapphire
Fear
500gp
Topaz
Slow
500gp
Any four colors
Prismatic Wall
5000gp
Destroying the Lantern.
To destroy the lantern, the creature attuned to it must forsake all material possessions except for the lantern and common clothes. Then the creature must willingly snuff the lantern's flame with the intention to destroy the artifact. When its flame is snuffed in this way, the lantern's gold corrodes, the lenses and remaining gemstone fuel turn to worthless sand, and the creature attuned to it is spared.`,
    },
    {
      name: "Dekella, Bident of Thassa",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Thassa wields
Dekella
, a two-pronged weapon gifted to her by Purphoros. When the god of the sea bestows her weapon on a mortal, it's often so they might work her will far from the ocean, right some wrong affecting those she'd prefer not to harm, or give a mortal a glimpse of her terrible responsibilities.
Bident of the Deep.
Thassa's signature weapon thrums with the icy currents of the deep ocean. This weapon functions as a trident that grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using the bident, the target takes an extra 2d10 cold damage.
Blessing of the Deep.
If you are a worshiper of Thassa, you gain all the following benefits for which you have the required piety:
Piety 10+.
You can breathe underwater, and you gain a swimming speed of 60 feet.
Piety 25+.
The bident has 1 randomly determined minor beneficial property.
Piety 50+.
The bident has 1 randomly determined major beneficial property.
If you aren't a worshiper of Thassa, the bident has 1 minor detrimental property and 1 major detrimental property, both randomly determined.
See "Artifacts" in chapter 7 of the
Dungeon Master's Guide
for details on randomly determined properties.
Command the Deep.
The bident holds the power to command the waves and its creatures. As an action, you can change the condition of the sea within 1 mile of you, creating strong winds and heavy rain that cause violent waves (see "Weather at Sea" in chapter 5 of the
Dungeon Master's Guide
) or calming a storm. In either case, the unnatural weather lasts for 1 hour before returning to normal. Once used, this property of the bident can't be used again until the next dusk.
Additionally, you can cast the
Dominate Monster
spell (save DC 18) from the bident, but only on beasts and monstrosities that have an innate swimming speed. Once used, this property of the bident can't be used again until the next dusk.
Aquatic Metamorphosis.
You can cast the
True Polymorph
spell (save DC 18) from the bident, but you must cast it on a creature to turn it into a kind of creature that has an innate swimming speed. Once used, this property of the bident can't be used again until the next dusk.
Destroying the Bident.
To destroy the bident, it must be heated by the breath of an ancient red dragon and then, while still hot, immersed in the Tartyx River.`,
    },
    {
      name: "Demonomicon of Iggwilv",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `An expansive treatise documenting the Abyss's infinite layers and inhabitants, the
Demonomicon of lggwilv
is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.
Random Properties.
The artifact has the follow random properties, which you can determine by rolling on the tables in the "Artifacts" section of the
Dungeon Master's Guide
:
2 minor beneficial properties
1 minor detrimental property
1 major detrimental property
Spells.
The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast
Tasha's Hideous Laughter
from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it:
Magic Circle
(1 charge),
Magic Jar
(3 charges),
Planar Ally
(3 charges),
Planar Binding
(2 charges),
Plane Shift
(to layers of the Abyss only; 3 charges),
Summon Fiend
(3 charges; appears in this book).
Abyssal Reference.
You can reference the
Demonomicon
whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.
Fiendish Scourging.
Your magic causes pain to fiends. While carrying the book, when you make a damage roll for a spell you cast against a fiend, you use the maximum possible result instead of rolling.
Ensnarement.
While carrying the book, whenever you cast the
Magic Circle
spell naming only fiends, or the
Planar Binding
spell targeting a fiend, the spell is cast at 9th level, regardless of what level spell slot you used, if any. Additionally, the fiend has disadvantage on its saving throw against the spell.
Containment.
The first 10 pages of the
Demonomicon
are blank. As an action while holding the book, you can target a fiend that you can see that is trapped within a
Magic Circle
. The fiend must succeed on a DC 20 Charisma saving throw with disadvantage or become trapped within one of the
Demonomicon
's empty blank pages, which fills with writing detailing the trapped creature's widely known name and depravities. Once used, this action can't be used again until the next dawn.
When you finish a long rest, if you and the
Demonomicon
are on the same plane of existence, the trapped creature of the highest challenge rating within the book can attempt to possess you. You must make a DC 20 Charisma saving throw. On a failure, you are possessed by the creature, which controls you like a puppet. The possessing creature can release you as an action, appearing in the closest unoccupied space. On a successful save, the fiend can't try to possess you again for 7 days.
When the tome is discovered, it has 1d4 fiends occupying its pages, typically an assortment of demons.
Destroying the Demonomicon.
To destroy the book, six different demon lords must each tear out a sixth of the book's pages. If this occurs, the pages reappear after 24 hours. Before all those hours pass, anyone who opens the book's remaining binding is transported to a nascent layer of the Abyss that lies hidden within the book. At the heart of this deadly, semi-sentient domain lies a long-lost artifact, Fraz-Urb'luu's Staff. If the staff is dragged from the pocket plane, the tome is reduced to a mundane and quite out-of-date copy of the
Tome of Zyx
, the work that served as the foundation for the
Demonomicon
. Once the staff emerges, the demon lord Fraz-Urb'luu instantly knows.`,
    },
    {
      name: "Ephixis, Bow of Nyela",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Nylea wields the shortbow
Ephixis
, the bow whose arrows herald the turning of the seasons. Nylea is quick to let her favored followers borrow her bow, particularly when they intend to use it to perform great deeds, put an end to foul creatures, or cast down the arrogant.
Bow of the Wild.
This divine weapon includes a shortbow and a quiver with four arrows, each tied to one of the four seasons. You gain a +3 bonus to attack and damage rolls made with this bow, and you suffer no disadvantage when attacking at the weapon's long range. Additionally,
Ephixis
scores a critical hit on a d20 roll of 19 or 20.
Blessing of the Wild.
If you are a worshiper of Nylea, you gain all the following benefits for which you have the required piety:
Piety 10+.
The bow has 1 randomly determined minor beneficial property.
Piety 25+.
The bow has 1 randomly determined major beneficial property.
If you aren't a worshiper of Nylea, the bow has 1 randomly determined major detrimental property.
See "Artifacts" in chapter 7 of the
Dungeon Master's Guide
for details on randomly determined properties.
Arrows of the Seasons.
The four arrows — each associated with a season — that accompany this bow can be fired only from it. Each arrow disappears immediately after it's used, and it reappears in the quiver at the next dusk. The save DC against spells cast with the arrows is 18. Each arrow has a unique property:
Spring.
As an action, you can fire this arrow, targeting a beast or a plant creature you can see within 320 feet of you. On a hit, the arrow deals no damage, and the target gains the benefits of the awaken spell for 8 hours.
Summer.
As an action, you can fire this arrow at an unoccupied space on the ground that you can see within 320 feet of you, no attack roll required. A Nyxborn lynx is summoned in that space (use the stat block for a
tiger
with the Nyxborn traits from chapter 6 of MOT). The lynx understands your verbal commands and obeys them as best it can, and it takes its turns immediately after yours. The emissary remains for 1 hour before fading away.
Autumn.
As an action, you can fire this arrow at a space on the ground that you can see within 320 feet of you, no attack roll required, casting the
Wall of Thorns
spell there.
Winter.
As an action, you can fire this arrow at a space that you can see within 320 feet of you, no attack roll required, casting the
Ice Storm
spell there.
Destroying the Bow.
The bow can't be destroyed without first destroying all its arrows. The winter arrow must be fed to a cerberus on the winter solstice. The spring arrow must be planted at the base of a Black Oak of Asphodel on the spring equinox. The summer arrow must be broken by a sea giant on the summer solstice. Then the autumn arrow must be shot into the carcass of a hydra on the autumnal equinox. When all four arrows are destroyed, the bow and quiver dissolve into dust.`,
    },
    {
      name: "Eye and Hand of Vecna",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Seldom is the name of Vecna spoken except in a hushed voice. Vecna was, in his time, one of the mightiest of all wizards. Through dark magic and conquest, he forged a terrible empire. For all his power, Vecna couldn't escape his own mortality. He began to fear death and take steps to prevent his end from ever coming about.
Orcus, the demon prince of undeath, taught Vecna a ritual that would allow him to live on as a lich. Beyond death, he became the greatest of all liches. Even though his body gradually withered and decayed, Vecna continued to expand his evil dominion. So formidable and hideous was his temper that his subjects feared to speak his name. He was the Whispered One, the Master of the Spider Throne, the Undying King, and the Lord of the Rotted Tower.
Some say that Vecna's lieutenant Kas coveted the Spider Throne for himself, or that the sword his lord made for him seduced him into rebellion. Whatever the reason, Kas brought the Undying King's rule to an end in a terrible battle that left Vecna's tower a heap of ash. Of Vecna, all that remained were one hand and one eye, grisly artifacts that still seek to work the Whispered One's will in the world.
The
Eye of Vecna
and the
Hand of Vecna
might be found together or separately. The eye looks like a bloodshot organ torn free from the socket. The hand is a mummified and shriveled left extremity.
To attune to the eye, you must gouge out your own eye and press the artifact into the empty socket. The eye grafts itself to your head and remains there until you die. Once in place, the eye transforms into a golden eye with a slit for a pupil, much like that of a cat. If the eye is ever removed, you die.
To attune to the hand, you must lop off your left hand at the wrist and the press the artifact against the stump. The hand grafts itself to your arm and becomes a functioning appendage. If the hand is ever removed, you die.
Random Properties.
The
Eye of Vecna
and the
Hand of Vecna
each have the following random properties:
1 minor beneficial property
1 major beneficial property
1 minor detrimental property
Properties of the Eye.
Your alignment changes to neutral evil, and you gain the following benefits:
You have truesight.
You can use an action to see as if you were wearing a
Ring of X-Ray Vision
. You can end this effect as a bonus action.
The eye has 8 charges. You can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it:
Clairvoyance
(2 charges),
Crown of Madness
(1 charge),
Disintegrate
(4 charges),
Dominate Monster
(5 charges), or
Eyebite
(4 charges). The eye regains 1d4 + 4 expended charges daily at dawn. Each time you cast a spell from the eye, there is a 5 percent chance that Vecna tears your soul from your body, devours it, and then takes control of the body like a puppet. If that happens, you become an NPC under the DM's control.
Properties of the Hand.
Your alignment changes to neutral evil, and you gain the following benefits:
Your Strength score becomes 20, unless it is already 20 or higher.
Any melee spell attack you make with the hand, and any melee weapon attack made with a weapon held by it, deals an extra 2d8 cold damage on a hit.
The hand has 8 charges. You can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it:
Finger of Death
(5 charges),
Sleep
(1 charge),
Slow
(2 charges), or
Teleport
(3 charges). The hand regains 1d4 + 4 expended charges daily at dawn. Each time you cast a spell from the hand, it casts the
Suggestion
spell on you (save DC 18), demanding that you commit an evil act. The hand might have a specific act in mind or leave it up to you.
Properties of the Eye and Hand.
If you are attuned to both the hand and eye, you gain the following additional benefits:
You are immune to disease and poison.
Using the eye's X-ray vision never causes you to suffer exhaustion.
You experience premonitions of danger and, unless you are incapacitated, can't be surprised.
If you start your turn with at least 1 hit point, you regain 1d10 hit points.
If a creature has a skeleton, you can attempt to turn its bones to jelly with a touch of the
Hand of Vecna
. You can do so by using an action to make a melee attack against a creature you can reach, using your choice of your melee attack bonus for weapons or spells. On a hit, the target must succeed on a DC 18 Constitution saving throw or drop to 0 hit points.
You can use an action to cast
Wish
. This property can't be used again until 30 days have passed.
Destroying the Eye and Hand.
If the
Eye of Vecna
and the
Hand of Vecna
are both attached to the same creature, and that creature is slain by the Sword of Kas, both the eye and the hand burst into flame, turn to ash, and are destroyed forever. Any other attempt to destroy the eye or hand seems to work, but the artifact reappears in one of Vecna's many hidden vaults, where it waits to be rediscovered.`,
    },
    {
      name: "Grovelthrash",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Crafted from a single piece of obsidian, this warhammer of Torog hums with magical energy and is carved with the images of faces screaming in pain.
Sentience.
Grovelthrash
is a sentient neutral evil weapon with an Intelligence of 18, a Wisdom of 15, and a Charisma of 19. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Abyssal, Common, and Infernal.
Personality.
A covetous ultroloth named Ciria lives within
Grovelthrash
. The weapon values material possessions and doling out pain. It compliments its wielder whenever they claim treasure and takes pleasure in harming others.
Dormant.
The warhammer grants the following benefits in its dormant state:
You can speak, read, and write Abyssal and Infernal.
You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with an attack using this warhammer, you can deal an extra 2d6 bludgeoning damage to the target. If you do, you take 1d6 psychic damage. The warhammer deals double damage to objects and structures.
While holding this weapon, you have advantage on Wisdom (Insight) checks made to discern a lie spoken in a language you understand.
Awakened.
When the warhammer reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
You gain a burrowing speed equal to your walking speed. You can use your burrowing speed to move through sand, loose earth, mud, or ice, not solid rock.
When a creature you can see within 30 feet of you hits you with an attack while you are wielding the warhammer, you can use your reaction to deal an amount of psychic damage to that creature equal to the damage you took from the attack. This property can't be used again until the next dawn.
Exalted.
When the warhammer reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
When you have fewer hit points than half your hit point maximum, the warhammer deals an extra 2d6 bludgeoning damage on a hit.
You can burrow through solid rock at half your burrowing speed and leave a 5-foot diameter tunnel in your wake.
As an action, you can use the warhammer to cast one of the following spells from it (save DC 17):
Earthquake
,
Meld into Stone
, or
Stone Shape
. Once a spell has been cast using the warhammer, that spell can't be cast from the warhammer again until the next dawn.`,
    },
    {
      name: "Helm of Perfect Potential",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `This copper-hued helm contains a shard of the Elemental Chaos embedded in its forehead, surrounded by a motif of a rising sun. Legend says Annam fashioned this helm for his daughter Diancastra to hold the fragment of chaos she used to prove her worth to her father.
Random Properties.
The helm has the following random properties, determined by rolling on the appropriate table in the
Dungeon Master’s Guide
:
2 minor beneficial properties
1 major beneficial property
1 minor detrimental property
Master of Guile.
While wearing the helm, you have advantage on Charisma (Deception) and Wisdom (Insight) checks.
Arrow of Elemental Havoc.
As a bonus action while wearing the helm, you can launch a bolt of searing elemental energy toward a creature you can see within 90 feet of yourself. The target must make a DC 20 Dexterity saving throw. On a failed save, the creature takes 4d6 acid, cold, fire, lightning, or thunder damage (your choice). On a successful save, the creature takes half as much damage.
Spellcasting.
The helm has 6 charges and regains 1d6 charges each dawn. As an action while wearing the helm, you can expend 1 or more of its charges to cast one of the following spells (save DC 20):
Elemental Weapon
(1 charge),
Call Lightning
(2 charges),
Wall of Fire
(3 charges),
Conjure Elemental
(4 charges),
Tsunami
(5 charges).`,
    },
    {
      name: "Iggwilv's Cauldron",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Iggwilv crafted this wondrous cauldron with the help of her adoptive mother, the archfey Baba Yaga. The cauldron has two forms. Only Iggwilv or Baba Yaga can change the cauldron from one form to another (by using an action to touch it), which either can do without being attuned to the item. In its first form, the cauldron is made of solid gold and embossed on the outside with images of bare-branched trees, falling leaves, and broomsticks. In its second form, the cauldron is made of iron and embossed on the outside with images of bats, toads, cats, lizards, and snakes—eight of each animal. In either form, the cauldron is roughly 3 feet in diameter and has a 2-foot-wide mouth, a round lid with a molded handle at the top, and eight clawed feet for stability. The cauldron weighs 80 pounds when empty, and it can hold up to 100 gallons of liquid.
Attunement.
Any Humanoid creature that attunes to the cauldron must succeed on a DC 15 Constitution saving throw or be aged to the point of decrepitude. In this state, the creature's speed is halved, the range of its vision and hearing is reduced to 30 feet, and it has disadvantage on all ability checks, attack rolls, and saving throws. The creature will reach the end of its natural life span in 3d8 days. Only a
Wish
spell or divine intervention can reverse this aging effect on the creature.
Three hags can attune to the cauldron simultaneously, provided they have formed a coven. If the coven disbands, the attunement ends for all three hags.
Random Properties.
Regardless of the form it takes, the cauldron has the following random properties:
1 minor beneficial property (determined by rolling on the Minor Beneficial Properties table in the
Dungeon Master's Guide
)
1 minor detrimental property (determined by rolling on the Minor Detrimental Properties table in the
Dungeon Master's Guide
)
Gold Cauldron.
The gold cauldron has the following properties:
If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew that provides one nourishing meal for up to four people per gallon of water used. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew.
If wine is poured into the cauldron and stirred for 10 minutes, it transforms into a magical elixir that fortifies up to four people per gallon of wine used. Any creature that imbibes the elixir gains 10 temporary hit points. Any of the elixir that isn't consumed within 1 hour vanishes. Once used, this property of the cauldron can't be used again until the next dawn.
When the cauldron is filled with 90 gallons of water mixed with 10 gallons of wine, it can be used as the focus for a
Scrying
spell. When this spell is cast using the cauldron as its focus, the target of the spell fails its saving throw automatically, and the spell works even if its caster and the target are on different planes of existence. When the spell ends, all the liquid in the cauldron vanishes.
Dipping the bristles of an ordinary broom into the water-filled cauldron transforms the broom into a
Broom of Flying
for 3 days. Once used, this property of the cauldron can't be used again until the next dawn.
Iron Cauldron.
The iron cauldron has the following properties:
You can use an action to scream into the empty cauldron, which magically summons a
swarm of bats
that flies out of the cauldron and acts immediately after you in the initiative order. The swarm obeys your commands and disappears after 1 minute if it hasn't been destroyed by then. Once used, this property of the cauldron can't be used again until the next dawn.
If at least 1 gallon of blood is poured into the cauldron and stirred for 1 minute, it turns into a cloud of harmless black smoke that erupts from the cauldron and dissipates quickly. At the same time, all Humanoid creatures within a certain radius of the cauldron fall unconscious for 1 hour, except those that are attuned to the cauldron or immune to being charmed. The radius of the effect is 100 feet per gallon of blood used. An unconscious creature awakens if it takes damage or if someone uses an action to shake or slap it. Once used, this property of the cauldron can't be used again until the next dawn.
Tying a dead frog or toad to the end of an ordinary branch and dipping it in the water-filled cauldron transforms the branch into a
Wand of Polymorph
with 3 charges. This wand can't recharge and crumbles to ashes when its final charge is expended. Once used, this property of the cauldron can't be used again for 8 days.
If you spend 1 minute touching the cauldron with a unicorn's horn while reciting the poem called "The Witch Queen's Cauldron", all creatures within 1,000 feet of the cauldron except those that are attuned to it become frozen in time. A time-frozen creature is incapacitated, can't move or speak, doesn't age, and is unaware of its surroundings or the passage of time. Moreover, it can't be moved, harmed in any way, or affected by any other magic. All other conditions and effects on the creature are suppressed until it is no longer frozen in time. Destroying the cauldron, sending it to another plane of existence, or touching it with a unicorn's horn for 1 minute while reciting "The Witch Queen's Cauldron" ends the time-freezing effect on all creatures. The effect also ends on any creature that comes into contact with an antimagic field or is touched by a unicorn's horn.
Destroying the Cauldron.
The cauldron is a Medium object with AC 19, 80 hit points, and immunity to damage from any source other than a
Flame Tongue
or
Frost Brand
weapon. Reducing the cauldron to 0 hit points with such a weapon shatters the cauldron into eight pieces of roughly equal size, whereupon all ongoing effects created by the cauldron end as it loses its magic.
The destruction of
Iggwilv's Cauldron
causes all hags in the multiverse to lose the Shared Spellcasting trait gained by being in a coven (see the "Hag Covens" sidebar in the
Monster Manual
).
Reconstructing the Cauldron.
If all eight pieces of the shattered cauldron are within 5 feet of one another, a
Wish
spell can reassemble them, restoring the cauldron and all its properties. The cauldron's reconstruction also restores the Shared Spellcasting trait of hag covens throughout the multiverse.`,
    },
    {
      name: "Khrusor, Spear of Heliod",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Heliod wields
Khrusor
, a spear blessed with the power of the sun. In his hands, it can be pitched from Nyx to any point on Theros. When Heliod lends his weapon to a mortal, it's typically so they can perform some great work in his name or as a test of their worthiness.
Spear of the Sun.
This spear grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using this spear, the target takes an extra 2d8 radiant damage.
Blessing of the Sun.
If you are a worshiper of Heliod, you gain all the following benefits for which you have the required piety:
Piety 3+.
You gain 15 temporary hit points each dawn.
Piety 10+.
The spear has 1 randomly determined minor beneficial property.
Piety 25+.
The spear has 1 additional randomly determined minor beneficial property.
Piety 50+.
The spear has 1 randomly determined major beneficial property.
If you aren't a worshiper of Heliod, the spear has 2 randomly determined major detrimental properties.
See "Artifacts" in chapter 7 of the
Dungeon Master's Guide
for details on randomly determined properties.
Luminous.
The spear sheds bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight.
Sun's Retaliation.
When you take damage from a creature within 5 feet of you, you can use your reaction to make a melee attack with the spear against that creature. On a hit, the spear deals damage as normal, and the creature is blinded until the start of its next turn. This property of the spear can't be used again until the next dawn.
Spells.
The spear has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 18) from it:
Guiding Bolt
(1 charge),
Daylight
(3 charges, targeting the tip of the spear only),
Sunbeam
(6 charges). The spear regains 1d6 + 4 expended charges daily at dawn.
Destroying the Spear.
If taken to Erebos's palace in Tizerus, and used to sacrifice a champion of Heliod to Erebos,
Khrusor
is either destroyed or fundamentally twisted to Erebos's service.`,
    },
    {
      name: "Lash of Shadows",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `This snakeskin whip is touched by the power of Zehir and ends in five animated serpent heads.
Sentience.
The
Lash of Shadows
is a sentient chaotic evil weapon with an Intelligence of 18, a Wisdom of 16, and a Charisma of 20. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Abyssal, Common, and Draconic.
Personality.
A mad marilith named Sizlifeth lives within the
Lash of Shadows
. The weapon has a short temper and experiences only extreme emotions. It is most happy when dealing harm.
Dormant.
The whip grants the following benefits in its dormant state:
You can speak, read, and write Abyssal and Draconic.
You gain a +1 bonus to attack and damage rolls made with this magic weapon.
You can attempt to poison any creature that is hit by the whip. The creature must succeed on a DC 13 Constitution saving throw or suffer the effect of one of the following poisons of your choice; once a poison other than Serpent Venom has been used, that poison can't be used again until the next dawn:
Dead Eyes.
A creature that fails the saving throw against this poison is poisoned for 1 hour. While poisoned in this way, the creature is blinded.
Serpent Venom.
A creature that fails the saving throw against this poison takes 3d6 poison damage, or half as much damage on a successful save.
Awakened.
When the whip reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
The saving throw DC for the weapon's poisons increases to 15.
The weapon gains a new poison option called
Ghoul's Blood
. A creature that fails the saving throw against this poison is poisoned for 1 minute. While poisoned in this way, the creature is paralyzed. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
Exalted.
When the whip reaches an exalted state, it gains the following additional properties:
The weapon's bonus to attack and damage rolls increases to +3.
The saving throw DC for the weapon's poisons increases to 17.
The weapon gains a new poison option called
Cockatrice Tears
. A creature that fails the saving throw against this poison begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.`,
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
      name: "Mace of the Black Crown",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `This mace has a haft of black iron and a ruby head with a fiendish countenance. Carrying the boon of Asmodeus, it is fit for the most powerful servants of the Nine Hells.
Sentience.
The
Mace of the Black Crown
is a sentient lawful evil weapon with an Intelligence of 20, a Wisdom of 12, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Common and Infernal.
Personality.
A greedy erinyes named Xartaza lives within the
Mace of the Black Crown
. Xartaza wants to recruit more souls for Asmodeus, so the weapon pushes its wielder toward lawful evil actions by manipulating the wielder's dreams. A former Blood War general, Xartaza hates demons and relishes crafting sound battle plans in any conflict.
Dormant.
The mace grants the following benefits in its dormant state:
You can speak, read, and write Infernal.
You gain a +1 bonus to attack and damage rolls made with this magic weapon.
While holding the mace, you can use a bonus action to speak its Infernal command word, causing flames to erupt from the head. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the mace is ablaze, it deals an extra 1d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you are no longer holding the mace.
While holding the mace, you can use an action to summon an
imp
. Any devil you summon with this mace is friendly to you and your companions for the duration. The imp obeys any verbal commands that you issue to it and returns to the Nine Hells 10 minutes after you summoned it. This property can't be used again until the next dawn.
Awakened.
When the mace reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2, and the extra fire damage dealt by the weapon when it is ignited increases to 2d6.
The weapon's Summon Devil feature can also be used to summon a
bearded devil
.
You have resistance to poison damage while holding this weapon.
Exalted.
When the mace reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3, and the extra fire damage dealt by the weapon when it is ignited increases to 3d6. Fire damage dealt by the mace ignores resistance to fire damage.
The weapon's Summon Devil feature can also be used to summon a
barbed devil
.
You have resistance to fire damage while you hold this weapon.`,
    },
    {
      name: "Mastix, Whip of Erebos",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Erebos wields
Mastix
, a whip capable of extending like an impossibly long shadow. In the hands of the god of the dead, the whip snares the reluctant dead and drags them into his realm. When Erebos grants his weapon to a mortal follower, it's typically to reclaim a powerful soul or to humiliate Heliod.
Whip of the Dead.
Erebos's whip seethes with the enervating energy of the Underworld. This magic whip grants a +3 bonus to attack and damage rolls made with it. When you hit with an attack using this whip, the target takes an extra 2d8 necrotic damage and you regain hit points equal to half the amount of necrotic damage dealt.
Additionally, when you make an attack with the whip on your turn, you can increase the range of the attack to 300 feet. This property of the weapon can't be used again until the next dusk.
Blessing of the Dead.
If you are a worshiper of Erebos, you gain all the following benefits for which you have the required piety:
Piety 1+.
The whip has 1 randomly determined minor detrimental property-a burden Erebos imposes to test his faithful.
Piety 25+.
The whip has 1 randomly determined major beneficial property.
Piety 50+.
The whip has 1 additional randomly determined major beneficial property.
If you aren't a worshiper of Erebos, the whip has 2 randomly determined major detrimental properties.
See "Artifacts" in chapter 7 of the
Dungeon Master's Guide
for details on randomly determined properties.
Erebos's Claim.
While carrying the whip, you can use an action to cast either
Circle of Death
or
Dominate Monster
(targeting only undead) from the whip. The save DC for these spells is 18. Once you use the whip to cast a spell, that spell can't be cast from it again until the next dusk.
Destroying the Whip.
To destroy the whip, it must be taken to the heights of Mount Hiastos in Nyx, unraveled by a Returned, and left to bask in continual daylight for one month.`,
    },
    {
      name: "Mighty Servant of Leuk-o",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Named for the warlord who infamously employed it, the
Mighty Servant of Leuk-o
is a fantastically powerful, 10-foot-tall machine that turns into an animate construct when piloted. Crafted of a gleaming black alloy of unknown origin, the servant is often described as a combination of a disproportioned dwarf and an oversized beetle. The servant contains enough space for 1 ton of cargo and a crew compartment within, from which up to two Medium creatures can control it — and potentially execute a spree of unstoppable destruction.
Tales of the servant's origins involve more conjecture than fact, often referring to otherworldly beings, the mysterious Barrier Peaks in Oerth, and the supposedly related device known as the
Machine of Lum the Mad
. The best details on the device's origins and operation can be found in the
Mind of Metal
, a tome of artificer's secrets that connects the device to the traditions of the lost Olman people, and which was written by Lum the Mad's several times over granddaughter, Lum the Maestro, while she reconstructed the long disassembled
Mighty Servant of Leuk-o
.
Dangerous Attunement.
Two creatures can be attuned to the servant at a time. If a third creature tries to attune to it, nothing happens.
The servant's controls are accessed by a hatch in its upper back, which is easily opened while there are no creatures attuned to the artifact.
Attuning to the artifact requires two hours, which can be undertaken as part of a long rest, during which time you must be inside the servant, interacting with its controls. While crew members are attuning themselves, any creature or structure outside and within 50 feet of the servant has a 25 percent chance of being accidentally targeted by one of its Destructive Fist attacks once during the attunement. This process must be undergone every time a creature attunes itself to the artifact.
Controlling the Servant.
While any creatures are attuned to the artifact, attuned creatures can open the hatch as easily as any other door. Other creatures can open the hatch as an action with a successful DC 25 Dexterity check using thieves' tools. A
Knock
spell cast on the hatch also opens it until the start of the caster's next turn.
A creature can enter or exit through the hatch by spending 10 feet of movement. Those inside the servant have total cover from effects originating outside it. The controls within it allow creatures to see outside without obstruction.
While you are inside the servant, you can command it by using the controls. During your turn (for either attuned creature), you can command it in the following ways:
Open or close the hatch (no action required, once per turn)
Move the servant up to its speed (no action required)
As an action, you can command the servant to take one of the actions in its stat block or some other action.
When a creature provokes an opportunity attack from the servant, you can use your reaction to command the servant to make one Destructive Fist attack against that creature.
While there are no attuned creatures inside the servant, it is an inert object.
Ghost in the Machine.
Upon his death, the soul of the mighty warlord Leuk-o was drawn into the artifact and has become its animating force. The servant has been known to attack or move of its own accord, particularly if doing so will cause destruction. Once every 24 hours, the servant, at the DM's discretion, takes one action while uncrewed.
If the servant loses half of its hit points or more, each creature attuned to it must succeed on a DC 20 Wisdom saving throw or be charmed for 24 hours. While charmed in this way, the creature goes on a destructive spree, seeking to destroy structures and attack any unattuned creatures within sight of the servant, starting with those threatening the artifact — preferably using the servant, if possible.
Self-Destruct.
By inputting a specific series of lever pulls and button presses, the servant's two crew members can cause it to explode. The self-destruct code is not revealed to crew members when they attune to the artifact. If the code is discovered (the DM determines how), it requires two attuned crew members to be inside the servant and spend their actions on 3 consecutive rounds performing the command. Should the crew members begin the process of entering the code, though, the servant uses its Ghost in the Machine property and turns the crew members against each other.
If the crew members successfully implement the code, at the end of the third round, the servant explodes. Every creature in a 100 foot-radius sphere centered on the servant must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 87 (25d6) force damage, 87 (25d6) lightning damage, and 87 (25d6) thunder damage. On a successful save, a creature takes half as much damage. Objects and structures in the area take triple damage. Creatures inside the servant are slain instantly and leave behind no remains.
This does not destroy the servant permanently. Rather, 2d6 days later, its parts — left arm, left leg, right arm, right leg, lower torso, and upper torso — drop from the sky in random places within 1,000 miles of the explosion. If brought within 5 feet of one another, the pieces reconnect and reform the servant.
Destroying the Servant.
The servant can be destroyed in two ways. After it has self-destructed, its disconnected pieces can be melted down in one of the forge-temples of its ancient Olman creators. Alternatively, if the servant strikes the
Machine of Lum the Mad
, both artifacts explode in an eruption that is three times the size and three times the damage as the servant's Self-Destruct property.
Mighty Servant of Leuk-o
Huge Construct
Armor Class
22 (natural armor)
Hit Points
310 (27d12 + 135)
Speed
60 ft.
STR
DEX
CON
INT
WIS
CHA
30 (+10)
14 (+2)
20 (+5)
1 (-5)
14 (+2)
10 (+0)
Saving Throws:
Wis +9, Cha +7
Skills:
Perception +9
Damage Resistances:
piercing, slashing
Damage Immunities:
acid, bludgeoning, cold, fire, lightning, necrotic, poison, psychic, radiant
Condition Immunities:
all conditions but invisible and prone
Senses:
blindsight 120 ft., passive Perception 19
Languages:
understands the languages of creatures attuned to it but can't speak
Challenge:
—
Proficiency Bonus:
+7
Immutable Existence.
The servant is immune to any spell or effect that would alter its form or send it to another plane of existence.
Magic Resistant Construction.
The servant has advantage on saving throws against spells and other magical effects, and spell attacks made against it have disadvantage.
Regeneration.
The servant regains 10 hit points at the start of its turn. If it is reduced to 0 hit points, this trait doesn't function until an attuned creature spends 24 hours repairing the artifact or until the artifact is subjected to lightning damage.
Standing Leap.
The servant's long jump is up to 50 feet and its high jump is up to 25 feet, with or without a running start.
Unusual Nature.
The servant doesn't require air, food, drink, or sleep.
Actions
Destructive Fist.
Melee or Ranged Weapon Attack
: +17 to hit, reach 10 ft. or range 120 ft., one target.
Hit
: 36 (4d12 + 10) force damage. If the target is an object, it takes triple damage.
Crushing Leap.
If the servant jumps at least 25 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the servant and must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 26 (4d12) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone.`,
    },
    {
      name: "Orb of Dragonkind",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `Ages past, on the world of Krynn, elves and humans waged a terrible war against evil dragons. When the world seemed doomed, the wizards of the Towers of High Sorcery came together and worked their greatest magic, forging five
Orbs of Dragonkind
(or
Dragon Orbs
) to help them defeat the dragons. One orb was taken to each of the five towers, and there they were used to speed the war toward a victorious end. The wizards used the orbs to lure dragons to them, then destroyed the dragons with powerful magic.
As the Towers of High Sorcery fell in later ages, the orbs were destroyed or faded into legend, and only three are thought to survive. Their magic has been warped and twisted over the centuries, so although their primary purpose of calling dragons still functions, they also allow some measure of control over dragons.
Each orb contains the essence of an evil dragon, a presence that resents any attempt to coax magic from it. Those lacking in force of personality might find themselves enslaved to an orb.
An orb is an etched crystal globe about 10 inches in diameter. When used, it grows to about 20 inches in diameter, and mist swirls inside it.
While attuned to an orb, you can use an action to peer into the orb's depths and speak its command word. You must then make a DC 15 Charisma check. On a successful check, you control the orb for as long as you remain attuned to it. On a failed check, you become charmed by the orb for as long as you remain attuned to it.
While you are charmed by the orb, you can't voluntarily end your attunement to it, and the orb casts
Suggestion
on you at will (save DC 18), urging you to work toward the evil ends it desires. The dragon essence within the orb might want many things: the annihilation of a particular people, freedom from the orb, to spread suffering in the world, to advance the worship of Takhisis (Tiamat's name on Krynn), or something else the DM decides.
Random Properties.
An
Orb of Dragon
kind has the following random properties:
2 minor beneficial properties
1 minor detrimental property
1 major detrimental property
Spells.
The orb has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If you control the orb, you can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it:
Cure Wounds
(5th-level version, 3 charges),
Daylight
(1 charge),
Death Ward
(2 charges), or
Scrying
(3 charges).
You can also use an action to cast the
Detect Magic
spell from the orb without using any charges.
Call Dragons.
While you control the orb, you can use an action to cause the artifact to issue a telepathic call that extends in all directions for 40 miles. Evil dragons in range feel compelled to come to the orb as soon as possible by the most direct route. Dragon deities such as Tiamat are unaffected by this call. Dragons drawn to the orb might be hostile toward you for compelling them against their will. Once you have used this property, it can't be used again for 1 hour.
Destroying an Orb.
An
Orb of Dragonkind
appears fragile but is impervious to most damage, including the attacks and breath weapons of dragons. A disintegrate spell or one good hit from a +3 magic weapon is sufficient to destroy an orb, however.`,
    },
    {
      name: "Orrery Of The Wanderer",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `This delicate and exquisitely crafted clockwork orrery features multiple geared components whose sweeping hands and dials represent the complex interplay of planar and magical realms. Standing two feet high, the orrery housing is a wondrous device imbued with magic of its own, but the power of its six clockwork components makes the artifact even more potent.
The
Orrery of the Wanderer
was created by a renowned clockwork mage known only as Lottie. She crafted the relic as a means of tapping into the power of the planes, and to channel the divination and foretelling powers of the stars. But Lottie soon realized that her creation was far more powerful than she had intended. As it tapped into planar magic, the orrery began to manifest the darkness and malevolence inherent to some of the planes. Eventually, it would impress upon its owner a desire to open portals into the most cursed and dangerous worlds, including the Far Realm.
To prevent the orrery from ever being so used, Lottie scattered the components that powered it, secreting them across the world. But the orrery's instinct for survival is strong, and its components have a way of inexorably coming together over decades or centuries, found by treasure hunters, stolen by monsters, found and stolen again - and moving closer to each other all the time.
Random Properties.
The orrery has the following randomly determined properties:
2 minor beneficial properties
1 major beneficial property
1 major detrimental property
The random properties of the orrery might function only when all its components are installed, or might function sporadically if any components are missing.
The Sum of Its Parts.
Each of the six components that powers the Orrery of the Wanderer is a powerful magic relic in its own right:
The Chronolometer
The Dimensional Loop
The Far Gear
The Rotor of Return
The Timepiece of Travel
The Wheel of Stars
Creatures can attune to the orrery's components individually. If attuned to an individual component, a creature must hold the component to make use of its features. A creature can also attune to the orrery and all the components installed in it. Attuning to an installed component doesn't count against the number of magic items you can normally attune to.
While a component is not installed in the orrery, its magic might function sporadically or with unpredictable side effects, as determined by the DM.
Future Echoes.
With or without its components, the orrery lets you catch momentary glimpses of the future that warn you of danger. As long as the orrery is within 30 feet of you, you gain a +1 bonus to AC.
Into the Void.
With or without its components, the attuned orrery infuses your spirit with the tumultuous energy of the planes. Over time, your alignment changes to chaotic neutral, and you are compelled to engage with and explore the most dangerous planar realms.
Master of Travel.
While all six components of the Orrery of the Wanderer are installed, the artifact has 7 charges. While touching the orrery, you can use an action and expend 1 or more charges to cast one of the following spells (save DC 17):
Contact Other Plane
(3 charges),
Demiplane
(6 charges),
Gate
(7 charges),
Plane Shift
(5 charges), or
Teleportation Circle
(3 charges). The orrery regains 1d4 + 4 expended charges daily at dawn.`,
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
      name: "Rod of Seven Parts",
      rarity: "Artifact",
      itemType: "Rod",
      attunment: true,
      price: 10000,
      description: `Eons ago, a war between the primordials and the gods scarred the planes of existence. A demon lord named Miska the Wolf-Spider eventually pushed the primordials’ enemies to the brink of annihilation.
Desperate to save themselves and their allies, powerful elemental beings called the Wind Dukes of Aaqa rose against Miska. Committed to the concept of law, the Wind Dukes descended from a people called the vaati, who once ruled many worlds. Seven Wind Dukes wove their power into an artifact called the Rod of Law. The dukes used the rod to imprison Miska on the plane of Pandemonium. As a result, the rod shattered into seven parts that were scattered throughout the multiverse. The rod thus became known as the Rod of Law.
Possessing the Broken Rod.
The rod can’t be attuned to while it is broken. While holding one piece of the broken rod, you know the general location of the next consecutive piece, as the rod yearns to be a complete artifact. Multiple rod pieces can be assembled into one piece or disassembled again, each requiring an action, although a partially complete rod doesn’t gain any other abilities.
Additionally, while holding one piece of the broken rod, you can use an action to cast the spell associated with that piece, as listed on the Rod Pieces table. Once that piece of the rod has been used to cast a spell, it can’t be used that way again until the next dawn.
Rod Pieces
Piece
Spell
First
Commune
Second
Arcane Gate
Third
Reverse Gravity
(Spell Save DC 18)
Fourth
Regenerate
Fifth
Find the Path
Sixth
Mirage Arcane
Seventh
Simulacrum
Possessing the Whole Rod
. Once all seven pieces are reassembled, a creature can attune to the Rod of Seven Parts. While attuned to the rod, you gain the following benefits:
Magic Weapon.
The Rod of Seven Parts functions for you as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.
Rod Spellcasting.
The Rod of Seven Parts has 7 charges and regains 1d4 + 3 expended charges daily at dawn. While holding the rod, you can use an action to expend 1 charge and cast any of the spells in the Rod Pieces table. You can also use an action to cast
Detect Evil and Good
from the rod without using any charges.
Ultimate Law.
If you are not of a lawful alignment, you find your worldview shifting toward keeping a personal code. You are more apt to keep your promises, follow through on your declarations, and adhere to your beliefs.
Destroying the Rod.
The only way to destroy the Rod of Seven Parts is to immerse the assembled rod in lava in the Abyss. It must remain in the lava for fifty years before it finally is consumed.
A piece of the rod may be temporarily destroyed in this way, but each piece re-forms one year after it has succumbed. A re-formed piece teleports to a random place in the multiverse`,
    },
    {
      name: "Ruin's Wake",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `This spear is made from the ivory bone of an ancient gold dragon and carved with an Ore hymn to Gruumsh.
Sentience.
Ruin's Wake
is a sentient chaotic evil weapon with an Intelligence of 20, a Wisdom of 16, and a Charisma of 22. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Abyssal, Common, and Orc.
Personality.
A slaughter-loving balor named Yarrowish lives within
Ruin's Wake
. The weapon desires only to draw blood and pushes its wielder to solve problems with violence.
Dormant.
The spear grants the following benefits in its dormant state:
You can speak, read, and write Abyssal and Orc.
You gain a +1 bonus to attack and damage rolls made with this magic weapon, and it deals an extra 1d8 piercing damage to any target it hits. Immediately after you make a ranged attack with this weapon, it flies back to your hand.
As a reaction when you are hit by a melee attack, you can make a melee attack with
Ruin's Wake
with advantage against the attacker. You can't use this property again until you finish a short or long rest.
Awakened.
When the spear reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2, and the extra piercing damage dealt by the weapon increases to 2d8.
When you hurl the spear and speak a command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a creature you can see within 120 feet of you. Each creature in the line, excluding you, must make a DC 15 Dexterity saving throw, taking 8d6 lightning damage on a failed save, or half as much damage on a successful one.
Ruin's Wake
then returns to your hand. This property can't be used again until the next dawn.
Exalted.
When the spear reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
While holding the spear, you can let out a battle cry as a bonus action. Each creature you choose within 30 feet of you gains advantage on attack rolls until the start of your next turn. This property can't be used again until the next dawn.
When you reduce a creature to 0 hit points with an attack from the spear, you can regain hit points equal to the damage you dealt with the attack. This property can't be used again until the next dawn.`,
    },
    {
      name: "Ruinstone",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: false,
      price: 10000,
      description: `A fiery red crystal the size of a human palm.
Once per day as a bonus action, a villain can activate the ruinstone to undo one deed they have performed. The possibilities here are broad, but in combat it’s simplest to allow them the opportunity to “rewind” one action and take it again, or to reroll a failed saving throw (if it can still take actions).
Each use of the artifact has a terrible side effect: someone known to the wielder is also erased from reality. After the villain uses the ruinstone, roll a d20: on a 5-20, one of their allies disintegrates, on an 1-4, one of the player characters disintegrates.
If a creature bound its soul to the ruinstone in the “Thalivar’s Beacon” quest, the artifact explodes when used and the creature who is bound to it disintegrates, disappearing from reality and can only be brought back with a wish spell, or similar magic.`,
    },
    {
      name: "Silken Spite",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `The blade of this rapier is made of spider silk. Its onyx pommel is tipped with a ruby cut in the shape of a spider, and the blade carries the blessing of Lolth.
Sentience.
Silken Spite
is a sentient chaotic evil weapon with an Intelligence of 13, a Wisdom of 15, and a Charisma of 15. It has hearing and darkvision out to a range of 1 20 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Abyssal, Common, Elvish, and Undercommon.
Personality.
A murderous yochlol named Sinnafex lives within
Silken Spite
. The weapon speaks in whispers, pushing its wielder to trust no one and to kill those who cause the slightest personal offense.
Dormant.
The rapier grants the following benefits in its dormant state:
You can speak, read, and write Abyssal, Elvish, and Undercommon.
You have darkvision out to a range of 60 feet. If you already have darkvision, being attuned to the rapier increases the range of your darkvision by 60 feet.
You gain a +1 bonus to attack and damage rolls made with this magic weapon.
You can use an action to cause poison to coat the rapier's blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 13 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the creature is also unconscious while poisoned in this way. The creature wakes up if it takes damage or if another creature uses its action to shake the creature awake.
While carrying the rapier, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. Additionally, you can't be caught in webs of any sort and can move through webs as if they were difficult terrain.
Awakened.
When the rapier reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
The saving throw DC for the weapon's poison increases to 15.
While holding the rapier, you can use an action to cast one of the following spells from it (save DC 15):
Cloudkill
,
Darkness
,
Levitate
, or
Web
. Once a spell has been cast using the rapier, that spell can't be cast from the rapier again until the next dawn.
Exalted.
When the rapier reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
The saving throw DC for the weapon's poison and spells cast from the weapon increases to 17.
Magical darkness doesn't impede your darkvision.
While holding the weapon in dim light or darkness, you can use a bonus action to teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. This property can't be used again until the next dawn.`,
    },
    {
      name: "Staff of the Forgotten One",
      rarity: "Artifact",
      itemType: "Staff",
      attunment: true,
      price: 10000,
      description: `This crooked staff is carved from bone and topped with the skull of a forgotten archmage whom Acererak destroyed long ago. Etched into the skull's forehead is Accrerak's rune, which is known on many worlds as a sign of death.
Beneficial Properties.
While the staff is on your person, you gain the following benefits:
Your proficiency bonus to Intelligence (Arcana) and Intelligence (History) checks is doubled.
You can't be blinded, charmed, deafened, frightened, petrified, or stunned.
Undead with a challenge rating of 2 or lower will neither threaten nor attack you unless you harm them.
You can wield the staff as a
+3 quarterstaff
that deals an extra 10 (3d6) necrotic damage on a hit.
Invoke Curse.
The
Staff of the Forgotten One
has 7 charges and regains 1d4 + 3 expended charges daily at dawn. While holding the staff, you can use an action to expend 1 charge and target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw (using your spell save DC) or be cursed. While cursed in this way, the target can't regain hit points and has vulnerability to necrotic damage. A
Greater Restoration
,
Remove Curse
, or similar spell ends the curse on the target.
The Forgotten One.
The bodiless life force of a dead archmage empowers the staff and is imprisoned within it. The rune carved into the staff's skull protects Acererak from this spirit's vengeance. Each time a creature other than Acererak expends any of the staff's charges, there is a 50 percent chance that the life force tries to possess the staff wielder. The wielder must succeed on a DC 20 Charisma saving throw or be possessed, becoming an NPC under the DM's control. If the intruding life force is targeted by magic such as a
Dispel Evil and Good
spell, it becomes trapped in the staff once more. Once it takes control of another creature, the insane spirit of the dead archmage attempts to destroy the staff.
Destroying the Staff.
A creature in possession of the staff can use an action to break it over one knee or a solid surface. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. Each creature in the area must make a DC 18 Dexterity saving throw, taking 132 (24d10) force damage on a failed save, or half as much damage on a successful one. When the staff is destroyed, the life force of the Forgotten One is released to the afterlife. Where it goes is anyone's guess.
Casting the staff into a
Sphere of Annihilation
destroys both the staff and the Life force trapped within it. The staff doesn't explode if destroyed in this manner, but its destruction causes the sphere to be destroyed as well.`,
    },
    {
      name: "Stone of Golorr",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The
Stone of Golorr
is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.
Random Properties.
The
Stone of Golorr
has the following properties, determined by rolling on the tables in the "Artifacts" section in chapter 7 of the
Dungeon Master's Guide
:
1 minor beneficial property
1 minor detrimental property
Legend Lore.
The
Stone of Golorr
has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the
Legend Lore
spell.
By using the stone to cast
Legend Lore
, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.
The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.
Failed Memory.
When your attunement to the
Stone of Golorr
ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A
Remove Curse
spell cast on you has a 20 percent chance of restoring the lost knowledge and memories, and a
Greater Restoration
spell does so automatically.
Sentience.
The
Stone of Golorr
is a sentient lawful evil magic item with an Intelligence or 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. Io addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.
The
Stone of Golorr
hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see "Sentient Magic Items" in chapter 7 of the
Dungeon Master's Guide
).
Personality.
The
Stone of Golorr
has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.
Destroying the Stone.
While in stone form the aboleth isn't a creature and isn't subject to effects that target creatures. The
Stone of Golorr
is immune to all damage. Casting an
Antipathy/Sympathy
spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed. and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.`,
    },
    {
      name: "Sword of Kas",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `When Vecna grew in power, he appointed an evil and ruthless lieutenant, Kas the Bloody Handed, to act as his bodyguard and right hand. This despicable villain served as advisor, warlord, and assassin. His successes earned him Vecna's admiration and a reward: a sword with as dark a pedigree as the man who would wield it.
For a long time, Kas faithfully served the lich but as Kas's power grew, so did his hubris. His sword urged him to supplant Vecna, so that they could rule the lich's empire in Vecna's stead. Legend says Vecna's destruction came at Kas's hand, but Vecna also wrought his rebellious lieutenant's doom, leaving only Kas's sword behind. The world was made brighter thereby.
The
Sword of Kas
is a magic, sentient longsword that grants a +3 bonus to attack and damage rolls made with it. It scores a critical hit on a roll of 19 or 20, and deals an extra 2d10 slashing damage to undead.
If the sword isn't bathed in blood within 1 minute of being drawn from its scabbard, its wielder must make a DC 15 Charisma saving throw. On a successful save, the wielder take 3d6 psychic damage. On a failed save, the wielder is dominated by the sword, as if by the
Dominate Monster
spell, and the sword demands that it be bathed in blood. The spell effect ends when the sword's demand is met.
Random Properties.
The
Sword of Kas
has the following random properties:
1 minor beneficial property
1 major beneficial property
1 minor detrimental property
1 major detrimental property
Spirit of Kas.
While the sword is on your person, you add a d10 to your initiative at the start of every combat. In addition, when you use an action to attack with the sword, you can transfer some or all of its attack bonus to your Armor Class instead. The adjusted bonuses remain effect until the start of your next turn.
Spells.
While the sword is on your person, you can use an action to cast one of the following spells (save DC 18) from it:
Call Lightning
,
Divine Word
, or
Finger of Death
. Once you use the sword to cast a spell, you can't cast that spell again from it until the next dawn.
Sentience.
The
Sword of Kas
is a sentient chaotic evil weapon with an Intelligence of 15, a Wisdom of 13, and a Charisma of 16. It has hearing and darkvision out to 2 range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Common
Personality.
The sword's purpose is to bring ruin to Vecna. Killing Vecna's worshipers, destroying the lich's works, and foiling his machinations all help to fulfill this goal.
The
Sword of Kas
also seeks to destroy anyone corrupted by the Eye and Hand of Vecna. The sword's obsession with those artifacts eventually becomes a fixation for its wielder.
Destroying the Sword.
A creature attuned to both the
Eye of Vecna
and the
Hand of Vecna
can use the Wish property of those combined artifacts to unmake the
Sword of Kas
. The creature must cast the
Wish
spell and make a Charisma check contested by the Charisma check of the sword. The sword must be within 30 feet of the creature, or the spell fails. If the sword wins the contest, nothing happens, and the
Wish
spell is wasted. If the sword loses the contest, it is destroyed.`,
    },
    {
      name: "Sword of Zariel",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.
Attunement.
The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain the following traits:
Angelic Language.
You can speak, read. and write Celestial.
Celestial Resistance.
You have resistance to necrotic and radiant damage.
Divine Presence.
Your Charisma score becomes 20, unless it is already 20 or higher.
Feathered Wings.
You sprout a beautiful pair of feathered wings that grant you a flying speed of 90 feet and the ability to hover. If you already have a different kind of wings, these new wings replace the old ones, which fall off.
Truesight.
Your eyes become luminous pools of silver. You can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, perceive the original form of a shapechanger or a creature that is transformed by magic, and see into the Ethereal Plane, all within a range of 60 feet.
New Personality.
You gain new personality traits, determined by rolling once on each of the following tables. These traits override any conflicting personality trait, ideal, bond, or flaw.
Personality Traits
d8
Personality Trait
1
I treat all beings, even enemies, with respect.
2
I won't tell a lie.
3
I enjoy sharing my philosophical worldview and experiences with others.
4
I cut right to the chase in every conversation.
5
I often quote (or misquote) religious texts.
6
I anger quickly when I witness cruelty or injustice.
7
My praise and trust are earned and never given freely.
8
I like everything clean and organized.
Ideals
d6
Ideal
1
Charity.
I always help those in need. (Good)
2
Faith.
I choose to follow the tenants of a particular lawful good deity to the letter. (Lawful)
3
Responsibility.
It is the duty of the strong to protect the weak. (Lawful)
4
Respect.
All people deserve to be treated with dignity. (Good)
5
Honor.
The way I conduct myself determines my reward in the afterlife. (Lawful)
6
Redemption.
All creatures are capable of change for the better. (Good)
Bonds
d6
Bonds
1
I have a favorite religious hymn that I constantly hum.
2
I must keep a written record of my beliefs and the sins that I witness. When finished, this book will be my gift to the multiverse.
3
I have cherished memories of Idyllglen, though I've only seen this bucolic town in dreams.
4
I would die for those who fight beside me, regardless of their faults.
5
I seek to honor the angel Zariel by destroying fiends and other evildoers wherever I find them.
6
The
Sword of Zariel
has chosen me. I shall not fail to wield it justly.
Flaws
d6
Flaws
1
I am too quick to judge others.
2
I offer forgiveness too readily.
3
I will sacrifice innocent lives for the greater good.
4
Flaw? What flaw? I am flawless. Utter perfection!
5
I allow nothing to stand in the way of my crusade to eradicate evil from the multiverse.
6
I ignore those who do not support my plans, for my calling is higher than all others.
Holy Light.
The sword sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Fiends find the sword's light disconcerting and painful, even if they can't see it, and have disadvantage on attack rolls made within the weapon's radius of bright light.
As a bonus action, you can intensify the sword's light, causing it to shed bright light in a 15-foot radius and dim light for an additional 15 feet, or reduce its glow to its normal intensity.
Random Properties.
The sword has 2 minor beneficial properties, each determined by rolling on the Minor Beneficial Properties table in chapter 7 of the
Dungeon Master's Guide
.
Searing Radiance.
The sword deals an extra 9 (2d8) radiant damage to any creature it hits, or 16 (3d10) radiant damage if you're wielding the weapon with two hands. An evil creature that takes this radiant damage must succeed on a DC 17 Constitution saving throw or be blinded until the end of its next turn.
Sentience.
The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet.
The sword communicates by transmitting emotion to the creature carrying or wielding it.
Truth Seer.
While holding the sword, you gain advantage on all Wisdom (Insight) checks.
Destroying the Sword.
Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see "Shattering the Companion," BG:DA, page 154), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.
If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.`,
    },
    {
      name: "Teeth of Dahlver-Nar",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `The
Teeth of Dahlver-Nar
are stories given form. They are a collection of teeth, each suggestive of wildly different origins and made from various materials. The collection rests within a leather pouch, stitched with images of heroes and whimsical creatures. Where the teeth fall, they bring legends to life.
Using the Teeth.
While you are holding the pouch, you can use an action to draw one tooth. Roll on the Teeth of Dahlver-Nar table to determine which tooth you draw, and you can either sow the tooth or implant it (both of which are described later).
If you don't sow or implant the tooth, roll a die at the end of your turn. On an even number, the tooth vanishes, and creatures appear as if you sowed the tooth, but they are hostile to you and your allies. On an odd number, the tooth replaces one of your teeth as if you implanted it (potentially replacing another implanted tooth, see below).
Each tooth can only be used once. Track which teeth have been used. If a tooth's result is rolled after it's been used, you draw the next lowest unused tooth on the table.
Sowing Teeth.
To sow the tooth, you place it on the ground in an unoccupied space within your reach, or you throw it into an unoccupied space within 10 feet of you in a body of water that is at least 50 feet wide and 50 feet long. Upon doing so, the tooth burrows into the ground and vanishes, leaving no hole behind, or it vanishes into the water. The creatures noted in the Creatures Summoned column appear in an unoccupied space as close to where the tooth was sown as possible. The creatures are allies to you, speak all languages you speak, and linger for 10 minutes before disappearing, unless otherwise noted.
Implanting Teeth.
To implant the tooth, you place it in your mouth, whereupon one of your own teeth falls out, and the drawn tooth takes its place, resizing to fit in your mouth. Once the tooth is implanted, you gain the effect noted in the Implanted Effect column. The tooth can't be removed while you are attuned to the teeth, and you can't voluntarily end your attunement to them. If removed after your death, the tooth vanishes. You can have a maximum number of the teeth implanted at one time equal to 1 + your Constitution modifier (minimum of 2 teeth total). If you try to implant more teeth, the newly implanted tooth replaces one of the previous teeth, determined randomly. The replaced tooth vanishes, and you lose the implanted effect.
Recovering Teeth.
Once all the teeth have vanished, their pouch also vanishes. The pouch with all the teeth then appears in a random destination, which could be on a different world of the Material Plane.
Destroying the Teeth.
Each tooth must be destroyed individually by sowing it in the area where the tooth's story originated, with the intention to destroy it. When planted in this way, creatures summoned are not friendly to you and do not vanish. Some of the creatures summoned merely head off in search of home, while others act as their tales dictate. In either case, the tooth is gone forever.
Teeth of Dahlver-Nar
1d20
Tale and Tooth
Creatures Summoned
Implanted Effect
1
The Staring Cats of Uldun-dar (ivory cat molar)
9
cats
The tooth has 8 charges. As an action, you can expend 1 charge to cast the
Revivify
spell from the tooth. If you are dead at the start of your turn, the tooth expends 1 charge and casts
Revivify
on you.
2
Duggle's Surprising Day (human molar)
1
commoner
When you finish a long rest, the tooth casts
Sanctuary
(DC 18) on you, and the spell lasts for 24 hours or until you break it.
3
The Golden Age of Dhakaan (golden goblin bicuspid)
10
goblins
, 1
goblin boss
When you are hit by an attack and an ally is within 5 feet of you, you can use your reaction to cause them to be hit instead. You can't use this reaction again until you finish a short or long rest.
4
The Mill Road Murders (halfling canine)
3
green hags
in a coven
When you damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage from ghostly blades.
5
Dooms of the Malpheggi (emerald lizardfolk fang)
1
lizardfolk queen
and 4
lizardfolk
You gain reptilian scales, granting you a +2 bonus to your AC. Additionally, when you finish a long rest, you must succeed on a DC 15 Constitution saving throw or gain l level of exhaustion.
6
The Stable Hand's Secret (sweet-tasting human canine)
2
incubi
When you make a Charisma check against a humanoid, you can roll a d10 and add the number rolled as a bonus to the result. The creature then becomes hostile to you at the next dawn.
7
The Donkey's Dream (rainbow-colored donkey molar)
1
unicorn
The tooth has 3 charges. As an action, you can expend 1 charge to touch a creature. The target regains 2d8 + 2 hit points, and all diseases and poisons affecting it are removed. When you use this action, a shimmering image of a unicorn's horn appears until the end of your turn, sprouting from your forehead. The tooth regains all expended charges daily at dawn. You gain the following flaw: "When I see wickedness in action, I must oppose it."
8
Beyond the Rock of Bral (silver mind-flayer tooth)
2
mind flayers
You gain telepathy out to 120 feet as described in the
Monster Manual
, and you can cast the
Detect Thoughts
spell at will, requiring no components. You also have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.
9
The Disappearances of Half Hollow (vomerine tooth of a Large toad)
4
giant toads
Your long jump is up to 30 feet and your high jump is up to 15 feet, with or without a running start.
10
Legendary of Phantoms and Ghosts (obsidian human molar)
1
giant octopus
, 1
mage
, 1
specter
As an action, you can use the tooth to cast the
Evard's Black Tentacles
spell (DC 18). Once this property is used, it can't be used again until the next dawn.
11
The Thousand Deaths of Jander Sunstar (yellowed vampire fang)
1
vampire
You can make a bite attack as an unarmed strike. On a hit, it deals 1d6 piercing damage plus 3d6 necrotic damage. You regain a number of hit points equal to the necrotic damage dealt. While you are in sunlight, you can't regain hit points.
12
Nightmares of Kaggash (twisted beholder tooth)
1
beholder
As an action, you can cast the
Eyebite
spell from the tooth. Once you use this action, it can't be used again until the next dawn. Whenever you finish a long rest, roll a d20. On a 20, an aberration chosen by the DM appears within 30 feet of you and attacks.
13
Three Bridges to the Sky (lapis lazuli oni fang)
3
oni
You gain a flying speed of 30 feet, and you can use the tooth to cast the
Detect Magic
spell at will. While you are attuned to fewer than 3 magic items, you gain l level of exhaustion that can't be removed until you are attuned to three or more magic items.
14
The Claws of Dragotha (broken translucent fang)
1
adult red dracolich
You can use the tooth to cast the
Create Undead
spell. Once this property is used, it can't be used again until the next dawn. Each time you create an undead creature using the tooth, a
skeleton
,
zombie
, or
ghoul
also appears at a random location within 5 miles of you, searching for the living to kill. A humanoid killed by these undead rises as the same type of undead at the next midnight.
15
Ashes of the Ages and Eternal Fire (jade humanoid bicuspid)
1
dao
, 1
djinni
, 1
efreeti
, 1
marid
You can use the tooth to cast
Counterspell
at 9th level. Once you use this property, it can't be used again until the next dawn. Whenever you finish a long rest, if you haven't used the tooth to counter a spell since your last long rest, your hit point maximum is reduced by 2d10. If this reduces your hit point maximum to 0, you die.
16
Daughters of Bel (green steel pit fiend fang)
1
pit fiend
You can use the tooth to cast
Dominate Monster
(DC 18). Once you use this property, it can't be used again until the next dawn. You smell strongly of burning sulfur.
17
Why the Sky Screams (blue dragon fang)
1
ancient blue dragon
You gain immunity to lightning damage and vulnerability to thunder damage.
18
The Last Tarrasque (jagged sliver of tarasque tooth)
1
tarrasque
(ignores you and your commands; appears for 1d4 rounds then vanishes)
You deal double damage to objects and structures. If you take 20 or more damage in one turn, you must succeed on a DC 18 Wisdom saving throw or spend your next turn in a murderous fury. During this rage, you must use your action to make an unarmed strike against a creature that damaged you, or a random creature you can see if you weren't damaged by a creature, moving as close as you can to the target if necessary.
19
Incendax's Tooth (ruby-veined red dragon fang)
1
ancient red dragon
You gain immunity to fire damage, and as an action, you can exhale fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 26d6 fire damage on a failed save, or half as much damage on a successful one. After using the breath weapon, you gain 2 levels of exhaustion.
20
Dahlver-Nar's Tooth (dusty human molar)
1
priest
As an action you can call on a divine force to come to your aid. Describe the assistance you seek, and the DM decides the nature of the intervention; the effect of any cleric spell would be appropriate. Once this property is used, it can't be used again for 7 days.`,
    },
    {
      name: "The Bloody End",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Carrying the power of Bane, this adamantine morningstar sports foot-long spikes and has a jagged blade on its pommel.
Sentience.
The Bloody End
is a sentient lawful evil weapon with an Intelligence of 22, a Wisdom of 18, and a Charisma of 24. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Common and Infernal.
Personality.
A tyrannical pit fiend named Izeelzee lives within
The Bloody End
. The weapon boisterously pushes its wielder to subjugate others and to never back down from a challenge. If the wielder doesn't demand fealty from others, the weapon is happy to demand it on their behalf.
Dormant.
The morningstar grants the following benefits in its dormant state:
You can speak, read, and write Infernal.
You gain a +1 bonus to attack and damage rolls made with this magic weapon.
While holding the morningstar, you can use an action to cast one of the following spells from it (save DC 13):
Charm Person
,
Dominate Person
, or
Fear
. Once a spell has been cast using the morningstar, that spell can't be cast from it again until the next dawn.
While holding the morningstar, you have advantage on Charisma (Intimidation) checks.
Awakened.
When the morningstar reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
The saving throw DC for spells cast from the morningstar increases to 15.
When you reduce a creature to 0 hit points with an attack using
The Bloody End
, you can cause the following effect: each creature of your choice within 15 feet of you must succeed on a DC 15 Wisdom saving throw or be frightened of you until the end of your next turn. This property can't be used again until the next dawn.
When a creature hits you with a melee attack, you can use your reaction to deal 1d6 psychic damage to the attacker.
Exalted.
When the morningstar reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
Add
Dominate Monster
to the list of spells that can be cast from the morningstar.
The saving throw DC for spells cast from the morningstar, as well as for creatures to avoid being frightened by it, increases to 17.
When you use your reaction to deal psychic damage to a creature that hits you with a melee attack, the amount of psychic damage increases to 2d6.`,
    },
    {
      name: "The Infernal Machine Of Lum The Mad",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: true,
      price: 10000,
      description: `This strange device was once thought to have been built by gods long forgotten and to have survived the eons since their passing, for it is incredibly ancient and crafted by means unlike anything known today. However, its true origins derive from a planar craft that crashed in the Barrier Peaks, for the
Infernal Machine
once functioned as this craft’s central command console.
Explorers who discovered the crash site removed the command console and brought it back to civilization, not understanding its true purpose or powers. In later years, the console came into the possession of Baron Lum. By experimenting with its many controls, he was able to achieve astounding and destructive magical effects in the building of his empire, and so the artifact came to be known as the
Infernal Machine of Lum the Mad
. Yet with Lum’s eventual defeat, his great machine was destroyed.
The
Infernal Machine
is a delicate, intricate, bulky, and heavy device, weighing some 5,500 pounds. It can be operated using a control panel containing sixty levers, forty dials, twenty switches, and a number of jeweled components. These controls generate all kinds of powers and effects, as noted below.
Silver Wire.
The
Infernal Machine
’s great size makes it largely immobile. To make ongoing use of the machine (such as while adventuring), it can be connected to its attuned user by a silver wire, a supply of which can always be produced from the machine’s inner workings. This silver wire shares the same general nature as the silvery cord of an
Astral Projection
spell, connecting to the body of the user and trailing behind them. When so attached, the wire becomes invisible, astral, and extends to virtually infinite length.
As long as the wire remains intact, the attuned user can make full use of the
Infernal Machine
’s powers, with their effects centered around the user. If the wire is cut — something that can happen only when an effect specifically states that it can cut an
Astral Projection's
silvery cord — the user suffers a sudden burst of feedback from the machine that kills them instantly.
Any effect of the
Infernal Machine
that requires concentration can be concentrated on by a remote user. The
Infernal Machine
’s effects have a spell save DC of 14 or the attuned user’s spell save DC, whichever is higher.
Summon Monster.
When first used by Baron Lum, the
Infernal Machine
was known for its ability to unleash terrible monsters within the world. Specific combinations of its controls can still recreate the effects of various spells of the conjuration school, as follows:
1/day:
Conjure Animals
,
Summon Lesser Demons
1/7 days:
Conjure Minor Elementals
,
Conjure Woodland Being
,
Summon Greater Demon
1/month:
Conjure Elemental
,
Conjure Fey
Wish.
The
Infernal Machine
has the ability to bend the nature of reality, with the proper combination of controls recreating the effect of a
Wish
spell (including all side effects). Due to the complex nature of its programming, this feature can be used only once per month.
Each time this effect is used, there is a cumulative 10 percent chance of the
Infernal Machine
malfunctioning, necessitating seven days’ worth of repairs and reprogramming, as well as the expenditure of 500 gp in parts, before it can be used again. When these repairs are done, the cumulative chance of malfunction returns to 10 percent.
Random Properties.
There are far more possible combinations for the
Infernal Machine
’s controls than can ever be known or matrixed — especially as the controls shift position and reset themselves over time. At the end of each long rest of the user attuned to it, the
Infernal Machine
generates 1d4 + 1 random beneficial properties and 1d4 + 1 detrimental properties. Roll for each of these properties on the Infernal Machine Properties table. To keep things interesting, the DM might roll secretly for detrimental properties, revealing those properties only during the course of play.
Once set, these properties last until the end of the attuned user’s next long rest.
(Our thanks to the D&D community for their suggestions for the properties of the
Infernal Machine of Lum the Mad
!)
Destroying the Machine.
The
Infernal Machine of Lum the Mad
is self-repairing of anything short of catastrophic damage, and how it was disabled in Lum’s time remains a mystery. It is rumored that if one specific combination of controls is set, the
Infernal Machine
will enter a repair mode, allowing unfettered access to its inner workings — and preventing it from restoring itself if it is attacked. Alternatively, other combinations of controls might cause the
Infernal Machine
to teleport its most critical components to some hiding place deep in space and time, rendering it inoperable until those components are found again.
Infernal Machine Properties
d100
Beneficial Property
Detrimental Property
01
You have a flying speed of 150 feet but lose all other movement.
You are blinded.
02
You can cast the
Speak with Animals
spell at will, but can use it to speak with only one animal of your choice.
All animals despise you. You have disadvantage on Wisdom (Animal Handling) checks.
03
One weapon or item you carry of your choice gains a walking speed of 30 feet and goes where you tell it.
Your armor and clothing feels unnaturally tight. Unless you go naked, roll a d4 each time you are attacked and subtract the number rolled from your AC.
04
You can cast the
Legend Lore
spell three times.
Whenever you make an Intelligence check or use divination magic to learn something about a creature, that knowledge comes with added trivia of the DM's devising.
05
You emanate a weak magnetic aura. The first time during a combat that a creature attacks you with a metal weapon, that creature has disadvantage on the attack roll.
Metal rusts in response to your touch — including metal armor you wear and metal weapons you hold — reproducing the effect of the rust monster's Rust Metal trait.
06
Your fingers sprout tiny clockwork picks, granting you advantage on ability checks made using thieves' tools or tinker's tools.
Any metal object you wield or wear is covered in a thin layer of oil that drips occasionally and leaves your fingerprints everywhere.
07
You can cast the
Speak with Animals
spell at will, but can use it to communicate only with insects.
Disturbing whispers on the edge of hearing haunt all creatures within 30 feet of you, causing those creatures to recall their saddest memories.
08
You have a +1 bonus to Wisdom (Insight checks) involving creatures you can see.
Your body is ghostly and translucent except for your bones. You have vulnerability to radiant damage, and you have disadvantage on attack rolls while in direct sunlight.
09
You summon a unicorn that obeys your commands. If you give a command that violates the unicorn's alignment, the unicorn immediately vanishes.
You grow a unicorn horn.
10
A specialized clockwork compass floats in front of you. You can name one character, place, or object on the same plane as you and have the compass point constantly in the direction of the named target. You gain no knowledge of the distance to the target.
A specialized clockwork compass floats in front of you, and points toward you. The DM determines whether a creatures currently looking for you is drawn to your location. Additionally, when a creature attacks you for the first time during an encounter, it has advantage on the attack roll.
11
Your clothes are wrapped in illusion that makes them appear to be the very latest style, drawing praise and attention. You have a +1 bonus to Charisma checks.
Any food and drink you eat spoils as you swallow it. Each time you eat or drink, you are poisoned for 1 hour.
12
You have a +1 bonus to attack rolls with weapons or spells (your choice).
The
Cure Wounds
spell restores no hit points for you.
13
You have an innate sense of direction. You automatically succeed on ability checks made to avoid becoming lost.
Whenever you move, a magical voice calls out your direction and how far you’ve gone. The voice cannot be silenced or stopped.
14
You constantly see afterimages of all events that occurred within 30 feet of you over the previous hour.
You are distracted by voices and visions, forcing you to succeed on a Wisdom saving throw every 4 hours or gain one level of exhaustion.
15
You understand all languages, as if under the effect of a
Comprehend Languages
spell.
Whenever you speak, you speak in a random language (possibly including languages you don’t normally know).
16
You have +1 bonus to initiative rolls.
You are unable to hear any speech louder than a whisper.
17
An exact duplicate of you appears next to you, dressed as you but lacking any gear. The duplicate functions as a familiar and has the statistics of a
cat
.
An exact duplicate of you appears next to you, dressed as you but lacking any gear. It loudly tries to convince all other creatures that it is you, and you are its familiar. If destroyed, it reappears in 1d4 hours.
18
While you are afflicted by a disease or suffering the poisoned or frightened condition, whenever you hit a humanoid with a melee attack, the target must succeed on a DC 15 Constitution saving throw. On a failed save, you transfer the disease or the condition to the target, and the disease or condition ends for you.
Water becomes intensely acidic to you. If you are submerged in water, you take 1d6 acid damage at the start of each of your turns, and drinking pure water causes you to be poisoned for 1 hour.
19
A random Huge beast appears next to you (chosen by the DM) as if with the
Conjure Animals
spell. You have a telepathic link to this beast, such that you can give it commands even if it can’t hear you.
A random Huge beast appears next to you (chosen by the DM) and attacks at once.
20
You have 1 luck point, which you can use as if you had taken the
Lucky
feat. If you have taken that feat, you have 1 extra luck point.
Those around you perceive you as dishonest, even when you are completely truthful. You automatically fail Charisma checks.
21
If you drop to 0 hit points, a phantom guardian appears next to you, functioning as if you had cast the
Mordenkainen’s Faithful Hound
spell. The guardian disappears if you die, regain hit points, or regain consciousness.
No one takes you seriously, imposing disadvantage on Charisma (Deception and Persuasion) checks, and causing you to automatically fail Charisma (Intimidation) checks.
22
You can cast the
Gaseous Form
spell on yourself three times. When you do, instead of appearing as mist, you appear as a swirling puff of feathers.
Your body is covered in feathers.
23
You have advantage on death saving throws.
You have disadvantage on all saving throws except death saving throws.
24
You can cast
Speak with Animals
at will, but can use it to communicate only with dogs.
All cats are automatically hostile toward you.
25
You can cast the
Raise Dead
spell once, requiring no material components.
If you drop to 0 hit points, you automatically suffer 1 failed death saving throw.
26
Each time you finish a short rest, up to 100 silver pieces already in your possession become gold pieces, and up to 100 copper pieces become silver pieces.
All coins you touch become worthless tin.
27
Anything poisonous within 50 feet of you is automatically detected and marked by the image of a small frog that is visible only to you.
A dozen small frogs constantly follow you around, chirping loudly.
28
You gain the benefit of a
Nondetection
spell.
Your appearance changes randomly as determined by the DM, as if you were under the effect of a
Disguise Self
spell.
29
You can cast the
Mage Hand
cantrip at will.
A disembodied spirit follows you around, stealing and scattering coins from you, crumbling your food, and playing with your weapons and gear.
30
You are able to decipher any text.
You lose the ability to speak any language. This has no effect on casting spells with verbal components.
31
You can cast the
Speak with Plants
spell three times.
Your skin turns green, and you must drink a half gallon of fresh water every 4 hours or take 1d4 necrotic damage.
32
You know whether creatures within 15 feet of you are lying, as if you were the center of a
Zone of Truth
spell.
Whenever you would speak falsely, you cannot speak at all.
33
You gain a sense of destiny that directs you toward an important goal, as determined by the DM.
Your head is filled with an unpleasant buzzing that imposes disadvantage on Intelligence checks and saving throws.
34
All creatures you speak with automatically believe your words, as if you have succeeded on a Charisma (Deception or Persuasion) check against them. Any sign of threatening or duplicitous action on your part negates this automatic success.
Your personal tastes reverse, such that your favorite foods, hobbies, music, and so forth become unbearable to you.
35
Your shadow becomes an undead
shadow
that shares your alignment and is under your control.
Your shadow behaves disapprovingly whenever you’re not looking — stealing things, mocking you behind your back, taunting opponents or friends, and so on.
36
Your skin is covered by slime. You automatically succeed on ability checks and saving throws made to escape a grapple.
Your skin is covered by slime. You must succeed on a DC 10 Dexterity saving throw to sit down, open doors, and perform other mundane tasks of the DM’s determination.
37
Flowers turn to face you as you pass them.
Mundane animals can’t look at you.
38
Each time you finish a short rest, you suddenly sprout a covering of fragrant leaves. The leaves fall off after 1d10 minutes, revealing 1d6 magic fruits that can be plucked from your head. Each fruit functions as a berry created with the
Goodberry
spell.
Whenever you stop moving for 10 minutes or more, you discover that your boots or shoes have set down roots that must be pulled free with a successful DC 20 Strength check.
39
Choose a creature you can see. That creature must succeed on a DC 15 Dexterity saving throw or drop one item they are holding (DM’s choice). You can use this property three times.
Each time you roll a 1 on a Dexterity check, you drop one object you are holding (DM’s choice).
40
A group of small forest animals appears and follows you everywhere, singing and dancing. These magical creatures can perform any task you desire that could be performed by a
Prestidigitation
spell.
You break out into song whenever you roll a 1 on any die.
41
Your possessions change their state or appearance at the DM’s determination, giving you hints of potential future events. For example, your sword might become suddenly bloodstained to warn of an upcoming combat encounter, your clothes might become damp to warn of a water-filled pit trap ahead, and so on.
You take a -5 penalty to initiative rolls.
42
Whenever you roll a 1 on a d20, you have advantage on your next d20 roll.
Whenever you roll a 1 on a d20, you have disadvantage on your next d20 roll.
43
Grass, moss, and flowers instantly grow in your footsteps. You are also unaffected by difficult terrain created by plants.
Any harm that befalls a plant you can see (a woodcutter sawing down a tree, a gardener pulling weeds, and so forth) fills you with a sadness that imposes disadvantage on ability checks for 1 minute.
44
You automatically know the direction to the greatest danger within 500 feet of you.
You leave a trail of black footprints that allow anyone to automatically follow you.
45
You can cast the
Detect Thoughts
spell three times.
All creatures within 30 feet of you automatically know your surface thoughts, as if having cast
Detect Thoughts
against you.
46
You can cast the
Misty Spell
spell three times. When you do, you must begin and end your teleportation in an area of shadow.
While in direct sunlight, you have disadvantage on attack rolls as well as on Wisdom (Perception) checks that rely on sight.
47
Creatures cannot gain advantage on attacks made against you as a result of another creature using the Help action.
You have disadvantage on Dexterity (Acrobatics) checks.
48
You have increased lung capacity, increasing your walking speed by 10 feet and letting you hold your breath for twice as long as normal.
Whenever you exert yourself by fighting, running, and so forth, you breathe out intermittent gouts of flame that deal 1d4 fire damage to you.
49
You can cast the
Daylight
spell three times.
An evil undead creature that comes within 30 feet of you for the first time is charmed by you until the end of your next turn.
50
When you touch a copper piece, it transmutes to become two copper pieces. You can duplicate a maximum of 1,000 coins this way.
Food doesn’t satiate you, and you must eat double the amount of food you normally eat to avoid feeling hungry.
51
You shed light like a torch, as if you were the target of a
Light
cantrip.
No one else can take a short rest within 40 feet of you, as everything you say or do seems distracting to them.
52
You can cast the
Divination
spell once.
Whenever you make an Intelligence check or saving throw, you receive a grim vision of the DM’s determination, imposing disadvantage on your next attack roll, ability check, or saving throw.
53
As an action, you can become incorporeal for 10 minutes, allowing you to move through other creatures and objects as if they were difficult terrain. You take 5 (1d10) force damage if you end your turn inside an object. You can use this property once.
Your senses diminish as if the world were faded around you, imposing disadvantage on Wisdom (Perception) checks.
54
While you take a short rest, the area within 50 feet of you takes on the illusory appearance of a beautiful forest glade.
The first time an ally you can see takes damage as a result of failing a saving throw, you take the damage instead of them.
55
As a bonus action, you can choose one creature within 10 feet of you and know one secret about it, as determined by the DM.
The
Remove Curse
,
Lesser Restoration
, and
Greater Restoration
spells have no effect on you.
56
You can predict the weather conditions for the next 24 hours with perfect accuracy.
A rain cloud follows you around, drizzling on you constantly even while indoors.
57
You have telepathy out to a range of 120 feet.
You hear the voices of creatures you can see in your head from time to time (as detailed by the DM), but you have no idea whether what you’re hearing is the truth or not.
58
You can cast
Speak with Animals
at will, but you can use it to communicate only with goats. Any goat you speak with becomes charmed by you for 1 hour.
You become distraught unless your clothing is all the same color, imposing disadvantage on Intelligence, Wisdom, and Charisma checks and saving throws.
59
You have resistance to fire damage.
You gain no benefit from any potion.
60
You have immunity to the charmed and frightened conditions.
You can speak only in a monotone voice, imposing disadvantage on Charisma checks.
61
You and each creature within 10 feet of you have resistance to necrotic damage.
Any Wisdom (Medicine) check you make or that is made to help you is made with disadvantage.
62
The first creature you hit with a weapon attack on each of your turns takes 1d4 fire damage at the start of its next turn.
You are blinded while in bright light, and your shadow takes on a monstrous appearance.
63
No creature can learn your alignment by magical means, and you have advantage on Charisma checks involving creatures that also share your alignment.
You have disadvantage on Charisma checks involving creatures that do not share your alignment.
64
As a bonus action, you cause yourself and a willing ally you can see to swap positions by teleportation.
Whenever you roll a 1 on a d20 roll, you and an ally you can see swap positions by teleportation.
65
As an action, you cause difficult terrain within 50 feet of you to become normal terrain. You can use this property three times.
Each time you move through difficult terrain, your speed is reduced by 10 feet until the end of your next turn.
66
You increase one ability score of your choice by 2. You can increase an ability score above 20 using this property, but the increase is lost when this property ends.
Whenever you roll a 1 on an attack roll, ability check, or saving throw using your highest ability score, you take 1d4 psychic damage.
67
As an action, you learn the direction and distance to the nearest magic item not in the possession of you or any of your allies.
Each creature within 30 feet of you automatically knows which magic items you carry
68
As an action while you are in dim light or darkness, you can become invisible, as if targeted by the
Invisibility
spell. In addition to becoming visible if you attack or cast a spell, you become visible if you move into bright light. You can use this property three times.
While in bright light, you have disadvantage on initiative rolls.
69
You can read and understand all the languages commonly spoken within 1 mile of you, as determined by the DM.
While speaking, you occasionally use nonsense words, imposing disadvantage on Charisma checks.
70
You know one cantrip of the DM’s choice, and can cast one 1st level spell of the DM’s choice at will.
Whenever you cast a spell or use a magic item property that requires an action or a bonus action to activate, roll on the Wild Magic Surge table (see the sorcerer section in chapter 3 of the
Player’s Handbook
) to see what happens.
71
Whenever you roll a 20 on a d20, you can immediately end one effect on you.
Whenever you roll a 1 on a d20, you are blinded until the end of your next turn.
72
Any clothing you wear is covered with a magical map image that shows all the local area you are aware of. This map doesn’t reveal anything you don’t know, but grants advantage on ability checks to find secret doors and to navigate back to where you’ve been.
Any rope you touch transforms into a
poisonous snake
that attacks you.
73
You summon a
slithering tracker
that obeys your commands.
You take on the appearance of having translucent skin, with your bones and organs slightly visible within.
74
You have a fresh-scrubbed appearance, and a sweet perfume surrounds you. You have advantage on Charisma (Persuasion) checks.
Whenever you fail a Charisma (Persuasion) check, the subject of the check becomes irrationally resentful of you, seeking to undermine you in ways determined by the DM.
75
You can cast the
Control Weather
spell.
Each time you deal or take cold damage or fire damage, you must succeed on a DC 10 Charisma saving throw or accidentally summon a hostile
air elemental
or
fire elemental
(depending on the damage dealt).
76
A tiny construct resembling a gynosphinx follows you around. It can truthfully answer up to ten yes-or-no questions regarding the campaign, at the DM’s discretion.
A tiny construct resembling a gynosphinx follows you around. It constantly asks unsolvable riddles of other creatures, and insults those creatures when they fail to answer correctly.
77
A creature appears next to you that is a hybrid of any two nonmagical beasts (akin to the owlbear). The creature serves you as if created by a
Conjure Animals
spell. The DM determines the creature’s statistics.
A creature appears next to you that is a hybrid of any two nonmagical beasts (akin to the owlbear). Unless you succeed on a DC 12 Wisdom (Animal Handling) check, the creature attacks you before wandering off. The DM determines the creature’s statistics.
78
You can cast the
Teleport
spell, always arriving on target when you do. You can use this property once.
Each time you walk through a doorway or similar portal, you must succeed on a DC 10 Intelligence check or step into a skewed timeline. On a failure, you and all allies within 10 feet of you skip ahead 1d4 minutes. To other creatures, it appears that you and other affected creatures disappear for that length of time, then appear again in the doorway.
79
You can cast the
Haste
spell on yourself. You can use this property three times.
Each time you are reduced to 0 hit points then stabilized, you suffer the effect of a
Slow
spell.
80
You do not need to breathe and cease to do so, making you immune to inhaled poisons and suffocation.
Whenever you speak (including casting a spell with a verbal component), you must first use a bonus action to breathe.
81
Your blood is venomous, granting you immunity to poison and to the poisoned condition. You can cast the
Speak with Animals
spell at will, but you can use it to communicate only with snakes.
Your tongue is long and forked, causing you to speak in a hiss. You have disadvantage on Charisma checks involving speech, and you must succeed on a DC 15 Constitution check to cast a spell with a verbal component.
82
You grow gills and have the ability to breathe air and water. You also sprout a pair of tentacles from your shoulders that have a reach of 10 feet and can be used to perform any action you could perform with your hands. The tentacles cannot attack or grapple.
You are constantly followed by 1d4
octopuses
that can breathe air and water, and which have a walking speed of 30 feet. Each time combat breaks out, you must succeed on a DC 13 Wisdom (Animal Handling) check or have the octopuses panic and attack you.
83
You can cast the
Misty Step
spell three times. When you do, you must begin and end your teleportation in an area of fire. Any fire damage you take during the same turn in which you use
Misty Step
is restored automatically at the end of your turn.
Whenever you start your turn within 30 feet of an ongoing fire effect, you must succeed on a DC 13 Wisdom saving throw or move toward the fire and into it if possible.
84
When you look at the sky, you see it overlaid with navigational symbols. You have advantage on ability checks made to avoid becoming lost while outdoors.
You have disadvantage on Wisdom (Perception) checks while indoors.
85
You can cast the
Healing Word
spell three times.
Undead are drawn to you, making it impossible for you to hide from them. Each undead creature you face in combat has advantage on its first attack roll against you.
86
Any food you touch is transformed into a culinary delight. You have advantage on Charisma checks while interacting with any creatures that have eaten of this food.
You constantly hear distracting music that throws off your timing, imposing disadvantage on initiative rolls and Dexterity checks.
87
Your mind is filled with lost facts and lore, granting advantage on Intelligence checks.
You forget your name, and must be constantly reminded of it by your allies.
88
Your touch can change small nonmagical objects into chocolate.
Anything you eat or drink makes you feel overly sated and full, imposing disadvantage on Strength checks for 1 hour.
89
Each time you finish a short rest, you regain 1d8 hit points. Each creature that took a short rest with you and remained within 30 feet of you for the duration also gains this benefit.
Each time you finish a short rest, you take 3d8 psychic damage. At your determination, you can transfer some or all of this damage to any creatures that took a short rest with you and remained within 30 feet of you for the duration.
90
Each time you finish a short rest, you find 1d10 small gems worth 10 gp each in your possession.
Whenever you spend coins or gems, any character you give them to becomes convinced that the wealth was stolen from them.
91
When you hit a creature for the first time during an encounter, its Armor Class is reduced by 1.
Whenever you roll a 1 on a weapon attack roll, the weapon shatters like glass. The weapon magically reforms in 1d4 rounds.
92
Each time you enter a settlement, you are treated as though you are known there and a friend, even if you are neither.
Each time you roll a 1 on an attack roll, ability check, or saving throw, you grow one inch taller. Your clothing and armor does not grow with you.
93
While standing in a doorway, you can cast the
Teleport
spell. Your destination must be another doorway you know. You can use this property once.
Each time you finish a short rest, you forget one of your allies (of the DM’s choice) and no longer trust that character. You lose this distrust at the end of your next short rest.
94
As an action, you cause a swirling storm of rocks and dust to surround you in a 10-foot radius for 1 minute. Each creature hostile to you that enters the area must succeed on a DC 12 Constitution saving throw or take 1d6 bludgeoning damage and be blinded for 1 round. You can use this property three times.
Fire elementals, water elementals, and other creatures of fire and water (as determined by the DM) regard you as their enemy, and focus their attacks against you to the exclusion of all else.
95
As an action, you learn the names of every humanoid creature within 30 feet of you.
Whenever you roll a 1 on a Strength or Dexterity check that incorporates touching an object, you stick to that object for 1 minute. It takes a successful DC 20 Strength check to free yourself.
96
You can cast the
Modify Memory
spell once.
Whenever you make an Intelligence check or saving throw, you must succeed on a DC 13 Charisma saving throw or lose all your memories of the past hour.
97
You can ignore the verbal component of any spell you cast.
You must shout the verbal component of any spell you cast.
98
As an action, you conjure a mindless, shapeless force that is your exact duplicate. You control this force as if it were the product of an
Unseen Servant
spell, except that it is visible.
Each time you see your own reflection, you must succeed on a DC 12 Charisma saving throw. On a failure, you treat your allies as enemies and vice versa for 1 minute, attacking the wrong targets, betraying your companions in social situations, and so forth. You can repeat the saving throw at the end of each of your turns, ending the effect on a success.
99
As an action, you can replace one of your hands with any nonmagical weapon, tool, or piece of adventuring equipment of reasonable size (as determined by the DM).
Your hands feel unnaturally large, imposing disadvantage on Dexterity (Sleight of Hand) checks and Dexterity checks using thieves’ tools or artisan’s tools. The first weapon attack roll you make in any encounter is made with disadvantage.
00
All creatures of a particular type other than humanoid (as chosen by the DM) are incapable of acting hostile toward you as long as you do not attack, threaten, or provoke them.
Whenever you meet a creature of a particular type other than humanoid (as chosen by the DM), there is a 1 percent cumulative chance that the
tarrasque
is magically summoned within 1 mile of you. The tarrasque has no knowledge of your existence. It runs amok for 1d6 × 10 minutes, then magically returns to its previous location.`,
    },
    {
      name: "Wand of Orcus",
      rarity: "Artifact",
      itemType: "Wand",
      attunment: true,
      price: 10000,
      description: `The ghastly
Wand of Orcus
rarely leaves Orcus's side. The device, as evil as its creator, shares the demon lord's aims to snuff out the lives of all living things and bind the Material Plane in the stasis of undeath. Orcus allows the wand to slip from his grasp from time to time. When it does, it magically appears wherever its master senses an opportunity to achieve some fell goal.
Made from bones as hard as iron, the wand is topped with a magically enlarged skull that once belonged to a human hero slain by Orcus. The wand can magically change in size to better conform to the grip of its user. Plants wither, drinks spoil, flesh rots, and vermin thrive in the wand's presence.
Any creature besides Orcus that tries to attune to the wand must make a DC 17 Constitution saving throw. On a successful save, the creature takes 10d6 necrotic damage. On a failed save, the creature dies and rises as a zombie.
In the hands of one who is attuned to it, the wand can be wielded as a magic mace that grants a + 3 bonus to attack and damage rolls made with it. The wand deals an extra 2d12 necrotic damage on a hit.
Random Properties.
The
Wand of Orcus
has the following random properties:
2 minor beneficial properties
1 major beneficial property
2 minor detrimental properties
1 major detrimental property
The detrimental properties of the
Wand of Orcus
are suppressed while the wand is attuned to Orcus himself.
Protection.
You gain a +3 bonus to Armor Class while holding the wand.
Spells.
The wand has 7 charges. While holding it, you can use an action and expend 1 or more of its charges to cast one of the following spells (save DC 18) from it:
Animate Dead
(1 charge),
Blight
(2 charges),
Circle of Death
(3 charges),
Finger of Death
(3 charges),
Power Word Kill
(4 charges), or
Speak with Dead
(1 charge). The wand regains 1d4 + 3 expended charges daily at dawn.
While attuned to the wand, Orcus or a follower blessed by him can cast each of the wand's spells using 2 fewer charges (minimum of 0).
Call Undead.
While you are holding the wand, you can use an action to conjure skeletons and zombies, calling forth as many of them as you can divide 500 hit points among, each undead having average hit points (see the
Monster Manual
for statistics). The undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of you and obey your commands until they are destroyed or until dawn of the next day, when they collapse into inanimate piles of bones and rotting corpses. Once you use this property of the wand, you can't use it again until the next dawn.
While attuned to the wand, Orcus can summon any kind of undead, not just skeletons and zombies. The undead don't perish or disappear at dawn the following day, remaining until Orcus dismisses them.
Sentience.
The
Wand of Orcus
is a sentient, chaotic evil item with an Intelligence of 16, a Wisdom of 12, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet.
The wand communicates telepathically with its wielder and can speak, read, and understand Abyssal and Common.
Personality.
The wand's purpose is to help satisfy Orcus's desire to slay everything in the multiverse. The wand is cold, cruel, nihilistic, and bereft of humor.
In order to further its master's goals, the wand feigns devotion to its current user and makes grandiose promises that it has no intention of fulfilling, such as vowing to help its user overthrow Orcus.
Destroying the Wand.
Destroying the
Wand of Orcus
requires that it be taken to the Positive Energy Plane by the ancient hero whose skull surmounts it. For this to happen, the long-lost hero must first be restored to life - no easy task, given the fact that Orcus has imprisoned the hero's soul and keeps it hidden and well guarded.
Bathing the wand in positive energy causes it to crack and explode, but unless the above conditions are met, the wand instantly reforms on Orcus's layer of the Abyss.`,
    },
    {
      name: "Will of the Talon",
      rarity: "Artifact",
      itemType: "Weapon",
      attunment: true,
      price: 10000,
      description: `Black, blue, green, red, and white gems carved in the form of dragon heads cover this ostentatious gold war pick, marking it as a weapon channeling the power of Tiamat.
Sentience.
Will of the Talon
is a sentient lawful evil weapon with an Intelligence of 14, a Wisdom of 15, and a Charisma of 19. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Common, Draconic, and Infernal.
Personality.
A short-tempered bone devil named Ashtyrlon lives within
Will of the Talon
. The weapon is greedy and values strong leadership. It demands that its wielder take decisive action to keep order in high-pressure situations — and to always take a fair share of treasure in return.
Dormant.
The war pick grants the following benefits in its dormant state:
You can speak, read, and write Draconic and Infernal.
You gain a +1 bonus to attack and damage rolls made with this magic weapon.
As a bonus action while holding the war pick, you can cause the following effect: each creature of your choice that is within 30 feet of you and is aware of you must succeed on a DC 13 Wisdom saving throw or become frightened of you for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to your Frightful Presence for the next 24 hours. This property can't be used again until the next dawn.
While holding the war pick, you can use your action to exhale destructive energy. Pick a damage type from the Will of the Talon Breath Weapons table. Each creature in the area of the exhalation must make a DC 13 saving throw, the type of which is specified in the table. A creature takes 3d6 damage on a failed save, or half as much damage on a successful one.
When you use the war pick to unleash a breath weapon of a specific damage type, you can't choose that same damage type again until the next dawn.
Will of the Talon Breath Weapons
Damage Type
Area
Saving Throw
Acid
5 ft. wide, 30 ft. long line
Dexterity
Cold
15 ft. cone
Constitution
Fire
15 ft. cone
Dexterity
Lightning
5 ft. wide, 30 ft. long line
Dexterity
Poison
15 ft. cone
Constitution
Awakened.
When the war pick reaches an awakened state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +2.
The saving throw DC for the war pick's Breath Weapon property increases to 15, and that property deals 4d6 damage on a failed save, or half as much damage on a successful one.
The saving throw DC for the war pick's Frightful Presence property increases to 15.
While carrying the weapon, you have resistance to acid, cold, fire, lightning, and poison damage.
Exalted.
When the war pick reaches an exalted state, it gains the following properties:
The weapon's bonus to attack and damage rolls increases to +3.
The saving throw DC for the war pick's Breath Weapon property increases to 17, and that property deals 5d6 damage on a failed save, or half as much damage on a successful one.
The saving throw DC for the war pick's Frightful Presence property increases to 17.`,
    },
    {
      name: "Wyrmskull Throne",
      rarity: "Artifact",
      itemType: "Wondrous Item",
      attunment: false,
      price: 10000,
      description: `Built by dwarven gods and entrusted to the rulers of Shanatar, an ancient dwarven empire, the
Wyrmskull Throne
was a symbol of dwarven power and pride for ages untold. The throne hovers a foot off the ground and is a massive thing made of polished obsidian with oversized feet — the impaled skulls of four ancient blue dragons. Runes glisten in the carved obsidian, winking to life with blue energy when the throne's powers are activated.
After the fall of Shanatar, the
Wyrmskull Throne
fell into the clutches of less honorable creatures. A band of adventurers wrested the throne from the aquatic elf tyrant Gantar Kraok and sold it to the storm giant Neri for a considerable fortune. Neri had the throne magically enlarged and gave it to her husband, King Hekaton, as a gift, along with one of the Ruling Scepters of Shanatar, which she had found in a wreck at the bottom of the Trackless Sea. Only a creature attuned to a Ruling Scepter and in possession of it can harness the powers of the
Wyrmskull Throne
, which has become the centerpiece of King Hekaton's throne room in the undersea citadel of Maelstrom. Fear of the throne's power has helped prevent evil giants from challenging or threatening Hekaton's leadership.
Any creature not attuned to a Ruling Scepter who sits on the throne is paralyzed and encased in a magical force field. While encased, the creature can't be touched or moved from the throne. Touching a Ruling Scepter to the force field dispels the field, though the creature remains paralyzed until it is separated from the throne.
Any creature seated on the throne can hear faint whispers in Draconic — the whisperings of the four blue dragons whose skulls adorn the throne. Although powerless, these spirits try to influence the decisions of the throne's master.
Properties of the Throne.
The throne has 9 charges and regains all expended charges daily at dawn. A creature that sits on the throne while attuned to a Ruling Scepter in its possession can harness the throne's properties, which are as follows:
The throne gains a flying speed of 30 feet and can hover and flies where the creature wills. This property doesn't expend any charges.
Both the throne and the creature sitting on it can move through earth and stone without disturbing the material they move through. This property doesn't expend any charges.
As an action, the creature can expend 1 charge to cast
Lightning Bolt
(spell save DC 19) from the throne. The spell is cast as though using a 9th-level spell slot and deals 49 (14d6) lightning damage. The bolt discharges from the mouth of one of the throne's blue dragon skulls.
As an action, the creature can expend 2 charges to cast the
Globe of Invulnerability
spell from the throne. The globe encloses both the creature and the throne.
As an action, the creature can expend 3 charges to create a spectral image of an ancient blue dragon that surrounds both it and the throne. The spectral dragon lasts for 1 minute. At the end of each of the creature's turns, the spectral dragon makes one bite attack and two claw attacks against targets of the creature's choice. These attacks have the same attack bonus, reach, and damage as an ancient blue dragon's bite and claw attacks.
Destroying the Throne.
The
Wyrmskull Throne
can be destroyed by breaking at least five Ruling Scepters of Shanatar simultaneously on it. This fact has never been recorded or sung of among the dwarves or any bards or storytellers, and it can't be discovered with an ability check. Characters who want to destroy the throne must go on a quest to learn the method for doing so. The throne's destruction triggers an explosion, as shards of obsidian fly out in all directions. Each creature and object within a 30-foot-radius sphere centered on the throne must succeed on a DC 21 Dexterity saving throw, taking 70 (20d6) slashing damage on a failed save, or half as much damage on a successful one.`,
    }
  ],
};
