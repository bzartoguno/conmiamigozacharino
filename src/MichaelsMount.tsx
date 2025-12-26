import { useMemo } from "react";
import styles from "./MichaelsMount.module.css";
import { BackButton } from "./BackButton";
import { Item } from "./types";
import { MichaelsMountItem, tribeMichaelsMount } from "./tribeMichaelsMount";
import mountsBackground from "./Mounts.webp";

type DisplayItem = MichaelsMountItem & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function MichaelsMount({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeMichaelsMount.items
      .map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeMichaelsMount.priceVariability)
            : 0,
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice || a.name.localeCompare(b.name));
  }, []);

  const formatPrice = (item: DisplayItem) => {
    if (item.priceText) return item.priceText;
    if (item.price <= 0) return "Included";
    return `${item.finalPrice.toLocaleString()} Gold`;
  };

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#facc15",
          borderColor: "#a16207",
          color: "#3b2f0b",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${mountsBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeMichaelsMount.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeMichaelsMount.owner}</p>
          </div>
        </header>

        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article
              key={item.name}
              className={`${styles.card} ${styles[`cardVariant${(index % 4) + 1}`]}`}
            >
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>{formatPrice(item)}</p>
            </article>
          ))}
        </section>

        <p className={styles.footerNote}>{tribeMichaelsMount.insults[0]}</p>
      </main>
    </div>
  );
}
