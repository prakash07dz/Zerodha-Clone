import React from "react";
import { render, screen } from "@testing-library/react";
import Apps from "../components/Apps";

describe("Apps Component", () => {
  test("renders Apps component correctly", () => {
    render(<Apps />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Apps");

  });
});
