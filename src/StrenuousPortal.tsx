import backgroundImage from "./StrenuousPortalButton2.webp";
import applegarthImage from "./Applegarth.webp";
import archivesGuildImage from "./Archives Guild.png";
import bookBombsImage from "./Book Bomb.png";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import changingChurchImage from "./Changing Church.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import robinsRopesImage from "./Robins Ropes.png";
import runestoneRelayImage from "./Runestone Relay.png";
import silentOathImage from "./Silent Oath.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import jellBellImage from "./Jell.webp";
import monsterImage from "./Monster.webp";
import mountsImage from "./Mounts.webp";
import pawsClawsMawsImage from "./Paws, Claws, & Maws.png";
import valhallaMartImage from "./Valhalla Mart.png";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import floralImage from "./Floral.webp";
import golemWorkshopImage from "./Golem Work Shop.png";
import jewelryGuildImage from "./Jewelry Guild.png";
import nmeImage from "./N.M.E.png";
import sleuthUniversityImage from "./Sleuth.webp";
import fizzyTaleImage from "./FizzyTale.png";
import goblinMarketImage from "./GoblinMarket.png";
import { BackButton } from "./BackButton";
import styles from "./StrenuousPortal.module.css";

type StrenuousShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function StrenuousPortal({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: StrenuousShop[] = [
    {
      key: "applegarth",
      label: "Applegarth Guild",
      image: applegarthImage,
      onClick: () => onNavigate("ApplegarthGuild"),
    },
    {
      key: "archives-guild",
      label: "Archives Guild",
      image: archivesGuildImage,
      onClick: () => onNavigate("ArchivesGuild"),
    },
    {
      key: "book-bombs",
      label: "Book Bombs",
      image: bookBombsImage,
      onClick: () => onNavigate("BookBombs"),
    },
    {
      key: "bullets-buffs",
      label: "Bullets, Buffs, & Beyond",
      image: bulletsBuffsBeyondImage,
      onClick: () => onNavigate("BulletsBuffsBeyond"),
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
      key: "o-papies",
      label: "O-Papies Oracle Readings",
      image: oPapiesOracleReadingsImage,
      onClick: () => onNavigate("OPapiesOracleReadings"),
    },
    {
      key: "robins-ropes",
      label: "Robin's Ropes",
      image: robinsRopesImage,
      onClick: () => onNavigate("RobinsRopes"),
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
      key: "jell-bell",
      label: "Jell Bell",
      image: jellBellImage,
      onClick: () => onNavigate("JellBell"),
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
      key: "paws-claws",
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
      key: "evans-enchanting",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
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
      key: "sleuth-university",
      label: "Sleuth University",
      image: sleuthUniversityImage,
      onClick: () => onNavigate("SleuthUniversity"),
    },
    {
      key: "fizzy-tales",
      label: "Fizzy Tales",
      image: fizzyTaleImage,
      onClick: () => onNavigate("FizzyTales"),
    },
    {
      key: "goblins",
      label: "Goblins",
      image: goblinMarketImage,
      onClick: () => onNavigate("goblins"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Main Menu</p>
          <h1 className={styles.title}>Welcome to the Strenuous Portal</h1>
          <p className={styles.subtitle}>
            Modeled after Withhold&apos;s cozy collection, this portal gathers bustling
            favorites and arcane corners all in one launch point.
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
            </button>
          ))}
        </div>

        <p className={styles.footer}>
          A fresh gateway inspired by Withhold&apos;s layout—now linked straight from the
          main menu.
        </p>
      </div>
    </div>
  );
}
