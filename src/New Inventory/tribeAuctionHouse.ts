import { Tribe } from "../types";

export const tribeAuctionHouse: Tribe = {
  name: "A White Star Shop",
  percentAngry: 10,
  priceVariability: 30,
  insults: [
    "We truly apologize for any disappointment, but we had to withdraw the item as it did not meet our quality standards. We would love to guide you toward our other selections that might be perfect for you.",
    "We're really sorry to inform you that this piece was found to be too volatile for public presentation. Your safety is our priority, and we have removed it from display.",
    "We regret to inform you that this item contained unpredictable enchantments. As a precaution, we've taken it off display. We encourage you to explore our safer alternatives, which we believe you will enjoy.",
    "Our shop owners made the difficult decision to recall the item after discovering structural flaws in its enchantment. While you search for something special, we invite you to enjoy our reliable offerings.",
    "We regret to inform you that your request was declined due to a failed appraisal, as the item's properties were found to be unstable. For your peace of mind, we recommend browsing items with verified integrity.",
    "Unfortunately, the artifact had to be removed because it exhibited hazardous magical behavior. To ease your search, we provide a minor healing potion (Heal 3d4) as you explore our safer alternatives.",
    "We're sorry to share that this selection emitted an unexpected magical surge and has been placed in containment for safety. We hope one of our other fine items will meet your needs.",
    "While this item once showed great promise, it failed final curation and has been quietly retired. Please browse our authenticated pieces instead; we are here to help you find something you love.",
    "We apologize for any inconvenience, but due to a recent mishap involving this item, it is no longer eligible for auction. Our team is happy to recommend items with confirmed safety ratings.",
    "This piece was unfortunately retired from auction because it exceeded acceptable thresholds for magical instability. We greatly appreciate your understanding and invite you to explore our approved inventory.",
    "We regret to inform you that the item showed signs of residual curse activity during testing. For your wellbeing, it has been temporarily withheld from public access.",
    "We had to withdraw this item after discovering it no longer functioned as originally described. We sincerely invite you to explore our more dependable treasures.",
    "We understand your interest, but that entry displayed excessive aggression during handling simulations. For now, it will remain secured off-site for safety. We have other calm options available that we think you'll like.",
    "After a careful review, our appraisers found that the item was ethically questionable, and we had to remove it from consideration. We're here to help you find something more suitable to your needs.",
    "We are truly sorry, but your request has been denied because the item did not pass our authenticity inspection. In light of this, we'd like to offer you a minor healing potion (Heal 3d4) and our sincerest apologies.",
    "We regret to inform you that the item was found to be a counterfeit and has been removed from our auction. We appreciate your understanding and would love to assist you in finding something genuine.",
],
  items: [
    {
      name: "Apparatus of Kwalish",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.
The apparatus of Kwalish is a Large object with the following statistics:
Armor Class: 20
Hit Points: 200
Speed: 30 ft., swim 30 ft., (or 0 ft. for both if the legs and tail aren't extended)
Damage Immunities: poison, psychic
To be used as a vehicle, the apparatus requires one pilot. While the apparatus's hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.
The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.
A creature in the compartment can use an action to move as many as two of the apparatus's levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of Kwalish Levers table.
Apparatus of Kwalish Levers        
Lever | Up | Down
1 | Legs and tail extend, allowing the apparatus to walk and swim. | Legs and tail retract, reducing the apparatus's speed to 0 and making it unable to benefit from bonuses to speed.
2 | Forward window shutter opens. | Forward window shutter closes.
3 | Side window shutters open (two per side). | Side window shutters close (two per side).
4 | Two claws extend from the front sides of the apparatus. | The claws retract.
5 | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: 7 (2d6) bludgeoning damage. | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: The target is grappled (escape DC 15).
6 | The apparatus walks or swims forward. | The apparatus walks or swims backward.
7 | The apparatus turns 90 degrees left. | The apparatus turns 90 degrees right.
8 | Eyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet. | The light turns off.
9 | The apparatus sinks as much as 20 feet in liquid. | The apparatus rises up to 20 feet in liquid.
10 | The rear hatch unseals and opens. | The rear hatch closes and seals.`,
    },
    {
      name: "Armor, +3",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: false,
      price: 5000,
      description: "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity (This is a +3 item)",
    },
    {
      name: "Armor of Invulnerability",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn.",
    },
    {
      name: "Azuredge",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Forged by the archwizard Ahghairon, this intelligent battleaxe was crafted to defend Waterdeep. Its current wielder is a former member of Force Grey named Meloon Wardragon, but the weapon is searching for a new owner.
Azuredge has a solid steel handle etched with tiny runes, wrapped in blue dragon hide with a star sapphire set into the pommel. The axe head is forged from silver, electrum, and steel alloys whose edges constantly shimmer with a deep blue luminescence.
You gain a +3 bonus to attack and damage rolls made with this magic weapon. The Shield spell provides no defense against the axe, which passes through that spell's barrier of magical force.
When you hit a fiend or an undead with the axe, cold blue flames erupt from its blade and deal an extra 2d6 radiant damage to the target.
Hurling. The battleaxe has 3 charges. You can expend 1 charge and make a ranged attack with the axe, hurling it as if it had the thrown property with a normal range of 60 feet and a long range of 180 feet. Whether it hits or misses, the axe flies back to you at the end of the current turn, landing in your open hand or al your feet in your space (as you choose). The axe regains all expended charges daily at dawn.
Illumination. While holding the axe, you can use an action to cause the axe to glow blue or to quench the glow. This glow sheds bright light in a 30-foot radius and dim light for an additional 30 feet.
Sentience. Azuredge is a sentient lawful neutral weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Common. It has a calm, delicate voice. The weapon can sense the presence of non-lawful creatures within 120 feet of it.
Personality. Azuredge is sworn to protect Waterdeep, and it desires to be wielded by a law-abiding person willing to dedicate everything to the city's defense. The weapon is patient and takes its time finding its ideal wielder.
If someone tries to use Azuredge against its will, the axe can become ten times heavier than normal, and can magically adhere to any Medium or larger object or surface it comes into contact with. Once it does so, the axe can't be wielded. Nothing short of a Wish spell can separate the axe from the item or surface to which it is adhered without destroying one or the other, though the axe can choose to end the effect at any time.`,
    },
    {
      name: "Belashyrra's Beholder Crown",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This symbiotic crown is carved from dark purple and mauve stone, with ten points like stalks set with gemstones resembling the eyestalks of a beholder. To attune to this item, you must wear it on your head for the entire attunement period, during which the crown's hidden tendrils burrow into your scalp to bond with your skull.
While wearing the crown, you can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.
Spells. The crown has 10 charges. While wearing it, you can use an action to expend some of its charges to cast one of the following spells from it (spell save DC 16): Charm Person (1 charge), Disintegrate (6 charges), Fear (3 charges), Finger of Death (7 charges), Flesh to Stone (6 charges), Hold Person (2 charges), Ray of Enfeeblement (2 charges), Sleep (1 charge), Slow (3 charges), Telekinesis (5 charges).
The crown regains 1d6 + 3 expended charges daily at dawn.
Symbiotic Nature. The crown can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the crown ends, and it detaches from you.
The daelkyr Belashyrra made these crowns. While on the same plane of existence as the crown, Belashyrra can see through its eyestalks.`,
    },
    {
      name: "Belt of Giant Strength",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no effect on you.
Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The Belt of Stone Giant Strength and the Belt of Frost Giant Strength look different, but they have the same effect.
Type | Strength | Rarity
Cloud Giant | 27 | Legendary
Storm Giant | 29 | Legendary`,
    },
    {
      name: "Black Crystal Tablet",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Any creature that attunes to the tablet must make a DC 20 Wisdom saving throw at the end of its next long rest. On a failed save, the creature becomes afflicted with a random form of long-term madness (see "Madness" in chapter 8 of the Dungeon Master's Guide).
As an action, a creature attuned to the Black Crystal Tablet can use it to cast Eyebite or Gate (the portal created by this spell links to the Far Realm only). After the tablet is used to cast a spell, it cannot be used again until the next dawn.`,
    },
    {
      name: "Blackrazor",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Hidden in the dungeon of White Plume Mountain, Blackrazor shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.
You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the following additional properties.
Devour Soul. Whenever you use it to reduce a creature to 0 hit points, the sword slays the creature and devours its soul, unless it is a construct or an undead. A creature whose soul has been devoured by Blackrazor can be restored to life only by a Wish spell.
When it devours a soul, Blackrazor grants you temporary hit points equal to the slain creature's hit point maximum. These hit points fade after 24 hours. As long as these temporary hit points last and you keep Blackrazor in hand, you have advantage on attack rolls, saving throws, and ability checks.
If you hit an undead with this weapon, you take 1d10 necrotic damage and the target regains 1d10 hit points. If this necrotic damage reduces you to 0 hit points, Blackrazor devours your soul.
Soul Hunter. While you hold the weapon. you are aware of the presence of Tiny or larger creatures within 60 feet of you that aren't constructs or undead. You also can't be charmed or frightened.
Blackrazor can cast the Haste spell on you once per day. It decides when to cast the spell and maintains concentration on it so that you don't have to.
Sentience. Blackrazor is a sentient chaotic neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and darkvision out to a range of 120 feet.
The weapon can speak, read, and understand Common, and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, Blackrazor also understands every language you know.
Personality. Blackrazor speaks with an imperious tone, as though accustomed to being obeyed. The sword's purpose is to consume souls. It doesn't care whose souls it eats, including the wielder's. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. Blackrazor is meant to hurry that process along.
Despite its nihilism, Blackrazor feels a strange kinship to Wave and Whelm, two other weapons locked away under White Plume Mountain. It wants the three weapons to be united again and wielded together in combat, even though it violently disagrees with Whelm and finds Wave tedious.
Blackrazor's hunger for souls must be regularly fed. If the sword goes three days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.`,
    },
    {
      name: "Blackstaff",
      rarity: "Legendary",
      itemType: "Staff",
      attunment: true,
      price: 5000,
      description: `The Blackstaff is a sentient, rune-carved staff set with thin silver veins. It is the symbol of office for the Blackstaff, the highest ranking wizard in Waterdeep. As the rightful owner of the Blackstaff, Vajra Safahr is the only one who can become attuned to it. The staff can, however, choose a new owner (see "Personality" below).
The Blackstaff has the magical properties of a staff of power in addition to the following properties.
Animate Walking Statues. You can expend 1 or more of the staff's charges as an action to animate or deactivate one or more of the walking statues of Waterdeep. You must be in the city to use this property, and you can animate or deactivate one statue for each charge expended. An animated statue obeys the telepathic commands of Khelben Arunsun's spirit, which is trapped inside the staff (see "Personality" below). A walking statue becomes inanimate if deactivated or if the staff is broken.
Dispel Magic. You can expend 1 of the staff's charges as a bonus action to cast dispel magic on a creature, an object, or a magical effect that you touch with the tip of the staff. If the target is an unwilling creature or an object in the possession of such a creature, you must hit the creature with a melee attack using the Blackstaff before you can expend the charge to cast the spell.
Drain Magic. This property affects only creatures that use spell slots. When you hit such a creature with a melee attack using the Blackstaff, you can expend 1 of the staff's charges as a bonus action, causing the target to expend one spell slot of the highest spell level it can cast without casting a spell. If the target has already expended all its spell slots, nothing happens. Spell slots that are expended in this fashion are regained when the target finishes a long rest, as normal.
Master of Enchantment. When you cast an enchantment spell of 1st level or higher while holding the staff, you can make an Intelligence (Arcana) check with a DC of 10 + the level of the spell. If the check succeeds, you cast the spell without expending a spell slot.
Sentience. The Blackstaff is a sentient staff of neutral alignment, with an Intelligence of 22, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet, and it can communicate telepathically with any creature that is holding it.
Personality. The staff has the spirits of all previous Blackstaffs trapped within it. Its creator, Khelben Arunsun, is the dominant personality among them. Like Khelben, the staff is extremely devious and manipulative. It prefers to counsel its owner without exerting outright control. The staff's primary goal is to protect Waterdeep and its Open Lord, currently Laeral Silverhand. Its secondary goal is to help its wielder become more powerful.
In the event that the holder of the office of the Blackstaff no longer serves the staff's wishes, the staff ceases to function until it finds a worthy inheritor—someone whose loyalty to Waterdeep is beyond reproach.
Spirit Trap. When the Blackstaff dies, the spirit of that individual becomes trapped in the staff along with the spirits of the previous Blackstaffs. (A Blackstaff whose spirit is trapped in the staff can't be raised from the dead.)
Destroying the staff would release the spirits trapped inside it, but in that event, Khelben's spirit can lodge itself inside any one piece of the staff that remains. The piece containing Khelben's spirit has the staff's Sentience property but none of its other properties. As long as this piece of the staff exists, Khelben's spirit can make the staff whole again whenever he wishes. When the staff is remade, the spirits of the previous Blackstaffs become trapped inside it again.`,
    },
    {
      name: "Blood Fury Tattoo",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Produced by a special needle, this magic tattoo evokes fury in its form and colors.
Tattoo Attunement.
To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.
If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.
Bloodthirsty Strikes.
The tattoo has 10 charges, and it regains all expended charges daily at dawn. While this tattoo is on your skin, you gain the following benefits:
When you hit a creature with a weapon attack, you can expend a charge to deal an extra 4d6 necrotic damage to the target, and you regain a number of hit points equal to the necrotic damage dealt.
When a creature you can see damages you, you can expend a charge and use your reaction to make a melee attack against that creature, with advantage on your attack roll.`,
    },
    {
      name: "Bookmark",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This +3 dagger belongs to Artus Cimber. While you have the dagger drawn, you can use a bonus action to activate one of the following properties:
Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.
Turn the dagger into a compass that, while resting on your palm, points north.
Cast
Dimension Door
from the dagger. Once this property is used, it can't be used again until the next dawn.
Cast
Compulsion
(save DC 15) from the dagger. The range of the spell increases to 90 feet, but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.`,
    },
    {
      name: "Cloak of Invisibility",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action.
Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours, the cloak goes unused, it regains 1 hour of duration.`,
    },
    {
      name: "Crystal Ball",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The typical
crystal ball
, a very rare item, is about 6 inches in diameter. While touching it, you can cast the
Scrying
spell (save DC 17) with it.
The following
crystal ball
variants are legendary items and have additional properties.
Crystal Ball of Mind Reading.
You can use an action to cast the
Detect Thoughts
spell (save DC 17) while you are scrying with the crystal ball, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this
Detect Thoughts
to maintain it during its duration, but it ends if scrying ends.
Crystal Ball of Telepathy.
While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell's sensor. You can also use an action to cast the
Suggestion
spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this
Suggestion
to maintain it during its duration, but it ends if scrying ends. Once used, the
Suggestion
power of the
crystal ball
can't be used again until the next dawn.
Crystal Ball of True Seeing.
While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.`,
    },
    {
      name: "Cubic Gate",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the DM.
You can use an action to press one side of the cube to cast the
Gate
spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the
Plane Shift
spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.
The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.`,
    },
    {
      name: "Danoth's Visor",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `These mithral-frame goggles with clear diamond lenses were used by the evoker Danoth Oro to spot invisible enemies and scout areas from afar.
Dormant.
While wearing the goggles in their dormant state, you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet. Additionally, you have advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight.
Awakened.
When
Danoth's Visor
reaches an awakened state, it gains the following properties:
You see invisible creatures and objects within 60 feet of you as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.
As a bonus action, you can speak a command word and use the goggles to see into and through solid matter. This vision has a radius of 60 feet and lasts for 1 minute. To you, solid objects within that radius appear transparent. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead. This property can't be used again until the next dawn.
As a bonus action, you can speak a command word to switch the goggles into spyglass mode. While in this mode, creatures and objects viewed through the goggles are magnified to twice their size. Speaking the command word again reverts the goggles to their normal operation.
Exalted.
When Danoth's Visor reaches an exalted state, it gains the following properties:
You automatically detect illusions you can see and automatically succeed on saving throws against them. In addition, you see a bright aura around any creature that isn't in its true form.
As an action, you can cast the
Antimagic Field
spell from the visor. This property can't be used again until the next dawn.`,
    },
    {
      name: "Dawnbringer",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Lost for ages in the Underdark,
Dawnbringer
appears to be a gilded longsword hilt. While grasping the hilt, you can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear.
Dawnbringer
has all the properties of a
Sun Blade
.
While holding the weapon, you can use an action to touch a creature with the blade and cast
Lesser Restoration
on that creature. Once used, this ability can't be used again until the next dawn.
Sentience.
Dawnbringer
is a sentient neutral good weapon with an Intelligence of 12, a wisdom of 15, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.
The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while you're attuned to it.
Personality.
Forged by ancient sun worshippers,
Dawnbringer
is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies.
Long years lost in darkness have made
Dawnbringer
frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time.`,
    },
    {
      name: "Deck Of Many More Things",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `Over the centuries since the first Deck of Many Things was created, many have sought and failed to replicate it. But some have created new cards. These forty-four additional cards are known collectively as the Deck of Many More Things.
Like the Deck of Many Things, the Deck of Many More Things manifests differently on various worlds. While it can include fewer or different cards, it frequently appears with a Deck of Many Things as part of a combined deck of sixty-six illuminated cards. The combined deck is usually protected by a box or pouch. The forty-four cards of the Deck of Many More Things bear similar imagery to those in the Deck of Many Things and have potent magical effects, which are detailed later in this description. Notably, cards from the Deck of Many More Things are more likely to be beneficial, though about a third of them are still dangerous.
Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Unless a card allows you to draw additional cards, any cards drawn exceeding this number have no effect.
As soon as you draw a card, its magic takes effect. You must draw each card you declared no more than 1 hour after the previous draw. Unless a card states otherwise, if you fail to draw the chosen number, the remaining number of cards fly from the deck and take effect simultaneously.
Unless it is the Fool or the Jester card, a drawn card immediately takes effect, fades from existence, and reappears in the deck, making it possible to draw the same card multiple times.
The DM can use the physical cards provided in The Deck of Many Things card set to build a combined Deck of Many Things and Deck of Many More Things, including whichever cards they desire. Alternatively, roll on the Deck of Many More Things table below to randomly determine what cards are drawn.
The Deck of Many More Things
d100
Card
01
Aberration
02
Balance*
03
Beast
04
Book
05
Bridge
06
Campfire
07
Cavern
08
Celestial
09
Comet*
10
Construct
11
Corpse
12
Crossroads
13
Donjon*
14
Door
15
Dragon
16
Elemental
17
Euryale*
18
Expert
19
Fates*
20
Fey
21
Fiend
22
Flames*
23
Fool*
24
Gem*
25
Giant
26
Humanoid
27
Jester*
28
Key*
29
Knight*
30
Lance
31
Mage
32
Map
33
Maze
34
Mine
35
Monstrosity
36
Moon*
37
Ooze
38
Path
39
Pit
40
Plant
41
Priest
42
Prisoner
43
Puzzle*
44
Ring
45
Rogue*
46
Ruin*
47
Sage*
48
Shield
49
Ship
50
Skull*
51
Staff
52
Stairway
53
Star*
54
Statue
55
Sun*
56
Talons*
57
Tavern
58
Temple
59
Throne*
60
Tomb
61
Tower
62
Tree
63
Undead
64
Void*
65
Warrior
66
Well
67-00
Roll Again
*Found in the Deck of Many Things as depicted in the
Dungeon Master’s Guide
Aberration.
You gain telepathy within a range of 90 feet.
Balance*.
Your mind suffers a wrenching alteration, causing your alignment to change. Lawful become chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.
Beast.
You immediately transform into a random Beast with a CR of 5 or lower. Your game statistics—including your ability scores, hit points, and possible actions—are replaced by the Beast’s game statistics, and any nonmagical equipment you’re wearing or carrying melds into your new form and can’t be used. Any magic items you’re carrying drop in an unoccupied space within 5 feet of your new form.
You remain transformed in this way for 2d12 days; nothing can alter your form while you’re under the effects of this card, but the
Wish
spell can end the transformation early. When you revert to your normal form, you return to the same state you were in when you initially transformed.
Book.
You gain the ability to speak, read, and write 1d6 + 2 languages of your choice.
Bridge.
You gain the ability to cast the
Time Stop
spell 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).
Campfire.
You immediately gain the benefits of finishing a long rest.
Cavern.
You gain a climbing speed equal to your walking speed. You also gain the ability to move up, down, across vertical surfaces, and along ceilings, while leaving your hands free.
Celestial.
You sprout a pair of softly luminescent, feathered wings from your back and gain a flying speed of 30 feet.
Comet*.
If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.
Construct.
A homunculus appears in an unoccupied space within 5 feet of you. The appearance of the homunculus is determined by the DM, and the homunculus treats you as its creator.
Corpse.
You immediately drop to 0 hit points, have the unconscious condition, and must begin making death saving throws. Spells and other magical effects that restore hit points have no effect on you until you are stabilized. If you fail three death saving throws, you die and can be resurrected only by the
Wish
spell.
Crossroads.
Roll a d20. If the roll is even, you age 1d10 years. If the roll is odd, you become younger by 1d10 years, to a minimum of 1 year. This effect can be undone only by the
Wish
spell, divine intervention, or similar magic.
Donjon*.
You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a
Wish
spell can reveal the location of your prison. You draw no more cards.
Door.
You gain the ability to cast the
Gate
spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).
Dragon.
A dragon egg appears at your feet and immediately hatches into a dragon wyrmling. The type of dragon is chosen by the DM. The wyrmling views you as its parent and is staunchly loyal to you and your allies.
Elemental.
You become immune to one of the following damage types (choose immediately upon drawing this card): acid, cold, fire, lightning, or thunder.
Euryale*.
The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.
Expert.
Your Dexterity score increases by 2, to a maximum of 22.
Fates*.
Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.
Fey.
A fey crossing opens into the Feywild, and you’re immediately pulled through it, disappearing in a flash of rainbow-colored light. You draw no more cards.
The fey crossing appears as a shimmering fractal of light above the deck, and it remains open for 1 minute after the card is drawn. The precise location in the Feywild to which the fey crossing leads is determined by the DM.
Fiend.
A powerful Fiend appears in a nearby unoccupied space and offers you a deal. The precise nature of this deal is up to the DM, but usually the Fiend offers some material reward in exchange for you and your allies completing a task for the Fiend. The Fiend is indifferent to you and can be bargained with; it keeps its side of any bargain it makes, though it might twist the wording of any agreement to suit its purposes. If attacked, or if negotiations fail and you refuse the Fiend’s offer, it returns to its home plane.
Flames*.
A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.
Fool*.
You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.
Gem*.
Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.
Giant.
You immediately grow 2d10 inches in height, and your hit point maximum and current hit points both increase by 20.
Humanoid.
You can immediately choose to stop drawing from the deck, regardless of how many cards you initially declared.
Jester*.
You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.
Key*.
A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon.
Knight*.
You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.
Lance.
All your ability scores increase by 1, to a maximum of 20.
Mage.
Your Intelligence score increases by 2, to a maximum of 22.
Map.
At any time you choose within 1 year of drawing this card, you can mentally name or describe an object or individual that is familiar to you. You immediately know the location of the object or individual, as well as the distance between you and the object or individual, even if the object or individual is on a different plane of existence. If you named an individual, you know if they are alive and any conditions they have. If you named an object, you know if it is broken or not. If you named a magic item that has charges, you know how many charges it has remaining.
Maze.
You gain 1d3 levels of exhaustion.
Mine.
A pile of 2d6 gems (each worth 5,000 gp) and 1d10 chunks of precious ore (each worth 2,500 gp) appears at your feet.
Monstrosity
. A Large or larger Monstrosity with a challenge rating of 10 or less (chosen by the DM) appears in an unoccupied space within 15 feet of you. The creature is hostile toward you and attacks immediately. The creature disappears when it is killed or when you are reduced to 0 hit points. If there isn’t enough space for a Large or larger creature to appear, this card has no effect.
Moon*.
You are granted the ability to cast the
Wish
spell 1d3 times.
Ooze.
A gelatinous cube immediately appears in your space and engulfs you. The gelatinous cube is hostile and remains until it is destroyed. If there isn’t enough space for the gelatinous cube to appear, this card has no effect.
Path.
Your walking speed increases by 10 feet.
Pit.
A pit opens beneath you. You plummet 3d6 × 10 feet, take damage from the fall, and have the prone condition.
Plant.
You gain the ability to cast
Speak with Plants
without using a spell slot; you must finish a long rest before you can cast it this way again. If you have spell slots of 3rd level or higher, you can cast this spell using them. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).
Priest.
Your Wisdom score increases by 2, to a maximum of 22.
Prisoner.
Glowing chains made of magical force appear and wrap around you. You have the restrained condition until the chains are destroyed or you are freed. While you have this condition, you can’t cast spells, and any magic items you’re wearing or carrying have their properties suppressed. You draw no more cards. The chains are immune to damage and can’t be dispelled using the
Dispel Magic
spell or similar magic. However, a
Disintegrate
spell destroys the chains instantly, freeing you. Another creature can also free you by succeeding on a DC 30 Dexterity check using thieves’ tools.
Puzzle*.
Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.
Ring.
A rare or rarer magic ring appears on your finger. If you have the attunement slots available, you’re automatically attuned to the ring when it appears. The DM chooses the ring.
Rogue*.
A nonplayer character of the DM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a
Wish
spell or divine intervention can end the NPC's hostility toward you.
Ruin*.
All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.
Sage*.
At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.
Shield.
A rare or rarer suit of magic armor that you are proficient with appears in your hands. The DM chooses the armor. If you lack proficiency with any armor, your base AC instead now equals 12 + your Dexterity modifier while you aren’t wearing armor.
Ship.
You gain proficiency in three skills chosen by the DM.
Skull*.
You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.
Staff.
A rare or rarer magic rod, staff, or wand appears in your hands. The DM chooses the item.
Stairway.
You can choose to either decrease your number of declared draws by two or receive a rare or rarer wondrous item, which appears in your hands. The DM chooses the item.
Star*.
Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24.
Statue.
You immediately have the petrified condition as your body is transformed into marble. The petrification lasts until you are freed with the
Greater Restoration
spell or similar magic.
Sun*.
You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.
Talons*.
Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish.
Tavern.
Your Charisma score increases by 2 to a maximum of 22.
Temple.
A deity or entity of similar power becomes bound to aid you. At any point in time between drawing the card and when you die, you can use your action to call on this entity for divine intervention, and the entity is bound to answer. The parameters and nature of this intervention are chosen by the DM. If you die without having used this intervention, the deity fulfills its obligation by casting the
Resurrection
spell on you. Once the entity has answered your call for divine intervention or resurrected you, the entity is no longer bound to aid you.
Throne*.
You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours.
Tomb.
At any time you choose within 1 year of drawing this card, you can cast the
True Resurrection
spell once without expending a spell slot or requiring material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).
Tower.
Draw two additional cards beyond your declared number of draws. The magic of these cards doesn’t immediately take effect; instead, choose one of the two additional cards to keep, returning the other to the deck. The magic of the card you keep takes effect immediately thereafter.
Tree.
Your skin immediately becomes rough, like tree bark. Your base AC now equals 15 + your Dexterity modifier while you aren’t wearing armor, but you have vulnerability to fire damage. This transformation can be undone only by the
Wish
spell, divine intervention, or similar magic.
Undead.
Somewhere on the Material Plane, a revenant rises. This revenant blames you for its existence and relentlessly hunts you to exact its revenge. The revenant exists until either 1 year passes, the revenant kills you, or you use a
Wish
spell to banish it permanently to the afterlife.
Void*.
This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A
Wish
spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.
Warrior.
Your Strength score increases by 2 to a maximum of 22.
Well.
You learn three cantrips of your choice from any spell list.`,
    },
    {
      name: "Deck of Many Things",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.
Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.
Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.
Playing Card
Card
Ace of diamonds
Vizier*
King of diamonds
Sun
Queen of diamonds
Moon
Jack of diamonds
Star
Two of diamonds
Comet*
Ace of hearts
The Fates*
King of hearts
Throne
Queen of hearts
Key
Jack of hearts
Knight
Two of hearts
Gem*
Ace of clubs
Talons*
King of clubs
The Void
Queen of clubs
Flames
Jack of clubs
Skull
Two of clubs
Idiot*
Ace of spades
Donjon*
King of spades
Ruin
Queen of spades
Euryale
Jack of spades
Rogue
Two of spades
Balance*
Joker (with TM)
Fool*
Joker (without TM)
Jester
*Found only in a deck with twenty-two cards
Balance.
Your mind suffers a wrenching alteration, causing your alignment to change. Lawful become chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.
Comet.
If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.
Donjon.
You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a
Wish
spell can reveal the location of your prison. You draw no more cards.
Euryale.
The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.
The Fates.
Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.
Flames.
A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.
Fool.
You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.
Gem.
Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.
Idiot.
Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.
Jester.
You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.
Key.
A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon.
Knight.
You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.
Moon.
You are granted the ability to cast the
Wish
spell 1d3 times.
Rogue.
A nonplayer character of the DM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a
Wish
spell or divine intervention can end the NPC's hostility toward you.
Ruin.
All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.
Skull.
You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.
Star.
Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24.
Sun.
You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.
Talons.
Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish.
Throne.
You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours.
Vizier.
At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.
The Void.
This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A
Wish
spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.
Effects for Single Cards (Book of Many Things)
A Deck of Many Things typically appears not as individual cards, but as a collection of cards characters can draw from. But this doesn’t have to be true; you can give each card a property as a standalone item, so characters who find only one card can still enjoy this famed item and use the card on adventures.
This approach is particularly useful if you make a Deck of Many Things the object of a quest; as the characters explore, each card they find grants them a magical ability they can use in subsequent adventures to find the cards that remain. Eventually the heroes assemble the entire deck, which they can then use in the traditional manner, drawing transformative cards from it in a fitting climax to the campaign.
You can grant the following additional magical properties to the cards of the Deck of Many Things:
Balance.
As an action, you can brandish this card at one creature you can see within 30 feet of yourself and drain its life force. The target must succeed on a DC 17 Constitution saving throw or take 4d8 necrotic damage. You then regain a number of hit points equal to the necrotic damage the target takes. Once this property is used, it can’t be used again until the next dawn.
Comet.
As an action, you can hold this card aloft and call down a fiery meteor to a point you can see within 120 feet of yourself. Each creature within a 20-foot-radius sphere centered on that point must make a DC 17 Dexterity saving throw. On a failed save, a creature takes 6d6 bludgeoning damage and 6d6 fire damage, or half as much damage on a successful save. Once this property is used, it can’t be used again until the next dawn.
Donjon.
As an action, you can brandish this card at one creature you can see within 30 feet of yourself. The target must succeed on a DC 17 Charisma saving throw, or it vanishes, transported to a prison on another plane of existence. After 1 minute, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Once this property is used, it can’t be used again until the next dawn.
Euryale.
As an action, you can brandish this card at one creature you can see within 30 feet of yourself and attempt to turn it to stone. The target must succeed on a DC 17 Constitution saving throw, or it begins to turn to stone and has the restrained condition. The affected target must repeat the saving throw at the end of its next turn. On a successful save, the effect ends on the target. On a failed save, the target has the petrified condition (instead of the restrained condition) until it is removed by the
Greater Restoration
spell or similar magic. Once this property is used, it can’t be used again until the next dawn.
Fates.
As a bonus action, you can brandish this card at one willing creature you can see within 30 feet of yourself, granting the creature a brief glimpse of the future. Until the start of your next turn, the creature has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. Once this property is used, it can’t be used again until the next dawn.
Flames.
You can use this card to summon a devil. The card is attuned to a specific devil with a challenge rating of 8 or lower. As an action, you can hold this card aloft and summon that devil, which appears in an unoccupied space you can see within 30 feet of you. The devil is initially unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. The DM has the creature’s stat block. On each of your turns, you can issue a verbal command to the devil (no action required by you), and as long as you are holding this card, the devil obeys your commands. Otherwise, it is under the DM’s control and acts according to its nature—it might attack you if it thinks it can prevail or try to tempt you to undertake an evil act in exchange for further service. After 1 minute or when the devil’s hit points drop to 0, the devil returns to the Lower Planes. Once this property is used, it can’t be used again until the next dawn.
Fool.
As an action, you can brandish this card at one creature you can see within 30 feet of yourself. The target must succeed on a DC 17 Wisdom saving throw, or for the next minute, the target can’t cast spells or activate magic items, it has disadvantage on all saving throws, and other creatures have resistance to all damage it deals. Once this property is used, it can’t be used again until the next dawn.
Gem.
This card holds one 6th-level spell (chosen by the DM). As an action, you can brandish this card and use it to cast the spell stored inside (spell attack bonus +9, save DC 17). Once this property is used, it can’t be used again until the next dawn.
Jester.
As an action, you can brandish this card and use it to cast the
Otto's Irresistible Dance
spell (save DC 17), and you have advantage on Constitution saving throws to maintain concentration on it. Once this property is used, it can’t be used again until the next dawn.
Key.
As an action, you can brandish this card and use it to cast the
Knock
spell, with no sound made by the spell. This property can be used five times, and it regains all expended uses at dawn.
Knight.
As an action, you can throw this card to an unoccupied space on the ground within 60 feet of yourself while speaking a command word, whereupon the card magically transforms into a deck defender (see chapter 9 for its stat block) for up to 1 minute or until you use an action to speak the command word again, whereupon it transforms back into a card. The deck defender obeys your spoken commands. If you issue no commands, it takes the Dodge action and moves to avoid danger. The deck defender reverts to a card early if it drops to 0 hit points. Once this property is used, it can’t be used again until the next dawn.
Moon.
As an action, you can speak a command word while touching this card and transform into a wolflike biped for 1 minute. For that duration, you have resistance to bludgeoning, piercing, and slashing damage, and when you hit a target with a weapon or an unarmed strike, the target takes an extra 1d6 force damage. Once this property is used, it can’t be used again until the next dawn.
Puzzle.
As an action, you can hold this card aloft and magically disable each trap within 60 feet of you that isn’t behind total cover. A trap, for the purpose of this property, includes any object or mechanism that would inflict a sudden effect that was intended by its maker to cause harm or inconvenience. If the trap is the effect of a spell, such as
Alarm
, that trap is suppressed for 10 minutes instead of being disabled. Once this property is used, it can’t be used again until the next dawn.
Rogue.
When you hit a target with a weapon attack while holding this card, you can deal an extra 6d6 force damage to that target. Once this property is used, it can’t be used again until the next dawn.
Ruin.
As an action, you can brandish this card and use it to cast the
Disintegrate
spell (save DC 17). Once this property is used, it can’t be used again until the next dawn.
Sage.
As an action, you can brandish this card and use it to cast the
Contact Other Plane
spell. When you cast the spell in this way, your questions are answered by the mysterious figure depicted on the card. Once this property is used, it can’t be used again until the next dawn.
Skull.
As an action, you can brandish this card and use it to cast
Spirit of Death
as a 6th-level spell (spell attack bonus +9, save DC 17). Once this property is used, it can’t be used again until the next dawn.
Star.
As a bonus action, you can speak a command word while holding this card aloft to gain advantage on all saving throws you make for the next 10 minutes. Once this property is used, it can’t be used again until the next dawn.
Sun.
As an action, you can brandish this card and use it to cast the
Sunbeam
spell (save DC 17), projecting the light from the card’s face. Once this property is used, it can’t be used again until the next dawn.
Talons.
As an action, you can brandish this card and target one magic item you can see within 120 feet of yourself. If the item isn’t an artifact, its magical properties are suppressed for 1 minute. Once this property is used, it can’t be used again until the next dawn.
Throne.
As an action, you can speak a command word while holding this card to gain advantage on Charisma (Intimidation or Persuasion) checks for 1 minute. In addition, for that duration, you can use this card to cast the
Command
spell (save DC 17) as an action. Once this property is used, it can’t be used again until the next dawn.
Void.
As an action, you can brandish this card and attempt to banish up to three creatures you can see within 120 feet of yourself. If the target is from a different plane of existence than the plane you’re on, the target must succeed on a DC 17 Charisma saving throw or be banished, returning to that other plane. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Deck of Several Things",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `Stored in a leather pouch, this unique deck contains twenty-two colored cards made of some strong but unknown metal, each of which features a design printed as a mosaic of raised dots. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.
Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.
Playing Card
Card
Ace of diamonds
Vizier
King of diamonds
Sun
Queen of diamonds
Moon
Jack of diamonds
Star
Two of diamonds
Comet
Ace of hearts
The Fates
King of hearts
Throne
Queen of hearts
Key
Jack of hearts
Knight
Two of hearts
Gem
Ace of clubs
Talons
King of clubs
The Void
Queen of clubs
Flames
Jack of clubs
Skull
Two of clubs
Idiot
Ace of spades
Donjon
King of spades
Ruin
Queen of spades
Euryale
Jack of spades
Rogue
Two of spades
Balance
Joker (with TM)
Fool
Joker (without TM)
Jester
Balance.
Your mind suffers a wrenching alteration, causing your alignment to change. Lawful become chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.
Comet.
If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.
Donjon.
You are instantly teleported to and confined within the prison of the Monastery of the Distressed Body. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You draw no more cards.
Euryale.
The card's medusa-like visage curses you. You take a -1 penalty on saving throws for the duration of the adventure.
The Fates.
Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.
Flames.
The Grand Master of the Monastery of the Distressed Body becomes your enemy. The bone devil seeks your ruin, savoring your suffering before attempting to slay you. If the Grand Master has already been defeated, you gain the enmity of Garret Levistusson’s patron — a similarly powerful devil.
Fool.
For the duration of the adventure, you lose proficiency with one skill or gain disadvantage on all checks made with one skill (with the skill and the penalty determined by the DM). Discard this card and draw from the deck again, counting both draws as one of your declared draws.
Gem.
The 1,000 gp hoard of the leprechaun from the Wilderness Encounters table appears at your feet. If that treasure has already been claimed, you gain an equivalent hoard.
Idiot.
Reduce your Intelligence by 1d4 + 1 (to a minimum score of 1) for the duration of the adventure. You can draw one additional card beyond your declared draws.
Jester.
You gain proficiency in a skill of your choice for the duration of the adventure, or you can draw two additional cards beyond your declared draws.
Key.
A common or uncommon magic weapon with which you are proficient, or a
Spell Scroll
featuring a spell of a level you can cast, appears in your hands. The DM chooses the weapon or spell, which you possess for the duration of this adventure.
Knight.
You gain the service of any of the NPCs in the “Hirelings” section not currently with the party, who appears in a space you choose within 30 feet of you. The NPC serves you loyally for the duration of the adventure, believing that the fates have drawn them to you. You control this character.
Moon.
You are granted the ability to cast any spell of 5th level or lower, and can use that ability 1d3 times for the duration of the adventure.
Rogue.
An NPC of the DM’s choice becomes secretly hostile toward you. The identity of your new enemy isn’t known until the NPC or someone else reveals it. Any enchantment spell cast on the NPC at 6th level or higher can end the NPC’s hostility toward you.
Ruin.
All forms of wealth that you carry or own, other than magic items, are lost to you. This wealth can be recovered either in the treasury of the Monastery of the Distressed Body or Kwalish’s lab in Daoine Gloine, whichever comes later in the adventure.
Skull.
You summon an avatar of death — a mechanical skeleton (use
bone naga
statistics) clad in a tattered black robe. It appears in a space of the DM’s choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can’t be restored to life
Star.
Increase one of your ability scores by 1 for the duration of the adventure. The score can exceed 20 but can’t exceed 24.
Sun.
You gain proficiency in the skill of your choice for the duration of the adventure. In addition, a common or uncommon wondrous item appears in your hands. The DM chooses the item, which you possess for the duration of this adventure.
Talons.
Every magic item you wear or carry is lost to you. These items can be recovered either in the treasury of the Monastery of the Distressed Body or Kwalish’s lab in Daoine Gloine, whichever comes later in the adventure.
Throne.
You gain proficiency in the Persuasion skill and you double your proficiency bonus on checks made with that skill for the duration of the adventure. In addition, the Monastery of the Distressed Body’s brains in jars regard you thereafter as the monastery’s rightful master. You must defeat or otherwise clear out the Grand Master and its servants before you can claim the monastery as yours.
Vizier.
At any one time you choose within the duration of the adventure, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.
The Void.
This black card spells disaster. Your soul is drawn from your body and held within machinery in either the control room of the Monastery of the Distressed Body or Kwalish’s lab in Daoine Gloine, whichever comes later in the adventure. While your soul is trapped in this way, your body is incapacitated.
Divination
,
Contact Other Plane
, or a similar spell of 4th level or higher reveals the location of the machinery that holds your soul. You draw no more cards.`,
    },
    {
      name: "Defender",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon.
The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain +2 to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.`,
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
      name: "Dragon Vessel",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This vessel can be a potion bottle, drinking horn, or other container meant to hold a liquid.
Ascendant (Legendary). In addition to the options for other states, you can fill an Ascendant vessel with Whiskey, a Supreme Potion of Healing, or a Potion of Dragon’s Majesty.`,
    },
    {
      name: "Dragonlance",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A
dragonlance
is a renowned weapon forged from rare metal with the aid of powerful artifacts. On Krynn, its creation is associated with the god Paladine and legendary heroes who fought against the evil of the Dragon Queen. Different lances are forged for use by foot soldiers (as pikes) and by riders (as lances), but the magical properties of the weapons are the same.
You gain a +3 bonus to attack and damage rolls made with this magic weapon.
When you hit a Dragon with this weapon, the Dragon takes an extra 3d6 force damage, and any Dragon of your choice that you can see within 30 feet of you can immediately use its reaction to make a melee attack.`,
    },
    {
      name: "Dragon's Wrath Weapon",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This weapon is decorated with dragon heads, claws, wings, scales, or Draconic letters. When it steeps in a dragon’s hoard, it absorbs the energy of the dragon’s breath weapon and deals damage of that type with its special properties.
Slumbering (Uncommon). Whenever you roll a 20 on your attack roll with this weapon, each creature of your choice within 5 feet of the target takes 5 damage of the type dealt by the dragon’s breath weapon.
Stirring (Rare). The Stirring weapon has the Slumbering property. In addition, you gain a +1 bonus to attack and damage rolls made using the weapon. On a hit, the weapon deals an extra 1d6 damage of the type dealt by the dragon’s breath weapon.
Wakened (Very Rare). The Wakened weapon has the Slumbering property, and it improves on the Stirring property. The bonus to attack and damage rolls increases to +2, and the extra damage dealt by the weapon increases to 2d6.
As an action, you can unleash a 30-foot cone of destructive energy from the weapon. Each creature in that area must make a DC 16 Dexterity saving throw, taking 8d6 damage of the type dealt by the dragon’s breath weapon on a failed save, or half as much damage on a successful one. Once this action is used, it can’t be used again until the next dawn.
Ascendant (Legendary). The Ascendant weapon has the Slumbering property, and it improves on the Stirring and Wakened properties. The bonus to attack and damage rolls increases to +3, and the extra damage dealt by the weapon increases to 3d6.
The cone of destructive energy the weapon creates increases to a 60-foot cone, the save DC increases to 18, and the damage increases to 12d6.`,
    },
    {
      name: "Dragonstaff of Ahghairon",
      rarity: "Legendary",
      itemType: "Staff",
      attunment: true,
      price: 5000,
      description: `While holding the
Dragonstaff of Ahghairon
, you have advantage on saving throws against the spells and breath weapons of dragons, as well as the breath weapons of other creatures of the dragon type (such as dragon turtles).
A creature of the dragon type that you touch with the staff can move through the city of Waterdeep, ignoring
Ahghairon's dragonward
. This effect lasts until the creature is touched again by the staff or until a time you proclaim when you confer the benefit.
The staff has 10 charges. While holding it, you can expend 1 charge as an action to cast the
Command
spell. If you target a dragon with this casting, the dragon has disadvantage on its saving throw. The staff regains 1d10 charges daily al dawn.`,
    },
    {
      name: "Dragon-Touched Focus",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This wondrous item can be a scepter, an orb, an amulet, a crystal, or another finely crafted object. It typically incorporates imagery of dragons’ wings, claws, teeth, or scales.
Slumbering (Uncommon). You have advantage on initiative rolls. While you are holding the focus, it can function as a spellcasting focus for all your spells.
Stirring (Rare). The Stirring focus has the Slumbering property, and it gains an additional property determined by the family of the dragon in whose hoard it became Stirring:
Chromatic. Whenever you use a spell slot to cast a spell that deals acid, cold, fire, lightning, or poison damage, roll a d6, and you gain a bonus equal to the number rolled to one of the spell’s damage rolls.
Gem. Whenever you use a spell slot to cast a spell, you can immediately teleport to an unoccupied space you can see within 15 feet of you.
Metallic. When a creature you can see within 30 feet of you makes a saving throw, you can use your reaction to give that creature advantage on the saving throw.
Wakened (Very Rare). The Wakened focus has the Slumbering and Stirring properties, and while you are holding a Wakened focus, you can use it to cast certain spells. Once the item is used to cast a given spell, it can’t be used to cast that spell again until the next dawn. The spells are determined by the family of the dragon in whose hoard it became Wakened.
Chromatic- Hold Monster, Rime’s Binding Ice
Gem- Rary’s Telepathic Bond, Raulothim’s Psychic Lance
Metallic- Fizban’s Platinum Shield, Legend Lore
Ascendant (Legendary). The Ascendant focus has the Slumbering, Stirring, and Wakened properties. In addition, when you cast a spell of 1st level or higher while holding this focus, you can treat the spell as if it were cast using a 9th-level spell slot. Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Drown",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A steel trident decorated with bronze barnacles along the upper part of its haft,
Drown
has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water.
Drown
contains a spark of Olhydra, the Princess of Evil Water.
You gain a +1 bonus to attack and damage rolls you make with this magic weapon. When you hit with it, the targets takes an extra 1d8 cold damage.
Water Mastery.
You gain the following benefits while you hold
Drown
:
• You can speak Aquan fluently.
• You have resistance to cold damage.
• You can cast
Dominate Monster
(save DC 17) on a water elemental. Once you have done so,
Drown
can’t be used this way again until the next dawn.
Tears of Endless Anguish.
While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using
Drown
to create a
devastation orb of water
(see the
Devastation Orb
description for the time and cost of the ritual). Once you perform the ritual,
Drown
can’t be used to perform the ritual again until the next dawn.
Flaw.
Drown
makes its wielder covetous. While attuned to the weapon, you gain the following flaw: “I demand and deserve the largest share of the spoils, and I refuse to part with anything that’s mine.” In addition, if you are attuned to
Drown
for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a
Greater Restoration
spell or similar magic, but not while you are attuned to the weapon.`,
    },
    {
      name: "Efreeti Chain",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: "While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground.",
    },
    {
      name: "Euryale's Aegis",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `This gleaming brass shield bears a relief of the legendary medusa druid Euryale.
While wielding this shield, you gain the following benefits:
Blessing of Euryale.
You have resistance to poison damage and are immune to the petrified condition.
Petrifying Heraldry.
As a bonus action, you can make the front of the shield flare with a medusa’s petrifying magic, causing the relief’s eyes to glow brightly. Choose one creature you can see within 30 feet of you. The creature must succeed on a DC 20 Constitution saving throw, or it has the restrained condition as its body turns to stone. The restrained creature must make another DC 20 Constitution saving throw at the start of its next turn. On a failed save, the creature has the petrified condition for 24 hours. On a successful save, the restrained condition ends. Once this bonus action is used, it can’t be used again until the next dawn.
Spellcasting.
While wielding the shield, you can use an action to cast one of the following spells from it:
Lesser Restoration
,
Locate Creature
,
Transport Via Plants
. Once you use the shield to cast a spell, the shield can’t cast that spell again until the next dawn.`,
    },
    {
      name: "Fane-Eater",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Fane-Eater
is a battleaxe belonging to Arkhan the Cruel (BG:DA, page 111).
You gain a +3 bonus to attack and damage rolls with
Fane-Eater
. If you attack a creature with this weapon and roll a 20 on the attack roll, the creature takes an extra 2d8 necrotic damage, and you regain a number of hit points equal to the necrotic damage taken.`,
    },
    {
      name: "Fate Dealer's Deck",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The backs of these cards are inscribed with glyphs representing the Inner Planes, the Outer Planes, or the holy symbols of various deities. While holding this deck, you can use it as a spellcasting focus, and you gain a bonus to spell attack rolls and to your spell save DC. The bonus is determined by the deck’s rarity.
In addition, while you’re holding the deck, you can draw a card as an action to expend and roll one of your Hit Dice and add the deck’s bonus to the number rolled. One creature you can see within 30 feet of you either takes radiant damage or regains hit points (your choice) equal to the total.
Rarity        Bonus
Legendary        +3`,
    },
    {
      name: "Figurine of Wondrous Power",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `A Figurine of Wondrous Power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manuel for the creature's statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.
Gold Canary (Legendary)
Giant Canary Form. The figurine becomes a giant canary (see the accompanying stat block) for up to 8 hours and can be ridden as a mount. Once the figurine has become a giant canary, it can’t be used this way again until the next dawn.
Gold Dragon Form. While you are missing half or more of your hit points, you can speak a different command word and the figurine becomes an adult gold dragon for up to 1 hour. The dragon can’t use any legendary actions or lair actions. Once the figurine has become an adult gold dragon, it can’t be used this way again until 1 year has passed.`,
    },
    {
      name: "Flail of Tiamat",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This magic flail is made in the image of Tiamat, with five jagged heads shaped like the heads of five different chromatic dragons. You gain a +3 bonus to attack and damage rolls made with this flail. When you hit with an attack roll using it, the target takes an extra 5d4 damage of your choice of one of the following damage types: acid, cold, fire, lightning, or poison.
While holding the flail, you can use an action and speak a command word to cause the heads to breathe multicolored flames in a 90-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw. On a failed save, it takes 14d6 damage of one of the following damage types (your choice): acid, cold, fire, lightning, or poison. On a successful save, it takes half as much damage. Once this action is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Gloves of Soul Catching",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Your Constitution score is 20 while you wear these gloves. This property of the gloves has no effect on you if your Constitution is already 20 or higher.
After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 2d10 force damage to the target, and you regain a number of hit points equal to the force damage dealt. Alternatively, instead of regaining hit points in this way, you can choose to gain advantage on one attack roll, ability check, or saving throw you make before the end of your next turn.`,
    },
    {
      name: "Grimoire Infinitus",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Several of these spellbooks with gilded pages and silver-plated covers were created during the Age of Arcanum, but only one has been found since the Calamity ended. The book has an infinite number of pages, is three inches thick, eight inches wide, twelve inches long, and weighs three pounds.
Dormant.
Most of the book is blank, but the following spells are recorded in the first pages of the tome:
Alarm
,
Antimagic Field
,
Bigby's Hand
,
Blight
,
Charm Person
,
Confusion
,
Control Weather
,
Create Undead
,
Detect Thoughts
,
Enlarge/Reduce
,
Fear
,
Foresight
,
Gaseous Form
,
Glyph of Warding
,
Legend Lore
,
Leomund's Tiny Hut
,
Mass Suggestion
,
Mislead
,
Misty Step
,
Mordenkainen's Faithful Hound
,
Prismatic Spray
,
Ray of Enfeeblement
,
Silent Image
,
Teleport
, and
Thunderwave
.
You can use the grimoire as your spellbook, and you can scribe new spells into it as normal. When you prepare wizard spells using the grimoire, the number of wizard spells you can prepare increases by 1.
Awakened.
When the
Grimoire Infinitus
reaches an awakened state, it gains the following properties:
While you carry the spellbook, you have advantage on saving throws against spells and magical effects.
When you prepare wizard spells using the grimoire as your spellbook, the number of spells you can prepare increases by 1 again.
Exalted.
When the
Grimoire Infinitus
reaches an exalted state, it gains the following properties:
You can now use your Arcane Recovery feature twice between long rests, rather than once.
When you prepare wizard spells using the grimoire as your spellbook, the number of spells you can prepare increases by 1 again.`,
    },
    {
      name: "Gurt's Greataxe",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `In the Year of the Icy Axe (123 DR), the frost giant lord Gurt fell to Uthgar Gardolfsson-leader of the folk who would become the Uthgardt barbarians-in a battle that marked the ascendance of humankind over the giants in the Dessarin Valley.
Gurt's Greataxe
was buried in Morgur's Mound until it was unearthed and brought back to Waterdeep. After laying in the city's vaults for decades, the axe was given to Harshnag, a frost giant adventurer, in recognition of his service to Waterdeep. Uthgardt barbarians recognize the weapon on sight and attack any giant that wields it.
You gain a +1 bonus to attack and damage rolls made with this magic weapon. It is sized for a giant, weighs 325 pounds, and deals 3d12 slashing damage on a hit, plus an extra 2d12 slashing damage if the target is human.
The axe sheds light as a torch when the temperature around it drops below 0 degrees Fahrenheit. The light can't be shut off in these conditions.
As an action, you can cast a version of the
Heat Metal
spell (save DC 13) that deals cold damage instead of fire damage. Once this power is used, it can't be used again until the next dawn.`,
    },
    {
      name: "Hammer of Thunderbolts",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: false,
      price: 5000,
      description: `You gain a +1 bonus to attack and damage rolls made with this magic weapon.
Giant's Bane (Requires Attunement).
You must be wearing a
Belt of Giant Strength
(any variety) and
Gauntlets of Ogre Power
to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die.
The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be stunned until the end of your next turn. The hammer regains 1d4 + 1 expended charges daily at dawn.`,
    },
    {
      name: "Hammock of Worlds",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `The
Hammock of Worlds
is a colorful hammock woven with traditional Ataguan designs. It can be used only by a member of the order known as the Green Doctors.
You can use an action to unfold and place the
Hammock of Worlds
on a solid surface, whereupon it creates a two-way portal to the Ghost Orchid Tepui in the Feywild or to the Drought Elder in the Far Realm (the user's choice). You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once the
Hammock of Worlds
has opened a portal, it can't do so again for 1d8 hours.`,
    },
    {
      name: "Harp of Gilded Plenty",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This golden harp is sculpted in the image of the god Iallanis, depicted as a young cloud giant woman. When a creature comes within 5 feet of the harp, the instrument animates and is capable of speaking, singing, and playing by itself.
Whenever you attempt to attune to the harp, you must first make either a DC 15 Charisma (Performance) check or a DC 20 Charisma (Persuasion) check to convince the harp that you are worthy, attuning to the harp on a success. If you fail, you can’t attempt to attune to the harp again until the next dawn. Once you have successfully attuned to the harp, the harp resizes to suit you.
Stalwart Song.
Whenever you make a Charisma check while attuned to the harp, you can treat a roll of 9 or lower on the die as a 10.
Feast of Plenty.
If you spend 10 minutes playing the harp, you can cast the
Heroes' Feast
spell from it. Once this property is used, it can’t be used again until 1d10 + 10 days have passed.
Soothing Melody.
As an action, you can use the harp to cast the
Calm Emotions
spell (save DC 19). When the spell is cast using the harp, its duration increases to 1 hour, provided you maintain concentration on the spell. This property can be used five times, and it regains all uses at dawn.
Sentience.
The harp is a sentient, chaotic good object with an Intelligence of 13, a Wisdom of 15, and a Charisma of 20. It has hearing and
darkvision
to a range of 120 feet.
The harp can speak, read, and understand Common and Giant. It can also communicate telepathically with the creature attuned to it.
The harp has a dramatic and pompous personality, taking extreme pride in the quality of music produced from its strings. If the harp is shorter than 6 feet tall, it bemoans its height.`,
    },
    {
      name: "Hazirawn",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Increased Potency.
While you are attuned to this weapon, its bonus on attack rolls and damage rolls increases to +2, and a hit deals an extra 2d6 necrotic damage (instead of 1d6).
Spells.
Hazirawn has 4 charges to cast spells. As long as the sword is attuned to you and you are holding it in your hand, you can use an action to expend the required number of charges to cast one of the following spells from the sword:
Detect Magic
(1 charge),
Detect Evil and Good
(1 charge), or
Detect Thoughts
(2 charges). Each night at midnight, Hazirawn regains 1d4 expended charges.
Wounding.
While you are attuned to the weapon, any creature that you hit with Hazirawn can't regain hit points for 1 minute. The target can make a DC 15 Constitution saving throw at the end of each of its turns, ending this effect early on itself on a success.`,
    },
    {
      name: "Helm of Disjunction",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The wizard Mordenkainen crafted this sleek, golden helmet. If he created other helms of disjunction, they have yet to be found.
As an action while wearing this helm, you can use it to emit an antimagic pulse in a 300-foot-radius sphere centered on yourself. The pulse has the following effects:
Magic Item Disjunction.
Potions and scrolls in the area are destroyed. All other magic items in the area have their magical properties suppressed for 1 minute. Artifacts are unaffected by this property, as are magic items on your person.
Spell Disjunction.
Any ongoing spell ends if the creature, object, or area affected by it is even partly in the pulse’s area.
Wave of Force.
The antimagic pulse is strong enough to knock down creatures close to you. Each creature within 30 feet of you must succeed on a DC 15 Strength saving throw or have the prone condition.
Once you use the helm’s property, it can’t be used again until 1d4 days have passed.`,
    },
    {
      name: "Helm of the Scavenger",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Source - Waterdeep: Dungeon of the Mad Mage
Wondrous Item, Legendary (requires attunement by a spellcaster)
This ornate chair is designed to propel and maneuver a ship through space.
Passive Properties.
The following properties of the helm come into play even when no creature is attuned to it:
When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an envelope of fresh air around the ship while it is in the void of space (but not underwater). This envelope extends out from the edges of the hull in all directions for a distance equal in length to the vessel's beam, so that creatures aboard or near the ship can breath normally in space. The temperature within the air envelope is 70 degrees Fahrenheit.
When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an artificial gravity field while the ship is in the void of space, so that creatures can walk on the ships decks as they normally would. Creatures and objects that fall overboard bob in a gravity plane that extends out from the main deck for a distance equal in length to the vessel's beam.
Active Properties.
The sensation of being attuned to the helm is akin to being immersed in warm water. While attuned to the helm you gain the following abilities while you sit in it:
You can use the helm to propel the vessel across or through water and other liquids at a maximum speed in miles per hour equal to your highest-level unexpended spell slot.
You can use the helm to propel the vessel through air or space at a maximum speed in miles per hour equal to your highest-level unexpended spell slot x 10.
Provided you have at least one unexpended spell slot, you can steer the vessel, albeit in a somewhat clumsy fashion, in much the same way that oars or a rudder can maneuver a seafaring ship.
Whenever you like, you can see what's happening on and around the vessel as though you were standing in a location of your choice aboard it.
Drawback.
While attuned to the helm, you cannot expend your own spell slots.`,
    },
    {
      name: "Heretic",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `The blasphemous weapon Heretic was created by a cult to steal power from good-aligned gods. The blade hungers to strike down servants of the Upper Planes and weaken the forces of good.
You gain a +3 bonus to attack and damage rolls made with this magic weapon. Heretic has 6 charges for the following properties; the sword regains 1d4 + 1 charges daily at dawn:
Destroy Devotion.
Once per turn when you hit a creature with this weapon, you can expend 1 of its charges to attempt to render the target powerless. The target must succeed on a DC 17 Constitution saving throw or have the paralyzed condition until the start of your next turn. Celestials have disadvantage on the save.
Faith Hunter.
While holding the sword, you can use an action to expend 1 or more of its charges to cast one of the following spells from it:
Detect Evil and Good
(1 charge),
Fly
(2 charges), or
True Seeing
(3 charges).
Sentience.
Heretic is a sentient, chaotic evil weapon with an Intelligence of 17, a Wisdom of 17, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.
The weapon can speak, read, and understand Common and Giant, and it can communicate with its wielder telepathically. Its voice is soft and deep but rises in a wild furor when it's aware Celestials or worshipers of good-aligned deities are present. While you are attuned to it, Heretic also understands every language you know.
Personality.
Heretic craves the destruction of good-aligned gods and their supporters. The blade is condescending and snobby, especially in the company of priests and other pious folk, at whom it often directs sneering comments. When Heretic identifies its quarry, it erupts in a frenzied need for violence.`,
    },
    {
      name: "Hide of the Feral Guardian",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `It is believed that this polished and beautifully detailed leather armor was a gift from Melara, bestowed on a long-forgotten archdruid and champion of the natural world before the terrors of the Calamity.
Dormant.
While wearing the armor in its dormant state, you gain the following benefits:
The armor grants you a + 1 bonus to AC.
While you are transformed by an effect that replaces any of your game statistics with those of another creature, you have a + 1 bonus to melee attack and damage rolls, and you retain the benefits of this armor.
As an action, you can use the armor to cast
Polymorph
on yourself, transforming into a
giant owl
while retaining your Intelligence, Wisdom, and Charisma scores. This property can't be used again until the next dawn.
Awakened.
When the armor reaches an awakened state, it gains the following properties:
The AC bonus of the armor increases to +2.
While you are transformed by an effect that replaces any of your game statistics with those of another creature, your bonus to melee attack and damage rolls increases by 1 (to +2).
When you cast the
Polymorph
spell using this armor, you can transform into a cave bear (use the
polar bear
statistics).
Exalted.
When the armor reaches an exalted state, it gains the following properties:
The AC bonus of the armor increases to +3.
While you are transformed by an effect that replaces any of your game statistics with those of another creature, your bonus to melee attack and damage rolls increases by 1 (to +3).
When you cast the
Polymorph
spell using this armor, you can transform into a
guardian wolf
.`,
    },
    {
      name: "Hither-Thither Staff",
      rarity: "Legendary",
      itemType: "Staff",
      attunment: false,
      price: 5000,
      description: `This walking stick has a brilliant gemstone fitted at the top. This staff has 4 charges and regains 1d4 expended charges daily at dawn.
As an action, you can expend 1 charge from the staff to create two linked teleportation portals, each one appearing on a flat surface of your choice that you can see within 1,500 feet of yourself. Alternatively, you can expend 1 charge as an action to relocate one or both portals, subject to the same limitation. The surface on which a portal appears must be big enough to accommodate it. Each portal is a two-dimensional, glowing oval ring, and together they create an open doorway up to 6 feet high and 4 feet wide. Any creature or object entering one portal exits from the other as if the two portals were a single opening that connects their locations.
A portal can appear on a moving surface, but the effect ends when the two portals move more than 1 mile apart. As a bonus action while holding the staff, you can close both portals (ending the effect) or suppress one portal, causing it to disappear until you relocate it (see above), during which time the remaining portal can’t be used. The portals otherwise last for 24 hours.`,
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
      name: "Horn of Beckoning Death",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Resembling a small dragon’s horn, this arcane device glows with a hellish internal light when held. As an action while holding this horn, you can invoke a necromantic effect called the Beckoning Death.
The Beckoning Death arrives at the start of your next turn and manifests as a crimson cloud of smoke that fills a 30-foot-radius sphere centered on the horn. The sphere doesn’t move with the horn. At the start of each of your turns, the sphere’s radius increases by 30 feet. The cloud disappears after 10 minutes or when your concentration on the effect ends. Any creature (including you) that has 9 or fewer hit points when it ends its turn in the cloud is slain by the Beckoning Death. A Humanoid killed in this way instantly transforms into a zombie (see the Monster Manual). The zombie obeys the commands of the horn’s creator, the lich Szass Tam.
Once you use the horn’s property, it can’t be used again for 1 year.`,
    },
    {
      name: "Icon of Ravenloft",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The
Icon of Ravenloft
is a 12-inch-tall statuette made of the purest silver, weighing 10 pounds. It depicts a cleric kneeling in supplication.
The icon was given to Strahd by the archpriest Ciril Romulich, an old family friend, to consecrate the castle and its chapel.
While within 30 feet of the icon, a creature is under the effect of a
Protection from Evil and Good
spell against fiends and undead. Only a creature attuned to the icon can use its other properties.
Augury.
You can use an action to cast an
Augury
spell from the icon, with no material components required. Once used, this property can't be used again until the next dawn.
Bane of the Undead.
You can use the icon as a holy symbol while using the Turn Undead or Turn the Unholy feature. If you do so, increase the save DC by 2.
Cure Wounds.
While holding the icon, you can take an action to heal one creature that you can see within 30 feet of you. The target regains 3d8 + 3 hit points, unless it is an undead, a construct, or a fiend. Once used, this property can't be used again until the next dawn.`,
    },
    {
      name: "Infernal Tack",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `A narzugon devil binds a nightmare (described in the
Monster Manual
) to its service with infernal tack, which consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with
infernal tack
must serve whoever wears the spurs until the wearer dies or the tack is removed.
You can use an action to call the nightmare equipped with
infernal tack
by clashing the spurs together or scraping them through blood. The nightmare appears at the start of your next turn, within 20 feet of you. It acts as your ally and takes its turn on your initiative count. It remains for 1 day, until you or it dies, or until you dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which you can summon it again.
The tack doesn't conjure a nightmare from thin air; one must first be subdued so the tack can be placed on it. No nightmare accepts this forced servitude willingly, but some eventually form strong loyalties to their masters and become partners in evil.`,
    },
    {
      name: "Infiltrator's Key",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This mithral skeleton key was forged using the blood of twelve master thieves executed for trying to steal magic items during the Age of Arcanum.
Dormant.
The
Infiltrator's Key
grants the following benefits in its dormant state:
The key can be used as thieves' tools for the purpose of opening locks. When using the key, you are considered proficient in thieves' tools and you have advantage on ability checks made to open locks.
While holding the key, your steps are muffled, giving you advantage on Dexterity (Stealth) checks made to move silently.
Awakened.
When the
Infiltrator's Key
reaches an awakened state, it gains the following properties:
While holding the key, you can use a bonus action to transform the key into a magic dagger or back into a key. While the key is in the form of a dagger, you gain a +1 bonus to attack and damage rolls made with it, and it returns to your hand immediately after it is used to make a ranged attack.
While holding the key, you can use an action to cast one of the following spells from it:
Alter Self
,
Invisibility
,
Knock
, or
Pass Without Trace
. Once a spell has been cast using the key, it can't be used to cast that spell again until the next dawn.
Exalted.
When the
Infiltrator's Key
reaches an exalted state, it gains the following properties:
As a bonus action, you can touch the key to a floor, wall, or ceiling that is no more than 5 feet thick and cause a magical opening to appear in the surface. When you create the opening, you choose its length and width, up to 10 feet for each dimension. The opening lasts until the key passes through it to the other side, at which point it disappears (if a creature is in the opening when the doorway closes, the creature is safely shunted to the nearest unoccupied space). The key can't be used to create another opening until the next dawn.
While holding the key, you can use an action to cast one of the following spells from it:
Dimension Door
,
Gaseous Form
, or
Mislead
. Once a spell has been cast using the key, it can't be used to cast that spell again until the next dawn.`,
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
      name: "Ioun Stone",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distant combination of shape and color.
When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.
A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.`,
    },
    {
      name: "Iron Flask",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.
You can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.
An
Identify
spell reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly.
d100
Contents
01-50
Empty
51
Arcanaloth
52
Cambion
53-54
Dao
55-57
Demon (type 1)
58-60
Demon (type 2)
61-62
Demon (type 3)
63-64
Demon (type 4)
65
Demon (type 5)
66
Demon (type 6)
67
Deva
68-69
Devil (greater)
70-72
Devil (lesser)
73-74
Djinni
75-76
Efreeti
77-78
Elemental (any)
79
Githyanki knight
80
Githzerai zerith
81-82
Invisible stalker
83-84
Marid
85-86
Mezzoloth
87-88
Night hag
89-90
Nycaloth
91
Planetar
92-93
Salamander
94-95
Slaad (any)
96
Solar
97-98
Succubus/incubus
99
Ultroloth
00
Xorn`,
    },
    {
      name: "Ironfang",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A war pick forged from a single piece of iron,
Ironfang
has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion — nothing seems to mark it.
Ironfang
contains a spark of Ogremoch, the Prince of Evil Earth.
You gain a +2 bonus to attack and damage rolls you make with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.
Earth Mastery.
You gain the following benefits while you hold
Ironfang
:
• You can speak Terran fluently.
• You have resistance to acid damage.
• You have tremorsense out to a range of 60 feet.
• You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.
• You can cast
Dominate Monster
(save DC 17) on an earth elemental. Once you have done so,
Ironfang
can’t be used this way again until the next dawn.
Shatter.
Ironfang
has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of
Shatter
(DC 17).
Ironfang
regains 1d3 expended charges daily at dawn.
The Rumbling.
While inside an earth node, you can perform a ritual called the Rumbling, using
Ironfang
to create a
devastation orb of earth
(see the
Devastation Orb
description for the time and cost of the ritual). Once you perform the ritual,
Ironfang
can’t be used to perform the ritual again until the next dawn.
Flaw.
Ironfang
heightens its wielder’s destructive nature. While attuned to the weapon, you gain the following flaw: “I like to break things and cause ruin.”`,
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
      name: "Korolnor Scepter",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `The
Korolnor Scepter
is one of ten Ruling Scepters of Shanatar, forged by the dwarven gods and given to the ruling houses of the ancient dwarven empire. The
Korolnor Scepter
's location was unknown for the longest time until a storm giant queen, Neri, found it in a barnacle-covered shipwreck at the bottom of the Trackless Sea. The Ruling Scepters are all roughly the same size and shape, but their materials and properties vary.
The
Korolnor Scepter
is a tapered mithral rod as thick and long as a dwarf's forearm, with a small platinum knob at the bottom and a rounded disk adorned with a ring of seven tiny blue gems at the top.
You gain a +3 bonus to attack and damage rolls made with this scepter, which can be wielded as a magic club.
You can use the properties of the
Wyrmskull Throne
, as well as the properties of the scepter itself. The scepter has 10 charges, and it regains 1d6 + 4 expended charges at dawn. Its properties are as follows:
If you are underground or underwater, you can use an action to expend 1 charge to determine the distance to the surface.
As an action, you can expend 2 charges to cast the
Sending
spell from the scepter.
As an action, you can expend 3 charges to cast the
Teleport
spell from the scepter. If the destination is within 60 feet of the
Wyrmskull Throne
, there is no chance of a teleport error or mishap occurring.`,
    },
    {
      name: "Longbow of the Healing Hearth",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This ivory longbow is inscribed with a prayer to the god Hiatea, the runes of which are entwined with gilded engravings of wheat stalks and deer antlers.
You gain a +3 bonus to attack and damage rolls made with this weapon. If you load no ammunition in the weapon, it produces its own, automatically creating one magic arrow when you pull back the string. The arrow created by the bow vanishes the instant after it hits or misses a target.
The bow has 8 charges for the following properties, which you can use while wielding the bow. The bow regains 1d4 + 1 charges daily at dawn.
Curative Arrow.
When you take the Attack action using the bow, you can expend 1 charge to replace one of your attacks with a blazing arrow of curative magic, which automatically hits one creature you can see within 150 feet of you. The target can then immediately spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your Wisdom modifier (minimum of +1). If the target has no unspent Hit Dice remaining, nothing happens. You can use a curative arrow only once per turn.
Spellcasting.
While holding the bow, you can use an action to expend 1 or more of its charges to cast one of the following spells from it (save DC 18):
Create Food and Water
(1 charge),
Warding Bond
(2 charges),
Guardian of Faith
(3 charges).`,
    },
    {
      name: "Lost Crown of Besilmer",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:
You have resistance to psychic damage.
You have advantage on saving throws against effects that would charm you.
You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the num­ber rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.`,
    },
    {
      name: "Luck Blade",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.
Luck.
If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.
Wish.
The sword has 1d4- 1 charges. While holding it, you can use an action to expend 1 charge and cast the
Wish
spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges.`,
    },
    {
      name: "Luxon Beacon",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This dodecahedron of faintly glowing crystal is heavier than it appears. A set of handles are affixed to its sides, and it pulsates and thrums when touched.
Fragment of Possibility.
A creature that touches the beacon and concentrates for 1 minute receives a Fragment of Possibility, which looks like a Tiny, grayish bead of energy that follows the creature around, staying within 1 foot of it at all times. The fragment lasts for 8 hours or until used. Once the beacon grants a Fragment of Possibility, it can't grant another until the next dawn. A creature with a Fragment of Possibility from a
Luxon Beacon
can't gain another Fragment of Possibility from any source.
When a creature with a Fragment of Possibility makes an attack roll, an ability check, or a saving throw, it can expend its fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the creature, it can expend its fragment to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.
If the original d20 roll has advantage or disadvantage, the creature rolls its d20 after advantage or disadvantage has been applied to the original roll.
Soul Snare.
If a follower of the Luxon who has undergone a ritual of consecution dies within 100 miles of a
Luxon Beacon
, their soul is ensnared by it. This soul will be reincarnated within the body of a random humanoid baby developing within 100 miles of the beacon.`,
    },
    {
      name: "Matalotok",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Matalotok
, the Frost Father, is an ancient hammer fashioned by Thyrm, the god of frost giants. The favored weapon of the demon lord Kostchtchie,
Matalotok
is frigid to the touch and wreathed in mist.
You are immune to cold damage while holding
Matalotok
. Whenever it deals damage to a creature, the hammer radiates a burst of intense cold in a 30-foot-radius sphere. Each creature in that area takes 10 (3d6) cold damage.`,
    },
    {
      name: "Moonblade",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Of all the magic items created by the elves, one of the most prized and jealously guarded is a
moonblade
. In ancient times, nearly all elven noble houses claimed one such blade. Over the centuries, some blades have faded from the world, their magic lost as family lines have become extinct. Other blades have vanished with their bearers during great quests. Thus, only a few of these weapons remain.
A
moonblade
passes down from parent to child. The sword chooses its bearer and remains bonded to that person for life. If the bearer dies, another heir can claim the blade. If no worthy heir exists, the sword lies dormant. It functions like a normal longsword until a worthy soul finds it and lays claim to its power.
A
moonblade
serves only one master at a time. The attunement process requires a special ritual in the throne room of an elven regent or in a temple dedicated to the elven gods.
A
moonblade
won't serve anyone it regards as craven, erratic, corrupt, or at odds with preserving and protecting elvenkind. If the blade rejects you, you make ability checks, attack rolls, and saving throws with disadvantage for 24 hours. If the blade accepts you, you become attuned to it and a new rune appears on the blade. You remain attuned to the weapon until you die or the weapon is destroyed.
A
moonblade
has one rune on its blade for each master it has served (typically 1d6 + 1). The first rune always grants a +1 bonus to attack and damage rolls made with this magic weapon. Each rune beyond the first grants the
moonblade
an additional property. The DM chooses each property or determines it randomly on the Moonblade Properties table.
Moonblade Properties
d100
Property
01-40
Increase the bonus to attack and damage rolls by 1, to a maximum of +3. Reroll if the
moonblade
already has a +3 bonus.
41-80
The
moonblade
gains a randomly determined minor property (see "Special Features" in the
Dungeon Master's Guide
).
81-82
The
moonblade
gains the finesse property.
83-84
The
moonblade
gains the thrown property (range 20/60 feet).
85-86
The
moonblade
functions as a
defender
.
87-90
The
moonblade
scores a critical hit on a roll of 19 or 20.
91-92
When you hit with an attack using the
moonblade
, the attack an extra 1d6 slashing damage.
93-94
When you hit a creature of a specific type (such as dragon, fiend, or undead) with the
moonblade
, the target takes an extra 1d6 damage of one of these types: acid, cold, fire, lightning, or thunder.
95-96
You can use a bonus action to cause the
moonblade
to flash brightly. Each creature that can see you and is within 30 feet of you must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute . A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until you take a short rest while attuned to the weapon.
97-98
The
moonblade
functions as a
ring of spell storing
.
99
You can use an action to call forth an elfshadow, provided that you don't already have one serving you. The elfshadow appears in an unoccupied space within 120 feet of you. It uses the statistics for a
shadow
from the
Monster Manual
, except it is neutral, immune to effects that turn undead, and doesn't create new shadows. You control this creature, deciding how it acts and moves. It remains until it drops to 0 hit points or you dismiss it as an action.
00
The
moonblade
functions as a
vorpal sword
.
Sentience.
A
moonblade
is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 10, and a Charisma of 12. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates by transmitting emotions, sending a tingling sensation through the wielder's hand when it wants to communicate something it has sensed. It can communicate more explicitly, through visions or dreams, when the wielder is either in a trance or asleep.
Personality.
Every
moonblade
seeks the advancement of elvenkind and elven ideals. Courage, loyalty, beauty, music, and life are all part of this purpose.
The weapon is bonded to the family line it is meant to serve. Once it has bonded with an owner who shares its ideals, its loyalty is absolute.
If a
moonblade
has a flaw, it is overconfidence. Once it has decided on an owner, it believes that only that person should wield it, even if the owner falls short of elven ideals.`,
    },
    {
      name: "Murgaxor's Orb",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Roiling green mist fills this glass orb, which the exiled Strixhaven mage Murgaxor once used in foul magical experiments. Murgaxor's spirit has infused the orb, which he uses to spread a terrible curse among Strixhaven's students.
Sentience.
Murgaxor's orb
is a sentient, chaotic evil magic item with the following properties:
The orb has an Intelligence of 20, a Wisdom of 16, and a Charisma of 16, as well as hearing and darkvision out to a range of 30 feet.
The orb can speak, read, and understand Common, and it can communicate telepathically with any creature touching it.
At any time during your turn, the orb can cast the
Suggestion
spell (save DC 17), targeting you or one other creature that touched the orb within the last 24 hours. This isn't a power of the orb that you control.
Curse.
Any Humanoid you touch while holding the orb must succeed on a DC 10 Wisdom saving throw or become cursed. Each creature cursed by the orb bears an echo of Murgaxor's hateful thoughts, and that creature suffers from headaches that are persistent but not debilitating until the curse ends. On your turn, the orb can use an action to produce one of the following effects, targeting one or more creatures it has cursed:
Unconsciousness.
The cursed creature falls unconscious for 1 hour. The creature is roused if it takes damage or someone uses an action to shake or slap it awake.
Visions of Terror.
The cursed creature sees terrifying visions, causing it to view all creatures that aren't also cursed as dangerous monsters for 10 minutes. The cursed creature must use its action each round to make one attack against the nearest non-cursed creature. If the cursed creature has multiple possible targets, it attacks one at random. This effect ends if the cursed creature is incapacitated.
After either of these effects ends, the affected creature is no longer cursed. The curse can also be removed from a creature with a
Remove Curse
spell or similar magic. All cases of the curse end if
Murgaxor's orb
is destroyed.
Magical Signature.
As a side effect of the orb's curse, the spell
Detect Magic
reveals an aura of enchantment surrounding creatures bearing the curse. This aura is distinctive, but in a way
Detect Magic
offers no further details about.
Destroying the Orb.
Murgaxor's orb
has AC 18; 20 hit points; immunity to necrotic, poison, and psychic damage; and resistance to all other types of damage. If reduced to 0 hit points, the orb shatters.`,
    },
    {
      name: "Nepenthe",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.
While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.
Sentience.
Nepenthe is a sentient neutral evil weapon with an Intelligence of 10, a Wisdom of 8, and a Charisma of 18. It has hearing and darkvision out to a range of 60 feet. It can read and understand Elvish. It can also speak Elvish, but only through the voice of its wielder, with whom the sword can communicate telepathically.
Personality.
In its lifetime, the sword has beheaded thousands of criminals, not all of whom were guilty of the crimes for which they were convicted. The sword cannot distinguish the guilty from the innocent. With each beheading, it hungers for more justice and blood. The sword is corrupt and irredeemable.`,
    },
    {
      name: "Nether Scroll of Azumar",
      rarity: "Legendary",
      itemType: "Scroll",
      attunment: false,
      price: 5000,
      description: `Unlike most scrolls, a Nether Scroll of Azumar is not a consumable magic item. It takes 30 days of concentrated study—at least 8 hours per day—to attempt to understand this scroll. After completing this study, you must make a DC 25 Intelligence (Arcana) check. If this check fails, you take 16d10 psychic damage, and you can attempt the check again after another 30 days of concentrated study.
When you succeed on the check, you gain the following benefits:
Your Intelligence score increases by 2, to a maximum of 22. Once you gain this benefit, you can't use this scroll to increase your Intelligence again.
You gain advantage on saving throws against spells and other magical effects.
When you gain the scroll's benefits, a stone golem magically appears in an unoccupied space within 60 feet of you and acts as your ally. If you die, the golem turns to dust.`,
    },
    {
      name: "Nightbringer",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This heavy mace has a dark oaken handle and a head of blackened steel trimmed with gold. In combat, the mace’s head is wreathed in inky black energy.
You gain a +3 bonus to attack and damage rolls made with this weapon. When you hit with an attack roll using it, the target takes an additional 4d4 radiant damage.
If you have an evil alignment, you also gain the following benefits when attuned to Nightbringer:
Blessing of the Dragon Queen.
You are immune to the charmed and frightened conditions, and you gain immunity to one of the following damage types (choose when you attune to the weapon): acid, cold, fire, lightning, or poison.
Eyes of Midnight.
You have darkvision with a range of 60 feet. If you already have darkvision, its range increases by 60 feet.
Midnight Shroud.
The weapon has 6 charges. When you hit a creature with an attack using this weapon, you can expend one charge to force the creature to make a DC 20 Constitution saving throw. On a failed save, the creature is blinded until the start of your next turn. The weapon regains 1d6 expended charges daily at dawn.`,
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
      name: "Obsidian Flint Dragon Plate",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: false,
      price: 5000,
      description: "You gain a +2 bonus to AC and resistance to poison damage while you wear this armor. ln addition, you gain advantage on ability checks and saving throws made to avoid or end the grappled condition on yourself.",
    },
    {
      name: "Orb of Skoraeus",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `Said to be infused with the wisdom and power of the god Skoraeus, this polished stone orb is veined with iridescent crystal that seems to glow from within. The orb is 8 inches in diameter and weighs 8 pounds, making it a palm-sized trinket for a stone giant but a more unwieldy item for a Medium creature to use.
While holding this orb, you can use it as a spellcasting focus for your spells. You also gain the following benefits:
Abundant Components.
The orb has 3 charges and regains all expended charges at dawn. When you cast a spell while holding this orb, you can expend up to 3 charges to ignore the spell’s material components with a gold piece cost, up to 300 gp per charge expended.
Astute Mind.
You gain a +2 bonus to any Constitution saving throw you make to maintain your concentration on a spell.
Divine Sight.
You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.`,
    },
    {
      name: "Orcsplitter",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A mighty axe wielded long ago by the dwarf king Torhild Flametongue,
Orcsplitter
is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for “orc,” but the runes are depicted with a gap or slash through the markings; the word “orc” is literally split in two.
You gain the following benefits while holding this magic weapon:
You gain a +2 bonus to attack and damage rolls made with it.
When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.
You can’t be surprised by orcs while you’re not inca­pacitated. You are also aware when orcs are within 120 feet of you and aren’t behind total cover, although you don’t know their location.
You and any of your friends within 30 feet of you can’t be frightened while you’re not incapacitated.
Sentience.
Orcsplitter
is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder’s mind a couplet or stanza of ancient Dwarvish verse.
Personality.
Orcsplitter
is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon’s purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves — giants, goblins, and, most of all, orcs — and silently urges its possessor to meet such creatures in battle.`,
    },
    {
      name: "Plate Armor of Etherealness",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `While you're wearing this armor, you can speak its command word as an action to gain the effect of the
Etherealness
spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.`,
    },
    {
      name: "Platinum Scarf",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This scarf is made of sturdy cloth and covered in platinum-colored scales.
As an action, you can pull a scale from the scarf and speak a command word. When you do so, choose one of the following effects:
Breath of Life.
The scale disappears, and you or a creature you touch regains 10d4 hit points.
Platinum Shield.
For 1 hour or until you dismiss it (no action required), the scale becomes a +1 shield, which you or another creature can use. A creature wielding the shield has immunity to radiant damage.
Radiant Hammer.
For 1 hour or until you dismiss it (no action required), the scale becomes a magic light hammer, which you or another creature can use. The weapon deals 2d4 radiant damage, instead of the bludgeoning damage normal for a light hammer. It deals an extra 2d4 radiant damage to chromatic dragons.
Once three scales have been pulled from the scarf, no more scales can be removed until the next dawn, when all the missing scales grow back. If you pull off a scale but don’t speak a command word, it disappears after 1 minute.`,
    },
    {
      name: "Potion of Dragon's Majesty",
      rarity: "Legendary",
      itemType: "Potion",
      attunment: false,
      price: 5000,
      description: "",
    },
    {
      name: "Potion of Giant Size",
      rarity: "Legendary",
      itemType: "Potion",
      attunment: false,
      price: 5000,
      description: `When you drink this potion, you become Huge for 24 hours if you are Medium or smaller, otherwise the potion does nothing. For that duration, your Strength becomes 25, if it isn't already higher, and your hit point maximum is doubled (your current hit points are doubled when you drink the potion). In addition, the reach of your melee attacks increases by 5 feet.
Everything you are carrying and wearing also increases in size for the duration. When rolling damage for weapons enlarged in this manner, roll three times the normal number of dice; for example, an enlarged longsword would deal 3d8 slashing damage (instead of 1d8), or 3d10 slashing damage (instead of 1d10) when used with two hands.
When the effect ends, any hit points you have above your hit point maximum become temporary hit points.
This potion is a pale white liquid made from the tongue of a giant clam, with a pungent aroma akin to that of rotting algae. It tastes sweet, however, when consumed.`,
    },
    {
      name: "Potion of Giant Strength",
      rarity: "Legendary",
      itemType: "Potion",
      attunment: false,
      price: 5000,
      description: `When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). This potion has no effect on you if your Strength is equal to or greater than that score.
