import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../auth/AuthProvider';

/**
 * Volunteer Dashboard
 * Main dashboard for volunteers showing overview and stats
 */
export default function VolunteerDashboard() {
    const { user } = useAuth();
    const [stats, setStats] = useState({
        assignedPatients: 5,
        completedSessions: 23,
        upcomingSessions: 3,
        totalHours: 45.5
    });

    useEffect(() => {
        // Fetch volunteer stats from backend
    }, []);

    return (
        <Container className="pt-4">
            <Row className="mb-5">
                <Col xs={12}>
                    <h1 className="mb-1">Welcome back, {user?.email?.split('@')[0] || 'Volunteer'}!</h1>
                    <p className="text-muted">Here's your volunteer overview</p>
                </Col>
            </Row>

            <Row>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Assigned Patients</h5>
                            <h2 className="text-primary">{stats.assignedPatients}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Completed Sessions</h5>
                            <h2 className="text-success">{stats.completedSessions}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Upcoming Sessions</h5>
                            <h2 className="text-warning">{stats.upcomingSessions}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Total Hours</h5>
                            <h2 className="text-info">{stats.totalHours}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title className="mb-0">Recent Activity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">No recent activity to display</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
