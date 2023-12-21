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

  const hideNavbar = () => {
    setClicked(false);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-wrapper2">
        <ul className={clicked ? "navbar active" : "navbar"}>
          <li className="buttonAbout">
            <Link
              to="introSection"
              smooth={true}
              duration={500}
              onClick={hideNavbar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="workSection"
              smooth={true}
              duration={500}
              onClick={hideNavbar}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="projectSection"
              smooth={true}
              duration={500}
              onClick={hideNavbar}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contactSection"
              smooth={true}
              duration={500}
              onClick={hideNavbar}
            >
              Contact
            </Link>
          </li>
          <li className="buttonContact">
            <Link
              to="contactSection"
              smooth={true}
              duration={500}
              onClick={hideNavbar}
            >
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
