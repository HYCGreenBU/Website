import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h4 className="font-bold text-lg">HYC Singapore Inc. Pte. Ltd.</h4>
          <p>150 Kampong Ampat, Singapore 368324</p>
          <p>#04-04A, KA CENTRE</p>
        </div>

        <div className="mt-4 text-center space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className='w-4' />
            <span>+65 9999 9999</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className='w-4' />
            <span>example@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;