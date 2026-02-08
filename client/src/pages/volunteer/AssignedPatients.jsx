import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/**
 * Assigned Patient Progress Page
 * Displays list of patients assigned to this volunteer and their progress reports
 */
export default function AssignedPatients() {
    const [patients] = useState([
        { id: 1, name: 'John Doe', status: 'active', lastSession: '2 days ago', program: 'STEPS' },
        { id: 2, name: 'Jane Smith', status: 'active', lastSession: 'today', program: 'STEPS' },
        { id: 3, name: 'Bob Johnson', status: 'inactive', lastSession: '1 week ago', program: 'Brain and Body' },
        { id: 4, name: 'Alice Brown', status: 'active', lastSession: '3 days ago', program: 'START-FIT' },
        { id: 5, name: 'Charlie Davis', status: 'active', lastSession: 'yesterday', program: 'START-FIT' }
    ]);

    const [reports] = useState([
        {
            id: 1,
            patientName: 'John Doe',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 3,
            totalSessions: 3,
            averageProgress: 75,
            notes: 'Good progress this week'
        },
        {
            id: 2,
            patientName: 'Jane Smith',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 2,
            totalSessions: 4,
            averageProgress: 90,
            notes: 'Excellent progress and commitment'
        },
        {
            id: 3,
            patientName: 'Bob Johnson',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 1,
            totalSessions: 3,
            averageProgress: 45,
            notes: 'Need to follow up on missed sessions'
        },
        {
            id: 4,
            patientName: 'Alice Brown',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 3,
            totalSessions: 3,
            averageProgress: 60,
            notes: 'Steady progress, need encouragement'
        }
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
            <h1 className="mb-4">Assigned Patient Progress</h1>

            <h3 className="mt-4 mb-3">Patient Overview</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Status</th>
                        <th>Last Session</th>
                        <th>Program</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{getStatusBadge(patient.status)}</td>
                            <td>{patient.lastSession}</td>
                            <td>{patient.program}</td>
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
