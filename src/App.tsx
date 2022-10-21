import React, { useState } from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

export type TestType = {
  test1: string;
  test2: number;
};

function App() {
  const [value, setValue] = useState("");

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        alert(value);
      }}
    >
      <Input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <Button name="Submit" />
      <h1>{value}</h1>
    </Form>
  );
}

export default App;
