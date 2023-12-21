import About from "./pages/about.js";
import Experience from "./pages/experience.js";
import React from "react";
import Project from "./pages/project.js";
import Contact from "./pages/contact.js";
import Intro from "./pages/intro.js";
import { Navbar } from "./components/NavBar.js";
import Sidebar from "./components/sidebar.js";

export default function App() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1701906268448-6c559049e58a?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more image URLs as needed
  ];
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
