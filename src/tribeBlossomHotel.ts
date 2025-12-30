import { Item, Tribe } from "./types";

export interface BlossomHotelItem extends Item {
  priceText?: string;
}

export const tribeBlossomHotel: Tribe & { items: BlossomHotelItem[] } = {
  name: "Blossom Hotel",
  owner: "Perma for Winter Blossom, Marlee for Spring Blossom, Solin for Summer Blossom, & Adel for Autumn Blossom",
  percentAngry: 0,
  priceVariability: 6,
  insults: ["Hospitality blooms year-round—choose your season and settle in."],
  items: [
    {
      name: "Room, Board, & Repair Gear",
      price: 50,
      description: "Overnight stay with hearty meals and gear repairs included.",
    },
    {
      name: "Room, Board, Repair Gear, & Spa",
      price: 60,
      description: "Adds a calming spa visit to the standard lodging bundle.",
    },
    {
      name: "Room, Board, Repair Gear, Spa, & Time Dilation Chamber",
      price: 70,
      description: "Stretch recovery time while your gear is restored and you relax.",
    },
    {
      name: "Room, Board, Repair Gear, Spa, Time Dilation Chamber, & Pick of Temp Buff",
      price: 80,
      description: "Premium stay with temporal perks and your choice of temporary buff.",
    },
    {
      name: "Blossom Hotel Season Pass",
      price: 30000,
      description: "Lifetime access to every seasonal hotel on your world. Preforming a five minute ritual with this item will teleport you to their nearest hotel.",
    },
    {
      name: "Mini Game: Riddles for Rewards",
      price: 0,
      priceText: "Reward may vary",
      description: "Test your wit for rotating prizes.",
    },
    {
      name: "Mini Game: Monster Trivia Night",
      price: 0,
      priceText: "Reward may vary",
      description: "Lore-heavy trivia where correct answers coins",
    },
    {
      name: "Mini Game: Guess the Guest",
      price: 0,
      priceText: "Reward may vary",
      description: "Match silhouettes and rumors to the right may get room upgrades.",
    },
    {
      name: "Black Candle Training",
      price: 1000,
      description: "Hands-on focus training with the Black Candle tradition. Taking any skill to expertices",
    },
  ],
};
