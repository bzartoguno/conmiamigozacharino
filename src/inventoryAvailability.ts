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

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function getAvailableItems<T extends Item>(items: T[], settlementType?: SettlementType): T[] {
  const count = getVisibleItemCount(items.length, settlementType);
  if (count >= items.length) {
    return [...items];
  }

  return shuffle(items).slice(0, count);
}
