import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../../../landing_page/pricing/Hero";

describe("Hero Component", () => {
  test("renders the title correctly", () => {
    render(<Hero />);
    const titleElement = screen.getByText(/Pricing/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the subtitle correctly", () => {
    render(<Hero />);
    const subtitleElement = screen.getByText(
      /Free equity investments and flat ₹20 intraday and F&O trades/i
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders all three pricing cards", () => {
    render(<Hero />);
    const cardTitles = screen.getAllByRole("heading", { level: 1 }); 
    expect(cardTitles.length).toBe(4);
  });

  test("renders images with correct alt text", () => {
    render(<Hero />);
    const equityImage = screen.getByAltText(/Free Equity Delivery/i);
    const intradayImage = screen.getByAltText(/Intraday and F&O Trades/i);
    const mfImage = screen.getByAltText(/Free Direct MF/i);

    expect(equityImage).toBeInTheDocument();
    expect(intradayImage).toBeInTheDocument();
    expect(mfImage).toBeInTheDocument();
  });
});