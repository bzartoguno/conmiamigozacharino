import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hub map with shop buttons", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /where would you like to go\?/i })
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /goblin stuff/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /auction house/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /black market/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /book bombs/i })).toBeInTheDocument();
});
