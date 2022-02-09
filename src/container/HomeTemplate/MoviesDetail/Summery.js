import React, { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider, Grid, Container } from "@mui/material";
import moment from "moment";
import { NavLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function TabPanelVertical(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabPanelVertical.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    flexGrow: 1,
    backgroundColor: "#001232",
  },
  tabPanelColor: {
    color: "#fff",
  },
  appbar: {
    backgroundColor: "transparent",
  },
  circle: {
    borderRadius: "50%",
    border: "2px solid red",
    width: "150px",
    margin: "auto",
  },
}));

export default function Summery(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { movie } = props;
  let arrCumrap = movie?.heThongRapChieu;

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Summery" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      {/* Sumery */}
      <TabPanel className={classes.tabPanelColor} value={value} index={0}>
        <Typography variant="h4" gutterBottom>
          DESCRIPTION
        </Typography>
        <Typography paragraph gutterBottom>
          {movie && movie.moTa}
        </Typography>

        <Typography variant="h4" gutterBottom>
          CINEMA
        </Typography>
        <Grid container justifyContent="space-around">
          {arrCumrap?.map((rap, index) => {
            return (
              <div key={index}>
                <Grid item>
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={rap.logo}
                  />
                </Grid>
              </div>
            );
          })}
        </Grid>

        <Typography variant="h4" style={{ marginTop: "20px" }} gutterBottom>
          CAST
        </Typography>
        <Divider />
        <div>
          <Slider {...settings}>
            <div>
              <img className={classes.circle} src="https://picsum.photos/300" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/280" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/320" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/310" />
            </div>
          </Slider>
        </div>
      </TabPanel>

      {/* Review */}
      <TabPanel className={classes.tabPanelColor} value={value} index={1}>
        Film Hay! Tui xem rồi tui biết
      </TabPanel>
    </div>
  );
}
