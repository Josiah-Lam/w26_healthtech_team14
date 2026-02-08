import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * User Management Page
 * Manages all users, their roles, and status
 */
export default function UserManagement() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Participant', status: 'active', joinDate: '2026-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Volunteer', status: 'active', joinDate: '2026-01-20' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Participant', status: 'inactive', joinDate: '2025-12-10' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Coordinator', status: 'active', joinDate: '2025-11-01' },
        { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Volunteer', status: 'active', joinDate: '2026-02-01' }
    ]);

    const getStatusBadge = (status) => {
        return status === 'active' ? (
            <Badge bg="success">Active</Badge>
        ) : (
            <Badge bg="secondary">Inactive</Badge>
        );
    };

    const getRoleBadge = (role) => {
        switch (role) {
            case 'Coordinator':
                return <Badge bg="danger">Coordinator</Badge>;
            case 'Volunteer':
                return <Badge bg="info">Volunteer</Badge>;
            case 'Participant':
                return <Badge bg="primary">Participant</Badge>;
            default:
                return <Badge bg="secondary">{role}</Badge>;
        }
    };

    return (
        <Container className="pt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>User Management</h1>
                <Button variant="primary">Add New User</Button>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{getRoleBadge(user.role)}</td>
                            <td>{getStatusBadge(user.status)}</td>
                            <td>{user.joinDate}</td>
                            <td>
                                <ButtonGroup size="sm">
                                    <Button variant="outline-primary">Edit</Button>
                                    <Button variant="outline-danger">Disable</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
