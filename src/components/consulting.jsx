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
        <Row>
        <Container style={{width: 1000, justifyContent: 'center'}} className="my-3">
        <Link to="resume"><h2>Business Plan</h2></Link>
        <ol>
            <li>
            Direct Sales Strategy
Launch a Minimal Viable Product (MVP): Release a basic, functional version of your software or service that addresses core needs and start selling immediately.
In-person Demos and Workshops: Host local events to showcase the capabilities of your quantum computing solution, engaging directly with potential clients and collecting immediate feedback.
One-to-One Sales Meetings: Engage potential clients directly through personalized meetings, offering tailored solutions that meet their specific needs.
            </li>
            <li>
            Online Sales and Marketing
E-commerce Platform: Set up a simple website or use platforms like Shopify to sell your quantum computing applications or subscriptions directly.
Social Media Marketing: Utilize platforms like LinkedIn, Twitter, and Facebook to create awareness and generate leads. Engaging content about quantum computing could attract tech enthusiasts and potential business clients.
Email Marketing: Collect emails through your website or during workshops and send targeted campaigns explaining your product benefits and offering special launch prices.
            </li>
            <li>
            Community Building and Engagement
User Groups and Forums: Build a community around your product by initiating discussions in tech forums, Reddit, and other online platforms.
Partnerships with Educational Institutions: Collaborate with local universities or tech schools to offer your product as a learning tool, potentially integrating into their curriculum.
Local Tech Meetups: Sponsor or speak at tech meetups to raise profile and connect with potential customers and partners.
            </li>
            <li>
            Freemium Model
Offer a Free Basic Version: Provide a free version with limited features to attract users and upsell premium features or enhanced capabilities.
Tiered Pricing Structure: Create multiple pricing tiers that cater to different types of users, from hobbyists to professional users, providing flexibility and scaling options.
            </li>
            <li>
            Consulting and Custom Solutions
Quantum Computing Consulting: Offer consulting services in quantum computing applications, helping businesses understand how to integrate and benefit from quantum technology.
Custom Development Projects: Work on bespoke projects for clients who need tailored solutions, leveraging your expertise to solve specific problems.
            </li>
            <li>
            Content Marketing and Education
Blogging and Video Tutorials: Produce high-quality content explaining quantum computing concepts and demonstrating practical applications of your product.
Webinars and Online Courses: Host webinars and create online courses that can be monetized, providing education on quantum computing and related technologies.
            </li>
        </ol>
        </Container>

        </Row>
        </Container>
    </div>
  );
}

export default Consulting;