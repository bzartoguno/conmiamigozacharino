import { useState } from "react";
import placeholderImage from "./images/Placeholder.jpg";
import styles from "./BlankWorldTemplate.module.css";

type SettlementTemplate = {
  key: string;
  label: string;
  shopCount: number | "all";
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
  allShopNames,
}: {
  onBack: () => void;
  allShopNames: string[];
}) {
  const [selectedSettlement, setSelectedSettlement] = useState<SettlementTemplate | null>(null);
  const shopNames = selectedSettlement?.shopCount === "all"
    ? allShopNames
    : Array.from(
        { length: selectedSettlement?.shopCount ?? 0 },
        (_, index) => `Shop name here ${index + 1}`
      );

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

        {selectedSettlement ? (
          <section className={styles.settlement} aria-live="polite">
            <img src={placeholderImage} alt={`${selectedSettlement.label} placeholder`} />
            <div>
              <p className={styles.eyebrow}>Settlement template</p>
              <h2>{selectedSettlement.label}</h2>
              <p>Settlement description here.</p>
            </div>
            <div className={styles.shopGrid}>
              {shopNames.map((shopName, index) => (
                <button type="button" key={`${shopName}-${index}`} className={styles.shopButton}>
                  <img src={placeholderImage} alt="" />
                  <span>{shopName}</span>
                </button>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}
