import React from "react";
import "./story.css";

const Story = () => {
  return (
    <div className="">
      <div className="story-wrapper">
        <div className="story-container">
          <h1 id="story-title">About Me</h1>
          <p>
            <span className="paragraph paragraph-1">
              Designing and building has been in my DNA since I was 15 years old
              when I built my first video game. From launching my first startup
              and designing my first iOS and Android application, I have grown
              to love the intersection of business and technology.
            </span>
            <span id="story-space" />
            <span className="paragraph paragraph-2">
              To better articulate it, I loved the meticulous process of
              dissecting complex problems, pinpointing pain points, devising
              technical solutions, and then witnessing the ensuing results.
            </span>
            <span id="story-space" />
            <span>
              To turn my passion into a professional career, I decided to enroll
              at <span id="story-college">Babson College</span>, renowned for
              its comprehensive courses in Entrepreneurship. I was eager to gain
              knowledge in all aspects of business.
            </span>
            <span id="story-space" />
            <span className="paragraph paragraph-3">
              But, like many dreams, there are steps I must take before I can
              achieve it.
            </span>
            <span id="story-space" />
            <span className="paragraph paragraph-4">
              Being a Product Manager is the first of the many. In order
              translate customer needs into products, I want to s
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
