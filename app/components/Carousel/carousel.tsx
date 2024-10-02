"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../../public/media/Images/slider1.jpg";
import image2 from "../../../public/media/Images/slider2.jpg";
import image3 from "../../../public/media/Images/slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Interface for image data
interface ImageData {
  src: StaticImageData;
  title: string;
  subtext: string;
  linkto: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
    title: "Green Industry Solutions",
    subtext: "placeholder text",
    linkto: "/",
  },
  {
    src: image2,
    title: "placeholder text",
    subtext: "placeholder text",
    linkto: "/",
  },
  {
    src: image3,
    title: "placeholder text",
    subtext: "placeholder text",
    linkto: "/",
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
    <div className="relative w-full mx-auto mt-6 bg-slate-200 rounded-3xl">
      <div
        className="relative h-[460px] mx-12 group mt-8 bg-slate-200"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer object-cover"
        />
        <div className="absolute p-4 h-auto w-full z-10 bg-slate-200 bg-opacity-80 bottom-0 ">
          <div className="flex justify-between items-center w-full py-4 px-6">
            <div className="flex-col">
              <p className=" text-black font-bold text-3xl font-montserrat">
                {" "}
                {images[currentIndex].title}{" "}
              </p>
              <p className="text-black font-montserrat">
                {" "}
                {images[currentIndex].subtext}{" "}
              </p>
            </div>
            <Link
              href={images[currentIndex].linkto}
              passHref
              className="absolute right-0 object-center px-6 hidden md:block"
            >
              <button className="px-20 py-4 bg-sky-700 text-white rounded-2xl align-center text-xl">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sliding Function */}

      {/* Side Buttons */}
      <div className="mt-8">
        <button
          className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-slate-400 mx-1 -mt-[10px] -translate-y-1/2 bg-slate-200 text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-slate-400 mx-1 -mt-[10px] -translate-y-1/2 bg-slate-200 text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
        <div className="flex justify-center mt-4 bg-slate-200 mb-4">
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
  );
}
