export interface SlimeSizeOption {
  roll: string;
  label: "Tiny" | "Small" | "Medium";
  armorClass: number;
  hpMultiplier: number;
}

export interface SlimeTemperamentOption {
  roll: number;
  label: string;
  statBonus: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
}

export interface SlimeBodyTypeOption {
  roll: number;
  label: string;
  baseHp: number;
  speed: string;
}

export interface SlimeAccessoryOption {
  roll: number;
  label: string;
  effect: string;
}

export interface SlimeFlavorOption {
  roll: number;
  label: string;
  resistance: string;
}

export interface GeneratedSlime {
  name: string;
  size: SlimeSizeOption;
  temperament: SlimeTemperamentOption;
  bodyType: SlimeBodyTypeOption;
  accessory: SlimeAccessoryOption;
  flavor: SlimeFlavorOption;
  maxHp: number;
}

export const slimeSizeOptions: SlimeSizeOption[] = [
  { roll: "1", label: "Tiny", armorClass: 13, hpMultiplier: 1 },
  { roll: "2-3", label: "Small", armorClass: 15, hpMultiplier: 2 },
  { roll: "4", label: "Medium", armorClass: 17, hpMultiplier: 3 },
];

export const slimeTemperamentOptions: SlimeTemperamentOption[] = [
  { roll: 1, label: "Slappy", statBonus: "STR" },
  { roll: 2, label: "Zippy", statBonus: "DEX" },
  { roll: 3, label: "Hardy", statBonus: "CON" },
  { roll: 4, label: "Smarty", statBonus: "INT" },
  { roll: 5, label: "Jumpy", statBonus: "WIS" },
  { roll: 6, label: "Happy", statBonus: "CHA" },
];

export const slimeBodyTypeOptions: SlimeBodyTypeOption[] = [
  { roll: 1, label: "Liquidy", baseHp: 5, speed: "10 ft Walk, 40 ft Swim" },
  { roll: 2, label: "Bubbly", baseHp: 10, speed: "40 ft Walk" },
  { roll: 3, label: "Jiggly", baseHp: 15, speed: "30 ft Walk" },
  { roll: 4, label: "Rubbery", baseHp: 15, speed: "35 ft Walk, 10 ft Climb" },
  { roll: 5, label: "Sticky", baseHp: 18, speed: "5 ft Walk, 5 ft Climb, 5 ft Swim" },
  { roll: 6, label: "Bouncy", baseHp: 20, speed: "25 ft Walk, 20 ft Climb" },
  { roll: 7, label: "Slippery", baseHp: 22, speed: "∞ ft Walk (can’t stop on its own)" },
  { roll: 8, label: "Chunky", baseHp: 25, speed: "20 ft Walk" },
];

export const slimeAccessoryOptions: SlimeAccessoryOption[] = [
  { roll: 1, label: "Cute Bow", effect: "Can telepathically communicate" },
  { roll: 2, label: "An Outfit", effect: "Adds +1 to Charisma checks" },
  { roll: 3, label: "Glitter", effect: "Leaves a sparkle trail" },
  { roll: 4, label: "Cozy Blanket", effect: "It’s just a blanket… what a waste" },
  { roll: 5, label: "Snack Pouch", effect: "Heals Slime 1d6 once per long rest" },
  { roll: 6, label: "Squeaky Toy", effect: "+1 to Performance checks" },
  { roll: 7, label: "Tiny Hat", effect: "Advantage on Deception checks" },
  { roll: 8, label: "Jingle Collar", effect: "+1 to CON saves" },
  { roll: 9, label: "Friendship Bracelet", effect: "BFFs 4ever!" },
  { roll: 10, label: "Slime Plushie", effect: "Split into two once per long rest" },
];

export const slimeFlavorOptions: SlimeFlavorOption[] = [
  { roll: 1, label: "Pineapple Slime", resistance: "Acid" },
  { roll: 2, label: "Coconut Slime", resistance: "Bludgeoning" },
  { roll: 3, label: "Mint Slime", resistance: "Cold" },
  { roll: 4, label: "Cherry Slime", resistance: "Fire" },
  { roll: 5, label: "Vanilla Slime", resistance: "Force" },
  { roll: 6, label: "Lemon Slime", resistance: "Lightning" },
  { roll: 7, label: "Grape Slime", resistance: "Necrotic" },
  { roll: 8, label: "Durian Slime", resistance: "Piercing" },
  { roll: 9, label: "Lime Slime", resistance: "Poison" },
  { roll: 10, label: "Plum Slime", resistance: "Psychic" },
  { roll: 11, label: "Orange Slime", resistance: "Radiant" },
  { roll: 12, label: "Banana Slime", resistance: "Thunder & Slashing" },
];

export function rollOne<T>(options: T[]): T {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

export function generateSlime(indexHint = 1): GeneratedSlime {
  const size = rollOne(slimeSizeOptions);
  const temperament = rollOne(slimeTemperamentOptions);
  const bodyType = rollOne(slimeBodyTypeOptions);
  const accessory = rollOne(slimeAccessoryOptions);
  const flavor = rollOne(slimeFlavorOptions);
  const maxHp = bodyType.baseHp * size.hpMultiplier;

  return {
    name: `${flavor.label} #${indexHint}`,
    size,
    temperament,
    bodyType,
    accessory,
    flavor,
    maxHp,
  };
}
