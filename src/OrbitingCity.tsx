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
      label: "The Piggy Bank",
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
          <h1 className={styles.title}>Welcome to Orbiting City</h1>
          <p className={styles.subtitle}>
            Keep pace with the floating metropolis by visiting the merchants that help
            keep it aloft.
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

        <p className={styles.footer}>This city sails the sky with your support.</p>
      </div>
    </div>
  );
}
