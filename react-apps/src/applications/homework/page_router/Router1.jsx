import { useState } from "react";

function Page1() {
  return (
    <div>
      <h2> This is My Page one title</h2>
      <p>This is my page body</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h2> This is My Page Two title</h2>
      <p>This is my page body</p>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h2> This is My Page Three title</h2>
      <p>This is my page body</p>
    </div>
  );
}

function Router1() {
  const [pageToShow, setPageToShow] = useState("page");

  function getPage() {
    if (pageToShow === "page1") {
      return <Page1 />;
    } else if (pageToShow === "page2") {
      return <Page2 />;
    } else if (pageToShow === "page3") {
      return <Page3 />;
    }
  }

  function showPage1() {
    setPageToShow("page1");
  }
  function showPage2() {
    setPageToShow("page2");
  }
  function showPage3() {
    setPageToShow("page3");
  }

  return (
    <div>
      <div>
        <button onClick={showPage1}>Show Page 1</button>
        <button onClick={showPage2}>Show Page 2</button>
        <button onClick={showPage3}>Show Page 3</button>
      </div>
      {getPage()}
      <Page1 />
      <Page2 />
    </div>
  );
}

export default Router1;
