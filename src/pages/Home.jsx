import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const homeRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "The time is broken. You are the last chance to fix it. Seven eras. Seven heroes. One shattered wheel.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div
        id="home"
        ref={homeRef}
        className="relative min-h-screen w-full flex items-center justify-center text-white px-6 md:px-8 overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dzeyosnyp/video/upload/v1754466840/1754466785742479_cjwnhr.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />

        {/* Centered Text Block */}
        <div className="relative z-10 max-w-3xl text-center">
          <div className="backdrop-blur-sm bg-black/40 px-6 py-6 md:px-10 md:py-10 rounded-2xl shadow-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
              <span className="text-orange-300">Kalchakra</span> – The Broken Wheel
            </h1>

            {/* Typing Effect */}
            <p className="text-sm md:text-lg leading-relaxed mb-4 font-mono min-h-[3rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
