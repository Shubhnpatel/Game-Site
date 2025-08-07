import React, { useState, useEffect } from "react";
import "../App.css"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState("home");

  const circleImage =
    "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754547598/ChatGPT_Image_Aug_7_2025_at_11_37_56_AM-2_mio9uj.png";

  // Updated navItems to include the marker ID for Yug
  const navItems = [
    { id: "home", label: "Home" },
    { id: "yug-marker", label: "Yug" }, // 👈 use marker for accurate tracking
    { id: "about-us", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    // Scroll to the actual section, not the marker
    const realId = id === "yug-marker" ? "yug" : id;
    const section = document.getElementById(realId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      setActive(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 👈 lower threshold for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  });

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div
  className="text-4xl font-extrabold tracking-wider cursor-pointer animate-glow"
  onClick={() => scrollToSection("home")}
>
  agnyte
</div>


        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium font-mono relative">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={`transition duration-300 ${
                  active === item.id ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {item.label}
              </span>

              {(hovered === item.id || active === item.id) && (
                <img
                  src={circleImage}
                  alt="nav selector"
                  className="w-[20px] mt-2 object-contain"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
  className="md:hidden cursor-pointer"
  onClick={() => setOpen(!open)}
>
  <img
    src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754553955/C6FF8361-5F72-4D2C-9347-A206F6672B2C_oieshc.png"
    alt="Menu"
    className="w-8 h-8"
  />
</div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-yellow-400"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
