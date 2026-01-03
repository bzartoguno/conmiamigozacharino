import merricksMeadowBackground from "./SandboxMerricksGrove.webp";
import applegarthImage from "./Applegarth.webp";
import robinsRopesImage from "./Robins Ropes.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import changingChurchImage from "./Changing Church.png";
import silentOathImage from "./Silent Oath.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import provisionsParadiseImage from "./Provisions Paradise.png";
import jazzPortablePotionsImage from "./Jazz's Portable Potions.png";
import { BackButton } from "./BackButton";
import styles from "./MerricksMeadowHoward.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type MerricksShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function MerricksMeadowHoward({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: MerricksShop[] = [
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "applegarth",
      label: "Applegarth Guild",
      image: applegarthImage,
      onClick: () => onNavigate("ApplegarthGuild"),
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
    {
      key: "silent-oath",
      label: "Silent Oath",
      image: silentOathImage,
      onClick: () => onNavigate("SilentOath"),
    },
    {
      key: "necromancy-insurance",
      label: "Necromancy Insurance Company",
      image: necromancyInsuranceImage,
      onClick: () => onNavigate("NecromancyInsuranceCompany"),
    },
    {
      key: "provisions-paradise",
      label: "Provision's Paradise",
      image: provisionsParadiseImage,
      onClick: () => onNavigate("ProvisionsParadise"),
    },
    {
      key: "jazz-portable-potions",
      label: "Jazz's Portable Potions",
      image: jazzPortablePotionsImage,
      onClick: () => onNavigate("JazzPortablePotions"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${merricksMeadowBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox · Merrick's Meadow</p>
          <h1 className={styles.title}>The herb boom reshaped this meadow</h1>
          <p className={styles.subtitle}>
            Locals and newcomers weave between meadow paths to visit the busiest shops in
            Howard's booming village.
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

        <p className={styles.footer}>This meadow blooms thanks to Howard</p>
      </div>
    </div>
  );
}
