import React from "react"
import christmas from "../../img/christmas.png"
import man from "../../img/man.png"
import woman from "../../img/woman.png"
import Promotions from "../Promotions"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
    return (
      <Container>
        <Row><Promotions /></Row>
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