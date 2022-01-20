import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function Carousel() {
  const arrCarousel = useSelector((state) => state.CarouselReducer);
  console.log("arrCarousel", arrCarousel);

  //setting cho slick carousel
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="./img/anastasia-ermakova-coffeeshop-sunset.jpg"
          alt="bg1"
          style={{ width: `100%`,height:`600px`}}
        />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}
