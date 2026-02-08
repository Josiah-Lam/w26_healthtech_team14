import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import './Landing.scss';
import { useAuth } from '../auth/AuthProvider';
import { getNavigation } from '../config/roleConfig';

export default function Landing() {
    const { user } = useAuth();
    const navigate = useNavigate();

    function gotoRoleLanding() {
        if (!user || !user.role) return navigate('/login');
        const nav = getNavigation(user.role);
        const path = nav.length > 0 ? nav[0].path : '/';
        navigate(path);
    }

    return (
        <div className="landing-page">
            <a className="skip-link" href="#main">Skip to main content</a>

            <header className="landing-header">
                <Container>
                    <nav className="mega-nav" aria-label="Main navigation">
                        <div className="brand">CCCARE ONE <span className="uw-brand">— University of Waterloo</span></div>
                        <div className="mega-links">
                            <div className="mega-col">
                                <h6>Admissions</h6>
                                <ul>
                                    <li><Link to="/">Undergraduate</Link></li>
                                    <li><Link to="/">Graduate</Link></li>
                                </ul>
                            </div>
                            <div className="mega-col">
                                <h6>Faculties</h6>
                                <ul>
                                    <li><Link to="/">Health Sciences</Link></li>
                                    <li><Link to="/">Engineering</Link></li>
                                </ul>
                            </div>
                            <div className="mega-col">
                                <h6>Services</h6>
                                <ul>
                                    <li><Link to="/">Fitness</Link></li>
                                    <li><Link to="/">Research Facilities</Link></li>
                                </ul>
                            </div>
                            <div className="mega-col">
                                <h6>Support</h6>
                                <ul>
                                    <li><Link to="/">Contact</Link></li>
                                    <li><Link to="/">Accessibility</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="nav-actions">
                            <Form className="d-flex nav-search" role="search" aria-label="Site-wide search">
                                <Form.Control type="search" placeholder="Search site" aria-label="Search site" />
                                <Button variant="dark" className="ms-2">Search</Button>
                            </Form>
                        </div>
                    </nav>
                </Container>
            </header>

            <section className="hero">
                <Carousel fade interval={5000} pause={'hover'}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-programs.jpg" alt="Programs" />
                        <Carousel.Caption>
                            <h3>Quality Programs for Participants</h3>
                            <p>Supervised exercise programs tailored for recovery.</p>
                            <Button as={Link} to="/patient/exercise" variant="warning">Learn Programs</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-fitness.jpg" alt="Fitness services" />
                        <Carousel.Caption>
                            <h3>UW Fitness Services</h3>
                            <p>Body composition testing and personalized plans.</p>
                            <Button as={Link} to="/" variant="warning">Book an Assessment</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-research.jpg" alt="Research" />
                        <Carousel.Caption>
                            <h3>Research & Wearable Devices</h3>
                            <p>Participate in cutting-edge wearable research studies.</p>
                            <Button as={Link} to="/">Get Involved</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <main id="main" className="main-content">
                <Container>
                    <Row>
                        <Col lg={8} className="content-col">
                            <h1>Welcome to CCCARE ONE</h1>
                            <p className="lead">We combine evidence-based fitness programs, research, and community support to improve health outcomes for participants.</p>

                            <Row>
                                <Col md={6}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <Card.Title>Quality fitness programs</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Exercise Supervision (START-FIT)</li>
                                                    <li>STAY-FIT maintenance programs</li>
                                                    <li>Stroke recovery (STEPS)</li>
                                                    <li>Brain & Body sessions</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <Card.Title>Research and education</Card.Title>
                                            <Card.Text>
                                                <p>Opportunities for researchers and students to collaborate on fitness, wearables, and clinical outcomes.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Card className="featured-news mb-3">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src="/news-colon-study.jpg" className="img-fluid" alt="Colon cancer study" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title>New Study: Colon Cancer and Exercise</Card.Title>
                                            <Card.Text>Recent findings suggest improved outcomes with structured exercise programs. Read about the study and how to participate.</Card.Text>
                                            <Button variant="primary">Read Article</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Row className="cta-cards">
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Become a volunteer</Card.Title>
                                            <Card.Text>Join our volunteer team to support programs and research.</Card.Text>
                                            <Button variant="outline-dark">Sign Up</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Contact us</Card.Title>
                                            <Card.Text>Questions about programs, referrals, or research.</Card.Text>
                                            <Button variant="outline-dark">Contact</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Mailing list</Card.Title>
                                            <Card.Text>Receive news and study invitations.</Card.Text>
                                            <Form>
                                                <Form.Group controlId="newsletterEmail">
                                                    <Form.Control type="email" placeholder="Email address" />
                                                </Form.Group>
                                                <Button variant="dark" className="mt-2">Subscribe</Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={4} className="sidebar-col">
                            <div className="quick-actions mb-3">
                                <ListGroup>
                                    <ListGroup.Item action onClick={() => navigate('/patient/exercise')}>Book an appointment</ListGroup.Item>
                                    <ListGroup.Item action onClick={() => navigate('/volunteer/schedules')}>View schedules</ListGroup.Item>
                                    <ListGroup.Item action onClick={gotoRoleLanding}>{user ? 'Go to your dashboard' : 'Sign in'}</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <Card className="contact-card mb-3">
                                <Card.Body>
                                    <Card.Title>Contact</Card.Title>
                                    <Card.Text>
                                        UW Health & Fitness<br />
                                        200 University Ave W<br />
                                        Waterloo, ON
                                    </Card.Text>
                                    <Button variant="outline-dark" as={Link} to="/">Map</Button>
                                </Card.Body>
                            </Card>

                            <Card className="social-card">
                                <Card.Body>
                                    <Card.Title>Follow Us</Card.Title>
                                    <div className="social-icons">
                                        <a href="#" aria-label="Twitter">Twitter</a>
                                        <a href="#" aria-label="Facebook">Facebook</a>
                                        <a href="#" aria-label="Instagram">Instagram</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className="landing-footer mt-4 py-4">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p>University of Waterloo - CCCARE ONE</p>
                            <p>Privacy • Accessibility • Copyright</p>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <p>Land acknowledgement: We acknowledge the land of the Anishinaabeg, Haudenosaunee, and Neutral peoples.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
