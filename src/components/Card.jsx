import React from "react";
import "./card.css";
import htmlImg from '../img/html.png';
import cssImg from '../img/CSS.webp';
import sassImg from '../img/sass.svg';
import bootstrapImg from '../img/bootstrap.png';

export default function Card(p) {
  return (
    <div className="cardWrapper">
      <div className="cardContainer">
        <div className="cardHeading">Frontend</div>
        <div className="cardMainContent">
            <div className="cardLogoArea">
                <div className="logoRow1">
                    <img src={htmlImg} alt="" />
                    <img src={cssImg} alt="" />
                    <img src={sassImg} alt="" />
                    <img src={bootstrapImg} alt="" />
                </div>
                <div className="logoRow1">
                    <img src={htmlImg} alt="" />
                    <img src={cssImg} alt="" />
                    <img src={sassImg} alt="" />
                    <img src={bootstrapImg} alt="" />
                </div>
            </div>
        </div>
        <div className="cardDescription">
            <p>
       p.prop.desc
          </p>
        </div>
      </div>
      
    </div>
  );
}
