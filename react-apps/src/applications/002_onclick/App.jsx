function Click3() {
  let counter = 0;

  function clickMe() {
    counter++;
    console.log('click 3', counter);
  }

  return <button onClick={clickMe}>Click 3 {counter}</button>;
}

function Click2() {
  function clickMe() {
    console.log('click 2');
  }

  return <button onClick={clickMe}>Click 2</button>;
}

function Click1() {
  return (
    <button
      onClick={() => {
        console.log('clicked');
      }}
    >
      Click 1
    </button>
  );
}

function App() {
  return (
    <div>
      <Click1 />
      <Click2 />
      <Click3 />
    </div>
  );
}

export default App;
