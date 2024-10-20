import React, { useEffect, useRef, useState } from "react";
import "./topbar.css";
import { init } from "ityped";
import { Link } from "react-router-dom";
import LogoImg from '../img/PentaLogo.jpg'

export default function Topbar() {
  const textRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
  }, [isMenuOpen]);
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarContainerWidth">
          <div className="topbarLogo"  >
            <div className="logoImg_Nav_container">
              <img className="logoImg_Nav" src={LogoImg} alt="" />
            </div>
            <div className="logoText">Penta Edge</div>
            </div>
          <div className="topbarNav">
            <div className="topbarItems">
              <Link to={"/"} className="link">
                <li>Home</li>
              </Link>
              <Link to={"/about"} className="link">
                <li>About Us</li>
              </Link>
              <Link to={"/wp"} className="link">
                <li>Why Penta Edege</li>
              </Link>
              <Link to={"/services"} className="link">
                <li>Services</li>
              </Link>
              <Link to={"/contact"} className="link">
                <li>Contact Us</li>
              </Link>
              <Link to={"/disclosure"} className="link">
                <li>Disclosure</li>
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
