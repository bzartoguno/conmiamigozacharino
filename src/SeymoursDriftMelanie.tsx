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
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

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

  const sortedShops = sortShopButtons(shops);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${seymoursDriftBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Seymour&apos;s Drift</h1>
          <p className={styles.subtitle}>
            Drifting from coast to coast Melanie&apos;s lily pad city, is such a laxed place to kick back and relax.
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

        <p className={styles.footer}>This town was made by Melanie</p>
      </div>
    </div>
  );
}
