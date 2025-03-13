import React from "react";
import { render, screen } from "@testing-library/react";
import CreateTicket from "../../../landing_page/support/CreateTicket";

describe("CreateTicket Component", () => {
  test("renders the main heading", () => {
    render(<CreateTicket />);
    const headingElement = screen.getByText(
      /To create a ticket, select a relevant topic/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("renders all topic categories", () => {
    render(<CreateTicket />);
    const topicCategories = screen.getAllByRole("heading", { level: 4 });
    expect(topicCategories.length).toBe(6); // Check for 6 topic categories
  });

  test("renders subtopics for each category", () => {
    render(<CreateTicket />);
    const subtopicLinks = screen.getAllByRole("link");
    expect(subtopicLinks.length).toBeGreaterThan(10); // Check for at least 10 subtopics
  });
});
