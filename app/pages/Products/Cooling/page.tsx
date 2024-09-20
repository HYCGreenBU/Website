import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import bannerimage from "../../../../public/webpage/blurredHelios.webp";
import coolingimage from "../../../../public/webpage/NotusCooling.webp";
import coolingXrayimage from "../../../../public/webpage/coolingXray.png";


const Cooling = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}
      <section className="relative mb-8 w-full h-96">
        <Image
          src={bannerimage} // Replace with your image path
          alt="Descriptive Alt Text"
          layout="fill" // Use fill to cover the section
          objectFit="cover" // Ensures the image covers the section
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-100 border border-gray-300 py-16 px-36">
            <p className="text-8xl font-semibold text-gray-800 font-serif"> 
              Notus: Cooling Module
            </p>
          </div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="mt-6 mb-0 px-48">
        <p className="font-semibold text-5xl py-6 text-center"> Cooling Systems </p>
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify "> In a setup geared for efficiency, rapid cooling mechanisms swiftly reduce temperatures by a staggering 120C in a mere 12 seconds. The process employs forced convection cooling within a temperature-controlled enclosure, optimizing conditions for this swift temperature drop. This intricate system harmonizes speed and precision, allowing for high-capacity cooling of packaging products.</p>
      </section>
      
      {/* Notus Image Section */}
      <section className="mt-0 flex justify-center ">
        <Image           
              src={coolingimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover"
            />
      </section>

      {/* Brief Description */}
      <section className="mt-6 mb-0 px-48">
        <p className="font-semibold text-6xl py-6 text-center justify-center"> Notus Cooling Systems </p>
        <Image           
              src={coolingXrayimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover justify-center mx-auto"
        />
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify "> This conveyor system has been meticulously engineered with integrated cooling solutions, boasting an impressive total air flow of 50,000 cubic meters per hour (CMH) to effectively cool products. With a substantial cooling capacity of 32 kW, this system is adept at rapidly reducing product temperatures by 120 degrees Celsius in just 12 seconds. The temperature-controlled enclosure ensures precise cooling, maintaining product temperatures as low as 35°C while operating at a controlled 25°C, optimizing the quality and integrity of the cooled items. </p>
      </section>


      {/* Feautres Section */}
      <section className="flex flex-col justify-center mb-10 mt-0">
        <p className="text-7xl text-center font-semibold underline mb-10 mt-20"> Other Features </p>
        <ul className="text-center font-medium text-2xl">
          <li> • CE and UL certified standard components </li>
          <li> • Upgrade kit available for different products </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-8 flex justify-center" >
        <iframe className="w-3/4 aspect-[16/9]" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      
    </div>
  );
};

export default Cooling;