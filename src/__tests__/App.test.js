import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"; // Değişiklik burada
import React from "react";
import { Provider } from "react-redux";
import store from "../store/store"; // Redux store'u import edin
import App from "../App";

test("App component renders correctly", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // MapChart bileşeninin varlığını kontrol et
  const mapChart = screen.getByTestId("map-chart");
  expect(mapChart).toBeInTheDocument();
});
