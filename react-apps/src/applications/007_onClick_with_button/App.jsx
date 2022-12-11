import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const [updateValue, setUpdatedValue] = useState("");

  function valueChange(event) {
    setValue(event.target.value);
    console.log("value change", event.target.value);
  }

  function updatedValue() {
    setUpdatedValue(value);
  }

  return (
    <div>
      <input onChange={valueChange} />
      <button onClick={updatedValue}>Get it</button>
      <div>{updateValue}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
