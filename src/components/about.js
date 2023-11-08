import React from "react";
import Typewriter from "typewriter-effect";
import { animated } from "../adjustment/content.js";
import "./button.css";
import "./about.css";
import image1 from "../adjustment/image.jpeg";

const About = () => {
  return (
    <div className="container">
      <ul>
        <li className="top">
          Hi!{" "}
          <span id="wave" role="img" aria-label="wave">
            👋
          </span>
        </li>
        <li className="Bottonm"> I'm Brandon</li>
        <li className="Between">and</li>
        <li className="solid-text">I'm a </li>
        <Typewriter
          options={{
            strings: [
              animated.first,
              animated.second,
              animated.third,
              animated.fourth,
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
          }}
        />
        <ul className="button-container">
          <button className="button button-1">Download Resume</button>
          <button className="button effect">Learn More</button>
        </ul>
      </ul>
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
