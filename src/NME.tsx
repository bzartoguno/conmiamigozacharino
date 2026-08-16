import { sortItemsForDisplay } from "./itemDisplay";
import { useMemo } from "react";
import styles from "./NME.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { NMEItem, tribeNME } from "./New Inventory/tribeNME";
import nmeBackground from "./images/N.M.E.png";
import { useSettlementType } from "./SettlementContext";
import { getAvailableItems } from "./inventoryAvailability";

type DisplayItem = NMEItem & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

function formatPrice(item: DisplayItem): string {
  if (item.priceText) return item.priceText;
  return `${item.finalPrice.toLocaleString()} Gold`;
}

export function NME({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const displayItems: DisplayItem[] = useMemo(
    () =>
      getAvailableItems(tribeNME.items, settlementType).map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeNME.priceVariability)
            : 0,
      })),
    [settlementType]
  );

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#16a34a",
          borderColor: "#0f5132",
          color: "#03130a",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${nmeBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeNME.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeNME.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeNME.owner}
          insults={tribeNME.insults}
          shopName={tribeNME.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {sortItemsForDisplay(displayItems).map((item, index) => (
            <article key={`${item.name}-${index}`} className={styles.card} data-item-rarity={item.rarity ?? "Common"}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className="item-card-detail"><strong>Rarity:</strong> {item.rarity ?? "Common"}</p>
              <p className="item-card-detail"><strong>Item Type:</strong> {item.itemType ?? "Item"}</p>
              {item.attunment === true && <p className="item-card-detail"><strong>Attunement:</strong> Required</p>}
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
              <p className={styles.price}>{formatPrice(item)}</p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
