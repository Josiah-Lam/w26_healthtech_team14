import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * Volunteer Schedules Page
 * Displays volunteer's schedule and sessions with toggle between Grid (Your Schedules) and List (Participant Session)
 */
export default function VolunteerSchedules() {
    const [schedules] = useState([
        { id: 1, participant: 'John Doe', program: 'STEPS', date: 'Feb 10, 2026', time: '10:00 AM', duration: '1 hour', status: 'completed' },
        { id: 2, participant: 'Jane Smith', program: 'STEPS', date: 'Feb 10, 2026', time: '2:00 PM', duration: '1 hours', status: 'completed' },
        { id: 3, participant: 'Bob Johnson', program: 'Brain and Body', date: 'Feb 11, 2026', time: '9:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 4, participant: 'Alice Brown', program: 'START-FIT', date: 'Feb 11, 2026', time: '11:00 AM', duration: '1 hour', status: 'scheduled' },
        { id: 5, participant: 'Charlie Davis', program: 'START-FIT', date: 'Feb 12, 2026', time: '3:00 PM', duration: '1 hour', status: 'scheduled' }
    ]);
    const [viewMode, setViewMode] = useState('grid');

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
                        <Card className="h-100 d-flex flex-column">
                            <Card.Body className="d-flex flex-column">
                                <Link to={`/volunteer/patient-session/${schedule.id}`} className="text-decoration-none text-reset">
                                    <Card.Title>{schedule.participant}</Card.Title>
                                </Link>
                                <Card.Text>
                                    <strong>Program:</strong> {schedule.program} <br />
                                    <strong>Date:</strong> {schedule.date} <br />
                                    <strong>Time:</strong> {schedule.time} <br />
                                    <strong>Duration:</strong> {schedule.duration} <br />
                                    <strong>Status:</strong> {getStatusBadge(schedule.status)}
                                </Card.Text>
                                <Link to={`/volunteer/patient-session/${schedule.id}`} className="mt-auto">
                                    <Button variant="primary" className="w-100" size="sm">
                                        View Session
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
            ))}
        </Row>
    );

    const renderScheduleList = (items) => (
        <Row>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Participant</th>
                                    <th>Program</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(schedule => (
                                    <tr key={schedule.id}>
                                        <td><strong>{schedule.participant}</strong></td>
                                        <td>{schedule.program}</td>
                                        <td>{schedule.date}</td>
                                        <td>{schedule.time}</td>
                                        <td>{schedule.duration}</td>
                                        <td>{getStatusBadge(schedule.status)}</td>
                                        <td>
                                            <Link to={`/volunteer/patient-session/${schedule.id}`} className="btn btn-sm btn-primary">
                                                View Session
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );

    return (
        <Container className="pt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Volunteer Schedules</h1>
                <ButtonGroup className="view-toggle">
                    <Button
                        variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('grid')}
                        title="Grid View - Your Schedules"
                    >
                        <span>📊 Grid</span>
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('list')}
                        title="List View - Participant Session"
                    >
                        <span>📋 List</span>
                    </Button>
                </ButtonGroup>
            </div>

            {viewMode === 'grid' ? (
                <>
                    {/* Grid View - Your Schedules */}
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
                </>
            ) : (
                <>
                    {/* List View - Participant Session */}
                    <h3 className="mt-4 mb-3">All Participant Sessions</h3>
                    {renderScheduleList(schedules)}
                </>
            )}
        </Container>
    );
}
