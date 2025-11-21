import { ShowItem } from "./ShowItem";
import { setCookie } from "./cookies";
import { getIndices } from "./Goblins";
import { Tribe } from "./types";
import styles from "./BlackApp.module.css"

interface BlackIsOpenProps {
  clicks: number;
  setClicks: (value: number) => void;
  indices: number[];
  setIndices: (values: number[]) => void;
  tribes: Tribe[];
}

export function BlackIsOpen({
  clicks,
  setClicks,
  indices,
  setIndices,
  tribes,
}: BlackIsOpenProps) {
  const handleItemClick = () => {
    setCookie("clicks", (clicks + 1).toString());
    setClicks(clicks + 1);
    const newIndices = getIndices(tribes);
    setCookie("itemIndices", newIndices.toString());
    setIndices(newIndices);
  };

  return (
    <div className="App background-image">
      <h1>Black Market is Open</h1>

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
        Got anything else under the table?
        <br />
        You've checked under the table {clicks} times.
      </button>
    </div>
  );
}
