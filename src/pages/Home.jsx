import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import Demo from "../components/hero/Demo";
const Home = () => {
  return (
    <div className="">
      <header className="w-full px-5 md:px-10 lg:px-32 ">
        <Navbar />
      </header>
      <main className="mt-20">
        <HeroSection />
        <Demo />
      </main>
    </div>
  );
};

export default Home;
