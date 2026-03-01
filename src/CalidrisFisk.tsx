import calidrisBackground from "./SandboxCalidris.webp";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import floralImage from "./Floral.webp";
import golemWorkshopImage from "./Golem Work Shop.png";
import runestoneRelayImage from "./Runestone Relay.png";
import silentOathImage from "./Silent Oath.png";
import robinsRopesImage from "./Robins Ropes.png";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import nmeImage from "./N.M.E.png";
import { BackButton } from "./BackButton";
import styles from "./CalidrisFisk.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

type CalidrisShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function CalidrisFisk({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: CalidrisShop[] = [
    {
      key: "necromancy-insurance",
      label: "Necromancy Insurance Company",
      image: necromancyInsuranceImage,
      onClick: () => onNavigate("NecromancyInsuranceCompany"),
    },
    {
      key: "fairies-of-flora",
      label: "Fairies of Flora",
      image: floralImage,
      onClick: () => onNavigate("FairiesOfFlora"),
    },
    {
      key: "golem-workshop",
      label: "Golem Workshop",
      image: golemWorkshopImage,
      onClick: () => onNavigate("GolemWorkshop"),
    },
    {
      key: "runestone-relay",
      label: "Runestone Relay",
      image: runestoneRelayImage,
      onClick: () => onNavigate("RunestoneRelay"),
    },
    {
      key: "silent-oath",
      label: "Silent Oath",
      image: silentOathImage,
      onClick: () => onNavigate("SilentOath"),
    },
    {
      key: "robins-ropes",
      label: "Robin Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
    },
    {
      key: "bullets-buffs-beyond",
      label: "Bullets, Buffs, & Beyond",
      image: bulletsBuffsBeyondImage,
      onClick: () => onNavigate("BulletsBuffsBeyond"),
    },
    {
      key: "supreme-smithy",
      label: "Supreme Smithy",
      image: supremeSmithyImage,
      onClick: () => onNavigate("SupremeSmithy"),
    },
    {
      key: "wills-weapons",
      label: "Will's Weapons",
      image: willsWeaponsImage,
      onClick: () => onNavigate("WillsWeapons"),
    },
    {
      key: "nme",
      label: "N.M.E.",
      image: nmeImage,
      onClick: () => onNavigate("NME"),
    },
  ];

  const sortedShops = sortShopButtons(shops);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${calidrisBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>New Calidris</h1>
          <p className={styles.subtitle}>
            A new frontier, lead by an unusual bunch, will this up and coming place survive and thrive? or implode from internal conflict? Only time will tell.
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

        <p className={styles.footer}>This town was made by Fisk</p>
      </div>
    </div>
  );
}
