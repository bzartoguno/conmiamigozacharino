import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { BackButton } from "./BackButton";
import confettiGif from "./ReadySetBet/Confetti.gif";
import bettingBoardImage from "./ReadySetBet/ReadySetBetBettingBoard.png";
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
const RED_LINE_SPACE = 10;
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
type SuperpowerDetails = {
  powerName: string;
  summary: string;
};
type SuperpowerTrigger = "back-to-back" | "last-call";
type RacerPowerKey =
  | "alex"
  | "flash"
  | "george"
  | "goldship"
  | "hornet"
  | "jack_sparrow"
  | "jax"
  | "kinger"
  | "knight"
  | "master_chief"
  | "miku"
  | "monoco"
  | "pikmin_trio"
  | "professor_x"
  | "shadow"
  | "sonic"
  | "soldier"
  | "space_marine"
  | "stephen_hawking"
  | "steve"
  | "surge"
  | "teto"
  | "vincent_van_gogh"
  | "rainbow_dash"
  | "ponyta"
  | "ponyta_galar"
  | "rapidash"
  | "rapidash_galar"
  | "rarity";
type RacerPowerState = {
  shield: number;
  fatigue: number;
  stagger: number;
  lastCallLocked: boolean;
  echo: number;
  gravity: number;
  overchargeReady: boolean;
  wasPulledBack: boolean;
  phase: boolean;
  poiseActive: boolean;
  usedFlags: Record<string, boolean>;
};

const POWER_KEY_BY_RACER_ID: Partial<Record<string, RacerPowerKey>> = {
  "P-Alex": "alex",
  "P-Flash": "flash",
  "P-George": "george",
  "P-goldship": "goldship",
  "P-Hornet": "hornet",
  "P-JackSparrow": "jack_sparrow",
  "P-Jax": "jax",
  "P-Kinger": "kinger",
  "P-Knight": "knight",
  "P-MasterChief": "master_chief",
  "P-Miku": "miku",
  "P-Monoco": "monoco",
  "P-PikminTrio": "pikmin_trio",
  "P-ProfessorX": "professor_x",
  "P-Shadow": "shadow",
  "P-Sonic": "sonic",
  "P-Soldier": "soldier",
  "P-SpaceMarine": "space_marine",
  "P-StephenHawking": "stephen_hawking",
  "P-Steve": "steve",
  "P-Surge": "surge",
  "P-Teto": "teto",
  "P-VincentvanGogh": "vincent_van_gogh",
  "U-Horse 8": "rainbow_dash",
  "U-Ponyta": "ponyta",
  "U-PonytaGalar": "ponyta_galar",
  "U-Rapidash": "rapidash",
  "U-Rapidashgalar": "rapidash_galar",
  "U-Unicorn 7": "rarity",
};

const createInitialPowerState = (): RacerPowerState => ({
  shield: 0,
  fatigue: 0,
  stagger: 0,
  lastCallLocked: false,
  echo: 0,
  gravity: 0,
  overchargeReady: true,
  wasPulledBack: false,
  phase: false,
  poiseActive: false,
  usedFlags: {},
});

