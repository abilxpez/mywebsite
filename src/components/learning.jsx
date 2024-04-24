import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import collegepath from '../assets/learning/collegeadmissions/collegepath.png'

import styled from 'styled-components';

const Styledh4 = styled.h4`
    font-family: 'Merriweather', serif;
`;

function Learning() {
    
  // https://www.questbridge.org/high-school-students/college-prep-scholars

  // https://www.questbridge.org/high-school-students/national-college-match

  // https://www.questbridge.org/high-school-students/quest-for-excellence-awards

  // https://energized.edison.com/meet-our-2018-edison-scholars

  // https://www.straubelfoundation.org/newspage/2020/7/10/heroes

  return (
    <div>
       <Container fluid style={{maxWidth: 1200}} className="justify-content-center pt-2">
          <Row>
              <Col> 
              <Styledh4>Abi's College Path to Stanford University</Styledh4>
              </Col>
              <Col>
              <a href="https://docs.google.com/presentation/d/12iTkl3NAgU9g1m5HcXXnC-m05cqCmFuRvCKEPyD5hfM/edit?usp=share_link"><Styledh4>Click Here to Learn More</Styledh4></a>
              </Col>
          </Row>
          <Row>
          <img
              className="d-block w-100"
              src={collegepath}
              alt="Abi Lopez 2024 resume"
          />
          </Row>
        </Container>
        <Container fluid style={{maxWidth: 1200}} className="justify-content-center pt-2">
          <Row>
              <Col> 
              <Styledh4>Scholarships</Styledh4>
              </Col>
              <Col>
              <a href="https://summer.harvard.edu/blog/12-strategies-to-writing-the-perfect-college-essay/"><Styledh4>How to write a compelling essay</Styledh4></a>
              </Col>
          </Row>
          <Row>
          <img
              className="d-block w-100"
              alt="scholarship essay"
          />
          </Row>
        </Container>
    </div>
  );
}

export default Learning;