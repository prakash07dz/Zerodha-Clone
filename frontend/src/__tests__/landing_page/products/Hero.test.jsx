import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../../../landing_page/products/Hero";

describe("Hero Component", () => {
  test("renders the title correctly", () => {
    render(<Hero />);
    const titleElement = screen.getByText(/Technology/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the subtitle correctly", () => {
    render(<Hero />);
    const subtitleElement = screen.getByText(
      /Sleek, modern and intuitive trading platforms/i
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders the investment offerings link", () => {
    render(<Hero />);
    const linkElement = screen.getByText(/investment offerings/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
  });
});
