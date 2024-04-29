import { useState } from "react";
import "./App.css";
import { list1 } from "./list1";
import { list2 } from "./list2";
import { list3 } from "./list3";
import { list4 } from "./list4";
import { ShowItem } from "./ShowItem";
import { ShowItem2} from "./ShowItem2"
import { getNextItem } from "./getNextItem";

function App() {
  const [index1, setindex1] = useState<number>(getNextItem(list1));
  const [index2, setIndex2] = useState<number>(getNextItem(list2));
  const [index3, setIndex3] = useState<number>(getNextItem(list3));
  const [index4, setIndex4] = useState<number>(getNextItem(list4));


  const handleItemClick = () => {
    setindex1(getNextItem(list1, index1));
    setIndex2(getNextItem(list2, index2));
    setIndex3(getNextItem(list3, index3));
    setIndex4(getNextItem(list4, index4));
  };

  return (
    <div className="App background-image">
      <h1>Zach's Marketplace Program</h1>

      {/* {SillyLists()} */}

      {/* <h1>{list1[index1].name}</h1>
      <h1>{list2[index2].name}</h1> */}

      <table>
        <ShowItem item={list1[index1]} tribe="Beastbinders Tribe" />
        <ShowItem item={list2[index2]} tribe="Grubcar Clan"/>
        <ShowItem item={list3[index3]} tribe="Tinkertrack Gang"/>
        <ShowItem item={list4[index4]} tribe="Blastwagon Caboose"/>
      </table>

      <ShowItem2 item={list1[index1]} tribe="Bargain Bag Clan" />
        <ShowItem2 item={list2[index2]} tribe="Barter Bisket Tin Tribe"/>
        <ShowItem2 item={list3[index3]} tribe="Gift Basket Gang"/>
        <ShowItem item={list4[index4]} tribe="Kmart"/>


      <button onClick={handleItemClick}>Show Random Item</button>
    </div>
  );
}

export default App;
