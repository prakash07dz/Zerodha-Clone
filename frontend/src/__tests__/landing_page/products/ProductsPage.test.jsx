import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../../../landing_page/products/ProductsPage";

// Mock the child components
jest.mock("../../../landing_page/products/Hero", () => () => (
  <div data-testid="hero-mock">Hero Component</div>
));
jest.mock("../../../landing_page/products/LeftSection", () => () => (
  <div data-testid="left-section-mock">LeftSection Component</div>
));
jest.mock("../../../landing_page/products/RightSection", () => () => (
  <div data-testid="right-section-mock">RightSection Component</div>
));
jest.mock("../../../landing_page/products/Universe", () => () => (
  <div data-testid="universe-mock">Universe Component</div>
));

describe("ProductsPage Component", () => {
  test("renders the Hero, LeftSection, RightSection, and Universe components", () => {
    render(<ProductsPage />);

    // Check if the mocked components are rendered
    const heroElement = screen.getByTestId("hero-mock");
    const leftSectionElements = screen.getAllByTestId("left-section-mock");
    const rightSectionElements = screen.getAllByTestId("right-section-mock");
    const universeElement = screen.getByTestId("universe-mock");

    expect(heroElement).toBeInTheDocument();
    expect(leftSectionElements.length).toBe(3); // Check for 3 LeftSection components
    expect(rightSectionElements.length).toBe(2); // Check for 2 RightSection components
    expect(universeElement).toBeInTheDocument();
  });

  test("renders the technology stack paragraph", () => {
    render(<ProductsPage />);
    const paragraphElement = screen.getByText(
      /Want to know more about our technology stack\? Check out the Zerodha\.tech blog\./i
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
