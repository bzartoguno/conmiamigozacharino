import { Goblins } from "./Goblins";
import { Auctions } from "./Auction";
import { Blacks } from "./Black";
import { BookBombs } from "./BookBombs";
import { BulletsBuffsBeyond } from "./BulletsBuffsBeyond";
import { ApplegarthGuild } from "./ApplegarthGuild";
import { ArchivesGuild } from "./ArchivesGuild";
import { bookBombDataUrl } from "./bookBombImage";
import { AuntiePattysPies } from "./AuntiePattysPies";
import { IconicDragonic } from "./IconicDragonic";
import { JellBell } from "./JellBell";
import { PiggyBank } from "./PiggyBank";
import { NavigationGuild } from "./NavigationGuild";
import { PearlsPotions } from "./PearlsPotions";
import { FindAFriend } from "./FindAFriend";
import { ComedyGold } from "./ComedyGold";
import { DungeonCrawlerGuild } from "./DungeonCrawlerGuild";
import bookBombPng from "./images/Book Bomb.png";
import goblinmarket from "./images/GoblinMarket.png"
import bulletsBuffsBeyondImage from "./images/Bullets Buffs and Beyond.webp";
import applegarthImage from "./images/Applegarth.webp";
import archivesGuildImage from "./images/Archives Guild.png";
import auntPattiePieImage from "./images/Aunt Pattie Pie.png";
import iconicDragonicImage from "./images/Iconic Dragonic.png";
import navigationGuildImage from "./images/NavigationGuild-ezgif.com-webp-to-png-converter.png";
import pearlsPotionsImage from "./images/Pearls Potions.png";
import findAFriendImage from "./images/Find a Friend.png";
import comedyGoldImage from "./images/Comedy Gold.png";
import dungeonCrawlerGuildImage from "./images/Dungeon Crawler's Guild.png";
import { ChangingChurch } from "./ChangingChurch";
import { NecromancyInsuranceCompany } from "./NecromancyInsuranceCompany";
import changingChurchImage from "./images/Changing Church.png";
import necromancyInsuranceImage from "./images/NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import { OPapiesOracleReadings } from "./OPapiesOracleReadings";
import { RobinsRopes } from "./RobinsRopes";
import { RunestoneRelay } from "./RunestoneRelay";
import { SilentOath } from "./SilentOath";
import { SupremeSmithy } from "./SupremeSmithy";
import { CalidrisFisk } from "./CalidrisFisk";
import { WithholdParker } from "./WithholdParker";
import { OrbitingCity } from "./OrbitingCity";
import { SeymoursDriftMelanie } from "./SeymoursDriftMelanie";
import { HebronJoshua } from "./HebronJoshua";
import { BallisticBellowsCaleb } from "./BallisticBellowsCaleb";
import { MeanderMichael } from "./MeanderMichael";
import { MerricksMeadowHoward } from "./MerricksMeadowHoward";
import { BigHome } from "./BigHome";
import { WillsWeapons } from "./WillsWeapons";
import { ButtingRams } from "./ButtingRams";
import { YeOldDonkey } from "./YeOldDonkey";
import oPapiesOracleReadingsImage from "./images/O Papies Oracle Readings.png";
import robinsRopesImage from "./images/Robins Ropes.png";
import runestoneRelayImage from "./images/Runestone Relay.png";
import silentOathImage from "./images/Silent Oath.png";
import supremeSmithyImage from "./images/Supreme Smithy.png";
import willsWeaponsImage from "./images/Wills Weapons.png";
import piggyBankImage from "./images/Piggy Bank.png";
import yeOldDonkeyImage from "./images/Ye Old Donkey.png";
import FizzyTale  from "./images/FizzyTale.png";
import provisionsParadiseImage from "./images/Provisions Paradise.png";
import { ProvisionsParadise } from "./ProvisionsParadise";
import { useEffect, useState } from "react";
import { sortShopButtons } from "./shopButtonStyles";
import { HugInfo } from "./HugInfo";
import hugImage from "./images/Hug.webp";
import jellBellImage from "./images/Jell.webp";
import { MonsterMaker } from "./MonsterMaker";
import monsterImage from "./images/Monster.webp";
import { PawsClawsMaws } from "./PawsClawsMaws";
import pawsClawsMawsImage from "./images/Paws, Claws, & Maws.png";
import { MichaelsMount } from "./MichaelsMount";
import mountsImage from "./images/Mounts.webp";
import { ValhallaMart } from "./ValhallaMart";
import valhallaMartImage from "./images/Valhalla Mart.png";
import { BlossomHotel } from "./BlossomHotel";
import blossomHotelImage from "./images/Blossom Hotel.png";
import { SleuthUniversity } from "./SleuthUniversity";
import sleuthUniversityImage from "./images/Sleuth.webp";
import { EvansEnchantingEmporium } from "./EvansEnchantingEmporium";
import evansEnchantingEmporiumImage from "./images/Evan's Enchanting Emporium.png";
import { FairiesOfFlora } from "./FairiesOfFlora";
import floralImage from "./images/Floral.webp";
import loadingScreenBackground from "./images/loading-screen.gif";
import { GolemWorkshop } from "./GolemWorkshop";
import golemWorkshopImage from "./images/Golem Work Shop.png";
import { JazzPortablePotions } from "./JazzPortablePotions";
import jazzPortablePotionsImage from "./images/Jazz's Portable Potions.png";
import { JewelryGuild } from "./JewelryGuild";
import jewelryGuildImage from "./images/Jewelry Guild.png";
import { LabyrinthineLibrary } from "./LabyrinthineLibrary";
import labyrinthineLibraryImage from "./images/Labyrinthine Labrary.png";
import { NME } from "./NME";
import nmeImage from "./images/N.M.E.png";
import { FizzyTales } from "./FizzyTales";
import { AnalepticHoltTeag } from "./AnalepticHoltTeag";
import { YeOldHomeDepot } from "./YeOldHomeDepot";
import yeOldHomeDepotImage from "./images/Ye Old Home Depot.webp";
import sandboxWorldMapImage from "./images/SandboxWorldMap.webp";
import sandboxAnalepticHoltImage from "./images/SandboxAnalepticHolt.webp";
import sandboxBallisticBellowsImage from "./images/SandboxBallisticBellows.webp";
import sandboxBigHomeImage from "./images/SandboxBigHome.webp";
import sandboxButtingRamsImage from "./images/SandboxButtingRams.webp";
import sandboxByfordDolphinImage from "./images/SandboxByfordDolphin.webp";
import sandboxCalidrisImage from "./images/SandboxCalidris.webp";
import sandboxGraveBornImage from "./images/SandboxGraveBorn.webp";
import sandboxHebronImage from "./images/SandboxHebron.webp";
import sandboxJellyCityImage from "./images/SandboxJellyCity.webp";
import sandboxMeanderImage from "./images/SandboxMeander.webp";
import sandboxMerricksGroveImage from "./images/SandboxMerricksGrove.webp";
import sandboxOrbitingCityImage from "./images/SandboxOrbitingCity.webp";
import sandboxPopNFaithImage from "./images/SandboxPop-nFaith.webp";
import sandboxSeymoursDriftImage from "./images/SandboxSeymoursDrift.webp";
import sandboxWytheholdeImage from "./images/SandboxWytheholde.webp";
import { JellyCity } from "./JellyCity";
import { ByfordDolphinRobertson } from "./ByfordDolphinRobertson";
import { Graveborn } from "./Graveborn";
import { StrenuousPortal } from "./StrenuousPortal";
import strenuousPortalButtonImage from "./images/StrenuousTrue.webp";
import { ReadySetBet, readySetBetMapButton } from "./ReadySetBet";
import { SettlementProvider } from "./SettlementContext";
import { SettlementType } from "./inventoryAvailability";
import { BlankWorldTemplate } from "./Blank world template/BlankWorldTemplate";
import placeholderImage from "./images/Placeholder.jpg";

