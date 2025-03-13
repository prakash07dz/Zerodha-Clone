import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../landing_page/Footer";

describe("Footer Component", () => {
  test("renders footer container", () => {
    render(<Footer />);
    const footerContainer = screen.getByRole("contentinfo");
    expect(footerContainer).toBeInTheDocument();
  });

  test("renders logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(16); // Total number of links in the footer
  });

  test("renders legal disclaimer", () => {
    render(<Footer />);
    const legalText = screen.getByText(
      /Investments in securities market are subject to market risks/i
    );
    expect(legalText).toBeInTheDocument();
  });
});
