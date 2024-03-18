import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("App component renders correctly", () => {
  render(<App />);

  // MapChart bileşeninin varlığını kontrol et
  const mapChart = screen.getByTestId("map-chart");
  expect(mapChart).toBeInTheDocument();

  // MapChart bileşenine tıklama yap
  userEvent.click(mapChart);

  // ReactTooltip bileşeninin varlığını kontrol et
  const reactTooltip = screen.getByTestId("react-tooltip");
  expect(reactTooltip).toBeInTheDocument();
});
