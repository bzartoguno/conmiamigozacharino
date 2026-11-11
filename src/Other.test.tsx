import { fireEvent, render, screen, act } from "@testing-library/react";
import { CardDraw, DiceRolling, rollDice } from "./Other";
import { tarotCards } from "./tarotCards";

afterEach(() => { jest.restoreAllMocks(); jest.useRealTimers(); localStorage.clear(); });

test("advantage and disadvantage keep the correct modified total", () => {
  const random = jest.spyOn(Math, "random");
  random.mockReturnValueOnce(0).mockReturnValueOnce(.99);
  expect(rollDice(20, 1, -2, "advantage")).toEqual({ sets: [[1], [20]], totals: [-1, 18], chosen: 1 });
  random.mockReturnValueOnce(.99).mockReturnValueOnce(0);
  expect(rollDice(20, 1, 3, "disadvantage").chosen).toBe(1);
});

test("dice form animates before revealing the modified total", () => {
  jest.useFakeTimers();
  jest.spyOn(Math, "random").mockReturnValue(0);
  render(<DiceRolling onBack={() => {}} />);
  fireEvent.change(screen.getByLabelText("Dice"), { target: { value: "6" } });
  fireEvent.change(screen.getByLabelText("Number of dice"), { target: { value: "2" } });
  fireEvent.change(screen.getByLabelText("Modifier"), { target: { value: "3" } });
  fireEvent.click(screen.getByRole("button", { name: "Roll dice" }));
  expect(screen.getByRole("button", { name: "Rolling…" })).toBeDisabled();
  expect(screen.queryByText("Roll 1: 1 + 1 → 5 (kept)")).not.toBeInTheDocument();
  act(() => { jest.advanceTimersByTime(900); });
  expect(screen.getByText("Roll 1: 1 + 1 → 5 (kept)")).toBeInTheDocument();
});

test("tarot animates, excludes previous draws after returning, and stops at exhaustion", () => {
  jest.useFakeTimers();
  jest.spyOn(Math, "random").mockReturnValue(0);
  const first = render(<CardDraw kind="tarot" onBack={() => {}} />);
  fireEvent.click(screen.getByRole("button", { name: "Draw a card" }));
  expect(screen.getByRole("button", { name: "Drawing…" })).toBeDisabled();
  act(() => { jest.advanceTimersByTime(2200); });
  expect(screen.getByRole("status")).toHaveTextContent(`Drawn: ${tarotCards[0].text}`);
  first.unmount();
  localStorage.setItem("other-card-draw-tarot-v1", JSON.stringify(tarotCards.slice(0, -1).map((c) => c.id)));
  render(<CardDraw kind="tarot" onBack={() => {}} />);
  fireEvent.click(screen.getByRole("button", { name: "Draw a card" }));
  act(() => { jest.advanceTimersByTime(2200); });
  expect(screen.getByRole("status")).toHaveTextContent(`Drawn: ${tarotCards[tarotCards.length - 1].text}`);
  expect(screen.getByRole("button", { name: "Deck complete" })).toBeDisabled();
});

test("CAH reads text cards and does not repeat a drawn card", async () => {
  jest.useFakeTimers();
  jest.spyOn(Math, "random").mockReturnValue(0);
  const original = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({ ok: true, text: async () => "First card\nSecond card\nFirst card\n" });
  try {
    render(<CardDraw kind="cah" onBack={() => {}} />);
    await act(async () => {});
    fireEvent.click(screen.getByRole("button", { name: "Draw a card" }));
    act(() => { jest.advanceTimersByTime(2200); });
    expect(screen.getByRole("status")).toHaveTextContent("Drawn: First card");
    fireEvent.click(screen.getByRole("button", { name: "Pick again" }));
    act(() => { jest.advanceTimersByTime(2200); });
    expect(screen.getByRole("status")).toHaveTextContent("Drawn: Second card");
    expect(screen.getByRole("button", { name: "Deck complete" })).toBeDisabled();
  } finally { global.fetch = original; }
});
