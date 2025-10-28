import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("Counter",()=>{
    render(<Counter />)
    test('initialing start on 0',()=>{
        expect(screen.getByRole("heading",{
            level:2,name:"0"
        })).toBeDefined();
    })
})