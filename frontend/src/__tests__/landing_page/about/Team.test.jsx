import React from "react";
import { render, screen } from "@testing-library/react";
import Team from "../../../landing_page/about/Team";

describe("Team Component", () => {
  test("renders the title correctly", () => {
    render(<Team />);
    const titleElement = screen.getByText(/People/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the image with correct alt text", () => {
    render(<Team />);
    const imageElement = screen.getByAltText(/Nithin Kamath/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass("rounded-circle");
  });

  test("renders the social links", () => {
    render(<Team />);
    const homepageLink = screen.getByText(/Homepage/i);
    const tradingQnALink = screen.getByText(/TradingQnA/i);
    const twitterLink = screen.getByText(/Twitter/i);

    expect(homepageLink).toBeInTheDocument();
    expect(tradingQnALink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();

    expect(homepageLink).toHaveAttribute("href", "#");
    expect(tradingQnALink).toHaveAttribute("href", "#");
    expect(twitterLink).toHaveAttribute("href", "#");
  });
});
