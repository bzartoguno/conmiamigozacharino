import { useState } from "react";
import "./App.css";
import { list1 } from "./list1";
import { list2 } from "./list2";
import { list3 } from "./list3";
import { list4 } from "./list4";
import { list5 } from "./list5";
import { list6 } from "./list6";
import { ShowItem } from "./ShowItem";
import { getNextItem } from "./getNextItem";

function App() {
  const [index1, setindex1] = useState<number>(getNextItem(list1));
  const [index2, setIndex2] = useState<number>(getNextItem(list2));
  const [index3, setIndex3] = useState<number>(getNextItem(list3));
  const [index4, setIndex4] = useState<number>(getNextItem(list4));
  const [index5, setIndex5] = useState<number>(getNextItem(list5));
  const [index6, setIndex6] = useState<number>(getNextItem(list6));

  const handleItemClick = () => {
    setindex1(getNextItem(list1, index1));
    setIndex2(getNextItem(list2, index2));
    setIndex3(getNextItem(list3, index3));
    setIndex4(getNextItem(list4, index4));
    setIndex5(getNextItem(list5, index5));
    setIndex6(getNextItem(list6, index6));
  };

  return (
    <div className="App background-image">
      <h1>Goblin Marketplace</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <ShowItem item={list1[index1]} tribe="Beastbinders Tribe" />
        <ShowItem item={list2[index2]} tribe="Grubcar Clan" />
        <ShowItem item={list3[index3]} tribe="Tinkertrack Gang" />
        <ShowItem item={list4[index4]} tribe="Blastwagon Caboose" />
        <ShowItem item={list5[index5]} tribe="Railblade Raiders" />
        <ShowItem item={list6[index6]} tribe="Loco Lux Motors" />
      </div>

      <button onClick={handleItemClick}>
        It that the best you can do, for me, Goober?
      </button>
    </div>
  );
}

export default App;
