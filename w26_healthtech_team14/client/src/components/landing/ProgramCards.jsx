import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const programs = [
    { title: 'Physical Activity', desc: 'Exercise programs tailored for participants.' },
    { title: 'Nutrition', desc: 'Dietary guidance and meal planning support.' },
    { title: 'Cognitive Health', desc: 'Workshops and resources for brain health.' },
    { title: 'Community Support', desc: 'Peer networks and social activities.' },
];

export default function ProgramCards() {
    return (
        <section aria-labelledby="programs-heading" className="my-4">
            <h2 id="programs-heading">Our Programs</h2>
            <Row xs={1} md={2} className="g-3">
                {programs.map((p) => (
                    <Col key={p.title}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>{p.desc}</Card.Text>
                                <a href="#" className="btn btn-outline-primary">Learn more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}
