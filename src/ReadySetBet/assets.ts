import horse1 from "./H-Horse 1.webp";
import horse2 from "./H-Horse 2.png";
import horse3 from "./H-Horse 3.png";
import horse4 from "./H-Horse 4.png";
import horse5 from "./H-Horse 5.png";
import horse6 from "./H-Horse 6.png";
import horse9 from "./H-Horse 9.png";

import peopleAlex from "./P-Alex.webp";
import peopleGoldship from "./P-goldship.webp";
import peopleHornet from "./P-Hornet.webp";
import peopleKnight from "./P-Knight.webp";
import peopleShadow from "./P-Shadow.webp";
import peopleSonic from "./P-Sonic.gif";
import peopleSoldier from "./P-Soldier.png";
import peopleSteve from "./P-Steve.png";
import peopleSurge from "./P-Surge.png";

import uniqueHorse8 from "./U-Horse 8.png";
import uniqueUnicorn7 from "./U-Unicorn 7.png";

export type ReadySetBetRacer = {
  id: string;
  name: string;
  image: string;
};

// Validation note:
// - Keep only H-* files in `horses`, P-* files in `people`, and U-* files in `unique`.
// - If you add a new image, preserve this prefix convention so filtering stays predictable.
export const readySetBetAssets: {
  horses: ReadySetBetRacer[];
  people: ReadySetBetRacer[];
  unique: ReadySetBetRacer[];
} = {
  horses: [
    { id: "H-Horse 1", name: "Horse 1", image: horse1 },
    { id: "H-Horse 2", name: "Horse 2", image: horse2 },
    { id: "H-Horse 3", name: "Horse 3", image: horse3 },
    { id: "H-Horse 4", name: "Horse 4", image: horse4 },
    { id: "H-Horse 5", name: "Horse 5", image: horse5 },
    { id: "H-Horse 6", name: "Horse 6", image: horse6 },
    { id: "H-Horse 9", name: "Horse 9", image: horse9 },
  ],
  people: [
    { id: "P-Alex", name: "Alex", image: peopleAlex },
    { id: "P-goldship", name: "goldship", image: peopleGoldship },
    { id: "P-Hornet", name: "Hornet", image: peopleHornet },
    { id: "P-Knight", name: "Knight", image: peopleKnight },
    { id: "P-Shadow", name: "Shadow", image: peopleShadow },
    { id: "P-Sonic", name: "Sonic", image: peopleSonic },
    { id: "P-Soldier", name: "Soldier", image: peopleSoldier },
    { id: "P-Steve", name: "Steve", image: peopleSteve },
    { id: "P-Surge", name: "Surge", image: peopleSurge },
  ],
  unique: [
    { id: "U-Horse 8", name: "Horse 8", image: uniqueHorse8 },
    { id: "U-Unicorn 7", name: "Unicorn 7", image: uniqueUnicorn7 },
  ],
};
