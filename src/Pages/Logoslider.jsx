import React from "react";
import Slider from "react-slick";
// import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Logoslider.css';

import l1 from "../assets//sliderlogo/l1.png";
import l2 from "../assets//sliderlogo/l2.png";
import l3 from "../assets//sliderlogo/l3.png";
import l4 from "../assets//sliderlogo/l4.png";

const logos = [l1, l2, l3, l4,l1, l2, l3, l4];

const Logoslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="bgcolor mt-5">
  
      <Slider {...settings} className="gallery-slider">
        {logos.map((logo, i) => (
          <div key={i} className="gallery-img-wrap">
            <img src={logo} alt={`logo-${i}`} className="logo-img" />
          </div>
        ))}
      </Slider>
  
    </div>
  );
};

export default Logoslider;
