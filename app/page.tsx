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

// import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
// import { Button } from "@nextui-org/button";

import ImageSlider from "./components/Carousel/carousel";

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
  //     description: "Modular rapid cooling conveyor system, with over 50,000 CMH.",
  //   },
  //   {
  //     title: "Stacking",
  //     img: stackingimage,
  //     description: "High-Speed stacking system, achieving up to 900UPM",
  //   },
  //   {
  //     title: "Vision",
  //     img: visionimage,
  //     description: "Vision Inspection on the fly, implementing real-time deep learning algorithms.",
  //   },

  // ];

  return (
    <>
      {<Header />}
      {<Navbar />}
      <div className="bg-white min-w-[320px]">
        <div className="container mx-auto">
          {/* Banner Seciton
          <section className="relative mb-8 w-full h-96">
            <Image
              src={blurredbanner} // Replace with your image path
              alt="Descriptive Alt Text"
              className="w-full inset-0 object-fill h-48"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-100 border border-gray-300 py-16 px-36">
                <p className="text-6xl font-semibold text-gray-800 font-serif"> 
                  HYC Green BU
                </p>
              </div>
            </div>
          </section>
        */}

          {/*  Slider Test  */}
          <main className="flex h-auto flex-col items-center justify-center py-2">
            <ImageSlider />
          </main>

          {/* What we do Section */}
          <section className="mb-4 w-full h-auto mt-24 ">
            <p className="header"> Our Services </p>
            <p className="subheader mx-32">
              {" "}
              We are dedicated to delivering tailor-made technology solutions
              that precisely align with your unique business needs.{" "}
            </p>
            {/* <p className="text-xl text-center py-4 px-40"> Our commitment begins with a thorough consultation and needs assessment to understand your challenges, objectives, and operational requirements.</p> */}
          </section>

          {/* Product Gallery  */}

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
          <section className="py-4 mt-6 w-full px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Image
                  src={coolingimage} // Replace with your image path
                  alt="Image 1"
                  className="w-full h-auto object-contain"
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
                    <button className="px-20 py-4 bg-black text-white rounded align-center text-xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                {/* Vision */}
                <Image
                  src={visionimage} // Replace with your image path
                  alt="Image 2"
                  className="w-full h-auto object-contain"
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
                    <button className="px-20 py-4 bg-black text-white rounded align-center text-xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                {/* Stacking */}
                <Image
                  src={stackingimage} // Replace with your image path
                  alt="Image 3"
                  className="w-full h-auto object-contain"
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
                    <button className="px-20 py-4 bg-black text-white rounded align-center text-xl">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Other Resoruces Section */}
          <section className="px-44">
            <p className="text-3xl font-semibold mt-20 mb-4">
              {" "}
              Other Resources{" "}
            </p>
            <a href="/webpage/productBrochure.pdf" download>
              <button className="px-28 py-5 bg-black text-white rounded align-center text-xl">
                Product Brochure
              </button>
            </a>
          </section>

          {/* Contact Us Section */}
          <section className="mt-24">
            <p className="text-6xl text-center font-semibold ">
              {" "}
              Need help with these Resources ?{" "}
            </p>
            <p className="py-6 text-2xl text-center font-semibold">
              {" "}
              Feel free to reach out and one of our teammates will get back to
              you as soon as possible.{" "}
            </p>
            <div className="flex justify-center">
              <button className="px-28 py-5 bg-black text-white rounded align-center text-xl">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
