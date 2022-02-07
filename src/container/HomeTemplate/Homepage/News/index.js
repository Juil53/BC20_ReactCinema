import React from "react";
import Slider from "react-slick";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useStyles } from "../../../../styles";
import { useSelector } from "react-redux";

export default function NewSlider() {
  const arrNew = useSelector((state) => state.MoviesReducer.data);
  // const text = arrNew?.moTa.slice(0,50);

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div style={{ margin: "50px 0" }}>
      <div className={classes.container}>
        <Container maxWidth="xl">
          <Typography variant="h4" color="white" gutterBottom>
            News
          </Typography>
        </Container>
      </div>

      <div>
        <Container maxWidth="xl">
          <Slider {...settings}>
            {arrNew?.map((item, index) => {
              return (
                <Grid key={index} item p={2}>
                  <Card sx={{ width: "100%", height: "400px" }}>
                    <CardMedia
                      component="img"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                      image={item.hinhAnh}
                      alt={item.hinhAnh}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="title"
                        color="white"
                        component="h6"
                      >
                        {item.tenPhim}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtittle1"
                        component="p"
                      >
                        {item.moTa.slice(0, 50)}...
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Slider>
        </Container>
      </div>
    </div>
  );
}
