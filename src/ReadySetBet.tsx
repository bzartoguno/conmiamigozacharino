import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackButton } from "./BackButton";
import raceTrackImage from "./ReadySetBet/ReadySetBetRaceTrack.jpg";
import { readySetBetAssets, type ReadySetBetRacer } from "./ReadySetBet/assets";

// PSEUDOCODE: Define race modes and map each mode to the corresponding asset list.
type RacerMode = "horse" | "people" | "unique";
const RACERS_BY_MODE: Record<RacerMode, ReadySetBetRacer[]> = {
  horse: readySetBetAssets.horses,
  people: readySetBetAssets.people,
  unique: readySetBetAssets.unique,
};
// PSEUDOCODE: Store all fixed race rules/track coordinates in constants for reuse.
const LANE_LABELS = ["2/3", "4", "5", "6", "7", "8", "9", "10", "11/12"] as const;
const BONUS_MOVES_BY_LANE = [3, 3, 2, 1, 0, 1, 2, 3, 3] as const;
const FINISH_SPACE = 15;
const TRACK_COLUMN_POSITIONS = [
  10, 15.5, 21, 26.5, 32, 37.5, 43, 48.5, 54, 59.5, 65, 70.5, 76, 81.5, 87, 92.5,
] as const;
const TRACK_LANE_TOP_POSITIONS = [13, 21.5, 30, 38.5, 47, 55.5, 64, 72.5, 81] as const;

// PSEUDOCODE: Keep map-button metadata here so Map.tsx only consumes exported config.
export const readySetBetMapButton = {
  key: "ReadySetBet",
  label: "Horse Racing",
  delay: "50s",
  backgroundColor: "rgba(250, 204, 21, 0.9)",
  imageSrc: raceTrackImage,
} as const;

