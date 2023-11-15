import React from "react";
import "./story.css";
import Typewriter from "typewriter-effect";
import { animated } from "../adjustment/content.js";

const Story = () => {
  return (
    <div className="story-container">
      {/* <h1 id="story-title">About Me</h1> */}
      <p>
        <h1>CHIN, BRANDON</h1>
        <div className="title-container">
          <li>I'm a</li>
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
        <span className="paragraph paragraph-1">
          Hi there! I'm Brandon, a 22 year-old from New York City, currently
          studying at Babson College. I'm currently looking for new job
          opportunities in product management.
        </span>
        {/* <span id="story-space" /> */}
        {/* <span className="paragraph paragraph-2">
              Designing and building has been in my DNA since I was 15 years old
              when I built my first video game. From launching my first startup
              and designing my first iOS and Android application, I have grown
              to love the intersection of business and technology.
            </span>
            <span id="story-space" />
            <span className="paragraph paragraph-3">
              To better articulate it, I loved the meticulous process of
              dissecting complex problems, pinpointing pain points, devising
              technical solutions, and then witnessing the ensuing results.
            </span>
            <span id="story-space" />
            <span>
              But inorder to delivery excellent results, I decided to enroll at{" "}
              <span id="story-college">Babson College</span>, renowned for its
              comprehensive courses in Entrepreneurship. I was eager to gain
              knowledge in all aspects of business.
            </span>
            <span id="story-space" />
            <span className="paragraph paragraph-4"></span>
            <span id="story-space" />
            <span className="paragraph paragraph-5">
              Being a Product Manager is the first of the many. In order
              translate customer needs into products, I want to s
            </span> */}
      </p>
    </div>
  );
};

export default Story;
