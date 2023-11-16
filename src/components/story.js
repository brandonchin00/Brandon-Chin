import React from "react";
import "./story.css";
import Typewriter from "typewriter-effect";
import { animated } from "../adjustment/content.js";

const Story = () => {
  return (
    <div className="story-container">
      {/* <h1 id="story-title">About Me</h1> */}
      <div>
        <h1>CHIN, BRANDON</h1>
        <div className="title-container">
          <p>I'M A{"\u00A0"}</p>
          <div className="text">
            <Typewriter
              options={{
                strings: [animated.first, animated.second, animated.third],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </div>
        </div>
        <span id="story-space" />
        <span id="story-space" />
        <span className="paragraph paragraph-1">
          Hi there! I'm Brandon, a 22 year-old from New York City, currently
          studying at Babson College. I'm currently looking for new job
          opportunities in product management.
        </span>
        <span id="story-space" />
        <span className="paragraph paragraph-2">
          Designing and building has been in my DNA since I was 15 years old
          when I built my first video game. From launching my first startup to
          designing my first iOS and Android application, I have grown to love
          the intersection of business and technology.
        </span>
        <span id="story-space" />
        <span className="paragraph paragraph-3">
          To better articulate it, I'll show you what I've been doing. 😊
        </span>
      </div>
    </div>
  );
};

export default Story;
