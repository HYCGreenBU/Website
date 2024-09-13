import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navigation/navbar";

import placeholderimage from "../public/media/Images/placeholderimage.jpg";

export default function Home() {
  return (
    <>
      {<Navbar/>}
      <div className="container mx-auto px-4 py-8">
        <section>
          <p className="text-5xl text-center"> What We Do </p>
          <p className="text-3xl text-center"> We are dedicated to delivering tailor-made technology solutions that precisely align with your unique business needs. Our commitment begins with a thorough consultation and needs assessment to understand your challenges, objectives, and operational requirements.</p>
        </section>

        <section>
          <p className="text-5xl text-center"> Our Products </p>\
          <Image 
          src={placeholderimage} // Replace with your image path
          alt="Descriptive Alt Text"
          className="w-auto h-auto object-cover"
          />
          <p className="text-3xl text-center"> Theros </p>
          <p className="text-2xl text-center"> Scalable IR oven that is customizable to 3,4 or 5 tiers </p>
          <div className="flex justify-center">
            <Link href="/pages/Products/Theros" passHref>
              <button className="px-4 py-2 bg-black text-white rounded align-center">
                View More
              </button>
            </Link>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Image 
                src={placeholderimage} // Replace with your image path
                alt="Image 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-lg">Cooling</p>
              <div className="flex justify-center">
                <Link href="/pages/Products/Cooling" passHref>
                  <button className="px-4 py-2 bg-black text-white rounded align-center">
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image 
                src={placeholderimage} // Replace with your image path
                alt="Image 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-lg">Vision</p>
              <div className="flex justify-center">
                <Link href="/pages/Products/Vision" passHref>
                  <button className="px-4 py-2 bg-black text-white rounded align-center">
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image 
                src={placeholderimage} // Replace with your image path
                alt="Image 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <p className="text-lg">Stacking</p>
              <div className="flex justify-center">
                  <Link href="/pages/Products/Theros" passHref>
                    <button className="px-4 py-2 bg-black text-white rounded align-center">
                      View More
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}