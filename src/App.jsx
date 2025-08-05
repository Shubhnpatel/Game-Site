import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Yug from "./pages/Yug";
import './fonts.css';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <Yug />
      <AboutUs />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
