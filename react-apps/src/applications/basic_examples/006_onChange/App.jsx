import { useState } from 'react';

function Input() {
  const [value, setValue] = useState('');

  function valueChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <div>
      <input onChange={valueChange} />
      <h2>{value}</h2>
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
