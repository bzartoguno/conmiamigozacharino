import { getAvailableItems, settlementRarityAvailability } from "./inventoryAvailability";
import { Item } from "./types";

const items: Item[] = [
  { name: "Common", price: 1, rarity: "Common" },
  { name: "Uncommon", price: 2, rarity: "Uncommon" },
  { name: "Rare", price: 3, rarity: "Rare" },
  { name: "Very Rare", price: 4, rarity: "Very Rare" },
  { name: "Legendary", price: 5, rarity: "Legendary" },
  { name: "Artifact", price: 6, rarity: "Artifact" },
];

describe("settlement inventory availability", () => {
  it("centralizes the requested rarity percentages", () => {
    expect(settlementRarityAvailability.City).toEqual({
      Common: 100, Uncommon: 100, Rare: 100, "Very Rare": 100, Legendary: 50, Artifact: 25,
    });
    expect(settlementRarityAvailability.Town.Legendary).toBe(0);
    expect(settlementRarityAvailability.Hamlet.Uncommon).toBe(50);
  });

  it("filters each rarity using the settlement probability", () => {
    expect(getAvailableItems(items, "Town", () => 0.49).map((item) => item.name)).toEqual([
      "Common", "Uncommon", "Rare", "Very Rare",
    ]);
    expect(getAvailableItems(items, "Town", () => 0.5).map((item) => item.name)).toEqual([
      "Common", "Uncommon", "Rare",
    ]);
  });

  it("does not modify inventory for Travel, Metropolis, or a missing tag", () => {
    expect(getAvailableItems(items, "Travel", () => 0.99)).toEqual(items);
    expect(getAvailableItems(items, "Metropolis", () => 0.99)).toEqual(items);
    expect(getAvailableItems(items, undefined, () => 0.99)).toEqual(items);
  });

  it("treats a missing rarity as Common", () => {
    expect(getAvailableItems([{ name: "Default", price: 1 }], "Thorpe", () => 0.49)).toHaveLength(1);
    expect(getAvailableItems([{ name: "Default", price: 1 }], "Thorpe", () => 0.5)).toHaveLength(0);
  });
});
