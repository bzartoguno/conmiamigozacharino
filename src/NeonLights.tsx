import backgroundImage from "./images/NeonLights Icon.jpeg";
import neonMapImage from "./images/NeonMap.png";
import neonScheduleImage from "./images/NeonSchedule.png";
import shopImage0 from "./images/Comedy Gold.png";
import shopImage1 from "./images/Jell.webp";
import shopImage2 from "./images/Paws, Claws, & Maws.png";
import shopImage3 from "./images/Runestone Relay.png";
import shopImage4 from "./images/Provisions Paradise.png";
import shopImage5 from "./images/FizzyTale.png";
import shopImage6 from "./images/Hug.webp";
import shopImage7 from "./images/Ye Old Home Depot.webp";
import { BackButton } from "./BackButton";
import styles from "./StrenuousPortal.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

type NeonShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function NeonLights({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: NeonShop[] = [
    { key: "ComedyGold", label: "Comedy Gold", image: shopImage0, onClick: () => onNavigate("ComedyGold") },
    { key: "JellBell", label: "Jell Bell", image: shopImage1, onClick: () => onNavigate("JellBell") },
    { key: "PawsClawsMaws", label: "Paws, Claws, & Maws", image: shopImage2, onClick: () => onNavigate("PawsClawsMaws") },
    { key: "RunestoneRelay", label: "Runestone Relay", image: shopImage3, onClick: () => onNavigate("RunestoneRelay") },
    { key: "ProvisionsParadise", label: "Provision's Paradise", image: shopImage4, onClick: () => onNavigate("ProvisionsParadise") },
    { key: "FizzyTales", label: "Fizzy Tales", image: shopImage5, onClick: () => onNavigate("FizzyTales") },
    { key: "HugInfo", label: "Hug Cartel", image: shopImage6, onClick: () => onNavigate("HugInfo") },
    { key: "YeOldHomeDepot", label: "Ye Old Home Depot", image: shopImage7, onClick: () => onNavigate("YeOldHomeDepot") },
  ];

  const sortedShops = sortShopButtons(shops);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Welcome to</p>
          <h1 className={styles.title}>Neon Lights</h1>
        </div>

        <img
          className={styles.featureImage}
          src={neonMapImage}
          alt="Map view of the Neon Lights"
        />

        <img
          className={styles.featureImage}
          src={neonScheduleImage}
          alt="Neon Lights schedule"
        />

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

      </div>
    </div>
  );
}
