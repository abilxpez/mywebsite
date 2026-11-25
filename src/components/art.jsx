import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import secretheaven2 from '../assets/art/secretheaven2.jpg'
import suenosalatardecer from '../assets/art/suenosalatardecer.jpg'
import toujoursici from '../assets/art/toujoursici.jpg'
import eiffeltower from '../assets/art/paris/eiffeltower.jpg'
import notredame from '../assets/art/paris/notredame.jpg'

function Art() {
  return (
    <div className="art">
    <Container fluid>
        <Row className="gy-4 gy-md-0 mb-4 mb-md-0">
            <Col xs={12} md={6}>
            <Card style={{maxWidth: 600}}>
                <Card.Body>
                <Card.Text>
                Secret Heaven 2
                </Card.Text>
                <Card.Text>
                Oil Paint on Canvas, 8x10''. Many people have wondered what heaven is like. 
                I think it's unique for everyone. This is one of mine. The place is familiar, it's the 
                river that our father used to take us to on a hot summer's day. The sweet river water 
                is cold at first, but it doesn't take long for you to get accustomed. The whole family 
                is there, and in that moment, everyone is young. The water is shallow, the rocks are smooth, 
                and the only thing on my mind is the sound of the river. I could lay here forever. 
                In the words of my brother, Alan Lopez. 
                </Card.Text>
                </Card.Body>
                <Card.Img className="order-first" src={secretheaven2} alt="Painting of blue and green river" />
            </Card>
            </Col>
            <Col xs={12} md={6}>
            <Card>
                <Card.Body>
                <Card.Text>
                Sueños al Atardecer 
                </Card.Text>
                <Card.Text>
                Oil Paint on Canvas, 11x14''. The sunset on the way to El Mercadito de Los Ángeles where my 
                family gets our favorite nieves, esquites, y churros before watching a movie together at home. 
                It's an American dream come true for my dad and our family.
                </Card.Text>
                </Card.Body>
                <Card.Img className="order-first" src={suenosalatardecer} alt="Painting of Los Angeles Sunset" />
            </Card>
            </Col>
        </Row>
    <Card>
        <Card.Body>
        <Card.Text>
        toujours ici
        </Card.Text>
        <Card.Text>
        charcoal, graphite, and pencil sketch of a distressed and calm Abi embracing, an expression of 
        self-love, self-center, and perseverance.
        </Card.Text>
        </Card.Body>
        <Card.Img className="order-first" src={toujoursici} alt="Sketch of twos Abi's embracing" />
    </Card>
        <Row className="align-items-center my-5 g-4">
            <Col xs={12} md={6}>
            <h2>Study Abroad in Paris</h2>
            <h4>Fall Quarter 2021</h4>
            <p>
                As the first in my family to study abroad, I hope to show my younger siblings and community how far we can go. I pursued my passion for art in Paris and I'm now fluent in Spanish, English, and <em>French</em>.

            </p>
            </Col>
            <Col xs={12} md={6} className="order-first">
            <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '4 / 5'}}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={eiffeltower}
                    alt="Abi in front of Eiffel Tower"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={notredame}
                    alt="Abi in front of Notre Dame"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Art;
