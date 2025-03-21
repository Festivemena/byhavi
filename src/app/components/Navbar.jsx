import { AlignJustify } from "lucide-react";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-[1400px] mx-auto w-full">
      <div className="flex justify-between items-center">
        <div>
          {/* Updated Logo */}
          
            <Image
              src="/image/branding havitech main logo.png"
              alt="Havitech Logo"
              width={170}
              height={170}
              className="inline-block mr-2"
            />
            
        </div>
        <div>
          <div>
            <button className="bg-electric text-white p-5 font-lufga rounded-full hover:shadow-2xl hover:bg-electric/95 transition">
              <AlignJustify />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
