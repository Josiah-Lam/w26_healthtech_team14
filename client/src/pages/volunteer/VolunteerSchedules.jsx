import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

/**
 * Volunteer Schedules Page
 * Displays volunteer's schedule and sessions
 */
export default function VolunteerSchedules() {
    const [schedules] = useState([
        { id: 1, patient: 'John Doe', program: 'STEPS', date: 'Feb 10, 2026', time: '10:00 AM', duration: '1 hour', status: 'completed' },
        { id: 2, patient: 'Jane Smith', program: 'STEPS', date: 'Feb 10, 2026', time: '2:00 PM', duration: '1 hours', status: 'completed' },
        { id: 3, patient: 'Bob Johnson', program: 'Brain and Body', date: 'Feb 11, 2026', time: '9:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 4, patient: 'Alice Brown', program: 'START-FIT', date: 'Feb 11, 2026', time: '11:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 5, patient: 'Charlie Davis', program: 'START-FIT', date: 'Feb 12, 2026', time: '3:00 PM', duration: '1 hour', status: 'scheduled' }
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
                        <Link to={`/volunteer/patient-session/${schedule.id}`} className="text-decoration-none text-reset">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>{schedule.patient}</Card.Title>
                                    <Card.Text>
                                        <strong>Program:</strong> {schedule.program} <br />
                                        <strong>Date:</strong> {schedule.date} <br />
                                        <strong>Time:</strong> {schedule.time} <br />
                                        <strong>Duration:</strong> {schedule.duration} <br />
                                        <strong>Status:</strong> {getStatusBadge(schedule.status)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
            ))}
        </Row>
    );

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Your Schedules</h1>

            {today.length > 0 && (
                <>
                    <h3 className="mt-4 mb-3">Today:</h3>
                    {renderScheduleCards(today)}
                </>
            )}

            {upcoming.length > 0 && (
                <>
                    <h3 className="mt-5 mb-3">Upcoming:</h3>
                    {renderScheduleCards(upcoming)}
                </>
            )}
        </Container>
    );
}
