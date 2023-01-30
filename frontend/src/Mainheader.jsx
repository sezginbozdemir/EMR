import React, { useState } from "react"
import "./Andreea.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emrlogo from "./emrlogo.png"
import Navbar from "./Navbar";


function ContainerExample() {
    return (
      <Container>
        <Row>
          <Col>
          <img src={emrlogo} style={{ width: "250px", height: "100px" }} />
          </Col>
          <Col style={{ paddingRight: "300px" }}>
          <input type="text"
           id="myInput" 
           onkeyup="myFunction()" 
           placeholder="Search for products..">
        </input>
        </Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>
          <a>
            <Navbar/> 
          </a>
          </Col>
        </Row>
      </Container>
    );
  }
  export default ContainerExample;
  