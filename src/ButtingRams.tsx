import buttingRamsBackground from "./SandboxButtingRams.webp";
import goblinMarketImage from "./GoblinMarket.png";
import blackMarketImage from "./Black Market.jpg";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import runestoneRelayImage from "./Runestone Relay.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
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
    {
      key: "bullets-buffs-beyond",
      label: "Bullets, Buffs, & Beyond",
      image: bulletsBuffsBeyondImage,
      onClick: () => onNavigate("BulletsBuffsBeyond"),
    },
    {
      key: "wills-weapons",
      label: "Will's Weapons",
      image: willsWeaponsImage,
      onClick: () => onNavigate("WillsWeapons"),
    },
    {
      key: "supreme-smithy",
      label: "Supreme Smithy",
      image: supremeSmithyImage,
      onClick: () => onNavigate("SupremeSmithy"),
    },
    {
      key: "black-market",
      label: "Black Market",
      image: blackMarketImage,
      onClick: () => onNavigate("Black"),
    },
    {
      key: "runestone-relay",
      label: "Runestone Relay",
      image: runestoneRelayImage,
      onClick: () => onNavigate("RunestoneRelay"),
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
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Butting Rams</h1>
          <p className={styles.subtitle}>
            The locals sprint between sparring rams, refueling at these rowdy stalls before
            diving back into the fray. Pick a stop, grab what you need, and charge onward.
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
            </button>
          ))}
        </div>

        <p className={styles.footer}>Art credit: Butting Rams world map</p>
      </div>
    </div>
  );
}
