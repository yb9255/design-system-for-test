import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "../components";

describe("Button", () => {
  it("Button class includes file name", () => {
    render(
      <Form onSubmit={(e) => {}}>
        <div>test</div>
      </Form>
    );

    const form = screen.getByRole("form");
    const formHasFilenameInClass = form.className.includes("Form__");

    expect(formHasFilenameInClass).toBeTruthy();
  });
});
