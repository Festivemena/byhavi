import { Info } from "lucide-react";
import React from "react";

const WhyUs = () => {
  return (
    <section id="info" className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-[10rem]">
        {/* Heading */}
        <div className="relative font-lufga flex flex-col gap-[.6rem] mt-[10rem] mb-[5rem]">
          <span className="text-blue-400 text-[18px]">About Us</span>
          <h1 className="text-[43px] flex flex-col">
            <span className="leading-10">Info and Facts</span>
          </h1>
          <div className="absolute w-[5rem] h-[5rem] flex items-center justify-center rounded-full left-[80%] md:-[26%] top-[20%] bg-blue-600/20">
            <Info className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-lufga">
          <div className="border-dotted border-2 border-blue-400 p-4 rounded-xl">
            <p className="text-[18px]">📅 Founded: October 4, 2024</p>
          </div>
          <div className="border-dotted border-2 border-blue-400 p-4 rounded-xl">
            <p className="text-[18px]">🌍 Location: Nigeria</p>
          </div>
          <div className="border-dotted border-2 border-blue-400 p-4 rounded-xl">
            <p className="text-[18px]">
              🤖 Mission: Ignite belief in Nigeria’s hardware tech industry
            </p>
          </div>
          <div className="border-dotted border-2 border-blue-400 p-4 rounded-xl">
            <p className="text-[18px]">📧 Contact: admin@byhavi.tech</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
