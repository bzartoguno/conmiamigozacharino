import jellyCityBackground from "./SandboxJellyCity.webp";
import goblinMarketImage from "./GoblinMarket.png";
import bookBombsImage from "./Book Bomb.png";
import robinsRopesImage from "./Robins Ropes.png";
import changingChurchImage from "./Changing Church.png";
import { BackButton } from "./BackButton";
import styles from "./JellyCity.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type JellyCityShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function JellyCity({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: JellyCityShop[] = [
    {
      key: "goblin-market",
      label: "Goblin Market",
      image: goblinMarketImage,
      onClick: () => onNavigate("goblins"),
    },
    {
      key: "book-bombs",
      label: "Book Bombs",
      image: bookBombsImage,
      onClick: () => onNavigate("BookBombs"),
    },
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "changing-church",
      label: "Changing Church",
      image: changingChurchImage,
      onClick: () => onNavigate("ChangingChurch"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${jellyCityBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Jelly City</h1>
          <p className={styles.subtitle}>
            A luminous city living inside a wandering jellyfish, featuring shops with
            secrets that float between worlds.
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

        <p className={styles.footer}>This town was made for Jelly City</p>
      </div>
    </div>
  );
}
