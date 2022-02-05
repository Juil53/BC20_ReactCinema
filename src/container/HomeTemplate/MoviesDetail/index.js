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
import { Link } from "react-router-dom";

export default function DetailMovie(props) {
  const movie = useSelector((state) => state.DetailMoviesReducer.data);  
  const dispatch = useDispatch();
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
                      marginBottom:'10px',
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
                    {/* <Grid item>
                      <Typography variant="p">{new Date(movie?.ngayKhoiChieu).toLocaleTimeString()}</Typography>
                    </Grid> */}
                  </Grid>
                </Grid>

                {/* Icon */}
                <Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Grid>
                      <Typography variant="p">Icon</Typography>
                    </Grid>
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
                    <Rating name="half-rating-read"precision={0.5} value={movie?.danhGia/2} readOnly />
                  </Box>
                </Grid>
              </Grid>

              <Link to="#">
                <Button
                  variant="contained"
                  style={{ marginTop: "20px", backgroundColor: "#ff2c1f" }}
                >
                  Book now!
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Summery movie={movie}/>
        </Container>
      </CustomCard>
    </div>
  );
}
