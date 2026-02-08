import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

/**
 * Reports Page
 * Displays system reports and analytics
 */
export default function Reports() {
    const [reports, setReports] = useState([
        {
            id: 1,
            name: 'User Activity Report',
            description: 'Monthly active users and session metrics',
            generatedDate: '2026-02-07',
            period: 'January 2026'
        },
        {
            id: 2,
            name: 'Volunteer Performance Report',
            description: 'Volunteer assignments and completion rates',
            generatedDate: '2026-02-07',
            period: 'January 2026'
        },
        {
            id: 3,
            name: 'Participant Progress Report',
            description: 'Aggregate participant progress and outcomes',
            generatedDate: '2026-02-07',
            period: 'January 2026'
        },
        {
            id: 4,
            name: 'System Performance Report',
            description: 'System uptime, performance metrics, and issues',
            generatedDate: '2026-02-07',
            period: 'January 2026'
        }
    ]);

    const [reportTypes] = useState([
        { type: 'User Activity', frequency: 'Monthly' },
        { type: 'Volunteer Performance', frequency: 'Weekly' },
        { type: 'Participant Progress', frequency: 'Monthly' },
        { type: 'System Performance', frequency: 'Daily' },
        { type: 'Financial Summary', frequency: 'Monthly' }
    ]);

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Reports</h1>

            <Row className="mb-5">
                <Col xs={12}>
                    <h5 className="mb-3">Generated Reports</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Report Name</th>
                                <th>Description</th>
                                <th>Period</th>
                                <th>Generated Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map(report => (
                                <tr key={report.id}>
                                    <td>{report.name}</td>
                                    <td>{report.description}</td>
                                    <td>{report.period}</td>
                                    <td>{report.generatedDate}</td>
                                    <td>
                                        <Button size="sm" variant="outline-primary">
                                            Download
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h5 className="mb-3">Available Report Types</h5>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Report Type</th>
                                <th>Frequency</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportTypes.map((report, idx) => (
                                <tr key={idx}>
                                    <td>{report.type}</td>
                                    <td>{report.frequency}</td>
                                    <td>
                                        <Button size="sm" variant="outline-success">
                                            Generate Now
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
