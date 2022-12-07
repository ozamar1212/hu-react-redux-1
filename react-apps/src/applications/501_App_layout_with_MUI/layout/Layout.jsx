import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import CssBaseline from '@mui/material/CssBaseline';

function Layout({ children }) {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
