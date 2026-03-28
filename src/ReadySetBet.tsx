import { useMemo, useState } from "react";
import { BackButton } from "./BackButton";
import raceTrackImage from "./ReadySetBet/ReadySetBetRaceTrack.jpg";
import { readySetBetAssets, type ReadySetBetRacer } from "./ReadySetBet/assets";

type RacerMode = "horse" | "people" | "unique";

const RACERS_BY_MODE: Record<RacerMode, ReadySetBetRacer[]> = {
  horse: readySetBetAssets.horses,
  people: readySetBetAssets.people,
  unique: readySetBetAssets.unique,
};

export function ReadySetBet({ onBack }: { onBack?: () => void }) {
  const [mode, setMode] = useState<RacerMode>("horse");

  const racers = useMemo(() => RACERS_BY_MODE[mode], [mode]);

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
              key={racer.id}
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
                src={racer.image}
                alt={racer.name}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "contain",
                }}
              />
              <strong style={{ textAlign: "center", fontSize: "0.95rem" }}>{racer.name}</strong>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
