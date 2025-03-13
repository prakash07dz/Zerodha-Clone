import React from "react";
import { render, screen } from "@testing-library/react";
import LeftSection from "../../../landing_page/products/LeftSection";

describe("LeftSection Component", () => {
  const props = {
    imageURL: "images/kite.png",
    productName: "Kite",
    productDescription: "A modern and intuitive trading platform.",
    tryDemo: "#",
    learnMore: "#",
    googlePlay: "#",
    appStore: "#",
  };

  test("renders the product name correctly", () => {
    render(<LeftSection {...props} />);
    const productNameElement = screen.getByText(/Kite/i);
    expect(productNameElement).toBeInTheDocument();
  });

  test("renders the product description correctly", () => {
    render(<LeftSection {...props} />);
    const descriptionElement = screen.getByText(
      /A modern and intuitive trading platform./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the Try Demo and Learn More links", () => {
    render(<LeftSection {...props} />);
    const tryDemoLink = screen.getByText(/Try Demo/i);
    const learnMoreLink = screen.getByText(/Learn More/i);

    expect(tryDemoLink).toBeInTheDocument();
    expect(learnMoreLink).toBeInTheDocument();

    expect(tryDemoLink).toHaveAttribute("href", "#");
    expect(learnMoreLink).toHaveAttribute("href", "#");
  });

  test("renders the Google Play and App Store badges", () => {
    render(<LeftSection {...props} />);
    const googlePlayBadge = screen.getByAltText(/Google Play/i);
    const appStoreBadge = screen.getByAltText(/App Store/i);

    expect(googlePlayBadge).toBeInTheDocument();
    expect(appStoreBadge).toBeInTheDocument();

    expect(googlePlayBadge).toHaveAttribute(
      "src",
      "images/googlePlayBadge.svg"
    );
    expect(appStoreBadge).toHaveAttribute("src", "images/appstoreBadge.svg");
  });
});
