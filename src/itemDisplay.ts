import { Item } from "./types";
import { rarityOrder } from "./inventoryAvailability";

type PricedItem = Item & { finalPrice?: number };

export function sortItemsForDisplay<T extends PricedItem>(items: T[]): T[] {
  const rarityRank = new Map<string, number>(
    rarityOrder.map((rarity, index) => [rarity.toLowerCase(), index])
  );

  return [...items].sort((a, b) => {
    const rarityDifference =
      (rarityRank.get((a.rarity ?? "Common").toLowerCase()) ?? rarityOrder.length) -
      (rarityRank.get((b.rarity ?? "Common").toLowerCase()) ?? rarityOrder.length);

    if (rarityDifference !== 0) return rarityDifference;

    const priceDifference = (a.finalPrice ?? a.price) - (b.finalPrice ?? b.price);
    if (priceDifference !== 0) return priceDifference;

    return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  });
}
