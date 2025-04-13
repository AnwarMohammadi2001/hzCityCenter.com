import React from "react";
import { MdEmail, MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "../../utils/ResToggleBtn.css";

const Header = ({ toggleNav, isNavOpen }) => {
  return (
    <header className="h-[80px] md:h-[90px] lg:h-[110px] px-5 md:px-10 lg:px-24 flex transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/hz.png"
            alt="Easy Cargo Logo"
            className="h-12 lg:h-20 w-auto mix-blend-multiply"
          />
          <span className="text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#1C70BA] font-bold">
            Easy <span className="text-[#F4A91A]">Cargo</span>
          </span>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex gap-x-10">
          {/* Location */}
          <div className="flex items-center gap-x-4">
            <FaLocationDot className="text-3xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Locations:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                123 Street, City, Country
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-x-4">
            <MdEmail className="text-3xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                info@easycargo.com
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-x-4">
            <MdAddIcCall className="text-3xl text-[#F4A91A]" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Phone:
              </span>
              <span className="text-lg font-semibold text-[#1C70BA]">
                +1 234 567 890
              </span>
            </div>
          </div>
        </div>

        {/* Responsive toggler */}
        <div className="lg:hidden flex items-center justify-end">
          <input
            id="check-icon"
            type="checkbox"
            className="check-icon hidden"
            checked={isNavOpen}
            onChange={toggleNav}
          />
          <label htmlFor="check-icon" className="icon-menu cursor-pointer">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
