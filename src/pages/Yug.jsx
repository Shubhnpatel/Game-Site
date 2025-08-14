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

const heroImages = [
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467042/E91EEB93-FBE9-48FB-86CF-858DA75A3518_i4qfcj.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467043/E063EF38-F23D-4A3A-B28D-9D1EBA24EAA6_oncozw.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754468399/ChatGPT_Image_Aug_5_2025_10_33_42_AM_di55sl.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467040/1010281C-2C45-4B5D-B4B1-752360FB6B2C_bl5xny.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467045/E1EC0E14-9047-48C5-B5B4-47B6328B6FE2_ukn3rn.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467044/E7C9365D-B707-41A5-8AE4-47317BEF833A_mv7esy.png",
  "https://res.cloudinary.com/dzeyosnyp/image/upload/v1754467041/C484D419-2173-4355-9860-7C5B909666C7_2_mvqg3n.png",
];

const yugDescriptions = [
  "Agniyug – Era of Flame and Lost Wisdom\nIn the ashes of Nalanda, fire devours forgotten knowledge. Agniyuga burns with rage and memory, where scrolls scream and temples fall. Arjun, the Flame Monk, rises to reclaim wisdom through fire, wielding chants and flame as his weapons.",
  "Yantrayug – Era of Machines and Mind Control\nA mythic future ruled by circuitry. Gods have become code. Minds are no longer free. In this world of bronze towers and broken will, Deva 9 awakens a half machine, half mantra prototype fighting to reclaim consciousness itself.",
  "Vāyuyug – Era of Storms and Shifting Skies\nThe earth is shattered, and the skies have rebelled. Islands drift. Storms rage. In the chaos above, Anaya, the Wind Dancer, flows between lightning and breath, using wind as her blade and sky as her ally.",
  "Chhāyayug – Era of Shadows and Inverted Light\nHere, even your shadow lies. In a realm trapped in twilight, illusions breathe and reflections deceive. Rudra, the Mirror Blade, hunts fear through broken glass  cutting down nightmares that wear familiar faces.",
  "Raṇayug – Era of Endless War\nBrothers fight. Kingdoms fall. Time loops in blood and betrayal. Raṇayuga is cursed with battles that never end. Veer, the Exiled Prince, carries a karma bound spear, striking enemies and fate itself with each blow.",
  "Jalayug – Era of Silence and Memory\nBeneath a glowing ocean, time sleeps. Words are gone. Echoes remain. Meera, the Tide Seeker, dives into sunken temples and forgotten songs, using water and sound to awaken what the world chose to forget.",
  "Māyayug – Era of Illusion and Broken Truths\nReality slips. Nothing is real  not even you. Māyayuga folds thought into space and dream into stone. Nami, the Rhythmbreaker, dances through madness, bending illusions through movement and memory."
];


const Yug = () => {
  const totalStages = yugImages.length;
  const yugRef = useRef(null);
  const sectionRefs = useRef([]);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showWheel, setShowWheel] = useState(false);
  const [circleSize, setCircleSize] = useState(400);
  const [hasMounted, setHasMounted] = useState(false);
  

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
  });

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
  const timer = setTimeout(() => {
    setHasMounted(true);
  }, 100); // Short delay to allow animation on first mount
  return () => clearTimeout(timer);
}, []);


  return (
    <section
      id="yug"
      ref={yugRef}
      className="relative w-full bg-black"
      style={{ minHeight: `${totalStages * 100}vh` }}
    >
      {/* Yug Sections */}
      <div id="yug-marker" className="flex w-full h-full relative">
        <div className="w-full">
          {yugImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-screen w-full relative overflow-hidden flex"
            >
              {/* Left capsule + hero image */}
              <div className="w-[15%] h-full bg-black z-20 relative overflow-visible">
                <img
                  src={heroImages[index]}
                  alt={`Hero ${index + 1}`}
                  className="absolute right-[-200px] top-1/2 -translate-y-1/2 object-contain z-30"
                  style={{
                    height: "600px",
                    minHeight: "600px",
                    maxHeight: "unset",
                    width: "auto",
                    maxWidth: "unset",
                    filter: "drop-shadow(0 0 0 white) drop-shadow(0 0 3px white)"
                  }}
                />

              </div>

              {/* Background capsule image */}
              <div
                className="h-full bg-cover bg-center bg-no-repeat rounded-[20%_0%_0%_20%/50%_0%_0%_50%]"
                style={{
                  backgroundImage: `url(${image})`,
                  width: "85%",
                }}
              />

              {/* Description text in center */}
              {/* Yug Description with Animation */}
                {/* Yug Description with Slide-In Animation */}
<div
  className={`
    absolute inset-0 z-40 px-6 flex items-center justify-center
    transition-all duration-700 ease-in-out transform
    ${activeIndex === index && hasMounted
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-full pointer-events-none"}
  `}
>
  <div className="max-w-xl text-center">
    <p className="text-white text-base md:text-xl lg:text-xl leading-relaxed backdrop-blur-sm bg-black/40 p-6 rounded-xl shadow-lg transition-all duration-700 font-mono">
      {yugDescriptions[index]}
    </p>
  </div>
</div>







              {/* Gradient overlays */}
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
            {/* Center Chakra */}
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
                src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754465428/5DC4CFB9-70C8-4F4F-BF55-F09D35DD1B10_kdawuu.png"
                alt="Chakra"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mini Icons */}
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
