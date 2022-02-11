import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../../styles";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const NavBar = (props, history) => {
  const classes = useStyles();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  const handleLogin = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <>
          <NavLink to="/auth">
            <Button
              variant="contained"
              style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
            >
              Log in
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              variant="contained"
              style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
            >
              Register
            </Button>
          </NavLink>
        </>
      );
    }
    return (
      <>
        <AccountCircleIcon style={{ color: "white" }} fontSize="large" />
        <NavLink to="/">
          <Button
            onClick={() => {
              localStorage.removeItem("UserClient");
            }}
            variant="outlined"
            style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
          >
            Logout
          </Button>
        </NavLink>
      </>
    );
  };

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
            <NavLink to="/" exact>
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                HomePage
              </Button>
            </NavLink>
            <NavLink to="/movies">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                List Movies
              </Button>
            </NavLink>
            <NavLink to="/booking">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                Booking
              </Button>
            </NavLink>
            {handleLogin()}
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
