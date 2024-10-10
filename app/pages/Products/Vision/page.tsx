"use client";

import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import visionimage from "../../../../public/webpage/vision.webp";
import { useState } from "react";
import { FaCheckCircle, FaEye, FaCogs, FaTools } from "react-icons/fa"; // Example icons
import TherosFeatureCard from "@/app/components/TherosFeatureCard";

const Vision = () => {
  const [activeTab, setActiveTab] = useState("specs");

  const technicalSpecifications = [
    { title: "System Dimension (m)", content: "2.1 (L) x 0.54 (W) x 2 (H)" },
    { title: "Minimum defect size (mm)", content: "2 x 2" },
    { title: "Inspection Processing Time (ms)", content: "< 700" },
    { title: "Conveyor Speed", content: "0.9m/s" },
    { title: "Conveyor Material", content: "Polyurethane" },
    { title: "Maximum Output", content: "120 UPM / Lane" },
    { title: "Power", content: "480VAC 3 phase 50 Hz" },
    { title: "Belt Width", content: "85mm - 225mm" },
  ];

  return (
    <div className="container mx-auto">
      <div className="min-h-screen content-center">
        {/* Photo + Text Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16 mx-12">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={visionimage} // Replace with your image
              alt="Heater Box"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Text on the right */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-4xl font-bold mb-4">Vision</h3>
            <p className="text-xl mb-4">
              Another part of the Backend Automation line, the Vision Module is
              capable of vision inspection at speeds up to 0.9m/s. 
            </p>
            <p className="text-xl mb-4">
              It can detect defects as small as 5mm or even smaller with camera
              upgrades. Deep learning algorithm reduces set up time and
              increases the number of defect patterns detectable.
            </p>
          </div>
        </section>
      </div>

      {/* Brief Description */}
      <section className="mt-6 mb-16 mx-12">
        <p className="font-medium leading-relaxed text-xl text-left ">
          The system stores images of detected defects for up to a week,
          providing a comprehensive archive for further analysis and quality
          assessment.
        </p>
        <p className="font-medium leading-relaxed text-xl py-4 text-left ">
          This feature ensures that any anomalies can be reviewed and assessed
          for improvement or optimization in production processes.
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

              {/* Feature Card 5 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaEye className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">AI-based defect detection</h4>
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

export default Vision;
