import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './SwapShift.scss';

/**
 * Swap Shift Page
 * Displays available shifts to swap for volunteers
 */
export default function SwapShift() {
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

    const handleSwapRequest = (swapId) => {
        setSwapRequests(prev => ({
            ...prev,
            [swapId]: !prev[swapId]
        }));
    };

    const SwapShiftTable = ({ date, dateLabel, swaps }) => (
        <div className="swap-shift-table">
            <h5 className="swap-date-label">{dateLabel}</h5>
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
            <Row className="mb-4">
                <Col xs={12}>
                    <div className="swap-shift-header">
                        <h1>Available Shifts to Swap</h1>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} lg={10} xl={9} className="mx-auto">
                    <div className="swap-shift-section">
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
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} lg={10} xl={9} className="mx-auto">
                    <div className="swap-shift-info">
                        <h3>How it Works</h3>
                        <ul>
                            <li>Browse available shifts from other volunteers</li>
                            <li>Click "Request SWAP" to request a shift swap</li>
                            <li>Once you request, the button changes to "Requested" to confirm your request</li>
                            <li>The volunteer you requested from will receive a notification</li>
                            <li>Both parties must approve for the swap to be finalized</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