export function ReadySetBet({ onBack }: { onBack?: () => void }) {
  // PSEUDOCODE: Track UI/game state (selected racer mode, lane positions, race status, winner, and last roll).
  const [mode, setMode] = useState<RacerMode>("horse");

  const racers = useMemo(() => RACERS_BY_MODE[mode], [mode]);
  const [lineupSeed, setLineupSeed] = useState(0);
  const [positions, setPositions] = useState<number[]>(() => Array(9).fill(0));
  const [isRacing, setIsRacing] = useState(false);
  const [winnerLane, setWinnerLane] = useState<number | null>(null);
  const [lastRoll, setLastRoll] = useState<{
    die1: number;
    die2: number;
    sum: number;
    laneLabel: string;
    move: number;
  } | null>(null);
  const intervalRef = useRef<number | null>(null);
  const streakRef = useRef<{ laneIndex: number | null; count: number }>({
    laneIndex: null,
    count: 0,
  });
  // PSEUDOCODE: Build a 9-lane lineup from chosen racer list, then rotate by lineupSeed for shuffle behavior.
  const raceSlots = useMemo(() => {
    if (racers.length === 0) {
      return [];
    }

    const slots = Array.from({ length: 9 }, (_, index) => racers[index % racers.length]);
    const rotated = slots.map((_, index) => slots[(index + lineupSeed) % slots.length]);

    return rotated.map((racer, index) => ({
      lane: index + 1,
      racer,
    }));
  }, [lineupSeed, racers]);
  // PSEUDOCODE: Convert two-dice total into lane index based on ready-set-bet odds layout.
  const horseIndexByDiceSum = (sum: number) => {
    if (sum <= 3) return 0;
    if (sum === 4) return 1;
    if (sum === 5) return 2;
    if (sum === 6) return 3;
    if (sum === 7) return 4;
    if (sum === 8) return 5;
    if (sum === 9) return 6;
    if (sum === 10) return 7;
    return 8;
  };

  // PSEUDOCODE: Stop race loop timer and mark race as idle.
  const stopRace = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRacing(false);
  }, []);

  // PSEUDOCODE: Reset all race progress back to starting state.
  const resetRace = useCallback(() => {
    stopRace();
    setPositions(Array(9).fill(0));
    setWinnerLane(null);
    setLastRoll(null);
    streakRef.current = { laneIndex: null, count: 0 };
  }, [stopRace]);

  // PSEUDOCODE: On interval, roll dice -> choose lane -> apply streak bonus -> move racer -> stop if someone finishes.
  const startRace = () => {
    resetRace();
    setIsRacing(true);

    intervalRef.current = window.setInterval(() => {
      const die1 = Math.floor(Math.random() * 6) + 1;
      const die2 = Math.floor(Math.random() * 6) + 1;
      const sum = die1 + die2;
      const laneIndex = horseIndexByDiceSum(sum);

      const streak =
        streakRef.current.laneIndex === laneIndex ? streakRef.current.count + 1 : 1;
      streakRef.current = { laneIndex, count: streak };

      const getsBonus = streak >= 2 && streak % 2 === 0;
      const move = 1 + (getsBonus ? BONUS_MOVES_BY_LANE[laneIndex] : 0);

      setLastRoll({
        die1,
        die2,
        sum,
        laneLabel: LANE_LABELS[laneIndex],
        move,
      });

      setPositions((currentPositions) => {
        const nextPositions = [...currentPositions];
        nextPositions[laneIndex] = Math.min(FINISH_SPACE, nextPositions[laneIndex] + move);

        const finishIndex = nextPositions.findIndex((position) => position >= FINISH_SPACE);
        if (finishIndex !== -1) {
          setWinnerLane(finishIndex + 1);
          stopRace();
        }

        return nextPositions;
      });
    }, 650);
  };

  // PSEUDOCODE: Cleanup timer on unmount; whenever mode/lineup changes, restart to clean state.
  useEffect(() => () => stopRace(), [stopRace]);
  useEffect(() => {
    resetRace();
  }, [mode, lineupSeed, resetRace]);

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
        <p style={{ marginTop: 0, marginBottom: "0.75rem", lineHeight: 1.4 }}>
          Pick who races this round: <strong>H-</strong> images for horses, <strong>P-</strong>
          {" "}images for people, and <strong>U-</strong> images for unique racers.
        </p>

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
          aria-label="race controls and progress"
          style={{
            backgroundColor: "rgba(2, 6, 23, 0.65)",
            borderRadius: "14px",
            padding: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <button
              type="button"
              onClick={startRace}
              disabled={isRacing}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing ? "rgba(100, 116, 139, 0.6)" : "#22c55e",
                color: isRacing ? "#e2e8f0" : "#052e16",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                fontWeight: 700,
                cursor: isRacing ? "not-allowed" : "pointer",
              }}
            >
              {isRacing ? "Race in progress..." : "Start Race"}
            </button>
            <button
              type="button"
              onClick={() => setLineupSeed((seed) => seed + 1)}
              disabled={isRacing}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing
                  ? "rgba(148, 163, 184, 0.45)"
                  : "rgba(255, 255, 255, 0.2)",
                color: isRacing ? "#e2e8f0" : "#fff",
                borderRadius: "999px",
                padding: "0.4rem 0.8rem",
                cursor: isRacing ? "not-allowed" : "pointer",
                fontWeight: 700,
              }}
            >
              Shuffle racers
            </button>
            <button
              type="button"
              onClick={resetRace}
              style={{
                border: "1px solid #fff",
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                color: "#fff",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
            {winnerLane && (
              <strong>
                Winner: Lane {winnerLane} ({raceSlots[winnerLane - 1]?.racer.name ?? "Unknown"})
              </strong>
            )}
          </div>

          {lastRoll && (
            <p style={{ marginTop: 0, marginBottom: "0.6rem" }}>
              Roll: {lastRoll.die1} + {lastRoll.die2} = {lastRoll.sum} → Lane{" "}
              {lastRoll.laneLabel} moved {lastRoll.move} space
              {lastRoll.move > 1 ? "s" : ""}.
            </p>
          )}

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto",
              aspectRatio: "1 / 1",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.35)",
              backgroundImage: `url(${raceTrackImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: `${TRACK_COLUMN_POSITIONS[TRACK_COLUMN_POSITIONS.length - 1]}%`,
                top: "8%",
                bottom: "14%",
                borderLeft: "3px dashed rgba(248, 250, 252, 0.95)",
              }}
            />
            {raceSlots.map(({ lane, racer }, index) => {
              const safePosition = Math.max(0, Math.min(FINISH_SPACE, positions[index]));
              const topOffset = TRACK_LANE_TOP_POSITIONS[index] ?? 50;
              const markerLeft = TRACK_COLUMN_POSITIONS[safePosition] ?? TRACK_COLUMN_POSITIONS[0];

              return (
                <div
                  key={`progress-${lane}-${racer.id}`}
                  style={{
                    position: "absolute",
                    top: `${topOffset}%`,
                    left: `${markerLeft}%`,
                    transform: "translate(-50%, -50%)",
                    transition: "left 0.45s ease-out",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={racer.image}
                    alt={racer.name}
                    style={{
                      width: "52px",
                      height: "52px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.65))",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(255,255,255,0.55)",
                      borderRadius: "10px",
                      padding: "0.2rem 0.45rem",
                      lineHeight: 1.2,
                      maxWidth: "180px",
                    }}
                  >
                    <div style={{ fontSize: "0.74rem", opacity: 0.85 }}>
                      Lane {lane} ({LANE_LABELS[index]})
                    </div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700 }}>{racer.name}</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>
                      {positions[index]}/{FINISH_SPACE}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

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
