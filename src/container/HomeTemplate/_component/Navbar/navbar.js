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
    <Box sx={{ flexGrow: 1}}>
      <AppBar style={{position:"absolute",backgroundColor: "transparent",color: "black", paddingTop:"10px"}}>
        <Toolbar>
          <Typography
            sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src="./logo192.png"
              alt="logo"
            />
          </Typography>
          <Stack spacing={4} direction="row">
            <NavLink to="/" exact activeClassName="active">
              <Button variant="text" style={{color:'white'}}>
                HomePage
              </Button>
            </NavLink>
            <NavLink to="/list-movie" activeClassName="active">
              <Button variant="text" style={{color:'white'}}>
                List Movies
              </Button>
            </NavLink>
            <NavLink to="/booking" activeClassName="active">
              <Button variant="text" style={{color:'white'}}>
                Booking
              </Button>
            </NavLink>
            <NavLink to="/signin">
              <Button variant="contained">Sign In</Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
