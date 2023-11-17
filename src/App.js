import Home from "./pages/home.js";
import Intro from "./pages/about.js";
import Experience from "./pages/experience.js";
import React from "react";
import Project from "./pages/project.js";

export default function App() {
  return (
    <div>
      <Home />
      <Intro />
      <Experience />
      <Project />
    </div>
  );
}
