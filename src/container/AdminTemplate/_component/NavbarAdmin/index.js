import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../../styles";

const NavBarAdmin = (props) => {
  const classes = useStyles();
  return (
    <header>
      <AppBar
        style={{
          elevation: 0,
          position: "static",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="/img/footerlogo.jpg" alt="logo" />
          </Typography>
          <Stack spacing={2} direction="row">
            <NavLink to="/dashboard" exact activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                DashBoard
              </Button>
            </NavLink>
            <NavLink to="/add-user" activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                Add User
              </Button>
            </NavLink>
            <NavLink to="/auth" activeClassName="active">
              <Button
                sx={{ color: "white" }}
                className={classes.navbtn}
                variant="text"
              >
                Auth
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

export default NavBarAdmin;
