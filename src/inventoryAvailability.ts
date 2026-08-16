import { Item } from "./types";

export const rarityOrder = [
  "Common",
  "Uncommon",
  "Rare",
  "Very Rare",
  "Legendary",
  "Artifact",
] as const;

export type ItemRarity = typeof rarityOrder[number];
export type TownTag =
  | "Travel"
  | "Isolated Dwelling"
  | "Thorpe"
  | "Hamlet"
  | "Village"
  | "Town"
  | "City"
  | "Metropolis";

// One shared source of truth for settlement inventory availability. Values are
// probabilities from 0 to 1 and are evaluated independently for every item.
export const settlementRarityAvailability: Record<Exclude<TownTag, "Travel">, Record<ItemRarity, number>> = {
  "Isolated Dwelling": { Common: 0.25, Uncommon: 0, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Thorpe: { Common: 0.5, Uncommon: 0, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Hamlet: { Common: 1, Uncommon: 0.5, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Village: { Common: 1, Uncommon: 1, Rare: 0.5, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Town: { Common: 1, Uncommon: 1, Rare: 1, "Very Rare": 0.5, Legendary: 0, Artifact: 0 },
  City: { Common: 1, Uncommon: 1, Rare: 1, "Very Rare": 1, Legendary: 0.5, Artifact: 0.25 },
  Metropolis: { Common: 1, Uncommon: 1, Rare: 1, "Very Rare": 1, Legendary: 1, Artifact: 1 },
};

function itemRarity(item: Item): ItemRarity {
  const rarity = item.rarity ?? "Common";
  return rarityOrder.includes(rarity as ItemRarity) ? rarity as ItemRarity : "Common";
}

export function getAvailableItems<T extends Item>(
  items: T[],
  townTag?: TownTag,
  random: () => number = Math.random
): T[] {
  if (!townTag || townTag === "Travel") return [...items];

  const chances = settlementRarityAvailability[townTag];
  return items.filter((item) => {
    const chance = chances[itemRarity(item)];
    return chance === 1 || (chance > 0 && random() < chance);
  });
}
