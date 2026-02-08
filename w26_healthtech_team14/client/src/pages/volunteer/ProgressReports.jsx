import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/**
 * Progress Reports Page
 * Displays progress reports for assigned participants
 */
export default function ProgressReports() {
    const [reports, setReports] = useState([
        {
            id: 1,
            participantName: 'John Doe',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 3,
            totalSessions: 3,
            averageProgress: 75,
            notes: 'Good progress this week'
        },
        {
            id: 2,
            participantName: 'Jane Smith',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 4,
            totalSessions: 4,
            averageProgress: 90,
            notes: 'Excellent progress and commitment'
        },
        {
            id: 3,
            participantName: 'Bob Johnson',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 1,
            totalSessions: 3,
            averageProgress: 45,
            notes: 'Need to follow up on missed sessions'
        },
        {
            id: 4,
            participantName: 'Alice Brown',
            period: 'Feb 1 - Feb 7, 2026',
            completedSessions: 3,
            totalSessions: 3,
            averageProgress: 60,
            notes: 'Steady progress, need encouragement'
        }
    ]);

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Progress Reports</h1>

            <Row>
                {reports.map(report => (
                    <Col md={6} lg={4} key={report.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{report.participantName}</Card.Title>
                                <small className="text-muted d-block mb-3">{report.period}</small>

                                <Card.Text>
                                    <strong>Sessions:</strong> {report.completedSessions}/{report.totalSessions} <br />
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
