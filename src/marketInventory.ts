import { getAvailableItems, SettlementType } from "./inventoryAvailability";
import { Tribe } from "./types";

export function filterMarketTribesBySettlement(
  tribes: Tribe[],
  settlementType?: SettlementType
): Tribe[] {
  return tribes.map((tribe) => ({
    ...tribe,
    items: getAvailableItems(tribe.items, settlementType),
  }));
}
