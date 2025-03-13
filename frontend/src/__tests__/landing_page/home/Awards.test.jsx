import React from "react";
import { render, screen } from "@testing-library/react";
import Awards from "../../../landing_page/home/Awards";

describe("Home Awards Component", () => {
  test("renders awards container", () => {
    render(<Awards />);
    const awardsContainer = screen.getByRole("heading", {
      name: /Largest stock broker in India/i,
    }).parentElement.parentElement;
    expect(awardsContainer).toBeInTheDocument();
  });

  test("renders largest broker image", () => {
    render(<Awards />);
    const largestBrokerImage = screen.getByAltText("Largest Broker");
    expect(largestBrokerImage).toBeInTheDocument();
    expect(largestBrokerImage).toHaveClass("img-fluid");
  });

  test("renders heading text", () => {
    render(<Awards />);
    const heading = screen.getByText(/Largest stock broker in India/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(<Awards />);
    const paragraph = screen.getByText(
      /2\+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("renders list items", () => {
    render(<Awards />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6); // 6 list items in total
  });

  test("renders press logos image", () => {
    render(<Awards />);
    const pressLogosImage = screen.getByAltText("Press Logos");
    expect(pressLogosImage).toBeInTheDocument();
    expect(pressLogosImage).toHaveClass("img-fluid");
  });
});
