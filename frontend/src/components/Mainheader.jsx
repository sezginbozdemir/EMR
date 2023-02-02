import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emrlogo from "../img/emrlogo.png"
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";



function ContainerExample() {
    return (
      <Container>
        <Row>
          <Col>
          <img src={emrlogo}
          alt="Emr Engros"
           style={{ width: "250px", height: "100px" }} />
          </Col>
          <Col style={{ paddingRight: "300px" }}>
          <input type="text"
           id="myInput" 
           onkeyup="myFunction()" 
           placeholder="Search for products..">
        </input>
        </Col>
          <Col>
    <Dropdown />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navbar/> 
          </Col>
        </Row>
      </Container>
    );
  }
  export default ContainerExample;
  