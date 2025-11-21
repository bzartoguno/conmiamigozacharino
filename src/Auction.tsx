import { useState } from "react";
import { AuctionIsClosed } from "./AuctionIsClosed";
import { AuctionIsOpen } from "./AuctionIsOpen";
import { Tribe } from "./types";
import styles from "./AuctionApp.module.css";
import { tribeAuctionHouse } from "./tribeAuctionHouse";
import { tribeAuctionHouse2 } from "./tribeAuctionHouse2";
import { tribeAuctionHouse3 } from "./tribeAuctionHouse3";
import { tribeAuctionHouse4 } from "./tribeAuctionHouse4";
import { tribeAuctionHouse5 } from "./tribeAuctionHouse5";
import { getNextItem } from "./getNextItem";
import { getCookie } from "./cookies";
import { BackButton } from "./BackButton";

const MAX_CLICKS = 3;

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

export function Auctions({ onBack }: { onBack?: () => void }) {
  const tribes = [tribeAuctionHouse, tribeAuctionHouse2, tribeAuctionHouse3, tribeAuctionHouse4, tribeAuctionHouse5 ];
  const [clicks, setClicks] = useState(getInitialClicks());
  const [indices, setIndices] = useState(getInitialIndices(tribes));
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (clicks <= MAX_CLICKS) {
    return (
      <div className={styles.app}>
        <BackButton onClick={onBack} />
        <div className={styles.backgroundImage}></div>
        <AuctionIsOpen
          clicks={clicks}
          setClicks={(value) => {
            scrollToTop(); 
            setClicks(value);
          }}
          indices={indices}
          setIndices={(value) => {
            scrollToTop();
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
      <AuctionIsClosed
        setClicks={(value) => {
          scrollToTop();
          setClicks(value);
        }}
        onBack={onBack}
      />
    </div>
  );
}