import React, { useState } from "react";
import "../App.css";

const Video = () => {
  const [hovered, setHovered] = useState(null); // 'video' | 'text' | null

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-4 transition-all duration-500">

        {/* 🎥 Video Section */}
        <div
          onMouseEnter={() => setHovered("video")}
          onMouseLeave={() => setHovered(null)}
          className={`transition-all duration-500 h-full w-full ${hovered === "video"
              ? "md:flex-[2]"
              : hovered === "text"
                ? "md:flex-[1]"
                : "md:flex-[1.2]"
            }`}
        >
          <video
            controls
            muted
            className="w-full h-auto rounded-lg shadow-lg"
            onLoadedData={(e) => e.target.play()}
          >
            <source
              src="https://res.cloudinary.com/dzeyosnyp/video/upload/v1754553411/1754553270987390_ac8ohe.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 🔥 Glowing Divider */}
        <div
          className={`bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-pulseGlow rounded-full transition-all duration-500
          ${"w-1 h-64 md:block hidden"} 
          md:block hidden`}
        />
        {/* Divider for mobile/tablet */}
        <div
          className={`bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulseGlow rounded-full transition-all duration-500
          md:hidden w-64 h-1`}
        />

        {/* 📄 Text Section */}
        <div
          onMouseEnter={() => setHovered("text")}
          onMouseLeave={() => setHovered(null)}
          className={`text-white transition-all duration-500 h-full w-full ${hovered === "text"
              ? "md:flex-[2]"
              : hovered === "video"
                ? "md:flex-[1]"
                : "md:flex-[1.2]"
            }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
            Kalchakr : The broken wheel
          </h2>
          <div className="text-base sm:text-sm leading-relaxed text-center md:text-left font-mono">
            <p className="pb-2">
            When the Wheel of Time shattered, so did the fate of the world.
            Seven sacred shards scattered across time — each hidden in a twisted Yuga corrupted by Kal-Maya, a being once human, now consumed by vengeance against time itself.
            </p>
            <p className="pb-2">
            You’ll step into each era as a new hero, fighting storms, machines, illusions, and ancient wars to recover the pieces of Kalchakra.
            </p>
            <p>

            Only by restoring them all can you face the final choice: who will challenge Kal-Maya… and decide the future of time?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
