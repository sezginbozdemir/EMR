import React , { useState } from "react"
import halate from "../img/halate.png"
import odorizante from "../img/odorizante.png"
import pijama from "../img/pijama.png"
import Carousel from 'react-bootstrap/Carousel';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';


function Promotions() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const CustomDot = ({onClick, active}) => (
    <span
      className={`custom-dot ${active ? "active" : ""}`}
      onClick={onClick}
    />
  );


  return (
    <div className="carouselConteiner">
    <Carousel id="carousel1"
     activeIndex={index}
     onSelect={handleSelect}
    indicators={false}
    prevIcon={<IoArrowBack style={{ width: '50px', height: '50px' , color: 'black' }}/>} 
    nextIcon={<IoArrowForward style={{ width: '50px', height: '50px' , color: 'black' }} />}
     fade>
      <Carousel.Item>
        <img
          className="carouselImage"
          src={halate}
          alt="halate"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src={pijama}
          alt="pijama"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src={odorizante}
          alt="odorizante"
        />
      </Carousel.Item>
    </Carousel>
    <div className="custom-dots-container">
        {[...Array(3)].map((x, i) => (
          <CustomDot
            key={i}
            onClick={() => setIndex(i)}
            active={index === i}
          />
        ))}
      </div>
    </div>
  );
}

export default Promotions;