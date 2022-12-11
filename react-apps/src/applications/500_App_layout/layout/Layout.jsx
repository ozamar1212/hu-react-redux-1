import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
