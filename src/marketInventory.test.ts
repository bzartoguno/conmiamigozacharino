import { filterMarketTribesBySettlement } from "./marketInventory";
import { Tribe } from "./types";

const baseTribe: Tribe = {
  name: "Test Vendor",
  percentAngry: 0,
  insults: [],
  priceVariability: 0,
  items: [
    { name: "Item 1", description: "", price: 100 },
    { name: "Item 2", description: "", price: 200 },
    { name: "Item 3", description: "", price: 300 },
    { name: "Item 4", description: "", price: 400 },
    { name: "Item 5", description: "", price: 500 },
  ],
};

describe("filterMarketTribesBySettlement", () => {
  it("limits items by settlement size for market tribes", () => {
    const [thorpe] = filterMarketTribesBySettlement([baseTribe], "Thorpe");
    const [metropolis] = filterMarketTribesBySettlement([baseTribe], "Metropolis");

    expect(thorpe.items).toHaveLength(1);
    expect(metropolis.items).toHaveLength(5);
  });

  it("keeps all items when settlement size is not provided", () => {
    const [allItems] = filterMarketTribesBySettlement([baseTribe]);

    expect(allItems.items).toHaveLength(5);
  });
});