// Remove stray whitespace/newlines from data URIs (defensive)
function cleanDataUrl(s?: string) {
  return s ? s.replace(/\s+/g, "") : s;
}

// Convert a string into a small PNG (text rendered on a canvas) and
// return a data URL. Useful when you want to display the literal
// base64/text as an image. Runs only in the browser.
function useTextImage(text?: string) {
  const [dataUrl, setDataUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!text || typeof document === "undefined") {
      setDataUrl(undefined);
      return;
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setDataUrl(undefined);
      return;
    }
    const font = "12px monospace";
    ctx.font = font;
    const lines = String(text).split("\n");
    const maxTextWidth = Math.max(...lines.map((l) => ctx.measureText(l).width));
    const w = Math.min(2000, Math.max(200, Math.ceil(maxTextWidth) + 20));
    const lineHeight = 18;
    canvas.width = w;
    canvas.height = lines.length * lineHeight + 20;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = font;
    lines.forEach((line, i) => ctx.fillText(line, 10, 16 + i * lineHeight));
    setDataUrl(canvas.toDataURL("image/png"));
  }, [text]);
  return dataUrl;
}

type SandboxTown = {
  key: string;
  routeKey: string;
  name: string;
  settlementType: SettlementType;
  description: string;
  image: string;
};

type ShopButton = {
  key: string;
  label: string;
  delay: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
};

