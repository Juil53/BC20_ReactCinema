import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../../../styles";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const history = useHistory();
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

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountBoxIcon style={{ color: " white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink to="/auth">
                  <Button
                    variant="contained"
                    style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
                  >
                    Log in
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/register">
                  <Button
                    variant="contained"
                    style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
                  >
                    Register
                  </Button>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </>
      );
    }
    return (  
        <Button
          onClick={() => {
            localStorage.removeItem("UserClient")
            history.push("/")
          }}
          variant="text"
          style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
        >
          Logout
        </Button>
    )
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
        <Toolbar
          disableGutters
          className={colorChange ? "navbar colorChange" : "navbar"}
        >
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="/img/footerlogo.jpg" alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/" exact>
                  <Button
                    sx={{ color: "white" }}
                    className={classes.navbtn}
                    variant="text"
                  >
                    HomePage
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/movies">
                  <Button
                    sx={{ color: "white" }}
                    className={classes.navbtn}
                    variant="text"
                  >
                    List Movies
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/booking">
                  <Button
                    sx={{ color: "white" }}
                    className={classes.navbtn}
                    variant="text"
                  >
                    Booking
                  </Button>
                </NavLink>
              </MenuItem>
            </Menu>

            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <img src="/img/footerlogo.jpg" alt="logo" />
            </Typography>
            {/* <NavLink to="/" exact>
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
              </NavLink> */}
            {/* {handleLogin()} */}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          </Box>

          {handleLogin()}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
