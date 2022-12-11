import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "fantasy",
            fontWeight: 400,
            fontSize: 30,
          }}
        >
          MYcard
        </Typography>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
