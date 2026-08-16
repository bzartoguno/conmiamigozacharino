import {
  getAvailableItems,
  settlementRarityAvailability,
} from "./inventoryAvailability";
import { Item } from "./types";

const items: Item[] = [
  { name: "common", price: 1, rarity: "Common" },
  { name: "uncommon", price: 2, rarity: "Uncommon" },
  { name: "rare", price: 3, rarity: "Rare" },
  { name: "very rare", price: 4, rarity: "Very Rare" },
  { name: "legendary", price: 5, rarity: "Legendary" },
  { name: "artifact", price: 6, rarity: "Artifact" },
];

test("centralizes the requested rarity chances", () => {
  expect(settlementRarityAvailability.City).toEqual({
    Common: 1,
    Uncommon: 1,
    Rare: 1,
    "Very Rare": 1,
    Legendary: 0.5,
    Artifact: 0.25,
  });
});

test("filters each item using its rarity chance", () => {
  expect(getAvailableItems(items, "Town", () => 0.49).map(({ name }) => name)).toEqual([
    "common", "uncommon", "rare", "very rare",
  ]);
  expect(getAvailableItems(items, "Town", () => 0.5).map(({ name }) => name)).toEqual([
    "common", "uncommon", "rare",
  ]);
});

test("Travel is neutral and Metropolis makes everything available", () => {
  expect(getAvailableItems(items, "Travel", () => 0.99)).toEqual(items);
  expect(getAvailableItems(items, "Metropolis", () => 0.99)).toEqual(items);
});
