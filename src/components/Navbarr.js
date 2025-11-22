import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail } from 'react-icons/fa';
import './Navbar.scss';

function Navbarr() {
  return (
    <Navbar expand="lg" className="custom-navbar">
    <Container className="nav-center">
      <div className="nav-left">
        <Navbar.Brand href="#home">Zeynep Kargı</Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-middle">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>

        <Nav className="nav-right social-icons">
          <Nav.Link href="https://github.com/" target="_blank">
            <FaGithub size={20} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/" target="_blank">
            <FaInstagram size={20} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/zeynepkargı/" target="_blank">
            <FaLinkedin size={20} />
          </Nav.Link>
          <Nav.Link href="mailto:zeynepkargi02@gmail.com?subject=Hello&body=Merhaba%20Zeynep">
            <FaEnvelope size={20} />
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>

  );
}

export default Navbarr;
