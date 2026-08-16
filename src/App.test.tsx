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
