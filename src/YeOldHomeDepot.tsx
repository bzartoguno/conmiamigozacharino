import { useMemo } from "react";
import styles from "./YeOldHomeDepot.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { YeOldHomeDepotItem, tribeYeOldHomeDepot } from "./tribeYeOldHomeDepot";
import sleuthBackground from "./Ye Old Home Depot.webp";

type DisplayItem = YeOldHomeDepotItem & { finalPrice: number };

function sortByPrice(a: DisplayItem, b: DisplayItem): number {
  const aHasVariablePrice = Boolean(a.priceText);
  const bHasVariablePrice = Boolean(b.priceText);

  if (aHasVariablePrice !== bHasVariablePrice) {
    return aHasVariablePrice ? 1 : -1;
  }

  if (a.finalPrice !== b.finalPrice) {
    return a.finalPrice - b.finalPrice;
  }

  return a.name.localeCompare(b.name);
}

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

function formatPrice(item: DisplayItem): string {
  if (item.priceText) return item.priceText;
  return `${item.finalPrice.toLocaleString()} Silver`;
}

export function YeOldHomeDepot({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(
    () =>
      tribeYeOldHomeDepot.items.map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeYeOldHomeDepot.priceVariability)
            : 0,
      }))
      .sort(sortByPrice),
    []
  );

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#1d4ed8",
          borderColor: "#1e3a8a",
          color: "#e2e8f0",
          boxShadow: "0 8px 18px rgba(11, 39, 81, 0.55)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${sleuthBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeYeOldHomeDepot.name}</h1>
            <p className={styles.owner}>
              Shop Owner: {tribeYeOldHomeDepot.owner}
            </p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeYeOldHomeDepot.owner}
          insults={tribeYeOldHomeDepot.insults}
          shopName={tribeYeOldHomeDepot.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className={styles.card}
            >
              <h2 className={styles.cardTitle}>{item.name}</h2>
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
