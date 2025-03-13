import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../../landing_page/NotFound";

describe("NotFound Component", () => {
  test("renders NotFound container", () => {
    render(<NotFound />);
    const notFoundContainer = screen.getByRole("heading", {
      name: /404 Not Found/i,
    }).parentElement.parentElement;
    expect(notFoundContainer).toBeInTheDocument();
  });

  test("renders heading text", () => {
    render(<NotFound />);
    const heading = screen.getByText(/404 Not Found/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(<NotFound />);
    const paragraph = screen.getByText(
      /Sorry, the page you are looking for does not exist./i
    );
    expect(paragraph).toBeInTheDocument();
  });
});
