import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../../styles";
import { useState, useEffect } from "react";

const NavBar = (props) => {
  const classes = useStyles();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
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
        <Toolbar className={colorChange ? "navbar colorChange" : "navbar"}>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="/img/footerlogo.jpg" alt="logo" />
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
