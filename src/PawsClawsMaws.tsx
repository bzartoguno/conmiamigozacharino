import { useMemo } from "react";
import styles from "./PawsClawsMaws.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { PawsClawsMawsItem, tribePawsClawsMaws } from "./tribePawsClawsMaws";
import pawsClawsMawsBackground from "./Paws, Claws, & Maws.png";

type DisplayItem = PawsClawsMawsItem & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

const cardPalettes = [
  styles.cardPalette0,
  styles.cardPalette1,
  styles.cardPalette2,
  styles.cardPalette3,
  styles.cardPalette4,
];

export function PawsClawsMaws({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribePawsClawsMaws.items
      .map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribePawsClawsMaws.priceVariability)
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
          color: "#422006",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${pawsClawsMawsBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribePawsClawsMaws.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribePawsClawsMaws.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribePawsClawsMaws.owner}
          insults={tribePawsClawsMaws.insults}
          shopName={tribePawsClawsMaws.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => (
            <article
              key={item.name}
              className={`${styles.card} ${cardPalettes[index % cardPalettes.length]}`}
            >
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>{formatPrice(item)}</p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
