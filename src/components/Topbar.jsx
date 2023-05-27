import React, { useEffect, useRef, useState } from "react";
import "./topbar.css";
import { init } from "ityped";
import { Link } from "react-router-dom";

export default function Topbar() {
  const textRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 30,
      strings: ["Raj(at+1)", "Rajat Raj Gupta"],
    });
  }, [isMenuOpen]);
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarContainerWidth">
          <div className="topbarLogo" ref={textRef}></div>
          <div className="topbarNav">
            <div className="topbarItems">
              <Link to={"/"} className="link">
                <li>Home</li>
              </Link>
              <a href="#projects" className="link">
                
                <li>Projects</li>
              </a>
              <a href="#about" className="link">
                
                <li>About Me</li>
              </a>
              <Link to="resume" className="link">
                <li>Resume</li>
              </Link>
            </div>
          </div>
          <div
            className={
              isMenuOpen ? "topbarButton mobileView menuClose" : "topbarButton "
            }
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            <div className={isMenuOpen ? "line l1" : "line "}></div>
            <div className={isMenuOpen ? "line l2" : "line "}></div>
            <div className={isMenuOpen ? "line l3" : "line "}></div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menuItems">
          <div className="topbarItemsMobile ">
            <li>Home</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Resume</li>
          </div>
        </div>
      )}
    </div>
  );
}
