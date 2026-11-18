import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

import washingtonpost from '../assets/projects/washingtonpost.png'
import inspiritAiLogo from '../assets/projects/inspiritai.webp'
import ibmLogo from '../assets/projects/ibm.png'
import stanfordLogo from '../assets/projects/stanford.png'
import sfcuLogo from '../assets/projects/sfcu-logo-full.svg'

import opaltometi from '../assets/projects/sig/opaltometi.jpg'
import opaltometiconversation from '../assets/projects/sig/opaltometiconversation.png'
import blairimani from '../assets/projects/sig/blairimani.png'
import blairimanidebrief from '../assets/projects/sig/blairimanidebrief.jpg'
import pathwaystopublicservice from '../assets/projects/sig/pathwaystopublicservice.jpg'
import protagonistsinpolicy from '../assets/projects/sig/protagonistsinpolicy.png'
import youngjeanlee from '../assets/projects/sig/youngjeanlee.jpg'
import anthonyromero from '../assets/projects/sig/anthonyromero.jpg'
import erikaandiola from '../assets/projects/sig/erikaandiola.jpg'
import erikaandiolaqa from '../assets/projects/sig/erikaandiolaqa.png'

import humans from '../assets/projects/humans.jpg'
import pullquote from '../assets/projects/pullquote.JPG'

import undocumentedarticle from '../assets/projects/undocumentedarticle.jpg'

import alotrolado from '../assets/projects/alotrolado.png'
import iiba from '../assets/projects/iiba.png'

import limanquote from '../assets/projects/limanquote.jpg'

import pupper from '../assets/projects/pupper.JPG'
import puppervideo from '../assets/projects/puppervideo.jpeg'

