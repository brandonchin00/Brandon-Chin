import React from "react";
import "./button.css";
import "./about.css";
import image1 from "../adjustment/image.jpeg";

const About = () => {
  return (
    <div className="container">
      <div className="word-container">
        <ul>
          <li className="top">
            Hello!{" "}
            <span id="wave" role="img" aria-label="wave">
              👋
            </span>
          </li>
          <li className="context">I'm Brandon</li>
          <li className="context">and</li>
          <li className="context">I'm a Product Manager</li>
        </ul>
        <div className="button-container">
          <button className="button button-1">Download Resume</button>
          <button className="button effect">Learn More</button>
        </div>
      </div>
      <div className="image-container">
        <img id="image-1" src={image1} alt="" />
      </div>
    </div>
  );
};

export default About;

// Fix the CSS Naming to Allow multi CSS Reuse
// Fix the Section (Home, Section 1)
// Ensure that the @media is for a specific media
