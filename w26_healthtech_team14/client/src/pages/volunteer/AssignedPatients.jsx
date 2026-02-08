import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/*
 * Assigned Participants Page
 * Displays list of participants assigned to this volunteer
 */
export default function AssignedPatients() {
    const [participants, setParticipants] = useState([
        { id: 1, name: 'John Doe', status: 'active', lastSession: '2 days ago', progress: 75 },
        { id: 2, name: 'Jane Smith', status: 'active', lastSession: 'today', progress: 90 },
        { id: 3, name: 'Bob Johnson', status: 'inactive', lastSession: '1 week ago', progress: 45 },
        { id: 4, name: 'Alice Brown', status: 'active', lastSession: '3 days ago', progress: 60 },
        { id: 5, name: 'Charlie Davis', status: 'active', lastSession: 'yesterday', progress: 85 }
    ]);

    const getStatusBadge = (status) => {
        return status === 'active' ? (
            <Badge bg="success">Active</Badge>
        ) : (
            <Badge bg="secondary">Inactive</Badge>
        );
    };

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Assigned Participants</h1>

            <h3 className="mt-4 mb-3">Patient Overview</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Participant Name</th>
                        <th>Status</th>
                        <th>Last Session</th>
                        <th>Program</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map(p => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{getStatusBadge(p.status)}</td>
                            <td>{p.lastSession}</td>
                            <td>
                                <div className="progress" style={{ height: '20px' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${p.progress}%` }}
                                    >
                                        {p.progress}%
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h3 className="mt-5 mb-3">Progress Reports</h3>
            <Row>
                {reports.map(report => (
                    <Col md={6} lg={4} key={report.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{report.patientName}</Card.Title>
                                <small className="text-muted d-block mb-3">{report.period}</small>

                                <Card.Text>
                                    <strong>Sessions:</strong> {report.completedSessions}/{report.totalSessions} <br />
                                    <div className="mt-2">
                                        <div className="progress" style={{ height: '20px' }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${(report.completedSessions / report.totalSessions) * 100}%` }}
                                            >
                                                {Math.round((report.completedSessions / report.totalSessions) * 100)}%
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <strong>Progress:</strong>{' '}
                                    <div className="mt-2">
                                        <div className="progress" style={{ height: '20px' }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${report.averageProgress}%` }}
                                            >
                                                {report.averageProgress}%
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <strong className="mt-3 d-block">Notes:</strong>
                                    <p className="text-muted">{report.notes}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
