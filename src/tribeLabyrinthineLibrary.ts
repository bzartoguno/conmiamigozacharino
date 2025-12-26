import { Item, Tribe } from "./types";

export interface LabyrinthineLibraryItem extends Item {
  priceText?: string;
}

export const tribeLabyrinthineLibrary: Tribe & {
  items: LabyrinthineLibraryItem[];
} = {
  name: "Labyrinthine Library",
  owner: "Larry",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
    "Are you looking for knowledge? The Labyrinth Library might be just the thing for you. It's not your typical dungeon, it's a mobile pocket dimension. It's not run by the Dungeon Crawlers Guild, which likes brawn over brains. When you're ready to explore, let me know what interests you. You can choose a specific topic or go for a general overview. But be warned - each level you explore will require a greater toll. You might lose health, spell slots, or even unique abilities. However, the deeper you go, the more knowledge you'll gain.The Labyrinth Library is definitely worth the risk. You'll uncover a wealth of information about your chosen topic. So, if you're ready for the challenge, prepare for an adventure full of rewards!",
  ],
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
      description: "Season-long access to every seasonal host and amenity.",
    },
    {
      name: "Mini Game: Riddles for Rewards",
      price: 0,
      priceText: "Price may vary",
      description: "Test your wit for rotating prizes and hints.",
    },
    {
      name: "Mini Game: Monster Trivia Night",
      price: 0,
      priceText: "Price may vary",
      description: "Lore-heavy trivia where correct answers earn lounge perks.",
    },
    {
      name: "Mini Game: Guess the Guest",
      price: 0,
      priceText: "Price may vary",
      description: "Match silhouettes and rumors to the right seasonal visitor.",
    },
    {
      name: "Mini Game: The Bard's Tale",
      price: 0,
      priceText: "Price may vary",
      description: "Storytelling contest judged by the seasonal hosts.",
    },
    {
      name: "Black Candle Training",
      price: 1000,
      description: "Hands-on focus training with the Black Candle tradition.",
    },
  ],
};
