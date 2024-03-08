import React from "react";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import immigrantartexpo from '../assets/projects/stanfordimmigrantartexpo.jpg'
import cantorflyerfront from '../assets/projects/cantorflyerfront.jpg'
import cantorflyerback from '../assets/projects/cantorflyerback.jpg'

import matthew from '../assets/projects/immigrantartcarousel/matthew.jpg'
import ahumandoelcorazon from '../assets/projects/immigrantartcarousel/ahumandoelcorazon.jpg'
import awaculturalphotoshoot from '../assets/projects/immigrantartcarousel/awaculturalphotoshoot.jpg'
import walmartparking from '../assets/projects/immigrantartcarousel/walmartparking.jpg'
import untitledpainting from '../assets/projects/immigrantartcarousel/untitledpainting.jpg'

import eiffeltower from '../assets/projects/paris/eiffeltower.jpg'
import notredame from '../assets/projects/paris/notredame.jpg'

import washingtonpost from '../assets/projects/washingtonpost.png'

import opaltometi from '../assets/projects/sig/opaltometi.jpg'
import opaltometiconversation from '../assets/projects/sig/opaltometiconversation.png'
import blairimani from '../assets/projects/sig/blairimani.png'
import blairimanidebrief from '../assets/projects/sig/blairimanidebrief.jpg'
import erikaandiola from '../assets/projects/sig/erikaandiola.jpg'
import erikaandiolaqa from '../assets/projects/sig/erikaandiolaqa.png'
import pathwaystopublicservice from '../assets/projects/sig/pathwaystopublicservice.jpg'
import protagonistsinpolicy from '../assets/projects/sig/protagonistsinpolicy.png'
import youngjeanlee from '../assets/projects/sig/youngjeanlee.jpg'
import anthonyromero from '../assets/projects/sig/anthonyromero.jpg'

import humans from '../assets/projects/humans.jpg'
import pullquote from '../assets/projects/pullquote.JPG'

import undocumentedarticle from '../assets/projects/undocumentedarticle.jpg'

import alotrolado from '../assets/projects/alotrolado.png'
import iiba from '../assets/projects/iiba.png'

import limanquote from '../assets/projects/limanquote.jpg'

import pupper from '../assets/resume/pupper.JPG'
import puppervideo from '../assets/resume/puppervideo.jpeg'

import immigrationpolicydebate from '../assets/projects/immigrationpolicydebate.jpg'

import txt from '../assets/projects/txt.png'

