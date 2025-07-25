import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../Pages/Assets/g3117.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] rounded-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center font-poppins text-sm text-black relative">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">ML Models</li>
          <li className="cursor-pointer hover:text-blue-600">AI Agent</li>

          {/* Dropdown */}
          <li
            className="relative cursor-pointer hover:text-blue-600"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center gap-1">
              Products <ChevronDown size={16} />
            </div>
            {showDropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-48 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product A</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product B</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product C</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-blue-600">Case Study</li>
          <li className="cursor-pointer hover:text-blue-600">Company</li>
          <li className="cursor-pointer hover:text-blue-600">Contact us</li>
        </ul>

        {/* Request a Demo Button — Always visible */}
        <button className="hidden lg:block px-6 py-2 rounded-full bg-[#0F429D] text-white text-sm font-medium font-poppins shadow-md hover:bg-[#0d3a89] transition">
          Request a Demo
        </button>

        {/* Hamburger + Request Button for Small Screens */}
        <div className="flex items-center lg:hidden w-full justify-between">
          {/* Logo on left already handled */}
          <div className="flex-1 flex justify-center">
            <button className="px-4 py-1.5 bg-[#0F429D] text-white text-xs rounded-full font-poppins shadow-md hover:bg-[#0d3a89] transition">
              Request a Demo
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="ml-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="lg:hidden px-6 pb-6 pt-2 space-y-3 bg-white font-poppins text-sm text-black rounded-b-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">ML Models</li>
          <li className="cursor-pointer">AI Agent</li>
          <details className="cursor-pointer">
            <summary className="flex items-center justify-between">Products</summary>
            <ul className="pl-4 mt-1 space-y-1">
              <li className="cursor-pointer">Product A</li>
              <li className="cursor-pointer">Product B</li>
              <li className="cursor-pointer">Product C</li>
            </ul>
          </details>
          <li className="cursor-pointer">Case Study</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      )}
    </nav>
  );
};


export default Navbar;
