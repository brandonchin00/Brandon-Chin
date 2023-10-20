import React from "react";
import Typewriter from "typewriter-effect";
import { animated } from "../pages/content.js";

const About = () => {
  return (
    <div>
      <h2>HI, MY NAME IS BRANDON</h2>
      <h1>
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
      </h1>
    </div>
  );
};

export default About;
