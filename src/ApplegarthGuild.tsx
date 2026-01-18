import { useMemo } from "react";
import styles from "./ApplegarthGuild.module.css";
import { tribeApplegarthGuild } from "./tribeApplegarthGuild";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import applegarthBackground from "./Applegarth.webp";

type GuildItem = Item & { priceLabel?: string };
type DisplayItem = GuildItem & { finalPrice?: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function ApplegarthGuild({ onBack }: { onBack?: () => void }) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeApplegarthGuild.items
      .map((item) => {
        if (item.priceLabel) {
          return { ...item, finalPrice: undefined };
        }

        return {
          ...item,
          finalPrice: calculateAdjustedPrice(item, tribeApplegarthGuild.priceVariability),
        };
      })
      .sort((a, b) => (a.finalPrice ?? Number.MAX_SAFE_INTEGER) - (b.finalPrice ?? Number.MAX_SAFE_INTEGER));
  }, []);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${applegarthBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeApplegarthGuild.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeApplegarthGuild.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeApplegarthGuild.owner}
          insults={tribeApplegarthGuild.insults}
          shopName={tribeApplegarthGuild.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item) => {
            const priceText = item.priceLabel ?? `${(item.finalPrice ?? item.price).toLocaleString()} Gold`;

            return (
              <article key={item.name} className={styles.card}>
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{priceText}</p>
              </article>
            );
          })}
        </section>

      </main>
    </div>
  );
}
