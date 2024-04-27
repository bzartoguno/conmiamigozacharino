import { useState } from "react";
import "./App.css";
import { list1 } from "./list1";
import { list2 } from "./list2";
import { ShowItem } from "./ShowItem";
import { getNextItem } from "./getNextItem";

function App() {
  const [index1, setindex1] = useState<number>(getNextItem(list1));
  const [index2, setIndex2] = useState<number>(getNextItem(list2));

  const handleItemClick = () => {
    setindex1(getNextItem(list1, index1));
    setIndex2(getNextItem(list2, index2));
  };

  return (
    <div className="App background-image">
      <h1>Zach's Marketplace Program</h1>

      {/* {SillyLists()} */}

      {/* <h1>{list1[index1].name}</h1>
      <h1>{list2[index2].name}</h1> */}

      <table>
        <ShowItem item={list1[index1]} />
        <ShowItem item={list2[index2]} />
      </table>
      <button onClick={handleItemClick}>Show Random Item</button>
    </div>
  );
}

export default App;