function Projects() {
  return (
    <div className="projects">
    <Container fluid style={{maxWidth: 1200, justifyContent: 'center'}}>
        <Row className="align-items-center">
            <Col>
            <Carousel variant="dark" style={{width: 500}}>
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
                    src={cantorflyerfront}
                    alt="Cantor Spring Arts Fair Flyer Front"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cantorflyerback}
                    alt="Cantor Spring Arts Fair Flyer Front"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col>
            <h2 className="font-weight-light">Exploring Immigrant Identity Through Art</h2>
            <h4>Winter and Spring 2022</h4>
            <p>
            The Immigrant Art Expo is a collection of art created by members of the Stanford community 
            to explore their immigrant identity. The collection includes poems, essays, paintings, performances, 
            and sculptures that share community narratives from many immigrant backgrounds.This expo creates space 
            for important discourse and encourages viewers to reimagine identity and immigration. More importantly, 
            The Immigrant Art Expo empowers contributors to explore their identity and reclaim their narrative. 
            We will be printing an Immigrant Art Zine for all contributors near the end of Spring Quarter.
            </p>
            <p>A part of the Immigrant Art Expo will showcase in Cantor's Museum Night and Spring Arts Fair. </p>
            <p><a href={"https://bit.ly/spring_museum_night"}>Rsvp</a> and join us in celebrating Immigrant Identity and Narratives at Stanford.</p>
            <h4>View the Online Book <a href={"https://www.canva.com/design/DAFCTkVp-8o/l3q0edCGXZ3Aw6qAJvV6gA/edit?utm_content=DAFCTkVp-8o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}>Here</a></h4>
            </Col>
        </Row>
        <Row>
        <Container style={{width: 1000, justifyContent: 'center'}} className="my-3">
        <h4>View the rest of the Immigrant Art Expo <a href={"https://abieiden.github.io/capstone/"}>Here</a></h4>
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={awaculturalphotoshoot}
            alt="AWA Cultural Photoshoot"
          />
          <Carousel.Caption>
            <h5>Rachel Koo in AWA Cultural Photoshoot</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ahumandoelcorazon}
            alt="Ahumando el corazón painting"
          />
          <Carousel.Caption>
            <h5>Ahumando el corazón by Cecilia Valencia</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={walmartparking}
            alt="Walmart Parking Lot Painting"
          />
          <Carousel.Caption>
            <h5>Walmart Parking by Song Wu</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={untitledpainting}
            alt="Untitled Painting"
          />
          <Carousel.Caption>
            <h5>Untitled by Gabby Mendoza</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={matthew}
            alt="Matthew Painting"
          />
          <Carousel.Caption>
            <h5>Matthew by Drew Vallero</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
        </Row>

        <Row className="align-items-center my-5" >
            <Col>
            <Carousel variant="dark" style={{width: 500}}>
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
            <Col>
            <Row>
            <h2>Study Abroad in Paris</h2>
            <h4>Fall Quarter 2021</h4>
            <p>Being the first in my family to cross the Atlantic Ocean to pursue my passion in 
            art, meant elevating my family name to new levels and showing my younger siblings and community 
            how far we can go. I'm also proud to say I'm now fluent in three languages, Spanish, English, and French.</p>
            <p>After a lot of hard work, my family and I saved enough money for my younger brother's plane ticket to Europe and 
            I had the incredible opportunity to show him around Paris and Rome. I hope to one day invite my parents and younger siblings to Europe.</p>
            </Row>
            </Col>
        </Row>

        <Row className="align-items-center justify-content-md-center my-5">
        <Col>
        <h2>Washington Post Publishing Tools Team - Software Developer</h2>
        <h4> Summer 2021</h4>
        <p>
        At the Washington Post, I learned how human-centered design and technology empowers the journalists who raise awareness and 
        facilitate discussion around world news and human rights. As a programmer, I worked on new features that helped journalists 
        add different visuals to their stories. I also shadowed my Product Manager and learned more about the product planning strategies 
        used to decide which features the engineering teams should prioritize next to best meet the needs of journalists and advance their work.  
        </p>
        </Col>
        <Col>
        <Container>
        <img
            className="d-block mx-auto w-100"
            src={washingtonpost}
            alt="Washington Post Logo"
            style={{maxWidth: 300, height: 'auto'}}
        />
        </Container>
        </Col>
        </Row>

        <Row className="align-items-center my-5">
        <Col>
        <Carousel variant="dark" style={{width: 500}}>
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
                src={opaltometiconversation}
                alt="Ayo (FKA Opal) Tometi Conversation Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={blairimani}
                alt="Blair Imani Talk Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={blairimanidebrief}
                alt="Blair Imani Debrief Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={erikaandiola}
                alt="Erika Andiola Talk Flyer"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={erikaandiolaqa}
                alt="Erika Andiola QA Flyer"
            />
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
            <h2>Brought BLM leaders to Campus</h2>
            <h4>Fall 2020</h4>
            <p>Collaborating with more than 20 clubs and organizations across campus, I led a cross-campus effort to bring Ayo 
                (FKA Opal) Tometi, #BlackLivesMatter Co-Founder, and Blair Imani,  founder of Equality for HER. In an effort to 
                center under-represented minorities and encourage discussion, I also worked with community centers to host debriefs 
                after the talks. The Black Community Services Center hosted a conversation with Ayo Tometi, 
                Queer Salam and the Queer Resources Cneter held a derbief after Blair Imani's talk, and El Centro Chicano y 
                Latino had a Q&A after Erika Andiola, the Chief Advocacy Officer for The Refugee and Immigrant Center for Education and 
                Legal Services (RAICES), talked at Stanford.  </p> 
                <a href={"https://stanforddaily.com/2020/11/10/black-lives-matter-co-founder-opal-tometi-says-structural-change-is-essential-for-black-liberation/"}>Read Stanford Daily article written on the Opal Tometi event.</a> 
        </Col> 
        </Row>

        <Row className="align-items-center my-5">
            <Col>
                <h2>Organized Diverse Speaker Series Courses</h2>
                <h4>Fall 2020 and Winter 2021</h4>
                <p>
                Recently elected as the Co-Director for Policy Dinners in Stanford in Government, I wanted to use my platform to uplift marginalized voices. 
                Organizing the class series,  POLISCI 74: Pathways to Public Service and POLISCI 76: Protagonists in Policy, I made it a priority to invite 
                speakers from diverse backgrounds and identities. Our line-up of speakers included Anthony Romero, the first Latino and openly gay man to serve 
                as Executive Director of the ACLU, Young Jean Lee, the first Asian-American woman to have her play produced on Broadway, Kristin Clarke, 
                President of the Lawyers' Committee for Civil Rights under Law, and Nanette Barragan, the first Latina to represent California's 44th 
                Congressional district in the House. 
                </p>
            </Col>
            <Col>
            <Carousel variant="dark" style={{width: 500}}>
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
                    src={pathwaystopublicservice}
                    alt="Pathways in Public Service Course Flyer"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={anthonyromero}
                    alt="Anthony Romero Talk Flyer"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={youngjeanlee}
                    alt="Young Jean Lee Talk Flyer"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
        </Row>

        <Row className="align-items-center my-5">
            <Col>
            <Carousel variant="dark" style={{width: 500}}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={humans}
                    alt="HUmans of Stanford Website Page"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pullquote}
                    alt="Screenshot of Pull quote feature"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col>
            <h2>The Stanford Daily - Programmer for Tech Team and Writer for Data Team </h2>
            <h4>Junior and Senior Year</h4>
            <p>Working closely with The Daily journalists, I develop new page layouts and features for website frontend, 
                which is built in Next.js. As a part of the Data Team, I utilize data analysis to tell relevant stories 
                about subjects I'm passionate about. I am a recipient of the 2021 and 2022 The Stanford Daily Opportunity 
                Fellowship, which provides me a stipend to continue my work at The Daily and alleviate my financial burden at Stanford. 
            </p>
            <p>I've created a Humans of Stanford page where Stanford students would be highlighted for their contributions to the community and a new pull quote feature.</p>
            </Col>
        </Row>

        <Row className="align-items-center my-5">
            <Col>
            <h2>Helped the Student Immigrant Empowerment Project at Stanford (SIEPS) Bring Awareness to Undocumeneted Student Experience</h2>
            <h4>August 26th, 2020</h4>
            <p>After the Trump Administration stopped accepting new DACA applications and limited DACA protections with the July 28th, 2020 DHS statement, I wanted to 
            leverage my experience at IIBA to bring awareness to the undocumented student experience at Stanford and call for more resources and support for undocumented 
            students. Working with the Student Immigrant Empowerment Project at Stanford (SIEPS), we gathered undocumented student narratives at Stanford and published an 
            opinion piece with the Stanford Daily titled "Letter to the community: Undocumented students are hurting." We were successful in starting important discussions 
            around campus and meeting with University officials to get more campus support, including gaining access to the <a href={"https://undocumented.stanford.edu/"}>undocumented.stanford.edu </a> 
              website, where SIEPS was able to add more necessary resources.
            </p>
            <a href={"https://stanforddaily.com/2020/08/26/letter-to-the-community-undocumented-students-are-hurting/"}>Read the Article Here</a> 
            </Col>
            <Col>
            <img
                className="d-block w-100"
                src={undocumentedarticle}
                alt="Undocumented at Stanford Article"
            />
            </Col>
        </Row>

        <Row className="align-items-center my-5">
        <Col>
        <Container>
        <img
            className="d-block mx-auto w-100"
            src={alotrolado}
            alt="Al Otro Lado Logo"
            style={{maxWidth: 300, height: 'auto'}}
        />
        </Container>
        </Col>
        <Col>
        <h2>Helped Refugees Apply for Asylum</h2>
        <h4>February 7-9, 2020 </h4>
        <p>Traveled with Stanford Law School students to Tijuana, Mexico to help refugees apply for asylum. Volunteered with Al Otro Lado, a bi-national 
            advocacy and legal aid organization, and translated refugee's stories to help lawyers complete the Form I-589, Application for Asylum and for 
            Withholding of Removal, during Trump's Remain in Mexico Policy.</p>
        </Col>
        </Row>

        <Row className="align-items-center my-5">
        <Col>
        <h2>Helped Survivors of Domestic Violence Apply for US Visas</h2>
        <h4>Winter and Summer 2020</h4>
        <p>I volunteered every Friday in Winter Quarter at the Immigration Institute of the Bay Area (IIBA) to complete a declaration for a U Visa Petition Process. 
            Immigrants applying for a Petition for U Nonimmigrant Status were survivors of criminal activity, usually domestic violence, in the United States and I would hear their stories 
            in Spanish and translate it to English. I was awarded the Public Interest Law Fellowship and the Yale Law School <a href={"https://law.yale.edu/centers-workshops/arthur-liman-center-public-interest-law/summer-fellowship/"}>Liman Summer Fellowship</a> to 
            continute my work at IIBA. At IIBA, I provided assistance to 6 lawyers with U Visa,
            and VAWA, Violence Against Women Act Petition Processes. With VAWA petitions, I heard stories from survivors of domestic violence and completed their declaration. 
            I completed around 2 or 3 declarations per week which translated to about 10-20 pages. I also worked on DACA renewals as the Trump administration limited DACA 
            with the July 28th DHS statement. Moreover, I completed a Country Conditions research project, translated hundreds of legal documents, and worked daily with 
            clients, scheduling appointments and answering legal questions under the guidance of a lawyer.
        </p>
        </Col>
        <Col>
        <img
            className="d-block w-100"
            src={iiba}
            alt="Immigration Institute of the Bay Area Logo"
        />
        </Col>
        </Row>

        <Row className="align-items-center my-5">
        <img
            className="d-block w-100"
            src={limanquote}
            alt="Quote in Liman Center Report"
        />
        <p>Quoted in 2020 Liman Center Annual Report</p>
        <a href={"https://law.yale.edu/sites/default/files/area/center/liman/2020_the_liman_center_reports.pdf"}>Read the Full Report Here</a>  
        </Row>

        <Row className="align-items-center my-5">
            <Col>
            <Carousel variant="dark" style={{width: 500}}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pupper}
                    alt="Screenshot of Pupper Website"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={puppervideo}
                    alt="Screenshot of Pupper Tutorial Video"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
            <Col>
            <h2>Created Website for Pupper Robot to Increase Accessibility</h2>
            <h4>Spring 2020</h4> 
            <p>Reflecting on my own experience and difficulties as a beginner in Robotics, I decided to create a ReadtheDocs website to 
                increase accessibility to our open-source Stanford Pupper robot. The website documents everything needed to build the robot, 
                including a detailed parts list, how to download the code, and step-by-step videos that I recorded and uploaded to YouTube. 
                Our goal with Pupper's low-cost, simple design is to promote engagement for children K-12 and people new to robotics and 
                after the website was launched we saw results. Traffic on the website was in the thousands and people on Youtube and Twitter posted about Pupper. 
            </p>
            <a href={"https://pupper.readthedocs.io/en/latest/"}>See Pupper Website Here</a> <br/>
            <a href={"https://www.youtube.com/playlist?list=PLxFq1fXvP5VTbxuMm4moAiG0zeOiPejZ6"}>Watch Pupper How-To YouTube Videos Here</a> 
            </Col>
        </Row>

        <Row className="align-items-center my-5">
        <Col>
        <h2>Immigration Policy Debate</h2>
        <h4>January 22nd, 2020</h4>
        <p>With the upcoming election later that year, I felt it was imperative to talk about the border crisis and explore 
            the different immigration policies of the Democratic and Republican party. Organizing with Stanford in Government, 
            we invited the Stanford College Republicans and the Stanford Democrats to debate the immigrant policies of their 
            respective parties. Unfortunately, the Stanford College Republicans took this opportunity to use hurtful language 
            and spread hateful speech, but it was very reflective of Trump's own rhetoric. The debate served to highlight the 
            divisions in perspective and sentiment regarding immigration in our country and at Stanford.
        </p>
        </Col>
        <Col>
        <img
            className="d-block w-100"
            src={immigrationpolicydebate}
            alt="Immigration Policy Debate Flyer"
        />
        </Col>
        </Row>

        <Row className="align-items-center my-5">
        <Col>
        <img
            className="d-block w-100"
            src={txt}
            alt="TXT Poster Board"
        />
        </Col>
        <Col>
        <h2>TXT: Teens Exploring Technology Scrum Master</h2>
        <h4>Summer 2019</h4>
        <p>With the support of the Haas Center, I interned at TXT: Teens Exploring Technology the summer after my freshman year. At TXT, we mentored 
            boys from the low-income community of South Central LA in coding, business development, design thinking, youth development, and many other 
            life skills. I taught HTML, CSS, and Python to the students and led a team of four boys to develop an app they would pitch to investors at 
            the end of the program. Then, I was promoted to scrum master of the program and I helped each team develop their app, solved bugs in their 
            code, and created Code Documentations explaining the apps' purpose, the features, API's used, and general functionality.
        </p>
        </Col>
        </Row>

    </Container>
    </div>
  );
}

export default Projects;