import { FINISH_SPACE, getWinningLaneIndex } from "./raceRules";

describe("getWinningLaneIndex", () => {
  it("keeps the race open while every racer is short of the finish", () => {
    expect(getWinningLaneIndex([0, FINISH_SPACE - 1, 3])).toBeNull();
  });

  it("ends the race as soon as the first racer reaches the finish", () => {
    expect(getWinningLaneIndex([4, FINISH_SPACE, 8])).toBe(1);
  });

  it("uses lane order if multiple racers finish during one update", () => {
    expect(getWinningLaneIndex([FINISH_SPACE + 1, 2, FINISH_SPACE])).toBe(0);
  });
});
