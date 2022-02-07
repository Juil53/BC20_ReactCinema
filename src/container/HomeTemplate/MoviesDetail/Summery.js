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

function a11yPropsVertical(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
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
  const [valueTab, setValueTab] = useState(0);
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

  const handleTabs = (event, newVal) => {
    setValueTab(newVal);
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
          <Tab label="Schedule" {...a11yProps(0)} />
          <Tab label="Summery" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Schedule */}
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1, display: 'flex' }} >
          <Grid container>
            <Grid item xs={12} sm={4} md={3}>
              <Tabs
                orientation="vertical"
                value={valueTab}
                onChange={handleTabs}
                aria-label="Vertical tabs example"
              >
                {movie?.heThongRapChieu.map((hethongrap, index) => {
                  return (
                    <Tab
                      label={hethongrap.tenHeThongRap}
                      {...a11yPropsVertical(index)}
                      key={index}
                      icon={<img width={50} height={50} src={hethongrap.logo} />}
                    />
                  );
                })}
              </Tabs>
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              {arrCumrap?.map((cumrap, index) => {
                return (
                  <TabPanel key={index} value={valueTab} index={index}>
                    {cumrap?.cumRapChieu.map((rap, index) => {
                      return <div key={index}>
                        <Box sx={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                          <img
                            style={{ width: '60px', height: '60px' }}
                            src={rap.hinhAnh} />
                          <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{rap.tenCumRap}</p>
                            <p style={{ color: 'grey', fontSize: '14px' }}>{rap.diaChi}</p>
                          </div>
                        </Box>
                        <Container>
                          <Grid container spacing={2}>
                            {rap.lichChieuPhim?.slice(0, 12).map((lichchieu, index) => {
                              return (
                                <Grid key={index} item xs={4}>
                                  <NavLink to="/booking" style={{ color: 'white', fontWeight: 'bold' }}>
                                    {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')}
                                  </NavLink>
                                </Grid>
                              )
                            })}
                          </Grid>
                        </Container>
                      </div>
                    })}
                  </TabPanel>
                )
              })}
            </Grid>
          </Grid>

        </Box>
      </TabPanel>


      {/* Sumery */}
      <TabPanel className={classes.tabPanelColor} value={value} index={1}>
        <Typography variant="h4" gutterBottom>
          DESCRIPTION
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
          </Slider>
        </div>
      </TabPanel>

      {/* Review */}
      <TabPanel className={classes.tabPanelColor} value={value} index={2}>
        Bonjour
      </TabPanel>
    </div>
  );
}
