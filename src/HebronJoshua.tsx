import hebronBackground from "./SandboxHebron.webp";
import supremeSmithyImage from "./Supreme Smithy.png";
import runestoneRelayImage from "./Runestone Relay.png";
import robinsRopesImage from "./Robins Ropes.png";
import silentOathImage from "./Silent Oath.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import sleuthUniversityImage from "./Sleuth.webp";
import { BackButton } from "./BackButton";
import styles from "./HebronJoshua.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type HebronShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function HebronJoshua({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: HebronShop[] = [
    {
      key: "supreme-smithy",
      label: "Supreme Smithy",
      image: supremeSmithyImage,
      onClick: () => onNavigate("SupremeSmithy"),
    },
    {
      key: "runestone-relay",
      label: "Runestone Relay",
      image: runestoneRelayImage,
      onClick: () => onNavigate("RunestoneRelay"),
    },
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "silent-oath",
      label: "Silent Oath",
      image: silentOathImage,
      onClick: () => onNavigate("SilentOath"),
    },
    {
      key: "necromancy-insurance-company",
      label: "Necromancy Insurance Company",
      image: necromancyInsuranceImage,
      onClick: () => onNavigate("NecromancyInsuranceCompany"),
    },
    {
      key: "evans-enchanting-emporium",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
    },
    {
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${hebronBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Hebron</h1>
          <p className={styles.subtitle}>
            A thunder-core powerhouse where research labs and arcane shops hum in unison
            beneath storm-lit skylines.
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

        <p className={styles.footer}>This town was made by Joshua</p>
      </div>
    </div>
  );
}
