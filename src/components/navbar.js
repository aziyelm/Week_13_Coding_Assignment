import React from 'react';

// importing react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends React.Component { 
    render() {
        return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Week 13 App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Page 1</Nav.Link>
                    <Nav.Link href="#link">Page 2</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        );
    }
}