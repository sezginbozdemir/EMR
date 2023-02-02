import React from "react"
import halate from "../img/halate.png"
import odorizante from "../img/odorizante.png"
import pijama from "../img/pijama.png"
import Carousel from 'react-bootstrap/Carousel';

function Promotions () {
  return (
    <Carousel id="carousel1" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={halate}
          alt="halate"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pijama}
          alt="pijama"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={odorizante}
          alt="odorizante"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Promotions;