import byfordBackground from "./SandboxByfordDolphin.webp";
import auntiePattysPiesImage from "./Aunt Pattie Pie.png";
import blossomHotelImage from "./Blossom Hotel.png";
import jewelryGuildImage from "./Jewelry Guild.png";
import nmeImage from "./N.M.E.png";
import labyrinthineLibraryImage from "./Labyrinthine Labrary.png";
import sleuthUniversityImage from "./Sleuth.webp";
import changingChurchImage from "./Changing Church.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import { BackButton } from "./BackButton";
import styles from "./ByfordDolphinRobertson.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type ByfordShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function ByfordDolphinRobertson({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: ByfordShop[] = [
    {
      key: "auntie-pattys-pies",
      label: "Auntie Patty's Pies",
      image: auntiePattysPiesImage,
      onClick: () => onNavigate("AuntiePattysPies"),
    },
    {
      key: "blossom-hotel",
      label: "Blossom Hotel",
      image: blossomHotelImage,
      onClick: () => onNavigate("BlossomHotel"),
    },
    {
      key: "jewelry-guild",
      label: "Jewelry Guild",
      image: jewelryGuildImage,
      onClick: () => onNavigate("JewelryGuild"),
    },
    {
      key: "nme",
      label: "N.M.E.",
      image: nmeImage,
      onClick: () => onNavigate("NME"),
    },
    {
      key: "labyrinthine-library",
      label: "Labyrinthine Library",
      image: labyrinthineLibraryImage,
      onClick: () => onNavigate("LabyrinthineLibrary"),
    },
    {
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
    {
      key: "changing-church",
      label: "Changing Church",
      image: changingChurchImage,
      onClick: () => onNavigate("ChangingChurch"),
    },
    {
      key: "o-papies",
      label: "O-Papies Oracle Readings",
      image: oPapiesOracleReadingsImage,
      onClick: () => onNavigate("OPapiesOracleReadings"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${byfordBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Byford Dolphin</h1>
          <p className={styles.subtitle}>
            These opulent shops line the harbor, each competing for the Clockwork King's favor
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

        <p className={styles.footer}>This town was made by Robertson</p>
      </div>
    </div>
  );
}
