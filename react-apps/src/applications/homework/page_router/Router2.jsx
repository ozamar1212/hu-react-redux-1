import { useState } from "react";

function Page1() {
  return (
    <div>
      <h2> This is my page1 Title</h2>
      <p>This is my page body</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h2> This is my page2 Title</h2>
      <p>This is my page body</p>
    </div>
  );
}

const routes = [
  {
    id: "0",
    name: "Page1",
    page: <Page1 />,
  },
  {
    id: "1",
    name: "Page2",
    page: <Page2 />,
  },
];

function Router2() {
  const [pageId, setPageId] = useState(0);

  function showPage(event) {
    const newPageId = event.target.getAttribute("page-id");
    setPageId(newPageId);
  }

  return (
    <div>
      <h2>Router 2</h2>
      {routes.map((route) => (
        <button onClick={showPage} key={route.id} page-id={route.id}>
          {route.name}
        </button>
      ))}
      {routes[pageId].page}
    </div>
  );
}

export default Router2;
