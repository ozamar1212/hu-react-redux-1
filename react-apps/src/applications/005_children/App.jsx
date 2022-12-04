function StyledTitle({ children }) {
  return (
    <div
      style={{
        background: 'blue',
        color: 'white',
        padding: '10px',
        fontSize: '60px',
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <StyledTitle>
        <div>Hello</div>
        <p>This is my title</p>
      </StyledTitle>
    </div>
  );
}

export default App;
