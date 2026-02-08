import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useParams, Link } from 'react-router-dom';
import './PatientSession.scss';

// Heart Rate Display Component
function HeartRateDisplay({ label, currentHR = 90 }) {
    return (
        <div className="hr-display">
            <div className="hr-label">{label}</div>
            <div className="hr-value">{Math.round(currentHR)}</div>
        </div>
    );
}

// Warmup Section Component
function WarmupSection({ activeSection, onSectionClick, hrValue }) {
    return (
        <div className="session-section">
            <Button
                variant={activeSection === 'warmup' ? 'primary' : 'outline-primary'}
                onClick={() => onSectionClick('warmup')}
                className="section-button mb-3 w-100"
            >
                Warmup
            </Button>
            {activeSection === 'warmup' && (
                <>
                    <HeartRateDisplay label="HR" currentHR={hrValue.warmup} />
                    <div className="mt-3">
                        <Table striped bordered hover className="mb-3">
                            <thead>
                                <tr>
                                    <th>Warmup</th>
                                    <th>Duration (mins)</th>
                                    <th>RPE</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NuStep</td>
                                    <td>
                                        <input type="number" className="form-control form-control-sm" placeholder="5" />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control form-control-sm" placeholder="1-10" min="1" max="10" />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control form-control-sm" placeholder="Notes..." />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </>
            )}
        </div>
    );
}

// Exercises Section Component
function ExercisesSection({ activeSection, onSectionClick, hrValue }) {
    const exercises = [
        'Straight-Arm Tubing Pull Apart',
        'Seated Row',
        'Chest Press on Bench',
        'Leg Press',
        'Piston Pump Hammer Curl (DB)'
    ];

    return (
        <div className="session-section">
            <Button
                variant={activeSection === 'exercises' ? 'primary' : 'outline-primary'}
                onClick={() => onSectionClick('exercises')}
                className="section-button mb-3 w-100"
            >
                Exercises
            </Button>
            {activeSection === 'exercises' && (
                <>
                    <HeartRateDisplay label="HR" currentHR={hrValue.exercises} />
                    <div className="mt-3">
                        <Table striped bordered hover className="mb-3">
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Set #1 Reps</th>
                                    <th>Set #2 Reps</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exercises.map((exercise, idx) => (
                                    <tr key={idx}>
                                        <td>{exercise}</td>
                                        <td>
                                            <input type="number" className="form-control form-control-sm" placeholder="0" min="0" />
                                        </td>
                                        <td>
                                            <input type="number" className="form-control form-control-sm" placeholder="0" min="0" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control form-control-sm" placeholder="Notes..." />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </>
            )}
        </div>
    );
}

