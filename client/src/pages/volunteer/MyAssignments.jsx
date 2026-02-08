import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

/**
 * My Assignments Page
 * Displays all tasks and assignments for the volunteer
 */
export default function MyAssignments() {
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'Follow up with John Doe',
            patient: 'John Doe',
            dueDate: 'Feb 10, 2026',
            priority: 'high',
            status: 'pending'
        },
        {
            id: 2,
            title: 'Review exercise progress - Jane Smith',
            patient: 'Jane Smith',
            dueDate: 'Feb 11, 2026',
            priority: 'medium',
            status: 'in-progress'
        },
        {
            id: 3,
            title: 'Schedule next session - Bob Johnson',
            patient: 'Bob Johnson',
            dueDate: 'Feb 12, 2026',
            priority: 'medium',
            status: 'pending'
        },
        {
            id: 4,
            title: 'Submit weekly report',
            patient: 'General',
            dueDate: 'Feb 13, 2026',
            priority: 'high',
            status: 'pending'
        },
        {
            id: 5,
            title: 'Complete patient assessment - Alice Brown',
            patient: 'Alice Brown',
            dueDate: 'Feb 9, 2026',
            priority: 'high',
            status: 'completed'
        }
    ]);

    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'high':
                return <Badge bg="danger">High</Badge>;
            case 'medium':
                return <Badge bg="warning">Medium</Badge>;
            case 'low':
                return <Badge bg="info">Low</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending':
                return <Badge bg="secondary">Pending</Badge>;
            case 'in-progress':
                return <Badge bg="info">In Progress</Badge>;
            case 'completed':
                return <Badge bg="success">Completed</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    return (
        <Container className="pt-4">
            <h1 className="mb-4">My Assignments</h1>

            <ListGroup>
                {assignments.map(assignment => (
                    <ListGroup.Item key={assignment.id}>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                                <h5 className="mb-1">{assignment.title}</h5>
                                <p className="mb-2 text-muted">
                                    <strong>Patient:</strong> {assignment.patient} | <strong>Due:</strong> {assignment.dueDate}
                                </p>
                            </div>
                            <div className="ms-3">
                                {getPriorityBadge(assignment.priority)}
                                <span className="ms-2">
                                    {getStatusBadge(assignment.status)}
                                </span>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}
