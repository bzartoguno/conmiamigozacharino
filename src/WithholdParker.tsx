import withholdBackground from "./SandboxWytheholde.webp";
import applegarthImage from "./Applegarth.webp";
import robinsRopesImage from "./Robins Ropes.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import floralImage from "./Floral.webp";
import silentOathImage from "./Silent Oath.png";
import { BackButton } from "./BackButton";
import styles from "./WithholdParker.module.css";

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
          <p className={styles.eyebrow}>Sandbox · Withhold (Parker)</p>
          <h1 className={styles.title}>Pick your next stop</h1>
          <p className={styles.subtitle}>
            Each shop uses its own icon so you always know where you&apos;re headed. Tap a
            button to jump straight to the storefront.
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
              <p className={styles.shopHint}>Jump into this storefront</p>
            </button>
          ))}
        </div>

        <p className={styles.footer}>Art credit: Withhold (Parker) world map</p>
      </div>
    </div>
  );
}
