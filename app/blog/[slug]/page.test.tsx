import { expect, test } from "vitest";
import BlogPage from "./page";
import { render, screen } from "@testing-library/react";

test("To be defined dynamic route", () => {
  render(<BlogPage params={{ slug: "juyel" }} />)
  expect(screen.getByRole("heading", { level: 1, name:"juyel" })).toBeDefined();
});