const sandboxTowns: SandboxTown[] = [
  {
    key: "withhold",
    routeKey: "Withhold",
    name: "Withhold (Parker)",
    settlementType: "Thorpe",
    image: sandboxWytheholdeImage,
    description:
      "Nestled between warm rolling hills and jagged, freezing mountains, Withhold grows famous home-grown food but struggles for medicine once winter comes. As they live in Wandering Titan territory, nearly everyone knows how to flee into the tight valley caves when danger looms, preserving the town's dwindling stories.",
  },
  {
    key: "butting-rams",
    routeKey: "ButtingRams",
    name: "Butting Rams",
    settlementType: "Hamlet",
    image: sandboxButtingRamsImage,
    description:
      "Barbarians here love fighting, feasting, and boasting about both. Their town is literally split between two enormous rams that butt heads, catapulting residents back and forth—thankfully the rams are fluffy enough to make the landings survivable before the traditional 15-minute free-for-all.",
  },
  {
    key: "meander",
    routeKey: "Meander",
    name: "Meander (Michael)",
    settlementType: "Thorpe",
    image: sandboxMeanderImage,
    description:
      "A cowboy's dream that never settles, Meander roams Wandering Titan territory after draining every Magitek Oil spot. Constant desert travel keeps crops from thriving, so the townsfolk trade for food while clinging to a strong moral compass they defend fiercely.",
  },
  {
    key: "calidris",
    routeKey: "Calidris",
    name: "Calidris (Fisk)",
    settlementType: "Town",
    image: sandboxCalidrisImage,
    description:
      "Created as an artisans' paradise with no creative limits, Calidris thrived—until every living resident vanished overnight. Only the golems and robots remain, tirelessly working while ignoring their missing masters.",
  },
  {
    key: "merricks-meadow",
    routeKey: "MerricksMeadow",
    name: "Merrick's Meadow (Howard)",
    settlementType: "Village",
    image: sandboxMerricksGroveImage,
    description:
      "This humble village boomed after discovering rare herbs. Newcomers flock to Merrick's Meadow for its newfound fame, while longtime residents grumble about the crowds disturbing their once-tranquil home.",
  },
  {
    key: "ballistic-bellows",
    routeKey: "BallisticBellows",
    name: "Ballistic Bellows (Caleb)",
    settlementType: "Village",
    image: sandboxBallisticBellowsImage,
    description:
      "Punctual and industrious, every citizen can run a forge or clockwork device. Their advanced weapons self-destruct if reverse engineered, protecting the secrets behind their booming craft.",
  },
  {
    key: "byford-dolphin",
    routeKey: "ByfordDolphin",
    name: "Byford Dolphin (Robertson)",
    settlementType: "Village",
    image: sandboxByfordDolphinImage,
    description:
      "Wealth dictates status in Byford Dolphin. Legendary metals pulled from the sea fund the Clockwork King's construction projects, while the richest citizen holds the House of Blades contract—and the bill that comes with it.",
  },
  {
    key: "hebron",
    routeKey: "Hebron",
    name: "Hebron (Joshua)",
    settlementType: "Town",
    image: sandboxHebronImage,
    description:
      "After the Missing Millennium, Hebron secured a monopoly on Thunder Cores by salvaging and purchasing every relic they could find. Now it's a hub for minds devoted to unlocking the power behind these remnants.",
  },
  {
    key: "jelly-city",
    routeKey: "JellyCity",
    name: "Jelly City",
    settlementType: "Town",
    image: sandboxJellyCityImage,
    description:
      "Built vertically inside a Wandering Titan jellyfish, this flexible city produces medicine that keeps the Disciples of Mother battle-ready. Its secrets are hard to see, but unforgettable once witnessed.",
  },
  {
    key: "pop-n-faith",
    routeKey: "Sandbox",
    name: "Pop-n Faith (Eli)",
    settlementType: "City",
    image: sandboxPopNFaithImage,
    description:
      "Sorry, but there is no more Pop-n Faith. Your world deities are gone; now your planet is stuck between death and unlife.",
  },
  {
    key: "analeptic-holt",
    routeKey: "AnalepticHolt",
    name: "Analeptic Holt (Teag)",
    settlementType: "City",
    image: sandboxAnalepticHoltImage,
    description:
      "Hidden beneath an ancient jungle canopy, Hadozee gliders live among massive roots and high branches. They cherish harmony with their environment but stay guarded with outsiders to protect their traditions.",
  },
  {
    key: "seymours-drift",
    routeKey: "SeymoursDrift",
    name: "Seymour's Drift (Melanie)",
    settlementType: "City",
    image: sandboxSeymoursDriftImage,
    description:
      "A sprawling city on a giant drifting lily pad, Seymour's Drift follows the tides while serving its enigmatic leader, Audrey the Second. Residents bond over devotion, firearms, and an unyielding love of meat.",
  },
  {
    key: "graveborn",
    routeKey: "Graveborn",
    name: "Graveborn",
    settlementType: "City",
    image: sandboxGraveBornImage,
    description:
      "A sanctuary for the undead, founded before the 75-year war so vampires, zombies, skeletons, and even dream visages could live free. Left alone, the undead eventually wander toward this vibrant necropolis.",
  },
  {
    key: "orbiting-city",
    routeKey: "OrbitingCity",
    name: "Orbiting City",
    settlementType: "City",
    image: sandboxOrbitingCityImage,
    description:
      "Humanity pushed the impossible to reality, building a city that sails the sky thanks to alliances and generosity toward the Clockwork King. Its flight marks a new era of exploration and diplomacy.",
  },
  {
    key: "big-home",
    routeKey: "BigHome",
    name: "Big Home",
    settlementType: "Metropolis",
    image: sandboxBigHomeImage,
    description:
      "Orcs value family, honesty, and loyalty. After 'Mother' guided them to shun technology and guard the secrets of the Missing Millennium, their strength in numbers and conviction makes them formidable when provoked.",
  },
];

