import { sortItemsForDisplay } from "./itemDisplay";
import { useMemo } from "react";
import styles from "./IconicDragonic.module.css";
import { tribeIconicDragonic } from "./New Inventory/tribeIconicDragonic";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import dragonicBackground from "./images/Iconic Dragonic.png";
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

export function IconicDragonic({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const displayItems: DisplayItem[] = useMemo(() => {
    return getAvailableItems(tribeIconicDragonic.items, settlementType)
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribeIconicDragonic.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, [settlementType]);

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#facc15",
          borderColor: "#b45309",
          color: "#3f2a0a",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${dragonicBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeIconicDragonic.name}</h1>
            <p className={styles.owner}>
              Shop Owner: {tribeIconicDragonic.owner}
            </p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeIconicDragonic.owner}
          insults={tribeIconicDragonic.insults}
          shopName={tribeIconicDragonic.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {sortItemsForDisplay(displayItems).map((item, index) => (
            <article
              key={item.name}
              className={`${styles.card} ${styles[`cardVariant${(index % 3) + 1}`]}`}
             data-item-rarity={item.rarity ?? "Common"}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className="item-card-detail"><strong>Rarity:</strong> {item.rarity ?? "Common"}</p>
              <p className="item-card-detail"><strong>Item Type:</strong> {item.itemType ?? "Item"}</p>
              {item.attunment === true && <p className="item-card-detail"><strong>Attunement:</strong> Required</p>}
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>
                {item.finalPrice.toLocaleString()} Gold
              </p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
