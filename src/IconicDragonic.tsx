import { useMemo } from "react";
import styles from "./IconicDragonic.module.css";
import { tribeIconicDragonic } from "./tribeIconicDragonic";
import { BackButton } from "./BackButton";
import { Item } from "./types";
import dragonicBackground from "./Iconic Dragonic.png";

type DisplayItem = Item & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability =
    ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function IconicDragonic({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeIconicDragonic.items
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribeIconicDragonic.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, []);

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#facc15",
          borderColor: "#b45309",
          color: "#3f2a0a",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
          right: "1.5rem",
          left: "auto",
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

        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article
              key={item.name}
              className={`${styles.card} ${styles[`cardVariant${(index % 3) + 1}`]}`}
            >
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>
                {item.finalPrice.toLocaleString()} Gold
              </p>
            </article>
          ))}
        </section>

        <p className={styles.footerNote}>
          {tribeIconicDragonic.insults[0]}
        </p>
      </main>
    </div>
  );
}
