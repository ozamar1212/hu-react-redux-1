function Counter() {
  let counter = 0;

  function increment() {
    counter++;
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
