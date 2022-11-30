function Hello() {
  return <div>Hello to jsx</div>;
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));
