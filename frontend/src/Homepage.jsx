import React, { useState } from "react"
import "./Andreea.css"
import ComandaAcum from "./ComandaAcum"
import christmas from "./img/christmas.png"
import man from "./img/man.png"
import woman from "./img/woman.png"
import HomepageCarousel from "./HomepageCarousel"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
    return (
      <Container>
        <Row><HomepageCarousel /></Row>
        <Row>
        <Col id="col1">
        
        <input id="comanda-acum"type="image" src={man}
        alt="man"
        href="www.google.com"
        ></input>
        <div class="text-block">
    <h4>AMK</h4>
    <p>BUNU FOTOGRAFIN ICINE KOYAMADIM AQ</p>
  </div>
        
        </Col>
        <Col id="col1">
        <input id="comanda-acum"type="image" src={christmas} 
        alt="christmas"
        href="www.google.com"
        ></input>
        <div class="text-block">
    <h4>AMK</h4>
    <p>BUNU FOTOGRAFIN ICINE KOYAMADIM AQ</p>
  </div>
        </Col>
        <Col id="col1">
        <input id="comanda-acum"type="image" src={woman} 
        alt="woman"
        href="www.google.com"
        ></input>
        <div class="text-block">
    <h4>AMK</h4>
    <p>BUNU FOTOGRAFIN ICINE KOYAMADIM AQ</p>
  </div>
        </Col>
        </Row>
        </Container>
    )}
    export default ContainerExample