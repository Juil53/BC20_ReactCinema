import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../../styles";

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <header>
      <AppBar
        style={{
          elevation: 0,
          position: "fixed",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="./footerlogo.jpg" alt="logo" />
          </Typography>
          <Stack spacing={2} direction="row">
            <NavLink to="/" exact activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                HomePage
              </Button>
            </NavLink>
            <NavLink to="/movies" activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                List Movies
              </Button>
            </NavLink>
            <NavLink to="/booking" activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                Booking
              </Button>
            </NavLink>
            <NavLink to="/signin">
              <Button
                variant="contained"
                style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
              >
                Sign In
              </Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
