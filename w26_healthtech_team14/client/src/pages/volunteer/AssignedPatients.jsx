import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

/**
 * Assigned Patients Page
 * Displays list of patients assigned to this volunteer
 */
export default function AssignedPatients() {
    const [patients, setPatients] = useState([
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
            <h1 className="mb-4">Assigned Patients</h1>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Status</th>
                        <th>Last Session</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{getStatusBadge(patient.status)}</td>
                            <td>{patient.lastSession}</td>
                            <td>
                                <div className="progress" style={{ height: '20px' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${patient.progress}%` }}
                                    >
                                        {patient.progress}%
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
