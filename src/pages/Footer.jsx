import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754554241/Screenshot_2025-08-07_at_1.40.17_PM_vekcyt.png" // 👉 replace with your logo path
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            Agnyte
          </h1>
        </div>

        {/* Optional: Tagline or copyright */}
        <p className="mt-4 sm:mt-0 text-sm  text-gray-400 font-mono">
          © {new Date().getFullYear()} Agnyte Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
