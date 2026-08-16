import { useState } from "react";
import placeholderImage from "../images/Placeholder.jpg";
import styles from "./BlankWorldTemplate.module.css";

type SettlementTemplate = {
  key: string;
  label: string;
  shopCount: number | "all";
};

export type BlankTemplateShop = {
  key: string;
  label: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
};

const settlements: SettlementTemplate[] = [
  { key: "isolated-dwelling", label: "Isolated Dwelling name here", shopCount: 5 },
  { key: "thorpe", label: "Thorpe name here", shopCount: 6 },
  { key: "hamlet", label: "Hamlet name here", shopCount: 7 },
  { key: "village", label: "Village name here", shopCount: 8 },
  { key: "town", label: "Town name here", shopCount: 9 },
  { key: "city", label: "City name here", shopCount: 10 },
  { key: "metropolis", label: "Metropolis name here", shopCount: "all" },
];

export function BlankWorldTemplate({
  onBack,
  onNavigate,
  allShops,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
  allShops: BlankTemplateShop[];
}) {
  const [selectedSettlement, setSelectedSettlement] = useState<SettlementTemplate | null>(null);
  const shops: BlankTemplateShop[] = selectedSettlement?.shopCount === "all"
    ? allShops
    : Array.from(
        { length: selectedSettlement?.shopCount ?? 0 },
        (_, index) => ({
          key: `placeholder-shop-${index + 1}`,
          label: `Shop name here ${index + 1}`,
          backgroundColor: "#334155",
          imageSrc: placeholderImage,
        })
      );

  if (selectedSettlement) {
    return (
      <main className={styles.wrapper}>
        <button
          type="button"
          onClick={() => setSelectedSettlement(null)}
          className={styles.backButton}
        >
          ← Back to settlements
        </button>

        <section className={styles.settlementView}>
          <h1>{selectedSettlement.label}</h1>
          <div className={styles.shopGrid} aria-label={`${selectedSettlement.label} shops`}>
            {shops.map((shop) => (
              <button
                type="button"
                key={shop.key}
                className={styles.shopButton}
                onClick={
                  selectedSettlement.shopCount === "all"
                    ? () => onNavigate(shop.key)
                    : undefined
                }
                style={{ backgroundColor: shop.backgroundColor, color: shop.color ?? "#000" }}
              >
                {shop.imageSrc ? <img src={shop.imageSrc} alt={`${shop.label} logo`} /> : null}
                <span>{shop.label}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <button type="button" onClick={onBack} className={styles.backButton}>
        ← Back
      </button>

      <section className={styles.content}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Blank world template</p>
          <h1>World name here</h1>
          <p>Replace the placeholder names, descriptions, and images with your world's details.</p>
        </header>

        <img className={styles.worldImage} src={placeholderImage} alt="World placeholder" />

        <nav className={styles.grid} aria-label="Blank world settlements">
          {settlements.map((settlement) => (
            <button
              type="button"
              key={settlement.key}
              className={styles.cardButton}
              onClick={() => setSelectedSettlement(settlement)}
            >
              <img src={placeholderImage} alt="" />
              <span>{settlement.label}</span>
            </button>
          ))}
        </nav>

      </section>
    </main>
  );
}
