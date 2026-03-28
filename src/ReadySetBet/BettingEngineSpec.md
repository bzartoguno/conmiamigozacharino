# Ready Set Bet — Betting Engine Implementation Spec

This document translates the betting-only rules handoff into implementable data structures, validation rules, and resolution logic.

## 1) Scope

This spec covers:
- Bet placement legality.
- Betting window locking.
- Win/loss evaluation for standard bets, color bets, prop bets, and exotic finish bets.
- Payout/loss application, including bonus token behavior.
- House betting variant occupancy exception.

This spec does **not** provide complete canonical card databases for all Prop/VIP cards because the rulebook scan is incomplete for full card text.

---

## 2) Core domain model

```ts
type HorseLabel = "2/3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11/12";

type BetCategory = "standard" | "color" | "special" | "prop" | "exotic";
type StandardKind = "show" | "place" | "win";
type ColorKind = "blueWins" | "orangeWins" | "redWins";
type SpecialKind = "sevenFinishesFifthOrWorse";

type Money = number; // integer dollars

type BetTokenBaseValue = 2 | 3 | 4 | 5 | 6 | 7;

interface BonusTokenRules {
  /** extra loss charged on losing bets; null for value-2 negate token */
  extraLossOnLose: number | null;
  /** if true, losing spot penalty is ignored */
  negatesSpotLoss: boolean;
}

interface BetToken {
  id: string;
  ownerPlayerId: string;
  baseValue: BetTokenBaseValue;
  isBonus: boolean;
  bonusRules?: BonusTokenRules;
}

interface BetSpot {
  id: string;
  category: BetCategory;
  multiplier: number;
  spotLoss: number; // red-circle amount; 0 if none

  horse?: HorseLabel;          // standard bets
  standardKind?: StandardKind; // standard bets
  colorKind?: ColorKind;       // color bets
  specialKind?: SpecialKind;   // 7 finishes 5th+ bet

  propCardId?: string;
  exoticCardId?: string;
}

interface PlacedBet {
  tokenId: string;
  ownerPlayerId: string;
  spotId: string;
  timestampMs: number;
  placedByHouseToken: boolean;
}

interface PlayerState {
  id: string;
  money: Money;
  tokens: BetToken[];
  faceUpVipIds: string[];
}

interface RaceResult {
  /** final distance reached by each horse at race end */
  finalDistanceByHorse: Record<HorseLabel, number>;
  /** standings groups, highest distance first; ties grouped */
  rankGroups: HorseLabel[][];
}
```

---

## 3) Board definition

### 3.1 Standard grid spots

For each horse row, define 7 spots in this order:
`showLeft, showRight, placeLeft, placeRight, winLeft, winMid, winRight`.

```ts
type StandardRow = [
  [multiplier: number, loss: number],
  [multiplier: number, loss: number],
  [multiplier: number, loss: number],
  [multiplier: number, loss: number],
  [multiplier: number, loss: number],
  [multiplier: number, loss: number],
  [multiplier: number, loss: number]
];

const STANDARD_MATRIX: Record<HorseLabel, StandardRow> = {
  "2/3":  [[4,4],[4,3],[5,4],[5,3],[7,2],[8,2],[9,2]],
  "4":    [[3,1],[3,0],[4,1],[4,0],[5,1],[6,0],[7,0]],
  "5":    [[2,3],[2,0],[2,2],[3,2],[4,2],[4,0],[5,0]],
  "6":    [[1,2],[1,0],[2,5],[2,4],[3,2],[3,1],[3,0]],
  "7":    [[1,3],[1,1],[2,6],[2,5],[3,4],[3,3],[3,2]],
  "8":    [[1,2],[1,0],[2,5],[2,4],[3,2],[3,1],[3,0]],
  "9":    [[2,3],[2,0],[2,2],[3,2],[4,2],[4,0],[5,0]],
  "10":   [[3,1],[3,0],[4,1],[4,0],[5,1],[6,0],[7,0]],
  "11/12":[[4,4],[4,3],[5,4],[5,3],[7,2],[8,2],[9,2]],
};
```

> Stored `loss` values are positive magnitudes; subtract them from money on loss.

### 3.2 Color + special spots

```ts
const COLOR_AND_SPECIAL_SPOTS = {
  blueWins: { multiplier: 5, loss: 1 },
  orangeWins: { multiplier: 3, loss: 1 },
  redWins: { multiplier: 2, loss: 1 },
  sevenFinishesFifthOrWorse: {
    multiplier: 4,
    loss: null, // unresolved from parsed text; verify from component art
  },
} as const;
```

### 3.3 Exotic cards

```ts
const EXOTIC_DEFS = {
  tightRace:    { multiplier: 6, loss: 2 },
  lateStart:    { multiplier: 4, loss: 1 },
  photoFinish:  { multiplier: 5, loss: 3 },
  byANose:      { multiplier: 5, loss: 3 },
  blowOut:      { multiplier: 4, loss: 2 },
} as const;
```

---

## 4) Betting window state machine

```ts
type BettingWindowState = "open" | "closed";

interface BettingWindow {
  state: BettingWindowState;
  noMoreBetsCalled: boolean;
  raceEnded: boolean;
}
```

