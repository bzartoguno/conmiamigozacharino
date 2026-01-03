import { useMemo } from "react";
import styles from "./FizzyTales.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { FizzyTalesItem, tribeFizzyTales } from "./tribeFizzyTales";
import fizzyTalesBackground from "./FizzyTale.png";

type DisplayItem = FizzyTalesItem & { finalPrice: number };

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

export function FizzyTales({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(
    () =>
      tribeFizzyTales.items.map((item) => ({
        ...item,
        finalPrice:
          item.price > 0 ? calculateAdjustedPrice(item, tribeFizzyTales.priceVariability) : 0,
      })),
    []
  );

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#2563eb",
          borderColor: "#1d4ed8",
          color: "#e2e8f0",
          boxShadow: "0 8px 18px rgba(37, 99, 235, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${fizzyTalesBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeFizzyTales.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeFizzyTales.owner}</p>
          </div>
        </header>

        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article key={`${item.name}-${index}`} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              {item.description && <p className={styles.description}>{item.description}</p>}
              <p className={styles.price}>{formatPrice(item)}</p>
            </article>
          ))}
        </section>

        <InsultBox
          className={styles.footerNote}
          owner={tribeFizzyTales.owner}
          insults={tribeFizzyTales.insults}
        />
      </main>
    </div>
  );
}
