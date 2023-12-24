import React from "react";
import "./about.css";
import Typewriter from "typewriter-effect";
import image from "../adjustment/image.jpeg";
import { animated } from "../adjustment/content.js";

const About = () => {
  return (
    <div className="About-Wrapper">
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
          studying for my undergraduate degree in Bachelor of Science at{" "}
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
          the world fascinated me. Coupled with the meticulous process of
          analyzing a user's experience and making improvements, I loved it.
        </span>
        <br />
        <br />
        <span className="Paragraph Paragraph-3">
          To turn this passion into a career, I took action!
          <br />
          Here are some of my skills:
          <ul className="Skill-List">
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              JavaScript
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              React
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              Node.js
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              SQL & R
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              Figma
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              Python
            </li>
            <li>
              <svg
                className="list-icon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5L15 12L9 19"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              HTML & CSS
            </li>
          </ul>
        </span>
      </div>
      <div className="Image-Container">
        <img className="Image-Self" src={image} alt="brandon" />
      </div>
    </div>
  );
};

export default About;
