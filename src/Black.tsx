import { useState } from "react";
import { BlackIsClosed } from "./BlackIsClosed";
import { BlackIsOpen } from "./BlackIsOpen";
import { Tribe } from "./types";
import styles from "./BlackApp.module.css"; // Updated to use CSS Modules
import { tribeBlackMarket } from "./tribeBlackMarket";
import { tribeBlackMarket2 } from "./tribeBlackMarket2";
import { tribeBlackMarket3 } from "./tribeBlackMarket3";
import { tribeBlackMarket4 } from "./tribeBlackMarket4";
import { tribeBlackMarket5 } from "./tribeBlackMarket5";
import { getNextItem } from "./getNextItem";
import { getCookie } from "./cookies";
import { BackButton } from "./BackButton";

const MAX_CLICKS = 2;

export function getIndices(tribes: Tribe[], oldList: number[] = []): number[] {
  return tribes.map((tribe, index) => getNextItem(tribe.items, oldList[index]));
}

function getInitialClicks(): number {
  return parseInt(getCookie("clicks") ?? "0") || 0;
}

function getInitialIndices(tribes: Tribe[]): number[] {
  const strIndices = getCookie("itemIndices") || "";
  const arrIndices = strIndices.split(",");
  const numArr = arrIndices.map((value) => parseInt(value));
  const firstIndiceIsValid = !!(numArr[0] + 1);
  if (arrIndices.length !== tribes.length || !firstIndiceIsValid)
    return getIndices(tribes);
  return numArr;
}

export function Blacks({ onBack }: { onBack?: () => void }) {
  const tribes = [tribeBlackMarket, tribeBlackMarket2, tribeBlackMarket3, tribeBlackMarket4, tribeBlackMarket5];

  const [clicks, setClicks] = useState(getInitialClicks());

  const [indices, setIndices] = useState(getInitialIndices(tribes));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  if (clicks <= MAX_CLICKS) {
    return (
      <div className={styles.app}>
        <BackButton onClick={onBack} />
        <div className={styles.backgroundImage}></div>
        <BlackIsOpen
          clicks={clicks}
          setClicks={(value) => {
            scrollToTop(); // Scroll to top on button click
            setClicks(value);
          }}
          indices={indices}
          setIndices={(value) => {
            scrollToTop(); // Scroll to top on button click
            setIndices(value);
          }}
          tribes={tribes}
          onBack={onBack}
        />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div className={styles.backgroundImage}></div>
      <BlackIsClosed
        setClicks={(value) => {
          scrollToTop(); // Scroll to top on button click
          setClicks(value);
        }}
        onBack={onBack}
      />
    </div>
  );
}