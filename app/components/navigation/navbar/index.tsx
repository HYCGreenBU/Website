"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (menu: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen == menu ? null : menu);
  };

  return (
    <>
      <div className="w-full h-10 bg-gray-300 object-cover z-30">
        <div className="container h-full">
          <div className="flex justify-between items-center h-full px-4">

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>


            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-black font-semibold">
              <li className="relative">
                <button 
                  className="focus:outline-none"
                  onClick={() => toggleDropdown('About')}
                >
                  About Us
                </button>
                {isDropdownOpen === 'About' && (
                  <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg z-30">
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
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg z-30">
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
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg z-30">
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
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg z-30">
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
                    <div className="absolute top-full left-0 bg-white text-black mt-2 py-2 w-48 shadow-lg z-30">
                      <Link href="/pages/Contact/RFI">
                        <p className="block px-4 py-2 hover:bg-gray-200">RFI</p>
                      </Link>
                    </div>
                  )}
                </li>
            </ul>


{ /*  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */ }



            {/* Mobile Vertical Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 text-white z-50">
                <button 
                  className="absolute top-4 right-4 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ul className="flex flex-col items-start gap-y-4 p-8">
                <li className="relative">
                <button 
                  className="focus:outline-none"
                  onClick={() => toggleMobileDropdown('About')}
                >
                  About Us
                </button>
                {isMobileDropdownOpen === 'About' && (
                   <div className="fixed top-0 left-0 w-2/3 h-full bg-white text-black shadow-lg transition-transform transform translate-x-0">
                   <button className="absolute top-4 right-4 focus:outline-none" onClick={() => toggleMobileDropdown('About')}>
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                   <ul className="p-8">
                     <Link href="/pages/About/HYCGreenBU">
                       <p className="block px-4 py-2 hover:bg-gray-200">HYC Green BU</p>
                     </Link>
                     <Link href="/pages/About/Quality">
                       <p className="block px-4 py-2 hover:bg-gray-200">Our Commitment to Quality</p>
                     </Link>
                     <Link href="/pages/About/EnvironmentalPolicy">
                       <p className="block px-4 py-2 hover:bg-gray-200">Environmental Policy</p>
                     </Link>
                   </ul>
                 </div>
               )}
             </li>
              <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleMobileDropdown('Markets')}
                  >
                    Markets
                  </button>
                  {isMobileDropdownOpen === 'Markets' && (
                    <div className="fixed top-0 left-0 w-2/3 h-full bg-white text-black shadow-lg transition-transform transform translate-x-0">
                    <button className="absolute top-4 right-4 focus:outline-none" onClick={() => toggleMobileDropdown('Markets')}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <ul className="p-8">
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
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleMobileDropdown('Products')}
                  >
                    Products
                  </button>
                  {isMobileDropdownOpen === 'Products' && (
                    <div className="fixed top-0 left-0 w-2/3 h-full bg-white text-black shadow-lg transition-transform transform translate-x-0">
                    <button className="absolute top-4 right-4 focus:outline-none" onClick={() => toggleMobileDropdown('Products')}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <ul className="p-8">
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
                      </ul>
                    </div>
                  )}
                </li>

                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleMobileDropdown('Services')}
                  >
                    Services
                  </button>
                  {isMobileDropdownOpen === 'Services' && (
                    <div className="fixed top-0 left-0 w-2/3 h-full bg-white text-black shadow-lg transition-transform transform translate-x-0">
                    <button className="absolute top-4 right-4 focus:outline-none" onClick={() => toggleMobileDropdown('Services')}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <ul className="p-8">
                      <Link href="/pages/Services/Core">
                        <p className="block px-4 py-2 hover:bg-gray-200">Green BU Core</p>
                      </Link>
                      <Link href="/pages/Services/Partnership">
                        <p className="block px-4 py-2 hover:bg-gray-200">Partnerships</p>
                      </Link>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleMobileDropdown('Contact')}
                  >
                    Contact
                  </button>
                  {isMobileDropdownOpen === 'Contact' && (
                    <div className="fixed top-0 left-0 w-2/3 h-full bg-white text-black shadow-lg transition-transform transform translate-x-0">
                      <button className="absolute top-4 right-4 focus:outline-none" onClick={() => toggleMobileDropdown('Contact')}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                      <ul className="p-8">
                        <Link href="/pages/Contact/RFI">
                          <p className="block px-4 py-2 hover:bg-gray-200">RFI</p>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
