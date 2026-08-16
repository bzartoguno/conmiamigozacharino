import React from "react";
import { render, screen } from "@testing-library/react";
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
