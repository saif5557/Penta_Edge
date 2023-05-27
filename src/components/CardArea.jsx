import React from "react";
import Card from "./Card";
import "./cardarea.css";
import "./card.css";
import htmlImg from '../img/html.png';
import cssImg from '../img/CSS.webp';
import sassImg from '../img/sass.svg';
import bootstrapImg from '../img/bootstrap.png';
import reactImg from '../img/react.png'
import nodeImg from '../img/node.png'
import expressImg from '../img/express.png'
import mongoImg from '../img/mongoDB.png'
import springImg from '../img/spring.png'
import bootImg from '../img/boot.png'
import hibernateImg from '../img/hibernate.png'
import sqlImg from '../img/Mysql.png'
import javaImg from '../img/Java.png'
import AdJImg from '../img/AdJava.png'
import jsImg from '../img/Js.png'
import dsaImg from '../img/DSA.jpg'
import gitImg from '../img/git.png'


export default function CardArea() {
  const cardData = [
    {
      title: "Porgraming",
      lan: [
        "DSA (700+ Question Solved)",
        "Java (Core + Advance)",
        "System System (LLD)",
      ],
      desc:"Solved 700+ Coding Question on Various Platforms",
    },
    {
    title: "Frontend Development",
    lan: [
      "HTML CSS ",
      " Javascript Bootstrap ",
      "ReactJs SCSS"
    ],
    desc:"Sucessfully Build Deployed 15+ Projects"
  }, {
    title: "Backend Development",
    lan: [
      "NodeJs ExpressJs MongoDB ",
      "SpringBoot, Hibernet, Maven",
      "SQL RestAPIs"
    ],
    desc:"Sucessfully Build Deployed 15+ Projects"
  }
  ];
  return (
    <div className="cardAreaContainer">
      <div className="CardAreaWrapper ">
      <div className="cardWrapper">
      <div className="cardContainer">
        <div className="cardHeading">Programing</div>
        <div className="cardMainContent">
            <div className="cardLogoArea">
                <div className="logoRow1">
                    <img src={javaImg} className="roundImg"alt="" />
                    <img src={AdJImg} className="roundImg" alt="" />
                    <img src={jsImg} className="roundImg" alt="" />
                    
                </div>
                <div className="logoRow1 ">
               
                    <img src={dsaImg} className="roundImg" alt="" />
                   <p className="fontSamll">
                    <span>System Design</span>  </p> 
                   <p className="fontSamll"><span> OOPs </span></p>
                 
                </div>
            </div>
        </div>
        <div className="cardDescription">
            <p>
       Solved over 700+ DSA Questions on various coding platforms 
          </p>
        </div>
      </div>
      
    </div>

    <div className="cardWrapper">
      <div className="cardContainer">
        <div className="cardHeading">Frontend Development</div>
        <div className="cardMainContent">
            <div className="cardLogoArea">
                <div className="logoRow1">
                    <img src={htmlImg} alt="" />
                    <img src={cssImg} alt="" />
                    <img src={sassImg} alt="" />
                    
                </div>
                <div className="logoRow1">
                    <img src={reactImg} alt="" />
                    <img src={bootstrapImg} alt="" />
                    
                </div>
            </div>
        </div>
        <div className="cardDescription">
            <p>
            Master frontend development by building a diverse range of projects  including a responsive portfolio website
          </p>
        </div>
      </div>
      
    </div>

    <div className="cardWrapper">
      <div className="cardContainer">
        <div className="cardHeading">Backend Development</div>
        <div className="cardMainContent">
            <div className="cardLogoArea">
                <div className="logoRow1">
                    <img src={nodeImg} alt="" />
                    <img src={expressImg} alt="" />
                    <img src={mongoImg} alt="" />
                    <img src={sqlImg} alt="" />
                    
                </div>
                <div className="logoRow1">
                    <img src={springImg} alt="" />
                    <img src={hibernateImg} alt="" />
                    <img src={bootImg} alt="" />
                    <img src={gitImg} alt="" />
                </div>
            </div>
        </div>
        <div className="cardDescription">
            <p>
       Created RestAPIs using Nodejs and hosted on render and designed relational databases using hibernate and Springboot
          </p>
        </div>
      </div>
      
    </div>
        
        
      </div>
    </div>
  );
}