const SUPERPOWERS_BY_RACER_ID: Partial<Record<string, SuperpowerDetails>> = {
  "P-Alex": {
    powerName: "Steady Stride",
    summary: "Reliable burst movement with small defensive shielding when pressure rises.",
  },
  "P-Flash": {
    powerName: "Speed Force Burn",
    summary: "Huge speed bursts that can add fatigue to future dice movement.",
  },
  "P-George": {
    powerName: "Good Neighbor Nudge",
    summary: "Moves forward while lightly nudging nearby leaders backward.",
  },
  "P-goldship": {
    powerName: "Captain's Whim",
    summary: "Chaotic dice-driven outcomes that swing between big gains and setbacks.",
  },
  "P-Hornet": {
    powerName: "Silkline Grapple",
    summary: "Can grapple closer to rivals and leave a one-time snare trap behind.",
  },
  "P-JackSparrow": {
    powerName: "Cursed Coin Shortcut",
    summary: "Trickster teleporting plus a cursed coin that taxes an enemy trigger.",
  },
  "P-Jax": {
    powerName: "Mischief Step",
    summary: "Breaks ties for extra tempo and has a dramatic once-per-race escape swap.",
  },
  "P-Kinger": {
    powerName: "King's Gambit",
    summary: "Pressures the leader by checking and delaying their next Back-to-Back power.",
  },
  "P-Knight": {
    powerName: "Shade Cloak",
    summary: "Steady movement backed by repeatable shield-based defense.",
  },
  "P-MasterChief": {
    powerName: "Spartan Charge",
    summary: "Strong forward push with close-range control and comeback upside.",
  },
  "P-Miku": {
    powerName: "Encore Echo",
    summary: "Builds echo stacks that ramp her future Back-to-Back movement.",
  },
  "P-Monoco": {
    powerName: "Moonlit Mirror",
    summary: "Position-swapping mobility with a one-hit phase-style safety net.",
  },
  "P-PikminTrio": {
    powerName: "Carry Chain",
    summary: "Pack synergy boosts movement when allies are clustered nearby.",
  },
  "P-ProfessorX": {
    powerName: "Telepathic Detour",
    summary: "Taxes the leader's next dice move while maintaining safe progress.",
  },
  "P-Shadow": {
    powerName: "Chaos Control",
    summary: "Comeback teleport potential with added protection if still trailing.",
  },
  "P-Sonic": {
    powerName: "Spin Dash",
    summary: "High-speed surges with anti-runaway fatigue and clutch comeback boost.",
  },
  "P-Soldier": {
    powerName: "Marching Orders",
    summary: "Disciplined pace that converts prior pullbacks into extra recovery speed.",
  },
  "P-SpaceMarine": {
    powerName: "Suppressive Fire",
    summary: "Slows rivals through short pullbacks and leader trigger suppression.",
  },
  "P-StephenHawking": {
    powerName: "Curved Spacetime",
    summary: "Stores comeback potential while behind, then cashes it in on a burst.",
  },
  "P-Steve": {
    powerName: "Place Block",
    summary: "Builds a one-time lane block trap that punishes pass-through movement.",
  },
  "P-Surge": {
    powerName: "Overcharge Cycle",
    summary: "Alternates between explosive and low-output turns in a power cycle.",
  },
  "P-Teto": {
    powerName: "UTAU Glitch Step",
    summary: "Precision movement with conditional swaps and self-cleanse utility.",
  },
  "P-VincentvanGogh": {
    powerName: "Starry Wake",
    summary: "Leaves a wake effect that grants a draft then applies delayed stagger.",
  },
  "U-Horse 8": {
    powerName: "Sonic Rainboom",
    summary: "One massive once-per-race burst plus a small shockwave pullback.",
  },
  "U-Ponyta": {
    powerName: "Flame Charge",
    summary: "Fast burst movement that leaves a one-use scorch trap behind.",
  },
  "U-PonytaGalar": {
    powerName: "Pastel Veil",
    summary: "Consistent forward tempo with status cleansing and catch-up teleport.",
  },
  "U-Rapidash": {
    powerName: "Blazing Sprint",
    summary: "Very high speed that gains extra value when lanes are crowded.",
  },
  "U-Rapidashgalar": {
    powerName: "Mystic Stampede",
    summary: "Once-per-race shield-piercing swap with defensive phase follow-up.",
  },
  "U-Unicorn 7": {
    powerName: "Perfect Poise",
    summary: "Elegant tie-breaking movement that avoids messy crowded finishes.",
  },
};

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

const BOARD_SOURCE_SIZE = {
  width: 900,
  height: 1354,
} as const;
type BoardRect = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
type BoardNormalizedRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};
const BOARD_ROWS = [
  { key: "23", laneLabel: "2/3", y1: 272, y2: 359 },
  { key: "4", laneLabel: "4", y1: 359, y2: 447 },
  { key: "5", laneLabel: "5", y1: 455, y2: 544 },
  { key: "6", laneLabel: "6", y1: 544, y2: 632 },
  { key: "7", laneLabel: "7", y1: 632, y2: 720 },
  { key: "8", laneLabel: "8", y1: 720, y2: 807 },
  { key: "9", laneLabel: "9", y1: 807, y2: 895 },
  { key: "10", laneLabel: "10", y1: 905, y2: 992 },
  { key: "1112", laneLabel: "11/12", y1: 992, y2: 1080 },
] as const;
const BOARD_COLUMNS = {
  show: [
    { suffix: "l", x1: 83, x2: 169, spotIndex: 0 },
    { suffix: "r", x1: 169, x2: 254, spotIndex: 1 },
  ],
  place: [
    { suffix: "l", x1: 270, x2: 355, spotIndex: 2 },
    { suffix: "r", x1: 355, x2: 441, spotIndex: 3 },
  ],
  win: [
    { suffix: "l", x1: 459, x2: 544, spotIndex: 4 },
    { suffix: "m", x1: 544, x2: 630, spotIndex: 5 },
    { suffix: "r", x1: 630, x2: 716, spotIndex: 6 },
  ],
} as const;
const SIDE_BET_RECTS = [
  { id: "blue_wins", label: "Blue Wins", x1: 95, x2: 247, y1: 118, y2: 199 },
  { id: "orange_wins", label: "Orange Wins", x1: 288, x2: 441, y1: 118, y2: 198 },
  { id: "red_wins", label: "Red Wins", x1: 471, x2: 617, y1: 121, y2: 201 },
  { id: "seven_5th_or_worse", label: "7 Finishes 5th or Worse", x1: 656, x2: 806, y1: 118, y2: 198 },
] as const;

const BET_TYPE_BY_SPOT_INDEX: Record<StandardBetSpotIndex, StandardBetType> = {
  0: "show",
  1: "show",
  2: "place",
  3: "place",
  4: "win",
  5: "win",
  6: "win",
};

type BoardStaticBetSpot = {
  id: string;
  label: string;
  kind: "standard" | "side";
  rect: BoardRect;
  laneLabel?: (typeof LANE_LABELS)[number];
  betType?: StandardBetType;
  spotIndex?: StandardBetSpotIndex;
};

