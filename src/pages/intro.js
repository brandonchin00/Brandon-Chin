import React from "react";
import "./button.css";
import "./intro.css";
// import image1 from "../adjustment/image.jpeg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="Intro-Container">
      <ul className="List-Container">
        <li className="text-T" id="name">
          Hello!{" "}
          <span id="wave" role="img" aria-label="wave">
            👋
          </span>{" "}
          My name is{" "}
        </li>
        <li className="text-P">Brandon Chin</li>
        <li className="text-S">
          I lead software teams in agile to build products
        </li>
        <li className="text-T">
          I'm a product manager with a focus in user experience and data
          analysis. I extract requirements from datasets to swiftly transform
          Figma designs into user testing.
        </li>
      </ul>
      <div className="button-container">
        <button className="button button-1">Download Resume</button>
        <Link to="introSection" smooth={true} duration={500}>
          <button className="button button-2 effect">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;

// Fix the CSS Naming to Allow multi CSS Reuse
// Fix the Section (Home, Section 1)
// Ensure that the @media is for a specific media
