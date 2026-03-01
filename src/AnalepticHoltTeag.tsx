import analepticHoltBackground from "./SandboxAnalepticHolt.webp";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import robinsRopesImage from "./Robins Ropes.png";
import changingChurchImage from "./Changing Church.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import runestoneRelayImage from "./Runestone Relay.png";
import sleuthUniversityImage from "./Sleuth.webp";
import blossomHotelImage from "./Blossom Hotel.png";
import floralImage from "./Floral.webp";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import jazzPortablePotionsImage from "./Jazz's Portable Potions.png";
import { BackButton } from "./BackButton";
import styles from "./AnalepticHoltTeag.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

type AnalepticShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function AnalepticHoltTeag({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: AnalepticShop[] = [
    {
      key: "bullets-buffs-beyond",
      label: "Bullets, Buffs, & Beyond",
      image: bulletsBuffsBeyondImage,
      onClick: () => onNavigate("BulletsBuffsBeyond"),
    },
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "changing-church",
      label: "Changing Church",
      image: changingChurchImage,
      onClick: () => onNavigate("ChangingChurch"),
    },
    {
      key: "necromancy-insurance",
      label: "Necromancy Insurance Company",
      image: necromancyInsuranceImage,
      onClick: () => onNavigate("NecromancyInsuranceCompany"),
    },
    {
      key: "runestone-relay",
      label: "Runestone Relay",
      image: runestoneRelayImage,
      onClick: () => onNavigate("RunestoneRelay"),
    },
    {
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
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
      key: "evans-enchanting-emporium",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
    },
    {
      key: "jazz-portable-potions",
      label: "Jazz's Portable Potions",
      image: jazzPortablePotionsImage,
      onClick: () => onNavigate("JazzPortablePotions"),
    },
  ];

  const sortedShops = sortShopButtons(shops);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${analepticHoltBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Analeptic Holt</h1>
          <p className={styles.subtitle}>
            These among treetops and among the roots and laids this monkey city.
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

        <p className={styles.footer}>This town was made by Teag</p>
      </div>
    </div>
  );
}