Close betting immediately when **either** occurs first:
1. House calls “No more bets!” (triggered when third horse crosses red line).
2. Any horse reaches finish space 15 (race ends immediately).

All placement attempts while `state === "closed"` are invalid unless a VIP explicitly overrides timing.

---

## 5) Placement validation

Given `(playerId, tokenId, spotId, timestamp)`:

1. Validate window open (or VIP timing exception).
2. Token must belong to player and be unused this race.
3. Player cannot place more than one of their own tokens on same spot.
4. If spot currently contains another normal-player token, reject unless:
   - VIP allows piggyback/stacking for this token, or
   - existing token is a House token (House tokens do not block).
5. Prop card spot: only one token total unless VIP override.
6. Exotic card rule: player may not place more than one of their own tokens on the same exotic card.
7. Once placed, token cannot move/remove.

---

## 6) Finish classification (Win / Place / Show)

Input: `rankGroups` ordered from first to last, where each group contains tied horses.

Algorithm:
1. `winSet = rankGroups[0]`.
2. `placeSet = union(rankGroups[0], rankGroups[1] if exists)`.
3. Show:
   - If `rankGroups[1]` exists and has size >= 2 (tie for second), then
     `showSet = union(rankGroups[0], rankGroups[1])` and no lower ranks show.
   - Else
     `showSet = union(rankGroups[0], rankGroups[1]?, rankGroups[2]?)`.

This matches rulebook tie handling.

---

## 7) Side-bet evaluation rules

### 7.1 Color winners
- `blueWins` succeeds if any blue horse is in first-place tie group.
- `orangeWins` succeeds if any orange horse is in first-place tie group.
- `redWins` succeeds if any red horse is in first-place tie group.

(Implement with a static mapping `HorseLabel -> Color` sourced from board art.)

### 7.2 “7 finishes 5th or worse”
- Count how many horses finish strictly ahead of horse `7`.
- Bet wins if count >= 4.

### 7.3 Prop cards
Each prop card should compile into a predicate:

```ts
type PropPredicate = (result: RaceResult) => boolean;
```

Common semantics:
- "A finishes ahead of B" means `distance(A) > distance(B)`.
- If tied (`distance(A) === distance(B)`), prop loses.
- "A ahead of all in set S" requires strict `>` against each member of `S`.

### 7.4 Exotic cards
Using `finalDistanceByHorse` and `rankGroups`:
- **Tight Race**: every horse distance >= 6.
- **Late Start**: at least 2 horses distance <= 3.
- **Photo Finish**: distance gap between 2nd-place distance and 3rd-place distance <= 3.
  - If tie for 2nd exists, 2nd and 3rd distances are equal -> qualifies.
- **By a Nose**: gap between 1st-place distance and 2nd-place distance === 1.
- **Blow Out**: gap between 1st-place distance and 2nd-place distance > 5.

For ties, define rank distances by group index (`rankGroups[0]` first-place group, `rankGroups[1]` second-place group, etc.).

---

## 8) Payout/loss resolution

Resolve in this order:
1. Compute all bet outcomes (`won/lost`) from locked board state + race result.
2. Credit all winnings.
3. Charge all losses.
4. Clamp money floor at 0 (no debt).

Formulas:
- Win payout: `token.baseValue * spot.multiplier`.
- Standard loss: `spot.spotLoss`.
- If spot has no red circle, `spotLoss = 0`.

Bonus token loss extension:
- If bonus token is value-2 negate type: losing cost ignores spot loss.
- Otherwise losing cost is `spotLoss + bonus.extraLossOnLose`.

If exact bonus extra-loss values are unknown from assets, keep them data-driven and injected from verified component references.

---

## 9) House variant rules

If House participates:
- House pre-places 6 house tokens on 6 different spots.
- House tokens do not close spots for normal players.
- House tokens resolve with same payout/loss formulas.
- House starts with `$18` and no VIP cards.

Implementation tip: model occupancy by token class:
- `normalOccupant?: tokenId`
- `houseOccupant?: tokenId`

Normal placement checks only block on `normalOccupant` unless VIP override.

---

## 10) Recommended service boundaries

```ts
interface BettingPlacementService {
  validatePlacement(input: PlacementAttempt, state: BettingState): PlacementValidation;
  applyPlacement(input: PlacementAttempt, state: BettingState): BettingState;
}

interface BetOutcomeService {
  classifyFinish(result: RaceResult): { winSet: Set<HorseLabel>; placeSet: Set<HorseLabel>; showSet: Set<HorseLabel> };
  evaluateBet(placedBet: PlacedBet, state: BettingState, result: RaceResult): { won: boolean; payout: number; loss: number };
}

interface SettlementService {
  settleRace(state: BettingState, result: RaceResult): SettlementSummary;
}
```

Keep unresolved rulebook fields configurable in one schema file (prop deck text, full VIP deck text, special-spot missing loss, bonus-token loss table).

---

## 11) Known unresolved constants to verify from physical/asset references

1. Complete text/database of all 28 Prop cards.
2. Complete text/database of all 32 VIP cards.
3. Bonus token extra-loss values for 3/4/5/6/7 tokens.
4. Exact red-line track-space index.
5. Exact red-circle loss on the “7 finishes 5th or worse” spot.

Until verified, expose these as external config with strict runtime validation.
