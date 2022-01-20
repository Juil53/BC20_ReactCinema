import React from "react";
import Slider from "react-slick";
import { Typography, Container } from "@mui/material";
import { useStyles } from "../../../../styles";

export default function NewSlider() {
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
    <div>
      <div className={classes.container}>
        <Container maxWidth="xl">
          <Typography variant="h5" gutterBottom align="center">
            News
          </Typography>
        </Container>
      </div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}
