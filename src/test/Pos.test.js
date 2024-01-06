/** @format */

// __tests__/Pos.test.js
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Pos from "../pages/Pos"; // Update the path to your Pos component

describe("Pos Component", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        {" "}
        {/* Wrap the component with MemoryRouter */}
        <Pos />
      </MemoryRouter>
    );
  });

  // Other test cases...
});
