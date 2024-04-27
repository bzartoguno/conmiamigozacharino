import { Item } from "./types";
import { list1 } from "./list1";

export function getNextItem(list: Item[], oldIndex: number = -1): number {
  let randomIndex = Math.floor(Math.random() * list.length);
  while (randomIndex === oldIndex) {
    console.log(`Doh!  We got the same number, rerolling`);
    randomIndex = Math.floor(Math.random() * list1.length);
  }
  return randomIndex;
}
