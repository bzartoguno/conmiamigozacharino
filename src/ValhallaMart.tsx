import { useMemo } from "react";
import styles from "./ValhallaMart.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { ValhallaMartItem, tribeValhallaMart } from "./tribeValhallaMart";
import valhallaBackground from "./Valhalla Mart.png";

type DisplayItem = ValhallaMartItem & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function ValhallaMart({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeValhallaMart.items
      .map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeValhallaMart.priceVariability)
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
          borderColor: "#b45309",
          color: "#3f2a0a",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${valhallaBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeValhallaMart.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeValhallaMart.owner}</p>
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

        <InsultBox
          className={styles.footerNote}
          owner={tribeValhallaMart.owner}
          insults={tribeValhallaMart.insults}
        />
      </main>
    </div>
  );
}
