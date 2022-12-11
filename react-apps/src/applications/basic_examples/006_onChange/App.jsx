import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");
  function valueChange(event) {
    setValue(event.target.value);
    console.log("value changed", event.target.value);
  }

  function changeValue() {
    setUpdatedValue(value);
  }
  return (
    <div>
      <input onChange={valueChange} />
      <button onClick={changeValue}>Get IT</button>
      <h2> onChange: {value}</h2>
      <h2>onClick: {updatedValue}</h2>
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
