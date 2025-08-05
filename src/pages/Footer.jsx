import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/logo.png" // 👉 replace with your logo path
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            Shubh Studios
          </h1>
        </div>

        {/* Optional: Tagline or copyright */}
        <p className="mt-4 sm:mt-0 text-sm  text-gray-400 font-mono">
          © {new Date().getFullYear()} Shubh Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
