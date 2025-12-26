import { Goblins } from "./Goblins";
import { Auctions } from "./Auction";
import { Blacks } from "./Black";
import { BookBombs } from "./BookBombs";
import { BulletsBuffsBeyond } from "./BulletsBuffsBeyond";
import { ApplegarthGuild } from "./ApplegarthGuild";
import { ArchivesGuild } from "./ArchivesGuild";
import { bookBombDataUrl } from "./bookBombImage";
import { AuntiePattysPies } from "./AuntiePattysPies";
import { FindAFriend } from "./FindAFriend";
import { ComedyGold } from "./ComedyGold";
import { DungeonCrawlerGuild } from "./DungeonCrawlerGuild";
// Use the uploaded PNG asset (filename contains a space)
import bookBombPng from "./Book Bomb.png";
import bulletsBuffsBeyondImage from "./Bullets Buffs and Beyond.webp";
import applegarthImage from "./Applegarth.webp";
import archivesGuildImage from "./Archives Guild.png";
import auntPattiePieImage from "./Aunt Pattie Pie.png";
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
import { WillsWeapons } from "./WillsWeapons";
import oPapiesOracleReadingsImage from "./O Papies Oracle Readings.png";
import robinsRopesImage from "./Robins Ropes.png";
import runestoneRelayImage from "./Runestone Relay.png";
import silentOathImage from "./Silent Oath.png";
import supremeSmithyImage from "./Supreme Smithy.png";
import willsWeaponsImage from "./Wills Weapons.png";
import { useEffect, useState } from "react";

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
    case "WillsWeapons":
      return <WillsWeapons onBack={() => setNavigatedTo("")} />;
    default:
      return (
        <div style={styles.wrapper}>
          <h1 style={styles.title}>Where would you like to go?</h1>
          <div style={styles.buttonContainer}>
            <FloatingButton
              label="Goblin Stuff"
              onClick={() => setNavigatedTo("goblins")}
              delay="0s"
              backgroundColor="rgba(168, 255, 151, 0.712)"
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
              delay="9s"
              backgroundColor="rgba(0, 0, 0, 0.712)"
              color="white"
            />
            <FloatingButton
              label="Applegarth Guild"
              onClick={() => setNavigatedTo("ApplegarthGuild")}
              delay="15s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={applegarthImage}
            />
            <FloatingButton
              label="Archives Guild"
              onClick={() => setNavigatedTo("ArchivesGuild")}
              delay="18s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={archivesGuildImage}
            />
            <FloatingButton
              label="Book Bombs"
              onClick={() => setNavigatedTo("BookBombs")}
              delay="12s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              // Use the uploaded PNG file as the primary image, fall back to
              // the cleaned embedded data URI, then the canvas-rendered text.
              imageSrc={bookBombPng ?? cleanedBookBomb ?? bookBombImageFromText}
              // imageSrc={bookBombsLogo}
            />
            <FloatingButton
              label="Auntie Patty's Pies"
              onClick={() => setNavigatedTo("AuntiePattysPies")}
              delay="13s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={auntPattiePieImage}
            />
            <FloatingButton
              label="Find a Friend"
              onClick={() => setNavigatedTo("FindAFriend")}
              delay="16s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={findAFriendImage}
            />
            <FloatingButton
              label="Comedy Gold"
              onClick={() => setNavigatedTo("ComedyGold")}
              delay="14s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={comedyGoldImage}
             />
             <FloatingButton
              label="Dungeon Crawler Guild"
              onClick={() => setNavigatedTo("DungeonCrawlerGuild")}
              delay="14s"
              backgroundColor="rgba(220, 38, 38, 0.9)"
              imageSrc={dungeonCrawlerGuildImage}
            />
            <FloatingButton
              label="Bullets, Buffs, & Beyond"
              onClick={() => setNavigatedTo("BulletsBuffsBeyond")}
              delay="21s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={bulletsBuffsBeyondImage}
            />
            <FloatingButton
              label="Changing Church"
              onClick={() => setNavigatedTo("ChangingChurch")}
              delay="24s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={changingChurchImage}
            />
            <FloatingButton
              label="Necromancy Insurance Company"
              onClick={() => setNavigatedTo("NecromancyInsuranceCompany")}
              delay="27s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={necromancyInsuranceImage}
            />
            <FloatingButton
              label="O-Papies Oracle Readings"
              onClick={() => setNavigatedTo("OPapiesOracleReadings")}
              delay="30s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={oPapiesOracleReadingsImage}
            />
            <FloatingButton
              label="Robin's Ropes"
              onClick={() => setNavigatedTo("RobinsRopes")}
              delay="33s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={robinsRopesImage}
            />
            <FloatingButton
              label="Runestone Relay"
              onClick={() => setNavigatedTo("RunestoneRelay")}
              delay="36s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={runestoneRelayImage}
            />
            <FloatingButton
              label="Silent Oath"
              onClick={() => setNavigatedTo("SilentOath")}
              delay="39s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={silentOathImage}
            />
            <FloatingButton
              label="Supreme Smithy"
              onClick={() => setNavigatedTo("SupremeSmithy")}
              delay="42s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={supremeSmithyImage}
            />
            <FloatingButton
              label="Will's Weapons"
              onClick={() => setNavigatedTo("WillsWeapons")}
              delay="45s"
              backgroundColor="rgba(255, 255, 255, 0.9)"
              imageSrc={willsWeaponsImage}
            />
          </div>
        </div>
      );
  }
}

function FloatingButton({
  label,
  onClick,
  delay,
  backgroundColor,
  color = "#000",
  imageSrc,
}: {
  label: string;
  onClick: () => void;
  delay: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
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
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f1e0c9",
    gap: "2rem",
    fontFamily: "'Times New Roman', serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "1rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    maxHeight: "70vh",
    overflowY: "auto",
    padding: "1rem",
    width: "98%",
    backgroundColor: "#f1e0c9",
    borderRadius: "18px",
    border: "2px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.08)",
  },
  button: {
    fontSize: "1.5rem",
    padding: "1rem 3rem",
    borderRadius: "23px",
    border: "2px solid #333",
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    animation: "float 12s ease-in-out infinite",
    transition: "transform 0.3s ease",
    fontFamily: "'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  },
  backButton: {
    position: "fixed",
    top: "1.5rem",
    left: "1.5rem",
    zIndex: 1000,
    padding: "0.6rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "999px",
    border: "2px solid #333",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    fontFamily: "'Times New Roman', serif",
  },
  buttonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.35rem",
  },
  buttonImage: {
    width: "140px",
    height: "140px",
    objectFit: "contain",
    borderRadius: "12px",
    border: "2px solid rgba(0,0,0,0.6)",
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.35)",
  },
  buttonLabel: {
    display: "block",
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
