import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "../../assets/PreviewEDLogo.png";
import { Outlet, Link } from "react-router-dom";

const WIP = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 place-items-center">
        <img className="pt-[5%]" src={logo} />
        <p className="text-4xl text-black py-[2%]">
          This section of the website is still a work in progress
        </p>
        <div className="py-[3.5%]">
          <button className="bg-[#ffde59] hover:bg-[#ffeea8] rounded-lg p-4">
            <Link className="hover:text-[#fee058]" to="/">
              Home
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WIP;
