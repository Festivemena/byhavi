import { User } from "lucide-react";
import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Joel Idahor",
    role: "Mechatronics Engineer",
    img: "/image/IMG_0790.JPG",
  },
  {
    name: "Festus Efemena",
    role: "Mechatronics Engineer",
    img: "/image/IMG_0777.JPG",
  },
  {
    name: "David Onwuchekwa",
    role: "Mechatronics Engineer",
    img: "/image/IMG_0785.JPG",
  },
  {
    name: "Success Imhoenegamhe",
    role: "Mechatronics Engineer",
    img: "/image/IMG_0775.JPG",
  },
];

const Features = () => {
  return (
    <section id="team" className="bg-white mb-[10rem]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* Heading */}
        <div className="relative font-lufga flex flex-col gap-[.6rem] mt-[10rem] mb-[5rem]">
          <span className="text-codGray/70 text-[18px]">Meet</span>
          <h1 className="text-codGray text-[43px] flex flex-col">
            <span className="leading-10">Our Team</span>
          </h1>
          <div className="absolute w-[5rem] h-[5rem] flex items-center justify-center rounded-full md:left-[18%] left-[58%] top-[20%] bg-blue-100">
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-lufga">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 flex flex-col items-center border border-dotted border-blue-400 hover:shadow-lg transition"
            >
              <Image
                src={member.img}
                width={150}
                height={150}
                alt={member.name}
                className="rounded-full mb-4"
              />
              <h3 className="text-codGray text-[20px]">{member.name}</h3>
              <p className="text-codGray/70 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
