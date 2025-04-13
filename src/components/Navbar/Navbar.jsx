import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkModeSlice";
import { toggleLanguage } from "../../redux/languageSlice";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, name: "صفحه اصلی", path: "#" },
  { id: 2, name: "درباره ما", path: "#about" },
  { id: 3, name: "فروشگاه‌ها ", path: "#stors" },
  { id: 4, name: "گالری ", path: "#gallary" },
  { id: 5, name: "تماس با ما", path: "#contact" },
];

const Navbar = ({ isNavOpen, toggleNav }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const iconClass = darkMode ? "text-amber-500" : "text-amber-50";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // you can adjust the threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-primary w-full z-50 transition-all duration-500 ${
        isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="flex items-center px-5 md:px-10 lg:px-24 justify-between py-2">
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 py-1.5 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative text-[18px] group cursor-pointer"
            >
              <a
                href={item.path}
                className="text-white font-bold dark:text-amber-300 hover:text-amber-400 dark:hover:text-amber-500"
              >
                {item.name}
              </a>
              <span className="absolute h-[2px] left-0 w-full -bottom-1 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right bg-amber-500 dark:bg-amber-400 transition-transform duration-500"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          {/* Dark Mode and Light Mode Toggle */}
          {darkMode ? (
            <FaSun
              className={`w-8 h-8 cursor-pointer p-2 rounded-full ${iconClass} bg-amber-300 text-gray-800 dark:bg-amber-500 dark:text-white transition-colors duration-500`}
              onClick={() => dispatch(toggleDarkMode())}
            />
          ) : (
            <FaMoon
              className={`w-8 h-8 cursor-pointer p-2 rounded-full ${iconClass} bg-amber-300 text-gray-800 dark:bg-amber-500 dark:text-white transition-colors duration-500`}
              onClick={() => dispatch(toggleDarkMode())}
            />
          )}

          {/* Login Icon */}
          <Link to="/login" className="">
            {" "}
            <FaUser
              className={`w-8 h-8 cursor-pointer p-2 rounded-full ${iconClass} bg-amber-300 text-gray-800 dark:bg-amber-500 dark:text-white transition-colors duration-500`}
              onClick={() => console.log("Navigate to login page")}
            />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isNavOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-4 font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                onClick={toggleNav}
                className="text-white hover:text-amber-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