This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.
Type of Giant | Strength | Rarity
Storm Giant | 29 | Legendary`,
    },
    {
      name: "Powered Armor",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `Powered Armor
resembles a suit of unusual plate armor, with finely articulated joints connected by an oily, black, leather-like material. The armor has been worked to create the appearance of a heavily muscled warrior, and its great helm is unusual in that it has no openings —- only a broad glass plate in the front with a second piece of glass above it. Strange plates, tubing, and large metal bosses adorn the armor in seemingly random fashion. On the back of the armor’s left gauntlet is a rectangular metal box, from which projects a short rod tipped with a cone-shaped red crystal.
While wearing this armor, you gain the following benefits:
You have a +1 bonus to AC.
Your Strength score is 18 (this has no effect if your Strength is already 18 or higher).
You have advantage on death saving throws.
The armor has further capabilities that can be powered either by energy cells or by your own life energy. You can use a bonus action to draw power from an energy cell or sacrifice hit points to gain one of the following benefits:
Emit a force field to gain 2d6 + 5 temporary hit points (1 charge or 5 hit points).
Activate boosters to gain a flying speed of 15 feet for 1minute (1 charge or 5 hit points).
Fire arm-mounted laser:
Ranged Weapon Attack
: +8 to hit, range 120 feet, one target.
Hit
: 2d6 radiant damage (1 charge or 5 hit points).
Translate any writing you can see in any nonmagical language, to a total of one thousand words over 1 minute (1 charge or 5 hit points).
Fill the armor with air, allowing you to breathe normally in any environment for up to 1 hour (1 charge or 5 hit points).
Gain darkvision to a range of 60 feet for up to 1 hour (1 charge or 5 hit points).
The armor can accept only one energy cell at a time. It is found with one energy cell attached, containing 2d10 charges.
Powered Armor Options
Depending on where and how it appears in the adventure, you might wish to modify the features of Kwalish’s legendary
Powered Armor
.
Automatic Defenses.
Unless Kwalish deactivates the suit’s automatic defenses, no one can approach the armor without setting those defenses off. Treat the armor as a
shield guardian
that has stored a
Magic Missile
spell cast using a 4th-level spell slot. When the armor is reduced to 0 hit points, its defenses are rendered inert and it can be safely approached.
Battle of Wills.
When donned by a new user, the armor deems itself superior and attempts to take possession of that user. The user must succeed on a DC 13 Charisma saving throw or be possessed by the armor. While possessed, the user is incapacitated and loses control of its body but retains its awareness. The armor uses the possessed user’s statistics (as adjusted by the armor), but doesn’t gain access to the user’s knowledge, features, or proficiencies.
Freeing a creature trapped inside the armor first requires defeating the armor’s automatic defenses (as above). The trapped creature can also attempt a DC 20 Charisma saving throw each day at dawn. On a successful save, the armor no longer controls the creature and can be safely donned by that creature at any time.
Stasis.
Whenever a creature wearing the armor drops to 0 hit points, the armor places that creature into a state of stasis. While in this state, the creature is stable and does not make death saving throws, but the armor takes control of the creature (as above). Additionally, the armor attempts to assume the identity of the user, assuring their allies that nothing is amiss. Freeing the user first requires defeating the armor’s automatic defenses (as above). A creature in stasis does not make Charisma saving throws to break the armor’s control.
Alternative Power.
Powered Armor
originally required energy cells to fuel it, but was adapted by Kwalish to be fueled by the life energy of the creature wearing it. You might decide that the armor can also draw power from additional sources, or that energy cells can be recharged with the aid of a tinker, inventor, or artificer. It might also be possible for allies to connect to the armor through the use of magic that generates a conduit something like an astral silver cord. While so connected, a willing ally can give up hit points as a reaction to fuel the armor’s abilities.`,
    },
    {
      name: "Prehistoric Figurines of Wondrous Power",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world.
As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn’t enough space for the creature, the figurine doesn’t become a creature.
The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature’s statistics.
The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can’t be used again until a certain amount of time has passed, as specified in the figurine’s description.
===
Jasper Tyrannosaurus Rex (Legendary). This figurine, crafted from rare green jasper, becomes a tyrannosaurus rex for up to 1 hour. Once it has been used, it can’t be used again until 14 days have passed.
Whenever you command the figurine while it’s in tyrannosaurus rex form (including commanding it to revert to figurine form), you must roll a d20. On a 1, you lose control of the figurine, and it becomes hostile to you and your companions until it is reduced to 0 hit points, at which point it reverts to figurine form.`,
    },
    {
      name: "Pyxis of Pandemonium",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `A creature that touches this ornate wooden vessel for 1 minute gains the benefits of a short rest. That creature also gains the effects of the bless spell until the creature finishes a short or long rest. The creature can't gain these benefits again until it finishes a long rest.
If the vessel is opened, roll on the Pyxis of Pandemonium table to determine what happens. Any spells cast by the vessel have a spell save DC of 17. One minute after the vessel is opened, it disappears. It reappears, sealed, in a random location on the same plane of existence 24 hours later.
Curse.
Any creature that gains the benefit of a short rest from the vessel hears cloying telepathic whispers emanating it. That creature must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the vessel for 1 hour. The charmed creature does everything it can to open the vessel as soon as possible. On a successful save, the creature is immune to the vessel's whispers for 24 hours.
Pyxis of Pandemonium
d8
Calamity
1
Androphagia.
Each creature within 60 feet of the vessel must succeed on a DC 17 Wisdom saving throw or go berserk for l minute. The berserk creature must begin its turn using the Attack action to make one melee or ranged attack (its choice) against the creature nearest to it. The berserk creature can repeat the save at the end of its turn, ending the effect on itself on a success.
2
Bile Blight.
The vessel casts the
Harm
spell on each creature within 30 feet of it.
3
Flood.
The vessel casts the
Tsunami
spell at a point of the DM's choice within 120 feet of it.
4
Medusa's Gaze.
The vessel casts the
Flesh to Stone
spell on each creature within 30 feet of it.
5
Labyrinth.
The vessel casts the
Maze
spell on each creature within 30 feet of it.
6
Nightmare.
Tendrils of shadow seep from the vessel and form into 1d4
shadow demons
(see the
Monster Manual
for their stat block), which appear in unoccupied spaces within 30 feet of it and are hostile.
7
Swarming Insects.
The vessel casts the
Insect Plague
spell, centered on itself and with a radius of 30 feet.
8
Unbridled Revel.
The vessel casts the
Otto's Irresistible Dance
spell on each creature within 30 feet of it.`,
    },
    {
      name: "Rakdos Riteknife",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +1 bonus to attack and damage rolls made with this magic weapon. Its blade is cruelly serrated, and its hilt resembles a demonic head and wings. Whenever you slay a creature with an attack using the dagger, the creature's soul is imprisoned inside the dagger, and that creature can be restored to life only by a
Wish
spell. The dagger can hold a maximum of five souls.
For each soul imprisoned in the dagger, your attacks with it deal an extra 1d4 necrotic damage on a hit. While the dagger is within 5 feet of you, your dreams are haunted by whispers from the trapped souls.
The dagger has the following additional properties.
Siphon Vitality.
As a bonus action, you can release any number of stored souls from the dagger to regain 1d10 hit points per soul released.
Annihilation.
If the dagger holds five souls, you can use this property: As a reaction immediately after you hit a creature with the dagger and deal damage to that target, you can release all five souls. If the target now has fewer than 75 hit points, it must succeed on a DC 15 Constitution saving throw or die. If the target dies, you can't use this property again until you finish a long rest.`,
    },
    {
      name: "Reaper's Scream",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `The spikes of this iron morningstar glow with sickly, pale light. The death rune is inscribed on its shaft and inlaid with pearl.
You gain a +2 bonus to attack and damage rolls made with this weapon, and attacks with this weapon deal necrotic damage instead of piercing damage.
When you attack a creature with this weapon and roll a 20 on the attack roll, you gain 10 temporary hit points. Any creature that hits you with a melee attack while you have 1 or more of these temporary hit points takes 10 necrotic damage.
Invoking the Rune.
As a bonus action, you can invoke the weapon’s rune, unleashing the screams of every creature slain by the weapon in one cacophonous burst. Each creature of your choice within 60 feet of you must succeed on a DC 15 Wisdom saving throw or have the stunned condition until the start of your next turn.
Once the rune has been invoked, it can’t be invoked again until the next dawn.`,
    },
    {
      name: "Red Wizard Blade",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: false,
      price: 5000,
      description: `Forged by Red Wizards using a secret process known only to them, this grim steel dagger draws its power from the Negative Plane. When you hit a creature with a melee attack using this magic dagger, the target takes an extra 3d12 necrotic damage.
A creature reduced to 0 hit points by this weapon dies and can’t be raised from the dead except by a deity or by a creature using a tablet of reawakening to cast the
True Resurrection
spell.`,
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
      name: "Ring of Invisibility",
      rarity: "Legendary",
      itemType: "Ring",
      attunment: true,
      price: 5000,
      description: "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.",
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
      name: "Robe of the Archmagi",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe's color corresponds to the alignment for which the item was created. A white robe was made for good. gray for neutral, and black for evil. You can't attune to a
robe of the archmagi
that doesn't correspond to your alignment.
You gain these benefits while wearing the robe:
If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.
You have advantage on saving throws against spells and other magical effects.
Your spell save DC and spell attack bonus each increase by 2.`,
    },
    {
      name: "Rod of Lordly Might",
      rarity: "Legendary",
      itemType: "Rod",
      attunment: true,
      price: 5000,
      description: `This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.
Six Buttons.
You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.
If you press
button 1
, the rod becomes a
Flame Tongue
as a fiery blade sprouts from the end opposite the rod's flanged head (you choose the type of sword).
If you press
button 2
, the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.
If you press
button 3
, the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.
If you press
button 4
, the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.
If you press
button 5
, the rod transforms into a handheld battering ram and grants you a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.
If you press
button 6
, the rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.
Drain Life.
When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failure, the target rakes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.
Paralyze.
When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure , the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.
Terrify.
While holding the rod, you can use an action to force each creature you can see with in 30 feet of you to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.`,
    },
    {
      name: "Rod of Resurrection",
      rarity: "Legendary",
      itemType: "Rod",
      attunment: true,
      price: 5000,
      description: `This rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it:
Heal
(expends 1 charge) or
Resurrection
(expends 5 charges.
The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.`,
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
      name: "Ruinblade",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Ruinblade
is a unique weapon possessed by Moghadam, the architect of the Tomb of Horrors. A symbol of his authority, Moghadam carries the weapon during the time frame of the adventure to intimidate the tomb’s workers. (In later years, after Acererak trapped Moghadam in the completed tomb as an undead archwraith, Moghadam was able to use the weapon as his own phylactery.)
A small jade version of the green devil face of the Tomb of Horrors is fashioned into the hilt of the weapon, with the blade extending from its open mouth. The blade always appears ruined and rusting, and causes its surroundings to appear reflected in the blade as if in a state of decay.
You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit an undead creature with it, the attack deals an extra 1d8 force damage.
In addition, the weapon has the following properties:
Blighted Ruin.
You can cast the
Blight
spell from the weapon (DC 15). Once used, this property of the weapon can’t be used until the next dawn.
Destructive Ruin.
You can cast the
Disintegrate
spell from the weapon, but can target only a nonmagical object or a creation of magical force. Once used, this property of the weapon can’t be used until dawn seven days later.
Curse.
This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a
Remove Curse
spell or similar magic, you are unwilling to part with the weapon.
The weapon must take direct part in the destruction of 1,000 gp worth of materials and objects every seven days, or a conflict arises between you and the weapon at the end of the seventh day.
Sentience.
Ruinblade
is a sentient lawful evil weapon with an Intelligence of 15, a Wisdom of 8, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet.
The weapon can speak, read, and understand Common, and can communicate with its wielder telepathically. Its voice is a rough, ruined echo. While you are attuned to it,
Ruinblade
also understands every language you know.
Personality.
Ruinblade
speaks either with a dolorous or frenetic tone, depending on its mood. That mood improves when the sword is actively engaged in acts of destruction, but worsens if the blade is left inactive too long.
The weapon’s purpose is to ruin and unmake existing objects, so that its owner can rebuild the world from a blank slate. It thus encourages its wielder to engage in constant destruction, claiming that this will allow the creation of a more superior vision from the ruin of what came before.`,
    },
    {
      name: "Scaled Ornament",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon’s scale, tooth, or claw, or it incorporates images in those shapes.
Slumbering (Uncommon). You have advantage on saving throws you make to avoid being charmed or frightened or to end those conditions on you.
Stirring (Rare). You gain a +1 bonus to AC, and you can’t be charmed or frightened. Moreover, each creature of your choice within 30 feet of you has advantage on saving throws it makes to avoid being charmed or frightened or to end those conditions on itself.
Wakened (Very Rare). The Wakened ornament has the Stirring property. In addition, when you would take damage of the type dealt by the breath of the dragon in whose hoard the ornament became Wakened, you can use your reaction to take no damage instead, and you regain hit points equal to the damage you would have taken. Once this property is used, it can’t be used again until the next dawn.
Ascendant (Legendary). The Ascendant ornament has the Stirring and Wakened properties. In addition, while you are wearing the ornament, you gain a flying speed equal to your walking speed and can hover. While you are flying using this speed, spectral dragon wings appear on your back.`,
    },
    {
      name: "Scarab of Protection",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:
You have advantage on saving throws against spells.
The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.`,
    },
    {
      name: "Scroll of Tarrasque Summoning",
      rarity: "Legendary",
      itemType: "Scroll",
      attunment: false,
      price: 5000,
      description: `Using an action to read the scroll causes the tarrasque (see the creature's entry in the
Monster Manual
) to appear in an unoccupied space you can see within 1 mile of you. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself.`,
    },
    {
      name: "Scroll of the Comet",
      rarity: "Legendary",
      itemType: "Scroll",
      attunment: false,
      price: 5000,
      description: `By using an action to read the scroll, you cause a comet to fall from the sky and crash to the ground at a point you can see up to 1 mile away from you. You must be outdoors when you use the scroll, or nothing happens and the scroll is wasted.
The comet creates a 50-foot-deep, 500-foot-radius crater on impact. Any creature in that radius must make a DC 20 Dexterity saving throw, taking 30d10 force damage on a failed saving throw, or half as much damage on a successful one. All structures in the crater are destroyed, as are all nonmagical objects that aren't being worn or held.`,
    },
    {
      name: "Shard Solitaire",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This gemstone contains an unstable extradimensional rift. Its facets are ribboned with iridescent veins that seem to move of their own accord. Five types of
shard solitaire
are known to exist, each one a different type of gemstone, as shown in the Shard Solitaire Types table.
Rift Step.
As a bonus action, while wearing or holding the
shard solitaire
, you can teleport yourself, along with anything you're wearing or carrying, to an unoccupied space you can see within 30 feet of yourself.
When you use this property, you can tap into the unstable power of the stone's extradimensional rift to increase the teleport distance by up to 30 feet, but if you teleport more than 30 feet using Rift Step, you must succeed on a DC 16 Constitution saving throw or take 3d10 force damage immediately after you teleport.
Spellcasting.
The stone has 6 charges and regains 1d6 expended charges daily at dawn. The Shard Solitaire Types table lists the spells common to all
shard solitaires
, as well as the spells specific to each kind of stone. As an action, you can cast one of the stone's spells by expending the requisite number of charges, requiring no material components (save DC 16).
Shard Solitaire Types
Shard Solitaire
Spells
All
Banishment
(3 charges; the target is banished to the stone's extradimensional space for the spell's duration),
Mirror Image
(1 charge)
Black Sapphire
Blight
(3 charges),
Finger of Death
(6 charges)
Diamond
Ice Storm
(3 charges),
Simulacrum
(6 charges; the duplicate created by the spell has the same number of hit points as the creature it imitates)
Jacinth
Fireball
(2 charges),
Fire Storm
(6 charges)
Rainbow Pearl
Prismatic Spray
(6 charges),
Water Breathing
(2 charges)
Ruby
Fly
(2 charges),
Teleport
(6 charges)`,
    },
    {
      name: "Shield of the Blazing Dreadnought",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `Modeled after the formidable spiked tower shields wielded by some fire giants, this iron shield emanates a constant warmth.
You can use a bonus action to activate the shield, causing glowing lava to flow through the shield’s grooves for 1 minute. While the shield is active, you gain the following benefits:
Blazing Soul.
You have immunity to fire damage.
Cleansing Fire.
As an action, you can cause the shield to flare with the cleansing fire of the god Surtur. Choose one creature you can see within 30 feet of yourself (you can choose yourself). One disease or condition of your choice affecting this creature ends immediately; the condition can be blinded, charmed, deafened, or poisoned.
Shield Bash.
When you take the Attack action on your turn, you can replace one of your attacks with a shield bash, targeting one creature you can see within 5 feet of yourself. The target must make a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier). On a failed save, the target takes 3d6 bludgeoning damage plus 3d6 fire damage and is knocked prone. On a successful save, the target takes half as much damage only. You can use Shield Bash only once per turn.
Once the shield has been activated, it can’t be activated again until the next dawn.`,
    },
    {
      name: "Shield of the Hidden Lord",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `The
Shield of the Hidden Lord
is of celestial origin and serves as a prison for the pit fiend Gargauth, whose mortal followers revere it as a god. Over time, Gargauth's evil has warped the shield's appearance, so that its celestial motif and designs have become twisted into a fiendish face that subtly moves in disturbing ways.
While holding this shield, you gain a +2 bonus to AC and resistance to fire damage.
Sentience.
The
Shield of the Hidden Lord
is sentient as long as it imprisons Gargauth. While sentient, the shield has the following properties:
The shield has an Intelligence of 22, a Wisdom of 18, and a Charisma of 24, as well as hearing and truesight out to a range of 120 feet.
The shield can speak, read, and understand Common and Infernal, and it can communicate telepathically with any creature it can sense within 120 feet of it. Its voice is a deep, hollow whisper.
The shield has 3 charges. You can use an action to expend 1 charge to cast
Fireball
or 2 charges to cast
Wall of Fire
from the shield (save DC 21 for each). The wall of fire spell lasts for 1 minute (no concentration required). The shield regains all expended charges daily at dawn.
Anytime during your turn, the shield can choose to radiate an aura of dread for 1 minute. (This is not a power of the shield that you control.) Any creature hostile to you that starts its turn within 20 feet of the shield must make a DC 18 Wisdom saving throw. On a failed save, the creature is frightened until the start of its next turn. On a successful save, the creature is immune to this power of the shield for the next 24 hours. Once the shield uses this power, it can't use it again until the next dawn.
Gargauth's Personality.
Gargauth desperately seeks freedom but can't escape on its own. The pit fiend won't reveal its true nature, referring to itself only as the Hidden Lord. It drops hints and subtle suggestions that it is an angel trapped in an unholy prison. If released from the shield, the pit fiend honors the terms of whatever bargain it struck to facilitate its escape.
While trapped in the shield, Gargauth carefully steers the shield's current owner toward committing acts of cruelty and domination, hoping to condemn the individual's soul to the Nine Hells. Conflict occurs if the shield's owner does anything that would make it more difficult for Gargauth to escape its prison, such as leaving the shield in a place where others are unlikely to find it.
Gargauth doesn't know how to escape from the shield. The pit fiend believes (incorrectly) that it can break free of the shield if it's brought to the Nine Hells, for it's convinced that the shield's powers are weaker there.
Freeing Gargauth.
Casting
Dispel Evil and Good
on the shield has a 1 percent chance of freeing the pit fiend, or automatically succeeds if the spell is cast by a solar, a planetar, or an archdevil. A god can release the pit fiend by touching the shield and speaking Gargauth's name. When released, Gargauth appears in a random, unoccupied space as close to the shield as possible.`,
    },
    {
      name: "Snicker-Snack",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic vorpal sword. In addition, the weapon ignores resistance to slashing damage.
When you use this weapon to attack a creature that has at least one head and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, it doesn't have or need a head, it has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.
While attuned to
Snicker-Snack
, you have proficiency with greatswords, and you can use your Charisma modifier instead of your Strength modifier for attack and damage rolls made with the weapon.
Sentience.
Snicker-Snack
is a sentient, chaotic good greatsword with an Intelligence of 9, a Wisdom of 14, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can speak, read, and understand Common, and its voice sounds silvery and melodic.
Snicker-Snack
craves the destruction of evil Dragons and urges you to seek out these creatures and slay them.
Snicker-Snack
has a fickle personality. It ends its attunement to you if you miss on attack rolls with the weapon three times in a row. Each time you finish a long rest after that happens, you can attempt to regain the sword's trust by making a contested Charisma check against
Snicker-Snack
. If you win the contest, your attunement to the weapon is instantly restored. Your attunement to the weapon can't be restored in any other way.`,
    },
    {
      name: "Sovereign Glue",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with
Oil of Slipperiness
. When found, a container contains 1d6 + 1 ounces.
One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of
Universal Solvent
or
Oil of Etherealness
, or with a
Wish
spell.`,
    },
    {
      name: "Spell Bottle",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This glass bottle can store one spell of up to 5th level at a time. When found, roll a d6 and subtract 1: the total determines the level of spell in the bottle (the DM chooses the spell, and 0 means the bottle is empty). A swirling blue vapor fills the bottle while it contains a spell.
When the bottle is empty, any creature can cast a spell of 1st through 5th level into it by touching it while casting. The spell has no effect other than to be stored in the bottle.
While holding the bottle, you can cast the spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The bottle becomes empty once the spell is cast.
If you're holding the empty bottle when you see a creature casting a spell within 60 feet of you, you can open the bottle as a reaction in an attempt to interrupt the spell. If the creature is casting a spell of 3rd level or lower, the spell has no effect, and it is stored in the bottle. If it is casting a spell of 4th level or higher, make an Intelligence check. The DC equals 10 + the spell's level. On a success, the spell has no effect, and it is stored in the bottle.`,
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
      name: "Spell Scroll",
      rarity: "Legendary",
      itemType: "Scroll",
      attunment: false,
      price: 5000,
      description: `A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.
If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.
Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.
The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.
Spell Level| Rarity | Save DC | Attack Bonus
7th | Legendary | 18 | +10
8th | Legendary | 18 | +10
9th | Legendary | 19 | +11
A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.`,
    },
    {
      name: "Sphere Of Annihilation",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.
The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a
sphere of annihilation
, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.
The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 x your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.
If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.
If the sphere comes into contact with a planar portal, such as that created by the
Gate
spell, or an extradimensional space, such as that within a
Portable Hole
, the DM determines randomly what happens, using the following table.
d100
Result
01-50
The sphere is destroyed.
51-85
The sphere moves through the portal or into the extradimensional space.
86-00
A spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.`,
    },
    {
      name: "Spindle Of Fate",
      rarity: "Legendary",
      itemType: "Wand",
      attunment: true,
      price: 5000,
      description: `This wand is shaped like a drop spindle wrapped in red thread. The wand has 6 charges that can be used for the following properties:
Battle Foreknowledge.
When you roll initiative, you can expend 1 charge to add or subtract your proficiency bonus from the total roll.
Doom Foretold.
As an action, you can expend 2 charges to target a creature within 30 feet of yourself and invoke that creature’s doom. While the target is on the same plane of existence as you, you can sense the direction to its location, and you know the direction of its movement if it’s in motion. Additionally, once per turn when you deal damage to the doomed creature, you can roll 1d6 and add the number rolled to the damage roll. These benefits persist for 1 hour or until you target another creature with this effect.
Twist of Fate.
When a creature within 60 feet of you makes a saving throw or an attack roll, you can use your reaction to expend 3 charges and alter the outcome, turning a failed saving throw into a successful one, a missed attack roll into a hit, or vice versa.
The wand regains 1d6 expended charges daily at dawn.`,
    },
    {
      name: "Staff of the Magi",
      rarity: "Legendary",
      itemType: "Staff",
      attunment: true,
      price: 5000,
      description: `This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to spell attack rolls.
The staff has 50 charges for the following properties. The staff regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.
Spell Absorption.
While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).
Spells.
While holding this staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus:
Conjure Elemental
(7 charges),
Dispel Magic
(3 charges),
Fireball
(7th-level version, 7 charges),
Flaming Sphere
(2 charges),
Ice Storm
(4 charges),
Invisibility
(2 charges),
Knock
(2 charges),
Lightning Bolt
(7th-level version, 7 charges),
Passwall
(5 charges),
Plane Shift
(7 charges),
Telekinesis
(5 charges),
Wall of Fire
(4 charges), or
Web
(2 charges).
You can also use an action to cast one of the following spells from the staff without using any charges:
Arcane Lock
,
Detect Magic
,
Enlarge/Reduce
,
Light
,
Mage Hand
, or
Protection from Evil and Good
.
Retributive Strike.
You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.
You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 x the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.
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
      name: "Stonebreaker's Breastplate",
      rarity: "Legendary",
      itemType: "Armor",
      attunment: true,
      price: 5000,
      description: `This breastplate is made from marbled granite, though it feels no heavier than a typical metal breastplate. Its chest is emblazoned with the stone rune.
While wearing this breastplate, you have resistance to bludgeoning, piercing, and slashing damage and are immune to being knocked prone.
Invoking the Rune.
As an action, you can invoke the breastplate’s rune to cast the
Wall of Stone
spell (save DC 14) with it. When you cast the spell in this way, you have advantage on saving throws made to maintain concentration on the spell.
Once the rune has been invoked, it can’t be invoked again until the next dawn.`,
    },
    {
      name: "Stormgirdle",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `A
Stormgirdle
is a wide belt made of thick leather branded with the symbol of Kord. The girdle's clasps are made from dragon ivory.
Dormant.
While wearing the
Stormgirdle
in its dormant state, you have resistance to lightning damage and thunder damage, and your Strength score becomes 21 if it isn't already 21 or higher. In addition, you can use an action to become a Storm Avatar for 1 minute, gaining the following benefits for the duration:
You have immunity to lightning damage and thunder damage.
When you hit with a weapon attack that normally deals bludgeoning damage, it deals thunder damage instead. When you hit with a weapon attack that normally deals piercing or slashing damage, it deals lightning damage instead.
As a bonus action, you can choose one creature you can see within 30 feet of you to be struck by lightning. The target must make a DC 15 Dexterity saving throw, taking 3d6 lightning damage on a failed save, or half as much damage on a successful one.
Once you use the girdle's Storm Avatar property, that property can't be used again until the next dawn.
Awakened.
While wearing the
Stormgirdle
in its awakened state, you gain the following benefits:
Your Strength score becomes 23 if it isn't already 23 or higher.
Your Storm Avatar's lightning strike deals 4d6 lightning damage (instead of 3d6).
While transformed into a Storm Avatar, you gain a flying speed of 30 feet and can hover.
Exalted.
While wearing the
Stormgirdle
in its exalted state, you gain the following benefits:
Your Strength score becomes 25 if it isn't already 25 or higher.
Your Storm Avatar's lightning strike deals 5d6 lightning damage (instead of 3d6).
You can cast the
Control Weather
spell from the girdle. This property can't be used again until the next dawn.`,
    },
    {
      name: "Sunsword",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `The
Sunsword
is a unique blade once possessed by Strahd's brother, Sergei von Zarovich. In its original form, it had a platinum hilt and guard, and a thin crystal blade as strong as steel.
Strahd employed a powerful wizard named Khazan to destroy the weapon after Sergei's death. The first part of the process required the hilt and the blade to be separated, which Khazan accomplished. While Khazan was busying himself destroying the blade, his apprentice stole the hilt and fled. Khazan later located his apprentice's mutilated corpse in the Svalich Woods, but the hilt was nowhere to be found. To avoid the vampire's wrath, Khazan told Strahd that the entire weapon had been destroyed.
The hilt, which is sentient, knows that it can never be reunited with its original crystal blade. It has, however, gained the properties of a
Sun Blade
.
Sentience.
The
Sunsword
is a sentient chaotic good weapon with an Intelligence of 11, a Wisdom of 17, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon communicates by transmitting emotions to the creature carrying or wielding it.
Personality.
The
Sunsword
's special purpose is to destroy Strahd, not so much because it wants to free the land of Barovia from evil but because it wants revenge for the loss of its crystal blade. The weapon secretly fears its own destruction.`,
    },
    {
      name: "Sword of Answering",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as "Final Word." Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel.
Name
Alignment
Gem
Answerer
Chaotic good
Emerald
Back Talker
Chaotic evil
Jet
Concluder
Lawful neutral
Amethyst
Last Quip
Chaotic neutral
Tourmaline
Rebutter
Neutral good
Topaz
Replier
Neutral
Peridot
Retorter
Lawful good
Aquamarine
Scather
Lawful evil
Garnet
Squelcher
Neutral evil
Spinel
You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.`,
    },
    {
      name: "Sword of the Planes",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic sword.
This sword can tear the fabric of reality, creating a temporary rift between planes. You can use your action to choose a different plane of existence from the one you’re on and slice through an unoccupied space within 5 feet of yourself, creating a rift to that other plane. The rift can be up to 10 feet high and 10 feet wide, and it lasts for 1 minute. Once this property is used, it can’t be used again until the next dawn.
You can specify a target destination, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second layer of the Nine Hells, and the rift opens in or near that destination (DM’s discretion). If you are trying to reach the City of Brass, for example, the rift might appear on the Street of Steel, before the Gate of Ashes, or facing the city from across the Sea of Fire, at the DM’s discretion.
Anything that enters the rift is instantly transported to the other plane, appearing in the unoccupied space nearest to the rift.`,
    },
    {
      name: "Tablet of Reawakening",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `Witches of Rashemen created this Tiny stone tablet to counter the necromancy of the Red Wizards. As an action, you can cast
True Resurrection
from the tablet. Once used in this way, the tablet turns to dust and is destroyed.`,
    },
    {
      name: "Talarith",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `The reigar who creates this piece of jewelry chooses its form: bracelet, brooch, diadem, or necklace. While the reigar wears the
talarith
, any weapon wielded by the reigar deals an extra 1d6 force damage when it hits.
As an action, a reigar can use its
talarith
to summon a golem that looks just like the reigar. The golem obeys the reigar's commands and uses the reigar's statistics, except it is a Construct that doesn't have a
talarith
of its own. The golem vanishes after 1 hour, or when it is reduced to 0 hit points. After summoning a golem, the reigar must finish a short or long rest before this property can be used again.`,
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
      name: "Telescopic Transporter",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This enormous telescope allows you to view distant celestial objects, including stars, Wildspace systems, and Astral Sea phenomena like the cities of deities or the petrified husks of dead gods.
After spending 1 hour calibrating the telescope, you can attempt to travel to the planet or celestial body at which the telescope is currently pointed. At the end of the hour, make a DC 17 Intelligence (Arcana) check. On a successful check, you and eight other willing creatures touching the telescope, along with everything all travelers are wearing and carrying, safely teleport to unoccupied spaces at the intended destination. On a failed check, a mishap occurs instead. The DM rolls on the Telescope Travel Mishaps table to determine the mishap or chooses a mishap that’s good for the campaign.
Telescope Travel Mishaps
d6
Mishap
1
The travelers appear adrift in the Astral Sea.
2
The travelers appear on a different plane of existence, determined randomly or chosen by the DM.
3
Excess cosmic energy overloads the telescope, causing it to explode. Each creature within 60 feet of the telescope takes 8d6 necrotic damage. Any Humanoid who survives this damage is transformed into a different kind of creature, as if it had been subject to the
Reincarnate
spell.
4
A creature from the Astral Sea (such as a githyanki knight) appears within 60 feet of the telescope. The DM decides its attitude.
5
The travelers appear on a different planet or celestial body in the Wildspace system nearest to their target destination.
6
The travelers arrive at their intended destination, but they each appear coated in harmless slime.`,
    },
    {
      name: "Tinderstrike",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A flint dagger,
Tinderstrike
is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.
You gain a +2 bonus to attack and damage rolls you make with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.
Fire Mastery.
You gain the following benefits while you hold
Tinderstrike
:
You can speak Ignan fluently.
You have resistance to fire damage.
You can cast
Dominate Monster
(save DC 17) on a fire elemental. Once you have done so,
Tinderstrike
can’t be used this way again until the next dawn.
Dance of the All-Consuming Fire.
While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using
Tinderstrike
to create a
devastation orb of fire
(see the
Devastation Orb
description for the time and cost of the ritual). Once you perform the ritual,
Tinderstrike
can’t be used to perform the ritual again until the next dawn.
Flaw.
Tinderstrike
makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: “I act without thinking and take risks without weighing the consequences.”`,
    },
    {
      name: "Tome of the Stilled Tongue",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first
tome of the stilled tongue
once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.
If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components Once used, this property of the tome can't be used again until the next dawn.
While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.
Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.`,
    },
    {
      name: "Topaz Annihilator",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `This magic ranged weapon resembles a musket, but in lieu of any ammunition, it holds a glowing yellow scale from a topaz dragon in its heart.
The weapon has a normal range of 100 feet and a long range of 300 feet, and it has the two-handed property. It deals 2d6 necrotic damage on a hit. If this damage reduces a creature or object to 0 hit points, the target is reduced to dust. A creature reduced to dust can be restored to life only by a true resurrection or wish spell.
While the weapon is on your person, you can use an action to cast the
Disintegrate
spell (save DC 18). Once this property is used, it can’t be used again until the next dawn.`,
    },
    {
      name: "Universal Solvent",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches including
Sovereign Glue
.`,
    },
    {
      name: "Verminshroud",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This patchy cloak was pieced together from the pelts of rats found feasting on the dead in Blightshore and is dotted with the bloated corpses of magically preserved insects along its seams.
Dormant.
While wearing the
Verminshroud
in its dormant state, you gain the following benefits:
You have advantage on Wisdom (Perception) checks that rely on smell, you are immune to disease, and you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the cloak increases the range of your darkvision by 60 feet.
As an action, you can use the verminshroud to cast
Polymorph
on yourself, transforming into a
giant rat
or
rat
while retaining your Intelligence, Wisdom, and Charisma scores, as well as the properties of the cloak. This property can't be used again until the next dawn.
Awakened.
While wearing the
Verminshroud
in its awakened state, you gain the following benefits:
You have resistance to poison damage.
You can use an action to cast the
Insect Plague
spell (save DC 15) from the
Verminshroud
, requiring no material components. This property can't be used again until the next dawn.
When you cast the
Polymorph
spell using the
Verminshroud
, you can transform into a
giant wasp
.
Exalted.
While wearing the
Verminshroud
in its exalted state, you gain the following benefits:
You gain a climbing speed equal to your walking speed.
Your teeth become razor-sharp natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. You can make this attack as a bonus action. When you bite a creature and deal damage to it, the creature must succeed on a DC 17 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the condition on itself on a success.
When you cast the
Polymorph
spell using the
Verminshroud
, you can transform into a
giant scorpion
.`,
    },
    {
      name: "Vorpal Sword",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.
When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.`,
    },
    {
      name: "Wave",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Held in the dungeon of White Plume Mountain, this trident is an exquisite weapon engraved with images of waves, shells, and sea creatures. Although you must worship a god of the sea to attune to this weapon,
Wave
happily accepts new converts.
You gain a +3 bonus to attack and damage rolls made with this magic weapon. If you score a critical hit with it, the target takes extra necrotic damage equal to half its hit point maximum.
The weapon also functions as a
Trident of Fish Command
and a
Weapon of Warning
. It can confer the benefit of a
Cap of Water Breathing
while you hold it, and you can use it as a
Cube of Force
by choosing the effect, instead of pressing cube sides to select it.
Sentience.
Wave
is a sentient weapon of neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Aquan. It can also speak with aquatic animals as if using a speak with animals spell, using telepathy to involve its wielder in the conversation.
Personality.
When it grows restless,
Wave
has a habit of humming tunes that vary from sea chanteys to sacred hymns of the sea gods.
Wave
zealously desires to convert mortals to the worship of one or more sea gods, or else to consign the faithless to death. Conflict arises if the wielder fails to further the weapon's objectives in the world.
The trident has a nostalgic attachment to the place where it was forged, a desolate island called Thunderforge. A sea god imprisoned a family of storm giants there, and the giants forged
Wave
in an act of devotion to — or rebellion against — that god.
Wave
harbors a secret doubt about its own nature and purpose. For all its devotion to the sea gods,
Wave
fears that it was intended to bring about a particular sea god's demise. This destiny is something
Wave
might not be able to avert.`,
    },
    {
      name: "Waythe",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Waythe
is a unique greatsword most recently in the possession of a high-ranking cloud giant ambassador.
You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature of the giant type with it, the giant takes an extra 2d6 slashing damage, and it must succeed on a DC 15 Strength saving throw or fall prone.
The sword also functions as a
Wand of Enemy Detecetion
. It regains all of its expended charges at dawn and isn't at risk of crumbling if its last charge is used.
Sentience.
Waythe
is a sentient weapon of neutral good alignment, with an Intelligence of 12, a Wisdom of 2, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.
The weapon can speak and understand Giant and Common, and it can communicate telepathically with its wielder.
Personality.
This sword believes in freedom and allowing others to live as they see fit. It is protective of its friends, and wants to be friends with a like-minded wielder. (It takes only 1 minute for a good-aligned character to gain attunement with the sword.)
Waythe
is courageous to the point of foolhardiness, however, and vocally urges bold action. It is likely to come into conflict with an evil or a timid wielder.`,
    },
    {
      name: "Well of Many Worlds",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: false,
      price: 5000,
      description: `This fine black cloth, such as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.
You can use an action to unfold and place the
well of many worlds
on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once
well of many worlds
has opened a portal, it can't do so again for 1d8 hours.`,
    },
    {
      name: "Whelm",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `Whelm is a powerful warhammer forged by dwarves and lost in the dungeon of White Plume Mountain.
You gain a +3 bonus to attack and damage rolls made with this magic weapon. At dawn the day after you first make an attack roll with
Whelm
, you develop a fear of being outdoors that persists as long as you remain attuned to the weapon. This causes you to have disadvantage on attack rolls, saving throws, and ability checks while you can see the daytime sky.
Thrown Weapon.
Whelm
has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged weapon attack using it, the target takes an extra 1d8 bludgeoning damage, or an extra 2d8 bludgeoning damage if the target is a giant. Each time you throw the weapon, it flies back to your hand after the attack. If you don't have a hand free, the weapon lands at your feet.
Shock Wave.
You can use an action to strike the ground with
Whelm
and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 15 Constitution saving throw or become stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once used, this property can't be used again until the next dawn.
Supernatural Awareness.
While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can use an action to cast
Detect Evil and Good
or
Locate Object
object from the weapon. Once you cast either spell, you can't cast it from the weapon again until the next dawn.
Sentience.
Whelm
is a sentient lawful neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.
The weapon communicates telepathically with its wielder and can speak, read, and understand Dwarvish. Giant, and Goblin. It shouts battle cries in Dwarvish when used in combat.
Personality.
Whelm
's purpose is to slaughter giants and goblinoids. It also seeks to protect dwarves against all enemies. Conflict arises if the wielder fails to destroy goblins and giants or to protect dwarves.
Whelm
has ties to the dwarf clan that created it, variously called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. It would do anything to protect those dwarves from harm.
The hammer also carries a secret shame. Centuries ago, a dwarf named Ctenmiir wielded it valiantly for a time. But Ctenmiir was turned into a vampire. His will was strong enough that he bent
Whelm
to his evil purposes, even killing members of his own clan.`,
    },
    {
      name: "Windvane",
      rarity: "Legendary",
      itemType: "Weapon",
      attunment: true,
      price: 5000,
      description: `A silver spear,
Windvane
has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.
You have a +2 bonus to attack rolls and damage rolls you make with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.
Air Mastery.
You gain the following benefits while you hold
Windvane
:
You can speak Auran fluently.
You have resistance to lightning damage.
You can cast
Dominate Monster
(save DC 17) on an air elemental. Once you have done so,
Windvane
can’t be used this way again until the next dawn.
Song of the Four Winds.
While inside an air node, you can perform a ritual called the Song of the Four Winds, using
Windvane
to create a
devastation orb of air
(see the
Devastation Orb
description for the time and cost of the ritual). Once you perform the ritual,
Windvane
can’t be used to perform the ritual again until the next dawn.
Flaw.
Windvane
makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: “I break my vows and plans. Duty and honor mean nothing to me.”`,
    },
    {
      name: "Witchlight Vane",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This ornate rod is topped by a pair of butterfly wings and incorporates bits of red glass into its length. It weighs 3 pounds.
Magic Weapon.
In the hands of one who is attuned to it, the vane can be wielded as a magic mace that grants a +3 bonus to attack and damage rolls made with it. In addition, the vane deals an extra 1d8 radiant damage on a hit.
Sense Mood.
While the vane is inside the perimeter of the Witchlight Carnival, it can sense the mood of every creature in the carnival that has an Intelligence of 4 or higher. As an action, a creature attuned to the vane can use it to pinpoint the location of the happiest creature in the carnival.
The butterfly shape at the top of the vane spins slowly clockwise when spirits in the carnival are generally high; if the general mood in the carnival is dour, the top of the vane spins slowly counterclockwise.
Sentience.
The vane is a sentient, chaotic good wondrous item with an Intelligence of 11, a Wisdom of 14, and a Charisma of 14. It has hearing and normal vision out to a range of 30 feet, and it communicates by transmitting emotion to the creature attuned to it. Its purpose is to make sure everyone in the Witchlight Carnival is having a good time.
Additional Properties.
The vane has the following additional properties:
The creature holding the vane has vulnerability to lightning damage.
The creature attuned to the vane can't be blinded, deafened, petrified, or stunned.
While carrying the vane, the creature attuned to it can cast the
Dancing Lights
,
Polymorph
, or
Ray of Frost
spell as an action, requiring no spell components and using Charisma as the spellcasting ability. After the vane's
Polymorph
spell is cast, roll a d8; on a roll of 3 or 8, the vane can't be used to cast this spell again until the next dawn.`,
    },
    {
      name: "Witchlight Watch",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This ornate pocket watch is fastened to the end of a gold chain. It glows with a faint golden light when opened, and it makes a soft ticking noise that can be heard only by the creature holding it. The face of the watch shows a miniature painting of the Witchlight Carnival ringed by a tiny henge, orbited at night by a mote of light small enough to slip through the eye of a needle. This light causes the henge to cast shadows, and these shadows allow the watch's owner to track the passage of time.
Carnival Setup and Takedown.
The creature attuned to the watch can use an action to initiate the packing up or the unpacking of the Witchlight Carnival, provided the creature and the carnival are on the same plane of existence. In the span of 1 hour, all objects that are elements of the carnival are magically whisked about until everything is packed up and ready for travel, or unpacked and assembled. The watch has no effect on creatures, which can move about freely and safely while the carnival is being set up or taken down. Once the process of packing up or unpacking the carnival begins, it can't be stopped until the task is complete. When the watch is used to pack up or unpack the carnival, this property cannot be used again until 8 hours have elapsed.
Additional Properties.
The pocket watch has the following additional properties:
While carrying the watch, the creature attuned to it can cast the
Fire Bolt
,
Invisibility
, or
Message
spell as an action, requiring no spell components and using Intelligence as the spellcasting ability. After the watch's
Invisibility
spell is cast, roll a d8; on a roll of 3 or 8, the watch can't be used to cast this spell again until the next dawn.
The creature attuned to the watch gains 30 pounds. This extra weight vanishes when the attunement ends.
The creature attuned to the watch must eat and drink eight times the normal amount each day.`,
    },
    {
      name: "Wreath of the Prism",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `This loop of golden thorns is inset with dozens of gems representing the five colors of Tiamat.
Dormant.
While wearing the wreath in its dormant state, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the wreath increases the range of your darkvision by 60 feet.
When you hit a beast, dragon, or monstrosity of challenge rating 5 or lower with an attack, or when you grapple it, you can use the wreath to cast
Dominate Monster
on the creature (save DC 13). On a successful save, the target is immune to the power of the wreath for 24 hours. On a failure, a shimmering, golden image of the wreath appears as a collar around the target's neck or as a crown on its head (your choice) until it is no longer charmed by the spell. If you use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by you.
Awakened.
Once the
Wreath of the Prism
reaches an awakened state, it gains the following benefits:
You can affect creatures of challenge rating 10 or lower with the wreath.
The save DC of the wreath's spell increases to 15.
Exalted.
Once the
Wreath of the Prism
reaches an exalted state, it gains the following benefits:
You can affect creatures of challenge rating 15 or lower with the wreath.
The save DC of the wreath's spell increases to 17.`,
    },
    {
      name: "Ythryn Mythallar",
      rarity: "Legendary",
      itemType: "Wondrous Item",
      attunment: true,
      price: 5000,
      description: `A
mythallar
looks like an enormous crystal ball held in an ornate cradle. The globe sheds bright light in a 300-foot radius and dim light for an additional 300 feet. The globe draws magic from the Weave that can be harnessed for various purposes. For example, Netherese mages used
mythallars
to keep their cities aloft and empower their magic items. The bigger the
mythallar
, the more magic it can hold. The largest
mythallars
are 150 feet in diameter.
The
Ythryn mythallar
is a relatively small device — a mere 50 feet in diameter. To attune to this
mythallar
, a creature must finish a short rest within 30 feet of it, meditating on the
mythallar
. Up to eight creatures can be attuned to it at one time; otherwise, the
Ythryn mythallar
follows the attunement rules in the
Dungeon Master's Guide
. If a ninth creature tries to attune to the
mythallar
, nothing happens.
All creatures attuned to the
Ythryn mythallar
can sense when the device is being used. A creature attuned to the device can use any of its properties, but only if all other creatures attuned to the device agree to allow it. The
Ythryn mythallar's
properties are as follows:
While you're on the same plane of existence as the
Ythryn mythallar
, you can use an action to cause it to fly in any direction you choose at a speed of 30 feet. All matter within 500 feet of the device moves with it. The
Ythryn mythallar
and all structures held aloft by it hover in place when not in motion.
As an action, you can cause one magic item you are holding within 30 feet of the
Ythryn mythallar
to immediately regain all its expended charges or uses. A magic item recharged in this manner can't be recharged by the
Ythryn mythallar
again until after the item regains expended charges or uses on its own.
You can use the
Ythryn mythallar
to cast the
Control Weather
spell without requiring any components and without the need for you to be outdoors. This casting of the spell has a 50-mile radius. For the duration of the spell's casting time, you must be within 30 feet of the
Ythryn mythallar
or the spell fails.
Touching the Mythallar
. Any creature that touches the globe of the
mythallar
must make a DC 22 Constitution saving throw, taking 180 (20d10 + 70) radiant damage on a failed save, or half as much damage on a successful one. Undead have disadvantage on this saving throw. Any object that touches the globe, other than an artifact or the
mythallar's
cradle, is disintegrated instantly (no save).`,
    }
  ],
};
