import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  buttonLink: string;
}

const ProductCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imgAlt,
  imgSrc,
  buttonLink,
}) => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-md p-4 flex flex-col items-center h-full">
      <div className="w-full h-64 relative mb-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="scale-down"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-grow w-full">
        <h3 className="text-xl font-semibold text-left mb-2">{title}</h3>
        <p className="text-lg font-medium text-left mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        <Link href={buttonLink} passHref>
          <button className="px-20 py-2 bg-black text-white rounded-2xl text-lg whitespace-nowrap">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
