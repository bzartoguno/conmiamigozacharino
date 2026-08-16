import { Tribe } from "../types";
import { createGoblinExcuses } from "../tribeInsults";

export const tribe5: Tribe = {
  name: "Railblade Raiders",
  percentAngry: 10,
  priceVariability: 33,
  insults: createGoblinExcuses("Railblade Raiders"),

  items: [
    {
      name: "Cat Cape, Cat Cape, your wearing a Cat Cape!",
      rarity: "Uncommon",
      itemType: "Ring",
      attunment: false,
      price: 250,
      description: "Cape of Nine Lives, this cape is guarded by a mischievous cat spirit that protects you from death nine times. Whenever you take damage that would otherwise reduce your hit points to 0, you are instead reduced to 1 hit point. If an effect would kill you instantly without causing damage, that effect is nullified. However, each time the cape saves your life, you gradually take on feline traits, such as whiskers, cat ears, and behaviors like the compulsion to knock things over. Casting Greater Restoration or Remove Curse can reverse these changes.",
    },
    {
      name: "Glowy Piece of Paper!",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Annabel’s Fresh scratch ticket",
    },
    {
      name: "Black and Yellow Barrel of Fidget Spinners & Sickness",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Deals 1d10 true damage if you are within 5 ft of this object. I think you're smart enough to figure out why.)",
    },
    {
      name: "Mama Headache Barrel",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "Contains gasoline.",
    },
    {
      name: "Not a Beehive",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Chainsaw Sword, + STR to hit, deals 1d20 + CON + STR slashing damage.)",
    },
    {
      name: "Lead Belcher",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(A portable cannon that may explode if used too much, + STR to hit, deals 1d12 + CON + STR blunt damage.)",
    },
    {
      name: "Gallon of Americano Blood",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "It's a jug oil.",
    },
    {
      name: "Whizz Bang",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Dangerous firework bundle capable of lighting up the night sky in just a flash.)",
    },
    {
      name: "Aaaaggghh!",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Flash grenade.)",
    },
    {
      name: "Fwoosh!!!",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Flamethrower, deals 1d12 + CON + DEX fire damage. WARNING",
    },
    {
      name: "Zip Zap Dead",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Tesla Coil Pistol, +DEX to hit, deals 1d12 + CON + DEX lightning damage. WARNING: WILL NOT WORK IF WET.)",
    },
    {
      name: "Danger Lady's Meany Stick",
      rarity: "Uncommon",
      itemType: "Weapon",
      attunment: false,
      price: 250,
      description: "(Witch's Broom, while riding your current fly speed is equal to half of your walking speed. It may have a mind of its own.)",
    },
    {
      name: "Nice Dwarf’s Ticket!",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: "(Pat's get-out-of-jail scratch ticket; scratching this ticket will teleport you back to the last place you slept. It can only be used five times before it dissolves.)",
    },
    {
      name: "Sometimes works, sometimes doesn't",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: "(Moonsliver Cloak: this cloak makes the wearer invisible while outdoors at night. It doesn't work for a week before and after a lunar eclipse.)",
    },
    {
      name: "One cool jacket",
      rarity: "Rare",
      itemType: "Weapon",
      attunment: false,
      price: 1000,
      description: "(Storm Rider Jacket, AC is now 12; gain resistance to lightning and a flight speed of 45.)",
    },
    {
      name: "Donjon's Sundering Sphere",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: `This marble-size crystal sphere glows with extraplanar energy.
As part of attuning to this item, you press the crystal sphere to the hilt of a nonmagical melee weapon of your choice, magically attaching the sphere to the weapon. The weapon becomes a magic weapon with a +1 bonus to attack and damage rolls. While wielding this weapon, you gain the following benefits:
Dimensional Anchor. You have advantage on saving throws against spells or effects that would send you to an extradimensional space, a demiplane, or another plane of existence against your will.
Isolating Smite. When you hit a creature with this weapon, you can force the creature to make a DC 16 Charisma saving throw. On a failed save, the creature is banished to a harmless demiplane until the end of its next turn. When the banished creature returns, it reappears in the space it left or the nearest unoccupied space if that space is occupied. Once this property is used, it can’t be used again until the next dawn.
When you end your attunement to the sphere, the sphere harmlessly detaches from the weapon, and the weapon reverts to a nonmagical piece of equipment`,
    },
    {
      name: "Gauntlets of Flaming Fury",
      rarity: "Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 1000,
      description: "While you wear both of these steel gauntlets, any nonmagical weapon you grasp with either gauntlet is treated as a magic weapon. As a bonus action, you can use the gauntlets to cause magical flames to envelop one or two melee weapons in your grasp. Each flaming weapon deals an extra 1d6 fire damage on a hit. The flames last until you sheath or let go of either weapon. Once used, this property can't be used again until the next dawn.",
    },
    {
      name: "Ingot of the Skold Rune",
      rarity: "Very Rare",
      itemType: "Wondrous Item",
      attunment: true,
      price: 2500,
      description: `This appears to be a simple ingot of iron ore, about a foot long and a few inches across. Inspection of its surface reveals the faint, silvery outline of the skold (shield) rune. The ingot has the following properties, which work only while it's on your person.
Runic Shield.
You have a +1 bonus to AC.
Shield Bond.
As a bonus action, choose a creature that you can see within 30 feet of you, other than yourself. Until the end of your next turn, any damage the target takes is reduced to l, but you take half the damage prevented in this way. The damage you take can't be reduced in any way. Once you use this property, you can't use it again until you finish a short or long rest.
Shield Ward.
You can transfer the ingot's magic to a nonmagical item — a shield or a two-handed melee weapon — by tracing the skold rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the ingot is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:
Shield.
The shield is now a rare magic item that requires attunement. Its magic gives you a + 1 bonus to AC, and the first time after each of your long rests that damage reduces you to 0 hit points, you are instead reduced to 1 hit point. You must be wielding the shield to gain these benefits.
Weapon.
The weapon is now an uncommon magic weapon. It grants you a +1 bonus to AC while you're holding it.`,
    },
    {
          name: "Stupid Slippery Ticket",
          price: 6000,
          description: "(Keoki's leave-no-trace-behind scratch-off ticket; wipe away your physical evidence of any crime you've committed in the last month. It can only be used five times before it dissolves.)",
        }
  ],
};
