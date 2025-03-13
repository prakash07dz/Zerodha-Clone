import React from "react";
import { render, screen } from "@testing-library/react";
import OpenAccount from "../../landing_page/OpenAccount";

describe("OpenAccount Component", () => {
  test("renders OpenAccount container", () => {
    render(<OpenAccount />);
    const openAccountContainer = screen.getByRole("heading", {
      name: /Open a Zerodha account/i,
    }).parentElement.parentElement;
    expect(openAccountContainer).toBeInTheDocument();
  });

  test("renders heading text", () => {
    render(<OpenAccount />);
    const heading = screen.getByText(/Open a Zerodha account/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(<OpenAccount />);
    const paragraph = screen.getByText(
      /Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades./i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("renders Sign up for free button", () => {
    render(<OpenAccount />);
    const signupButton = screen.getByRole("button", {
      name: /Sign up for free/i,
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn", "btn-primary", "btn-lg");
  });
});
