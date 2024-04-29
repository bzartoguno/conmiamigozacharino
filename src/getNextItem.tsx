import { Item } from "./types";
import { list1 } from "./list1";

export function getNextItem(list: Item[], oldIndex: number = -1): number {
  const listLength = list.length + 1;
  let randomIndex = Math.floor(Math.random() * listLength);
  while (randomIndex === oldIndex) {
    console.log(`Doh!  We got the same number, rerolling`);
    randomIndex = Math.floor(Math.random() * listLength);
  }
  return randomIndex;
}
