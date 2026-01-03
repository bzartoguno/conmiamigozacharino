import { useMemo } from "react";
import styles from "./PiggyBank.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import piggyBankBackground from "./Piggy Bank.png";
import { PiggyBankItem, tribePiggyBank } from "./tribePiggyBank";

type DisplayItem = PiggyBankItem & { finalPrice?: number; displayPrice: string };

function calculateAdjustedPrice(item: PiggyBankItem, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function PiggyBank({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribePiggyBank.items.map((item) => {
      if (item.priceLabel) {
        return { ...item, displayPrice: item.priceLabel };
      }

      const finalPrice = calculateAdjustedPrice(item, tribePiggyBank.priceVariability);
      return {
        ...item,
        finalPrice,
        displayPrice: `${finalPrice.toLocaleString()} Gold`,
      };
    });
  }, []);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${piggyBankBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribePiggyBank.name}</h1>
            {tribePiggyBank.owner && (
              <p className={styles.owner}>Shop Owner: {tribePiggyBank.owner}</p>
            )}
          </div>
        </header>

        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item) => (
            <article key={item.name} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
              <p className={styles.price}>{item.displayPrice}</p>
            </article>
          ))}
        </section>

        <InsultBox
          className={styles.footerNote}
          owner={tribePiggyBank.owner}
          insults={tribePiggyBank.insults}
        />
      </main>
    </div>
  );
}
