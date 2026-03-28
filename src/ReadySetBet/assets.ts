import horse1 from "./H-Horse 1.webp";
import horse2 from "./H-Horse 2.png";
import horse3 from "./H-Horse 3.png";
import horse4 from "./H-Horse 4.png";
import horse5 from "./H-Horse 5.png";
import horse6 from "./H-Horse 6.png";
import horse9 from "./H-Horse 9.png";
import horseCinnamon from "./H-Cinnamon.webp";
import horseGrace from "./H-Grace.png";
import horseMidnight from "./H-Midnight.webp";
import horsePrince from "./H-Prince.webp";

import peopleAlex from "./P-Alex.webp";
import peopleFlash from "./P-Flash.png";
import peopleGeorge from "./P-George.webp";
import peopleGoldship from "./P-goldship.webp";
import peopleHornet from "./P-Hornet.webp";
import peopleJackSparrow from "./P-JackSparrow.gif";
import peopleJax from "./P-Jax.webp";
import peopleKinger from "./P-Kinger.png";
import peopleKnight from "./P-Knight.webp";
import peopleMasterChief from "./P-MasterChief.webp";
import peopleMiku from "./P-Miku.webp";
import peopleMonoco from "./P-Monoco.png";
import peoplePikminTrio from "./P-PikminTrio.png";
import peopleProfessorX from "./P-ProfessorX.webp";
import peopleShadow from "./P-Shadow.webp";
import peopleSonic from "./P-Sonic.gif";
import peopleSoldier from "./P-Soldier.png";
import peopleSpaceMarine from "./P-SpaceMarine.webp";
import peopleStephenHawking from "./P-StephenHawking.png";
import peopleSteve from "./P-Steve.png";
import peopleSurge from "./P-Surge.png";
import peopleTeto from "./P-Teto.jpg";
import peopleVincentvanGogh from "./P-VincentvanGogh.jpg";

import uniqueHorse8 from "./U-Horse 8.png";
import uniquePonyta from "./U-Ponyta.webp";
import uniquePonytaGalar from "./U-PonytaGalar.png";
import uniqueRapidash from "./U-Rapidash.webp";
import uniqueRapidashGalar from "./U-Rapidashgalar.webp";
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
    { id: "H-Cinnamon", name: "Cinnamon", image: horseCinnamon },
    { id: "H-Grace", name: "Grace", image: horseGrace },
    { id: "H-Horse 1", name: "Jack Jounier", image: horse1 },
    { id: "H-Horse 2", name: "Buttercup", image: horse2 },
    { id: "H-Horse 3", name: "Jet", image: horse3 },
    { id: "H-Horse 4", name: "Tjock Häst", image: horse4 },
    { id: "H-Horse 5", name: "Mustang", image: horse5 },
    { id: "H-Horse 6", name: "Stripes", image: horse6 },
    { id: "H-Horse 9", name: "Chico grande", image: horse9 },
    { id: "H-Midnight", name: "Midnight", image: horseMidnight },
    { id: "H-Prince", name: "Prince", image: horsePrince },
  ],
  people: [
    { id: "P-Alex", name: "Alex", image: peopleAlex },
    { id: "P-Flash", name: "Flash", image: peopleFlash },
    { id: "P-George", name: "George", image: peopleGeorge },
    { id: "P-goldship", name: "goldship", image: peopleGoldship },
    { id: "P-Hornet", name: "Hornet", image: peopleHornet },
    { id: "P-JackSparrow", name: "Jack Sparrow", image: peopleJackSparrow },
    { id: "P-Jax", name: "Jax", image: peopleJax },
    { id: "P-Kinger", name: "Kinger", image: peopleKinger },
    { id: "P-Knight", name: "Knight", image: peopleKnight },
    { id: "P-MasterChief", name: "Master Chief", image: peopleMasterChief },
    { id: "P-Miku", name: "Miku", image: peopleMiku },
    { id: "P-Monoco", name: "Monoco", image: peopleMonoco },
    { id: "P-PikminTrio", name: "Pikmin Trio", image: peoplePikminTrio },
    { id: "P-ProfessorX", name: "Professor X", image: peopleProfessorX },
    { id: "P-Shadow", name: "Shadow", image: peopleShadow },
    { id: "P-Sonic", name: "Sonic", image: peopleSonic },
    { id: "P-Soldier", name: "Soldier", image: peopleSoldier },
    { id: "P-SpaceMarine", name: "Space Marine", image: peopleSpaceMarine },
    { id: "P-StephenHawking", name: "Stephen Hawking", image: peopleStephenHawking },
    { id: "P-Steve", name: "Steve", image: peopleSteve },
    { id: "P-Surge", name: "Surge", image: peopleSurge },
    { id: "P-Teto", name: "Teto", image: peopleTeto },
    { id: "P-VincentvanGogh", name: "Vincent van Gogh", image: peopleVincentvanGogh },
  ],
  unique: [
    { id: "U-Horse 8", name: "Rainbow Dash", image: uniqueHorse8 },
    { id: "U-Ponyta", name: "Ponyta", image: uniquePonyta },
    { id: "U-PonytaGalar", name: "Ponyta Galar", image: uniquePonytaGalar },
    { id: "U-Rapidash", name: "Rapidash", image: uniqueRapidash },
    { id: "U-Rapidashgalar", name: "Rapidash Galar", image: uniqueRapidashGalar },
    { id: "U-Unicorn 7", name: "Rarity", image: uniqueUnicorn7 },
  ],
};
