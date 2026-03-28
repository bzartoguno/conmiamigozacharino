import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackButton } from "./BackButton";
import confettiGif from "./ReadySetBet/Confetti.gif";
import raceTrackImage from "./ReadySetBet/ReadySetBetRaceTrack.jpg";
import { readySetBetAssets, type ReadySetBetRacer } from "./ReadySetBet/assets";

// PSEUDOCODE: Define race modes and map each mode to the corresponding asset list.
type RacerMode = "horse" | "people" | "dnd" | "unique" | "all" | "choose";
const RACERS_BY_MODE: Record<RacerMode, ReadySetBetRacer[]> = {
  horse: readySetBetAssets.horses,
  people: readySetBetAssets.people,
  dnd: readySetBetAssets.dnd,
  unique: readySetBetAssets.unique,
  all: [
    ...readySetBetAssets.horses,
    ...readySetBetAssets.people,
    ...readySetBetAssets.dnd,
    ...readySetBetAssets.unique,
  ],
  choose: [
    ...readySetBetAssets.horses,
    ...readySetBetAssets.people,
    ...readySetBetAssets.dnd,
    ...readySetBetAssets.unique,
  ],
};
const MODE_LABEL_BY_VALUE: Record<RacerMode, string> = {
  horse: "Horses",
  people: "People",
  dnd: "D&D",
  unique: "Unique",
  all: "All",
  choose: "Choose",
};
// PSEUDOCODE: Store all fixed race rules/track coordinates in constants for reuse.
const LANE_LABELS = ["2/3", "4", "5", "6", "7", "8", "9", "10", "11/12"] as const;
const BONUS_MOVES_BY_LANE = [3, 3, 2, 1, 0, 1, 2, 3, 3] as const;
const FINISH_SPACE = 15;
const RED_LINE_SPACE = 8;
const TRACK_COLUMN_POSITIONS = [
  10, 15.5, 21, 26.5, 32, 37.5, 43, 48.5, 54, 59.5, 65, 70.5, 76, 81.5, 87, 92.5,
] as const;
const TRACK_LANE_TOP_POSITIONS = [21.5, 29, 35.8, 43, 50, 57, 64, 71, 78] as const;
const NAME_TAG_COLOR_BY_LANE_LABEL: Record<(typeof LANE_LABELS)[number], string> = {
  "2/3": "#2563eb",
  "4": "#2563eb",
  "5": "#facc15",
  "6": "#ec4899",
  "7": "#111827",
  "8": "#ec4899",
  "9": "#facc15",
  "10": "#2563eb",
  "11/12": "#2563eb",
};
const MIRRORED_RACER_IDS = new Set([
  "H-Horse 1",
  "H-Horse 2",
  "H-Horse 3",
  "H-Horse 4",
  "H-Horse 5",
  "H-Horse 9",
  "H-Cinnamon",
  "H-Grace",
  "H-Midnight",
  "H-Prince",
  "P-Alex",
  "P-Hornet",
  "P-Kinger",
  "P-MasterChief",
  "P-Monoco",
  "P-PikminTrio",
  "P-Soldier",
  "P-Surge",
  "P-Teto",
  "P-VincentvanGogh",
  "D-Alyssa",
  "D-Caleb",
  "D-Eel",
  "D-Howard",
  "D-Melanie",
]);

const shouldMirrorRacer = (racer: ReadySetBetRacer) => MIRRORED_RACER_IDS.has(racer.id);

type StandardBetType = "show" | "place" | "win";
type StandardBetSpotIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const STANDARD_MATRIX: Record<(typeof LANE_LABELS)[number], ReadonlyArray<readonly [number, number]>> = {
  "2/3": [[4, 4], [4, 3], [5, 4], [5, 3], [7, 2], [8, 2], [9, 2]],
  "4": [[3, 1], [3, 0], [4, 1], [4, 0], [5, 1], [6, 0], [7, 0]],
  "5": [[2, 3], [2, 0], [2, 2], [3, 2], [4, 2], [4, 0], [5, 0]],
  "6": [[1, 2], [1, 0], [2, 5], [2, 4], [3, 2], [3, 1], [3, 0]],
  "7": [[1, 3], [1, 1], [2, 6], [2, 5], [3, 4], [3, 3], [3, 2]],
  "8": [[1, 2], [1, 0], [2, 5], [2, 4], [3, 2], [3, 1], [3, 0]],
  "9": [[2, 3], [2, 0], [2, 2], [3, 2], [4, 2], [4, 0], [5, 0]],
  "10": [[3, 1], [3, 0], [4, 1], [4, 0], [5, 1], [6, 0], [7, 0]],
  "11/12": [[4, 4], [4, 3], [5, 4], [5, 3], [7, 2], [8, 2], [9, 2]],
};

