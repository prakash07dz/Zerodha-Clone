import React from "react";
import { render, screen } from "@testing-library/react";
import Stats from "../../../landing_page/home/Stats";

describe("Stats Component", () => {
  test("renders stats container", () => {
    render(<Stats />);
    const statsContainer = screen.getByRole("heading", {
      name: /Trust with confidence/i,
    }).parentElement.parentElement;
    expect(statsContainer).toBeInTheDocument();
  });

  test("renders heading text", () => {
    render(<Stats />);
    const heading = screen.getByText(/Trust with confidence/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders all subheadings and paragraphs", () => {
    render(<Stats />);
    const subheadings = screen.getAllByRole("heading", { level: 2 });
    const paragraphs = screen.getAllByText(/[\s\S]*/, {
      selector: "p.text-muted",
    });

    expect(subheadings.length).toBe(4); // 4 subheadings
    expect(paragraphs.length).toBe(4); // 4 paragraphs
  });

  test("renders ecosystem image", () => {
    render(<Stats />);
    const ecosystemImage = screen.getByAltText("Eco System");
    expect(ecosystemImage).toBeInTheDocument();
    expect(ecosystemImage).toHaveClass("img-fluid");
  });

  test("renders Explore our products link", () => {
    render(<Stats />);
    const exploreLink = screen.getByRole("link", {
      name: /Explore our products/i,
    });
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute("href", "#");
  });

  test("renders Try kite demo link", () => {
    render(<Stats />);
    const kiteDemoLink = screen.getByRole("link", { name: /Try kite demo/i });
    expect(kiteDemoLink).toBeInTheDocument();
    expect(kiteDemoLink).toHaveAttribute("href", "#");
  });
});
