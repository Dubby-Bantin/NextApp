"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container bg-black">
      <Slider {...settings}>
        <div>
          <Image alt="next-image" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <Image alt="next-image" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <Image alt="next-image" src="http://picsum.photos/400/200" />
        </div>
        <div>
          <Image alt="next-image" src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
