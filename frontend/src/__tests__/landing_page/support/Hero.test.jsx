import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../../../landing_page/support/Hero";

describe("Hero Component", () => {
  test("renders the Support Portal heading", () => {
    render(<Hero />);
    const headingElement = screen.getByText(/Support Portal/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the search input", () => {
    render(<Hero />);
    const inputElement = screen.getByPlaceholderText(
      /Eg. how do I activate F&O/i
    );
    expect(inputElement).toBeInTheDocument();
  });

  test("renders the Track Tickets link", () => {
    render(<Hero />);
    const linkElement = screen.getByText(/Track Tickets/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
  });

  test("renders all featured links", () => {
    render(<Hero />);
    const featuredLinks = screen.getAllByRole("listitem");
    expect(featuredLinks.length).toBe(2); // Check for 2 featured links
  });
});
