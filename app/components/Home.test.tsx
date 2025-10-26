import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./Home";

test("home compontenst check", () => {
  render(<Home />);
  expect(screen.getByText("Home")).toBeDefined();
});
