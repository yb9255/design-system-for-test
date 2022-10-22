import { render, screen } from "@testing-library/react";
import { Form } from "../components";

describe("Button", () => {
  it("Button class includes file name", () => {
    render(
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {}}>test</Form>
    );

    const form = screen.getByRole("form");
    const formHasFilenameInClass = form.className.includes("Form__");

    expect(formHasFilenameInClass).toBeTruthy();
  });
});
