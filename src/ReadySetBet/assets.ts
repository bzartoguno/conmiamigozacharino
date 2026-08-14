import horse1 from "./assets/H-Horse 1.webp";
import horse2 from "./assets/H-Horse 2.png";
import horse3 from "./assets/H-Horse 3.png";
import horse4 from "./assets/H-Horse 4.png";
import horse5 from "./assets/H-Horse 5.png";
import horse6 from "./assets/H-Horse 6.png";
import horse9 from "./assets/H-Horse 9.png";
import horseCinnamon from "./assets/H-Cinnamon.webp";
import horseGrace from "./assets/H-Grace.png";
import horseMidnight from "./assets/H-Midnight.webp";
import horsePrince from "./assets/H-Prince.webp";

import peopleAlex from "./assets/P-Alex.webp";
import peopleFlash from "./assets/P-Flash.png";
import peopleGeorge from "./assets/P-George.webp";
import peopleGoldship from "./assets/P-goldship.webp";
import peopleHornet from "./assets/P-Hornet.webp";
import peopleJackSparrow from "./assets/P-JackSparrow.gif";
import peopleJax from "./assets/P-Jax.webp";
import peopleKinger from "./assets/P-Kinger.png";
import peopleKnight from "./assets/P-Knight.webp";
import peopleMasterChief from "./assets/P-MasterChief.webp";
import peopleMiku from "./assets/P-Miku.webp";
import peopleMonoco from "./assets/P-Monoco.png";
import peoplePikminTrio from "./assets/P-PikminTrio.png";
import peopleProfessorX from "./assets/P-ProfessorX.webp";
import peopleShadow from "./assets/P-Shadow.webp";
import peopleSonic from "./assets/P-Sonic.gif";
import peopleSoldier from "./assets/P-Soldier.png";
import peopleSpaceMarine from "./assets/P-SpaceMarine.webp";
import peopleStephenHawking from "./assets/P-StephenHawking.png";
import peopleSteve from "./assets/P-Steve.png";
import peopleSurge from "./assets/P-Surge.png";
import peopleTeto from "./assets/P-Teto.jpg";
import peopleVincentvanGogh from "./assets/P-VincentvanGogh.jpg";

import dndAlyssa from "./assets/D-Alyssa.webp";
import dndCaleb from "./assets/D-Caleb.webp";
import dndEel from "./assets/D-Eel.webp";
import dndEli from "./assets/D-Eli.webp";
import dndEthan from "./assets/D-Ethan.webp";
import dndHoward from "./assets/D-Howard.webp";
import dndJerrod from "./assets/D-Jerrod.webp";
import dndJoshua from "./assets/D-Joshua.webp";
import dndMelanie from "./assets/D-Melanie.webp";
import dndMichael from "./assets/D-Michael.webp";
import dndNate from "./assets/D-Nate.webp";
import dndTeag from "./assets/D-Teag.webp";

import uniqueHorse8 from "./assets/U-Horse 8.png";
import uniquePonyta from "./assets/U-Ponyta.webp";
import uniquePonytaGalar from "./assets/U-PonytaGalar.png";
import uniqueRapidash from "./assets/U-Rapidash.webp";
import uniqueRapidashGalar from "./assets/U-Rapidashgalar.webp";
import uniqueUnicorn7 from "./assets/U-Unicorn 7.png";

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
  dnd: ReadySetBetRacer[];
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
  dnd: [
    { id: "D-Alyssa", name: "Alyssa", image: dndAlyssa },
    { id: "D-Caleb", name: "Caleb", image: dndCaleb },
    { id: "D-Eel", name: "Eel", image: dndEel },
    { id: "D-Eli", name: "Eli", image: dndEli },
    { id: "D-Ethan", name: "Ethan", image: dndEthan },
    { id: "D-Howard", name: "Howard", image: dndHoward },
    { id: "D-Jerrod", name: "Jerrod", image: dndJerrod },
    { id: "D-Joshua", name: "Joshua", image: dndJoshua },
    { id: "D-Melanie", name: "Melanie", image: dndMelanie },
    { id: "D-Michael", name: "Michael", image: dndMichael },
    { id: "D-Nate", name: "Nate", image: dndNate },
    { id: "D-Teag", name: "Teag", image: dndTeag },
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
