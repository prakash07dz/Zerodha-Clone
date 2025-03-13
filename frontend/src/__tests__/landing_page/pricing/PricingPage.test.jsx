import React from "react";
import { render, screen } from "@testing-library/react";
import PricingPage from "../../../landing_page/pricing/PricingPage";

// Mock the child components
jest.mock("../../../landing_page/pricing/Hero", () => () => (
  <div data-testid="hero-mock">Hero Component</div>
));
jest.mock("../../../landing_page/pricing/Brokerage", () => () => (
  <div data-testid="brokerage-mock">Brokerage Component</div>
));
jest.mock("../../../landing_page/OpenAccount", () => () => (
  <div data-testid="open-account-mock">OpenAccount Component</div>
));

describe("PricingPage Component", () => {
  test("renders the Hero, OpenAccount, and Brokerage components", () => {
    render(<PricingPage />);

    // Check if the mocked components are rendered
    const heroElement = screen.getByTestId("hero-mock");
    const openAccountElement = screen.getByTestId("open-account-mock");
    const brokerageElement = screen.getByTestId("brokerage-mock");

    expect(heroElement).toBeInTheDocument();
    expect(openAccountElement).toBeInTheDocument();
    expect(brokerageElement).toBeInTheDocument();
  });
});
