import { useMemo, useState } from "react";
import styles from "./JellBell.module.css";
import { BackButton } from "./BackButton";
import { InsultBox } from "./InsultBox";
import { Item } from "./types";
import { JellBellItem, tribeJellBell } from "./tribeJellBell";
import dragonicBackground from "./Iconic Dragonic.png";
import {
  GeneratedSlime,
  generateSlime,
  slimeAccessoryOptions,
  slimeBodyTypeOptions,
  slimeFlavorOptions,
  slimeSizeOptions,
  slimeTemperamentOptions,
} from "./jellBellGenerator";
import { SlimeStatBlock } from "./SlimeStatBlock";

type DisplayItem = JellBellItem & { finalPrice: number };
type BellTier = "3 Star Bell" | "4 Star Bell" | "5 Star Bell";

function isBellTier(name: string): name is BellTier {
  return name === "3 Star Bell" || name === "4 Star Bell" || name === "5 Star Bell";
}

function calculateAdjustedPrice(item: Item, priceVariability: number): number {
  const variability = ((Math.random() * priceVariability) / 100) * item.price;
  const upOrDown = Math.random() < 0.5 ? -1 : 1;
  const adjusted = item.price + upOrDown * variability;

  return Math.max(0, Math.round(adjusted));
}

export function JellBell({ onBack }: { onBack?: () => void }) {
  const [selectedTier, setSelectedTier] = useState<BellTier | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [generatedSlimes, setGeneratedSlimes] = useState<GeneratedSlime[]>([]);

  const displayItems: DisplayItem[] = useMemo(() => {
    return tribeJellBell.items
      .map((item) => ({
        ...item,
        finalPrice:
          item.price > 0
            ? calculateAdjustedPrice(item, tribeJellBell.priceVariability)
            : 0,
      }))
      .sort((a, b) => a.finalPrice - b.finalPrice || a.name.localeCompare(b.name));
  }, []);

  const formatPrice = (item: DisplayItem) => {
    if (item.priceText) return item.priceText;
    if (item.price <= 0) return "Included";
    return `${item.finalPrice.toLocaleString()} Gold`;
  };

  const handleBellClick = (tierName: string) => {
    if (!isBellTier(tierName)) {
      return;
    }

    const tier = tierName;
    if (isSpinning) {
      return;
    }

    setSelectedTier(tier);
    setIsSpinning(true);

    window.setTimeout(() => {
      if (tier === "3 Star Bell") {
        setGeneratedSlimes([generateSlime(1)]);
      } else if (tier === "4 Star Bell") {
        setGeneratedSlimes([generateSlime(1), generateSlime(2)]);
      } else {
        setGeneratedSlimes([]);
      }
      setIsSpinning(false);
    }, 1100);
  };

  const renderResultPanel = () => {
    if (!selectedTier) {
      return null;
    }

    if (selectedTier === "5 Star Bell") {
      return (
        <section className={styles.resultPanel} aria-live="polite">
          <h2 className={styles.resultTitle}>5 Star Bell — All Available Options</h2>
          <div className={styles.optionColumns}>
            <div>
              <h3>Size</h3>
              <ul>
                {slimeSizeOptions.map((option) => (
                  <li key={option.roll}>
                    d4 {option.roll}: {option.label} (AC {option.armorClass}, HP x{option.hpMultiplier})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Temperament</h3>
              <ul>
                {slimeTemperamentOptions.map((option) => (
                  <li key={option.roll}>
                    d6 {option.roll}: {option.label} (+1 {option.statBonus})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Body Type</h3>
              <ul>
                {slimeBodyTypeOptions.map((option) => (
                  <li key={option.roll}>
                    d8 {option.roll}: {option.label} ({option.baseHp} base HP, {option.speed})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Accessory</h3>
              <ul>
                {slimeAccessoryOptions.map((option) => (
                  <li key={option.roll}>
                    d10 {option.roll}: {option.label} — {option.effect}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Elemental Flavor</h3>
              <ul>
                {slimeFlavorOptions.map((option) => (
                  <li key={option.roll}>
                    d12 {option.roll}: {option.label} ({option.resistance} resistance)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );
    }

    if (isSpinning) {
      return (
        <section className={styles.resultPanel} aria-live="polite">
          <h2 className={styles.resultTitle}>{selectedTier} is spinning...</h2>
          <p className={styles.roulette}>
            Rolling size • rolling temperament • rolling body • rolling accessory • rolling flavor
          </p>
        </section>
      );
    }

    if (selectedTier === "4 Star Bell") {
      return (
        <section className={styles.resultPanel} aria-live="polite">
          <h2 className={styles.resultTitle}>4 Star Bell Results</h2>
          <div className={styles.dualResult}>
            {generatedSlimes[0] && <SlimeStatBlock slime={generatedSlimes[0]} />}
            <p className={styles.orDivider}>OR</p>
            {generatedSlimes[1] && <SlimeStatBlock slime={generatedSlimes[1]} />}
          </div>
        </section>
      );
    }

    return (
      <section className={styles.resultPanel} aria-live="polite">
        <h2 className={styles.resultTitle}>3 Star Bell Result</h2>
        {generatedSlimes[0] && <SlimeStatBlock slime={generatedSlimes[0]} />}
      </section>
    );
  };

  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          backgroundColor: "#facc15",
          borderColor: "#b45309",
          color: "#3f2a0a",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
        }}
      />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${dragonicBackground})` }}
      />
      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{tribeJellBell.name}</h1>
            <p className={styles.owner}>Shop Owner: {tribeJellBell.owner}</p>
          </div>
        </header>

        <InsultBox
          className={styles.footerNote}
          owner={tribeJellBell.owner}
          insults={tribeJellBell.insults}
          shopName={tribeJellBell.name}
        />
        <section className={styles.grid} aria-label="Available items">
          {displayItems.map((item, index) => {
            const itemIsBellTier = isBellTier(item.name);

            return (
              <article
                key={item.name}
                className={`${styles.card} ${styles[`cardVariant${(index % 4) + 1}`]}`}
              >
                <h2 className={styles.cardTitle}>{item.name}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{formatPrice(item)}</p>
                {itemIsBellTier && (
                  <button
                    className={styles.generateButton}
                    type="button"
                    onClick={() => handleBellClick(item.name)}
                  >
                    Generate {item.name.replace(" Bell", "")} Slime
                  </button>
                )}
              </article>
            );
          })}
        </section>

        {renderResultPanel()}
      </main>
    </div>
  );
}
