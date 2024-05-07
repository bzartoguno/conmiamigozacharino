import { useState } from "react";
import "./App.css";
import { tribe1 } from "./tribe1";
import { tribe2 } from "./tribe2";
import { tribe3 } from "./tribe3";
import { tribe4 } from "./tribe4";
import { tribe5 } from "./tribe5";
import { tribe6 } from "./tribe6";
import { Tribe } from "./types";
import { ShowItem } from "./ShowItem";
import { getNextItem } from "./getNextItem";

function getIndices(tribes: Tribe[], oldList: number[] = []): number[] {
  return tribes.map((tribe, index) => getNextItem(tribe.items, oldList[index]));
}

function App() {
  const tribes = [tribe1, tribe2, tribe3, tribe4, tribe5, tribe6];

  const [indices, setIndices] = useState<number[]>(getIndices(tribes));

  const handleItemClick = () => setIndices(getIndices(tribes));

  return (
    <div className="App background-image">
      <h1>Goblin Marketplace</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {tribes.map((tribe, itemIndex) => (
          <ShowItem
            key={itemIndex}
            tribe={tribe}
            itemIndex={indices[itemIndex]}
          />
        ))}
      </div>

      <button className='button' onClick={handleItemClick}>
        It that the best you can do, for me, Goober?
      </button>
    </div>
  );
}

export default App;
