import { ShowItem } from "./ShowItem";
import { setCookie } from "./cookies";
import { getIndices } from "./Goblins";
import { Tribe } from "./types";

interface AuctionIsOpenProps {
  clicks: number;
  setClicks: (value: number) => void;
  indices: number[];
  setIndices: (values: number[]) => void;
  tribes: Tribe[];
}

export function AuctionIsOpen({
  clicks,
  setClicks,
  indices,
  setIndices,
  tribes,
}: AuctionIsOpenProps) {
  const handleItemClick = () => {

    console.log(`Got here`)
    setCookie("clicks", (clicks + 1).toString());
    setClicks(clicks + 1);
    const newIndices = getIndices(tribes);
    setCookie("itemIndices", newIndices.toString());
    setIndices(newIndices);
  };

  return (
    <div className="App background-image">
      <h1>Auction House is Open</h1>

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
        Please show me more of the wares that are currently avalable
        <br />
        You have looked around {clicks} times.
      </button>
    </div>
  );
}
