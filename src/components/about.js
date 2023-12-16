import React from "react";
import "./button.css";
import "./about.css";
// import image1 from "../adjustment/image.jpeg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="Container">
      <div className="Wrapper">
        <ul>
          <li className="text-T" id="name">
            Hello!{" "}
            <span id="wave" role="img" aria-label="wave">
              👋
            </span>{" "}
            My name is{" "}
          </li>
          <li id="text-P">Brandon Chin</li>
          <li id="text-S">
            I lead software teams in agile methodology to build products
          </li>
          <li className="text-T">
            As a Product Manager, my emphasis lies in UX and data analysis. I
            extract valuable insights from large datasets and utilize Figma to
            craft designs, allowing me to swiftly transform requirements into an
            MVP
          </li>
        </ul>
        <div className="button-container">
          <button className="button button-1">Download Resume</button>
          <Link to="introSection" smooth={true} duration={500}>
            <button className="button button-2 effect">Learn More</button>
          </Link>
        </div>
      </div>
      {/* <div className="image-container">
        <img id="image-1" src={image1} alt="" />
      </div> */}
    </div>
  );
};

export default About;

// Fix the CSS Naming to Allow multi CSS Reuse
// Fix the Section (Home, Section 1)
// Ensure that the @media is for a specific media
