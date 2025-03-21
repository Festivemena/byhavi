import React from "react";

const Footer = () => {
  return (
    <section className="text-black bg-white">
      <div className="max-w-[1200px] font-lufga mx-auto px-5 md:px-0 py-[2rem]">
        <footer className="py-2 px-2 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            {/* Social Links */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="https://twitter.com/havitech_cc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center space-x-2 text-gray-900"
              >
                <span>📢 X</span>
              </a>
              <a
                href="https://instagram.com/havitech_cc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center space-x-2 text-gray-900"
              >
                <span>📸 Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/havitech-core"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center space-x-2 text-gray-900"
              >
                <span>💼 LinkedIn</span>
              </a>
            </div>
            {/* Quote */}
            <p className="text-sm italic opacity-80">
              "Building tomorrow’s tech today—empowering Nigeria through
              robotics and innovation."
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
