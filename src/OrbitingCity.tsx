import orbitingCityBackground from "./SandboxOrbitingCity.webp";
import iconicDragonicImage from "./Iconic Dragonic.png";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import sleuthUniversityImage from "./Sleuth.webp";
import willsWeaponsImage from "./Wills Weapons.png";
import runestoneRelayImage from "./Runestone Relay.png";
import piggyBankImage from "./Piggy Bank.png";
import mountsImage from "./Mounts.webp";
import { BackButton } from "./BackButton";
import styles from "./OrbitingCity.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type OrbitingCityShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function OrbitingCity({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: OrbitingCityShop[] = [
    {
      key: "iconic-dragonic",
      label: "Iconic Dragonic",
      image: iconicDragonicImage,
      onClick: () => onNavigate("IconicDragonic"),
    },
    {
      key: "evans-enchanting-emporium",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
    },
    {
      key: "supreme-smithy",
      label: "Supreme Smithy",
      image: supremeSmithyImage,
      onClick: () => onNavigate("SupremeSmithy"),
    },
    {
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
    {
      key: "wills-weapons",
      label: "Will's Weapons",
      image: willsWeaponsImage,
      onClick: () => onNavigate("WillsWeapons"),
    },
    {
      key: "runestone-relay",
      label: "Runestone Relay",
      image: runestoneRelayImage,
      onClick: () => onNavigate("RunestoneRelay"),
    },
    {
      key: "piggy-bank",
      label: "The Piggy Bank, no hammers inside.",
      image: piggyBankImage,
      onClick: () => onNavigate("PiggyBank"),
    },
    {
      key: "michaels-mount",
      label: "Michael's Mount",
      image: mountsImage,
      onClick: () => onNavigate("MichaelsMount"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${orbitingCityBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Orbiting City</h1>
          <p className={styles.subtitle}>
            The Heart of the Dominion and the home to the Clockwork King and Princess
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

        <p className={styles.footer}>I found this image online!</p>
      </div>
    </div>
  );
}
