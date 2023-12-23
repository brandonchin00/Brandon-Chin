import About from "./pages/about.js";
import Experience from "./pages/experience.js";
import React from "react";
import Project from "./pages/project.js";
import Contact from "./pages/contact.js";
import Intro from "./pages/intro.js";
import { Navbar } from "./components/NavBar.js";
import Sidebar from "./components/sidebar.js";

export default function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Sidebar />
      </header>

      <main>
        <Intro />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
