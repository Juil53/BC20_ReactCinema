import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider } from "@mui/material";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
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
  const {movie} = props;
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
      <TabPanel className={classes.tabPanelColor} value={value} index={0}>
        <Typography variant="h4" gutterBottom>
          SYNOPSIS
        </Typography>
        <Typography paragraph gutterBottom>
          {movie && movie.moTa}
        </Typography>
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
              <img className={classes.circle} src="https://picsum.photos/300" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/300" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/300" />
            </div>
            <div>
              <img className={classes.circle} src="https://picsum.photos/300" />
            </div>
          </Slider>
        </div>
      </TabPanel>
      <TabPanel className={classes.tabPanelColor} value={value} index={1}>
        Bonjour
      </TabPanel>
    </div>
  );
}
