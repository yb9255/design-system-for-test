import { render, screen } from "@testing-library/react";
import { Button } from "../components";

describe("Button", () => {
  it("Button class includes file name", () => {
    render(<Button name="button" />);

    const button = screen.getByRole("button");
    const btnHasFilenameInClass = button.className.includes("Button__");

    expect(btnHasFilenameInClass).toBeTruthy();
  });
});
