"use client";

import Image from "next/image";
import stackingimage from "../../../../public/webpage/NotusStacking.webp";

import { useState } from "react";
import { FaCheckCircle, FaCogs, FaTools } from "react-icons/fa"; // Example icons
import TherosFeatureCard from "@/app/components/TherosFeatureCard";

const Stacking = () => {
  const [activeTab, setActiveTab] = useState("specs");

  const technicalSpecifications = [
    { title: "System Dimension (m)", content: "11.5 (L) x 6.5 (W) x 4.5 (H)" },
    { title: "Temperature", content: "Max 230°C" },
    { title: "Cooling Method", content: "Forced Convection" },
    { title: "Conveyor Speed", content: "Max 120 ft/min" },
    { title: "Conveyor Material", content: "SUS304 (Stainless Steel)" },
    { title: "Output", content: "Max 180UPM (Ø230mm)" },
    { title: "Scalable", content: "2 - 4 Lanes" },
    { title: "Customer’s Product Size", content: "< Ø230 x 150 mm H" },
    { title: "Power", content: "AC 415V 3 phase 50 Hz" },
    { title: "Belt Width", content: "660mm" },
  ];

  return (
    <div className="container mx-auto">
      <div className="min-h-screen content-center">
        {/* Photo + Text Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16 mx-12">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={stackingimage} // Replace with your image
              alt="Heater Box"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Text on the right */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-4xl font-bold mb-4">Stacking</h3>
            <p className="text-xl mb-4">
              The Stacking Module is the last component of the Backend Automation line.
              It is capable of up to 900UPM to catch up with upstream
              modules.
            </p>
            <p className="text-xl mb-4">
              It utilizes gravity to achieve high-speed stacking the with
              maximum of 225UPM per lane.
            </p>
          </div>
        </section>
      </div>

      {/* Brief Description */}
      <section>
        <Image
          src={stackingimage} // Replace with your image path
          alt="Image 4"
          className="w-3/4 h-auto object-cover justify-center mx-auto"
        />
      </section>

      <section className="mb-12">
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify ">
          The setup allows for rapid stacking of products through
          gravity-induced falls at high speeds, reaching a maximum output of 900
          units per minute.
        </p>
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify ">
          It utilizes a tapping mechanism to guarantee the proper nesting of all
          items during the stacking process, ensuring accurate alignment and
          organization as they descend.
        </p>
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify ">
          This system&apos;s combination of high-speed gravity stacking and tapping
          ensures an orderly and efficient stacking procedure, essential for
          smooth production workflows.
        </p>
      </section>

      {/* Technical Spec and Features Section  */}
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
                Techincal Specifications{" "}
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

              {/* Feature Card 6 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaTools className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    {" "}
                    Modular design scalable to multiple lanes{" "}
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

export default Stacking;
