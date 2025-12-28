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
  ],
  items: [
    {
      name: "Are you looking for knowledge?",
      price: 0.1,
      description: "Are you looking for knowledge? The Labyrinth Library might be just the thing for you. It's not your typical dungeon—it's a mobile pocket dimension. It's not run by the Dungeon Crawlers Guild, which likes brawn over brains. When you're ready to explore, let me know what interests you. You can choose a specific topic or go for a general overview. But be warned—each level you explore will require a greater toll. You might lose health, spell slots, or even unique abilities. However, the deeper you go, the more knowledge you'll gain. The Labyrinth Library is worth the risk. You'll uncover a wealth of information about your chosen topic, so if you're ready for the challenge, prepare for an adventure full of rewards!",
    },
  ],
};
