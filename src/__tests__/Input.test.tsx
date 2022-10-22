import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../components";

describe("Input", () => {
  it("Input class includes file name", () => {
    render(<Input value="" onChange={() => {}} />);

    const input = screen.getByRole("textbox");
    const inputHasFilenameInClass = input.className.includes("Input__");

    expect(inputHasFilenameInClass).toBeTruthy();
  });
});
