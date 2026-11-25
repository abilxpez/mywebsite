import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { ResumePreview } from './resume';

import immigrantartexpo from '../assets/projects/stanfordimmigrantartexpo.jpg'
import opaltometi from '../assets/projects/sig/opaltometi.jpg'
import protagonistsinpolicy from '../assets/projects/sig/protagonistsinpolicy.png'
import abipic from '../assets/abiportrait.jpg'

function Home() {
  return (
    <div className="Home">
    <Container fluid style={{maxWidth: 1200, justifyContent: 'center'}}>
        <Row className="align-items-center gy-4 gy-md-0">
            <Col xs={12} md={6}>
            <h1 className="font-weight-light">Abi Lopez</h1>
            <p>
            Abi Lopez (she/her) is a daughter of Mexican immigrants from Southeast LA.
            She is a Stanford graduate with a bachelor’s in Electrical Engineering and a minor in Human Rights, and a master’s in Computer Science with a focus on artificial intelligence.
            She builds software to serve communities and strives to use her education to advance immigrant rights, racial justice, and environmental justice.
            Her engineering experience includes full stack work at the Stanford Federal Credit Union, IBM, and The Washington Post.
            She also built an AI-powered search system for the Immigration Policy Tracking Project, helping researchers find relevant immigration policy in about a second.
            She organized an immigration art exposition at Stanford where students shared their journeys exploring their immigrant identity through art.
            She has also taught AI to over 100 high school students and served as a computer science course assistant for six quarters.
            As the former Policy Discussions Co-Director in Stanford in Government, Abi organized more than 20 university clubs to bring Ayọ Tometi, Black Lives Matter Co-Founder, and Blair Imani, critically-acclaimed historian, to encourage discussion for racial justice.
            In her spare time, she enjoys reading novels, painting colorful pieces, and discovering new music.
            </p>
            <p>
                For job opportunities or collaborations, feel free to <a href="mailto:abiclopez1@gmail.com">email me</a> or <a href="https://www.linkedin.com/in/abilxpez/">connect on LinkedIn</a>.
            </p>
            </Col>
            <Col xs={12} md={6} className="order-first">
                <img className="img-fluid rounded"
                    src={abipic}
                    alt="Abi Lopez"
                    style={{width: 500, height: 'auto'}}
                />
            </Col>
        </Row>

        <Row>
        <Container style={{maxWidth: 1000}} className="my-3">
        <Link to="portfolio"><h2>View My Projects Here</h2></Link>
        <Carousel variant="dark" className="fixed-frame-carousel" style={{'--slide-aspect-ratio': '1587 / 2245'}}>
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
        </Carousel>
        </Container>
        </Row>
        <Row>
        <Container style={{maxWidth: 1000}} className="my-3">
        <Link to="resume"><h2>View My Resume Here</h2></Link>
        <ResumePreview maxWidth={680} />
        </Container>
        </Row>
        </Container>
    </div>
  );
}

export default Home;
