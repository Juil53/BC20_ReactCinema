import React, { useState, useEffect } from "react";
import { actMovies } from "../Movies/Modules/action";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../../../../styles";

export default function ComingMovies() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const maxItemShow = 4;
  const [hidden, setHidden] = useState(true);
  // get state from reducer
  const arrMovie = useSelector((state) => state.MoviesReducer.data);

  // call ComingMovie Api after render
  useEffect(() => {
    dispatch(actMovies());
  }, []);

  //Filter ComingMovie
  const arrComingMovie = arrMovie?.filter((movie) => movie.sapChieu === true);

  //Show more
  const shortArrMovie = () => {
    if (hidden) {
      return arrComingMovie?.slice(0, maxItemShow);
    }
    return arrComingMovie;
  };

  return (
    <div>
      <Container maxWidth="xl" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {shortArrMovie()?.map((item) => (
            <Grid item key={item.maPhim} xs={12} sm={6} md={3}>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
    </div>
  );
}
