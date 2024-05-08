import { useState } from "react";
import "./App.css";
import { tribe1 } from "./tribe1";
import { tribe2 } from "./tribe2";
import { tribe3 } from "./tribe3";
import { tribe4 } from "./tribe4";
import { tribe5 } from "./tribe5";
import { tribe6 } from "./tribe6";
import { Tribe } from "./types";
import { getNextItem } from "./getNextItem";
import { getCookie } from "./cookies";
import { MarketIsClosed } from "./MarketIsClosed";
import { MarketIsOpen } from "./MarketIsOpen";

const MAX_CLICKS = 5;

export function getIndices(tribes: Tribe[], oldList: number[] = []): number[] {
  return tribes.map((tribe, index) => getNextItem(tribe.items, oldList[index]));
}

function getInitialClicks(): number {
  return parseInt(getCookie("clicks") ?? "0") || 0;
}

function getInitialIndices(tribes: Tribe[]): number[] {
  const strIndices = getCookie("itemIndices") || "";
  const arrIndices = strIndices.split(",");
  const numArr = arrIndices.map((value) => parseInt(value));
  const firstIndiceIsValid = !!(numArr[0] + 1);
  if (arrIndices.length !== tribes.length || !firstIndiceIsValid)
    return getIndices(tribes);
  return numArr;
}

function App() {
  const tribes = [tribe1, tribe2, tribe3, tribe4, tribe5, tribe6];

  const [clicks, setClicks] = useState(getInitialClicks());

  const [indices, setIndices] = useState(getInitialIndices(tribes));

  if (clicks <= MAX_CLICKS) {
    return (
      <MarketIsOpen
        clicks={clicks}
        setClicks={setClicks}
        indices={indices}
        setIndices={setIndices}
        tribes={tribes}
      />
    );
  }

  return <MarketIsClosed setClicks={setClicks} />;
}
export default App;