const normalizeBoardRect = (rect: BoardRect): BoardNormalizedRect => ({
  left: (rect.x1 / BOARD_SOURCE_SIZE.width) * 100,
  top: (rect.y1 / BOARD_SOURCE_SIZE.height) * 100,
  width: ((rect.x2 - rect.x1) / BOARD_SOURCE_SIZE.width) * 100,
  height: ((rect.y2 - rect.y1) / BOARD_SOURCE_SIZE.height) * 100,
});

const BOARD_STATIC_SPOTS: BoardStaticBetSpot[] = [
  ...BOARD_ROWS.flatMap((row) => {
    const showSpots = BOARD_COLUMNS.show.map((column) => ({
      id: `show_${row.key}_${column.suffix}`,
      label: `${row.laneLabel} Show ${column.suffix.toUpperCase()}`,
      kind: "standard" as const,
      laneLabel: row.laneLabel,
      betType: "show" as const,
      spotIndex: column.spotIndex as StandardBetSpotIndex,
      rect: { x1: column.x1, x2: column.x2, y1: row.y1, y2: row.y2 },
    }));
    const placeSpots = BOARD_COLUMNS.place.map((column) => ({
      id: `place_${row.key}_${column.suffix}`,
      label: `${row.laneLabel} Place ${column.suffix.toUpperCase()}`,
      kind: "standard" as const,
      laneLabel: row.laneLabel,
      betType: "place" as const,
      spotIndex: column.spotIndex as StandardBetSpotIndex,
      rect: { x1: column.x1, x2: column.x2, y1: row.y1, y2: row.y2 },
    }));
    const winSpots = BOARD_COLUMNS.win.map((column) => ({
      id: `win_${row.key}_${column.suffix}`,
      label: `${row.laneLabel} Win ${column.suffix.toUpperCase()}`,
      kind: "standard" as const,
      laneLabel: row.laneLabel,
      betType: "win" as const,
      spotIndex: column.spotIndex as StandardBetSpotIndex,
      rect: { x1: column.x1, x2: column.x2, y1: row.y1, y2: row.y2 },
    }));
    return [...showSpots, ...placeSpots, ...winSpots];
  }),
  ...SIDE_BET_RECTS.map((sideBet) => ({
    id: sideBet.id,
    label: sideBet.label,
    kind: "side" as const,
    rect: { x1: sideBet.x1, x2: sideBet.x2, y1: sideBet.y1, y2: sideBet.y2 },
  })),
];

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
  betId: string;
  displayLabel: string;
  kind: "standard" | "side";
  laneLabel?: (typeof LANE_LABELS)[number];
  betType?: StandardBetType;
  spotIndex?: StandardBetSpotIndex;
  multiplier?: number;
  loss?: number;
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
  const [showSuperpowers, setShowSuperpowers] = useState(false);
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
  const [investmentInput, setInvestmentInput] = useState("30");
  const [hasSetInvestment, setHasSetInvestment] = useState(false);
  const [hasRaceStarted, setHasRaceStarted] = useState(false);
  const [finishersCount, setFinishersCount] = useState(0);
  const [placedBets, setPlacedBets] = useState<PlacedStandardBet[]>([]);
  const [settlementSummary, setSettlementSummary] = useState<string | null>(null);
  const betsRef = useRef<PlacedStandardBet[]>([]);
  const hasSettledRef = useRef(false);
  const boardImageRef = useRef<HTMLImageElement | null>(null);
  const powerStateRef = useRef<RacerPowerState[]>(Array.from({ length: 9 }, () => createInitialPowerState()));
  const crossedRedLineRef = useRef<Set<number>>(new Set());
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
    setHasRaceStarted(false);
    setFinishersCount(0);
    setPlacedBets([]);
    setSettlementSummary(null);
    streakRef.current = { laneIndex: null, count: 0 };
    hasSettledRef.current = false;
    powerStateRef.current = Array.from({ length: 9 }, () => createInitialPowerState());
    crossedRedLineRef.current = new Set();
  }, [stopRace]);

  useEffect(() => {
    betsRef.current = placedBets;
  }, [placedBets]);

  const boardSpotById = useMemo(
    () => new Map(BOARD_STATIC_SPOTS.map((spot) => [spot.id, spot])),
    []
  );

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
      if (bet.kind !== "standard" || !bet.betType || !bet.laneLabel) return false;
      if (bet.betType === "win") return winSet.has(bet.laneLabel);
      if (bet.betType === "place") return placeSet.has(bet.laneLabel);
      return showSet.has(bet.laneLabel);
    };

    let winnings = 0;
    let losses = 0;
    betsRef.current.forEach((bet) => {
      if (bet.kind !== "standard" || bet.multiplier === undefined || bet.loss === undefined) {
        return;
      }
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
    setPlacedBets([]);
  }, []);

  // PSEUDOCODE: On interval, roll dice -> choose lane -> apply streak bonus -> move racer -> stop if someone finishes.
  const startRace = (intervalMs = 650) => {
    if (raceSlots.length === 0) {
      return;
    }

    stopRace();
    setPositions(Array(9).fill(0));
    setWinnerLane(null);
    setLastRoll(null);
    setHasRaceStarted(true);
    setFinishersCount(0);
    setSettlementSummary(null);
    hasSettledRef.current = false;
    powerStateRef.current = Array.from({ length: 9 }, () => createInitialPowerState());
    crossedRedLineRef.current = new Set();
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
      const baseMove = 1 + (getsBonus ? BONUS_MOVES_BY_LANE[laneIndex] : 0);

      setLastRoll({
        die1,
        die2,
        sum,
        laneLabel: LANE_LABELS[laneIndex],
        move: baseMove,
      });

      setPositions((currentPositions) => {
        const nextPositions = [...currentPositions];
        const powerState = powerStateRef.current.map((state) => ({
          ...state,
          usedFlags: { ...state.usedFlags },
        }));
        const getPowerKey = (index: number) => POWER_KEY_BY_RACER_ID[raceSlots[index]?.racer.id ?? ""];
        const addShield = (index: number, amount: number) => {
          powerState[index].shield = Math.min(2, powerState[index].shield + amount);
        };
        const moveForward = (index: number, amount: number) => {
          if (amount <= 0) return;
          nextPositions[index] = Math.min(FINISH_SPACE, nextPositions[index] + amount);
        };
        const findLeaderIndex = () => {
          const maxPosition = Math.max(...nextPositions);
          return nextPositions.findIndex((position) => position === maxPosition);
        };
        const getImmediateAheadIndex = (index: number) => {
          const current = nextPositions[index];
          let candidate: number | null = null;
          let candidatePos = Infinity;
          nextPositions.forEach((position, racerIndex) => {
            if (racerIndex === index || position <= current) return;
            if (position < candidatePos || (position === candidatePos && racerIndex > (candidate ?? -1))) {
              candidate = racerIndex;
              candidatePos = position;
            }
          });
          return candidate;
        };
        const getNearestAheadWithin = (index: number, range: number) => {
          const current = nextPositions[index];
          let candidate: number | null = null;
          let bestGap = Infinity;
          nextPositions.forEach((position, racerIndex) => {
            if (racerIndex === index || position <= current) return;
            const gap = position - current;
            if (gap > range) return;
            if (gap < bestGap || (gap === bestGap && racerIndex > (candidate ?? -1))) {
              candidate = racerIndex;
              bestGap = gap;
            }
          });
          return candidate;
        };
        const pullBack = (targetIndex: number, amount: number) => {
          if (amount <= 0) return false;
          if (powerState[targetIndex].phase) {
            powerState[targetIndex].phase = false;
            return false;
          }
          if (powerState[targetIndex].shield > 0) {
            powerState[targetIndex].shield -= 1;
            return false;
          }
          nextPositions[targetIndex] = Math.max(0, nextPositions[targetIndex] - amount);
          powerState[targetIndex].wasPulledBack = true;
          return true;
        };
        const swapWith = (sourceIndex: number, targetIndex: number, ignoreShield = false) => {
          if (powerState[targetIndex].phase) {
            powerState[targetIndex].phase = false;
            return false;
          }
          if (!ignoreShield && powerState[targetIndex].shield > 0) {
            powerState[targetIndex].shield -= 1;
            return false;
          }
          const temp = nextPositions[sourceIndex];
          nextPositions[sourceIndex] = nextPositions[targetIndex];
          nextPositions[targetIndex] = temp;
          return true;
        };
        const applyPower = (index: number, trigger: SuperpowerTrigger) => {
          const key = getPowerKey(index);
          if (!key) return;

          switch (key) {
            case "alex":
              if (trigger === "back-to-back") { moveForward(index, 2); addShield(index, 1); }
              else { moveForward(index, 1); if (nextPositions[index] === Math.min(...nextPositions)) moveForward(index, 1); }
              break;
            case "flash":
              if (trigger === "back-to-back") { moveForward(index, 3); powerState[index].fatigue = Math.min(2, powerState[index].fatigue + 1); }
              else { moveForward(index, 2); }
              break;
            case "george":
              if (trigger === "back-to-back") { moveForward(index, 2); const target = getNearestAheadWithin(index, 1); if (target !== null) pullBack(target, 1); }
              else { moveForward(index, 1); addShield(index, 1); }
              break;
            case "goldship":
              if (trigger === "back-to-back") {
                const roll = Math.floor(Math.random() * 6) + 1;
                if (roll <= 2) moveForward(index, 1);
                else if (roll <= 4) moveForward(index, 3);
                else if (roll === 5) { moveForward(index, 4); powerState[index].fatigue = Math.min(2, powerState[index].fatigue + 1); }
                else { pullBack(index, 1); addShield(index, 1); }
              } else {
                const roll = Math.floor(Math.random() * 4) + 1;
                if (roll === 1) moveForward(index, 1);
                else if (roll === 2) moveForward(index, 2);
                else if (roll === 3) { moveForward(index, 2); addShield(index, 1); }
                else { const target = getImmediateAheadIndex(index); if (target !== null) swapWith(index, target); else moveForward(index, 2); }
              }
              break;
            case "hornet":
              if (trigger === "back-to-back") { const target = getNearestAheadWithin(index, 3); if (target !== null) nextPositions[index] = Math.max(0, nextPositions[target] - 1); else moveForward(index, 2); }
              else { moveForward(index, 1); }
              break;
            case "jack_sparrow":
              if (trigger === "back-to-back") { const target = getNearestAheadWithin(index, 3); if (target !== null) nextPositions[index] = Math.min(FINISH_SPACE, nextPositions[target] + 1); else moveForward(index, 2); }
              else { moveForward(index, 2); }
              break;
            case "jax":
              if (trigger === "back-to-back") { moveForward(index, 2); if (nextPositions.some((p, i) => i !== index && p === nextPositions[index])) { moveForward(index, 1); addShield(index, 1); } }
              else if (!powerState[index].usedFlags.lastCallSwap) { const sorted = [...nextPositions].map((position, i) => ({ position, i })).sort((a, b) => a.position - b.position || b.i - a.i); if (sorted[1]) swapWith(index, sorted[1].i); else moveForward(index, 2); powerState[index].usedFlags.lastCallSwap = true; }
              break;
            case "kinger":
            case "knight":
            case "master_chief":
            case "miku":
            case "monoco":
            case "pikmin_trio":
            case "professor_x":
            case "shadow":
            case "sonic":
            case "soldier":
            case "space_marine":
            case "stephen_hawking":
            case "steve":
            case "surge":
            case "teto":
            case "vincent_van_gogh":
            case "rainbow_dash":
            case "ponyta":
            case "ponyta_galar":
            case "rapidash":
            case "rapidash_galar":
            case "rarity": {
              // Compact but functional implementation for the remaining powers.
              if (key === "kinger") { if (trigger === "back-to-back") moveForward(index, 1); else { moveForward(index, 2); addShield(index, 1); } break; }
              if (key === "knight") { if (trigger === "back-to-back") { moveForward(index, 2); addShield(index, 1); } else { moveForward(index, 1); addShield(index, 1); } break; }
              if (key === "master_chief") { if (trigger === "back-to-back") { moveForward(index, 2); const t = getNearestAheadWithin(index, 1); if (t !== null) pullBack(t, 1); addShield(index, 1); } else moveForward(index, 2); break; }
              if (key === "miku") { if (trigger === "back-to-back") { powerState[index].echo = Math.min(3, powerState[index].echo + 1); moveForward(index, 1 + powerState[index].echo); } else { moveForward(index, 1); powerState[index].echo = Math.min(3, powerState[index].echo + 1); } break; }
              if (key === "monoco") { if (trigger === "back-to-back") moveForward(index, 2); else { moveForward(index, 2); powerState[index].phase = true; } break; }
              if (key === "pikmin_trio") { if (trigger === "back-to-back") moveForward(index, 2); else moveForward(index, 1); break; }
              if (key === "professor_x") { if (trigger === "back-to-back") moveForward(index, 1); else { moveForward(index, 1); addShield(index, 1); } break; }
              if (key === "shadow") { if (trigger === "back-to-back") { if (!powerState[index].usedFlags.shadowTeleport && (Math.max(...nextPositions) - nextPositions[index] >= 3)) { const leader = findLeaderIndex(); nextPositions[index] = Math.max(0, nextPositions[leader] - 1); powerState[index].usedFlags.shadowTeleport = true; } else moveForward(index, 2); } else moveForward(index, 2); break; }
              if (key === "sonic") { if (trigger === "back-to-back") moveForward(index, 3); else moveForward(index, 2); break; }
              if (key === "soldier") { if (trigger === "back-to-back") { moveForward(index, 2); addShield(index, 1); } else moveForward(index, powerState[index].wasPulledBack ? 2 : 1); break; }
              if (key === "space_marine") { if (trigger === "back-to-back") { const t = getNearestAheadWithin(index, 2); if (t !== null) pullBack(t, 1); moveForward(index, 1); } else moveForward(index, 1); break; }
              if (key === "stephen_hawking") { if (trigger === "back-to-back") { const d = Math.max(...nextPositions) - nextPositions[index]; moveForward(index, Math.min(3, 1 + Math.ceil(d / 3) + powerState[index].gravity)); powerState[index].gravity = 0; } else { moveForward(index, 1); powerState[index].gravity = Math.min(2, powerState[index].gravity + 1); } break; }
              if (key === "steve") { if (trigger === "back-to-back") moveForward(index, 1); else moveForward(index, 2); break; }
              if (key === "surge") { if (trigger === "back-to-back") { moveForward(index, powerState[index].overchargeReady ? 4 : 1); powerState[index].overchargeReady = !powerState[index].overchargeReady; } else { moveForward(index, 2); powerState[index].overchargeReady = true; } break; }
              if (key === "teto") { if (trigger === "back-to-back") { moveForward(index, 2); addShield(index, 1); } else { moveForward(index, 1); addShield(index, 1); } break; }
              if (key === "vincent_van_gogh") { moveForward(index, trigger === "back-to-back" ? 2 : 2); break; }
              if (key === "rainbow_dash") { if (trigger === "back-to-back") { if (!powerState[index].usedFlags.rainboomUsed) { moveForward(index, 5); powerState[index].usedFlags.rainboomUsed = true; } else moveForward(index, 2); } else moveForward(index, 2); break; }
              if (key === "ponyta") { if (trigger === "back-to-back") moveForward(index, 3); else { moveForward(index, 2); addShield(index, 1); } break; }
              if (key === "ponyta_galar") { if (trigger === "back-to-back") { moveForward(index, 2); if (powerState[index].fatigue > 0) powerState[index].fatigue -= 1; else addShield(index, 1); } else { const t = getImmediateAheadIndex(index); if (t !== null) nextPositions[index] = nextPositions[t]; else moveForward(index, 2); } break; }
              if (key === "rapidash") { if (trigger === "back-to-back") moveForward(index, 4); else moveForward(index, 1); break; }
              if (key === "rapidash_galar") { if (trigger === "back-to-back" && !powerState[index].usedFlags.stampedeUsed) { const t = getNearestAheadWithin(index, 3); if (t !== null) swapWith(index, t, true); else moveForward(index, 3); addShield(index, 1); powerState[index].usedFlags.stampedeUsed = true; } else if (trigger === "back-to-back") moveForward(index, 3); else { moveForward(index, 2); powerState[index].phase = true; } break; }
              if (key === "rarity") { if (trigger === "back-to-back") { moveForward(index, 1); powerState[index].poiseActive = true; } else moveForward(index, 2); break; }
              break;
            }
            default:
              break;
          }
        };

        // Last-call debouncer reset when racer leaves last place.
        const currentMin = Math.min(...nextPositions);
        nextPositions.forEach((position, index) => {
          if (position > currentMin) {
            powerState[index].lastCallLocked = false;
          }
        });

        const fatiguePenalty = Math.min(1, powerState[laneIndex].fatigue + powerState[laneIndex].stagger);
        const moveAfterPenalty = Math.max(0, baseMove - fatiguePenalty);
        if (powerState[laneIndex].fatigue > 0) powerState[laneIndex].fatigue -= 1;
        if (powerState[laneIndex].stagger > 0) powerState[laneIndex].stagger -= 1;

        const previousPosition = nextPositions[laneIndex];
        moveForward(laneIndex, moveAfterPenalty);
        const crossedByBaseMove = previousPosition < RED_LINE_SPACE && nextPositions[laneIndex] >= RED_LINE_SPACE;

        if (showSuperpowers && getsBonus) {
          applyPower(laneIndex, "back-to-back");
        }

        if (showSuperpowers && crossedByBaseMove) {
          const minPosition = Math.min(...nextPositions);
          const tiedLast = nextPositions
            .map((position, index) => ({ position, index }))
            .filter(({ position, index }) => position === minPosition && index !== laneIndex)
            .sort((a, b) => b.index - a.index)
            .map(({ index }) => index);
          tiedLast.forEach((index) => {
            if (powerState[index].lastCallLocked) return;
            powerState[index].lastCallLocked = true;
            applyPower(index, "last-call");
          });
        }

        nextPositions.forEach((position, index) => {
          if (position >= RED_LINE_SPACE) crossedRedLineRef.current.add(index);
        });
        const nextFinishersCount = crossedRedLineRef.current.size;
        setFinishersCount(nextFinishersCount);

        powerStateRef.current = powerState;
        const finishIndex = nextPositions.findIndex((position) => position >= FINISH_SPACE);
        if (finishIndex !== -1) {
          setWinnerLane((currentWinner) => currentWinner ?? finishIndex + 1);
        }

        if (nextFinishersCount >= 3) {
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
    setPlacedBets([]);
    setFinishersCount(0);
    setRaceSlots(createRaceSlots(racers, mode === "choose"));
    powerStateRef.current = Array.from({ length: 9 }, () => createInitialPowerState());
    crossedRedLineRef.current = new Set();
  }, [createRaceSlots, mode, racers, resetRace]);

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

  const applyInvestment = () => {
    const parsed = Number(investmentInput);
    if (!Number.isFinite(parsed) || parsed < 1) {
      setSettlementSummary("Enter a valid starting bankroll (minimum $1).");
      return;
    }
    setBankroll(Math.floor(parsed));
    setHasSetInvestment(true);
    setSettlementSummary(null);
  };

  const isBettingOpen = hasSetInvestment && isRacing && finishersCount < 3;
  const canShowBettingBoard = hasSetInvestment && hasRaceStarted;

  const toggleBoardBet = (betId: string) => {
    if (!isBettingOpen) {
      setSettlementSummary(
        !hasSetInvestment
          ? "Set your bankroll first."
          : !hasRaceStarted
            ? "Start the race to unlock betting."
            : finishersCount >= 3
              ? "Betting is closed: three racers have crossed the red line."
              : "Betting is only open while the race is running."
      );
      return;
    }

    const spot = boardSpotById.get(betId);
    if (!spot) {
      return;
    }

    const existing = placedBets.find((bet) => bet.betId === betId);
    if (existing) {
      setPlacedBets((current) =>
        current.filter((bet) => bet.betId !== betId)
      );
      setSettlementSummary(null);
      return;
    }

    if (placedBets.length >= PLAYER_TOKENS.length) {
      setSettlementSummary("You can only lock in 5 bets total.");
      return;
    }

    const nextToken = PLAYER_TOKENS.find(
      (token) => !placedBets.some((bet) => bet.tokenId === token.id)
    );
    if (!nextToken) {
      setSettlementSummary("No tokens available.");
      return;
    }

    const baseBet: PlacedStandardBet = {
      tokenId: nextToken.id,
      tokenValue: nextToken.value,
      betId: spot.id,
      displayLabel: spot.label,
      kind: spot.kind,
    };
    if (
      spot.kind === "standard" &&
      spot.laneLabel !== undefined &&
      spot.spotIndex !== undefined
    ) {
      const [multiplier, loss] = STANDARD_MATRIX[spot.laneLabel][spot.spotIndex];
      baseBet.laneLabel = spot.laneLabel;
      baseBet.betType = BET_TYPE_BY_SPOT_INDEX[spot.spotIndex];
      baseBet.spotIndex = spot.spotIndex;
      baseBet.multiplier = multiplier;
      baseBet.loss = loss;
    }
    setPlacedBets((current) => [...current, baseBet]);
    setSettlementSummary(null);
  };

  const handleBoardClick = (event: MouseEvent<HTMLDivElement>) => {
    const boardBounds = boardImageRef.current?.getBoundingClientRect();
    if (!boardBounds) {
      return;
    }
    const localX = ((event.clientX - boardBounds.left) / boardBounds.width) * BOARD_SOURCE_SIZE.width;
    const localY = ((event.clientY - boardBounds.top) / boardBounds.height) * BOARD_SOURCE_SIZE.height;
    const hitSpot = BOARD_STATIC_SPOTS.find(
      (spot) =>
        localX >= spot.rect.x1 &&
        localX <= spot.rect.x2 &&
        localY >= spot.rect.y1 &&
        localY <= spot.rect.y2
    );
    if (hitSpot) {
      toggleBoardBet(hitSpot.id);
    }
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
          <button
            type="button"
            onClick={() => setShowSuperpowers((previous) => !previous)}
            style={{
              border: "1px solid #fff",
              backgroundColor: showSuperpowers ? "#a855f7" : "rgba(255, 255, 255, 0.12)",
              color: "#fff",
              borderRadius: "999px",
              padding: "0.4rem 0.9rem",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {showSuperpowers ? "Superpowers: On" : "Superpowers: Off"}
          </button>
          <small style={{ opacity: 0.9 }}>
            Optional mode: show power names and quick summaries under racer portraits.
          </small>
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
              disabled={isRacing || !hasRacersAvailable || !hasSetInvestment}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "rgba(100, 116, 139, 0.6)"
                  : "#22c55e",
                color: isRacing ? "#e2e8f0" : "#052e16",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                fontWeight: 700,
                cursor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              {isRacing ? "Race in progress..." : "Start Race"}
            </button>
            <button
              type="button"
              onClick={() => startRace(950)}
              disabled={isRacing || !hasRacersAvailable || !hasSetInvestment}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "rgba(148, 163, 184, 0.45)"
                  : "#60a5fa",
                color: isRacing || !hasRacersAvailable ? "#e2e8f0" : "#082f49",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                cursor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "not-allowed"
                  : "pointer",
                fontWeight: 700,
              }}
            >
              Slow Race
            </button>
            <button
              type="button"
              onClick={() => startRace(350)}
              disabled={isRacing || !hasRacersAvailable || !hasSetInvestment}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "rgba(148, 163, 184, 0.45)"
                  : "#f97316",
                color: isRacing || !hasRacersAvailable ? "#e2e8f0" : "#431407",
                borderRadius: "999px",
                padding: "0.45rem 0.9rem",
                cursor: isRacing || !hasRacersAvailable || !hasSetInvestment
                  ? "not-allowed"
                  : "pointer",
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
            <label>
              Starting bankroll{" "}
              <input
                type="number"
                min={1}
                value={investmentInput}
                disabled={isRacing}
                onChange={(event) => setInvestmentInput(event.target.value)}
                style={{ width: "100px" }}
              />
            </label>
            <button
              type="button"
              onClick={applyInvestment}
              disabled={isRacing}
              style={{
                border: "1px solid #fff",
                backgroundColor: isRacing ? "rgba(148,163,184,0.45)" : "#60a5fa",
                color: "#111827",
                borderRadius: "999px",
                padding: "0.4rem 0.85rem",
                fontWeight: 700,
                cursor: isRacing ? "not-allowed" : "pointer",
              }}
            >
              Set Bankroll
            </button>
            <small style={{ opacity: 0.9 }}>
              {!hasSetInvestment
                ? "Set bankroll first."
                : !hasRaceStarted
                  ? "Start a race to unlock betting."
                  : isBettingOpen
                    ? `Betting open (${placedBets.length}/5 selected).`
                    : finishersCount >= 3
                      ? "Betting closed: three racers crossed the red line."
                      : "Betting closed."}
            </small>
            {winnerLane && (
              <strong>
                Winner: Lane {winnerLane} ({raceSlots[winnerLane - 1]?.racer.name ?? "Unknown"})
              </strong>
            )}
          </div>

          {canShowBettingBoard ? (
            <div
              style={{
                marginBottom: "0.85rem",
                padding: "0.75rem",
                borderRadius: "12px",
                backgroundColor: "rgba(15, 23, 42, 0.68)",
                border: "1px solid rgba(255,255,255,0.24)",
              }}
            >
            <h2 style={{ marginTop: 0, marginBottom: "0.45rem", fontSize: "1rem" }}>Betting Board</h2>
            <p style={{ marginTop: 0, marginBottom: "0.5rem" }}>
              Bankroll: <strong>${bankroll}</strong> · Betting status:{" "}
              <strong style={{ color: "#86efac" }}>
                {isBettingOpen
                  ? "OPEN (race in progress)"
                  : finishersCount >= 3
                    ? "CLOSED (three racers crossed the red line)"
                    : "CLOSED"}
              </strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.65rem" }}>
              <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                Click squares on the board image to toggle bets while open ({placedBets.length}/5 selected).
              </span>
            </div>

            <div
              style={{
                position: "relative",
                width: "80%",
                maxWidth: "900px",
                margin: "0 auto",
                cursor: isBettingOpen ? "pointer" : "not-allowed",
              }}
              onClick={handleBoardClick}
            >
              <img
                ref={boardImageRef}
                src={bettingBoardImage}
                alt="Ready Set Bet betting board"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
              {BOARD_STATIC_SPOTS.map((spot) => {
                const normalizedRect = normalizeBoardRect(spot.rect);
                const placedBet = placedBets.find((bet) => bet.betId === spot.id);
                const standardDetails =
                  spot.kind === "standard" && spot.spotIndex !== undefined && spot.laneLabel !== undefined
                    ? (() => {
                        const [multiplier, loss] = STANDARD_MATRIX[spot.laneLabel][spot.spotIndex];
                        return `${spot.label} (${multiplier}x / -${loss})`;
                      })()
                    : `${spot.label} (side bet)`;
                return (
                  <div
                    key={spot.id}
                    aria-hidden="true"
                    title={standardDetails}
                    style={{
                      position: "absolute",
                      left: `${normalizedRect.left}%`,
                      top: `${normalizedRect.top}%`,
                      width: `${normalizedRect.width}%`,
                      height: `${normalizedRect.height}%`,
                      borderRadius: "6px",
                      border: placedBet ? "2px solid #22c55e" : "1px solid rgba(255,255,255,0.45)",
                      backgroundColor: placedBet ? "rgba(34, 197, 94, 0.5)" : "rgba(15, 23, 42, 0.18)",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    {placedBet ? `$${placedBet.tokenValue}` : ""}
                  </div>
                );
              })}
            </div>

            {settlementSummary && (
              <p style={{ marginBottom: 0.15, color: "#fde68a", fontWeight: 700 }}>{settlementSummary}</p>
            )}
            {placedBets.length > 0 && (
              <ul style={{ marginBottom: 0, paddingLeft: "1.1rem" }}>
                {placedBets.map((bet) => (
                  <li key={`${bet.tokenId}-${bet.betId}`}>
                    ${bet.tokenValue} on {bet.displayLabel}
                    {bet.kind === "standard" && bet.betType && bet.multiplier !== undefined && bet.loss !== undefined
                      ? ` (${bet.betType.toUpperCase()} ${bet.laneLabel} ${bet.multiplier}x / -${bet.loss})`
                      : " (side bet)"}
                  </li>
                ))}
              </ul>
            )}
            </div>
          ) : (
            <div
              style={{
                marginBottom: "0.85rem",
                padding: "0.75rem",
                borderRadius: "12px",
                backgroundColor: "rgba(15, 23, 42, 0.68)",
                border: "1px solid rgba(255,255,255,0.24)",
              }}
            >
              <h2 style={{ marginTop: 0, marginBottom: "0.45rem", fontSize: "1rem" }}>Betting Board</h2>
              <p style={{ margin: 0, color: "#fde68a", fontWeight: 700 }}>
                {hasSetInvestment
                  ? "Start the race to load the betting board."
                  : "Set your bankroll to unlock the betting board."}
              </p>
            </div>
          )}

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
                      objectFit: "contain",
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
              {showSuperpowers && SUPERPOWERS_BY_RACER_ID[racer.id] && (
                <div style={{ textAlign: "center", fontSize: "0.78rem", lineHeight: 1.35 }}>
                  <div style={{ fontWeight: 700, color: "#6d28d9" }}>
                    {SUPERPOWERS_BY_RACER_ID[racer.id]?.powerName}
                  </div>
                  <div style={{ color: "#334155" }}>
                    {SUPERPOWERS_BY_RACER_ID[racer.id]?.summary}
                  </div>
                </div>
              )}
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
