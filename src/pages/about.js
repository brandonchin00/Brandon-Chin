import React from "react";
import "./about.css";
import Typewriter from "typewriter-effect";
import image from "../adjustment/image.jpeg";
import { animated } from "../adjustment/content.js";

const About = () => {
  return (
    <div className="About-Wrapper">
      {/* <h1 id="story-title">About Me</h1> */}
      <div className="Story-Container" id="introSection">
        <h1 className="About-Title">About Me</h1>
        <br />
        <div className="Subtitle-Container">
          <p className="Content-Sub">I'M A{"\u00A0"}</p>
          <div className="Content-Type">
            <Typewriter
              options={{
                strings: [
                  animated.first,
                  animated.second,
                  animated.third,
                  animated.fourth,
                  animated.fifth,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </div>
        </div>
        <br />
        <span className="Paragraph Paragraph-1">
          Hi there! I'm Brandon, a product manager from New York City, currently
          studying my for my undergraduate degree in Bachelor of Science at{" "}
          <a className="College" href="https://www.babson.edu/" target="blank">
            Babson College
          </a>
          .
        </span>
        <br />
        <br />
        <span className="Paragraph Paragraph-2">
          Designing and building have been in my DNA since I was 15, when I
          built my{" "}
          <a
            className="College"
            href="https://www.roblox.com/games/398267573/Hotel-Roleplay-by-Mandarin-Oriental-Hotel"
            target="blank"
          >
            first video game
          </a>
          . The process of creating something of your own and sharing it with
          the world fascinated me. I loved engaging in the meticulous process of
          reviewing the user's journey and making subtle changes to enhance the
          overall experience. overall experience, is what I loved doing.
        </span>
        <br />
        <br />
        <span className="Paragraph Paragraph-3">
          I've transformed my childhood passion into a full-time professional
          career. From launching a startup in college to crafting websites,
          apps, and Figma designs to cater to client requirements, it's an
          understatement to say that I've merely developed a passion for the
          intersection of business and technology.
        </span>
        <br />
        <br />
        <span className="Paragraph Paragraph-4">
          To better articulate it, I'll show you what I've been doing. 😊
          {/* <ul className="Skill-List">
            <h3>Tools</h3>
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>Figma</li>
            <li>Python</li>
            <li>HTML/CSS</li>
          </ul> */}
        </span>
      </div>
      <div className="Image-Container">
        <img className="Image-Self" src={image} alt="brandon" />
      </div>
    </div>
  );
};

export default About;
