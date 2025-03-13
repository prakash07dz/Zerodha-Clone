import React from "react";
import { render, screen } from "@testing-library/react";
import SupportPage from "../../../landing_page/support/SupportPage";

// Mock the child components
jest.mock("../../../landing_page/support/Hero", () => () => (
  <div data-testid="hero-mock">Hero Component</div>
));
jest.mock(".../../../landing_page/support/CreateTicket", () => () => (
  <div data-testid="create-ticket-mock">CreateTicket Component</div>
));

describe("SupportPage Component", () => {
  test("renders the Hero and CreateTicket components", () => {
    render(<SupportPage />);

    // Check if the mocked components are rendered
    const heroElement = screen.getByTestId("hero-mock");
    const createTicketElement = screen.getByTestId("create-ticket-mock");

    expect(heroElement).toBeInTheDocument();
    expect(createTicketElement).toBeInTheDocument();
  });
});
