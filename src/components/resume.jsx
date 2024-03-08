import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import DocViewer from "react-doc-viewer";

import resume2024 from '../assets/resume/resume2024.png'
import resume2024pdf from '../assets/resume/AbiLopez_Resume_2024.pdf'
import resume2021pdf from '../assets/resume/AbiLopez_Resume_2021.pdf'
import resume2018 from '../assets/resume/resume2018.png'
import resume2018pdf from '../assets/resume/AbiLopez_Resume_2018.pdf'
import wapohack from '../assets/resume/wapohackathon.jpg'
import tometiflyer from '../assets/resume/tometiflyer.JPG'
import imaniflyer from '../assets/resume/imaniflyer.JPG'
import pupper from '../assets/resume/pupper.JPG'
import puppervideo from '../assets/resume/puppervideo.jpeg'
import solidworks from '../assets/resume/solidworks.JPG'
import inventor from '../assets/resume/inventor.JPG'
import autocad from '../assets/resume/autocad.JPG'
import nims from '../assets/resume/nims.jpeg'

import styled from 'styled-components';

const Styledul = styled.ul`
    list-style: none;
    padding-left: 0;
    line-height: 300%
`;

const Styledp = styled.p`
    font-family: 'Arimo', sans-serif;
`;

const Styledh3 = styled.h3`
    font-family: 'Martel', serif;
`;

const Styledh4 = styled.h4`
    font-family: 'Merriweather', serif;
`;

const Styledh5 = styled.h5`
    font-family: 'Open Sans', sans-serif;
`;

