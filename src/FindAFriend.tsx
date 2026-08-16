import { sortItemsForDisplay } from "./itemDisplay";
import { useMemo } from "react";
import styles from "./FindAFriend.module.css";
import { tribeFindAFriend } from "./New Inventory/tribeFindAFriend";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import findAFriendBackground from "./images/Find a Friend.png";
import { Item } from "./types";
import { useSettlementType } from "./SettlementContext";
import { getAvailableItems } from "./inventoryAvailability";

type DisplayItem = Item & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability =
    ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

function formatPrice(value: number) {
  return value === 0 ? "" : `${value.toLocaleString()} Gold`;
}

export function FindAFriend({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const displayItems: DisplayItem[] = useMemo(() => {
    return getAvailableItems(tribeFindAFriend.items, settlementType)
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribeFindAFriend.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, [settlementType]);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${findAFriendBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeFindAFriend.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeFindAFriend.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeFindAFriend.owner}
          insults={tribeFindAFriend.insults}
          shopName={tribeFindAFriend.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {sortItemsForDisplay(displayItems).map((item) => (
            <article key={item.name} className={styles.card} data-item-rarity={item.rarity ?? "Common"}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className="item-card-detail"><strong>Rarity:</strong> {item.rarity ?? "Common"}</p>
              <p className="item-card-detail"><strong>Item Type:</strong> {item.itemType ?? "Item"}</p>
              {item.attunment === true && <p className="item-card-detail"><strong>Attunement:</strong> Required</p>}
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>
                {formatPrice(item.finalPrice)}
              </p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
