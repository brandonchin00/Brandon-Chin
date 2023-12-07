import React from "react";
import "./story.css";
import Typewriter from "typewriter-effect";
import image from "../adjustment/image.jpeg";
import { animated } from "../adjustment/content.js";

const Story = () => {
  return (
    <div className="about-container">
      {/* <h1 id="story-title">About Me</h1> */}
      <div className="story-container">
        <h1 id="title-About">About Me</h1>
        <span id="story-space" />
        <div className="title-container">
          <p className="text-font">I'M A{"\u00A0"}</p>
          <div className="text text-font">
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
          </div>
        </div>
        <span id="story-space" />
        <span id="story-space" />
        <span className="paragraph paragraph-1">
          Hi there! I'm Brandon, a product manager from New York City, currently
          studying my for my undergraduate degree in Bachelor of Science at{" "}
          <a id="college" href="https://www.babson.edu/" target="blank">
            Babson College
          </a>
          .
        </span>
        <span id="story-space" />
        <span className="paragraph paragraph-2">
          Designing and building have been in my DNA since I was 15, when I
          built my first video game. The process of creating something of your
          own and sharing it with the world fascinated me I loved engaging in
          the meticulous process of reviewing the user's journey and making
          subtle changes to enhance the overall experience. overall experience,
          is what I loved doing.
        </span>
        <span id="story-space" />
        <span className="paragraph paragraph-3">
          I've transformed my childhood passion into a full-time professional
          career. From launching a startup in college to crafting websites,
          apps, and Figma designs to cater to client requirements, it's an
          understatement to say that I've merely developed a passion for the
          intersection of business and technology.
        </span>
        <span id="story-space" />
        <span className="paragraph paragraph-4">
          To better articulate it, I'll show you what I've been doing. 😊
        </span>
      </div>
      <div className="figure-container">
        <img id="image-2" src={image} alt="brandon" />
      </div>
    </div>
  );
};

export default Story;
