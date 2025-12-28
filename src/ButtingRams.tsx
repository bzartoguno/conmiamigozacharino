import buttingRamsBackground from "./SandboxButtingRams.webp";
import goblinMarketImage from "./GoblinMarket.png";
import { BackButton } from "./BackButton";
import styles from "./ButtingRams.module.css";

type ButtingRamsShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function ButtingRams({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: ButtingRamsShop[] = [
    {
      key: "goblin-market",
      label: "Goblin Market",
      image: goblinMarketImage,
      onClick: () => onNavigate("goblins"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${buttingRamsBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox · Butting Rams</p>
          <h1 className={styles.title}>Choose your next bout</h1>
          <p className={styles.subtitle}>
            Smash through the Butting Rams brawl ring and dive straight into the shops that keep
            the festivities fueled. Tap a button to leap into the storefront.
          </p>
        </div>

        <div className={styles.buttonGrid}>
          {shops.map((shop) => (
            <button
              key={shop.key}
              type="button"
              className={styles.shopButton}
              onClick={shop.onClick}
            >
              <img
                src={shop.image}
                alt={`${shop.label} icon`}
                className={styles.shopImage}
              />
              <span className={styles.shopLabel}>{shop.label}</span>
              <p className={styles.shopHint}>Jump into this storefront</p>
            </button>
          ))}
        </div>

        <p className={styles.footer}>Art credit: Butting Rams world map</p>
      </div>
    </div>
  );
}
