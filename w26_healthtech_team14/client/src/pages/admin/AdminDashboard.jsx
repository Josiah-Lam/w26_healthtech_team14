import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/**
 * Admin Dashboard
 * Main dashboard for administrators with system overview
 */
export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalUsers: 156,
        activeParticipants: 89,
        volunteers: 23,
        pendingApprovals: 5,
        systemStatus: 'healthy'
    });

    useEffect(() => {
        // Fetch admin stats from backend
    }, []);

    return (
        <Container className="pt-4">
            <Row className="mb-5">
                <Col xs={12}>
                    <h1 className="mb-1">Coordinator Dashboard</h1>
                    <p className="text-muted">System overview and coordinator controls</p>
                </Col>
            </Row>

            <Row>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Total Users</h5>
                            <h2 className="text-primary">{stats.totalUsers}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Active Participants</h5>
                            <h2 className="text-success">{stats.activeParticipants}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Volunteers</h5>
                            <h2 className="text-info">{stats.volunteers}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Pending Approvals</h5>
                            <h2 className="text-warning">{stats.pendingApprovals}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Header>
                            <Card.Title className="mb-0">System Status</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                <span className="badge bg-success">HEALTHY</span>
                            </p>
                            <small className="text-muted">All systems operational</small>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Header>
                            <Card.Title className="mb-0">Recent Actions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">No recent actions to display</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
