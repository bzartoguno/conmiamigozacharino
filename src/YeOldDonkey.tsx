import { useMemo } from "react";
import styles from "./YeOldDonkey.module.css";
import { tribeYeOldDonkey } from "./tribeYeOldDonkey";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import yeOldDonkeyBackground from "./Ye Old Donkey.png";

type DisplayItem = Item & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function YeOldDonkey({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeYeOldDonkey.items
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribeYeOldDonkey.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, []);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${yeOldDonkeyBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeYeOldDonkey.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeYeOldDonkey.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeYeOldDonkey.owner}
          insults={tribeYeOldDonkey.insults}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.cardSurface}>
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.finalPrice.toLocaleString()} Gold</p>
              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
