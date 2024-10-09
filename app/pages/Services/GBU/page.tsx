import FeatureCard from "@/app/components/FeatureCard";
import React from "react";
import Image from "next/image";
import placeholderImage from "../../../../public/media/Images/group-businesspeople-discussing-natural-resources-preservation-office.jpg";

const GBU = () => {
  const features = [
    {
      title: "Energy Efficiency",
      description: "We look at ways to reduce power consumption.",
      imgAlt: "Energy Efficiency",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Production Yield",
      description: "Time and Space is critical to any production setup.",
      imgAlt: "Production Yield",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Quality Control",
      description:
        "All outgoing products must be of high quality standards, first time, every time.",
      imgAlt: "Quality Control",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Recycle, Reuse",
      description:
        "Heat loss, Excess water, Vapour release, Trimming excess. All these can be recycled and reused.",
      imgAlt: "Recycle, Reuse",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Operation Control",
      description: "User-friendly HMI/GUI, Onsite or remote control.",
      imgAlt: "Operation Control",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Equipment Serviceability",
      description:
        "Machine upkeep: Inspection, Assessment, Maintenance, Repair, Refurbish, Replace.",
      imgAlt: "Equipment Serviceability",
      imgSrc: "/media/Images/hyc.jpg",
    },
    {
      title: "Latest Technology",
      description: "IoT, AI implementation.",
      imgAlt: "Latest Technology",
      imgSrc: "/media/Images/hyc.jpg",
    },
  ];

  return (
    <div className="mx-4">
      {/* Banner Image section */}
      <div className="w-3/4 mx-auto flex justify-center items-center py-8">
        <div className="relative w-full h-72">
          <Image
            src={placeholderImage}
            fill
            alt="Placeholder Image for Green Packaging"
            className="object-cover"
          />
        </div>
      </div>

      {/* Initial Content Section */}
      <div className="mx-16">
        <section className="mb-4 w-full h-auto mt-16">
          <p className="font-montserrat font-semibold text-3xl text-left mb-12">
            {" "}
            Green Business Unit{" "}
          </p>
          <p className="font-montserrat font-semibold text-2xl mb-2 text-left">
            {" "}
            Value Added Services{" "}
          </p>
          <p className="font-montserrat text-lg text-left">
            {" "}
            The Green Business Unit offers a wide selection of premium service
            solutions to benefit your business. Our professional and experienced
            engineers employ advanced Mechanical, Electrical and Software
            engineering know-hows to understand your production process
            pain-points, research and innovate ideas.{" "}
          </p>
        </section>
      </div>

      {/* Key Technologies Section */}
      <section className="mb-4 w-full h-auto mt-16 mx-16">
        <p className="font-montserrat font-semibold text-2xl mb-2 text-left">
          {" "}
          Key Focus{" "}
        </p>
        {/*  Info graphic for the key points */}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imgAlt={feature.imgAlt}
            imgSrc={feature.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default GBU;
