import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}

export default Layout;
