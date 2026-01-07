import bigHomeBackground from "./SandboxBigHome.webp";
import applegarthImage from "./Applegarth.webp";
import archivesGuildImage from "./Archives Guild.png";
import bookBombImage from "./Book Bomb.png";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import changingChurchImage from "./Changing Church.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import robinsRopesImage from "./Robins Ropes.png";
import runestoneRelayImage from "./Runestone Relay.png";
import silentOathImage from "./Silent Oath.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import auntPattysPiesImage from "./Aunt Pattie Pie.png";
import comedyGoldImage from "./Comedy Gold.png";
import dungeonCrawlerGuildImage from "./Dungeon Crawler's Guild.png";
import findAFriendImage from "./Find a Friend.png";
import navigationGuildImage from "./NavigationGuild-ezgif.com-webp-to-png-converter.png";
import pearlsPotionsImage from "./Pearls Potions.png";
import provisionsParadiseImage from "./Provisions Paradise.png";
import piggyBankImage from "./Piggy Bank.png";
import yeOldDonkeyImage from "./Ye Old Donkey.png";
import hugImage from "./Hug.webp";
import iconicDragonicImage from "./Iconic Dragonic.png";
import jellBellImage from "./Jell.webp";
import monsterMakerImage from "./Monster.webp";
import michaelsMountImage from "./Mounts.webp";
import pawsClawsMawsImage from "./Paws, Claws, & Maws.png";
import valhallaMartImage from "./Valhalla Mart.png";
import blossomHotelImage from "./Blossom Hotel.png";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import fairiesOfFloraImage from "./Floral.webp";
import golemWorkshopImage from "./Golem Work Shop.png";
import jazzPortablePotionsImage from "./Jazz's Portable Potions.png";
import jewelryGuildImage from "./Jewelry Guild.png";
import labyrinthineLibraryImage from "./Labyrinthine Labrary.png";
import nmeImage from "./N.M.E.png";
import sleuthUniversityImage from "./Sleuth.webp";
import fizzyTalesImage from "./FizzyTale.png";
import goblinMarketImage from "./GoblinMarket.png";
import auctionHouseImage from "./Auction House.png";
import blackMarketImage from "./Black Market.jpg";
import { BackButton } from "./BackButton";
import styles from "./BigHome.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type BigHomeShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function BigHome({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: BigHomeShop[] = [
    {
      key: "book-bombs",
      label: "Book Bombs",
      image: bookBombImage,
      onClick: () => onNavigate("BookBombs"),
    },
    {
      key: "bullets-buffs-beyond",
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
      key: "o-papies-oracle",
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
      key: "auntie-pattys-pies",
      label: "Auntie Patty's Pies",
      image: auntPattysPiesImage,
      onClick: () => onNavigate("AuntiePattysPies"),
    },
    {
      key: "comedy-gold",
      label: "Comedy Gold",
      image: comedyGoldImage,
      onClick: () => onNavigate("ComedyGold"),
    },
    {
      key: "find-a-friend",
      label: "Find a Friend",
      image: findAFriendImage,
      onClick: () => onNavigate("FindAFriend"),
    },
    {
      key: "pearls-potions",
      label: "Pearl's Potions",
      image: pearlsPotionsImage,
      onClick: () => onNavigate("PearlsPotions"),
    },
    {
      key: "provisions-paradise",
      label: "Provision's Paradise",
      image: provisionsParadiseImage,
      onClick: () => onNavigate("ProvisionsParadise"),
    },
    {
      key: "piggy-bank",
      label: "The Piggy Bank, no hammers inside.",
      image: piggyBankImage,
      onClick: () => onNavigate("PiggyBank"),
    },
    {
      key: "ye-old-donkey",
      label: "Ye Old Donkey",
      image: yeOldDonkeyImage,
      onClick: () => onNavigate("YeOldDonkey"),
    },
    {
      key: "hug-cartel",
      label: "Hug Cartel",
      image: hugImage,
      onClick: () => onNavigate("HugInfo"),
    },
    {
      key: "iconic-dragonic",
      label: "Iconic Dragonic",
      image: iconicDragonicImage,
      onClick: () => onNavigate("IconicDragonic"),
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
      image: monsterMakerImage,
      onClick: () => onNavigate("MonsterMaker"),
    },
    {
      key: "michaels-mount",
      label: "Michael's Mount",
      image: michaelsMountImage,
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
      key: "blossom-hotel",
      label: "Blossom Hotel",
      image: blossomHotelImage,
      onClick: () => onNavigate("BlossomHotel"),
    },
    {
      key: "evans-enchanting-emporium",
      label: "Evan's Enchanting Emporium",
      image: evansEnchantingEmporiumImage,
      onClick: () => onNavigate("EvansEnchantingEmporium"),
    },
    {
      key: "fairies-of-flora",
      label: "Fairies of Flora",
      image: fairiesOfFloraImage,
      onClick: () => onNavigate("FairiesOfFlora"),
    },
    {
      key: "golem-workshop",
      label: "Golem Workshop",
      image: golemWorkshopImage,
      onClick: () => onNavigate("GolemWorkshop"),
    },
    {
      key: "jazz-portable-potions",
      label: "Jazz's Portable Potions",
      image: jazzPortablePotionsImage,
      onClick: () => onNavigate("JazzPortablePotions"),
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
      key: "fizzy-tales",
      label: "Fizzy Tales",
      image: fizzyTalesImage,
      onClick: () => onNavigate("FizzyTales"),
    },
    {
      key: "goblin-market",
      label: "Goblins",
      image: goblinMarketImage,
      onClick: () => onNavigate("goblins"),
    },
    {
      key: "auction-house",
      label: "Auction house",
      image: auctionHouseImage,
      onClick: () => onNavigate("Auction"),
    },
    {
      key: "black-market",
      label: "Black Market",
      image: blackMarketImage,
      onClick: () => onNavigate("Black"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bigHomeBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Big Home</h1>
          <p className={styles.subtitle}>
            Every home keeps its doors open here—wander through here, for home is where the heart and the orcs don't mind sharing.
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

        <p className={styles.footer}>This stronghold is always family-first.</p>
      </div>
    </div>
  );
}
