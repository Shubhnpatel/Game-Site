import React from "react";
import "../App.css";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const people = [
  {
    name: "Shubh Patel",
    phone: "+91 98765 43210",
    photo: "/assets/shubh.jpg",
    instagram: "https://instagram.com/shubh",
    linkedin: "https://linkedin.com/in/shubh",
    github: "https://github.com/shubh",
    email: "mailto:shubh@example.com",
  },
  {
    name: "Anand Kumar",
    phone: "+91 91234 56789",
    photo: "/assets/aryan.jpg",
    instagram: "https://instagram.com/aryan",
    linkedin: "https://linkedin.com/in/aryan",
    github: "https://github.com/aryan",
    email: "mailto:aryan@example.com",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="w-full bg-black py-20 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative inline-block mb-12 w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754547598/ChatGPT_Image_Aug_7_2025_at_11_37_10_AM-2_eq7ovq.png"
            alt="Who We Are Banner"
            className="w-full md:w-[1000px] h-[100px] md:h-[150px] object-fill block mx-auto"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-[20px] md:text-[65px] font-semibold tracking-widest text-[#e2c18a] uppercase animate-glow">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {people.map((person, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[70%] mx-auto p-[3px] rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600"
            >
              <div className="bg-black rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full h-full">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-500"
                />
                <h3 className="text-2xl font-semibold text-white">
                  {person.name}
                </h3>
                <p className="text-gray-300 mb-4">{person.phone}</p>
                <div className="flex gap-4 text-xl justify-center flex-wrap">
                  {[
                    { icon: <FaInstagram />, link: person.instagram },
                    { icon: <FaLinkedin />, link: person.linkedin },
                    { icon: <FaGithub />, link: person.github },
                    { icon: <FaEnvelope />, link: person.email },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-xl transform transition-transform duration-200 hover:scale-150 hover:text-orange-500"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
