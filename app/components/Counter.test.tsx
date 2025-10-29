import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  render(<Counter />);
  test("initialing start on 0", () => {
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "0",
      })
    ).toBeDefined();
  });

  test("Increament", () => {
    fireEvent.click(screen.getByRole("button"));

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "1",
      })
    ).toBeDefined();
  });
});
