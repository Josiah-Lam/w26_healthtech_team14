import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './MyAssignments.scss';

/**
 * My Assignments Page
 * Displays all tasks and assignments for the volunteer
 * Includes Swap Shift functionality
 */
export default function MyAssignments() {
    const [showSwapShift, setShowSwapShift] = useState(false);
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

    // Swap shift data for each date
    const swapShiftData = {
        '2026-02-09': [
            { id: 'swap-1', volunteer: 'Maya Thompson', program: 'Brain and Body', sessionTime: '11:00 AM – 12:00 PM' },
            { id: 'swap-2', volunteer: 'Leo Martinez', program: 'Brain and Body', sessionTime: '9:00 AM – 10:00 AM' }
        ],
        '2026-02-10': [
            { id: 'swap-3', volunteer: 'Aisha Rahman', program: 'STEPS', sessionTime: '1:00 PM – 2:00 PM' },
            { id: 'swap-4', volunteer: 'Ethan Collins', program: 'STEPS', sessionTime: '1:00 PM – 2:00 PM' }
        ],
        '2026-02-11': [
            { id: 'swap-5', volunteer: 'Sofia Nguyen', program: 'START-FIT', sessionTime: '11:00 AM – 12:00 PM' }
        ]
    };

    // State for tracking swap requests
    const [swapRequests, setSwapRequests] = useState({});

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

    const getPriorityLabel = (priority) => {
        switch (priority) {
            case 'high':
                return 'High Priority';
            case 'medium':
                return 'Medium Priority';
            case 'low':
                return 'Low Priority';
            default:
                return 'Unknown Priority';
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

    const getAssignmentsByStatus = (status) => {
        return assignments.filter(assignment => assignment.status === status);
    };

    const AssignmentSection = ({ status, statusLabel, assignments: statusAssignments }) => {
        if (statusAssignments.length === 0) {
            return null;
        }

        return (
            <div className={`assignment-section assignment-section-${status} mb-5`}>
                <div className="section-header">
                    <h3 className="section-title">{statusLabel}</h3>
                    <Badge bg="secondary" className="count-badge">{statusAssignments.length}</Badge>
                </div>
                <ListGroup className="assignment-list">
                    {statusAssignments.map(assignment => (
                        <ListGroup.Item key={assignment.id} className="assignment-item">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="flex-grow-1">
                                    <h5 className="mb-2 assignment-title">{assignment.title}</h5>
                                    <p className="mb-2 text-muted assignment-meta">
                                        <strong>Patient:</strong> {assignment.patient} | <strong>Due:</strong> {assignment.dueDate}
                                    </p>
                                    <div className="priority-label">
                                        {getPriorityLabel(assignment.priority)}
                                    </div>
                                </div>
                                <div className="ms-3 assignment-badges">
                                    {getPriorityBadge(assignment.priority)}
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    };

    const handleSwapRequest = (swapId) => {
        setSwapRequests(prev => ({
            ...prev,
            [swapId]: !prev[swapId]
        }));
    };

    const SwapShiftTable = ({ date, dateLabel, swaps }) => (
        <div className="swap-shift-table mb-4">
            <h5 className="swap-date-label mb-3">{dateLabel}</h5>
            <Table striped bordered hover responsive>
                <thead className="table-header">
                    <tr>
                        <th>Volunteer</th>
                        <th>Program</th>
                        <th>Session Time</th>
                        <th>Request</th>
                    </tr>
                </thead>
                <tbody>
                    {swaps.map(swap => (
                        <tr key={swap.id}>
                            <td>{swap.volunteer}</td>
                            <td>{swap.program}</td>
                            <td>{swap.sessionTime}</td>
                            <td>
                                <Button
                                    className={`swap-request-btn ${swapRequests[swap.id] ? 'requested' : 'pending'}`}
                                    onClick={() => handleSwapRequest(swap.id)}
                                    aria-label={`Request swap with ${swap.volunteer}`}
                                    aria-pressed={swapRequests[swap.id] || false}
                                >
                                    {swapRequests[swap.id] ? 'Requested' : 'Request SWAP'}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

    return (
        <Container className="pt-4">
            <div className="assignments-header mb-4">
                <h1 className="mb-3">My Assignments</h1>
                <Button
                    variant={showSwapShift ? 'primary' : 'outline-primary'}
                    onClick={() => setShowSwapShift(!showSwapShift)}
                    className="swap-shift-button"
                >
                    {showSwapShift ? 'Hide Swap Shifts' : 'SWAP SHIFT'}
                </Button>
            </div>

            {showSwapShift && (
                <div className="swap-shift-section mb-5">
                    <h2 className="mb-4">Available Shifts to Swap</h2>
                    <SwapShiftTable 
                        date="2026-02-09" 
                        dateLabel="February 9, 2026" 
                        swaps={swapShiftData['2026-02-09']} 
                    />
                    <SwapShiftTable 
                        date="2026-02-10" 
                        dateLabel="February 10, 2026" 
                        swaps={swapShiftData['2026-02-10']} 
                    />
                    <SwapShiftTable 
                        date="2026-02-11" 
                        dateLabel="February 11, 2026" 
                        swaps={swapShiftData['2026-02-11']} 
                    />
                </div>
            )}

            <h2 className="mb-4">Current Assignments</h2>
            <div className="assignments-sections">
                <AssignmentSection 
                    status="in-progress"
                    statusLabel="In Progress"
                    assignments={getAssignmentsByStatus('in-progress')}
                />
                <AssignmentSection 
                    status="pending"
                    statusLabel="Pending"
                    assignments={getAssignmentsByStatus('pending')}
                />
                <AssignmentSection 
                    status="completed"
                    statusLabel="Completed"
                    assignments={getAssignmentsByStatus('completed')}
                />
            </div>
        </Container>
    );
}
