import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navigation/navbar";

import placeholderimage from "../public/media/Images/placeholderimage.jpg";
import therosimage from "../public/webpage/TherosWebsiteModel.webp";
import coolingimage from "../public/webpage/NotusCooling.webp";
import stackingimage from "../public/webpage/NotusStacking.webp";
import visionimage from "../public/webpage/vision.webp";

export default function Home() {
  return (
    <>
      {<Navbar/>}
      <div className="container mx-auto px-4 py-8">
      {/* What we do Section */}
        <section className="py-16"> 
          <p className="text-7xl text-center "> What We Do </p>
          <p className="text-3xl text-center py-4"> We are dedicated to delivering tailor-made technology solutions that precisely align with your unique business needs. Our commitment begins with a thorough consultation and needs assessment to understand your challenges, objectives, and operational requirements.</p>
        </section>


      {/* Product Gallery  */}
        {/* Theros */}
        <section>
          <p className="text-7xl text-center py-2"> Our Products </p>
          <Image 
          src={therosimage} // Replace with your image path
          alt="Descriptive Alt Text"
          className="w-auto h-auto object-cover py-2"
          />
          <p className="text-3xl text-center font-sans font-semibold font-style: normal font-weight: 400 "> THEROS </p>
          <p className="text-2xl text-center py-4"> Scalable IR oven that is customizable to 3,4 or 5 tiers </p>
          <div className="flex justify-center">
            <Link href="/pages/Products/Theros" passHref>
              <button className="px-20 py-4 bg-black text-white rounded align-center text-xl">
                View More
              </button>
            </Link>
          </div>
        </section>

        {/* Cooling */}        
        <section className="py-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Image 
                src={coolingimage} // Replace with your image path
                alt="Image 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-2xl text-center py-2 font-semibold">Cooling</p>
              <p className="text-2xl text-center py-2"> Rapid Cooling Conveyor </p>
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
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-2xl text-center py-2 font-semibold">Vision</p>
              <p className="text-2xl text-center py-2"> Vision inspection on the fly </p>
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
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-2xl text-center py-2 font-semibold">Stacking</p>
              <p className="text-2xl text-center py-2 "> Rapid stacking of products </p>
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
        <section>
          <p className="text-5xl font-semibold mt-20 mb-4"> Other Resources </p>
          <a href="/webpage/productBrochure.pdf" download>
            <button className="px-28 py-5 bg-black text-white rounded align-center text-2xl">
              Product Brochure
            </button>
          </a>
        </section>

        {/* Contact Us Section */}
        <section className="mt-24">
          <p className="text-6xl text-center font-semibold "> Need help with these Resources ? </p>
          <p className="py-6 text-3xl text-center font-semibold"> Feel free to reach out and one of our teammates will get back to you as soon as possible. </p>
          <div className="flex justify-center">
            <button className="px-28 py-5 bg-black text-white rounded align-center text-2xl">
              Contact Us
            </button>
          </div>

        </section>

      </div>
    </>
  );
}