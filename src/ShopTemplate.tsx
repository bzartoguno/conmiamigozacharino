import { useMemo } from "react";
import defaultStyles from "./BookBombs.module.css";
import { BackButton } from "./BackButton";
import { Item, Tribe } from "./types";

type DisplayItem = Item & { finalPrice: number };
type ShopTemplateStyles = typeof defaultStyles;

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function ShopTemplate({
  tribe,
  backgroundImage,
  onBack,
  styles = defaultStyles,
}: {
  tribe: Tribe;
  backgroundImage: string;
  onBack?: () => void;
  styles?: ShopTemplateStyles;
}) {
  const displayItems: DisplayItem[] = useMemo(() => {
    return tribe.items
      .map((item) => ({
        ...item,
        finalPrice: calculateAdjustedPrice(item, tribe.priceVariability),
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, [tribe]);

  return (
    <div className={styles.app}>
      <BackButton onClick={onBack} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribe.name}</h1>
            {tribe.owner && (
              <p className={styles.owner}>Shop Owner: {tribe.owner}</p>
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
              <p className={styles.price}>
                {item.finalPrice.toLocaleString()} Gold
              </p>
            </article>
          ))}
        </section>

        {tribe.insults[0] && (
          <p className={styles.footerNote}>
            {tribe.insults[0]}
          </p>
        )}
      </main>
    </div>
  );
}