const SPOT_INDEXES_BY_BET_TYPE: Record<StandardBetType, StandardBetSpotIndex[]> = {
  show: [0, 1],
  place: [2, 3],
  win: [4, 5, 6],
};

const PLAYER_TOKENS = [
  { id: "token-2", value: 2 },
  { id: "token-3a", value: 3 },
  { id: "token-3b", value: 3 },
  { id: "token-4", value: 4 },
  { id: "token-5", value: 5 },
] as const;

interface PlacedStandardBet {
  tokenId: string;
  tokenValue: number;
  laneLabel: (typeof LANE_LABELS)[number];
  betType: StandardBetType;
  spotIndex: StandardBetSpotIndex;
  multiplier: number;
  loss: number;
}

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
  const [selectedRacerIds, setSelectedRacerIds] = useState<Set<string>>(
    () => new Set(RACERS_BY_MODE.all.map((racer) => racer.id))
  );
  const [chosenRacerOrder, setChosenRacerOrder] = useState<string[]>(
    () => RACERS_BY_MODE.all.map((racer) => racer.id)
  );

  const racers = useMemo(() => {
    if (mode !== "choose") {
      return RACERS_BY_MODE[mode];
    }

    const selectedIds = selectedRacerIds;
    const byId = new Map(RACERS_BY_MODE.choose.map((racer) => [racer.id, racer]));
    return chosenRacerOrder
      .filter((racerId) => selectedIds.has(racerId))
      .map((racerId) => byId.get(racerId))
      .filter((racer): racer is ReadySetBetRacer => racer !== undefined);
  }, [chosenRacerOrder, mode, selectedRacerIds]);
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
  const createRaceSlots = useCallback((pool: ReadySetBetRacer[], preserveOrder = false) => {
    if (pool.length === 0) {
      return [] as Array<{ lane: number; racer: ReadySetBetRacer }>;
    }

    const laneRacers = preserveOrder ? [...pool] : [...pool];
    if (!preserveOrder) {
      for (let index = laneRacers.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [laneRacers[index], laneRacers[randomIndex]] = [laneRacers[randomIndex], laneRacers[index]];
      }
    }

    const selectedForRace = laneRacers.slice(0, 9);
    while (selectedForRace.length < 9) {
      const nextIndex = selectedForRace.length % laneRacers.length;
      selectedForRace.push(laneRacers[nextIndex]);
    }

    return selectedForRace.map((racer, index) => ({
      lane: index + 1,
      racer,
    }));
  }, []);
  const [raceSlots, setRaceSlots] = useState<Array<{ lane: number; racer: ReadySetBetRacer }>>(() =>
    createRaceSlots(RACERS_BY_MODE.horse)
  );
  const [bankroll, setBankroll] = useState(30);
  const [placedBets, setPlacedBets] = useState<PlacedStandardBet[]>([]);
  const [bettingOpen, setBettingOpen] = useState(true);
  const [settlementSummary, setSettlementSummary] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<string>(PLAYER_TOKENS[0].id);
  const [selectedLaneLabel, setSelectedLaneLabel] = useState<(typeof LANE_LABELS)[number]>(LANE_LABELS[0]);
  const [selectedBetType, setSelectedBetType] = useState<StandardBetType>("win");
  const [selectedSpotIndex, setSelectedSpotIndex] = useState<StandardBetSpotIndex>(4);
  const betsRef = useRef<PlacedStandardBet[]>([]);
  const hasSettledRef = useRef(false);
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
    setPlacedBets([]);
    setBettingOpen(true);
    setSettlementSummary(null);
    streakRef.current = { laneIndex: null, count: 0 };
    hasSettledRef.current = false;
  }, [stopRace]);

  useEffect(() => {
    betsRef.current = placedBets;
  }, [placedBets]);

  const settleRace = useCallback((finalPositions: number[]) => {
    if (hasSettledRef.current) {
      return;
    }
    hasSettledRef.current = true;
    const laneByRank = finalPositions
      .map((position, index) => ({ laneLabel: LANE_LABELS[index], position }))
      .sort((a, b) => b.position - a.position);

    const rankGroups: Array<Array<(typeof LANE_LABELS)[number]>> = [];
    laneByRank.forEach((entry) => {
      const lastGroup = rankGroups[rankGroups.length - 1];
      if (!lastGroup) {
        rankGroups.push([entry.laneLabel]);
        return;
      }
      const representative = laneByRank.find((item) => item.laneLabel === lastGroup[0]);
      if (representative?.position === entry.position) {
        lastGroup.push(entry.laneLabel);
      } else {
        rankGroups.push([entry.laneLabel]);
      }
    });

    const winSet = new Set(rankGroups[0] ?? []);
    const placeSet = new Set([...(rankGroups[0] ?? []), ...(rankGroups[1] ?? [])]);
    const showSet = new Set(
      rankGroups[1] && rankGroups[1].length >= 2
        ? [...(rankGroups[0] ?? []), ...(rankGroups[1] ?? [])]
        : [...(rankGroups[0] ?? []), ...(rankGroups[1] ?? []), ...(rankGroups[2] ?? [])]
    );

    const isWinningBet = (bet: PlacedStandardBet) => {
      if (bet.betType === "win") return winSet.has(bet.laneLabel);
      if (bet.betType === "place") return placeSet.has(bet.laneLabel);
      return showSet.has(bet.laneLabel);
    };

    let winnings = 0;
    let losses = 0;
    betsRef.current.forEach((bet) => {
      if (isWinningBet(bet)) {
        winnings += bet.tokenValue * bet.multiplier;
      } else {
        losses += bet.loss;
      }
    });
    const net = winnings - losses;
    setBankroll((current) => Math.max(0, current + net));
    setSettlementSummary(
      `Settled ${betsRef.current.length} bet${betsRef.current.length === 1 ? "" : "s"}: +$${winnings} / -$${losses} (net ${net >= 0 ? "+" : ""}$${net}).`
    );
  }, []);

  // PSEUDOCODE: On interval, roll dice -> choose lane -> apply streak bonus -> move racer -> stop if someone finishes.
  const startRace = (intervalMs = 650) => {
    if (raceSlots.length === 0) {
      return;
    }

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
        const crossedRedLine = nextPositions.filter((position) => position >= RED_LINE_SPACE).length;
        if (crossedRedLine >= 3) {
          setBettingOpen(false);
        }
        if (finishIndex !== -1) {
          setWinnerLane(finishIndex + 1);
          setBettingOpen(false);
          settleRace(nextPositions);
          stopRace();
        }

        return nextPositions;
      });
    }, intervalMs);
  };

  // PSEUDOCODE: Cleanup timer on unmount; whenever mode/lineup changes, restart to clean state.
  useEffect(() => () => stopRace(), [stopRace]);
  useEffect(() => {
    resetRace();
    setRaceSlots(createRaceSlots(racers, mode === "choose"));
  }, [createRaceSlots, mode, racers, resetRace]);

  useEffect(() => {
    const validSpots = SPOT_INDEXES_BY_BET_TYPE[selectedBetType];
    if (!validSpots.includes(selectedSpotIndex)) {
      setSelectedSpotIndex(validSpots[0]);
    }
  }, [selectedBetType, selectedSpotIndex]);

  const hasRacersAvailable = raceSlots.length > 0;

  const toggleChooseRacer = (racerId: string) => {
    setSelectedRacerIds((previous) => {
      const wasSelected = previous.has(racerId);
      const next = new Set(previous);
      if (wasSelected) {
        next.delete(racerId);
      } else {
        next.add(racerId);
      }
      setChosenRacerOrder((currentOrder) => {
        if (wasSelected) {
          return currentOrder.filter((id) => id !== racerId);
        }
        return [...currentOrder.filter((id) => id !== racerId), racerId];
      });
      return next;
    });
  };

  const placeStandardBet = () => {
    if (!bettingOpen || !isRacing) {
      return;
    }
    const token = PLAYER_TOKENS.find((entry) => entry.id === selectedTokenId);
    if (!token) {
      return;
    }
    const tokenUsed = placedBets.some((bet) => bet.tokenId === token.id);
    if (tokenUsed) {
      setSettlementSummary("That token is already placed this race.");
      return;
    }
    const sameSpotTaken = placedBets.some(
      (bet) =>
        bet.laneLabel === selectedLaneLabel &&
        bet.betType === selectedBetType &&
        bet.spotIndex === selectedSpotIndex
    );
    if (sameSpotTaken) {
      setSettlementSummary("That spot is already occupied by one of your bets.");
      return;
    }
    const [multiplier, loss] = STANDARD_MATRIX[selectedLaneLabel][selectedSpotIndex];
    setPlacedBets((current) => [
      ...current,
      {
        tokenId: token.id,
        tokenValue: token.value,
        laneLabel: selectedLaneLabel,
        betType: selectedBetType,
        spotIndex: selectedSpotIndex,
        multiplier,
        loss,
      },
    ]);
    setSettlementSummary(null);
  };

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
          {" "}images for people, <strong>D-</strong> images for D&amp;D racers, and{" "}
          <strong>U-</strong> images for unique racers.
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
          {(Object.keys(MODE_LABEL_BY_VALUE) as RacerMode[]).map((nextMode) => {
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
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {MODE_LABEL_BY_VALUE[nextMode]}
              </button>
            );
          })}
        </div>

        {mode === "choose" && (
          <section
            aria-label="choose racers"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.58)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "12px",
              padding: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ marginTop: 0, marginBottom: "0.6rem" }}>
              Pick exactly who can be in the race. In Choose mode, selection order sets lane order:
              first selected goes to lane 1, second to lane 2, and so on.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
              <button
                type="button"
                onClick={() => {
                  setSelectedRacerIds(new Set(RACERS_BY_MODE.all.map((racer) => racer.id)));
                  setChosenRacerOrder(RACERS_BY_MODE.all.map((racer) => racer.id));
                }}
                style={{
                  border: "1px solid #fff",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "0.35rem 0.8rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Select all
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedRacerIds(new Set());
                  setChosenRacerOrder([]);
                }}
                style={{
                  border: "1px solid #fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "0.35rem 0.8rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Clear all
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: "0.5rem 0.75rem",
                maxHeight: "220px",
                overflowY: "auto",
                paddingRight: "0.25rem",
              }}
            >
              {RACERS_BY_MODE.all.map((racer) => (
                <label key={`choose-${racer.id}`} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <input
                    type="checkbox"
                    checked={selectedRacerIds.has(racer.id)}
                    onChange={() => toggleChooseRacer(racer.id)}
                  />
                  <span>{racer.name}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        <section
          aria-label="race controls and progress"
          style={{
            backgroundColor: "transparent",
            borderRadius: "14px",
            padding: "0",
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
              onClick={() => startRace(650)}
              disabled={isRacing || !hasRacersAvailable}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable ? "rgba(100, 116, 139, 0.6)" : "#22c55e",
                color: isRacing ? "#e2e8f0" : "#052e16",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                fontWeight: 700,
                cursor: isRacing || !hasRacersAvailable ? "not-allowed" : "pointer",
              }}
            >
              {isRacing ? "Race in progress..." : "Start Race"}
            </button>
            <button
              type="button"
              onClick={() => startRace(950)}
              disabled={isRacing || !hasRacersAvailable}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable ? "rgba(148, 163, 184, 0.45)" : "#60a5fa",
                color: isRacing || !hasRacersAvailable ? "#e2e8f0" : "#082f49",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                cursor: isRacing || !hasRacersAvailable ? "not-allowed" : "pointer",
                fontWeight: 700,
              }}
            >
              Slow Race
            </button>
            <button
              type="button"
              onClick={() => startRace(350)}
              disabled={isRacing || !hasRacersAvailable}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable ? "rgba(148, 163, 184, 0.45)" : "#f97316",
                color: isRacing || !hasRacersAvailable ? "#e2e8f0" : "#431407",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                cursor: isRacing || !hasRacersAvailable ? "not-allowed" : "pointer",
                fontWeight: 700,
              }}
            >
              Fast Race
            </button>
            <button
              type="button"
              onClick={() => setRaceSlots(createRaceSlots(racers, mode === "choose"))}
              disabled={isRacing || racers.length === 0}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || racers.length === 0
                  ? "rgba(148, 163, 184, 0.45)"
                  : "rgba(255, 255, 255, 0.2)",
                color: isRacing ? "#e2e8f0" : "#fff",
                borderRadius: "999px",
                padding: "0.4rem 0.8rem",
                cursor: isRacing || racers.length === 0 ? "not-allowed" : "pointer",
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

          <div
            style={{
              marginBottom: "0.85rem",
              padding: "0.75rem",
              borderRadius: "12px",
              backgroundColor: "rgba(15, 23, 42, 0.68)",
              border: "1px solid rgba(255,255,255,0.24)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "0.45rem", fontSize: "1rem" }}>Betting</h2>
            <p style={{ marginTop: 0, marginBottom: "0.5rem" }}>
              Bankroll: <strong>${bankroll}</strong> · Betting:{" "}
              <strong style={{ color: bettingOpen && isRacing ? "#86efac" : "#fca5a5" }}>
                {bettingOpen && isRacing ? "OPEN" : "CLOSED"}
              </strong>
              {!isRacing && " (start a race to place bets)"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
              <label>
                Token{" "}
                <select value={selectedTokenId} onChange={(event) => setSelectedTokenId(event.target.value)}>
                  {PLAYER_TOKENS.map((token) => {
                    const tokenUsed = placedBets.some((bet) => bet.tokenId === token.id);
                    return (
                      <option key={token.id} value={token.id} disabled={tokenUsed}>
                        {token.value} {tokenUsed ? "(used)" : ""}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label>
                Horse{" "}
                <select
                  value={selectedLaneLabel}
                  onChange={(event) => setSelectedLaneLabel(event.target.value as (typeof LANE_LABELS)[number])}
                >
                  {LANE_LABELS.map((laneLabel) => (
                    <option key={laneLabel} value={laneLabel}>
                      {laneLabel}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Bet{" "}
                <select
                  value={selectedBetType}
                  onChange={(event) => setSelectedBetType(event.target.value as StandardBetType)}
                >
                  <option value="show">Show</option>
                  <option value="place">Place</option>
                  <option value="win">Win</option>
                </select>
              </label>
              <label>
                Spot{" "}
                <select
                  value={selectedSpotIndex}
                  onChange={(event) => setSelectedSpotIndex(Number(event.target.value) as StandardBetSpotIndex)}
                >
                  {SPOT_INDEXES_BY_BET_TYPE[selectedBetType].map((index) => {
                    const [multiplier, loss] = STANDARD_MATRIX[selectedLaneLabel][index];
                    return (
                      <option key={index} value={index}>
                        #{index + 1} ({multiplier}x / -{loss})
                      </option>
                    );
                  })}
                </select>
              </label>
              <button
                type="button"
                onClick={placeStandardBet}
                disabled={!isRacing || !bettingOpen}
                style={{
                  border: "1px solid #fff",
                  backgroundColor: !isRacing || !bettingOpen ? "rgba(148,163,184,0.45)" : "#facc15",
                  color: "#111827",
                  borderRadius: "999px",
                  padding: "0.4rem 0.85rem",
                  fontWeight: 700,
                  cursor: !isRacing || !bettingOpen ? "not-allowed" : "pointer",
                }}
              >
                Place Bet
              </button>
            </div>
            {settlementSummary && (
              <p style={{ marginBottom: 0.15, color: "#fde68a", fontWeight: 700 }}>{settlementSummary}</p>
            )}
            {placedBets.length > 0 && (
              <ul style={{ marginBottom: 0, paddingLeft: "1.1rem" }}>
                {placedBets.map((bet) => (
                  <li key={`${bet.tokenId}-${bet.laneLabel}-${bet.betType}-${bet.spotIndex}`}>
                    ${bet.tokenValue} on {bet.betType.toUpperCase()} {bet.laneLabel} ({bet.multiplier}x / -{bet.loss})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {lastRoll && (
            <p style={{ marginTop: 0, marginBottom: "0.6rem" }}>
              Roll: {lastRoll.die1} + {lastRoll.die2} = {lastRoll.sum} → Lane{" "}
              {lastRoll.laneLabel} moved {lastRoll.move} space
              {lastRoll.move > 1 ? "s" : ""}.
            </p>
          )}

          {!hasRacersAvailable && (
            <p style={{ marginTop: 0, marginBottom: "0.6rem", color: "#fde68a", fontWeight: 700 }}>
              No racers selected. Use Choose mode and pick at least one racer.
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
              border: "none",
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
              const hasReachedHalfway = safePosition >= FINISH_SPACE / 2;
              const topOffset = TRACK_LANE_TOP_POSITIONS[index] ?? 50;
              const markerLeft = TRACK_COLUMN_POSITIONS[safePosition] ?? TRACK_COLUMN_POSITIONS[0];
              const laneLabel = LANE_LABELS[index];
              const nameTagColor = NAME_TAG_COLOR_BY_LANE_LABEL[laneLabel] ?? "#1e293b";
              const hasDarkTag = nameTagColor === "#111827";
              const isMirrored = shouldMirrorRacer(racer);

              return (
                <div
                  key={`progress-${lane}-${racer.id}`}
                  style={{
                    position: "absolute",
                    top: `${topOffset}%`,
                    left: `${markerLeft}%`,
                    transform: "translate(-50%, -50%)",
                    transition: "left 0.45s ease-out",
                    zIndex: 2,
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <img
                    src={racer.image}
                    alt={racer.name}
                    style={{
                      width: "52px",
                      height: "52px",
                      objectFit: "contain",
                      transform: isMirrored ? "scaleX(-1)" : "none",
                      filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.65))",
                      imageRendering: "auto",
                      backgroundColor: "transparent",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: hasReachedHalfway ? "auto" : "calc(100% + 8px)",
                      right: hasReachedHalfway ? "calc(100% + 8px)" : "auto",
                      transform: "translateY(-50%)",
                      backgroundColor: nameTagColor,
                      border: hasDarkTag
                        ? "1px solid rgba(148, 163, 184, 0.8)"
                        : "1px solid rgba(255,255,255,0.6)",
                      borderRadius: "10px",
                      padding: "0.2rem 0.45rem",
                      lineHeight: 1.2,
                      maxWidth: "180px",
                      whiteSpace: "nowrap",
                      color: hasDarkTag || nameTagColor === "#2563eb" ? "#f8fafc" : "#111827",
                    }}
                  >
                    <div style={{ fontSize: "0.74rem", opacity: 0.85 }}>
                      Lane {lane} ({laneLabel})
                    </div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700 }}>{racer.name}</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>
                      {positions[index]}/{FINISH_SPACE}
                    </div>
                  </div>
                </div>
              );
            })}
            {winnerLane && raceSlots[winnerLane - 1] && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "min(38vw, 280px)",
                    maxWidth: "280px",
                    aspectRatio: "1 / 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={raceSlots[winnerLane - 1].racer.image}
                    alt={`${raceSlots[winnerLane - 1].racer.name} winner`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.75))",
                    }}
                  />
                  <img
                    src={confettiGif}
                    alt="Winner confetti"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      mixBlendMode: "screen",
                      opacity: 0.25,
                    }}
                  />
                </div>
              </div>
            )}
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
          {racers.map((racer) => {
            const isMirrored = shouldMirrorRacer(racer);

            return (
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
                  transform: isMirrored ? "scaleX(-1)" : "none",
                  imageRendering: "auto",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                }}
              />
              <strong style={{ textAlign: "center", fontSize: "0.95rem" }}>{racer.name}</strong>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
