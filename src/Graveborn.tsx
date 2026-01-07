import gravebornBackground from "./SandboxGraveBorn.webp";
import iconicDragonicImage from "./Iconic Dragonic.png";
import monsterImage from "./Monster.webp";
import mountsImage from "./Mounts.webp";
import pawsClawsMawsImage from "./Paws, Claws, & Maws.png";
import valhallaMartImage from "./Valhalla Mart.png";
import sleuthUniversityImage from "./Sleuth.webp";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import labyrinthineLibraryImage from "./Labyrinthine Labrary.png";
import blossomHotelImage from "./Blossom Hotel.png";
import { BackButton } from "./BackButton";
import styles from "./Graveborn.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type GravebornShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function Graveborn({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: GravebornShop[] = [
    {
      key: "iconic-dragonic",
      label: "Iconic Dragonic",
      image: iconicDragonicImage,
      onClick: () => onNavigate("IconicDragonic"),
    },
    {
      key: "make-a-monster",
      label: "Make a Monster",
      image: monsterImage,
      onClick: () => onNavigate("MonsterMaker"),
    },
    {
      key: "michaels-mount",
      label: "Michael's Mount",
      image: mountsImage,
      onClick: () => onNavigate("MichaelsMount"),
    },
    {
      key: "paws-claws-maws",
      label: "Paws, Claws, & Maws",
      image: pawsClawsMawsImage,
      onClick: () => onNavigate("PawsClawsMaws"),
    },
    {
      key: "valhalla-mart",
      label: "Valhalla Mart",
      image: valhallaMartImage,
      onClick: () => onNavigate("ValhallaMart"),
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
      key: "blossom-hotel",
      label: "Blossom Hotel",
      image: blossomHotelImage,
      onClick: () => onNavigate("BlossomHotel"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${gravebornBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Graveborn</h1>
          <p className={styles.subtitle}>
            A haven for the undead to rest and find peace from the living.
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

        <p className={styles.footer}>This town beckons every wandering spirit</p>
      </div>
    </div>
  );
}
