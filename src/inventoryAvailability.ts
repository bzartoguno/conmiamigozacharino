import { rarityOrder } from "./itemDisplay";
import { Item } from "./types";

export type SettlementType = "Travel" | "Isolated Dwelling" | "Thorpe" | "Hamlet" | "Village" | "Town" | "City" | "Metropolis";
export type ItemRarity = (typeof rarityOrder)[number];

/** The single source of truth for settlement inventory availability percentages. */
export const settlementRarityAvailability: Record<Exclude<SettlementType, "Travel">, Record<ItemRarity, number>> = {
  "Isolated Dwelling": { Common: 25, Uncommon: 0, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Thorpe: { Common: 50, Uncommon: 0, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Hamlet: { Common: 100, Uncommon: 50, Rare: 0, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Village: { Common: 100, Uncommon: 100, Rare: 50, "Very Rare": 0, Legendary: 0, Artifact: 0 },
  Town: { Common: 100, Uncommon: 100, Rare: 100, "Very Rare": 50, Legendary: 0, Artifact: 0 },
  City: { Common: 100, Uncommon: 100, Rare: 100, "Very Rare": 100, Legendary: 50, Artifact: 25 },
  Metropolis: { Common: 100, Uncommon: 100, Rare: 100, "Very Rare": 100, Legendary: 100, Artifact: 100 },
};

function getKnownRarity(rarity?: string): ItemRarity | undefined {
  const normalized = (rarity ?? "Common").toLowerCase();
  return rarityOrder.find((candidate) => candidate.toLowerCase() === normalized);
}

export function getAvailableItems<T extends Item>(items: T[], settlementType?: SettlementType, random: () => number = Math.random): T[] {
  if (!settlementType || settlementType === "Travel") return [...items];

  const availability = settlementRarityAvailability[settlementType];
  return items.filter((item) => {
    const rarity = getKnownRarity(item.rarity);
    if (!rarity) return true;
    const percent = availability[rarity];
    return percent === 100 || (percent > 0 && random() * 100 < percent);
  });
}
