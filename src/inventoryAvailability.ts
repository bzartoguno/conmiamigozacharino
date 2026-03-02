import { Item } from "./types";

export type SettlementType =
  | "Isolated Dwelling"
  | "Thorpe"
  | "Hamlet"
  | "Village"
  | "Town"
  | "City"
  | "Metropolis";

export const settlementInventoryPercent: Record<SettlementType, number> = {
  "Isolated Dwelling": 10,
  Thorpe: 25,
  Hamlet: 40,
  Village: 55,
  Town: 70,
  City: 85,
  Metropolis: 100,
};

export function getVisibleItemCount(totalItems: number, settlementType?: SettlementType): number {
  if (totalItems <= 0) {
    return 0;
  }

  if (!settlementType) {
    return totalItems;
  }

  const percent = settlementInventoryPercent[settlementType];
  const count = Math.floor((totalItems * percent) / 100);
  return Math.max(1, count);
}

export function getAvailableItems<T extends Item>(items: T[], settlementType?: SettlementType): T[] {
  const sortedByPrice = [...items].sort((a, b) => a.price - b.price);
  const count = getVisibleItemCount(items.length, settlementType);
  if (count >= sortedByPrice.length) {
    return sortedByPrice;
  }

  return sortedByPrice.slice(0, count);
}
