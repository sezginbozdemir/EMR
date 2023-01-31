import React, { useState } from "react"
import "./Andreea.css"
import halate from "./img/halate.png"
import odorizante from "./img/odorizante.png"
import pijama from "./img/pijama.png"
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel id="carousel1" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={halate}
          alt="halate"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pijama}
          alt="pijama"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={odorizante}
          alt="odorizante"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;