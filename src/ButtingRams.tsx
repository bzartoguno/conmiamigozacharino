import buttingRamsBackground from "./SandboxButtingRams.webp";
import goblinMarketImage from "./GoblinMarket.png";
import blackMarketImage from "./Black Market.jpg";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import runestoneRelayImage from "./Runestone Relay.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import { BackButton } from "./BackButton";
import styles from "./ButtingRams.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

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

  const sortedShops = sortShopButtons(shops);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${buttingRamsBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Butting Rams</h1>
          <p className={styles.subtitle}>
            A pair of rams find them selfs locked in an eternal struggle fighting for dominance but for what?
          </p>
        </div>

        <div className={styles.buttonGrid}>
            {sortedShops.map((shop) => (
            <ShopButton
              key={shop.key}
              label={shop.label}
              imageSrc={shop.image}
              onClick={shop.onClick}
              {...getShopButtonStyle(shop.label)}
            />
          ))}
        </div>

        <p className={styles.footer}>I Found this art online</p>
      </div>
    </div>
  );
}
