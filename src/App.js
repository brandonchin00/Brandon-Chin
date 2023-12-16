import Home from "./pages/home.js";
import Intro from "./pages/about.js";
import Experience from "./pages/experience.js";
import React from "react";
import Project from "./pages/project.js";
import Contact from "./pages/contact.js";
import { faKipSign } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div>
      <Home />
      <Intro />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
