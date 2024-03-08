import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

import abipic from '../assets/abiportrait.jpg'

function Consulting() {

    // https://docs.google.com/presentation/d/12iTkl3NAgU9g1m5HcXXnC-m05cqCmFuRvCKEPyD5hfM/edit?usp=sharing
    
  return (
    <div className="Consulting">
    <Container fluid style={{maxWidth: 1200, justifyContent: 'center'}}>
        <Row className="align-items-center">
            <Col>
                <img className="img-fluid rounded"
                    src={abipic}
                    alt="Abi Lopez"
                    style={{width: 500, height: 'auto'}}
                />
            </Col>
            <Col>
            <h1 className="font-weight-light">Abi Aidan Consulting, LLC</h1>
            <p>
            Abi Aidan Consulting Mission Statement 
            </p>
            </Col>
        </Row>

        <Row>
        <Container style={{width: 1000, justifyContent: 'center'}} className="my-3">
        <Link to="resume"><h2>Business Plan</h2></Link>
        <Carousel variant="dark">
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    alt="Abi Aidan Business Pitch"
                />
            </Carousel.Item>
          
        </Carousel>
        </Container>
        </Row>
        </Container>
    </div>
  );
}

export default Consulting;