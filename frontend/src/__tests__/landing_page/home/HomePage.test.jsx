import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../../landing_page/home/HomePage";

// Mock child components to isolate HomePage testing
jest.mock("../../../landing_page/home/Hero", () => () => (
  <div data-testid="hero">Hero Component</div>
));
jest.mock("../../../landing_page/home/Awards", () => () => (
  <div data-testid="awards">Awards Component</div>
));
jest.mock("../../../landing_page/home/Stats", () => () => (
  <div data-testid="stats">Stats Component</div>
));
jest.mock("../../../landing_page/home/Pricing", () => () => (
  <div data-testid="pricing">Pricing Component</div>
));
jest.mock("../../../landing_page/home/Education", () => () => (
  <div data-testid="education">Education Component</div>
));
jest.mock("../../../landing_page/OpenAccount", () => () => (
  <div data-testid="open-account">OpenAccount Component</div>
));

describe("HomePage Component", () => {
  test("renders all child components", () => {
    render(<HomePage />);

    // Check if all child components are rendered
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("awards")).toBeInTheDocument();
    expect(screen.getByTestId("stats")).toBeInTheDocument();
    expect(screen.getByTestId("pricing")).toBeInTheDocument();
    expect(screen.getByTestId("education")).toBeInTheDocument();
    expect(screen.getByTestId("open-account")).toBeInTheDocument();
  });
});
