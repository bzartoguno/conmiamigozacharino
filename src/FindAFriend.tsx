import { useMemo } from "react";
import styles from "./FindAFriend.module.css";
import { tribeFindAFriend } from "./tribeFindAFriend";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import findAFriendBackground from "./Find a Friend.png";
import { Item } from "./types";

type DisplayItem = Item & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability =
    ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

function formatPrice(value: number) {
  return value === 0 ? "" : `${value.toLocaleString()} Gold`;
}

export function FindAFriend({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeFindAFriend.items
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribeFindAFriend.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, []);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${findAFriendBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeFindAFriend.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeFindAFriend.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeFindAFriend.owner}
          insults={tribeFindAFriend.insults}
          shopName={tribeFindAFriend.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item) => (
            <article key={item.name} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>
                {formatPrice(item.finalPrice)}
              </p>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
