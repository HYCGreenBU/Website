import Image from "next/image";
import placeholderimage from "../../../media/Images/placeholderimage.jpg";



const Theros = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}
      <section className="mb-8">
        <Image 
          src={placeholderimage} // Replace with your image path
          alt="Descriptive Alt Text"
          width={1200} // Adjust width as needed
          height={600} // Adjust height as needed
          className="w-full h-auto object-cover"
        />
      </section>
      
      {/* Video Section */}
      <section className="mb-8" >
        <iframe className="w-full aspect-[16/9]" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
      
      {/* Text Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Section Title</h1>
        <p className="text-lg">
          Here is some text content to describe the section. You can provide detailed information about the content or topic of this page.
        </p>
      </section>
      
      {/* Product array Section */}
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
            <p className="text-lg">Our system features modular heater boxes for easy replacements, efficient IR heating, precise temperature control, and the capability to reach higher temperatures than conventional ovens, all while remaining energy efficient.</p>
          </div>
          <div>
            <Image 
              src={placeholderimage} // Replace with your image path
              alt="Image 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <p className="text-lg">Designed with scalability in mind, it allows varying numbers of zones (7, 9, 11). This flexibility more configuration of curing times to suit diverse curing time requirements, providing a highly adaptable solution for your specific needs.</p>
          </div>
          <div>
            <Image 
              src={placeholderimage} // Replace with your image path
              alt="Image 3"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <p className="text-lg">Employs a single belt design to eliminate product transfer issues, reducing complications. It also requires fewer motors compared to its predecessor, resulting in enhanced energy efficiency. Additionally, we've enhanced the take-up design to decrease the frequency of belt cutting, reducing maintenance work.</p>
          </div>
        </div>
      </section>


      <section>
        <Image           
              src={placeholderimage} // Replace with your image path
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
      </section>
      
      <section>
        <Image           
              src={placeholderimage} // Replace with your image path
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
      </section>

      <section>
        <p className="text-7xl text-center"> Features </p>
      </section>

      <section className="mb-8">
        <Image 
          src={placeholderimage} // Replace with your image path
          alt="Descriptive Alt Text"
          width={1200} // Adjust width as needed
          height={600} // Adjust height as needed
          className="w-full h-auto object-cover"
        />
      </section>

      <section>
        <p className="text-5xl text-center"> We also offer after sales service for peace of mind </p>
      </section>
      
    </div>
  );
};

export default Theros;