import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <header aria-label="Global header">
            <Navbar bg="light" expand="lg" className="px-3">
                <Container fluid>
                    <Navbar.Brand href="#home" className="fw-bold" style={{ color: '#FDB515' }}>
                        CCCARE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-nav" />
                    <Navbar.Collapse id="main-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Programs" id="nav-programs">
                                <NavDropdown.Item href="#">Clinical</NavDropdown.Item>
                                <NavDropdown.Item href="#">Research</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown title="More" id="nav-programs-more" drop="end">
                                    <NavDropdown.Item href="#">Facilities</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Partners</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <Nav.Link href="#research">Research</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#search">Search</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
