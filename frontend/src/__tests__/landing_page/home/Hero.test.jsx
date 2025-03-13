import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "../../../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero container", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const heroContainer = screen.getByTestId("hero");
    expect(heroContainer).toBeInTheDocument();
  });

  test("renders hero image", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveClass("img-fluid");
  });

  test("renders heading text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const heading = screen.getByText("Invest in everything");
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const paragraph = screen.getByText(
      /Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more./i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("renders signup button with correct link", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    const signupButton = screen.getByRole("link", { name: /Sign up for free/i });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveAttribute("href", "/signup");
    expect(signupButton).toHaveClass("btn", "btn-primary", "btn-lg");
  });
});