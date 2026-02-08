import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function MyProgress() {
    const data = [
        { title: 'Daily goal', percent: 72 },
        { title: 'Walking time', percent: 85 },
        { title: 'Strength exercises', percent: 50 },
    ];

    return (
        <div>
            <h2>My Progress</h2>

            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Summary</Card.Title>

                    <ListGroup variant="flush">
                        {data.map((d, i) => (
                            <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-success" />
                                        <strong>{d.title}</strong>
                                    </div>
                                    <ProgressBar now={d.percent} variant={d.percent >= 80 ? 'success' : d.percent >= 50 ? 'warning' : 'danger'} style={{ height: 10, marginTop: 8 }} />
                                </div>
                                <Badge bg={d.percent >= 80 ? 'success' : d.percent >= 50 ? 'warning' : 'danger'} pill>
                                    {d.percent}%
                                </Badge>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

            <p className="mt-3 text-muted">Keep it up — small steps add up to progress.</p>
        </div>
    );
}
