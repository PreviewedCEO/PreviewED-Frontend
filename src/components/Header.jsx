import React from "react";
import { HiOutlineChatAlt2, HiOutlineBell } from "react-icons/hi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-white py-4">
      <div className="flex items-center">
        <ul className="flex space-x-4 items-center text-[#282865]">
          <div className="px-4">
            <a className="text-2xl font-bold">PreviewED</a>
          </div>
          <li>
            <Link className="hover:text-[#fee058]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#fee058]" to="/all-jobs">
              All Jobs
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#fee058]" to="/companies">
              Companies{" "}
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#fee058]" to="/people">
              People
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#fee058]" to="/career-advice">
              Career Advice
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-4">
        <ul className="flex space-x-4 items-center">
          <li>
            <HiOutlineChatAlt2 className="w-6 h-6 hover:text-[#fee058]" />
          </li>
          <li>
            <HiOutlineBell className="w-6 h-6 hover:text-[#fee058]" />
          </li>
          <li>
            <div className="flex items-center">
              <img
                src="https://picsum.photos/200/300"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <BsFillCaretDownFill className=" w-4 h-4 m-1 cursor-pointer hover:text-[#fee058]" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
