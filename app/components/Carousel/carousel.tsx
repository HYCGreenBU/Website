'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ data }: { data: { image: string }[] }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);


  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentImg < data.length - 1) setCurrentImg(currentImg + 1);
    },
    onSwipedRight: () => {
      if (currentImg > 0) setCurrentImg(currentImg - 1);
    },
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <div
        ref={carouselRef}
        style={{
          display: 'flex',
          width: `${data.length * 100}vw`,
          height: '100%',
          transition: 'transform 0.3s ease',
          transform: `translateX(-${currentImg * 100}vw)`,
        }}
      >
        {data.map((v, i) => (
          <div key={i} >
            <Image
              alt={`carousel-image-${i}`}
              src={v.image || 'https://random.imagecdn.app/500/500'}
              width={500}
              height={1200}
              />
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        zIndex: 10 // Ensure buttons are on top of the carousel
      }}>
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          style={{
            border: '1px solid black',
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            opacity: currentImg === 0 ? 0.5 : 1,
          }}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          style={{
            border: '1px solid black',
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            opacity: currentImg === data.length - 1 ? 0.5 : 1,
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
