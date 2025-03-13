import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "../../../landing_page/about/AboutPage";

// Mock the child components
jest.mock("../../../landing_page/about/Hero", () => () => (
  <div data-testid="hero-mock">Hero Component</div>
));
jest.mock("../../../landing_page/about/Team", () => () => (
  <div data-testid="team-mock">Team Component</div>
));

describe("AboutPage Component", () => {
  test("renders the Hero and Team components", () => {
    render(<AboutPage />);

    // Check if the mocked Hero and Team components are rendered
    const heroElement = screen.getByTestId("hero-mock");
    const teamElement = screen.getByTestId("team-mock");

    expect(heroElement).toBeInTheDocument();
    expect(teamElement).toBeInTheDocument();
  });
});
