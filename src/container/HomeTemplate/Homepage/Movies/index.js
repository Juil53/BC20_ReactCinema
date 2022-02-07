import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import { useStyles } from "../../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { actMovies } from "./Modules/action";
import { NavLink } from "react-router-dom";

export default function Movies() {
  const [hidden, setHidden] = useState(true);
  const maxItemShow = 8;
  // getState from MoviesReducer
  const arrMovies = useSelector((state) => state.MoviesReducer.data);
  const dispatch = useDispatch();
  // call MoviesApi after render
  useEffect(() => {
    dispatch(actMovies());
  }, []);

  //Filter short ArrMovies to Show
  const openingMovie = arrMovies?.filter((movie) => movie.dangChieu === true);
  const shortArrMovie = () => {
    if (hidden) {
      return openingMovie?.slice(0, maxItemShow);
    }
    return openingMovie;
  };

  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {shortArrMovie()?.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{ backgroundColor: "#001232" }}
                className={classes.card}
              >
                <div className={classes.cardContainer}>
                  <img src={item.hinhAnh} className={classes.cardMedia} />
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="subtitle1">
                    {item.tenPhim}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardContent}>
                  <NavLink to={`/detail/${item.maPhim}`}>
                  <Button variant="outlined" size="small" color="primary" style={{marginRight:'10px'}}>
                    Detail Movie
                  </Button>
                  </NavLink>
                  <Button variant="outlined" size="small" color="primary">
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Container style={{ textAlign: "right" }}>
          <Button
            size="small"
            variant="text"
            color="warning"
            sx={{ mt: 2 }}
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            {hidden ? "Show More..." : "Show Less"}
          </Button>
        </Container>
      </Container>
    </div>
  );
}
