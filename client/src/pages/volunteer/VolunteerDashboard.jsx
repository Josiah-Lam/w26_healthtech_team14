import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useAuth } from '../../auth/AuthProvider';
import './VolunteerDashboard.scss';

/**
 * Volunteer Dashboard
 * Main dashboard for volunteers showing overview and stats
 */
export default function VolunteerDashboard() {
    const { user } = useAuth();
    const [stats, setStats] = useState({
        assignedPatients: 5,
        completedSessions: 23,
        upcomingSessions: 3,
        totalHours: 45.5
    });

    // Recent Activity data organized by category
    const recentActivity = {
        upcomingActions: [
            { id: 1, text: 'Reminder: STEPS session tomorrow at 1:00 PM', timestamp: '2 hours ago', icon: '📅' }
        ],
        exerciseLogSubmission: [
            { id: 2, text: 'Submitted weekly exercise log for Maya Thompson – Feb 9, 2026', timestamp: '1 day ago', icon: '📝' }
        ],
        shiftParticipation: [
            { id: 3, text: 'Attended Brain and Body session – Feb 10, 2026, 9:00 AM – 10:00 AM', timestamp: '2 days ago', icon: '✅' }
        ],
        swapShiftRequests: [
            { id: 4, text: 'Requested swap for Feb 11, 2026 session – Pending Approval', timestamp: '3 days ago', icon: '🔄' }
        ],
        completedTasks: [
            { id: 5, text: 'Marked STEPS session as complete – Feb 10, 2026', timestamp: '2 days ago', icon: '🏁' }
        ]
    };

    useEffect(() => {
        // Fetch volunteer stats from backend
    }, []);

    const ActivitySection = ({ title, icon, activities, variant }) => (
        <div className={`activity-section activity-section-${variant}`}>
            <div className="section-header">
                <span className="section-icon">{icon}</span>
                <h6 className="section-title">{title}</h6>
            </div>
            <div className="activities-list">
                {activities.map(activity => (
                    <div key={activity.id} className="activity-item">
                        <div className="activity-content">
                            <p className="activity-text">{activity.text}</p>
                            <small className="activity-timestamp">{activity.timestamp}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <Container className="pt-4">
            <Row className="mb-5">
                <Col xs={12}>
                    <h1 className="mb-1">Welcome back, {user?.email?.split('@')[0] || 'Volunteer'}!</h1>
                    <p className="text-muted">Here's your volunteer overview</p>
                </Col>
            </Row>

            <Row>
                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Assigned Patients</h5>
                            <h2 className="text-primary">{stats.assignedPatients}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Completed Sessions</h5>
                            <h2 className="text-success">{stats.completedSessions}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Upcoming Sessions</h5>
                            <h2 className="text-warning">{stats.upcomingSessions}</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card className="stat-card">
                        <Card.Body>
                            <h5 className="text-muted">Total Hours</h5>
                            <h2 className="text-info">{stats.totalHours}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12}>
                    <Card className="recent-activity-card">
                        <Card.Header>
                            <Card.Title className="mb-0">Recent Activity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="activity-sections">
                                <ActivitySection 
                                    title="Upcoming Actions" 
                                    icon="📅"
                                    activities={recentActivity.upcomingActions}
                                    variant="upcoming"
                                />
                                <ActivitySection 
                                    title="Exercise Log Submission" 
                                    icon="📝"
                                    activities={recentActivity.exerciseLogSubmission}
                                    variant="exercise"
                                />
                                <ActivitySection 
                                    title="Shift Participation" 
                                    icon="✅"
                                    activities={recentActivity.shiftParticipation}
                                    variant="participation"
                                />
                                <ActivitySection 
                                    title="Swap Shift Requests" 
                                    icon="🔄"
                                    activities={recentActivity.swapShiftRequests}
                                    variant="swap"
                                />
                                <ActivitySection 
                                    title="Completed Tasks" 
                                    icon="🏁"
                                    activities={recentActivity.completedTasks}
                                    variant="completed"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