const hubDestinations = [
  { routeKey: "Sandbox", name: "Sandbox", townType: "Travel", delay: "1.5s", backgroundColor: "rgba(15, 23, 42, 0.85)", color: "#e2e8f0", imageSrc: sandboxWorldMapImage },
  { routeKey: "BlankWorldTemplate", name: "Blank world template", townType: "Travel", delay: "2s", backgroundColor: "rgba(51, 65, 85, 0.95)", color: "#f8fafc", imageSrc: placeholderImage },
  { routeKey: "StrenuousPortal", name: "Strenuous Portal", townType: "Town", delay: "2.5s", backgroundColor: "rgba(88, 28, 135, 0.9)", color: "#f1f5f9", imageSrc: strenuousPortalButtonImage },
  { routeKey: "EveryShop", name: "Every Shop", townType: "Metropolis", delay: "3s", backgroundColor: "rgba(30, 64, 175, 0.9)", color: "#e2e8f0" },
] satisfies Array<{
  routeKey: string;
  name: string;
  townType: SettlementType;
  delay: string;
  backgroundColor: string;
  color: string;
  imageSrc?: string;
}>;

export function Map() {
  const [navigatedTo, setNavigatedTo] = useState<string>("");
  const [, setNavigationStack] = useState<string[]>([]);
  const [selectedSettlementType, setSelectedSettlementType] =
    useState<SettlementType | undefined>(undefined);

  const handleNavigate = (
    next: string,
    options?: { settlementType?: SettlementType }
  ) => {
    setNavigationStack((stack) => [...stack, navigatedTo]);
    if (options?.settlementType && options.settlementType !== "Travel") {
      setSelectedSettlementType(options.settlementType);
    }
    setNavigatedTo(next);
  };
  const handleBack = () => {
    setNavigationStack((stack) => {
      const previous = stack[stack.length - 1] ?? "";
      setNavigatedTo(previous);
      return stack.slice(0, -1);
    });
  };
  // cleaned version of the embedded data URI (defensive)
  const cleanedBookBomb = cleanDataUrl(bookBombDataUrl);
  // image that draws the literal base64/text onto a canvas (preferred)
  const bookBombImageFromText = useTextImage(bookBombDataUrl);
  const everyShopButtons: ShopButton[] = [
    {
      key: "Auction",
      label: "Auction House",
      delay: "3s",
      backgroundColor: "rgba(138, 253, 244, 0.712)",
    },
    {
      key: "Black",
      label: "Black Market",
      delay: "6s",
      backgroundColor: "rgba(0, 0, 0, 0.712)",
      color: "white",
    },
    {
      key: "ApplegarthGuild",
      label: "Applegarth Guild",
      delay: "9s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: applegarthImage,
    },
    {
      key: "ArchivesGuild",
      label: "Archives Guild",
      delay: "12s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: archivesGuildImage,
    },
    {
      key: "BookBombs",
      label: "Book Bombs",
      delay: "15s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: bookBombPng ?? cleanedBookBomb ?? bookBombImageFromText,
    },
    {
      key: "BulletsBuffsBeyond",
      label: "Bullets, Buffs, & Beyond",
      delay: "18s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: bulletsBuffsBeyondImage,
    },
    {
      key: "ChangingChurch",
      label: "Changing Church",
      delay: "21s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: changingChurchImage,
    },
    {
      key: "NecromancyInsuranceCompany",
      label: "Necromancy Insurance Company",
      delay: "24s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: necromancyInsuranceImage,
    },
    {
      key: "OPapiesOracleReadings",
      label: "O-Papies Oracle Readings",
      delay: "27s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: oPapiesOracleReadingsImage,
    },
    {
      key: "RobinsRopes",
      label: "Robin's Ropes",
      delay: "30s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: robinsRopesImage,
    },
    {
      key: "RunestoneRelay",
      label: "Runestone Relay",
      delay: "33s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: runestoneRelayImage,
    },
    {
      key: "SilentOath",
      label: "Silent Oath",
      delay: "36s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: silentOathImage,
    },
    {
      key: "SupremeSmithy",
      label: "Supreme Smithy",
      delay: "39s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: supremeSmithyImage,
    },
    {
      key: "WillsWeapons",
      label: "Will's Weapons",
      delay: "42s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: willsWeaponsImage,
    },
    {
      key: "AuntiePattysPies",
      label: "Auntie Patty's Pies",
      delay: "45s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: auntPattiePieImage,
    },
    {
      key: "ComedyGold",
      label: "Comedy Gold",
      delay: "51s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: comedyGoldImage,
    },
    {
      key: "DungeonCrawlerGuild",
      label: "Dungeon Crawler Guild",
      delay: "54s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: dungeonCrawlerGuildImage,
    },
    {
      key: "FindAFriend",
      label: "Find a Friend",
      delay: "57s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: findAFriendImage,
    },
    {
      key: "NavigationGuild",
      label: "Navigation Guild",
      delay: "60s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: navigationGuildImage,
    },
    {
      key: "PearlsPotions",
      label: "Pearl's Potions",
      delay: "63s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: pearlsPotionsImage,
    },
    {
      key: "ProvisionsParadise",
      label: "Provision's Paradise",
      delay: "66s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: provisionsParadiseImage,
    },
    {
      key: "PiggyBank",
      label: "The Piggy Bank, no hammers inside.",
      delay: "69s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: piggyBankImage,
    },
    {
      key: "YeOldDonkey",
      label: "Ye Old Donkey",
      delay: "72s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: yeOldDonkeyImage,
    },
    {
      key: "HugInfo",
      label: "Hug Cartel",
      delay: "75s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: hugImage,
    },
    {
      key: "IconicDragonic",
      label: "Iconic Dragonic",
      delay: "73.5s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: iconicDragonicImage,
    },
    {
      key: "JellBell",
      label: "Jell Bell",
      delay: "46.25s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: jellBellImage,
    },
    {
      key: "MonsterMaker",
      label: "Make a Monster",
      delay: "46.5s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: monsterImage,
    },
    {
      key: "PawsClawsMaws",
      label: "Paws, Claws, & Maws",
      delay: "46.75s",
      backgroundColor: "rgba(250, 204, 21, 0.95)",
      imageSrc: pawsClawsMawsImage,
    },
    {
      key: "MichaelsMount",
      label: "Michael's Mount",
      delay: "46.75s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: mountsImage,
    },
    {
      key: "ValhallaMart",
      label: "Valhalla Mart",
      delay: "47s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: valhallaMartImage,
    },
    {
      key: "BlossomHotel",
      label: "Blossom Hotel",
      delay: "47.25s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: blossomHotelImage,
    },
    {
      key: "EvansEnchantingEmporium",
      label: "Evan's Enchanting Emporium",
      delay: "47.5s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: evansEnchantingEmporiumImage,
    },
    {
      key: "FairiesOfFlora",
      label: "Fairies of Flora",
      delay: "47.75s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: floralImage,
    },
    {
      key: "GolemWorkshop",
      label: "Golem Workshop",
      delay: "48s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: golemWorkshopImage,
    },
    {
      key: "JazzPortablePotions",
      label: "Jazz's Portable Potions",
      delay: "48.25s",
      backgroundColor: "rgba(220, 38, 38, 0.9)",
      color: "#e0f2fe",
      imageSrc: jazzPortablePotionsImage,
    },
    {
      key: "JewelryGuild",
      label: "Jewelry Guild",
      delay: "48.5s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: jewelryGuildImage,
    },
    {
      key: "LabyrinthineLibrary",
      label: "Labyrinthine Library",
      delay: "48.75s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: labyrinthineLibraryImage,
    },
    {
      key: "NME",
      label: "N.M.E.",
      delay: "49s",
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      color: "#0a2f14",
      imageSrc: nmeImage,
    },
    {
      key: "SleuthUniversity",
      label: "Sleuth University",
      delay: "49.25s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: sleuthUniversityImage,
    },
    {
      key: "FizzyTales",
      label: "Fizzy Tales",
      delay: "49.5s",
      backgroundColor: "rgba(37, 99, 235, 0.95)",
      color: "#e2e8f0",
      imageSrc: FizzyTale,
    },
    {
      key: "goblins",
      label: "Goblin Market",
      delay: "0s",
      backgroundColor: "rgba(250, 204, 21, 0.9)",
      imageSrc: goblinmarket,
    },
    {
      key: "YeOldHomeDepot",
      label: "Ye old HomeDepot",
      delay: "49.75s",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      imageSrc: yeOldHomeDepotImage,
    },
    readySetBetMapButton,
  ];

  const sortedEveryShopButtons = sortShopButtons(everyShopButtons);

  const currentView = (() => {
    switch (navigatedTo) {
    case "goblins":

      return <Goblins onBack={handleBack} />;
    case "Auction":
      return <Auctions onBack={handleBack} />;
    case "Black":
      return <Blacks onBack={handleBack} />;
    case "BookBombs":
      return <BookBombs onBack={handleBack} />;
    case "AuntiePattysPies":
      return <AuntiePattysPies onBack={handleBack} />;
    case "IconicDragonic":
      return <IconicDragonic onBack={handleBack} />;
    case "JellBell":
      return <JellBell onBack={handleBack} />;
    case "MonsterMaker":
      return <MonsterMaker onBack={handleBack} />;
    case "PawsClawsMaws":
      return <PawsClawsMaws onBack={handleBack} />;
    case "MichaelsMount":
      return <MichaelsMount onBack={handleBack} />;
    case "ValhallaMart":
      return <ValhallaMart onBack={handleBack} />;
    case "BlossomHotel":
      return <BlossomHotel onBack={handleBack} />;
    case "SleuthUniversity":
      return <SleuthUniversity onBack={handleBack} />;
    case "EvansEnchantingEmporium":
      return <EvansEnchantingEmporium onBack={handleBack} />;
    case "FairiesOfFlora":
      return <FairiesOfFlora onBack={handleBack} />;
    case "GolemWorkshop":
      return <GolemWorkshop onBack={handleBack} />;
    case "LabyrinthineLibrary":
      return <LabyrinthineLibrary onBack={handleBack} />;
    case "NME":
      return <NME onBack={handleBack} />;
    case "FizzyTales":
      return <FizzyTales onBack={handleBack} />;
    case "YeOldHomeDepot":
      return <YeOldHomeDepot onBack={handleBack} />;
    case "ReadySetBet":
      return <ReadySetBet onBack={handleBack} />;
    case "PiggyBank":
      return <PiggyBank onBack={handleBack} />;
    case "NavigationGuild":
      return <NavigationGuild onBack={handleBack} />;
    case "PearlsPotions":
      return <PearlsPotions onBack={handleBack} />;
    case "FindAFriend":
      return <FindAFriend onBack={handleBack} />;
    case "ComedyGold":
      return <ComedyGold onBack={handleBack} />;
    case "DungeonCrawlerGuild":
      return <DungeonCrawlerGuild onBack={handleBack} />;
    case "BulletsBuffsBeyond":
      return <BulletsBuffsBeyond onBack={handleBack} />;
    case "ApplegarthGuild":
      return <ApplegarthGuild onBack={handleBack} />;
    case "ArchivesGuild":
      return <ArchivesGuild onBack={handleBack} />;
    case "ChangingChurch":
      return <ChangingChurch onBack={handleBack} />;
    case "NecromancyInsuranceCompany":
      return <NecromancyInsuranceCompany onBack={handleBack} />;
    case "OPapiesOracleReadings":
      return <OPapiesOracleReadings onBack={handleBack} />;
    case "RobinsRopes":
      return <RobinsRopes onBack={handleBack} />;
    case "RunestoneRelay":
      return <RunestoneRelay onBack={handleBack} />;
    case "SilentOath":
      return <SilentOath onBack={handleBack} />;
    case "SupremeSmithy":
      return <SupremeSmithy onBack={handleBack} />;
    case "Calidris":
      return (
        <CalidrisFisk
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "BallisticBellows":
      return (
        <BallisticBellowsCaleb
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "MerricksMeadow":
      return (
        <MerricksMeadowHoward
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "AnalepticHolt":
      return (
        <AnalepticHoltTeag
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "OrbitingCity":
      return (
        <OrbitingCity
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "Withhold":
      return (
        <WithholdParker
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "StrenuousPortal":
      return (
        <StrenuousPortal
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "SeymoursDrift":
      return (
        <SeymoursDriftMelanie
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "Hebron":
      return (
        <HebronJoshua
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "ByfordDolphin":
      return (
        <ByfordDolphinRobertson
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "Meander":
      return (
        <MeanderMichael
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "JellyCity":
      return (
        <JellyCity
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "ButtingRams":
      return (
        <ButtingRams
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "BigHome":
      return (
        <BigHome
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "Graveborn":
      return (
        <Graveborn
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "WillsWeapons":
      return <WillsWeapons onBack={handleBack} />;
    case "ProvisionsParadise":
      return <ProvisionsParadise onBack={handleBack} />;
    case "YeOldDonkey":
      return <YeOldDonkey onBack={handleBack} />;
    case "HugInfo":
      return <HugInfo onBack={handleBack} />;
    case "JazzPortablePotions":
      return <JazzPortablePotions onBack={handleBack} />;
    case "JewelryGuild":
      return <JewelryGuild onBack={handleBack} />;
    case "Sandbox":
      return (
        <SandboxMenu
          onBack={handleBack}
          onNavigate={handleNavigate}
        />
      );
    case "EveryShop":
      return (
        <EveryShopMenu
          onBack={handleBack}
          onNavigate={handleNavigate}
          buttons={sortedEveryShopButtons}
        />
      );
    case "BlankWorldTemplate":
      return (
        <BlankWorldTemplate
          onBack={handleBack}
          onNavigate={handleNavigate}
          allShops={sortedEveryShopButtons}
          onSettlementChange={(settlementType) =>
            setSelectedSettlementType(settlementType)
          }
        />
      );
    default:
      return (
        <div style={styles.wrapper}>
          <h1 style={styles.title}>Which world would you like to go to?</h1>
          <div style={styles.buttonContainer}>
            {hubDestinations.map((destination) => (
              <FloatingButton
                key={destination.routeKey}
                label={destination.name}
                secondaryLabel={destination.townType}
                onClick={() => handleNavigate(destination.routeKey, { settlementType: destination.townType })}
                delay={destination.delay}
                backgroundColor={destination.backgroundColor}
                color={destination.color}
                imageSrc={destination.imageSrc}
              />
            ))}
          </div>
        </div>
      );
    }
  })();

  return (
    <SettlementProvider settlementType={selectedSettlementType}>
      {currentView}
    </SettlementProvider>
  );
}

function SandboxMenu({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string, options?: { settlementType?: SettlementType }) => void;
}) {
  const orderedSandboxTowns = sandboxTowns;
  const handleTownClick = (town: SandboxTown) => {
    onNavigate(town.routeKey, { settlementType: town.settlementType });
  };

  return (
    <div style={styles.wrapper}>
      <button type="button" onClick={onBack} style={styles.backButton}>
        ← Back to main menu
      </button>
      <div style={styles.sandboxContent}>
        <div style={styles.sandboxHero}>
          <p style={styles.sandboxEyebrow}>Welcome to</p>
          <h1 style={{ ...styles.title, textAlign: "center" }}>Sandbox</h1>
          <p style={styles.subtitle}>
            Choose a destination below to preview the settlement, then enter it.
          </p>
        </div>

        <img
          src={sandboxWorldMapImage}
          alt="Sandbox world map"
          style={styles.sandboxFeatureImage}
        />

        <div style={styles.sandboxButtonGrid}>
          {orderedSandboxTowns.map((town) => (
            <FloatingButton
              key={town.key}
              label={town.name}
              secondaryLabel={town.settlementType}
              description={undefined}
              imageSrc={town.image}
              backgroundColor="rgba(30, 41, 59, 0.88)"
              color="#e2e8f0"
              delay="0s"
              onClick={() => handleTownClick(town)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EveryShopMenu({
  onBack,
  onNavigate,
  buttons,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
  buttons: ShopButton[];
}) {
  return (
    <div style={styles.wrapper}>
      <button type="button" onClick={onBack} style={styles.backButton}>
        ← Back to main menu
      </button>
      <h1 style={styles.title}>Every Shop</h1>
      <p style={styles.subtitle}>
        White shops are player survival, red shops are magic-based, yellow shops are followers
        & companions, green shops are trade & logistics, and blue shops are culture, knowledge,
        & leisure. 
        Fun fact: The minimum monthly income for a Commoner is 40gp, but the typical monthly wages are as followed
        Commoners 50gp, Knights/Locol Heros 250gp, Lord/Lady 1,000gp, Baron/Baroness 2,500gp, Count/Countess 5,000gp, Prince/Princess 10,000gp, Duke/Duchess 20,000gp, and King/Queen 50,000gp!
      </p> 
      <div style={styles.everyShopGrid}>
        {buttons.map((button) => (
          <FloatingButton
            key={button.key}
            label={button.label}
            onClick={() => onNavigate(button.key)}
            delay={button.delay}
            backgroundColor={button.backgroundColor}
            color={button.color}
            imageSrc={button.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingButton({
  label,
  secondaryLabel,
  onClick,
  delay,
  backgroundColor,
  color = "#000",
  imageSrc,
  description,
}: {
  label: string;
  secondaryLabel?: SettlementType;
  onClick: () => void;
  delay: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
  description?: string;
}) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  return (
    <button
      type="button"
      aria-label={secondaryLabel ? `${label}, ${secondaryLabel}` : label}
      onClick={onClick}
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
      onFocus={() => setIsHighlighted(true)}
      onBlur={() => setIsHighlighted(false)}
      style={{
        ...styles.button,
        animationDelay: delay,
        backgroundColor,
        color,
        transform: isHighlighted ? "translateY(-4px) scale(1.02)" : "translateY(0)",
        boxShadow: isHighlighted
          ? "0 10px 18px rgba(0, 0, 0, 0.45)"
          : styles.button.boxShadow,
        outline: isHighlighted
          ? "2px solid rgba(255, 255, 255, 0.75)"
          : "2px solid transparent",
        outlineOffset: "4px",
      }}
    >
      {imageSrc ? (
        <div style={styles.buttonContent}>
          <img src={imageSrc} alt={`${label} logo`} style={styles.buttonImage} />
          <span style={styles.buttonLabel}>{label}</span>
          {secondaryLabel ? (
            <span style={styles.buttonSecondaryLabel}>{secondaryLabel}</span>
          ) : null}
          {description ? <p style={styles.buttonDescription}>{description}</p> : null}
        </div>
      ) : (
        <span style={styles.buttonContent}>
          <span style={styles.buttonLabel}>{label}</span>
          {secondaryLabel ? (
            <span style={styles.buttonSecondaryLabel}>{secondaryLabel}</span>
          ) : null}
        </span>
      )}
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    backgroundImage: `url("${loadingScreenBackground}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ffffffff",
    margin: "0 0 1rem",
    textAlign: "center",
    width: "100%",
  },
  subtitle: {
    margin: "0 auto 2rem",
    maxWidth: "760px",
    fontSize: "1.05rem",
    lineHeight: 1.5,
    textAlign: "center",
    color: "#f8fafc",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.25rem",
    padding: "2rem 1rem 3rem",
    width: "auto",
  },
  button: {
    fontSize: "1.5rem",
    padding: "1.25rem 1.5rem",
    borderRadius: "18px",
    border: "2px solid #ffffffff",
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    fontFamily: "'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "0.85rem",
    width: "100%",
    maxWidth: "100%",
  },
  backButton: {
    position: "fixed",
    top: "1.5rem",
    left: "1.5rem",
    zIndex: 1000,
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "14px",
    border: "2px solid #ffffffff",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    fontFamily: "'Times New Roman', serif",
  },
  buttonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
  },
  buttonImage: {
    width: "160px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "14px",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "4 4px 8px rgba(0,0,0,0.35)",
  },
  buttonLabel: {
    display: "block",
    fontWeight: 700,
    textAlign: "center",
  },
  buttonSecondaryLabel: {
    display: "block",
    fontSize: "0.75em",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.04em",
    opacity: 0.78,
    textAlign: "center",
  },
  buttonDescription: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.45,
    textAlign: "center",
    maxWidth: "720px",
  },
  sandboxContent: {
    marginTop: "4.5rem",
    width: "min(1100px, 95vw)",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    paddingBottom: "3rem",
  },
  sandboxHero: {
    backgroundColor: "rgba(15, 23, 42, 0.82)",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: "20px",
    padding: "1.75rem",
    textAlign: "center",
  },
  sandboxEyebrow: {
    margin: "0 0 0.35rem",
    textTransform: "uppercase",
    letterSpacing: "0.18rem",
    color: "#cbd5e1",
  },
  sandboxFeatureImage: {
    width: "100%",
    maxWidth: "900px",
    alignSelf: "center",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 14px 30px rgba(0, 0, 0, 0.35)",
  },
  sandboxButtonGrid: {
    marginTop: "1.25rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
    width: "100%",
  },
  everyShopGrid: {
    marginTop: "1.25rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
    width: "min(1100px, 95vw)",
    paddingBottom: "3rem",
  },
};
