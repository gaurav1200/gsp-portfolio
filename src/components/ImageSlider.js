import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-[1]`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-[1]`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function ImageSlider({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className=" w-full  text-black cursor-grab">
      <Slider {...settings} autoplay={true}>
        {data?.map((item) => (
          <div>
            <img src={item} alt="slide" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
