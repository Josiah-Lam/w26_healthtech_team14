import React, { useEffect, useRef, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './AppNavbar.scss';
import { useAuth } from '../auth/AuthProvider';

export default function AppNavbar() {
    const baseFontPx = useRef(16);
    const [scale, setScale] = useState(1);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const root = document.documentElement;
        const computed = getComputedStyle(root).fontSize || '16px';
        const px = parseFloat(computed) || 16;
        baseFontPx.current = px;
        root.style.fontSize = `${px * scale}px`;
    }, []);

    useEffect(() => {
        document.documentElement.style.fontSize = `${baseFontPx.current * scale}px`;
    }, [scale]);

    function increaseFont() {
        setScale((s) => Math.min(1.6, +(s + 0.1).toFixed(2)));
    }

    function decreaseFont() {
        setScale((s) => Math.max(0.8, +(s - 0.1).toFixed(2)));
    }

    function handleLanguageSelect(key) {
        setLanguage(key);
        // Placeholder: actual i18n not implemented yet
    }

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <Navbar bg="light" expand="lg" className="app-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="/logo-placeholder.svg"
                        alt="Logo"
                        className="app-logo"
                        width="40"
                        height="40"
                    />
                    <span className="ms-2 navbar-title">HealthTech</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/personal-records">Personal Records</Nav.Link>
                        <Nav.Link as={Link} to="/referrals">Referrals</Nav.Link>
                        <Nav.Link as={Link} to="/exercise">Exercise</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center">
                        <div className="font-controls me-3">
                            <div className="font-control-group" aria-hidden>
                                <Button variant="outline-secondary" size="sm" onClick={decreaseFont} aria-label="Decrease font">
                                    <span className="btn-a small">- A</span>
                                </Button>
                                <Button variant="outline-secondary" size="sm" onClick={increaseFont} aria-label="Increase font">
                                    <span className="btn-a large">A +</span>
                                </Button>
                            </div>
                        </div>

                        <NavDropdown title={`Language (${language.toUpperCase()})`} id="language-dropdown" align="end" onSelect={handleLanguageSelect} className="language-dropdown">
                            <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
                            <NavDropdown.Item eventKey="es">Spanish</NavDropdown.Item>
                            <NavDropdown.Item eventKey="fr">French</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={
                                <span className="profile-toggle">
                                    {user ? (
                                        <span className="profile-initial">{(user.email || 'U').charAt(0).toUpperCase()}</span>
                                    ) : (
                                        <FontAwesomeIcon icon={faUser} className="profile-icon" />
                                    )}
                                </span>
                            }
                            id="account-dropdown"
                            align="end"
                            className="account-dropdown ms-2"
                        >
                            {!user && (
                                <>
                                    <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/login">Log In</NavDropdown.Item>
                                </>
                            )}
                            {user && (
                                <>
                                    <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                                </>
                            )}
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
