"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import image1 from "../../../public/webpage/Main/Right_View.png";
import image2 from "../../../public/webpage/Main/angled_View.png";
import image3 from "../../../public/webpage/Main/isometric_View.png";

import image4 from "../../../public/webpage/Main/Right_View_small.png";
import image5 from "../../../public/webpage/Main/angled_View_small.png";
import image6 from "../../../public/webpage/Main/isometric_View_small.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
  title: string;
  subtext: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
    title: "THEROS",
    subtext: "Scalable Infra-Red Oven",
  },
  {
    src: image2,
    title: "THEROS",
    subtext: "Belt speeds of 120 FPM",
  },
  {
    src: image3,
    title: "THEROS",
    subtext: "Delivering temperatures of up to 230°C",
  },
];

const images2: ImageData[] = [
  {
    src: image4,
    title: "THEROS",
    subtext: "Scalable Infra-Red Oven",
  },
  {
    src: image5,
    title: "THEROS",
    subtext: "Belt speeds of 120 FPM",
  },
  {
    src: image6,
    title: "THEROS",
    subtext: "Delivering temperatures of up to 230°C",
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-6 bg-black rounded-3xl">
      <div className="hidden sm:block md:block lg:block">
        <div
          className="relative h-[460px] mx-12 group mt-8 bg-black"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            fill
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer object-cover"
          />
          <div className="absolute p-4 h-auto w-full z-10 bg-black bg-opacity-0 bottom-0">
            <div className="flex justify-between items-center w-full py-4 px-6">
              <div className="flex-col">
                <p className="text-white font-bold text-3xl font-montserrat">
                  {images[currentIndex].title}
                </p>
                <p className="text-gray-200 font-montserrat">
                  {images[currentIndex].subtext}
                </p>
              </div>
            </div>
          </div>

          {/* Side Buttons */}
          <div className="mt-8">
            <button
              className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-gray-900 mx-1 -mt-[10px] -translate-y-1/2 bg-black text-white p-2 group"
              onClick={prevSlide}
            >
              <ChevronLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-gray-900 mx-1 -mt-[10px] -translate-y-1/2 bg-black text-white p-2 group"
              onClick={nextSlide}
            >
              <ChevronRight className="text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Sliding Transition Bars */}
        <div className="flex justify-center mt-4 bg-black mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-[#beff46] rounded-xl"
                  : "bg-gray-400 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>

      {/* This div */}
      <div className="sm:hidden">
        <div className="relative h-96 mx-2 group mt-8 bg-black">
          <Image
            src={images2[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            width={1000}
            height={2000}
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer object-scaledown object-center"
          />
          {/* Text overlaying the image */}
          <div className="absolute bottom-0 left-0 p-4 w-full z-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex justify-between items-center w-full py-4 px-6">
              <div className="flex-col">
                <p className="text-white font-bold text-xl font-montserrat">
                  {images[currentIndex].title}
                </p>
                <p className="text-gray-200 text-medium font-montserrat">
                  {images[currentIndex].subtext}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sliding Function */}

        {/* Side Buttons */}
        <div className="mt-8">
          <button
            className="absolute left-0 top-1/2 transform h-64 rounded-xl hover:bg-gray-900 mx-1 -mt-[10px] -translate-y-1/2 bg-black text-white group"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform h-64 rounded-xl hover:bg-gray-900 mx-1 -mt-[10px] -translate-y-1/2 bg-black text-white group"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </button>
          <div className="flex justify-center mt-4 bg-black mb-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 mx-1 ${
                  index === currentIndex
                    ? "bg-[#beff46] rounded-xl"
                    : "bg-gray-400 rounded-xl"
                } transition-all duration-500 ease-in-out`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
