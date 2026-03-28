import { useMemo, useState } from "react";
import { BackButton } from "./BackButton";
import raceTrackImage from "./ReadySetBet/ReadySetBetRaceTrack.jpg";

import horse1 from "./ReadySetBet/H-Horse 1.webp";
import horse2 from "./ReadySetBet/H-Horse 2.png";
import horse3 from "./ReadySetBet/H-Horse 3.png";
import horse4 from "./ReadySetBet/H-Horse 4.png";
import horse5 from "./ReadySetBet/H-Horse 5.png";
import horse6 from "./ReadySetBet/H-Horse 6.png";
import horse9 from "./ReadySetBet/H-Horse 9.png";

import peopleAlex from "./ReadySetBet/P-Alex.webp";
import peopleGoldship from "./ReadySetBet/P-goldship.webp";
import peopleHornet from "./ReadySetBet/P-Hornet.webp";
import peopleKnight from "./ReadySetBet/P-Knight.webp";
import peopleShadow from "./ReadySetBet/P-Shadow.webp";
import peopleSonic from "./ReadySetBet/P-Sonic.gif";
import peopleSoldier from "./ReadySetBet/P-Soldier.png";
import peopleSteve from "./ReadySetBet/P-Steve.png";
import peopleSurge from "./ReadySetBet/P-Surge.png";

import uniqueHorse8 from "./ReadySetBet/U-Horse 8.png";
import uniqueUnicorn7 from "./ReadySetBet/U-Unicorn 7.png";

type RacerMode = "horse" | "people" | "unique";

type RacerAsset = {
  fileName: string;
  src: string;
};

const RACERS_BY_MODE: Record<RacerMode, RacerAsset[]> = {
  horse: [
    { fileName: "H-Horse 1.webp", src: horse1 },
    { fileName: "H-Horse 2.png", src: horse2 },
    { fileName: "H-Horse 3.png", src: horse3 },
    { fileName: "H-Horse 4.png", src: horse4 },
    { fileName: "H-Horse 5.png", src: horse5 },
    { fileName: "H-Horse 6.png", src: horse6 },
    { fileName: "H-Horse 9.png", src: horse9 },
  ],
  people: [
    { fileName: "P-Alex.webp", src: peopleAlex },
    { fileName: "P-goldship.webp", src: peopleGoldship },
    { fileName: "P-Hornet.webp", src: peopleHornet },
    { fileName: "P-Knight.webp", src: peopleKnight },
    { fileName: "P-Shadow.webp", src: peopleShadow },
    { fileName: "P-Sonic.gif", src: peopleSonic },
    { fileName: "P-Soldier.png", src: peopleSoldier },
    { fileName: "P-Steve.png", src: peopleSteve },
    { fileName: "P-Surge.png", src: peopleSurge },
  ],
  unique: [
    { fileName: "U-Horse 8.png", src: uniqueHorse8 },
    { fileName: "U-Unicorn 7.png", src: uniqueUnicorn7 },
  ],
};

function toDisplayLabel(fileName: string): string {
  const strippedPrefix = fileName.replace(/^[A-Z]-/, "");
  return strippedPrefix.replace(/\.[^.]+$/, "");
}

export function ReadySetBet({ onBack }: { onBack?: () => void }) {
  const [mode, setMode] = useState<RacerMode>("horse");

  const racers = useMemo(() => {
    return RACERS_BY_MODE[mode].map((racer) => ({
      ...racer,
      displayName: toDisplayLabel(racer.fileName),
    }));
  }, [mode]);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundImage: `url(${raceTrackImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "1rem",
      }}
    >
      <BackButton onClick={onBack} />

      <main
        style={{
          margin: "4.5rem auto 0",
          maxWidth: "1100px",
          backgroundColor: "rgba(0, 0, 0, 0.62)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRadius: "16px",
          padding: "1rem",
          color: "#fff",
          backdropFilter: "blur(2px)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "0.75rem" }}>Ready Set Bet</h1>

        <div
          role="tablist"
          aria-label="Racer mode"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {(["horse", "people", "unique"] as RacerMode[]).map((nextMode) => {
            const selected = mode === nextMode;

            return (
              <button
                key={nextMode}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setMode(nextMode)}
                style={{
                  border: "1px solid #fff",
                  backgroundColor: selected ? "#f59e0b" : "rgba(255, 255, 255, 0.12)",
                  color: selected ? "#1f2937" : "#fff",
                  borderRadius: "999px",
                  padding: "0.45rem 0.9rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {nextMode}
              </button>
            );
          })}
        </div>

        <section
          aria-label={`${mode} racers`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {racers.map((racer) => (
            <article
              key={racer.fileName}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                color: "#111827",
                borderRadius: "12px",
                padding: "0.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "220px",
              }}
            >
              <img
                src={racer.src}
                alt={racer.displayName}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "contain",
                }}
              />
              <strong style={{ textAlign: "center", fontSize: "0.95rem" }}>
                {racer.displayName}
              </strong>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
