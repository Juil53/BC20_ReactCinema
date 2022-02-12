import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Typography } from "@mui/material";
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
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";

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

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogin = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <AccountBoxIcon style={{ color: "white" }} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <NavLink to="/auth">
                          <Button
                            variant="contained"
                            style={{
                              color: `#ffffff`,
                              backgroundColor: `#ff2c1f`,
                            }}
                          >
                            Log in
                          </Button>
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <NavLink to="/register">
                          <Button
                            variant="contained"
                            style={{
                              color: `#ffffff`,
                              backgroundColor: `#ff2c1f`,
                            }}
                          >
                            Register
                          </Button>
                        </NavLink>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      );
    }
    return (
      <Button
        onClick={() => {
          localStorage.removeItem("UserClient");
          history.push("/");
        }}
        variant="text"
        style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
      >
        Logout
      </Button>
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
        <Toolbar
          disableGutters
          className={colorChange ? "navbar colorChange" : "navbar"}
        >
          {/* Logo */}
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img src="/img/footerlogo.jpg" alt="logo" />
          </Typography>

          {/* Menu Icon */}
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
                    sx={{ color: "#ff2c1f" }}
                    style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
                    variant="contained"
                  >
                    HomePage
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/movies">
                  <Button
                    sx={{ color: "#ff2c1f" }}
                    style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
                    variant="contained"
                  >
                    List Movies
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/booking">
                  <Button
                    sx={{ color: "#ff2c1f" }}
                    style={{ color: `#ffffff`, backgroundColor: `#ff2c1f` }}
                    variant="contained"
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
          </Box>

          {/* Text Nav */}
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

          {/* Login Register */}
          {handleLogin()}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
