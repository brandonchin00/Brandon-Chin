import React, { useState } from "react";
import "./NavBarStyle.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="nav-wrapper">
      <div className="nav-wrapper2">
        <ul className={clicked ? "navbar active" : "navbar"}>
          <li className="buttonAbout">
            <Link to="introSection" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="workSection" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="projectSection" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="buttonContact">
            <Link to="contactSection" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={toggleMenu}>
        <FontAwesomeIcon
          id="icon"
          icon={clicked ? faXmark : faBars}
          style={{ transform: `rotate(${clicked ? "90deg" : "0deg"})` }}
        />
      </div>
    </nav>
  );
}

// {
//   /* <a className="logo" href="index.html">
//         <span id="letter">b</span>
//         <span id="letter">r</span>
//         <span id="letter">a</span>
//         <span id="letter">n</span>
//         <span id="letter">d</span>
//         <span id="letter">o</span>
//         <span id="letter">n</span>
//         <span id="letter">.</span>
//         <span id="letter">c</span>
//         <span id="letter">h</span>
//         <span id="letter">i</span>
//         <span id="letter">n</span>
//       </a> */
// }
