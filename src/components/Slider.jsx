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
          src="https://images.pexels.com/photos/11279906/pexels-photo-11279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='sliderFont'>EARN MORE WITH
          PROFESSIONAL SERVICES</h3>
          <p className='colorSlider'>Professionals & dedicated financial

experts can help you to set your

financial freedom</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w300 sliderImgP"
          src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='sliderFont'>EARN MORE WITH
          PROFESSIONAL SERVICES</h3>
          <p className='colorSlider'>Professionals & dedicated financial

experts can help you to set your

financial freedom</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    </div>
  );
}


