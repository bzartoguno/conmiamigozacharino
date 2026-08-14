import bigHomeBackground from "./Images/SandboxBigHome.webp";
import applegarthImage from "./Images/Applegarth.webp";
import archivesGuildImage from "./Images/Archives Guild.png";
import bookBombImage from "./Images/Book Bomb.png";
import bulletsBuffsBeyondImage from "./Images/Bullets Buffs and Beyond.webp";
import changingChurchImage from "./Images/Changing Church.png";
import necromancyInsuranceImage from "./Images/NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import oPapiesOracleReadingsImage from "./Images/O Papies Oracle Readings.png";
import robinsRopesImage from "./Images/Robins Ropes.png";
import runestoneRelayImage from "./Images/Runestone Relay.png";
import silentOathImage from "./Images/Silent Oath.png";
import supremeSmithyImage from "./Images/Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import auntPattysPiesImage from "./Images/Aunt Pattie Pie.png";
import comedyGoldImage from "./Images/Comedy Gold.png";
import dungeonCrawlerGuildImage from "./Images/Dungeon Crawler's Guild.png";
import findAFriendImage from "./Images/Find a Friend.png";
import navigationGuildImage from "./Images/NavigationGuild-ezgif.com-webp-to-png-converter.png";
import pearlsPotionsImage from "./Images/Pearls Potions.png";
import provisionsParadiseImage from "./Images/Provisions Paradise.png";
import piggyBankImage from "./Images/Piggy Bank.png";
import yeOldDonkeyImage from "./Ye Old Donkey.png";
import iconicDragonicImage from "./Images/Iconic Dragonic.png";
import jellBellImage from "./Images/Jell.webp";
import monsterMakerImage from "./Images/Monster.webp";
import michaelsMountImage from "./Images/Mounts.webp";
import pawsClawsMawsImage from "./Images/Paws, Claws, & Maws.png";
import valhallaMartImage from "./Valhalla Mart.png";
import blossomHotelImage from "./Images/Blossom Hotel.png";
import evansEnchantingEmporiumImage from "./Images/Evan's Enchanting Emporium.png";
import fairiesOfFloraImage from "./Images/Floral.webp";
import jewelryGuildImage from "./Images/Jewelry Guild.png";
import labyrinthineLibraryImage from "./Images/Labyrinthine Labrary.png";
import nmeImage from "./Images/N.M.E.png";
import sleuthUniversityImage from "./Images/Sleuth.webp";
import fizzyTalesImage from "./Images/FizzyTale.png";
import goblinMarketImage from "./Images/GoblinMarket.png";
import auctionHouseImage from "./Images/Auction House.png";
import blackMarketImage from "./Images/Black Market.jpg";
import { BackButton } from "./BackButton";
import styles from "./BigHome.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle, sortShopButtons } from "./shopButtonStyles";

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

  const sortedShops = sortShopButtons(shops);

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

        <p className={styles.footer}>This stronghold is always family-first.</p>
      </div>
    </div>
  );
}
