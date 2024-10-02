import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navigation/navbar";
import Header from "./components/navigation/header";

// import placeholderimage from "../public/media/Images/placeholderimage.jpg";
import therosimage from "../public/webpage/TherosWebsiteModel.webp";
import coolingimage from "../public/webpage/NotusCooling.webp";
import stackingimage from "../public/webpage/NotusStacking.webp";
import visionimage from "../public/webpage/vision.webp";
// import blurredbanner from "../public/webpage/blurredHelios.webp";

// import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
// import { Button } from "@nextui-org/button";

import ProductCard from "./components/productCard";

import ImageSlider from "./components/Carousel/carousel";
import Footer from "./components/Footer";

export default function Home() {
  // const list = [
  //   {
  //     title: "Theros",
  //     img: therosimage,
  //     description: "Scalable IR Oven, customizable to 3,4 or 5 tiers.",
  //   },
  //   {
  //     title: "Cooling",
  //     img: coolingimage,
  //     description:
  //       "Modular rapid cooling conveyor system, with over 50,000 CMH.",
  //   },
  //   {
  //     title: "Stacking",
  //     img: stackingimage,
  //     description: "High-Speed stacking system, achieving up to 900UPM",
  //   },
  //   {
  //     title: "Vision",
  //     img: visionimage,
  //     description:
  //       "Vision Inspection on the fly, implementing real-time deep learning algorithms.",
  //   },
  // ];

  const products = [
    {
      title: "Theros",
      description: "Scalable IR Oven, customizable to 3,4 or 5 tiers.",
      imgAlt: "Energy Efficiency",
      imgSrc: "/webpage/TherosWebsiteModel.webp",
      buttonLink: "/pages/Products/Theros"
    },

    {
      title: "Cooling",
      description:
        "Modular rapid cooling conveyor system, with over 50,000 CMH.",
      imgAlt: "Production Yield",
      imgSrc: "/webpage/NotusCooling.webp",
      buttonLink: "/pages/Products/Cooling"
    },

    {
      title: "Stacking",
      description: "High-Speed stacking system, achieving up to 900UPM",
      imgAlt: "Quality Control",
      imgSrc: "/webpage/NotusStacking.webp",
      buttonLink: "/pages/Products/Cooling"
    },

    {
      title: "Vision",
      description:
        "Vision Inspection on the fly, implementing real-time deep learning algorithms.",
      imgAlt: "Recycle, Reuse",
      imgSrc: "/webpage/vision.webp",
      buttonLink: "/pages/Products/Vision"
    },
  ];

  return (
    <>
      {<Header />}
      {<Navbar />}
      <div className="bg-white min-w-[320px] mb-5">
        <div className="container mx-auto">
          {/*  Slider Section  */}
          <main className="flex h-auto flex-col items-center justify-center py-2 px-8 bg-slate-200">
            <ImageSlider />
          </main>

          {/* What we do Section */}
          <section className="mb-4 w-full h-auto mt-16 ">
            <p className="header"> Our Services </p>
            <p className="subheader mx-32">
              {" "}
              We are dedicated to delivering tailor-made technology solutions
              that precisely align with your unique business needs.{" "}
            </p>
            {/* <p className="text-xl text-center py-4 px-40"> Our commitment begins with a thorough consultation and needs assessment to understand your challenges, objectives, and operational requirements.</p> */}
          </section>

          {/* Product showreel */}
        
          <div className="mx-12">
            <p className=" mx-12 font-montserrat text-3xl font-semibold "> Our Prodcuts </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-16">
            {products.map((feature, index) => (
              <ProductCard
                key={index}
                title={feature.title}
                description={feature.description}
                imgAlt={feature.imgAlt}
                imgSrc={feature.imgSrc}
                buttonLink={feature.buttonLink}
              />
            ))}
          </div>

          {/* Theros */}
          <section className="">
            {/* <div>
              <p className="header"> Our Products </p>
            </div>       */}

            <div className="flex justify-center">
              <Image
                src={therosimage} // Replace with your image path
                alt="Descriptive Alt Text"
                className="w-auto h-auto object-cover py-2 flex justify-center"
              />
            </div>
          </section>
          <section>
            <p className="text-3xl text-center font-sans font-semibold font-style: normal font-weight: 400 ">
              {" "}
              THEROS{" "}
            </p>
            <p className="text-2xl text-center py-4">
              {" "}
              Scalable IR oven that is customizable to 3,4 or 5 tiers{" "}
            </p>
            <div className="flex justify-center">
              <Link href="/pages/Products/Theros" passHref>
                <button className="px-20 py-4 bg-black text-white rounded-2xl align-center text-xl">
                  View More
                </button>
              </Link>
            </div>
          </section>

          {/* Cooling */}
          <div className="flex justify-around flex-row">
            <section className="py-4 mt-6 w-full ">
              <div className="bg-slate-200 w-full h-auto flex lg:flex-row  md:flex-row justify-around ">
                <div className="w-1/4">
                  <Image
                    src={coolingimage} // Replace with your image path
                    alt="Image 1"
                    className="h-auto object-contain"
                  />
                  <p className="text-2xl text-center py-2 font-semibold">
                    Cooling
                  </p>
                  <p className="text-2xl text-center py-2">
                    {" "}
                    Rapid Cooling Conveyor{" "}
                  </p>
                  <div className="flex justify-center py-3">
                    <Link href="/pages/Products/Cooling" passHref>
                      <button className="px-20 py-4 bg-black text-white rounded-3xl align-center text-xl md:text-lg ">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-1/4">
                  {/* Vision */}
                  <Image
                    src={visionimage} // Replace with your image path
                    alt="Image 2"
                    className="h-auto object-contain"
                  />
                  <p className="text-2xl text-center py-2 font-semibold">
                    Vision
                  </p>
                  <p className="text-2xl text-center py-2">
                    {" "}
                    Vision inspection on the fly{" "}
                  </p>
                  <div className="flex justify-center py-3">
                    <Link href="/pages/Products/Vision" passHref>
                      <button className="px-20 py-4 bg-black text-white rounded-3xl align-center text-xl md:text-lg">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-1/4">
                  {/* Stacking */}
                  <Image
                    src={stackingimage} // Replace with your image path
                    alt="Image 3"
                    className="h-auto object-contain"
                  />
                  <p className="text-2xl text-center py-2 font-semibold">
                    Stacking
                  </p>
                  <p className="text-2xl text-center py-2 ">
                    {" "}
                    Rapid stacking of products{" "}
                  </p>
                  <div className="flex justify-center py-2">
                    <Link href="/pages/Products/Stacking" passHref>
                      <button className="px-20 py-4 bg-black text-white rounded-3xl align-center text-xl md:text-lg">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Other Resoruces Section */}
          <section className="px-32">
            <p className="text-3xl font-semibold mt-20 mb-4">Other Resources</p>
            <p className="text-2xl font-medium mb-4">
              Addtional information on our products
            </p>
            <div className="flex ">
              <a href="/webpage/productBrochure.pdf" download>
                <button className="buttonMain">Product Brochure</button>
              </a>
            </div>
          </section>

          {/* Contact Us Section */}

          <section className="px-32">
            <p className="text-3xl font-semibold mt-20 mb-4">
              Need help with these resources ?
            </p>
            <p className="text-2xl font-medium mb-4">
              Feel free to reach out and one of our teammates will get back to
              you as soon as possible.
            </p>
            <a>
              <button className="buttonMain">Contact us</button>
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
