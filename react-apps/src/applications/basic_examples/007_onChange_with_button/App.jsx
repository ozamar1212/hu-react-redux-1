import { useState } from 'react';

function Input2() {
  let value = '';
  const [updatedValue, setUpdatedValue] = useState('');

  function valueChange(event) {
    value = event.target.value;
  }

  function changeValue() {
    console.log(value);
    setUpdatedValue(value);
  }

  return (
    <div>
      <input onChange={valueChange} />
      <button onClick={changeValue}>Get it</button>
      <div>onChange: {value}</div>
      <div>onClick: {updatedValue}</div>
    </div>
  );
}

function Input() {
  const [value, setValue] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  function valueChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  function changeValue() {
    console.log(value);
    setUpdatedValue(value);
  }

  return (
    <div>
      <input onChange={valueChange} />
      <button onClick={changeValue}>Get it</button>
      <div>onChange: {value}</div>
      <div>onClick: {updatedValue}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Input2 />
    </div>
  );
}

export default App;
