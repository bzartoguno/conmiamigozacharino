export const FINISH_SPACE = 15;

/** Returns the zero-based lane index of the first racer at the finish, or null. */
export const getWinningLaneIndex = (
  positions: readonly number[],
  finishSpace = FINISH_SPACE
): number | null => {
  const winnerIndex = positions.findIndex((position) => position >= finishSpace);
  return winnerIndex === -1 ? null : winnerIndex;
};
