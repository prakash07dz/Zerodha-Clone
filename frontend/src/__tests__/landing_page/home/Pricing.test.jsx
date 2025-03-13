import React from "react";
import { render, screen } from "@testing-library/react";
import Pricing from "../../../landing_page/home/Pricing";

describe("Pricing Component", () => {
  test("renders pricing container", () => {
    render(<Pricing />);
    const pricingContainer = screen.getByRole("heading", {
      name: /Unbeatable pricing/i,
    }).parentElement.parentElement;
    expect(pricingContainer).toBeInTheDocument();
  });

  test("renders heading text", () => {
    render(<Pricing />);
    const heading = screen.getByText(/Unbeatable pricing/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(<Pricing />);
    const paragraph = screen.getByText(
      /We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges./i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("renders See Pricing link", () => {
    render(<Pricing />);
    const pricingLink = screen.getByRole("link", { name: /See Pricing/i });
    expect(pricingLink).toBeInTheDocument();
    expect(pricingLink).toHaveAttribute("href", "#");
  });

  test("renders pricing cards", () => {
    render(<Pricing />);
    const freePricingCard = screen.getByText(/₹0/i);
    const intradayPricingCard = screen.getByText(/₹20/i);
    expect(freePricingCard).toBeInTheDocument();
    expect(intradayPricingCard).toBeInTheDocument();
  });

  test("renders pricing card descriptions", () => {
    render(<Pricing />);
    const freeDescription = screen.getByText(
        /Free equity delivery and[\s\S]*direct mutual funds/i
      );
    const intradayDescription = screen.getByText(/Intraday and F&O/i);
    expect(freeDescription).toBeInTheDocument();
    expect(intradayDescription).toBeInTheDocument();
  });
});
