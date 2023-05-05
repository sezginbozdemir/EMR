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
        <div className="image-container1">
  <img src={man} alt="man" className="image"></img>
  <div className="text">Clothes for Man</div>
  <button className="comanda-acum" alt="comanda-acum">Shop Now</button>
         </div>

        
        </Col>
        <Col id="col2">
        <div className="image-container2">
  <img src={christmas} alt="man" className="image"></img>
  <div className="text">Clothes for Christmas</div>
  <button className="comanda-acum" alt="comanda-acum">Shop Now</button>
         </div>
        </Col>
        <Col id="col3">
        <div className="image-container3">
  <img src={woman} alt="man" className="image"></img>
  <div className="text">Clothes for WoMan</div>
  <button className="comanda-acum" alt="comanda-acum">Shop Now</button>
         </div>
        </Col>
        </Row>
        </Container>
    )}
    export default ContainerExample