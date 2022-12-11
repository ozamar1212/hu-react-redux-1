import { useState } from 'react';

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

function Router1() {
  const [pageToShow, setPageToShow] = useState('page1');

  function getPage() {
    if (pageToShow === 'page1') {
      return <Page1 />;
    } else if (pageToShow === 'page2') {
      return <Page2 />;
    }
  }

  function showPage1() {
    setPageToShow('page1');
  }

  function showPage2() {
    setPageToShow('page2');
  }

  return (
    <div>
      <div>
        <button onClick={showPage1}>Show Page 1</button>
        <button onClick={showPage2}>Show Page 2</button>
      </div>
      {getPage()}
    </div>
  );
}

export default Router1;
