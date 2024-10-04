'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll with wheel
  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += event.deltaY;
    }
  };

  // Handle drag/swipe start
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = event.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Move the scroll faster
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Handle touch swipe for mobile
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartX(event.touches[0].pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const x = event.touches[0].pageX;
    const walk = (startX - x) * 1.5; // Move the scroll faster
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  // Update active index based on scroll position
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const newIndex = Math.round(container.scrollLeft / (container.clientWidth * 0.8)); // Adjust for scaling
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', updateActiveIndex);
    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('scroll', updateActiveIndex);
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-screen cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Image slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[80%] h-[80%] snap-center transition-transform duration-500 ease-in-out mx-4 
              ${index === activeIndex ? 'scale-100' : 'scale-90'}`}
            style={{
              transform: `scale(${index === activeIndex ? 1 : 0.9})`,
              transition: 'transform 0.5s ease',
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Optional: Navigation buttons or indicators */}
      <div className="absolute bottom-0 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
