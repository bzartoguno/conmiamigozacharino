import { sortItemsForDisplay } from "./itemDisplay";
import { useMemo } from "react";
import styles from "./ComedyGold.module.css";
import { tribeComedyGold } from "./New Inventory/tribeComedyGold";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import comedyGoldBackground from "./images/Comedy Gold.png";
import { useSettlementType } from "./SettlementContext";
import { getAvailableItems } from "./inventoryAvailability";

type ComedyGoldItem = Item & { priceLabel?: string };
type DisplayItem = ComedyGoldItem & { finalPrice?: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability =
    ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function ComedyGold({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const displayItems: DisplayItem[] = useMemo(() => {
    return getAvailableItems(tribeComedyGold.items, settlementType)
      .map((item) => {
        if ("priceLabel" in item && item.priceLabel) {
          return { ...item, finalPrice: undefined };
        }

        return {
          ...item,
          finalPrice: calculateAdjustedPrice(item, tribeComedyGold.priceVariability),
        };
      })
      .sort((a, b) => (a.finalPrice ?? Number.MAX_SAFE_INTEGER) - (b.finalPrice ?? Number.MAX_SAFE_INTEGER));
  }, [settlementType]);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${comedyGoldBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeComedyGold.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeComedyGold.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeComedyGold.owner}
          insults={tribeComedyGold.insults}
          shopName={tribeComedyGold.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {sortItemsForDisplay(displayItems).map((item) => {
            const priceText = item.priceLabel ?? `${(item.finalPrice ?? item.price).toLocaleString()} Gold`;

            return (
              <article key={item.name} className={styles.card} data-item-rarity={item.rarity ?? "Common"}>
                <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className="item-card-detail"><strong>Rarity:</strong> {item.rarity ?? "Common"}</p>
              <p className="item-card-detail"><strong>Item Type:</strong> {item.itemType ?? "Item"}</p>
              {item.attunment === true && <p className="item-card-detail"><strong>Attunement:</strong> Required</p>}
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{priceText}</p>
              </article>
            );
          })}
        </section>

      </main>
    </div>
  );
}
