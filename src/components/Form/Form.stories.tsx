import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Form from "./Form";

export default {
  type: "Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = () => (
  <Form onSubmit={(e) => {}}>
    <div>Test</div>
  </Form>
);
