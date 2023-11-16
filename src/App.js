import Home from "./pages/home.js";
import Intro from "./pages/about.js";
import Experience from "./pages/experience.js";
import React, { useEffect, useState } from "react";

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionStyle = {
    backgroundColor: scrollPosition > window.innerHeight ? "#000" : "#fff",
    transition: "background-color 0.5s ease",
  };

  return (
    <div>
      <Home className="section1" />
      <Intro className="section2" style={sectionStyle} />
      <Experience />
    </div>
  );
}
