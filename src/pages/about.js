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
                    Hi there! I'm Brandon, a product manager with full-stack
                    development and UI/UX design skills from New York City. I
                    studied at
                    <a
                        className="College"
                        href="https://www.babson.edu/"
                        target="blank"
                    >
                        Babson College
                    </a>
                    . And obtained my bachelor's degree in Business
                    Administration.
                </span>
                <br />
                <br />
                <span className="Paragraph Paragraph-2">
                    Designing and building have been in my DNA since I was 15,
                    when I built my{" "}
                    <a
                        className="College"
                        href="https://www.roblox.com/games/398267573/Hotel-Roleplay-by-Mandarin-Oriental-Hotel"
                        target="blank"
                    >
                        first video game
                    </a>
                    . The process of creating something of your own and sharing
                    it with the world fascinated me. Coupled with the meticulous
                    process of analyzing a user's experience and making
                    improvements, I loved it.
                </span>
                <br />
                <br />
                <span className="Paragraph Paragraph-3">
                    I turned my childhood passion into a professional career.
                    Now I build products and solve complex problems for
                    businesses.
                    <br />
                    <br />
                    <span className="Paragraph Paragraph-2">
                        I ideated, designed, built, and deployed{" "}
                        <a
                            className="College"
                            href="https://www.feiyangtravel.com/"
                            target="blank"
                        >
                            an e-commerce website with a inventory management
                            system for a medium size business{" "}
                        </a>
                        and achieved over{" "}
                        <span className="statistic">
                            129,000 Page Views, and a 39% bounce rate, and 4%
                            conversion rate
                        </span>
                    </span>
                    <br />
                    <br />
                    Here's a glance at what I can do:
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
                            JavaScript (Node.js)
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
                            React (Next.js)
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
                            Firebase & Supabase
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
                            SQL
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
                            Tableau & Excel
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
                            Jira & Confluence
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
                            PowerPoint
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
