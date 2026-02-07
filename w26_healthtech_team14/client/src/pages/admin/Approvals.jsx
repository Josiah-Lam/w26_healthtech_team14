import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * Approvals Page
 * Manages pending approvals for accounts, changes, etc.
 */
export default function Approvals() {
    const [approvalsData, setApprovalsData] = useState([
        {
            id: 1,
            type: 'Account Registration',
            requester: 'Mike Wilson',
            email: 'mike@example.com',
            role: 'Volunteer',
            submittedDate: '2026-02-06',
            details: 'New volunteer registration'
        },
        {
            id: 2,
            type: 'Role Change',
            requester: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'Patient -> Volunteer',
            submittedDate: '2026-02-05',
            details: 'User requested to become a volunteer'
        },
        {
            id: 3,
            type: 'Account Upgrade',
            requester: 'Tom Brown',
            email: 'tom@example.com',
            role: 'Patient',
            submittedDate: '2026-02-04',
            details: 'Request for premium features'
        },
        {
            id: 4,
            type: 'Account Registration',
            requester: 'Emma Davis',
            email: 'emma@example.com',
            role: 'Patient',
            submittedDate: '2026-02-03',
            details: 'New patient registration'
        },
        {
            id: 5,
            type: 'Data Export',
            requester: 'Robert Wilson',
            email: 'robert@example.com',
            role: 'Patient',
            submittedDate: '2026-02-02',
            details: 'User requested to export personal data'
        }
    ]);

    const handleApprove = (id) => {
        setApprovalsData(approvalsData.filter(item => item.id !== id));
        // Call backend to update approval status
    };

    const handleReject = (id) => {
        setApprovalsData(approvalsData.filter(item => item.id !== id));
        // Call backend to update approval status
    };

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Pending Approvals</h1>
            <p className="text-muted">Total pending: {approvalsData.length}</p>

            <ListGroup>
                {approvalsData.map(approval => (
                    <ListGroup.Item key={approval.id}>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                                <h5 className="mb-1">
                                    {approval.type}
                                    <Badge bg="warning" className="ms-2">
                                        Pending
                                    </Badge>
                                </h5>
                                <p className="mb-2">
                                    <strong>Requester:</strong> {approval.requester} ({approval.email}) <br />
                                    <strong>Role:</strong> {approval.role} <br />
                                    <strong>Submitted:</strong> {approval.submittedDate} <br />
                                    <strong>Details:</strong> {approval.details}
                                </p>
                            </div>
                            <div className="ms-3">
                                <ButtonGroup size="sm">
                                    <Button
                                        variant="success"
                                        onClick={() => handleApprove(approval.id)}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleReject(approval.id)}
                                    >
                                        Reject
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {approvalsData.length === 0 && (
                <p className="text-center text-muted mt-4">No pending approvals</p>
            )}
        </Container>
    );
}
