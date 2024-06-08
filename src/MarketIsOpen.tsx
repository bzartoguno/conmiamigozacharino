import { ShowItem } from "./ShowItem";
import { setCookie } from "./cookies";
import { getIndices } from "./App";
import { Tribe } from "./types";

interface MarketIsOpenProps {
  clicks: number;
  setClicks: (value: number) => void;
  indices: number[];
  setIndices: (values: number[]) => void;
  tribes: Tribe[];
}

export function MarketIsOpen({
  clicks,
  setClicks,
  indices,
  setIndices,
  tribes,
}: MarketIsOpenProps) {
  const handleItemClick = () => {
    setCookie("clicks", (clicks + 1).toString());
    setClicks(clicks + 1);
    const newIndices = getIndices(tribes);
    setCookie("itemIndices", newIndices.toString());
    setIndices(newIndices);
  };

  return (
    <div className="App background-image">
      <h1>Goblin Marketplace Updated</h1>

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
        Umm I don't like any of these can you check in the back, for me, Goober?
        <br />
        You have asked {clicks} times.
      </button>
    </div>
  );
}
