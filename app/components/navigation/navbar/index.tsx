"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  return (
    <>
      <div className="w-full h-20 bg-cyan-700 sticky top-0 object-cover z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <div className="relative">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li className="relative">
                  <button 
                    className="focus:outline-none"
                    onClick={() => toggleDropdown('About')}
                  >
                    About Us
                  </button>
                  {isDropdownOpen === 'About' && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                      <Link href="/pages/About/HYCGreenBU">
                        <p className="block px-4 py-2 hover:bg-gray-200">HYC Green BU</p>
                      </Link>
                      <Link href="/pages/About/Quality">
                        <p className="block px-4 py-2 hover:bg-gray-200">Our Commitment to Quality</p>
                      </Link>
                      <Link href="/pages/About/EnvironmentalPolicy">
                        <p className="block px-4 py-2 hover:bg-gray-200">Environmental Policy</p>
                      </Link>
                    </div>
                  )}
                </li>   
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDropdown('Markets')}
                  >
                    Markets
                  </button>
                  {isDropdownOpen === 'Markets' && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                      <Link href="/pages/Markets/FoodPackaging">
                        <p className="block px-4 py-2 hover:bg-gray-200">Food Service and Packaging</p>
                      </Link>
                      {/* <Link href="/product2"> */}
                        <p className="block px-4 py-2 hover:bg-gray-200">Food Processing </p>
                      {/* </Link> */}
                      {/* <Link href="/product2"> */}
                        <p className="block px-4 py-2 hover:bg-gray-200">Automation</p>
                      {/* </Link> */}
                      {/* <Link href="/product2"> */}
                        <p className="block px-4 py-2 hover:bg-gray-200">Semi-Conductor</p>
                      {/* </Link> */}
                      
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDropdown('Products')}
                  >
                    Products
                  </button>
                  {isDropdownOpen === 'Products' && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                      <Link href="/pages/Products/Theros">
                        <p className="block px-4 py-2 hover:bg-gray-200">Theros</p>
                      </Link>
                      <Link href="/pages/Products/Helios">
                        <p className="block px-4 py-2 hover:bg-gray-200">Helios</p>
                      </Link>
                      <Link href="/pages/Products/Cooling">
                        <p className="block px-4 py-2 hover:bg-gray-200">Cooling</p>
                      </Link>
                      <Link href="/pages/Products/Stacking">
                        <p className="block px-4 py-2 hover:bg-gray-200">Stacking</p>
                      </Link>
                      <Link href="/pages/Products/Vision">
                        <p className="block px-4 py-2 hover:bg-gray-200">Vision</p>
                      </Link>
                      <Link href="/pages/Products/Cleaning">
                        <p className="block px-4 py-2 hover:bg-gray-200">Cleaning</p>
                      </Link>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDropdown('Services')}
                  >
                    Services
                  </button>
                  {isDropdownOpen === 'Services' && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                      <Link href="/pages/Services/Core">
                        <p className="block px-4 py-2 hover:bg-gray-200">Green BU Core</p>
                      </Link>
                      <Link href="/pages/Services/Partnership">
                        <p className="block px-4 py-2 hover:bg-gray-200">Partnerships</p>
                      </Link>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDropdown('Contact')}
                  >
                    Contact
                  </button>
                  {isDropdownOpen === 'Contact' && (
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg">
                      <Link href="/pages/Contact/RFI">
                        <p className="block px-4 py-2 hover:bg-gray-200">RFI</p>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
