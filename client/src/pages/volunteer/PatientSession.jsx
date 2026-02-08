import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';

export default function PatientSession() {
    const { id } = useParams();

    const [participants] = useState([
        { id: 1, name: 'John Doe', program: 'STEPS', date: 'Feb 10, 2026', time: '10:00 AM', notes: 'Mobility focus — bring tubing.' },
        { id: 2, name: 'Jane Smith', program: 'STEPS', date: 'Feb 10, 2026', time: '2:00 PM', notes: 'Cardiac monitoring required.' },
        { id: 3, name: 'Bob Johnson', program: 'Brain and Body', date: 'Feb 11, 2026', time: '9:00 AM', notes: 'Follow-up on home exercises.' },
        { id: 4, name: 'Alice Brown', program: 'START-FIT', date: 'Feb 11, 2026', time: '11:00 AM', notes: 'Balance training session.' },
        { id: 5, name: 'Charlie Davis', program: 'START-FIT', date: 'Feb 12, 2026', time: '3:00 PM', notes: 'Strength progression.' }
    ]);

    const activeKey = id ? String(id) : null;

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Participant Session</h1>

            <Accordion defaultActiveKey={activeKey}>
                {participants.map((p) => (
                    <Accordion.Item eventKey={String(p.id)} key={p.id}>
                        <Accordion.Header>{p.name}</Accordion.Header>
                        <Accordion.Body>
                            <Card.Text>
                                <strong>Program:</strong> {p.program} <br />
                                <strong>Scheduled Date:</strong> {p.date} <br />
                                <strong>Scheduled Time:</strong> {p.time} <br />
                                <strong>Session Notes:</strong>
                                <div className="mt-2 text-muted">{p.notes}</div>
                            </Card.Text>
                            <div className="mt-4">
                                <Button variant="outline-primary" className="w-100 mb-3">Sync Heart Rate Monitor</Button>
                                <div className="d-grid gap-2">
                                    <Link to={`/volunteer/warmup/${p.id}`} className="text-decoration-none">
                                        <Button variant="outline-secondary" size="sm" className="w-100">Warmup</Button>
                                    </Link>
                                    <Button variant="outline-secondary" size="sm">Exercise</Button>
                                    <Button variant="outline-secondary" size="sm">Stretches</Button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}
