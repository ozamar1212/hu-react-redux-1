<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react';
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6

function Page1() {
  return (
    <div>
<<<<<<< HEAD
      <h2> This is My Page one title</h2>
=======
      <h2> This is my page1 Title</h2>
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
      <p>This is my page body</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
<<<<<<< HEAD
      <h2> This is My Page Two title</h2>
      <p>This is my page body</p>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h2> This is My Page Three title</h2>
=======
      <h2> This is my page2 Title</h2>
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
      <p>This is my page body</p>
    </div>
  );
}

function Router1() {
<<<<<<< HEAD
  const [pageToShow, setPageToShow] = useState("page");

  function getPage() {
    if (pageToShow === "page1") {
      return <Page1 />;
    } else if (pageToShow === "page2") {
      return <Page2 />;
    } else if (pageToShow === "page3") {
      return <Page3 />;
=======
  const [pageToShow, setPageToShow] = useState('page1');

  function getPage() {
    if (pageToShow === 'page1') {
      return <Page1 />;
    } else if (pageToShow === 'page2') {
      return <Page2 />;
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
    }
  }

  function showPage1() {
<<<<<<< HEAD
    setPageToShow("page1");
  }
  function showPage2() {
    setPageToShow("page2");
  }
  function showPage3() {
    setPageToShow("page3");
=======
    setPageToShow('page1');
  }

  function showPage2() {
    setPageToShow('page2');
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
  }

  return (
    <div>
      <div>
        <button onClick={showPage1}>Show Page 1</button>
        <button onClick={showPage2}>Show Page 2</button>
<<<<<<< HEAD
        <button onClick={showPage3}>Show Page 3</button>
      </div>
      {getPage()}
      <Page1 />
      <Page2 />
=======
      </div>
      {getPage()}
>>>>>>> 9f2acae9f6cde64da64260e41f649d1c8f43d2a6
    </div>
  );
}

export default Router1;
