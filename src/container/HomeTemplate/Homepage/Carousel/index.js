import React, { useEffect } from "react";
import Slider from "react-slick";
import { actCarousel } from "./modules/action";
import { useSelector, useDispatch } from "react-redux";

export default function Carousel() {
  //get State from reducerCarousel
  const arrCarousel = useSelector((state) => state.CarouselReducer.data);
  const dispatch = useDispatch();
  //call CarouselApi after render
  useEffect(() => {
    dispatch(actCarousel());
  }, []);

  const renderCarousel = () => {
    return arrCarousel?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{
              backgroundImage: `url(${item.hinhAnh})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              position:'relative',
              height:"100vh",
              width:"100%",
            }}
          >
          </div>
        </div>
      );
    });
  };

  //setting cho slick carousel
  let settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    arrows:false,
  };

  return <Slider {...settings}>{renderCarousel()}</Slider>;
}
