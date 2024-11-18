import { Goblins } from "./Goblins";
import { Auctions } from "./Auction";
import { Blacks } from "./Black";
import { useState } from "react";
import { FancyMap } from "./FancyMap";

export function Map() {
  const [navigatedTo, setNavigatedTo] = useState<string>("");

  switch (navigatedTo) {
    case "goblins":
      return <Goblins />;
    case "Auction":
      return <Auctions />;
    case "Black":
      return <Blacks />;
    case "map":
      return <FancyMap setNavigatedTo={setNavigatedTo} />;
    default:
      return (
        <div>
          <button onClick={() => setNavigatedTo("goblins")}>Goblin Stuff</button>
          <button onClick={() => setNavigatedTo("Auction")}>Auction House</button>
          <button onClick={() => setNavigatedTo("Black")}>Black Market</button>
          <button onClick={() => setNavigatedTo("map")}>Fancy Map</button>
          <button onClick={() => setNavigatedTo("")}>Go Home</button>
        </div>
      );
  }
}

