import React from "react";
import "./button.css";
import "./intro.css";

import { Link } from "react-scroll";

const Intro = () => {
  const handleDownload = () => {
    const fileName = `Brandon_Chin.pdf`;
    console.log(fileName);
    const filePath = `./file/${fileName}`;
    console.log(filePath);

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error fetching the PDF file:", error);
      });
  };
  return (
    <div className="Intro-Container">
      <ul className="List-Container">
        <li className="text-T" id="name">
          Hello!{" "}
          <span id="wave" role="img" aria-label="wave">
            👋
          </span>{" "}
          My name is{" "}
        </li>
        <li className="text-P">Brandon Chin</li>
        <li className="text-S">
          I lead software teams in agile to build products
        </li>
        <li className="text-T">
          I'm a product manager with a focus in user experience and data
          analysis. I extract requirements from datasets to swiftly transform
          designs into user testing.
        </li>
      </ul>
      <div className="button-container">
        <button className="button button-1" onClick={handleDownload}>
          Download Resume
        </button>
        <Link to="introSection" smooth={true} duration={500}>
          <button className="button button-2 effect">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
