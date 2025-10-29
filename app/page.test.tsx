import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "./page"


test("page",()=>{
    render(<Page />);
    expect(screen.getByText("home juyel")).toBeDefined()
  
})