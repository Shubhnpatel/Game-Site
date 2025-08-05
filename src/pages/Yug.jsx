import React, { useEffect, useRef, useState } from "react";

const yugImages = [
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379170/Agni_Yug_ytloqe.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379173/Yantra_Yug_wgtzdw.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379174/Vayu_Yug_vjyh6q.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379172/Chhaya_Yug_dipt8v.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379173/Ran_Yug_cgmm0m.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379173/Jal_Yug_hsnyu4.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379173/MayaYug_hja6sw.png",
];

const yugIcons = [
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379170/Agni_Yug_Icon_x3smzh.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379171/Yantra_Yug_Icon_igdo5x.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379170/Vayu_Yug_Icon_btnor7.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379171/Chhaya_Yug_Icon_awtpcc.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379172/Rung_Yug_Icon_ugzn0q.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379171/Jal_Yug_Icon_hvw0kr.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754379170/Maya_Yug_Icon_qbhw8o.png",
];

const Yug = () => {
  const totalStages = yugImages.length;
  const yugRef = useRef(null);
  const sectionRefs = useRef([]);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showWheel, setShowWheel] = useState(false);
  const [circleSize, setCircleSize] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setCircleSize(300);
      else if (width <= 768) setCircleSize(350);
      else setCircleSize(400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!yugRef.current) return;

      const rect = yugRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const inView = rect.top <= 0 && Math.abs(rect.top) <= rect.height - windowHeight;
      setShowWheel(inView);

      if (inView) {
        const scrollProgress = Math.min(
          Math.max(Math.abs(rect.top) / (rect.height - windowHeight), 0),
          1
        );

        const maxRotation = (360 / totalStages) * (totalStages - 1);
        const currentRotation = scrollProgress * maxRotation;
        setRotation(currentRotation);

        const index = Math.floor(scrollProgress * totalStages);
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="yug"
      ref={yugRef}
      className="relative w-full bg-black"
      style={{ minHeight: `${totalStages * 100}vh` }}
    >
      {/* Yug Section Content */}
      <div className="flex w-full h-full relative">
        <div className="w-full">
          {yugImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-screen w-full relative overflow-hidden flex"
            >
              <div className="w-[15%] h-full bg-black z-20" />
              <div
                className="h-full bg-cover bg-center bg-no-repeat rounded-[20%_0%_0%_20%/50%_0%_0%_50%]"
                style={{
                  backgroundImage: `url(${image})`,
                  width: "85%",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-black via-transparent to-transparent z-30" />
              <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-transparent to-transparent z-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Rotating Chakra Wheel */}
      {showWheel && (
        <div
          className="fixed"
          style={{
            top: "50%",
            right: "-200px",
            transform: "translateY(-50%)",
            zIndex: 50,
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transform: `rotate(-${rotation}deg)`,
              transition: "transform 0.1s linear",
              pointerEvents: "auto",
            }}
          >
            {/* Center Chakra Image */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(30deg)`,
                width: circleSize * 1.4,
                height: circleSize * 1.4,
                zIndex: 0,
              }}
            >
              <img
                src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754386553/C902C1FB-98E8-45A8-9642-66675C61A5D3_o5nnnh.png"
                alt="Chakra"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Yug Icons */}
            {yugIcons.map((icon, i) => {
              const angle = (360 / totalStages) * i - 180;
              const rad = (angle * Math.PI) / 180;
              const radius = circleSize * 0.75;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              const miniSize = circleSize * 0.125;

              return (
                <div
                  key={i}
                  onClick={() => scrollToSection(i)}
                  className={`absolute flex items-center justify-center cursor-pointer rounded-full transition-all duration-300 overflow-hidden ${i === activeIndex
                    ? "bg-white scale-110 shadow-lg"
                    : "bg-gray-800"
                    }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    width: miniSize,
                    height: miniSize,
                    zIndex: 10,
                    padding: "6px",
                  }}
                >
                  <img
                    src={icon}
                    alt={`Yug ${i + 1}`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Yug;
