"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import styles from "./hero_section.module.css";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

const HeroSection: React.FC = () => {
  const images: string[] = [
    "/images/home1.png",
    "/images/home2.png",
    "/images/home3.png",
    "/images/home4.png",
    "/images/home5.png",
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 4000,
    loop:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay:true,
    autoplaySpeed:400
  };

  return (
    <div>
        <Slider {...settings} className="flex justify-center items-center">
      {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={`rounded-lg`} />
          </div>
        ))}
      </Slider>
         {/* <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000} // Set to match the animation duration
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={`rounded-lg `} />
          </div>
        ))}
      </Carousel> */}
     
    </div>
  );
};

export default HeroSection;
