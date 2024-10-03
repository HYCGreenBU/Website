"use client";

import { useState } from "react";
import Image from "next/image";
import coolingimage from "../../../../public/webpage/NotusCooling.webp";
import coolingXrayimage from "../../../../public/webpage/coolingXray.png";

import {
  FaCheckCircle,
  FaThermometerHalf,
  FaCogs,
  FaWind,
} from "react-icons/fa"; // Example icons
import TherosFeatureCard from "@/app/components/TherosFeatureCard";

const Cooling = () => {
  const [activeTab, setActiveTab] = useState("specs");

  const technicalSpecifications = [
    { title: "System Dimension (m)", content: "6.5 (L) x 2.2 (W) x 2.5 (H)" },
    { title: "Temperature", content: "Max 230°C" },
    { title: "Cooling Method", content: "Forced Convection" },
    { title: "Conveyor Speed", content: "Max 120 ft/min" },
    { title: "Conveyor Material", content: "SUS304 (Stainless Steel)" },
    { title: "Maximum Output", content: "480UPM" },
    { title: "Scalable", content: "2 - 4 Lanes" },
    { title: "Customer’s Product Size", content: "< Ø230 x 150 mm H" },
    { title: "Power", content: "AC 415V 3 phase 50 Hz" },
    { title: "Belt Width", content: "660mm" },
  ];

  return (
    <div className="container mx-auto">
      <div className="min-h-screen content-center">
        {/* Photo + Text Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={coolingimage} // Replace with your image
              alt="Heater Box"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Text on the right */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-4xl font-bold mb-4">Cooling</h3>
            <p className="text-xl mb-4"></p>
            <p className="text-xl mb-4">
              Part of a Backend Automation line, the Cooling Module is capable
              of rapid cooling of products with temperature decrease of 120°C
              within 12 seconds.
            </p>
            <p className="text-xl mb-4">
              This cooling mechanism is achieved through forced convection,
              optimizing conditions for this swift temperature drop.
            </p>
            <p className="text-xl mb-4">
              This intricate system harmonizes speed and precision, allowing for
              high-capacity cooling of packaging products.
            </p>
          </div>
        </section>
      </div>
      {/* Brief Description */}
      <section>
        <Image
          src={coolingXrayimage} // Replace with your image path
          alt="Image 4"
          className="w-3/4 h-auto object-cover justify-center mx-auto"
        />
      </section>

      <section className="py-8 mx-12">
        <p className="font-medium leading-relaxed text-xl mb-4 text-justify ">
          {" "}
          This conveyor system has been meticulously engineered with integrated
          cooling solutions, boasting an impressive total air flow of 50,000
          cubic meters per hour (CMH) to effectively cool products.{" "}
        </p>
        <p className="font-medium leading-relaxed text-xl mb-4 text-justify ">
          {" "}
          With a substantial cooling capacity of 32 kW, this system is adept at
          rapidly reducing product temperatures by 120 degrees Celsius in just
          12 seconds.{" "}
        </p>
        <p className="font-medium leading-relaxed text-xl mb-4 text-justify ">
          {" "}
          The temperature-controlled enclosure ensures precise cooling,
          maintaining product temperatures as low as 35°C while operating at a
          controlled 25°C, optimizing the quality and integrity of the cooled
          items.{" "}
        </p>
      </section>

      {/* Tabs Section */}
      <section className="mb-16">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("specs")}
            className={`text-2xl px-6 py-2 ${
              activeTab === "specs"
                ? "font-bold border-b-4 border-blue-500"
                : ""
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`text-2xl px-6 py-2 ${
              activeTab === "features"
                ? "font-bold border-b-4 border-blue-500"
                : ""
            }`}
          >
            Features
          </button>
        </div>
      </section>
      {/* Tab Content Section */}
      <section>
        {activeTab === "specs" && (
          <div className="text-lg px-4">
            <section className=" px-12">
              <h3 className="text-4xl font-bold mb-6">
                {" "}
                Technical Specifications{" "}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technicalSpecifications.map((spec, index) => (
                  <TherosFeatureCard
                    key={index}
                    title={spec.title}
                    content={spec.content}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "features" && (
          <div className="text-lg px-12">
            <h3 className="text-4xl font-bold mb-6">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Card 1 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaCheckCircle className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    CE & UL Certified standard components
                  </h4>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaCogs className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Upgrade kit available for different products
                  </h4>
                </div>
              </div>

              {/* Feature Card 5 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaWind className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Forced convection cooling
                  </h4>
                </div>
              </div>

              {/* Feature Card 6 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaThermometerHalf className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    {" "}
                    Temperature controlled enclosure{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cooling;
