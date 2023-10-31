import React from "react";
import Typewriter from "typewriter-effect";
import { animated } from "../pages/content.js";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <p className="top">MY NAME IS BRANDON</p>
      <p className="solid-text">I AM </p>
      <p className="moving-text">
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
      </p>
    </div>
  );
};

export default About;
