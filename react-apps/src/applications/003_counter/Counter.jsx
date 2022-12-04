import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log('increment', counter);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default Counter;
