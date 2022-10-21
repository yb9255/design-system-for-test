import React, { useState } from "react";
import Input from "./components/Input";

export type TestType = {
  test1: string;
  test2: number;
};

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <h1>{value}</h1>
    </>
  );
}

export default App;
