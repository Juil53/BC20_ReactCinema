import React from "react";
import { Typography, Grid, Stack, Button } from "@mui/material";
import { useStyles } from "../../../../styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer style={{paddingTop:'20px'}}>
        <Grid container spacing={4} className={classes.footer}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" color="primary">
              <img src="/img/footerlogo.jpg" alt="logo" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center", placeContent: "space-evenly" }}
            >
              <Button
                className={classes.footer}
                variant="outlined"
                sx={{ color: "white" }}
              >
                Home
              </Button>
              <Button
                className={classes.footer}
                variant="outlined"
                sx={{ color: "white" }}
              >
                About Us
              </Button>
              <Button
                className={classes.footer}
                variant="outlined"
                sx={{ color: "white" }}
              >
                Contact us
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FacebookIcon
              className={classes.icon}
              sx={{ color: "white", marginLeft: "20px" }}
            />
            <TwitterIcon
              className={classes.icon}
              sx={{ color: "white", marginLeft: "20px" }}
            />
            <InstagramIcon
              className={classes.icon}
              sx={{ color: "white", marginLeft: "20px" }}
            />
          </Grid>
        </Grid>
        
        <Typography sx={{color:'white',textAlign:'center',backgroundColor:'#032055'}}>
          Copyright © 2020.All Rights Reserved By Boleto
        </Typography>
      </footer>
    </>
  );
}
