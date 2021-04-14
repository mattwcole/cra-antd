import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders app title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Turbine Web/i);
  expect(linkElement).toBeInTheDocument();
});
