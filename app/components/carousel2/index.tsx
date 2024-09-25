"use client"; // Add this line at the top of your component file

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./carouselstyle.css";

const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
          {/* Image 1 (Mission) */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="image-wrapper -z-10">
              <Image
                src="/media/Images/test2.svg"
                alt="Image description"
                fill
                style={{ objectFit: "cover" }} // Use cover to fill the background
              />
            </div>

            <div className="flex-col items-center text-overlay text-center z-10 mt-32 object-center mx-auto">
              <Image
                src="/media/Images/hyc.jpg"
                alt="Image description"
                width={300}
                height={150}
                style={{ objectFit: "scale-down" }}
                className="mx-auto"
              />

              <p className="text-NotoSans font-bold text-7xl text-black mb-28 mt-12">
                MISSION
              </p>
              <p className="py-6 font-montserrat text-4xl">
                Innovative, Customizable and High-Quality Products and Services
              </p>
            </div>

          </div>


        {/* Image 2 */}
        <div className="image-wrapper">
          <Image
            src="/media/Images/image1.png"
            alt="Image description"
            fill
            style={{ objectFit: "scale-down" }}
          />
        </div>

        {/* Image 1 */}
        <div className="image-wrapper">
          <Image
            src="/media/Images/image2.png"
            alt="Image description"
            fill
            style={{ objectFit: "scale-down" }}
          />
        </div>
        <div className="image-wrapper bg-black">
          <Image
            src="/media/Images/image3.png"
            alt="Image description"
            fill
            style={{ objectFit: "scale-down" }}
          />
        </div>
        <div className="image-wrapper bg-black">
          <Image
            src="/media/Images/image4.png"
            alt="Image description"
            fill
            style={{ objectFit: "scale-down" }}
          />
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default Carousel2;
