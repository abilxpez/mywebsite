import React from "react";
import abipic from '../assets/abiportrait.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

import immigrantartexpo from '../assets/projects/stanfordimmigrantartexpo.jpg'
import opaltometi from '../assets/projects/sig/opaltometi.jpg'
import protagonistsinpolicy from '../assets/projects/sig/protagonistsinpolicy.png'
import pupper from '../assets/resume/pupper.JPG'

function Home() {
  return (
    <div className="Home">
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
            <h1 className="font-weight-light">Abi Lopez</h1>
            <p>
            Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA. 
            She's currently completing her undergraduate degree at Stanford University in 
            Electrical Engineering with a minor in Human Rights. She strives to leverage her 
            education to advance immigrant rights, racial justice, and environmental justice. 
            Her current project is creating an immigration art exposition at Stanford for students 
            to share their journey exploring their immigrant identity through art. At the Stanford 
            Daily newspaper, Abi is a part of the Tech Team and Data Team, where she utilizes technology 
            in journalism to elevate diverse voices and stories. As the former Policy Discussions Co-Director
            in Stanford in Government, Abi organized more than 20 university clubs to bring Ayọ Tometi, Black 
            Lives Matter Co-Founder, and Blair Imani, critically-acclaimed historian, to encourage 
            discussion for racial justice. In her spare time, she enjoys reading novels, painting 
            colorful pieces, and discovering new music. 
            </p>
            </Col>
        </Row>

        <Row>
        <Container style={{width: 1000, justifyContent: 'center'}} className="my-3">
        <Link to="projects"><h2>View My Projects Here</h2></Link>
        <Carousel variant="dark">
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    src={immigrantartexpo}
                    alt="Immigrant Art Expo Flyer"
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={opaltometi}
                alt="Ayo (FKA Opal) Tometi Talk Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={protagonistsinpolicy}
                alt="Protagonists in Policy Course Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={pupper}
                alt="Screenshot of Pupper Website"
            />
            </Carousel.Item>
        </Carousel>
        </Container>
        </Row>
    </Container>
    </div>
  );
}

export default Home;