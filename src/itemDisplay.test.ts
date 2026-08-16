import { sortItemsForDisplay } from "./itemDisplay";
import { Item } from "./types";

describe("sortItemsForDisplay", () => {
  it("sorts by rarity, displayed price, and then name", () => {
    const items: Array<Item & { finalPrice?: number }> = [
      { name: "Zebra", rarity: "Rare", price: 1, finalPrice: 5 },
      { name: "Beta", rarity: "Common", price: 100, finalPrice: 20 },
      { name: "Artifact", rarity: "Artifact", price: 1 },
      { name: "Alpha", rarity: "Common", price: 100, finalPrice: 20 },
      { name: "Cheap", rarity: "Common", price: 100, finalPrice: 10 },
      { name: "Amber", rarity: "Rare", price: 1, finalPrice: 5 },
    ];

    expect(sortItemsForDisplay(items).map(({ name }) => name)).toEqual([
      "Cheap",
      "Alpha",
      "Beta",
      "Amber",
      "Zebra",
      "Artifact",
    ]);
  });

  it("treats a missing rarity as Common without mutating the source", () => {
    const items: Item[] = [
      { name: "Rare", rarity: "Rare", price: 1 },
      { name: "Default", price: 50 },
    ];

    const result = sortItemsForDisplay(items);

    expect(result.map(({ name }) => name)).toEqual(["Default", "Rare"]);
    expect(result).not.toBe(items);
  });
});
