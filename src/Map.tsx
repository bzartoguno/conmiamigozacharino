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
import bookBombPng from "./Book Bomb.png";
import goblinmarket from "./GoblinMarket.png"
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import applegarthImage from "./Applegarth.webp";
import archivesGuildImage from "./Archives Guild.png";
import auntPattiePieImage from "./Aunt Pattie Pie.png";
import iconicDragonicImage from "./Iconic Dragonic.png";
import navigationGuildImage from "./NavigationGuild-ezgif.com-webp-to-png-converter.png";
import pearlsPotionsImage from "./Pearls Potions.png";
import findAFriendImage from "./Find a Friend.png";
import comedyGoldImage from "./Comedy Gold.png";
import dungeonCrawlerGuildImage from "./Dungeon Crawler's Guild.png";
import { ChangingChurch } from "./ChangingChurch";
import { NecromancyInsuranceCompany } from "./NecromancyInsuranceCompany";
import changingChurchImage from "./Changing Church.png";
import necromancyInsuranceImage from "./NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import { OPapiesOracleReadings } from "./OPapiesOracleReadings";
import { RobinsRopes } from "./RobinsRopes";
import { RunestoneRelay } from "./RunestoneRelay";
import { SilentOath } from "./SilentOath";
import { SupremeSmithy } from "./SupremeSmithy";
import { CalidrisFisk } from "./CalidrisFisk";
import { WithholdParker } from "./WithholdParker";
import { BallisticBellowsCaleb } from "./BallisticBellowsCaleb";
import { MeanderMichael } from "./MeanderMichael";
import { MerricksMeadowHoward } from "./MerricksMeadowHoward";
import { WillsWeapons } from "./WillsWeapons";
import { ButtingRams } from "./ButtingRams";
import { YeOldDonkey } from "./YeOldDonkey";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import robinsRopesImage from "./Robins Ropes.png";
import runestoneRelayImage from "./Runestone Relay.png";
import silentOathImage from "./Silent Oath.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import piggyBankImage from "./Piggy Bank.png";
import yeOldDonkeyImage from "./Ye Old Donkey.png";
import provisionsParadiseImage from "./Provisions Paradise.png";
import { ProvisionsParadise } from "./ProvisionsParadise";
import { useEffect, useState } from "react";
import { HugInfo } from "./HugInfo";
import hugImage from "./Hug.webp";
import jellBellImage from "./Jell.webp";
import { MonsterMaker } from "./MonsterMaker";
import monsterImage from "./Monster.webp";
import { PawsClawsMaws } from "./PawsClawsMaws";
import pawsClawsMawsImage from "./Paws, Claws, & Maws.png";
import { MichaelsMount } from "./MichaelsMount";
import mountsImage from "./Mounts.webp";
import { ValhallaMart } from "./ValhallaMart";
import valhallaMartImage from "./Valhalla Mart.png";
import { BlossomHotel } from "./BlossomHotel";
import blossomHotelImage from "./Blossom Hotel.png";
import { SleuthUniversity } from "./SleuthUniversity";
import sleuthUniversityImage from "./Sleuth.webp";
import { EvansEnchantingEmporium } from "./EvansEnchantingEmporium";
import evansEnchantingEmporiumImage from "./Evan's Enchanting Emporium.png";
import { FairiesOfFlora } from "./FairiesOfFlora";
import floralImage from "./Floral.webp";
import loadingScreenBackground from "./loading-screen.gif";
import { GolemWorkshop } from "./GolemWorkshop";
import golemWorkshopImage from "./Golem Work Shop.png";
import { JazzPortablePotions } from "./JazzPortablePotions";
import jazzPortablePotionsImage from "./Jazz's Portable Potions.png";
import { JewelryGuild } from "./JewelryGuild";
import jewelryGuildImage from "./Jewelry Guild.png";
import { LabyrinthineLibrary } from "./LabyrinthineLibrary";
import labyrinthineLibraryImage from "./Labyrinthine Labrary.png";
import { NME } from "./NME";
import nmeImage from "./N.M.E.png";
import { FizzyTales } from "./FizzyTales";
import { YeOldHomeDepot } from "./YeOldHomeDepot";
import yeOldHomeDepotImage from "./Ye Old Home Depot.webp";
import sandboxWorldMapImage from "./SandboxWorldMap.webp";
import sandboxAnalepticHoltImage from "./SandboxAnalepticHolt.webp";
import sandboxBallisticBellowsImage from "./SandboxBallisticBellows.webp";
import sandboxBigHomeImage from "./SandboxBigHome.webp";
import sandboxButtingRamsImage from "./SandboxButtingRams.webp";
import sandboxByfordDolphinImage from "./SandboxByfordDolphin.webp";
import sandboxCalidrisImage from "./SandboxCalidris.webp";
import sandboxGraveBornImage from "./SandboxGraveBorn.webp";
import sandboxHebronImage from "./SandboxHebron.webp";
import sandboxJellyCityImage from "./SandboxJellyCity.webp";
import sandboxMeanderImage from "./SandboxMeander.webp";
import sandboxMerricksGroveImage from "./SandboxMerricksGrove.webp";
import sandboxOrbitingCityImage from "./SandboxOrbitingCity.webp";
import sandboxPopNFaithImage from "./SandboxPop-nFaith.webp";
import sandboxSeymoursDriftImage from "./SandboxSeymoursDrift.webp";
import sandboxWytheholdeImage from "./SandboxWytheholde.webp";

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
  name: string;
  description: string;
  image: string;
};

