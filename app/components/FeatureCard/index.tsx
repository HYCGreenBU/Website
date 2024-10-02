import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
    title: string;
    description: string;
    imgAlt: string;
    imgSrc: string;
}


const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imgAlt, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <Image 
        src={imgSrc}
        alt={imgAlt} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;