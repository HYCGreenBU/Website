import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import bannerimage from "../../../public/webpage/blurredHelios.webp";
import stackingimage from "../../../public/webpage/NotusStacking.webp";

const Products = () => {
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
              Vision Module
            </p>
          </div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="mt-6 mb-0 px-48">
        <p className="font-semibold text-5xl py-6 text-center"> Stacking Systems </p>
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify "> ​The system enables high-speed gravity fall stacking of products, achieving an impressive maximum output of 900 units per minute (UPM). Employing a tapping mechanism, it ensures that all products are properly nested during the stacking process. </p>
      </section>
      
      {/* Notus Image Section */}
      <section className="mt-0 flex justify-center ">
        <Image           
              src={stackingimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover"
            />
      </section>

      {/* Brief Description */}
      <section className="mt-6 mb-0 px-48">
        <p className="font-semibold text-6xl py-6 text-center justify-center"> Stacking Systems </p>
        <Image           
              src={stackingimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover justify-center mx-auto"
        />
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify ">The setup allows for rapid stacking of products through gravity-induced falls at high speeds, reaching a maximum output of 900 units per minute. It utilizes a tapping mechanism to guarantee the proper nesting of all items during the stacking process, ensuring accurate alignment and organization as they descend. This system&apos;s combination of high-speed gravity stacking and tapping ensures an orderly and efficient stacking procedure, essential for smooth production workflows.</p>
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
      {/* <section className="mb-8 flex justify-center" >
        <iframe className="w-3/4 aspect-[16/9]" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section> */}

      
    </div>
  );
};

export default Products;