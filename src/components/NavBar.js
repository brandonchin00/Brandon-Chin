import React, { useState, useEffect } from "react";
import "./NavBarStyle.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [navbar, setNavBar] = useState(false);

  const toggleMenu = () => {
    setNavBar(!navbar);
  };

  const hideNavbar = () => {
    setNavBar(false);
  };
  const handleScroll = () => {
    setNavBar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = () => {
    const fileName = `Brandon_Chin_.pdf`;
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
    <nav>
      <div className={"nav-wrapper2"}>
        <div id="mobile" onClick={toggleMenu}>
          <FontAwesomeIcon
            id="icon"
            icon={navbar ? faXmark : faBars}
            style={{ transform: `rotate(${navbar ? "90deg" : "0deg"})` }}
          />
        </div>
        <ul className={navbar ? "navbar active" : "navbar"}>
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
            <p onClick={handleDownload}>Resume</p>
          </li>
        </ul>
        <img className="nav-logo" src="./card-images/bc.png" alt="logo"></img>
      </div>
    </nav>
  );
}
