import React, { useState, useEffect } from "react";
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
import { useStyles } from "../../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { actMovies } from "./Modules/action";

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
  const shortArrMovie = () => {
    if (hidden) {
      return arrMovies?.slice(0, maxItemShow);
    }
    return arrMovies;
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="xl" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {shortArrMovie()?.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={item.hinhAnh}
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6">
                    {item.tenPhim}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Detail Movie
                  </Button>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        ;
        <Button
          variant="text"
          color="warning"
          sx={{ mt: 2 }}
          onClick={() => {
            setHidden(!hidden)
          }}
        >
          {hidden? "Show More" : "Show Less"}
        </Button>
      </Container>
    </div>
  );
}
