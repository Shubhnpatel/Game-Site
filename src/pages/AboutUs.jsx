import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const people = [
  {
    name: "Shubh Patel",
    phone: "+91 98765 43210",
    photo: "/assets/shubh.jpg", // make sure image is in public/assets or adjust path
    instagram: "https://instagram.com/shubh",
    linkedin: "https://linkedin.com/in/shubh",
    github: "https://github.com/shubh",
    email: "mailto:shubh@example.com",
  },
  {
    name: "Aryan Mehta",
    phone: "+91 91234 56789",
    photo: "/assets/aryan.jpg", // replace with your image
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
      className="w-full bg-white py-20 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
          Who We Are
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gray-300"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-gray-600 mb-4">{person.phone}</p>
              <div className="flex gap-4 text-xl text-gray-700">
                <a href={person.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href={person.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={person.email}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
