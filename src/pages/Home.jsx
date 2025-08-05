import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [showChakra, setShowChakra] = useState(true);
  const [chakraSize, setChakraSize] = useState(560);
  const homeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setChakraSize(300);
      else if (width <= 768) setChakraSize(350);
      else setChakraSize(580);
    };

    const handleScroll = () => {
      if (!homeRef.current) return;

      const rect = homeRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show chakra only when Home section is in view
      const inView = rect.top <= 0 && rect.bottom >= windowHeight / 2;

      setShowChakra(inView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chakraSpinStyle = {
    animation: "chakra-rotate 10s linear infinite",
  };

  return (
    <>
      {/* Chakra Spin Keyframes */}
      <style>
        {`
          @keyframes chakra-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}
      </style>

      {/* Home Section */}
      <div
        ref={homeRef}
        className="relative min-h-screen flex items-center justify-center bg-white text-black px-8"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center z-10">
          Welcome to{" "}
          <span className="font-[YourCustomFontClass] text-5xl md:text-6xl">
            agnyte
          </span>
        </h1>

        {/* Chakra Wheel */}
        {showChakra && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              top: "50%",
              right: "750px",
              transform: "translateY(-50%)",
              width: `${chakraSize}px`,
              height: `${chakraSize}px`,
            }}
          >
            <img
              src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754386553/C902C1FB-98E8-45A8-9642-66675C61A5D3_o5nnnh.png"
              alt="Chakra"
              className="w-full h-full object-contain"
              style={chakraSpinStyle}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
