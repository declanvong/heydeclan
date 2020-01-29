import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Declan", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Declan/i);
  expect(linkElement).toBeInTheDocument();
});