const sandboxTowns: SandboxTown[] = [
  {
    key: "withhold",
    name: "Withhold (Parker)",
    image: sandboxWytheholdeImage,
    description:
      "Nestled between warm rolling hills and jagged, freezing mountains, Withhold grows famous home-grown food but struggles for medicine once winter comes. As they live in Wandering Titan territory, nearly everyone knows how to flee into the tight valley caves when danger looms, preserving the town's dwindling stories.",
  },
  {
    key: "butting-rams",
    name: "Butting Rams",
    image: sandboxButtingRamsImage,
    description:
      "Barbarians here love fighting, feasting, and boasting about both. Their town is literally split between two enormous rams that butt heads, catapulting residents back and forth—thankfully the rams are fluffy enough to make the landings survivable before the traditional 15-minute free-for-all.",
  },
  {
    key: "meander",
    name: "Meander (Michael)",
    image: sandboxMeanderImage,
    description:
      "A cowboy's dream that never settles, Meander roams Wandering Titan territory after draining every Magitek Oil spot. Constant desert travel keeps crops from thriving, so the townsfolk trade for food while clinging to a strong moral compass they defend fiercely.",
  },
  {
    key: "calidris",
    name: "Calidris (Fisk)",
    image: sandboxCalidrisImage,
    description:
      "Created as an artisans' paradise with no creative limits, Calidris thrived—until every living resident vanished overnight. Only the golems and robots remain, tirelessly working while ignoring their missing masters.",
  },
  {
    key: "merricks-meadow",
    name: "Merrick's Meadow (Howard)",
    image: sandboxMerricksGroveImage,
    description:
      "This humble village boomed after discovering rare herbs. Newcomers flock to Merrick's Meadow for its newfound fame, while longtime residents grumble about the crowds disturbing their once-tranquil home.",
  },
  {
    key: "ballistic-bellows",
    name: "Ballistic Bellows (Caleb)",
    image: sandboxBallisticBellowsImage,
    description:
      "Punctual and industrious, every citizen can run a forge or clockwork device. Their advanced weapons self-destruct if reverse engineered, protecting the secrets behind their booming craft.",
  },
  {
    key: "byford-dolphin",
    name: "Byford Dolphin (Robertson)",
    image: sandboxByfordDolphinImage,
    description:
      "Wealth dictates status in Byford Dolphin. Legendary metals pulled from the sea fund the Clockwork King's construction projects, while the richest citizen holds the House of Blades contract—and the bill that comes with it.",
  },
  {
    key: "hebron",
    name: "Hebron (Joshua)",
    image: sandboxHebronImage,
    description:
      "After the Missing Millennium, Hebron secured a monopoly on Thunder Cores by salvaging and purchasing every relic they could find. Now it's a hub for minds devoted to unlocking the power behind these remnants.",
  },
  {
    key: "jelly-city",
    name: "Jelly City",
    image: sandboxJellyCityImage,
    description:
      "Built vertically inside a Wandering Titan jellyfish, this flexible city produces medicine that keeps the Disciples of Mother battle-ready. Its secrets are hard to see, but unforgettable once witnessed.",
  },
  {
    key: "pop-n-faith",
    name: "Pop-n Faith (Eli)",
    image: sandboxPopNFaithImage,
    description:
      "Deities literally walk among the people here, balancing each other so none gains dominance. Their collective aura keeps their Wandering Titan host cowering, while mortals navigate divine politics daily.",
  },
  {
    key: "analeptic-holt",
    name: "Analeptic Holt (Teag)",
    image: sandboxAnalepticHoltImage,
    description:
      "Hidden beneath an ancient jungle canopy, Hadozee gliders live among massive roots and high branches. They cherish harmony with their environment but stay guarded with outsiders to protect their traditions.",
  },
  {
    key: "seymours-drift",
    name: "Seymour's Drift (Melanie)",
    image: sandboxSeymoursDriftImage,
    description:
      "A sprawling city on a giant drifting lily pad, Seymour's Drift follows the tides while serving its enigmatic leader, Audrey the Second. Residents bond over devotion, firearms, and an unyielding love of meat.",
  },
  {
    key: "graveborn",
    name: "Graveborn",
    image: sandboxGraveBornImage,
    description:
      "A sanctuary for the undead, founded before the 75-year war so vampires, zombies, skeletons, and even dream visages could live free. Left alone, the undead eventually wander toward this vibrant necropolis.",
  },
  {
    key: "orbiting-city",
    name: "Orbiting City",
    image: sandboxOrbitingCityImage,
    description:
      "Humanity pushed the impossible to reality, building a city that sails the sky thanks to alliances and generosity toward the Clockwork King. Its flight marks a new era of exploration and diplomacy.",
  },
  {
    key: "big-home",
    name: "Big Home",
    image: sandboxBigHomeImage,
    description:
      "Orcs value family, honesty, and loyalty. After 'Mother' guided them to shun technology and guard the secrets of the Missing Millennium, their strength in numbers and conviction makes them formidable when provoked.",
  },
];

