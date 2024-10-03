import React from 'react';
// import Image from 'next/image';

interface FeatureCardProps {
    title: string;
    content: string;
    // icon: string;
}


const TherosFeatureCard: React.FC<FeatureCardProps> = ({ title, content }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-lg">{content}</p>
        </div>
      );
};


export default TherosFeatureCard;