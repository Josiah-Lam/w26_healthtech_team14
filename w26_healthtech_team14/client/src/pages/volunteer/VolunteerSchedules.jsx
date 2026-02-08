import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/**
 * Volunteer Schedules Page
 * Displays volunteer's schedule and sessions
 */
export default function VolunteerSchedules() {
    const [schedules, setSchedules] = useState([
        { id: 1, participant: 'John Doe', date: 'Feb 10, 2026', time: '10:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 2, participant: 'Jane Smith', date: 'Feb 10, 2026', time: '2:00 PM', duration: '1.5 hours', status: 'scheduled' },
        { id: 3, participant: 'Bob Johnson', date: 'Feb 11, 2026', time: '9:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 4, participant: 'Alice Brown', date: 'Feb 11, 2026', time: '11:00 AM', duration: '1 hour', status: 'completed' },
        { id: 5, participant: 'Charlie Davis', date: 'Feb 12, 2026', time: '3:00 PM', duration: '1 hour', status: 'scheduled' }
    ]);

    const today = schedules.filter(s => s.date === 'Feb 10, 2026');
    const upcoming = schedules.filter(s => s.date !== 'Feb 10, 2026');

    const getStatusBadge = (status) => {
        switch (status) {
            case 'scheduled':
                return <Badge bg="info">Scheduled</Badge>;
            case 'completed':
                return <Badge bg="success">Completed</Badge>;
            case 'cancelled':
                return <Badge bg="danger">Cancelled</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    const renderScheduleCards = (items) => (
        <Row>
            {items.map(schedule => (
                <Col md={6} lg={4} key={schedule.id} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{schedule.patient}</Card.Title>
                            <Card.Text>
                                <strong>Date:</strong> {schedule.date} <br />
                                <strong>Time:</strong> {schedule.time} <br />
                                <strong>Duration:</strong> {schedule.duration} <br />
                                <strong>Status:</strong> {getStatusBadge(schedule.status)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Your Schedules</h1>

            <Row>
                {schedules.map(schedule => (
                    <Col md={6} lg={4} key={schedule.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{schedule.participant}</Card.Title>
                                <Card.Text>
                                    <strong>Date:</strong> {schedule.date} <br />
                                    <strong>Time:</strong> {schedule.time} <br />
                                    <strong>Duration:</strong> {schedule.duration} <br />
                                    <strong>Status:</strong> {getStatusBadge(schedule.status)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