function Resume() {
    const docs = [
        { uri: "https://url-to-my-pdf.pdf" },
        { uri: require('../assets/resume/AbiLopez_Resume_2024.pdf') }, // Local File
        ];
    
  return (
    <div>
        <Container fluid style={{maxWidth: 1200}} className="justify-content-center pt-2">
        <DocViewer documents={docs} />
        <Container fluid>
                <Row>
                    <Col> 
                    <Styledh3>Abi's Resume 2024</Styledh3>
                    </Col>
                    <Col>
                    <a href={resume2024pdf}><Styledh4>Download my Resume 2024</Styledh4></a>
                    </Col>
                </Row>
                <Row>
                <img
                    className="d-block w-100"
                    src={resume2024}
                    alt="Abi Lopez 2024 resume"
                />
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col> 
                    <Styledh3>Abi's Interactive Resume 2021</Styledh3>
                    <Styledh4>Click on the arrow icons to see more!</Styledh4>
                    </Col>
                    <Col>
                    <a href={resume2021pdf}><Styledh4>Download my Resume 2021</Styledh4></a>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{textAlign: 'left'}} className="pt-5">
                <Row style={{backgroundColor: "#fffcfc"}}>
                    <Col>
                    <Styledh3>Education</Styledh3>
                    <hr/>
                    <Styledh4><strong>Stanford University,</strong> Stanford — BS in <em>Electrical Engineering</em>,
                    Minor in <em>Human Rights</em></Styledh4>
                    <Styledh5>SEPT 2018 - JUNE 2022<br/></Styledh5>
                    <Styledp>2018 Questbridge Scholar, matched to Stanford with a Full Ride Scholarship.<br/>
                    2018 Edison Scholar, recipient of $40k STEM Scholarship. <br/>
                    2021/2022 Hispanic Scholarship Fund Scholar. <br/>
                    </Styledp>

                    <Styledh3>Experience</Styledh3>
                    <hr/>

                    <Accordion flush>
                    <Accordion.Item eventKey ="0">
                    <Accordion.Header>
                    <Container>
                    <Row><Styledh4><strong>The Washington Post,</strong> Washington, D.C. - Software Engineer</Styledh4></Row>
                    <Row><Styledh5>JUNE 2021 - AUGUST 2021</Styledh5></Row>
                    <Row>
                    <Styledp> Worked as an engineer in the Publishing Tools team to develop new features and maintain the primary 
                        application that journalists use daily to write their stories. Modified and refactored the code base 
                        using modern React.js features. Shadowed our team's Senior Product Manager and sat in key stakeholder 
                        meetings gaining insight in agile decision-making principles. 
                    </Styledp>
                    </Row>
                    </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Styledp>Designed and programmed Front-End for new Subscriber features. Submitted in Washington Post Intern Hackathon.</Styledp>
                        <img src={wapohack} alt="Washington Post Hackathon Project"style={{width: '500px'}} /> 
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey ="1">
                    <Accordion.Header>
                    <Container>
                    <Row><Styledh4><strong>Stanford in Government,</strong> Stanford - Co-Director of Policy
				    Dinners & TA of POLISCI 76 & POLISCI 74</Styledh4></Row>
				    <Row><Styledh5>APRIL 2019 - JUNE 2021</Styledh5></Row>
                    <Row>
                    <Styledp> Organized two  speaker series classes, where we invited a total of 20 notable speakers to talk about 
					their career in Public Service and describe some of the key intellectual issues and current policy 
					challenges they navigate. Successfully led a fundraising effort of $16,500 with 20 other Stanford 
					organizations to bring Opal Tometi, Black Lives Matter co-founder, and Blair Imani, founder of Equality 
					for HER, to campus. 
				    </Styledp></Row>
                    </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Row>
                        <Col>
                        <Styledp>Flyer for Ayọ (FKA Opal) Tometi's event on campus.</Styledp>
                        <img src={tometiflyer} alt="Flyer for Ayo Tometi's event" style={{width: '200px'}}/>
                        <a href="https://www.stanforddaily.com/2020/11/10/black-lives-matter-co-founder-opal-tometi-says-structural-change-is-essential-for-black-liberation/">
                        <Styledp>Stanford Daily article written on the Opal Tometi event.</Styledp> 
                        </a>
                        </Col>
                        <Col>
                        <Styledp>Flyer for Blair Imani's event on campus.</Styledp>
                        <img src={imaniflyer} alt="Flyer for Blair Imani's event" style={{width: '200px'}}/>
                        </Col>
                    </Row>
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey ="2">
                    <Accordion.Header>
                    <Container>
                    <Row><Styledh4><strong>Stanford Robotics Club,</strong> Stanford - Technical Writer</Styledh4></Row>
				    <Row><Styledh5>SEPT 2019 - JUNE 2020</Styledh5></Row>
                    <Row><Styledp>	Created a Readthedocs website to increase accessibility to our open-source Stanford
					Pupper robot. The website documents everything needed to build the robot, ie. parts list, downloading the code, 
					and step- by-step videos. We hope that Pupper's low-cost, simple design and our new website will promote engagement 
					for children K-12 and people new to robotics. 
				    </Styledp></Row>
                    </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                    <a href="https://pupper.readthedocs.io/en/latest/">
                    <Styledp>Here is the Pupper website.</Styledp>
                    <img src={pupper} alt="screenshot of Pupper Website" style={{width: '500px'}}/> 
                    </a>
                    <Styledp>I also created detailed videos explaining how to build the robot which are publicly available on Youtube.</Styledp>
                    <a href="https://youtu.be/Av9e2HzpbBo?t=49">
                    <img src={puppervideo} alt="screenshot of Pupper Video" style={{width: '500px'}}/>  
                    </a>
                    <a href="https://youtube.com/playlist?list=PLxFq1fXvP5VTbxuMm4moAiG0zeOiPejZ6">
                    <Styledp>You can see all the videos here.</Styledp>
                    </a>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                   <Container>
                       <Row><Styledh4><strong>Immigration Institute of the Bay Area,</strong> Remote - Legal Assistant</Styledh4></Row>
                       <Row><Styledh5>JUNE 2020 - AUGUST 2020</Styledh5></Row>
                       <Row><Styledp> Provided assistance to 6 lawyers with U Visa, VAWA, RFE declarations, completed 2/3  declarations per week, about 10-20 pages. 
                        Worked on DACA renewals, short research projects, and translated hundreds of legal documents. Worked daily with clients, scheduling 
                        appointments, answering legal questions, and completing declarations. 
                        </Styledp></Row>
                   </Container>

                    </Col>
                    <Col>
                    <div className="ps-2" style={{borderLeft: '5px solid #c46a5e'}}>
                    <Styledp className="ms-1">abieiden@stanford.edu | (310) 667 - 2580 </Styledp>
                    <Styledp className="ms-1">www.linkedin.com/in/abieiden </Styledp>
                    </div>
                    <div className="p-2" style={{backgroundColor: '#faf2f1'}}>
				    <Styledh3>Hard Skills</Styledh3>
                    <hr/>
                    <Styledul>
                        <li><strong>Front End Programming: </strong>
                        HTML/CSS, Javascript, React</li>
                        <li><strong>Programming Languages: </strong>C/C ++,
                        Python, Matlab, SQL, MIT App
                        Inventor, Ionic
                        </li>
                        <li><strong>Hardware: </strong>CNC Machine, Verisurf,
                        Soldering, Circuitry, Welding</li>
				    </Styledul> 
                    <Styledh3>Soft Skills</Styledh3>
                    <hr/>
                    <Styledul>
                        <li>Self Motivated</li>
                        <li>Leadership</li>
                        <li>Project Management</li>
                        <li>Interpersonal Skills</li>
                        <li>Adaptability</li>
                    </Styledul>

                    <Styledh3>Certifications</Styledh3>
                    <hr/>
                    <Accordion flush>
                    <Accordion.Item eventKey="0" style={{backgroundColor: '#faf2f1'}}>
                        <Accordion.Header><strong>Solidworks Associates Certification</strong></Accordion.Header>
                        <Accordion.Body>
                        <img src={solidworks} alt="Abi's Solidworks Certificate" style={{width: '250px'}}/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{backgroundColor: '#faf2f1'}}>
                        <Accordion.Header><strong>Autodesk Inventor Certified User</strong></Accordion.Header>
                        <Accordion.Body>
                        <img src={inventor} alt="Abi's Autodesk Inventor Certificate" style={{width: '250px'}}/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={{backgroundColor: '#faf2f1'}}>
                        <Accordion.Header><strong>Autodesk Autocad Certified User</strong></Accordion.Header>
                        <Accordion.Body>
                        <img src={autocad} alt="Abi's Autodesk Autocad Certificate" style={{width: '250px'}}/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{backgroundColor: '#faf2f1'}}>
                        <Accordion.Header><strong>NIMS (National Institute for Metalworking Skills) Certification</strong></Accordion.Header>
                        <Accordion.Body>
                        <img src={nims} alt="Abi's NIMS Certificate" style={{width: '250px'}}/>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    <Styledul>
                        <li><strong>Mechanical Engineering Design Technician Certificate</strong> 3D Modeling & CNC Machining</li>
                        <li><strong>Electrical Engineering Technician Certificate</strong> Fundamental understanding of circuitry</li>
                        <li><strong>Engineering Design Technology Certificate</strong> 3D Modeling Product Development</li>
                    </Styledul>
                    
                    <Styledh3>Languages</Styledh3>
                    <hr/>
                    <Styledul>
                        <li><strong>Spanish</strong> - Native (Reading, Writing,
                        Speaking)</li>
                        <li><strong>French</strong> - Intermediate (Reading,
                        Writing, Speaking)</li>
                    </Styledul>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container fluid>
                <Row>
                    <Col> 
                    <Styledh3>Abi's Resume 2018</Styledh3>
                    </Col>
                    <Col>
                    <a href={resume2018pdf}><Styledh4>Download my Resume 2018</Styledh4></a>
                    </Col>
                </Row>
                <Row>
                <img
                    className="d-block w-100"
                    src={resume2018}
                    alt="Abi Lopez 2018 resume"
                />
                </Row>
            </Container>
    </div>
  );
}

export default Resume;