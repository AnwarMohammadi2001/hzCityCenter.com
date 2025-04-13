import React, { useState, useEffect } from "react";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "صفحه اصلی", path: "/" },
    { id: 2, name: "درباره ما", path: "/about" },
    { id: 3, name: "فروشگاه‌ها", path: "/stores" },
    { id: 4, name: "گالری", path: "/gallery" },
    { id: 5, name: "تماس با ما", path: "/contact" },
  ];
  return (
    <div
      className={`fixed top-0 w-full md:px-10 lg:px-20 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md z-50" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-x-1">
          <img src="/hz.png" alt="logo" className="h-12 w-auto" />
          <div className="relative h-14 w-[120px] text-end">
            <h1 className="absolute top-0 right-0 text-xl font-extrabold text-primary">
              مارکیت
            </h1>
            <p className="absolute bottom-2 right-0 text-2xl font-semibold text-tertiary">
              حیسن زاده
            </p>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex gap-x-8 text-secondary">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-lg font-bold  hover:text-gray-600 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="hidden relative md:flex w-[100px] h-10 items-center justify-end gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
          >
            <span className="absolute  right-3 top-0.5 text-lg font-medium">
              ورود
            </span>
            <LuLogIn className="w-6 h-6 -scale-x-100" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
