import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import secretheaven2 from '../assets/art/secretheaven2.jpg'
import suenosalatardecer from '../assets/art/suenosalatardecer.jpg'
import toujoursici from '../assets/art/toujoursici.jpg'

function Art() {
  return (
    <div className="art">
    <Container fluid>
        <Row>
            <Col>
            <Card style={{maxWidth: 600}}>
                <Card.Img variant="top" src={secretheaven2} altt="Painting of blue and green river" />
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
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src={suenosalatardecer} altt="Painting of Los Angeles Sunset" />
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
            </Card>
            </Col>
        </Row>
    <Card>
        <Card.Img variant="top" src={toujoursici} altt="Sketch of twos Abi's embracing" />
        <Card.Body>
        <Card.Text>
        toujours ici
        </Card.Text>
        <Card.Text>
        charcoal, graphite, and pencil sketch of a distressed and calm Abi embracing, an expression of 
        self-love, self-center, and perseverance.
        </Card.Text>
        </Card.Body>
    </Card>
    </Container>
    </div>
  );
}

export default Art;