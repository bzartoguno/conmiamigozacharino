import { ShowItem } from "./ShowItem";
import { setCookie } from "./cookies";
import { getIndices } from "./Goblins";
import { Tribe } from "./types";
import styles from "./GoblinApp.module.css"

interface GoblinIsOpenProps {
  clicks: number;
  setClicks: (value: number) => void;
  indices: number[];
  setIndices: (values: number[]) => void;
  tribes: Tribe[];
}

export function GoblinIsOpen({
  clicks,
  setClicks,
  indices,
  setIndices,
  tribes,
}: GoblinIsOpenProps) {
  const handleItemClick = () => {
    setCookie("clicks", (clicks + 1).toString());
    setClicks(clicks + 1);
    const newIndices = getIndices(tribes);
    setCookie("itemIndices", newIndices.toString());
    setIndices(newIndices);
  };

  return (
    <div className="App background-image">
      <h1>Goblin Marketplace</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {tribes.map((tribe, itemIndex) => (
          <ShowItem
            key={itemIndex}
            tribe={tribe}
            styles={styles}
            itemIndex={indices[itemIndex]}
          />
        ))}
      </div>

      <button className="button" onClick={handleItemClick}>
        Umm I don't like any of these can you check in the back, for me, Goober?
        <br />
        You have asked {clicks} times.
      </button>
    </div>
  );
}
