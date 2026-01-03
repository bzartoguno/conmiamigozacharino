import withholdBackground from "./SandboxWytheholde.webp";
import applegarthImage from "./Applegarth.webp";
import robinsRopesImage from "./Robins Ropes.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import floralImage from "./Floral.webp";
import silentOathImage from "./Silent Oath.png";
import { BackButton } from "./BackButton";
import styles from "./WithholdParker.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type WithholdShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function WithholdParker({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: WithholdShop[] = [
    {
      key: "applegarth",
      label: "Applegarth Guild",
      image: applegarthImage,
      onClick: () => onNavigate("ApplegarthGuild"),
    },
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "o-papies",
      label: "O-Papies Oracle Readings",
      image: oPapiesOracleReadingsImage,
      onClick: () => onNavigate("OPapiesOracleReadings"),
    },
    {
      key: "supreme-smithy",
      label: "Supreme Smithy",
      image: supremeSmithyImage,
      onClick: () => onNavigate("SupremeSmithy"),
    },
    {
      key: "fairies-of-flora",
      label: "Fairies of Flora",
      image: floralImage,
      onClick: () => onNavigate("FairiesOfFlora"),
    },
    {
      key: "silent-oath",
      label: "Silent Oath",
      image: silentOathImage,
      onClick: () => onNavigate("SilentOath"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${withholdBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Withhold</h1>
          <p className={styles.subtitle}>
            These shops that blend in seamlessly with the neighboring hill houses
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

        <p className={styles.footer}>This town was made by Parker</p>
      </div>
    </div>
  );
}
