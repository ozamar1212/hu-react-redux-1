<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react';
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6

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
<<<<<<< HEAD
    id: "0",
    name: "Page1",
    page: <Page1 />,
  },
  {
    id: "1",
    name: "Page2",
=======
    id: '0',
    name: 'Page1',
    page: <Page1 />,
  },
  {
    id: '1',
    name: 'Page2',
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
    page: <Page2 />,
  },
];

function Router2() {
  const [pageId, setPageId] = useState(0);

  function showPage(event) {
<<<<<<< HEAD
    const newPageId = event.target.getAttribute("page-id");
=======
    const newPageId = event.target.getAttribute('page-id');
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
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
