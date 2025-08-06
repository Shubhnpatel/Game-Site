const Loader = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Horizontal Glowing Line */}
      <div className="absolute w-full top-1/2 flex items-center justify-between px-20 z-40">
        {/* Left half of the line */}
        <div className="h-1 w-1/3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-md" />

        {/* Spacer (break in line behind chakra/text) */}
        <div className="w-40" /> {/* You can tweak width to match chakra+text */}

        {/* Right half of the line */}
        <div className="h-1 w-1/3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-md" />
      </div>

      {/* 🔄 Rotating Chakra Image */}
      <img
        src="https://res.cloudinary.com/dzeyosnyp/image/upload/v1754465428/5DC4CFB9-70C8-4F4F-BF55-F09D35DD1B10_kdawuu.png"
        alt="Chakra"
        className="w-20 h-20 mb-2 z-50"
        style={{
          animation: "spin 4s linear infinite",
        }}
      />

      {/* 🔥 Fiery Gradient Text */}
      <h1 className="animate-pulse text-6xl md:text-7xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent leading-tight p-2 text-center z-50">
        agnyte
      </h1>

      {/* ✅ Custom Spin Animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
