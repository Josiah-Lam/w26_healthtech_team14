import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';

export default function Warmup() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [patients] = useState([
        { id: 1, name: 'John Doe', program: 'STEPS', date: 'Feb 10, 2026', time: '10:00 AM' },
        { id: 2, name: 'Jane Smith', program: 'STEPS', date: 'Feb 10, 2026', time: '2:00 PM' },
        { id: 3, name: 'Bob Johnson', program: 'Brain and Body', date: 'Feb 11, 2026', time: '9:00 AM' },
        { id: 4, name: 'Alice Brown', program: 'START-FIT', date: 'Feb 11, 2026', time: '11:00 AM' },
        { id: 5, name: 'Charlie Davis', program: 'START-FIT', date: 'Feb 12, 2026', time: '3:00 PM' }
    ]);

    const patient = patients.find(p => p.id === parseInt(id));

    if (!patient) {
        return (
            <Container className="pt-4">
                <h1>Patient not found</h1>
                <Button variant="secondary" onClick={() => navigate(-1)}>Go Back</Button>
            </Container>
        );
    }

    return (
        <Container className="pt-4">
            <Button variant="outline-secondary" className="mb-4" onClick={() => navigate(-1)}>← Back</Button>
            
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Warmup Session</Card.Title>
                    <Card.Text>
                        <strong>Patient Name:</strong> {patient.name} <br />
                        <strong>Program:</strong> {patient.program} <br />
                        <strong>Session Date:</strong> {patient.date} <br />
                        <strong>Session Time:</strong> {patient.time}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Warmup Instructions</Card.Title>
                    <Card.Text>
                        Begin with light stretching and mobility exercises to prepare {patient.name} for the main exercise session.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
