import './slider.css';

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="sliderContainer">
        <div className="sliderWidth">
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w300 sliderImgP"
          src="https://media.istockphoto.com/id/1337657234/vector/geometric-gradient-colored-abstract-background-2d-eps-10-illustration-for-application.webp?s=170667a&w=0&k=20&c=cSm2APJsl5Fd6-fB3RnpIm5ia9mFv8g6ngbhDl0sGUc="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='sliderFont'>Full Stack Java Developer</h3>
          <p className='colorSlider'>Java | Advance Java | Spring | Springboot | Hibernate</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w300 sliderImgP"
          src="https://media.istockphoto.com/id/1337657234/vector/geometric-gradient-colored-abstract-background-2d-eps-10-illustration-for-application.webp?s=170667a&w=0&k=20&c=cSm2APJsl5Fd6-fB3RnpIm5ia9mFv8g6ngbhDl0sGUc="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='sliderFont'>Full Stack Web Developer</h3>
          <p className='colorSlider'>ReactJs | NodeJs | ExpressJs | MongoDB</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    </div>
  );
}


