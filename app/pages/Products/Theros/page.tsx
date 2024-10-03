"use client";

import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import heaterboximage from "../../../../public/webpage/heaterbox.webp";
import therosXrayimage from "../../../../public/webpage/SingleBeltWebsiteModel.webp";
import theroslayerimage from "../../../../public/webpage/Scalability Website Model.webp";
import therosimage from "../../../../public/webpage/TherosWebsiteModel.webp";
import { useState } from "react";

import {
  FaCheckCircle,
  FaThermometerHalf,
  FaCogs,
  FaChartLine,
  FaTools,
  FaClock,
} from "react-icons/fa"; // Example icons
import TherosFeatureCard from "@/app/components/TherosFeatureCard";

const Theros = () => {
  const [activeTab, setActiveTab] = useState("specs");

  const technicalSpecifications = [
    { title: "Oven Dimension (m)", content: "11.5 (L) x 6.5 (W) x 4.5 (H)" },
    { title: "Temperature", content: "Max 230°C" },
    { title: "Heater", content: "IR tube" },
    { title: "Conveyor Speed", content: "Max 120 ft/min" },
    { title: "Conveyor Material", content: "SUS304 (Stainless Steel)" },
    { title: "Output", content: "Max 180UPM (Ø230mm)" },
    { title: "Scalable", content: "7, 9 & 11 Zones" },
    { title: "Customer’s Product Size", content: "< Ø230 x 150 mm H" },
    { title: "Power", content: "AC 415V 3 phase 50 Hz" },
    { title: "Belt Width", content: "660mm" },
  ];

  const customizationOptions = [
    { levels: 3, zones: 7, height: 5.2, dwellTime: 81 },
    { levels: 4, zones: 9, height: 5.8, dwellTime: 105 },
    { levels: 5, zones: 11, height: 6.5, dwellTime: 129 },
  ];

  return (
    <div className="container mx-auto">
      <div className="min-h-screen content-center">
        {/* Photo + Text Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={therosimage} // Replace with your image
              alt="Heater Box"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Text on the right */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-4xl font-bold mb-4">Theros</h3>
            <p className="lg:text-xl mb-4 md:text-lg sm:text-base">
              Theros is a Spiral Infra-Red Oven that is capabale of a max
              temperature of 230°C.
            </p>
            <p className="lg:text-xl mb-4 md:text-lg sm:text-base">
              This Oven has enclosed temperature-controlled zones, a compact
              footprint of (9.5mx6m), and offers scalable options with 7, 9, or
              11 heating zones.
            </p>
            <p className="lg:text-xl mb-4 md:text-lg sm:text-base">
              It can handle a maximum output of 250 UPM and provides variable
              belt speeds, including a top speed of 120 FPM.
            </p>
          </div>
        </section>
      </div>

      {/* Product array Section */}
      <section className="py-24 lg:px-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/* Test margins for phone screen */}
          <div className="sm:my-4">
            <Image
              src={heaterboximage} // Replace with your image path
              alt="Image 1"
              width={600}
              height={400}
              className="w-full h-1/2 object-fill"
            />
            <p className="py-4 text-2xl md:text-3xl text-center font-semibold"> Heating </p>
            <p className="text-xl py-6 text-justify px-4">
              Our system features modular heater boxes for easy replacements,
              efficient Infrared heating, precise temperature control, and the
              capability to reach higher temperatures than conventional ovens,
              all while remaining energy efficient.
            </p>
          </div>
          <div className="my-8">
            <Image
              src={theroslayerimage} // Replace with your image path
              alt="Image 2"
              width={600}
              height={400}
              className="w-full h-1/2 object-contain"
            />
            <p className="py-4 text-3xl text-center font-semibold">
              {" "}
              Scalability{" "}
            </p>
            <p className="text-xl py-6 text-justify px-4">
              Designed with scalability in mind, it allows varying numbers of
              zones (7, 9, 11). This flexibility more configuration of curing
              times to suit diverse curing time requirements, providing a highly
              adaptable solution for your specific needs.
            </p>
          </div>
          <div className="my-8">
            <Image
              src={therosXrayimage} // Replace with your image path
              alt="Image 3"
              width={600}
              height={400}
              className="w-full h-1/2 object-contain"
            />
            <p className="py-4 text-3xl text-center font-semibold">
              {" "}
              Single Belt System{" "}
            </p>
            <p className="text-xl py-6 text-justify px-4">
              Employs a single belt design to eliminate product transfer issues,
              reducing complications. It also requires fewer motors compared to
              its predecessor, resulting in enhanced energy efficiency.
              Additionally, we&apos;ve enhanced the take-up design to decrease
              the frequency of belt cutting, reducing maintenance work.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}

{/* Tabs Section */}
<section className="mb-16 mt-4">
  {/* Dropdown for small screens */}
  <div className="block sm:hidden px-4 sm:py-8">
    <select
      value={activeTab}
      onChange={(e) => setActiveTab(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md text-lg"
    >
      <option value="specs">Technical Specifications</option>
      <option value="features">Features</option>
      <option value="speed">Customization Options</option>
    </select>
  </div>

  {/* Tab buttons for medium and larger screens */}
  <div className="hidden sm:flex justify-center space-x-4 overflow-x-auto">
    <button
      onClick={() => setActiveTab("specs")}
      className={`text-lg md:text-2xl px-4 md:px-6 py-2 whitespace-nowrap ${
        activeTab === "specs" ? "font-bold border-b-4 border-blue-500" : ""
      }`}
    >
      Technical Specifications
    </button>
    <button
      onClick={() => setActiveTab("features")}
      className={`text-lg md:text-2xl px-4 md:px-6 py-2 whitespace-nowrap ${
        activeTab === "features" ? "font-bold border-b-4 border-blue-500" : ""
      }`}
    >
      Features
    </button>
    <button
      onClick={() => setActiveTab("speed")}
      className={`text-lg md:text-2xl px-4 md:px-6 py-2 whitespace-nowrap ${
        activeTab === "speed" ? "font-bold border-b-4 border-blue-500" : ""
      }`}
    >
      Customization Options
    </button>
  </div>
</section>


      {/* 
      // <div className="text-lg px-4">
          //   <h3 className="text-4xl font-bold mb-6">Technical Specification</h3>
          //   <ul className="list-none space-y-4">
          //     <li>
          //       <strong>Oven Dimension (m):</strong> 11.5 (L) x 6.5 (W) x 4.5 (H)
          //     </li>
          //     <li>
          //       <strong>Temperature:</strong> Max 230°C
          //     </li>
          //     <li>
          //       <strong>Heater:</strong> IR tube
          //     </li>
          //     <li>
          //       <strong>Conveyor Speed:</strong> Max 120 ft/min
          //     </li>
          //     <li>
          //       <strong>Conveyor Material:</strong> SUS304 (Stainless Steel)
          //     </li>
          //     <li>
          //       <strong>Output:</strong> Max 180 UPM (Ø230mm)
          //     </li>
          //     <li>
          //       <strong>Scalable:</strong> 7, 9 & 11 Zones
          //     </li>
          //     <li>
          //       <strong>Customer’s Product Size:</strong> &lt; Ø230 x 150 mm H
          //     </li>
          //     <li>
          //       <strong>Power:</strong> AC 415V 3 phase 50 Hz
          //     </li>
          //     <li>
          //       <strong>Belt Width:</strong> 660mm
          //     </li>
          //   </ul>
          // </div>` */}

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
                    CE Standard components
                  </h4>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaChartLine className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Component performance monitoring
                  </h4>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaCogs className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Customizable number of zones
                  </h4>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaClock className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Component lifespan monitoring
                  </h4>
                </div>
              </div>

              {/* Feature Card 5 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaThermometerHalf className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">
                    Zonal temperature control
                  </h4>
                </div>
              </div>

              {/* Feature Card 6 */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                <FaTools className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">OEE</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "speed" && (
          <div className="text-lg md:mx-12 sm:mx-4">
            <h3 className="text-4xl font-bold mb-6">Customization Options</h3>

            {/* Customization Table */}
            <div className="overflow-x-auto"> 
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Number of Levels
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Number of Zones
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Height of Oven (m)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Oven Dwell Time (s)
                  </th>
                </tr>
              </thead>
              <tbody>
                {customizationOptions.map((option, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      {option.levels}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {option.zones}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {option.height}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {option.dwellTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </section>

      <div></div>
    </div>
  );
};

export default Theros;