function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    const heading = document.getElementById(location.hash.slice(1));
    if (heading) {
      heading.focus({ preventScroll: true });
      heading.scrollIntoView();
    }
  }, [location]);

  return (
    <div className="projects">
    <Container fluid style={{maxWidth: 1200, justifyContent: 'center'}}>
      <nav aria-label="Portfolio sections" className="fs-3 fw-bold py-3">
        <Link to="#engineering">Engineering</Link>
        <span aria-hidden="true" className="mx-2">|</span>
        <Link to="#community">Community</Link>
      </nav>

      <section aria-labelledby="engineering" className="mb-5">
        <h2 id="engineering" tabIndex={-1} className="fs-1 fw-bold pt-2 mb-4">Engineering</h2>
        <Row className="my-5">
          <Col>
            <h3 className="h2">Immigration Policy Tracking Project - AI Augmented Search</h3>
            <h4>Winter and Spring 2026</h4>
            <p>
              I developed an AI-powered search engine for immigration policy research, combining keyword and semantic search to find and rank relevant documents.
              I also trained a relevance model and organized results into confidence tiers for easier interpretation, while including supporting evidence and source references for transparency.
              Finally, I optimized the search pipeline to improve performance, reducing search time from approximately 10 seconds to just 1 second.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h3 className="h2">Automated Red Teaming using Reinforcement Learning</h3>
            <h4>Spring 2026</h4>
            <p>
              I developed an automated red-teaming framework in Python to study how AI models respond to evolving jailbreak attacks across multiple conversation turns.
              Using reinforcement learning (PPO), I trained an attacker to learn and improve its prompt mutation strategies based on conversation history.
              This increased attack success from 43.3% with random mutations to 60.0% with PPO, demonstrating the effectiveness of learned strategies.
              I also explored attacker–victim adaptation in two settings: keeping the victim model fixed while the attacker continued learning, and keeping the attacker fixed while updating the victim's defenses through LoRA fine-tuning.
              In the fixed-victim experiment, the adapting attacker reached a peak success rate of 68.8%.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center g-4 my-5">
          <Col xs={12} md>
            <h3 className="h2">Computer Science Course Assistant, Stanford University</h3>
            <h4>2024 to 2026</h4>
            <p>
              Supported professors across six consecutive quarters (two years) in three courses: probability, computer vision, and computer graphics, covering Bayesian inference, neural networks, and ray tracing.
              In four probability quarters, I led twice-weekly sections of 20 students, explaining each week’s new and confusing concepts, working through three to four problems, and answering questions throughout.
              I also ran four hours of office hours weekly, helping students with homework, course material, and final projects.
            </p>
          </Col>
          <Col xs={8} sm={5} md={3}>
            <img className="img-fluid" src={stanfordLogo} alt="Stanford University logo" />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center g-4 my-5">
          <Col xs={12} md>
            <h3 className="h2">Full Stack Software Engineer, Stanford Federal Credit Union</h3>
            <h4>2025</h4>
            <p>
              Built a full-stack digital banking enrollment app with React, Next.js, Node, and Express that unifies core-banking and Q2 services through REST, with schema validation, normalized errors, and idempotent retries.
              It cut time to enroll by about 85%.
              Staff can load members, review accounts, and complete enrollments from a single screen, with submit-time validation, quick username checks, and safeguards against duplicates and network failures that reduced failed attempts.
              I also created a proof-of-concept “chat-to-SQL” assistant for safe, conversational data access, defining guardrails (schema-only, SELECT-only, masked fields) and a phased rollout plan.
            </p>
          </Col>
          <Col xs={8} sm={5} md={{ span: 3, order: 'first' }}>
            <img className="img-fluid" src={sfcuLogo} alt="Stanford Federal Credit Union logo" />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center g-4 my-5">
          <Col xs={12} md>
            <h3 className="h2">Software Developer, IBM</h3>
            <h4>2023</h4>
            <p>
              Designed and developed a full-stack web application that visualizes hardware storage structure and capacity, helping users manage and optimize storage.
              It was built with React, Express, Node.js, Axios, and the z/OSMF REST API.
              I expanded a REXX script that formats memory hex dumps into the corresponding PL/X control block mapping, improving readability and reducing debugging time for the DFSMS VSAM/RLS team.
              I also wrote a flexible build bash script for the team’s Jenkins pipeline, with accurate parameter parsing and validation.
            </p>
          </Col>
          <Col xs={8} sm={5} md={3}>
            <img className="img-fluid" src={ibmLogo} alt="IBM logo" />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center g-4 my-5">
          <Col xs={12} md>
            <h3 className="h2">Inspirit AI - Instructor</h3>
            <h4>2022–2024</h4>
            <p>
              Taught an artificial intelligence curriculum to over 100 high school students, covering linear and logistic regression, natural language processing, and convolutional neural networks.
              I built over 20 machine learning models in Python using libraries like TensorFlow, scikit-learn, Keras, and GloVe, and led 10 AI projects with social good applications, from assessing bias in the justice system to detecting pneumonia from X-ray scans.
            </p>
          </Col>
          <Col xs={8} sm={5} md={{ span: 3, order: 'first' }}>
            <img className="img-fluid" src={inspiritAiLogo} alt="Inspirit AI logo" />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-md-center mb-5 gy-4 gy-md-0">
        <Col xs={12} md={6}>
        <h3 className="h2">Washington Post Publishing Tools Team - Software Developer</h3>
        <h4> Summer 2021</h4>
        <p>
        At the Washington Post, I learned how human-centered design and technology empowers the journalists who raise awareness and
        facilitate discussion around world news and human rights. As a programmer, I worked on new features that helped journalists
        add different visuals to their stories. I also shadowed my Product Manager and learned more about the product planning strategies
        used to decide which features the engineering teams should prioritize next to best meet the needs of journalists and advance their work.
        </p>
        </Col>
        <Col xs={12} md={6}>
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

        <Row className="align-items-center my-5 gy-4 gy-md-0">
            <Col xs={12} md={6}>
            <h3 className="h2">The Stanford Daily - Programmer for Tech Team and Writer for Data Team </h3>
            <h4>Junior and Senior Year</h4>
            <p>Working closely with The Daily journalists, I develop new page layouts and features for website frontend,
                which is built in Next.js. As a part of the Data Team, I utilize data analysis to tell relevant stories
                about subjects I'm passionate about. I am a recipient of the 2021 and 2022 The Stanford Daily Opportunity
                Fellowship, which provides me a stipend to continue my work at The Daily and alleviate my financial burden at Stanford.
            </p>
            <p>I've created a Humans of Stanford page where Stanford students would be highlighted for their contributions to the community and a new pull quote feature.</p>
            </Col>
            <Col xs={12} md={6} className="order-md-first">
            <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '881 / 1371'}}>
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
        </Row>

        <Row className="align-items-center my-5 gy-4 gy-md-0">
            <Col xs={12} md={6}>
            <h3 className="h2">Created Website for Pupper Robot to Increase Accessibility</h3>
            <h4>Spring 2020</h4>
            <p>Created a Read the Docs website to make Stanford's open-source Pupper robot easier for beginners to build.
              The website documents everything needed to build the robot,
                including a detailed parts list, how to download the code, and step-by-step videos that I recorded and uploaded to YouTube.
                Our goal with Pupper's low-cost, simple design is to promote engagement for children K-12 and people new to robotics and
                after the website was launched we saw results. Traffic on the website was in the thousands and people on Youtube and Twitter posted about Pupper.
            </p>
            <a href={"https://pupper.readthedocs.io/en/latest/"}>See Pupper Website Here</a> <br/>
            <a href={"https://www.youtube.com/playlist?list=PLxFq1fXvP5VTbxuMm4moAiG0zeOiPejZ6"}>Watch Pupper How-To YouTube Videos Here</a>
            </Col>
            <Col xs={12} md={6} className="order-md-first">
            <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '2196 / 1603'}}>
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
        </Row>
      </section>
      <section aria-labelledby="community" className="mb-5">
        <h2 id="community" tabIndex={-1} className="fs-1 fw-bold pt-2 mb-4">Community</h2>
        <Row className="align-items-center gy-4 gy-md-0">
            <Col xs={12} md={6}>
            <h3 className="h2 font-weight-light">Exploring Immigrant Identity Through Art</h3>
            <h4>Winter and Spring 2022</h4>
            <p>
            The Immigrant Art Expo is a collection of art created by members of the Stanford community
            to explore their immigrant identity. The collection includes poems, essays, paintings, performances,
            and sculptures that share community narratives from many immigrant backgrounds.This expo creates space
            for important discourse and encourages viewers to reimagine identity and immigration. More importantly,
            The Immigrant Art Expo empowers contributors to explore their identity and reclaim their narrative.
            We printed an Immigrant Art Zine for all contributors before the end of the Spring Quarter.
            </p>
            <p>
            A part of the Immigrant Art Expo will showcase in Cantor's Museum Night and Spring Arts Fair.
            </p>
            </Col>
            <Col xs={12} md={6} className="order-md-first">
            <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '1587 / 2245'}}>
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
        </Row>

        <Row>
        <Container style={{maxWidth: 1000}} className="my-3">
        <h4>View the rest of the Immigrant Art Expo <a href={"https://abilxpez.github.io/capstone/"}>Here</a></h4>
        <Carousel variant="dark" className="fixed-frame-carousel" style={{'--slide-aspect-ratio': '4077 / 3262'}}>
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

        <Row className="align-items-center my-5 gy-4 gy-md-0">
        <Col xs={12} md={6}>
            <h3 className="h2">Brought BLM Leaders to Campus</h3>
            <h4>Fall 2020</h4>
            <p>Collaborating with more than 20 clubs and organizations across campus, I led a cross-campus effort to bring Ayo
                (FKA Opal) Tometi, #BlackLivesMatter Co-Founder, and Blair Imani,  founder of Equality for HER. In an effort to
                center under-represented minorities and encourage discussion, I also worked with community centers to host debriefs
                after the talks. The Black Community Services Center hosted a conversation with Ayo Tometi, and
                Queer Salam and the Queer Resources Center held a debrief after Blair Imani's talk.</p>
                <a href={"https://stanforddaily.com/2020/11/10/black-lives-matter-co-founder-opal-tometi-says-structural-change-is-essential-for-black-liberation/"}>Read Stanford Daily article written on the Opal Tometi event.</a>
        </Col>
        <Col xs={12} md={6} className="order-md-first">
        <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '205 / 266'}}>
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
        </Carousel>
        </Col>
        </Row>

        <Row className="align-items-center my-5 gy-4 gy-md-0">
            <Col xs={12} md={6}>
                <h3 className="h2">Organized Diverse Speaker Series Courses</h3>
                <h4>Fall 2020 and Winter 2021</h4>
                <p>
                Recently elected as the Co-Director for Policy Dinners in Stanford in Government, I wanted to use my platform to uplift marginalized voices.
                Organizing the class series,  POLISCI 74: Pathways to Public Service and POLISCI 76: Protagonists in Policy, I made it a priority to invite
                speakers from diverse backgrounds and identities. Our line-up of speakers included Anthony Romero, the first Latino and openly gay man to serve
                as Executive Director of the ACLU, Young Jean Lee, the first Asian-American woman to have her play produced on Broadway, Kristen Clarke,
                President of the Lawyers' Committee for Civil Rights under Law, and Nanette Barragan, the first Latina to represent California's 44th
                Congressional district in the House.
                We also welcomed Erika Andiola, Chief Advocacy Officer for the Refugee and Immigrant Center for Education and Legal Services (RAICES), and El Centro Chicano y Latino hosted a Q&A after her talk.
                </p>
            </Col>
            <Col xs={12} md={6}>
            <Carousel variant="dark" className="fixed-frame-carousel mx-auto" style={{maxWidth: 500, '--slide-aspect-ratio': '409 / 531'}}>
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
                    alt="Erika Andiola Q&A Flyer"
                />
                </Carousel.Item>
            </Carousel>
            </Col>
        </Row>

        <Row className="align-items-center my-5 gy-4 gy-md-0">
            <Col xs={12} md={6}>
            <h3 className="h2">Helped the Student Immigrant Empowerment Project at Stanford (SIEPS) Bring Awareness to Undocumented Student Experience</h3>
            <h4>August 26th, 2020</h4>
            <p>After the July 28th, 2020 DHS statement limiting DACA protections, I wanted to help bring awareness to the undocumented student experience at Stanford and advocate for more campus resources.
            Working with the Student Immigrant Empowerment Project at Stanford (SIEPS), we gathered undocumented student narratives at Stanford and published an
            opinion piece with the Stanford Daily titled "Letter to the community: Undocumented students are hurting." We were successful in starting important discussions
            around campus and meeting with University officials to get more campus support, including gaining access to the <a href={"https://undocumented.stanford.edu/"}>undocumented.stanford.edu </a>
              website, where SIEPS was able to add more necessary resources.
            </p>
            <a href={"https://stanforddaily.com/2020/08/26/letter-to-the-community-undocumented-students-are-hurting/"}>Read the Article Here</a>
            </Col>
            <Col xs={12} md={6}>
            <img
                className="d-block w-100"
                src={undocumentedarticle}
                alt="Undocumented at Stanford Article"
            />
            </Col>
        </Row>

        <Row className="align-items-center my-5 gy-4 gy-md-0">
        <Col xs={12} md={6}>
        <h3 className="h2">Helped Refugees Apply for Asylum</h3>
        <h4>February 7-9, 2020 </h4>
        <p>Traveled with Stanford Law School students to Tijuana, Mexico to help refugees apply for asylum. Volunteered with Al Otro Lado, a bi-national
            advocacy and legal aid organization, and translated refugee's stories to help lawyers complete the Form I-589, Application for Asylum and for
            Withholding of Removal, during the Remain in Mexico Policy.</p>
        </Col>
        <Col xs={12} md={6} className="order-md-first">
        <Container>
        <img
            className="d-block mx-auto w-100"
            src={alotrolado}
            alt="Al Otro Lado Logo"
            style={{maxWidth: 300, height: 'auto'}}
        />
        </Container>
        </Col>
        </Row>

        <Row className="align-items-center my-5 gy-4 gy-md-0">
        <Col xs={12} md={6}>
        <h3 className="h2">Helped Survivors of Domestic Violence Apply for US Visas</h3>
        <h4>Winter and Summer 2020</h4>
        <p>
            I volunteered every Friday during Winter Quarter at the Immigration Institute of the Bay Area (IIBA) to complete declarations for U Visa petitions.
            Immigrants applying for U Nonimmigrant Status are survivors of criminal activity, usually domestic violence, and I heard their stories in Spanish and translated them into English.
            I was awarded the Public Interest Law Fellowship and the Yale Law School <a href="https://law.yale.edu/centers-workshops/arthur-liman-center-public-interest-law/summer-fellowship/">Liman Summer Fellowship</a> to continue my work at IIBA.
            There, I assisted six lawyers with U Visa and Violence Against Women Act (VAWA) petitions.
            For VAWA petitions, I heard stories from survivors of domestic violence and completed their declarations, about two to three per week, or 10 to 20 pages.
            I also worked on DACA renewals after the July 28th DHS statement limited DACA protections.
            In addition, I completed a country conditions research project, translated hundreds of legal documents, and worked daily with clients, scheduling appointments and answering legal questions under the guidance of a lawyer.
        </p>
        </Col>
        <Col xs={12} md={6}>
        <img
            className="d-block w-100"
            src={iiba}
            alt="Immigration Institute of the Bay Area Logo"
        />
        </Col>
        </Row>

        <Row className="align-items-center my-5">
          <Col xs={12}>
            <p>Quoted in 2020 Liman Center Annual Report</p>
            <a href={"https://law.yale.edu/sites/default/files/area/center/liman/2020_the_liman_center_reports.pdf"}>Read the Full Report Here</a>
          </Col>
          <Col xs={12} className="order-md-first">
            <img
                className="d-block w-100"
                src={limanquote}
                alt="Quote in Liman Center Report"
            />
          </Col>
        </Row>
      </section>
    </Container>
    </div>
  );
}

export default Portfolio;
