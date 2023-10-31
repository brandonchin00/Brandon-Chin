import React, { useState } from "react";
import "./NavBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <a className="logo" href="index.html">
        Place Holder
      </a>
      <div>
        <ul className={clicked ? "navbar active" : "navbar"}>
          <li>
            <a href="index.html">ABOUT</a>
          </li>
          <li>
            <a href="index.html">WORK</a>
          </li>
          <li>
            <a href="index.html">CONTACT</a>
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
