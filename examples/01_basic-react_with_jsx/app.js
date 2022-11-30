function Hello() {
  return (
    <div>
      <div>Hello to jsx</div>
      <p>This is paragraph</p>
    </div>
  );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
