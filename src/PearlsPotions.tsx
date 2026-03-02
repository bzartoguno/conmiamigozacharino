import { useMemo } from "react";
import styles from "./PearlsPotions.module.css";
import { tribePearlsPotions } from "./tribePearlsPotions";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import pearlsPotionsBackground from "./Pearls Potions.png";
import { useSettlementType } from "./SettlementContext";
import { getAvailableItems } from "./inventoryAvailability";

type DisplayItem = Item & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function PearlsPotions({ onBack }: { onBack?: () => void }) {
  const settlementType = useSettlementType();
  const displayItems: DisplayItem[] = useMemo(() => {
    return getAvailableItems(tribePearlsPotions.items, settlementType)
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribePearlsPotions.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, [settlementType]);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${pearlsPotionsBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribePearlsPotions.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribePearlsPotions.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribePearlsPotions.owner}
          insults={tribePearlsPotions.insults}
          shopName={tribePearlsPotions.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item) => (
            <article key={item.name} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>{item.finalPrice.toLocaleString()} Gold</p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
