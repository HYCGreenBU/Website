'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({
  data,
}: {
  data: {
    image: string
  }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const elem = carouselRef.current as unknown as HTMLDivElement
      if (elem) {
        const { width, height } = elem.getBoundingClientRect()
        setCarouselSize({ width, height })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '80vh' }}>
      {/* Carousel container */}
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            transition: 'transform 0.3s ease',
            transform: `translateX(-${currentImg * carouselSize.width}px)`,
          }}
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} style={{ position: 'relative', height: '100%', width: '100%', flexShrink: 0 }}>
              <Image
                alt={`carousel-image-${i}`}
                fill
                style={{ objectFit: 'contain' }}
                src={v.image || 'https://random.imagecdn.app/500/500'}
                // src={v || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
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
  )
}

export default Carousel
