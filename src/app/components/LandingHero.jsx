"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const LandingHero = () => {
  return (
    <section className="relative w-full h-screen bg-white text-black">
      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto h-full pt-8 px-6">
        <div className="flex flex-col items-center h-full justify-between">
          {/* Navbar */}
          <Navbar />

          {/* Hero Text */}
          <div className="grid grid-cols-12 mb-28 gap-6 w-full">
            <div className="md:col-span-8 col-span-12 text-center md:text-left">
              <h1 className="md:text-[48px] text-[32px]  font-lufga leading-tight animate-fade-in">
                Pioneering Robotics & IoT Innovation in Nigeria
                <br />
                <a
                  href="#products"
                  className="inline-block bg-blue-600 md:text-[18px] text-[16px] text-white py-4 px-6 font-lufga border-dotted border-2 border-gray-400 rounded-lg mt-4 hover:shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Explore Our Projects
                </a>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="md:text-[18px] text-[14px] font-lufga opacity-80">
                At Havitech Core, we ignite belief in Nigeria’s hardware tech
                industry through cutting-edge robotics and IoT solutions,
                inspiring engineers and communities alike.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[url('/Grid6.svg')] opacity-20"></div>
    </section>
  );
};

export default LandingHero;
