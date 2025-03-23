import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-[1400px] mx-auto w-full p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src="/image/branding havitech main logo.png"
            alt="Havitech Logo"
            width={170}
            height={170}
            className="inline-block mr-2"
          />
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="bg-electric text-white p-4 font-lufga rounded-full hover:shadow-2xl hover:bg-electric/95 transition"
          >
            <AlignJustify />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <ul className="text-gray-800">
                <li className="hover:bg-gray-200 p-3 text-center">
                  <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 text-center">
                  <Link href="#team" onClick={() => setMenuOpen(false)}>Team</Link>
                </li>
                <li className="hover:bg-gray-200 p-3 text-center">
                  <Link href="#info" onClick={() => setMenuOpen(false)}>Info</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
