"use client"; // Add this line at the top of your component file

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './carouselstyle.css';

const ImageCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="image-wrapper">
            <Image
              src="/media/Images/image.png"
              alt="Image description"
              fill
              style={{ objectFit: 'scale-down' }} // Use cover to fill the background
            />
            {/* <div className="text-overlay">
              <h2>Welcome to Our Site</h2>
              <p>Your subtitle or description goes here.</p>
            </div> */}
          </div>
          <div className="image-wrapper">
            <Image
              src="/media/Images/image1.png"
              alt="Image description"
              fill
              style={{ objectFit: 'scale-down' }}
            />
            {/* <div className="text-overlay">
              <h2>Explore Amazing Features</h2>
              <p>Discover what we have to offer!</p>
            </div> */}
          </div>
          <div className="image-wrapper">
            <Image
              src="/media/Images/image2.png"
              alt="Image description"
              fill
              style={{ objectFit: 'scale-down' }}
            />
          </div>
          <div className="image-wrapper bg-black">
            <Image
              src="/media/Images/image3.png"
              alt="Image description"
              fill
              style={{ objectFit: 'scale-down' }}
            />
          </div>
          <div className="image-wrapper bg-black">
            <Image
              src="/media/Images/image4.png"
              alt="Image description"
              fill
              style={{ objectFit: 'scale-down' }}
            />
          </div>
          {/* Add more slides here */}
        </Slider>
      </div>
    );
  };
  
  export default ImageCarousel;