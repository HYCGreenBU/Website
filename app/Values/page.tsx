'use client';
// import image1 from "../media/Images/image (1).png";
// import image2 from "../media/Images/image (2).png";
// import image3 from "../media/Images/image (3).png";
// import image4 from "../media/Images/image (4).png";

// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'

import Head from 'next/head';
import Carousel from '../components/Carousel/carousel'
const image = "/media/Images/pic1.jpg";
const image1 = "/media/Images/pic2.jpg";
const image2 = "/media/Images/pic3.jpg";
const image3 = "/media/Images/pic4.jpg";
const image4 = "/media/Images/pic5.jpg";

const DATA = [
  { image: image },
  { image: image1 },
  { image: image2 },
  { image: image3 },  
  { image: image4 },
]



export default function Home() {
  return (
    <>
    <Head>
      <title>HYC Values</title> {/* This sets the browser tab title */}
      <meta name="description" content="A beautiful carousel showcasing images" />
    </Head>

    <main className="flex w-full min-h-screen flex-col items-center justify-center text-center">
      <Carousel data={DATA} />
    </main>
    </>
  )
}