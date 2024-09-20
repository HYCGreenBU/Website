import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import bannerimage from "../../../../public/webpage/blurredHelios.webp";
import heaterboximage from "../../../../public/webpage/heaterbox.webp";
import therosXrayimage from "../../../../public/webpage/SingleBeltWebsiteModel.webp";
import theroslayerimage from "../../../../public/webpage/Scalability Website Model.webp";
import therostableimage from "../../../../public/webpage/Theros120Table.webp";
import therosimage from "../../../../public/webpage/TherosWebsiteModel.webp";
import featuresimage from "../../../../public/webpage/Features.png";

const Theros = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}
      <section className="relative mb-8 w-full h-96">
        <Image
          src={bannerimage} // Replace with your image path
          alt="Descriptive Alt Text"
          layout="fill" // Use fill to cover the section
          objectFit="cover" // Ensures the image covers the section
          className="absolute inset-0 object-cover fill"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-100 border border-gray-300 py-16 px-36">
            <p className="text-8xl font-semibold text-gray-800 font-serif"> 
              Spiral IR Oven: Theros
            </p>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="mb-8 flex justify-center" >
        <iframe className="w-3/4 aspect-[16/9]" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
      
      {/* Text Section */}
      {/* <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Section Title</h1>
        <p className="text-lg">
          Here is some text content to describe the section. You can provide detailed information about the content or topic of this page.
        </p>
      </section> */}
      
      {/* Product array Section */}
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Image 
              src={heaterboximage} // Replace with your image path
              alt="Image 1"
              width={600}
              height={400}
              className="w-full h-1/2 object-fill"
            />
            <p className="py-4 text-3xl text-center font-semibold"> IR Heater Box </p>
            <p className="text-2xl py-6 text-justify px-4">Our system features modular heater boxes for easy replacements, efficient IR heating, precise temperature control, and the capability to reach higher temperatures than conventional ovens, all while remaining energy efficient.</p>
          </div>
          <div>
            <Image 
              src={theroslayerimage} // Replace with your image path
              alt="Image 2"
              width={600}
              height={400}
              className="w-full h-1/2 object-contain"
            />
            <p className="py-4 text-3xl text-center font-semibold"> Scalability </p>
            <p className="text-2xl py-6 text-justify px-4">Designed with scalability in mind, it allows varying numbers of zones (7, 9, 11). This flexibility more configuration of curing times to suit diverse curing time requirements, providing a highly adaptable solution for your specific needs.</p>
          </div>
          <div>
            <Image 
              src={therosXrayimage} // Replace with your image path
              alt="Image 3"
              width={600}
              height={400}
              className="w-full h-1/2 object-contain"
            />
            <p className="py-4 text-3xl text-center font-semibold"> Single Belt System </p>
            <p className="text-2xl py-6 text-justify px-4">Employs a single belt design to eliminate product transfer issues, reducing complications. It also requires fewer motors compared to its predecessor, resulting in enhanced energy efficiency. Additionally, we&apos;ve enhanced the take-up design to decrease the frequency of belt cutting, reducing maintenance work.</p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="flex justify-center py-6">
        <Image           
              src={therostableimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover"
            />
      </section>

      {/* Theros Image Section */}
      <section>
        <Image           
              src={therosimage} // Replace with your image path
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
      </section>


      {/* Feautres Section */}
      <section>
        <p className="text-7xl text-center font-semibold underline mb-10 mt-20"> Features </p>
      </section>

      <section className="mb-8 flex justify-center">
        <Image 
          src={featuresimage} // Replace with your image path
          alt="Descriptive Alt Text"
          className="w-3/4 h-auto object-cover"
        />
      </section>

      <section>
        <p className="text-5xl text-center"> We also offer after sales service for peace of mind </p>
      </section>
      
    </div>
  );
};

export default Theros;