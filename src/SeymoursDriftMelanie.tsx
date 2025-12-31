import seymoursDriftBackground from "./SandboxSeymoursDrift.webp";
import blossomHotelImage from "./Blossom Hotel.png";
import floralImage from "./Floral.webp";
import sleuthUniversityImage from "./Sleuth.webp";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import labyrinthineLibraryImage from "./Labyrinthine Labrary.png";
import willsWeaponsImage from "./Wills Weapons.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import { BackButton } from "./BackButton";
import styles from "./SeymoursDriftMelanie.module.css";

type SeymoursDriftShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function SeymoursDriftMelanie({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: SeymoursDriftShop[] = [
    {
      key: "blossom-hotel",
      label: "Blossom Hotel",
      image: blossomHotelImage,
      onClick: () => onNavigate("BlossomHotel"),
    },
    {
      key: "fairies-of-flora",
      label: "Fairies of Flora",
      image: floralImage,
      onClick: () => onNavigate("FairiesOfFlora"),
    },
    {
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
    {
      key: "evans-enchanting-emporium",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
    },
    {
      key: "labyrinthine-library",
      label: "Labyrinthine Library",
      image: labyrinthineLibraryImage,
      onClick: () => onNavigate("LabyrinthineLibrary"),
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
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${seymoursDriftBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Seymour&apos;s Drift</h1>
          <p className={styles.subtitle}>
            Shops drifting along Melanie&apos;s lily pad city, always ready when the tide
            brings you in
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

        <p className={styles.footer}>This town was made by Melanie</p>
      </div>
    </div>
  );
}