export function Map() {
  const [navigatedTo, setNavigatedTo] = useState<string>("");
  // cleaned version of the embedded data URI (defensive)
  const cleanedBookBomb = cleanDataUrl(bookBombDataUrl);
  // image that draws the literal base64/text onto a canvas (preferred)
  const bookBombImageFromText = useTextImage(bookBombDataUrl);

  switch (navigatedTo) {
    case "goblins":

      return <Goblins onBack={() => setNavigatedTo("")} />;
    case "Auction":
      return <Auctions onBack={() => setNavigatedTo("")} />;
    case "Black":
      return <Blacks onBack={() => setNavigatedTo("")} />;
    case "BookBombs":
      return <BookBombs onBack={() => setNavigatedTo("")} />;
    case "AuntiePattysPies":
      return <AuntiePattysPies onBack={() => setNavigatedTo("")} />;
    case "IconicDragonic":
      return <IconicDragonic onBack={() => setNavigatedTo("")} />;
    case "JellBell":
      return <JellBell onBack={() => setNavigatedTo("")} />;
    case "MonsterMaker":
      return <MonsterMaker onBack={() => setNavigatedTo("")} />;
    case "PawsClawsMaws":
      return <PawsClawsMaws onBack={() => setNavigatedTo("")} />;
    case "MichaelsMount":
      return <MichaelsMount onBack={() => setNavigatedTo("")} />;
    case "ValhallaMart":
      return <ValhallaMart onBack={() => setNavigatedTo("")} />;
    case "BlossomHotel":
      return <BlossomHotel onBack={() => setNavigatedTo("")} />;
    case "SleuthUniversity":
      return <SleuthUniversity onBack={() => setNavigatedTo("")} />;
    case "EvansEnchantingEmporium":
      return <EvansEnchantingEmporium onBack={() => setNavigatedTo("")} />;
    case "FairiesOfFlora":
      return <FairiesOfFlora onBack={() => setNavigatedTo("")} />;
    case "GolemWorkshop":
      return <GolemWorkshop onBack={() => setNavigatedTo("")} />;
    case "LabyrinthineLibrary":
      return <LabyrinthineLibrary onBack={() => setNavigatedTo("")} />;
    case "NME":
      return <NME onBack={() => setNavigatedTo("")} />;
    case "FizzyTales":
      return <FizzyTales onBack={() => setNavigatedTo("")} />;
    case "YeOldHomeDepot":
      return <YeOldHomeDepot onBack={() => setNavigatedTo("")} />;
    case "PiggyBank":
      return <PiggyBank onBack={() => setNavigatedTo("")} />;
    case "NavigationGuild":
      return <NavigationGuild onBack={() => setNavigatedTo("")} />;
    case "PearlsPotions":
      return <PearlsPotions onBack={() => setNavigatedTo("")} />;
    case "FindAFriend":
      return <FindAFriend onBack={() => setNavigatedTo("")} />;
    case "ComedyGold":
      return <ComedyGold onBack={() => setNavigatedTo("")} />;
    case "DungeonCrawlerGuild":
      return <DungeonCrawlerGuild onBack={() => setNavigatedTo("")} />;
    case "BulletsBuffsBeyond":
      return <BulletsBuffsBeyond onBack={() => setNavigatedTo("")} />;
    case "ApplegarthGuild":
      return <ApplegarthGuild onBack={() => setNavigatedTo("")} />;
    case "ArchivesGuild":
      return <ArchivesGuild onBack={() => setNavigatedTo("")} />;
    case "ChangingChurch":
      return <ChangingChurch onBack={() => setNavigatedTo("")} />;
    case "NecromancyInsuranceCompany":
      return <NecromancyInsuranceCompany onBack={() => setNavigatedTo("")} />;
    case "OPapiesOracleReadings":
      return <OPapiesOracleReadings onBack={() => setNavigatedTo("")} />;
    case "RobinsRopes":
      return <RobinsRopes onBack={() => setNavigatedTo("")} />;
    case "RunestoneRelay":
      return <RunestoneRelay onBack={() => setNavigatedTo("")} />;
    case "SilentOath":
      return <SilentOath onBack={() => setNavigatedTo("")} />;
    case "SupremeSmithy":
      return <SupremeSmithy onBack={() => setNavigatedTo("")} />;
    case "Calidris":
      return (
        <CalidrisFisk
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "BallisticBellows":
      return (
        <BallisticBellowsCaleb
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "MerricksMeadow":
      return (
        <MerricksMeadowHoward
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "Withhold":
      return (
        <WithholdParker
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "Meander":
      return (
        <MeanderMichael
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "ButtingRams":
      return (
        <ButtingRams
          onBack={() => setNavigatedTo("Sandbox")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    case "WillsWeapons":
      return <WillsWeapons onBack={() => setNavigatedTo("")} />;
    case "ProvisionsParadise":
      return <ProvisionsParadise onBack={() => setNavigatedTo("")} />;
    case "YeOldDonkey":
      return <YeOldDonkey onBack={() => setNavigatedTo("")} />;
    case "HugInfo":
      return <HugInfo onBack={() => setNavigatedTo("")} />;
    case "JazzPortablePotions":
      return <JazzPortablePotions onBack={() => setNavigatedTo("")} />;
    case "JewelryGuild":
      return <JewelryGuild onBack={() => setNavigatedTo("")} />;
    case "Sandbox":
      return (
        <SandboxMenu
          onBack={() => setNavigatedTo("")}
          onNavigate={(key) => setNavigatedTo(key)}
        />
      );
    default:
      return (
        <div style={styles.wrapper}>
          <h1 style={styles.title}>Which world would you like to go to?</h1>
          <div style={styles.buttonContainer}>
            <FloatingButton
              label="Sandbox"
              onClick={() => setNavigatedTo("Sandbox")}
              delay="1.5s"
              backgroundColor="rgba(15, 23, 42, 0.85)"
              color="#e2e8f0"
              imageSrc={sandboxWorldMapImage}
            />
            <FloatingButton
              label="Goblin Market"
              onClick={() => setNavigatedTo("goblins")}
              delay="0s"
              backgroundColor="rgba(37, 99, 235, 0.95)"
              imageSrc={goblinmarket}
            />
            <FloatingButton
              label="Auction House"
              onClick={() => setNavigatedTo("Auction")}
              delay="3s"
              backgroundColor="rgba(138, 253, 244, 0.712)"
            />
            <FloatingButton
              label="Black Market"
              onClick={() => setNavigatedTo("Black")}
              delay="6s"
              backgroundColor="rgba(0, 0, 0, 0.712)"
              color="white"
            />
            <FloatingButton
              label="Applegarth Guild"
              onClick={() => setNavigatedTo("ApplegarthGuild")}
              delay="9s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={applegarthImage}
            />
            <FloatingButton
              label="Archives Guild"
              onClick={() => setNavigatedTo("ArchivesGuild")}
              delay="12s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={archivesGuildImage}
            />
            <FloatingButton
              label="Book Bombs"
              onClick={() => setNavigatedTo("BookBombs")}
              delay="15s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              // Use the uploaded PNG file as the primary image, fall back to
              // the cleaned embedded data URI, then the canvas-rendered text.
              imageSrc={bookBombPng ?? cleanedBookBomb ?? bookBombImageFromText}
              // imageSrc={bookBombsLogo}
            />
            <FloatingButton
              label="Bullets, Buffs, & Beyond"
              onClick={() => setNavigatedTo("BulletsBuffsBeyond")}
              delay="18s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={bulletsBuffsBeyondImage}
            />
            <FloatingButton
              label="Changing Church"
              onClick={() => setNavigatedTo("ChangingChurch")}
              delay="21s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={changingChurchImage}
            />
            <FloatingButton
              label="Necromancy Insurance Company"
              onClick={() => setNavigatedTo("NecromancyInsuranceCompany")}
              delay="24s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={necromancyInsuranceImage}
            />
            <FloatingButton
              label="O-Papies Oracle Readings"
              onClick={() => setNavigatedTo("OPapiesOracleReadings")}
              delay="27s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={oPapiesOracleReadingsImage}
            />
            <FloatingButton
              label="Robin's Ropes"
              onClick={() => setNavigatedTo("RobinsRopes")}
              delay="30s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={robinsRopesImage}
            />
            <FloatingButton
              label="Runestone Relay"
              onClick={() => setNavigatedTo("RunestoneRelay")}
              delay="33s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={runestoneRelayImage}
            />
            <FloatingButton
              label="Silent Oath"
              onClick={() => setNavigatedTo("SilentOath")}
              delay="36s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={silentOathImage}
            />
            <FloatingButton
              label="Supreme Smithy"
              onClick={() => setNavigatedTo("SupremeSmithy")}
              delay="39s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={supremeSmithyImage}
            />
            <FloatingButton
              label="Will's Weapons"
              onClick={() => setNavigatedTo("WillsWeapons")}
              delay="42s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={willsWeaponsImage}
            />
            <FloatingButton
              label="Auntie Patty's Pies"
              onClick={() => setNavigatedTo("AuntiePattysPies")}
              delay="45s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={auntPattiePieImage}
            />
            <FloatingButton
              label="Comedy Gold"
              onClick={() => setNavigatedTo("ComedyGold")}
              delay="51s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={comedyGoldImage}
             />
             <FloatingButton
              label="Dungeon Crawler Guild"
              onClick={() => setNavigatedTo("DungeonCrawlerGuild")}
              delay="54s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={dungeonCrawlerGuildImage}
            />
            <FloatingButton
              label="Find a Friend"
              onClick={() => setNavigatedTo("FindAFriend")}
              delay="57s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={findAFriendImage}
            />
            <FloatingButton
              label="Navigation Guild"
              onClick={() => setNavigatedTo("NavigationGuild")}
              delay="60s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={navigationGuildImage}
              />
            <FloatingButton
              label="Pearl's Potions"
              onClick={() => setNavigatedTo("PearlsPotions")}
              delay="63s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={pearlsPotionsImage}
            />
            <FloatingButton
              label="Provision's Paradise"
              onClick={() => setNavigatedTo("ProvisionsParadise")}
              delay="66s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={provisionsParadiseImage}
            />
            <FloatingButton
              label="The Piggy Bank, no hammers inside."
              onClick={() => setNavigatedTo("PiggyBank")}
              delay="69s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={piggyBankImage}
            />
            <FloatingButton
              label="Ye Old Donkey"
              onClick={() => setNavigatedTo("YeOldDonkey")}
              delay="72s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={yeOldDonkeyImage}
            />            
            <FloatingButton
              label="Hug Cartel"
              onClick={() => setNavigatedTo("HugInfo")}
              delay="75s"
              backgroundColor="rgba(250, 204, 21, 0.9)"
              imageSrc={hugImage}
            />  
            <FloatingButton
              label="Iconic Dragonic"
              onClick={() => setNavigatedTo("IconicDragonic")}
              delay="73.5s"
              backgroundColor="rgba(250, 204, 21, 0.95)"
              imageSrc={iconicDragonicImage}
            />          
            <FloatingButton
              label="Jell Bell"
              onClick={() => setNavigatedTo("JellBell")}
              delay="46.25s"
              backgroundColor="rgba(250, 204, 21, 0.9)"
              imageSrc={jellBellImage}
            />
            <FloatingButton
              label="Make a Monster"
              onClick={() => setNavigatedTo("MonsterMaker")}
              delay="46.5s"
              backgroundColor="rgba(250, 204, 21, 0.95)"
              imageSrc={monsterImage}
            />
            <FloatingButton
              label="Paws, Claws, & Maws"
              onClick={() => setNavigatedTo("PawsClawsMaws")}
              delay="46.75s"
              backgroundColor="rgba(250, 204, 21, 0.95)"
              imageSrc={pawsClawsMawsImage}
             />
            <FloatingButton
              label="Michael's Mount"
              onClick={() => setNavigatedTo("MichaelsMount")}
              delay="46.75s"
              backgroundColor="rgba(250, 204, 21, 0.95)"
              imageSrc={mountsImage}
            />
            <FloatingButton
              label="Valhalla Mart"
              onClick={() => setNavigatedTo("ValhallaMart")}
              delay="47s"
              backgroundColor="rgba(250, 204, 21, 0.95)"
              imageSrc={valhallaMartImage}
            />
            <FloatingButton
              label="Blossom Hotel"
              onClick={() => setNavigatedTo("BlossomHotel")}
              delay="47.25s"
              backgroundColor="rgba(34, 197, 94, 0.9)"
              color="#0a2f14"
              imageSrc={blossomHotelImage}
            />
            <FloatingButton
              label="Evan's Enchanting Emporium"
              onClick={() => setNavigatedTo("EvansEnchantingEmporium")}
              delay="47.5s"
              backgroundColor="rgba(34, 197, 94, 0.9)"
              color="#0a2f14"
              imageSrc={evansEnchantingEmporiumImage}
            />
            <FloatingButton
              label="Fairies of Flora"
              onClick={() => setNavigatedTo("FairiesOfFlora")}
              delay="47.75s"
              backgroundColor="rgba(34, 197, 94, 0.95)"
              color="#0a2f14"
              imageSrc={floralImage}
            />
            <FloatingButton
              label="Golem Workshop"
              onClick={() => setNavigatedTo("GolemWorkshop")}
              delay="48s"
              backgroundColor="rgba(34, 197, 94, 0.95)"
              color="#0a2f14"
              imageSrc={golemWorkshopImage}
            />
            <FloatingButton
              label="Jazz's Portable Potions"
              onClick={() => setNavigatedTo("JazzPortablePotions")}
              delay="48.25s"
              backgroundColor="rgba(34, 197, 94, 0.95)"
              color="#0a2f14"
              imageSrc={jazzPortablePotionsImage}
            />
            <FloatingButton
              label="Jewelry Guild"
              onClick={() => setNavigatedTo("JewelryGuild")}
              delay="48.5s"
              backgroundColor="rgba(34, 197, 94, 0.92)"
              color="#0b1f16"
              imageSrc={jewelryGuildImage}
            />
            <FloatingButton
              label="Labyrinthine Library"
              onClick={() => setNavigatedTo("LabyrinthineLibrary")}
              delay="48.75s"
              backgroundColor="rgba(34, 197, 94, 0.95)"
              color="#0a2f14"
              imageSrc={labyrinthineLibraryImage}
            />
            <FloatingButton
              label="N.M.E."
              onClick={() => setNavigatedTo("NME")}
              delay="49s"
              backgroundColor="rgba(22, 163, 74, 0.95)"
              color="#04260f"
              imageSrc={nmeImage}
            />
            <FloatingButton
              label="Sleuth University"
              onClick={() => setNavigatedTo("SleuthUniversity")}
              delay="49.25s"
              backgroundColor="rgba(34, 197, 94, 0.95)"
              color="#0a2f14"
              imageSrc={sleuthUniversityImage}
            />
            <FloatingButton
              label="Fizzy Tales"
              onClick={() => setNavigatedTo("FizzyTales")}
              delay="49.5s"
              backgroundColor="rgba(59, 130, 246, 0.92)"
              color="#e2e8f0"
              imageSrc={sleuthUniversityImage}
            />
            <FloatingButton
              label="Ye old HomeDepot"
              onClick={() => setNavigatedTo("YeOldHomeDepot")}
              delay="49.75s"
              backgroundColor="rgba(37, 99, 235, 0.95)"
              color="#e0f2fe"
              imageSrc={yeOldHomeDepotImage}
            />
          </div>
        </div>
      );
  }
}

function SandboxMenu({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  return (
    <div style={styles.wrapper}>
      <button type="button" onClick={onBack} style={styles.backButton}>
        ← Back to main menu
      </button>
      <div style={styles.sandboxIntro}>
        <img
          src={sandboxWorldMapImage}
          alt="Sandbox world map"
          style={styles.sandboxIntroImage}
        />
        <div style={styles.sandboxIntroText}>
          <h1 style={styles.title}>Sandbox Destinations</h1>
          <p>
            Explore every corner of the Sandbox realm. Each town is wrapped in its own
            legend—tap a destination to learn the vibe before you dive in.
          </p>
        </div>
      </div>
      <div style={styles.sandboxGrid}>
        {sandboxTowns.map((town) => (
            <FloatingButton
              key={town.key}
              label={town.name}
              description={town.description}
              imageSrc={town.image}
              backgroundColor="rgba(30, 41, 59, 0.88)"
              color="#e2e8f0"
              delay="0s"
              onClick={() =>
                town.key === "withhold"
                  ? onNavigate("Withhold")
                  : town.key === "ballistic-bellows"
                  ? onNavigate("BallisticBellows")
                  : town.key === "merricks-meadow"
                  ? onNavigate("MerricksMeadow")
                  : town.key === "calidris"
                  ? onNavigate("Calidris")
                  : town.key === "butting-rams"
                  ? onNavigate("ButtingRams")
                  : town.key === "meander"
                  ? onNavigate("Meander")
                  : onNavigate("Sandbox")
              }
            />
          ))}
        </div>
    </div>
  );
}

function FloatingButton({
  label,
  onClick,
  delay,
  backgroundColor,
  color = "#000",
  imageSrc,
  description,
}: {
  label: string;
  onClick: () => void;
  delay: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...styles.button,
        animationDelay: delay,
        backgroundColor,
        color,
      }}
    >
      {imageSrc ? (
        <div style={styles.buttonContent}>
          <img src={imageSrc} alt={`${label} logo`} style={styles.buttonImage} />
          <span style={styles.buttonLabel}>{label}</span>
          {description ? <p style={styles.buttonDescription}>{description}</p> : null}
        </div>
      ) : (
        label
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
    marginBottom: "1rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.25rem",
    padding: "2rem 1rem 3rem",
    width: "min(1100px, 95vw)",
  },
  button: {
    fontSize: "1.5rem",
    padding: "1.25rem 1.5rem",
    borderRadius: "18px",
    border: "2px solid #ffffffff",
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    animation: "float 12s ease-in-out infinite",
    transition: "transform 0.3s ease",
    fontFamily: "'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    boxShadow: "4 4px 10px rgba(0, 0, 0, 0.25)",
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
  buttonDescription: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.45,
    textAlign: "center",
    maxWidth: "720px",
  },
  sandboxIntro: {
    marginTop: "4.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: "1.5rem",
    borderRadius: "18px",
    width: "min(1100px, 95vw)",
  },
  sandboxIntroImage: {
    width: "220px",
    height: "auto",
    borderRadius: "16px",
    border: "2px solid rgba(255, 255, 255, 0.7)",
    boxShadow: "4px 6px 12px rgba(0,0,0,0.4)",
  },
  sandboxIntroText: {
    color: "#ffffff",
    lineHeight: 1.5,
  },
  sandboxGrid: {
    marginTop: "1.25rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
    width: "min(1100px, 95vw)",
    paddingBottom: "3rem",
  },
};

// Inject slow floating animation into global styles (guarded for SSR)
if (typeof document !== "undefined" && !document.getElementById("floating-keyframes")) {
  const styleSheet = document.createElement("style");
  styleSheet.id = "floating-keyframes";
  styleSheet.innerHTML = `
  @keyframes float {
    0% { transform: translate(0px, 0px); }
    25% { transform: translate(4px, -4px); }
    50% { transform: translate(0px, -8px); }
    75% { transform: translate(-4px, -4px); }
    100% { transform: translate(0px, 0px); }
  }`;
  document.head.appendChild(styleSheet);
}