// Stretches Section Component
function StretchesSection({ activeSection, onSectionClick, hrValue }) {
    const stretches = ['Quads', 'Shoulders', 'Hips', 'Core'];

    return (
        <div className="session-section">
            <Button
                variant={activeSection === 'stretches' ? 'primary' : 'outline-primary'}
                onClick={() => onSectionClick('stretches')}
                className="section-button mb-3 w-100"
            >
                Stretches
            </Button>
            {activeSection === 'stretches' && (
                <>
                    <HeartRateDisplay label="HR" currentHR={hrValue.stretches} />
                    <div className="mt-3">
                        <Table striped bordered hover className="mb-3">
                            <thead>
                                <tr>
                                    <th>Stretch</th>
                                    <th>Duration (Secs)</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stretches.map((stretch, idx) => (
                                    <tr key={idx}>
                                        <td>{stretch}</td>
                                        <td>
                                            <input type="number" className="form-control form-control-sm" placeholder="30" min="0" />
                                        </td>
                                        <td>
                                            <input type="text" className="form-control form-control-sm" placeholder="Notes..." />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </>
            )}
        </div>
    );
}

// Sync Heart Rate Monitor Component
function SyncHeartRateMonitor({ onSync }) {
    const [syncStatus, setSyncStatus] = useState('Sync Heart Rate Monitor');
    const [isLoading, setIsLoading] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const handleSync = async () => {
        setIsLoading(true);

        if (!isConnected) {
            // Connecting
            setSyncStatus('Syncing…');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSyncStatus('Successfully Synced');
            setIsConnected(true);
            setIsLoading(false);
            onSync();
        } else {
            // Disconnecting
            setSyncStatus('Disconnected Heart Rate Monitor');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSyncStatus('Sync Heart Rate Monitor');
            setIsConnected(false);
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="outline-primary"
            className="w-100 mb-3"
            onClick={handleSync}
            disabled={isLoading}
        >
            {syncStatus}
        </Button>
    );
}

// Session Timer Component
function SessionTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleEnd = () => {
        setIsRunning(false);
    };

    const formatTime = (secs) => {
        const hours = Math.floor(secs / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const displaySecs = secs % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(displaySecs).padStart(2, '0')}`;
    };

    return (
        <div className="session-timer mb-3">
            <div className="timer-display">{formatTime(seconds)}</div>
            <div className="timer-buttons">
                <Button
                    variant="outline-success"
                    size="sm"
                    disabled={isRunning}
                    onClick={handleStart}
                    className="me-2"
                >
                    Start Session
                </Button>
                <Button
                    variant="outline-danger"
                    size="sm"
                    disabled={!isRunning}
                    onClick={handleEnd}
                >
                    End Session
                </Button>
            </div>
        </div>
    );
}

// Session Content Component
function SessionContent({ participant }) {
    const [activeSection, setActiveSection] = useState(null);
    const [hrValues, setHrValues] = useState({
        warmup: 60,
        exercises: 80,
        stretches: 90
    });
    const intervalRef = useRef(null);
    const currentSectionRef = useRef(null);

    // Define HR ranges and directions for each section
    const hrConfig = {
        warmup: { min: 60, max: 80, direction: 1 },      // increases from 60 to 80
        exercises: { min: 80, max: 100, direction: 1 },  // increases from 80 to 100
        stretches: { min: 60, max: 90, direction: -1 }   // decreases from 90 to 60
    };

    // Heart rate animation logic - update every 2 seconds
    useEffect(() => {
        if (!activeSection) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            currentSectionRef.current = null;
            return;
        }

        currentSectionRef.current = activeSection;
        const config = hrConfig[activeSection];

        const animateHR = () => {
            setHrValues(prev => {
                // Only update if the active section hasn't changed
                if (currentSectionRef.current !== activeSection) {
                    return prev;
                }

                const current = prev[activeSection];
                let newValue = current + config.direction;

                // Check bounds - stop incrementing/decrementing when limits are reached
                if (config.direction === 1) {
                    // Increasing
                    if (newValue > config.max) {
                        newValue = config.max;
                    }
                } else {
                    // Decreasing
                    if (newValue < config.min) {
                        newValue = config.min;
                    }
                }

                return {
                    ...prev,
                    [activeSection]: newValue
                };
            });
        };

        // Start animation immediately and then every 2 seconds
        animateHR();
        intervalRef.current = setInterval(animateHR, 2000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [activeSection]);

    const handleSectionClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleSync = () => {
        // Reset HR values to starting values on sync
        setHrValues({
            warmup: 60,
            exercises: 80,
            stretches: 90
        });
    };

    return (
        <div className="session-content">
            <Card.Text>
                <strong>Program:</strong> {participant.program} <br />
                <strong>Scheduled Date:</strong> {participant.date} <br />
                <strong>Scheduled Time:</strong> {participant.time} <br />
                <strong>Session Notes:</strong>
                <div className="mt-2 text-muted">{participant.notes}</div>
            </Card.Text>
            <div className="mt-4">
                <SyncHeartRateMonitor onSync={handleSync} />
                <SessionTimer />
                <WarmupSection activeSection={activeSection} onSectionClick={handleSectionClick} hrValue={hrValues} />
                <ExercisesSection activeSection={activeSection} onSectionClick={handleSectionClick} hrValue={hrValues} />
                <StretchesSection activeSection={activeSection} onSectionClick={handleSectionClick} hrValue={hrValues} />
            </div>
        </div>
    );
}

export default function PatientSession() {
    const { id } = useParams();

    const [participants] = useState([
        { id: 1, name: 'John Doe', program: 'STEPS', date: 'Feb 10, 2026', time: '10:00 AM', notes: 'Mobility focus — bring tubing.' },
        { id: 2, name: 'Jane Smith', program: 'STEPS', date: 'Feb 10, 2026', time: '2:00 PM', notes: 'Cardiac monitoring required.' },
        { id: 3, name: 'Bob Johnson', program: 'Brain and Body', date: 'Feb 11, 2026', time: '9:00 AM', notes: 'Follow-up on home exercises.' },
        { id: 4, name: 'Alice Brown', program: 'START-FIT', date: 'Feb 11, 2026', time: '11:00 AM', notes: 'Balance training session.' },
        { id: 5, name: 'Charlie Davis', program: 'START-FIT', date: 'Feb 12, 2026', time: '3:00 PM', notes: 'Strength progression.' }
    ]);

    const activeKey = id ? String(id) : null;

    return (
        <Container className="pt-4">
            <h1 className="mb-4">Participant Session</h1>

            <Accordion defaultActiveKey={activeKey}>
                {participants.map((p) => (
                    <Accordion.Item eventKey={String(p.id)} key={p.id}>
                        <Accordion.Header>{p.name}</Accordion.Header>
                        <Accordion.Body>
                            <SessionContent participant={p} />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}
