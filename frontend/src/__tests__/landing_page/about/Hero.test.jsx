import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../../../landing_page/about/Hero";

describe("Hero Component", () => {
  test("renders the title correctly", () => {
    render(<Hero />);
    const titleElement = screen.getByText(
      /We pioneered the discount broking model in India/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  test("renders two columns on desktop view", () => {
    render(<Hero />);
    const columns = screen.getAllByRole("paragraph"); // Assuming paragraphs are rendered
    expect(columns.length).toBeGreaterThanOrEqual(2); // At least 2 columns
  });

  test("renders the Rainmatter link", () => {
    render(<Hero />);
    const linkElement = screen.getByText(/Rainmatter/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
  });
});
