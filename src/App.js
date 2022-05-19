import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Routes, Route, Link } from "react-router-dom";
import { Home, Resume, Projects, Art, Footer} from "./components";

function App() {
  return (
    <div className="App">
      <Container fluid style={{maxWidth: 1400, justifyContent: 'center'}}>
        <Navbar expand="md" variant="light">
          <Container>
            <Navbar.Brand href="#"><h3>Abi Lopez</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"><h4>Home</h4></Link>
                <Link className="nav-link" to="resume"><h4>Resume</h4></Link>
                <Link className="nav-link" to="projects"><h4>Projects</h4></Link>
                <Link className="nav-link" to="art"><h4>Art</h4></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid style={{maxWidth: 1350, justifyContent: 'center'}}>
          <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="art" element={<Art />} />
          </Routes>
          </div>
        </Container>
        <div>
          <Footer/>
        </div>
      </Container>
    </div>
  );
}

export default App;
