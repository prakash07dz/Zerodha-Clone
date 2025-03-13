import React from "react";
import { render, screen } from "@testing-library/react";
import Universe from "../../../landing_page/products/Universe";

describe("Universe Component", () => {
  test("renders the main heading", () => {
    render(<Universe />);
    const headingElement = screen.getByText(/The Zerodha Universe/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the subheading", () => {
    render(<Universe />);
    const subheadingElement = screen.getByText(
      /Extend your trading and investment experience even further with our partner platforms/i
    );
    expect(subheadingElement).toBeInTheDocument();
  });

  test("renders all partner platform cards", () => {
    render(<Universe />);
    const partnerCards = screen.getAllByRole("img");
    expect(partnerCards.length).toBe(6); // Check for 6 partner platform images
  });

  test("renders the Signup Now button", () => {
    render(<Universe />);
    const buttonElement = screen.getByText(/Signup Now/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn-primary");
  });
});
