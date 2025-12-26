import { useMemo } from "react";
import styles from "./BlossomHotel.module.css";
import { BackButton } from "./BackButton";
import { Item } from "./types";
import { BlossomHotelItem, tribeBlossomHotel } from "./tribeBlossomHotel";
import blossomHotelBackground from "./Blossom Hotel.png";

type DisplayItem = BlossomHotelItem & { finalPrice: number };

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

export function BlossomHotel({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(
    () =>
      tribeBlossomHotel.items.map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeBlossomHotel.priceVariability)
            : 0,
      })),
    []
  );

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#22c55e",
          borderColor: "#166534",
          color: "#0f172a",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${blossomHotelBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeBlossomHotel.name}</h1>
            <p className={styles.owner}>
              Shop Owner: {tribeBlossomHotel.owner}
            </p>
          </div>
        </header>

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

        <p className={styles.footerNote}>{tribeBlossomHotel.insults[0]}</p>
      </main>
    </div>
  );
}
