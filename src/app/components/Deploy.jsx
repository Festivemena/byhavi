"use client";

import React from "react";
import { CircuitBoard, Trash2, ExternalLink } from "lucide-react";
import Image from "next/image";

const Deploy = () => {
  const products = [
    {
      heading: "eXhibot Ng",
      details: [
        "Competitive robot battles with educational exhibitions.",
        "Transforms industries like automation and healthcare.",
      ],
      img: "/image/he.png", // Replace with actual image if available
      link: "https://exhibot.ng", // Replace with actual website
    },
    {
      heading: "Binz by Havitech",
      details: [
        "Automated waste sorting for plastic and non-plastic.",
        "Scalable solution for schools and public spaces.",
      ],
      img: "/image/photo_5832384950689710299_y.jpg", // Replace with actual image if available
      link: "https://binz.byhavi.tech", // Replace with actual website
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white">
      <div className="max-w-[1400px] mx-auto py-[10rem] md:px-0 px-5">
        {/* Heading */}
        <div className="relative font-lufga flex flex-col gap-[.6rem] mb-[5rem]">
          <span className="text-blue-400 text-[18px]">Our Innovations</span>
          <h1 className="text-[43px] flex flex-col">
            <span className="leading-10">Products We Have</span>
            <span className="leading-10">Built</span>
          </h1>
          <div className="absolute w-[5rem] h-[5rem] flex items-center justify-center rounded-full md:left-[28%] left-[70%] top-[20%] bg-blue-600/20">
            <CircuitBoard className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-3xl p-8 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-[28px] font-lufga">{product.heading}</h1>
                <ul className="text-sm flex flex-col gap-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Trash2 className="w-5 h-5 text-blue-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-center">
                <Image
                  src={product.img}
                  height={200}
                  width={200}
                  alt={product.heading}
                  className="opacity-75 rounded-md flex justify-items-center hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 flex items-center gap-2 hover:underline"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deploy;
