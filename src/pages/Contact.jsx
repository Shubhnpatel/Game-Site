import React, { useState } from "react";
import "../App.css"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-black py-20 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Contact Us heading with ornate background */}
        <div className="relative inline-block mb-12">
          <img
            src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754547598/ChatGPT_Image_Aug_7_2025_at_11_37_10_AM-2_eq7ovq.png"
            alt="Contact Us Banner"
            className="w-[1000px] h-[150px] object-fill block"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-[20px] md:text-[65px] font-semibold tracking-widest text-[#e2c18a] uppercase animate-glow">
            Contact Us
          </h2>
        </div>




        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white text-white placeholder-gray-400 px-4 py-3 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-white text-white placeholder-gray-400 px-4 py-3 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-transparent border border-white text-white placeholder-gray-400 px-4 py-3 font-mono rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[60px] relative rounded-md font-semibold tracking-wider shadow-md overflow-hidden"
          >
            {/* ✅ Background Image */}
            <img
              src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754547598/ChatGPT_Image_Aug_7_2025_at_11_40_05_AM-2_aelvkm.png"
              alt="button background"
              className="absolute inset-0 w-full h-full object-fit transform  scale-150"
            />

            {/* ✅ Button Text */}
            <span className="relative z-10 text-white text-3xl">Send Message</span>
          </button>


        </form>
      </div>
    </section>
  );
};

export default Contact;
