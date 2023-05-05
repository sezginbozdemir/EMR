import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emrlogo from "../img/emrlogo.png"
import Navbar from "./Navbarmenu";




function ContainerExample() {
    return (
      <Container>
        <Row>
          <Col>
          <img src={emrlogo}
          alt="Emr Engros"
           style={{ width: "250px", height: "100px" }} />
          </Col>
          <Col>
          <input type="text"
           id="myInput" 
           /*onKeyUp="myFunction()"*/ 
           placeholder="Search for products..">
        </input>
        </Col>
        <Col></Col> 
        </Row>
        <Row>
          <Navbar />
        </Row>
      </Container>
    );
  }
  export default ContainerExample;
