import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log('counter is rendering');

  function increment() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log('increment', newCounter);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default Counter;
