import ballisticBellowsBackground from "./SandboxBallisticBellows.webp";
import willsWeaponsImage from "./Wills Weapons.png";
import comedyGoldImage from "./Comedy Gold.png";
import navigationGuildImage from "./NavigationGuild-ezgif.com-webp-to-png-converter.png";
import dungeonCrawlerGuildImage from "./Dungeon Crawler's Guild.png";
import pearlsPotionsImage from "./Pearls Potions.png";
import provisionsParadiseImage from "./Provisions Paradise.png";
import yeOldDonkeyImage from "./Ye Old Donkey.png";
import piggyBankImage from "./Piggy Bank.png";
import { BackButton } from "./BackButton";
import styles from "./BallisticBellowsCaleb.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type BallisticBellowsShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function BallisticBellowsCaleb({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: BallisticBellowsShop[] = [
    {
      key: "wills-weapons",
      label: "Will's Weapons",
      image: willsWeaponsImage,
      onClick: () => onNavigate("WillsWeapons"),
    },
    {
      key: "comedy-gold",
      label: "Comedy Gold",
      image: comedyGoldImage,
      onClick: () => onNavigate("ComedyGold"),
    },
    {
      key: "navigation-guild",
      label: "Navigation Guild",
      image: navigationGuildImage,
      onClick: () => onNavigate("NavigationGuild"),
    },
    {
      key: "dungeon-crawler-guild",
      label: "Dungeon Crawler Guild",
      image: dungeonCrawlerGuildImage,
      onClick: () => onNavigate("DungeonCrawlerGuild"),
    },
    {
      key: "pearls-potions",
      label: "Pearl's Potions",
      image: pearlsPotionsImage,
      onClick: () => onNavigate("PearlsPotions"),
    },
    {
      key: "provisions-paradise",
      label: "Provision's Paradise",
      image: provisionsParadiseImage,
      onClick: () => onNavigate("ProvisionsParadise"),
    },
    {
      key: "ye-old-donkey",
      label: "Ye Old Donkey",
      image: yeOldDonkeyImage,
      onClick: () => onNavigate("YeOldDonkey"),
    },
    {
      key: "piggy-bank",
      label: "The Piggy Bank, no hammers inside.",
      image: piggyBankImage,
      onClick: () => onNavigate("PiggyBank"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${ballisticBellowsBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Ballistic Bellows</h1>
          <p className={styles.subtitle}>
            Precision-forged shops ready for clockwork minds and careful craftsmen
          </p>
        </div>

        <div className={styles.buttonGrid}>
          {shops.map((shop) => (
            <ShopButton
              key={shop.key}
              label={shop.label}
              imageSrc={shop.image}
              onClick={shop.onClick}
              {...getShopButtonStyle(shop.label)}
            />
          ))}
        </div>

        <p className={styles.footer}>This town was made by Caleb</p>
      </div>
    </div>
  );
}
