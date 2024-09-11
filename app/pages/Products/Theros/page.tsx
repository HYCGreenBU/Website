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
      <section className="mb-8">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
      
      {/* Text Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Section Title</h1>
        <p className="text-lg">
          Here is some text content to describe the section. You can provide detailed information about the content or topic of this page.
        </p>
      </section>
      
      {/* Additional Images Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Image 
              src="/path/to/your/image1.jpg" // Replace with your image path
              alt="Image 1"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image 
              src="/path/to/your/image2.jpg" // Replace with your image path
              alt="Image 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image 
              src="/path/to/your/image3.jpg" // Replace with your image path
              alt="Image 3"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theros;