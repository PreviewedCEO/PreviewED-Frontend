import React from "react";

import { BiWorld, BiChevronDown } from "react-icons/bi";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const languages = ["English", "Spanish", "French", "German"];

  return (
    <>
      <footer className="bg-[#161a1e] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Column 1: Logo */}
            <div className="col-span-1">
              <a className="text-2xl font-bold text-[#f7e06c]">PreviewED</a>
            </div>

            {/* Column 2: Links */}
            <div className="col-span-1 text-">
              <p className=" font-bold text-white">Products</p>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    All Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    Candidates
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Links */}
            <div className="col-span-1 text-">
              <p className=" font-bold text-white">Resources</p>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    Vlog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    User Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Links */}
            <div className="col-span-1 text-">
              <p className=" font-bold text-white">Company</p>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#f7e06c]">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 6: Search Bar */}
            <div className="col-span-2 h-1/2 flex">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded-l-lg text-gray-200 focus:outline-none focus:border-gray-400"
              />
              <button className="bg-[#ffde59] hover:bg-[#ffeea8] rounded-r-lg p-2">
                <p className="text-[#b28900]">Subscribe</p>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            {/* Language Drop Down */}
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-600">
                <BiWorld className="w-4 h-4" />
                <span>Language</span>
                <BiChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white shadow-md rounded-md hidden">
                <ul className="py-1">
                  {languages.map((language, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">{language}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rights Reserved Text */}
            <div className="text-gray-600">
              &copy; {currentYear} PreviewED. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <FaTwitter className="w-4 h-4 text-gray-600" />
              <FaFacebook className="w-4 h-4 text-gray-600" />
              <FaLinkedin className="w-4 h-4 text-gray-600" />
              <FaYoutube className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </footer>

      {/*
    
    <footer className="bg-[#161a1e] text-[#f7e06c] py-4 mt-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            &copy; {currentYear} PreviewED. All rights reserved.
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    
    */}
    </>
  );
};

export default Footer;
