import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close menu on mobile
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <div
          className="text-2xl font-extrabold tracking-wider cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          agnyte
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium font-mono">
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => scrollToSection("yug")}>
            Yug
          </li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => scrollToSection("about-us")}>
            About Us
          </li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => scrollToSection("footer")}>
            Footer
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          {["home", "yug", "about-us", "contact", "footer"].map((section) => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer hover:text-yellow-400"
            >
              {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
