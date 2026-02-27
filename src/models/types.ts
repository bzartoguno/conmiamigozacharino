export interface Item {
  name: string;
  price: number;
  description?: string;
}

export interface Tribe {
  name: string;
  owner?: string;
  percentAngry: number;
  priceVariability: number;
  items: Item[];
  insults: string[];
}
