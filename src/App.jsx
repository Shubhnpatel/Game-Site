import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Yug from "./pages/Yug";
import './fonts.css';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Loader from "./components/Loader"
import Video from "./pages/Video"

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timerCompleted = false;
    let pageLoaded = false;

    const tryToHideLoader = () => {
      if (timerCompleted && pageLoaded) {
        setFadeOut(true); // Start fade-out

        setTimeout(() => {
          setShowLoader(false); // Remove loader from DOM after fade
        }, 1000); // Match with transition-opacity duration
      }
    };

    const timer = setTimeout(() => {
      timerCompleted = true;
      tryToHideLoader();
    }, 2000);

    const handleLoad = () => {  
      pageLoaded = true;
      tryToHideLoader();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      {showLoader && <Loader fadeOut={fadeOut} />}
      {!showLoader && (
        <>
          <Navbar />
          <Home />
          <Video/>
          <Yug />
          <AboutUs />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
