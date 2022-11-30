function SayHello(props) {
  console.log(props);

  return <div style={{ color: props.color }}>Hello {props.name}</div>;
}

function App() {
  return (
    <div>
      <div>Hello</div>
      <SayHello name="Liat" color="red" />
      <SayHello name="Lior" color="blue" />
    </div>
  );
}

export default App;
