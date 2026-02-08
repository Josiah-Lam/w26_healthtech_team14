import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import './PatientSession.scss';

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
                            <Card.Text>
                                <strong>Program:</strong> {p.program} <br />
                                <strong>Scheduled Date:</strong> {p.date} <br />
                                <strong>Scheduled Time:</strong> {p.time} <br />
                                <strong>Session Notes:</strong>
                                <div className="mt-2 text-muted">{p.notes}</div>
                            </Card.Text>
                            <div className="mt-4">
                                <ParticipantSessionContent participantId={p.id} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}

/**
 * ParticipantSessionContent Component
 * Manages the session controls, tables, and heart rate animations
 */
function ParticipantSessionContent({ participantId }) {
    // Heart Rate Monitor State
    const [monitorStatus, setMonitorStatus] = useState('idle'); // 'idle', 'syncing', 'synced', 'disconnected'
    const [sessionTime, setSessionTime] = useState(0);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const sessionTimerRef = useRef(null);

    // HR Animation State
    const [activeSection, setActiveSection] = useState(null); // 'warmup', 'exercises', 'stretches'
    const [warmupHR, setWarmupHR] = useState(60);
    const [exercisesHR, setExercisesHR] = useState(80);
    const [stretchesHR, setStretchesHR] = useState(90);
    const hrIntervalRef = useRef(null);

    // Handle Sync Heart Rate Monitor button click
    const handleSyncHRM = () => {
        if (monitorStatus === 'idle') {
            setMonitorStatus('syncing');
            setTimeout(() => {
                setMonitorStatus('synced');
            }, 1000);
        } else if (monitorStatus === 'synced') {
            setMonitorStatus('disconnected');
        } else if (monitorStatus === 'disconnected') {
            setMonitorStatus('idle');
        }
    };

    // Handle Start Session
    const handleStartSession = () => {
        setIsSessionActive(true);
        setSessionTime(0);
    };

    // Handle End Session
    const handleEndSession = () => {
        setIsSessionActive(false);
    };

    // Session timer effect
    useEffect(() => {
        if (isSessionActive) {
            sessionTimerRef.current = setInterval(() => {
                setSessionTime(prev => prev + 1);
            }, 1000);
        } else {
            if (sessionTimerRef.current) {
                clearInterval(sessionTimerRef.current);
            }
        }
        return () => {
            if (sessionTimerRef.current) {
                clearInterval(sessionTimerRef.current);
            }
        };
    }, [isSessionActive]);

    // HR Animation effect
    useEffect(() => {
        if (!activeSection) {
            if (hrIntervalRef.current) {
                clearInterval(hrIntervalRef.current);
            }
            return;
        }

        hrIntervalRef.current = setInterval(() => {
            if (activeSection === 'warmup') {
                setWarmupHR(prev => (prev < 80 ? prev + 1 : 80));
            } else if (activeSection === 'exercises') {
                setExercisesHR(prev => (prev < 100 ? prev + 1 : 100));
            } else if (activeSection === 'stretches') {
                setStretchesHR(prev => (prev > 60 ? prev - 1 : 60));
            }
        }, 2000);

        return () => {
            if (hrIntervalRef.current) {
                clearInterval(hrIntervalRef.current);
            }
        };
    }, [activeSection]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const getBtnText = () => {
        if (monitorStatus === 'syncing') return 'Syncing…';
        if (monitorStatus === 'synced') return 'Successfully Synced';
        if (monitorStatus === 'disconnected') return 'Disconnected Heart Rate Monitor';
        return 'Sync Heart Rate Monitor';
    };

    return (
        <div className="session-content">
            {/* Heart Rate Monitor Section */}
            <div className="hrm-section">
                <Button
                    onClick={handleSyncHRM}
                    variant={monitorStatus === 'synced' ? 'success' : monitorStatus === 'disconnected' ? 'danger' : 'primary'}
                    className="w-100 mb-3"
                >
                    {getBtnText()}
                </Button>

                <div className="session-timer-container">
                    <div className="session-timer">
                        {formatTime(sessionTime)}
                    </div>
                    <div className="timer-buttons">
                        <Button
                            onClick={handleStartSession}
                            disabled={isSessionActive}
                            variant="outline-success"
                            size="sm"
                        >
                            Start Session
                        </Button>
                        <Button
                            onClick={handleEndSession}
                            disabled={!isSessionActive}
                            variant="outline-danger"
                            size="sm"
                        >
                            End Session
                        </Button>
                    </div>
                </div>
            </div>

            {/* Session Sections Accordion */}
            <Accordion className="mt-4">
                {/* Warmup Section */}
                <Accordion.Item eventKey="warmup">
                    <Accordion.Header onClick={() => setActiveSection('warmup')}>
                        Warmup
                    </Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover responsive>
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
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        {activeSection === 'warmup' && (
                            <div className="hr-display">
                                <div className="hr-box">
                                    <span className="hr-label">HR</span>
                                    <span className="hr-value">{warmupHR}</span>
                                </div>
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Exercises Section */}
                <Accordion.Item eventKey="exercises">
                    <Accordion.Header onClick={() => setActiveSection('exercises')}>
                        Exercises
                    </Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Set #1 Reps</th>
                                    <th>Set #2 Reps</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Straight-Arm Tubing Pull Apart</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Seated Row</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Chest Press on Bench</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Leg Press</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Piston Pump Hammer Curl (DB)</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        {activeSection === 'exercises' && (
                            <div className="hr-display">
                                <div className="hr-box">
                                    <span className="hr-label">HR</span>
                                    <span className="hr-value">{exercisesHR}</span>
                                </div>
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Stretches Section */}
                <Accordion.Item eventKey="stretches">
                    <Accordion.Header onClick={() => setActiveSection('stretches')}>
                        Stretches
                    </Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Stretch</th>
                                    <th>Duration (Secs)</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Quads</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Shoulders</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Hips</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                                <tr>
                                    <td>Core</td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                    <td><input type="text" className="form-control form-control-sm" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        {activeSection === 'stretches' && (
                            <div className="hr-display">
                                <div className="hr-box">
                                    <span className="hr-label">HR</span>
                                    <span className="hr-value">{stretchesHR}</span>
                                </div>
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
