import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders hub map with shop buttons", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /which world would you like to go to\?/i })
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /sandbox/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /blank world template/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /strenuous portal/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /every shop/i })).toBeInTheDocument();
});

test("shows each location's inventory settlement tag on its button", async () => {
  render(<App />);

  expect(screen.getByRole("button", { name: "Sandbox, Travel" })).toHaveTextContent(
    /Sandbox\s*Travel/
  );
  expect(screen.getByRole("button", { name: "Strenuous Portal, Town" })).toHaveTextContent(
    /Strenuous Portal\s*Town/
  );

  fireEvent.click(screen.getByRole("button", { name: "Sandbox, Travel" }));

  expect(screen.getByRole("button", { name: "Withhold (Parker), Thorpe" })).toHaveTextContent(
    /Withhold \(Parker\)\s*Thorpe/
  );
  expect(
    screen.getByRole("button", { name: "Merrick's Meadow (Howard), Village" })
  ).toHaveTextContent(/Merrick's Meadow \(Howard\)\s*Village/);
  expect(screen.getByRole("button", { name: "Jelly City, Town" })).toHaveTextContent(
    /Jelly City\s*Town/
  );
  expect(screen.getByRole("button", { name: "Big Home, Metropolis" })).toHaveTextContent(
    /Big Home\s*Metropolis/
  );
});

test("sorts Sandbox destinations from the smallest settlement type to the largest", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Sandbox, Travel" }));

  const settlementTypes = screen
    .getAllByRole("button")
    .map((button) => button.getAttribute("aria-label"))
    .filter((label): label is string => Boolean(label?.includes(", ")))
    .map((label) => label.split(", ").at(-1));

  expect(settlementTypes).toEqual([
    "Thorpe",
    "Thorpe",
    "Hamlet",
    "Village",
    "Village",
    "Village",
    "Town",
    "Town",
    "Town",
    "City",
    "City",
    "City",
    "City",
    "City",
    "Metropolis",
  ]);
});

test("sorts blank-world placeholders from isolated dwelling to metropolis", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Blank world template, Travel" }));

  expect(
    screen.getByRole("navigation", { name: "Blank world settlements" }).textContent
  ).toMatch(
    /Isolated Dwelling name here.*Thorpe name here.*Hamlet name here.*Village name here.*Town name here.*City name here.*Metropolis name here/
  );
});
