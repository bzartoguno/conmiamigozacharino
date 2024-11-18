import { ShowItem } from "./ShowItem";
import { setCookie } from "./cookies";
import { getIndices } from "./Goblins";
import { Tribe } from "./types";

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
            itemIndex={indices[itemIndex]}
          />
        ))}
      </div>

      <button className="button" onClick={handleItemClick}>
        Got any thing else under the table?
        <br />
        Number of looks you've gotten so far {clicks}.
      </button>
    </div>
  );
}
