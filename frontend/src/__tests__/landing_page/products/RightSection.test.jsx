import React from "react";
import { render, screen } from "@testing-library/react";
import RightSection from "../../../landing_page/products/RightSection";

describe("RightSection Component", () => {
  const props = {
    imageURL: "images/console.png",
    productName: "Console",
    productDescription: "A powerful tool for portfolio management.",
    learnMore: "#",
  };

  test("renders the product name correctly", () => {
    render(<RightSection {...props} />);
    const productNameElement = screen.getByText(/Console/i);
    expect(productNameElement).toBeInTheDocument();
  });

  test("renders the product description correctly", () => {
    render(<RightSection {...props} />);
    const descriptionElement = screen.getByText(
      /A powerful tool for portfolio management./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the Learn More link", () => {
    render(<RightSection {...props} />);
    const learnMoreLink = screen.getByText(/Learn More/i);
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute("href", "#");
  });

  test("renders the product image", () => {
    render(<RightSection {...props} />);
    const productImage = screen.getByAltText(/Console/i);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", "images/console.png");
  });
});
