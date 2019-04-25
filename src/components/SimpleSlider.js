import React from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import ActivityCards from "./ActivityCards";
import Activity from "./Activity.json"


const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const SimpleSlider = () =>
  <Slider {...settings}>
    {Activity.map((data) => <ActivityCards {...data} />)}
  </Slider>

export default SimpleSlider
















