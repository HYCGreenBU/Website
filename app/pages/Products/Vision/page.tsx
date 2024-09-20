import Image from "next/image";
// import placeholderimage from "../../../media/Images/placeholderimage.jpg";
import bannerimage from "../../../../public/webpage/blurredHelios.webp";
import visionimage from "../../../../public/webpage/vision.webp";

const Vision = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}
      <section className="relative mb-8 w-full h-96">
        <Image
          src={bannerimage} // Replace with your image path
          alt="Descriptive Alt Text"
          objectFit="cover"
          layout="fill"
          className="absolute inset-0 object-cover fill"
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
        <p className="font-semibold text-5xl py-6 text-center"> Vision Systems </p>
        <p className="font-medium leading-relaxed text-xl py-4 px-40 text-justify "> The vision defect detection system is capable of identifying up to 10 distinct defects, with the flexibility to accommodate additional defect patterns as needed. Equipped with four 4-megapixel cameras per lane, this setup ensures comprehensive coverage and high-resolution imaging for precise defect detection. Utilizing machine learning techniques, the system optimizes setup time while enhancing its capacity to identify various defect patterns, enabling a more adaptive and efficient detection process. Operating at a speed of 120 units per minute (UPM) per lane, it thoroughly inspects all aspects of the product, except for areas beneath the flange, ensuring thorough scrutiny across the entirety of the product surface. </p>
      </section>
      
      
      {/* Notus Image Section */}
      <section className="mt-0 flex justify-center ">
        <Image           
              src={visionimage} // Replace with your image path
              alt="Image 4"
              className="w-3/4 h-auto object-cover"
            />
      </section>

      {/* Brief Description */}
      <section className="mt-6 mb-0 px-48">
        <p className="font-semibold text-6xl py-6 text-left justify-center"> Notus Vision System </p>
        <p className="font-medium leading-relaxed text-xl py-4 text-left ">The vision defect detection system boasts the capability to identify 10 predefined defects, with the flexibility to accommodate additional defect types as necessary. It excels in detecting defects as minute as 5mm, and an optional camera upgrade further enhances its capacity to identify even smaller imperfections. Operating at an impressive speed of 0.9 meters per second, the system detects defects seamlessly and in real-time during production. Leveraging a sophisticated deep learning algorithm, it not only identifies defects but also categorizes them based on their type, facilitating efficient quality control processes. </p>
        <p className="font-medium leading-relaxed text-xl py-4 text-left "> Moreover, the system stores images of detected defects for up to a week, providing a comprehensive archive for further analysis and quality assessment. This feature ensures that any anomalies can be reviewed and assessed for improvement or optimization in production processes.</p>
      </section>

 
      {/* Feautres Section */}
      <section className="flex flex-col justify-center mb-10 mt-0">
        <p className="text-7xl text-center font-semibold underline mb-10 mt-20"> Other Features </p>
        <ul className="text-center font-medium text-2xl">
          <li> • CE and UL certified standard components </li>
          <li> • Upgrade kit available for different products </li>
          <li> • Modular design for single lane use </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-8 flex justify-center" >
        <iframe className="w-3/4 aspect-[16/9]" src="https://www.youtube.com/embed/u31qwQUeGuM?si=0s0X583WBdYv47D1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      
    </div>
  );
};

export default Vision;