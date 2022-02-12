import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Box,
  Card,
  Button,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import Summery from "./Summery";
import { actDetailMovies } from "./modules/action";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "../../../styles/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function DetailMovie(props) {
  const classes = useStyles();
  const movie = useSelector((state) => state.DetailMoviesReducer.data);
  const user = useSelector((state) => state.AuthReducer.data);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    //Lấy param Id từ URL
    const { id } = props.match.params;
    dispatch(actDetailMovies(id));
  }, []);

  const filmDangChieu = () => {
    if (movie && movie.dangChieu) {
      return "Opening day";
    }
    return "Coming soon";
  };

  const handleBooking = () => {
    if (localStorage.getItem("UserClient") || user !== null) {
      history.push({
        pathname: "/booking",
        state: {
          id: movie.maPhim,
        },
      });
    } else {
      alert("You're not login.Please login & try again!");
      history.push("/auth");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(/img/bgmoviedetail.jpg)",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "100vh" }}
        effectColor="rgb(16,18,27)" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <Container maxWidth="lg" style={{ position: "relative" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Card sx={{ marginRight: "20px" }}>
                <img src={movie && movie.hinhAnh} />
              </Card>
            </Grid>
            {/* Movie Detail */}
            <Grid item flexGrow={1}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h5" gutterBottom>
                    {movie && movie.tenPhim}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      marginBottom: "10px",
                      color: "gray",
                    }}
                  >
                    Category: Action,Romance,...
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {filmDangChieu()}
                  </Typography>

                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="p">
                        {new Date(movie?.ngayKhoiChieu).toLocaleDateString()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Icon */}
                <Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <a href="https://www.facebook.com" target="_blank">
                      <FacebookIcon
                        className={classes.icon}
                        sx={{ color: "white", marginBottom: "20px" }}
                      />
                    </a>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <TwitterIcon
                      className={classes.icon}
                      sx={{ color: "white", marginBottom: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <InstagramIcon
                      className={classes.icon}
                      sx={{ color: "white", marginBottom: "20px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Rating */}
              <Grid container mt={5}>
                <Grid item>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="half-rating-read"
                      precision={0.5}
                      value={movie?.danhGia / 2}
                      readOnly
                    />
                  </Box>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                style={{ marginTop: "20px", backgroundColor: "#ff2c1f" }}
                onClick={handleBooking}
              >
                Book now!
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Summery movie={movie} />
        </Container>
      </CustomCard>
    </div>
  );
}
