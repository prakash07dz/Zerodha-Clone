import React from "react";
import { render, screen } from "@testing-library/react";
import Brokerage from "../../../landing_page/pricing/Brokerage";

describe("Brokerage Component", () => {
  test("renders the Brokerage Calculator heading", () => {
    render(<Brokerage />);
    const headingElement = screen.getByText(/Brokerage calculator/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the List of Charges heading", () => {
    render(<Brokerage />);
    const headingElement = screen.getByText(/List of charges/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the list items correctly", () => {
    render(<Brokerage />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6); // Check for 6 list items
  });

  test("renders links with correct href", () => {
    render(<Brokerage />);
    const brokerageLink = screen.getByRole("link", { name: /Brokerage calculator/i });
    const chargesLink = screen.getByRole("link", { name: /List of charges/i });

    expect(brokerageLink).toHaveAttribute("href", "#");
    expect(chargesLink).toHaveAttribute("href", "#");
  });
});
