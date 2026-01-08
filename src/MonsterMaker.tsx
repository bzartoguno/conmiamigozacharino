import { useMemo } from "react";
import styles from "./MonsterMaker.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { MonsterMakerItem, tribeMonsterMaker } from "./tribeMonsterMaker";
import monsterBackground from "./Monster.webp";

type DisplayItem = MonsterMakerItem & { finalPrice: number };

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

const cardPalettes = [
  styles.cardStyle0,
  styles.cardStyle1,
  styles.cardStyle2,
  styles.cardStyle3,
  styles.cardStyle4,
  styles.cardStyle5,
];

export function MonsterMaker({ onBack }: { onBack?: () => void }) {
  const groupedItems = useMemo(() => {
    const categoryOrder = [
      "Type of Elemental",
      "Size Options",
      "Age Category",
      "Personality Customization (Optional)",
      "Additional Accessories",
    ];

    const categoryMap: Record<string, DisplayItem[]> = {};
    const seenOrder: string[] = [];

    tribeMonsterMaker.items.forEach((item: MonsterMakerItem) => {
      const category = item.category || "Other";
      if (!categoryMap[category]) {
        categoryMap[category] = [];
        seenOrder.push(category);
      }
      categoryMap[category].push({
        ...item,
        category,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeMonsterMaker.priceVariability)
            : 0,
      });
    });

    const orderedCategories = [
      ...categoryOrder.filter((cat) => seenOrder.includes(cat)),
      ...seenOrder.filter((cat) => !categoryOrder.includes(cat)),
    ];

    return orderedCategories.map((category) => ({
      category,
      items: categoryMap[category].sort(
        (a, b) => a.finalPrice - b.finalPrice || a.name.localeCompare(b.name)
      ),
    }));
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
          borderColor: "#854d0e",
          color: "#422006",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${monsterBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeMonsterMaker.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeMonsterMaker.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeMonsterMaker.owner}
          insults={tribeMonsterMaker.insults}
        />

        <div className={styles.categories}>
          {groupedItems.map(({ category, items }) => (
            <section key={category} className={styles.categoryBlock} aria-label={category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.grid}>
                {items.map((item, index) => (
                  <article
                    key={item.name}
                    className={`${styles.card} ${
                      cardPalettes[index % cardPalettes.length]
                    }`}
                  >
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.price}>{formatPrice(item)}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
    </div>
  );
}
