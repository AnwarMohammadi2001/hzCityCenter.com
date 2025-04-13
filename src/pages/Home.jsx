import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";
const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className=" dark:bg-zinc-900 transition-colors duration-500">
      <header className="w-full transition-colors duration-500">
        <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
        <Navbar isNavOpen={isNavOpen} toggleNav={closeNav} />
      </header>
      <main className=""></main>
    </div>
  );
};

export default Home;
