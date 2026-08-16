import { useMemo, useState } from "react";
import { GoblinIsClosed } from "./GoblinIsClosed";
import { GoblinIsOpen } from "./GoblinIsOpen";
import { Tribe } from "./types";
import styles from "./GoblinApp.module.css";
import { tribe1 } from "./New Inventory/tribe1";
import { tribe2 } from "./New Inventory/tribe2";
import { tribe3 } from "./New Inventory/tribe3";
import { tribe4 } from "./New Inventory/tribe4";
import { tribe5 } from "./New Inventory/tribe5";
import { tribe6 } from "./New Inventory/tribe6";
import { tribe7 } from "./New Inventory/tribe7";
import { getNextItem } from "./getNextItem";
import { getCookie } from "./cookies";
import { BackButton } from "./BackButton";
import { getAvailableItems } from "./inventoryAvailability";
import { useSettlementType } from "./SettlementContext";

const MAX_CLICKS = 5;

function getFilteredTribes(tribes: Tribe[], settlementType?: import("./inventoryAvailability").SettlementType): Tribe[] {
  return tribes.map((tribe) => ({
    ...tribe,
    items: getAvailableItems(tribe.items, settlementType),
  }));
}

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

export function Goblins({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const tribes = useMemo(
    () => getFilteredTribes([tribe1, tribe2, tribe3, tribe4, tribe5, tribe6, tribe7], settlementType),
    [settlementType]
  );

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
        <GoblinIsOpen
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
      <GoblinIsClosed
        setClicks={(value) => {
          scrollToTop(); // Scroll to top on button click
          setClicks(value);
        }}
        onBack={onBack}
      />
    </div>
  );
}
