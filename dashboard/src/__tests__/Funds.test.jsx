import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Funds from "../components/Funds";

describe("Funds Component", () => {
  test("renders the main content", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    // Check if the main content is rendered
    const mainText = screen.getByText(
      /Instant, zero-cost fund transfers with UPI/i
    );
    const addFundsButton = screen.getByRole("link", { name: /Add funds/i });
    const withdrawButton = screen.getByRole("link", { name: /Withdraw/i });

    expect(mainText).toBeInTheDocument();
    expect(addFundsButton).toBeInTheDocument();
    expect(withdrawButton).toBeInTheDocument();
  });

  test("renders the equity table data", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    // Check if the equity table data is rendered
    const availableMargin = screen.getByText(/Available margin/i);
    const usedMargin = screen.getByText(/Used margin/i);
    const availableCash = screen.getByText(/Available cash/i);

    // Use getAllByText for elements with duplicate text
    const openingBalances = screen.getAllByText(/Opening Balance/i);
    expect(openingBalances.length).toBe(2); // Ensure there are exactly 2 elements

    const span = screen.getByText(/SPAN/i);
    const deliveryMargin = screen.getByText(/Delivery margin/i);
    const exposure = screen.getByText(/Exposure/i);
    const optionsPremium = screen.getByText(/Options premium/i);
    const collateralLiquidFunds = screen.getByText(
      /Collateral \(Liquid funds\)/i
    );
    const collateralEquity = screen.getByText(/Collateral \(Equity\)/i);
    const totalCollateral = screen.getByText(/Total Collateral/i);

    expect(availableMargin).toBeInTheDocument();
    expect(usedMargin).toBeInTheDocument();
    expect(availableCash).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(deliveryMargin).toBeInTheDocument();
    expect(exposure).toBeInTheDocument();
    expect(optionsPremium).toBeInTheDocument();
    expect(collateralLiquidFunds).toBeInTheDocument();
    expect(collateralEquity).toBeInTheDocument();
    expect(totalCollateral).toBeInTheDocument();
  });
  test("renders the commodity section", () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    // Check if the commodity section is rendered
    const commodityText = screen.getByText(
      /You don't have a commodity account/i
    );
    const openAccountButton = screen.getByRole("link", {
      name: /Open Account/i,
    });

    expect(commodityText).toBeInTheDocument();
    expect(openAccountButton).toBeInTheDocument();
  });
});
