import { useMemo } from "react";
import styles from "./LabyrinthineLibrary.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import {
  LabyrinthineLibraryItem,
  tribeLabyrinthineLibrary,
} from "./tribeLabyrinthineLibrary";
import labyrinthineLibraryBackground from "./Labyrinthine Labrary.png";

type DisplayItem = LabyrinthineLibraryItem & { finalPrice: number };

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

export function LabyrinthineLibrary({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(
    () =>
      tribeLabyrinthineLibrary.items.map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(
                item,
                tribeLabyrinthineLibrary.priceVariability
              )
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
          borderColor: "#14532d",
          color: "#0b1f16",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.38)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${labyrinthineLibraryBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeLabyrinthineLibrary.name}</h1>
            <p className={styles.owner}>
              Shop Owner: {tribeLabyrinthineLibrary.owner}
            </p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeLabyrinthineLibrary.owner}
          insults={tribeLabyrinthineLibrary.insults}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article key={`${item.name}-${index}`} className={styles.card}>
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
