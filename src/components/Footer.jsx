import React from "react";
import Logo2 from "../assets/logo-2.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F6F7FD] flex mt-10 px-2 py-10 pb-20 justify-evenly">
        {/* Left-side */}
      <div className="flex flex-col items-center space-y-5">
        <img src={Logo2} alt="train logo" className="w-[350px]" />
        <div className="flex space-x-6 text-[#115EE6] ">
          <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
          <FaFacebook className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
          <FaTiktok className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
        </div>
      </div>
      {/* Center Links */}
      <div>
        <ul className="font-bold text-primary text-sm space-y-2">
            <li className="cursor-pointer">Business Owner</li>
            <li className="cursor-pointer">Export Manger</li>
            <li className="cursor-pointer">Export Assistants</li>
            <li className="cursor-pointer">About Train</li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="text-[#85858E] text-xs">
        <p>5A, Building H1, 2nd floor, New Cairo, Egypt</p>
        <p className="mt-2">+20 1070321515</p>
      </div>
    </footer>
  );
};

export default Footer;
