import React, { useState } from "react";
import "../App.css"
const Video = () => {
  const [hovered, setHovered] = useState(null); // 'video' | 'text' | null

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-4 transition-all duration-500">
        
        {/* 🎥 Video Section */}
        <div
          onMouseEnter={() => setHovered("video")}
          onMouseLeave={() => setHovered(null)}
          className={`transition-all duration-500 h-full ${
            hovered === "video" ? "md:flex-[2]" : hovered === "text" ? "md:flex-[1]" : "md:flex-[1.2]"
          }`}
        >
          <video
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 🔥 Glowing Divider */}
        <div className="w-1 h-64 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-pulseGlow rounded-full transition-all duration-500" />

        {/* 📄 Text Section */}
        <div
          onMouseEnter={() => setHovered("text")}
          onMouseLeave={() => setHovered(null)}
          className={`text-white transition-all duration-500 h-full ${
            hovered === "text" ? "md:flex-[2]" : hovered === "video" ? "md:flex-[1]" : "md:flex-[1.2]"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Your Powerful Message</h2>
          <p className="text-lg leading-relaxed">
            This is where your impactful text goes. You can describe your story, product, or feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
