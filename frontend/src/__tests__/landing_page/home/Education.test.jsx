import React from "react";
import { render, screen } from "@testing-library/react";
import Education from "../../../landing_page/home/Education";

describe("Education Component", () => {
  test("renders education container", () => {
    render(<Education />);
    const educationContainer = screen.getByRole("heading", {
      name: /Free and open market education/i,
    }).parentElement.parentElement;
    expect(educationContainer).toBeInTheDocument();
  });

  test("renders education image", () => {
    render(<Education />);
    const educationImage = screen.getByAltText("Education");
    expect(educationImage).toBeInTheDocument();
    expect(educationImage).toHaveClass("img-fluid");
  });

  test("renders heading text", () => {
    render(<Education />);
    const heading = screen.getByText(/Free and open market education/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders Varsity paragraph and link", () => {
    render(<Education />);
    const varsityParagraph = screen.getByText(
      /Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading./i
    );
    const varsityLink = screen.getByRole("link", { name: /Varsity/i });
    expect(varsityParagraph).toBeInTheDocument();
    expect(varsityLink).toBeInTheDocument();
    expect(varsityLink).toHaveAttribute("href", "#");
  });

  test("renders TradingQ&A paragraph and link", () => {
    render(<Education />);
    const tradingQAParagraph = screen.getByText(
      /TradingQ&A, the most active trading and investment community in India for all your market related queries./i
    );
    const tradingQALink = screen.getByRole("link", { name: /TradingQ&A/i });
    expect(tradingQAParagraph).toBeInTheDocument();
    expect(tradingQALink).toBeInTheDocument();
    expect(tradingQALink).toHaveAttribute("href", "#");
  });
});
