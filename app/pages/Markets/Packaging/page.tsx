import React from "react";
import Image from "next/image";
import packageImage from "../../../../public/media/Images/packagingplaceHolder.jpg";

const Packaging = () => {
  return (
    <div>
      {/* Banner Image section */}
      <div className="w-3/4 mx-auto flex justify-center items-center py-8 ">
        <div className="relative w-full h-72">
          <Image  
              src={packageImage}
              fill
              alt="Placeholder Image for Green Packaging"
              className="object-cover"
            />
          </div>
      </div>
      
      <div >
      {/* Initial Content Section */}
        <section className="mb-4 w-3/4 h-auto mt-16 px-4 mx-auto">
          <p className="font-montserrat font-semibold text-3xl text-left mb-12">
            {" "} Packaging{" "}
          </p>
          <p className="font-montserrat font-semibold text-2xl mb-2 text-left">
            {" "} Green Efforts{" "}
          </p>
          <p className="font-montserrat text-lg text-left">
            {" "} As the world is moving towards a Greener and more Sustainable environment, the use of Single-use Plastics is greatly reduced. The popular alternative is the use of paper or molded pulp out of recycled materials {" "}
          </p>
        </section>

      {/* Key Technologies Section */}
        <section className="mb-4 w-3/4 h-auto mt-16 px-4 mx-auto">
          <p className="font-montserrat font-semibold text-2xl mb-2 text-left">
            {" "} Targeted Solutions {" "}
          </p>
          <p className="font-montserrat text-lg text-left">
            {" "} For health and durability reasons, each food service products like trays, bowls, boxes will need to be applied with barrier coating. Part of this process is the curing of the coating material on the surface of these products. Our oven is the excellent solution for this as it produces higher output over a shorter time and smaller floor space. Utilizing our unique Infrared Heater Module, it is also energy efficient and ensure optimize curing according the coating requirements. {" "}
          </p>
          <p className="font-montserrat text-lg text-left mt-2">
            {" "} For molded pulp, our machine can also be used to dry the newly formed products before the next process. {" "}
          </p>
        </section>
      </div>

    </div>
  );
};

export default Packaging;
