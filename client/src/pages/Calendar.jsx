import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../auth/AuthProvider';
import { useCalendar } from '../context/CalendarContext';
import { CalendarWidget } from '../components/participants/CalendarWidget';
import './Calendar.scss';

/**
 * Calendar Page
 * Full calendar view with detailed event management
 * Synchronized with Home page calendar
 */
export default function Calendar() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { currentMonth, highlightedDates, calendarEvents, getEventsForDate } = useCalendar();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (day) => {
        if (day) {
            setSelectedDate(day);
        }
    };

    const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

    return (
        <div className="calendar-page">
            <Container fluid>
                {/* Header with Back Button */}
                <Row className="mb-4">
                    <Col xs={12}>
                        <div className="calendar-header">
                            <Button 
                                variant="outline-secondary" 
                                onClick={() => navigate('/dashboard')}
                                className="back-button"
                            >
                                ← Back to Home
                            </Button>
                            <h1>Calendar</h1>
                            <div style={{ width: '120px' }}></div> {/* Spacer for alignment */}
                        </div>
                    </Col>
                </Row>

                {/* Main Calendar Area */}
                <Row>
                    {/* Calendar Widget */}
                    <Col lg={6} md={12} xs={12} className="calendar-widget-section">
                        <div className="calendar-widget-container">
                            <CalendarWidget
                                currentMonth={currentMonth}
                                highlightedDates={highlightedDates}
                                onDateClick={handleDateClick}
                                isExpandedView={true}
                            />
                        </div>
                    </Col>

                    {/* Selected Date Details */}
                    <Col lg={6} md={12} xs={12} className="date-details-section">
                        <div className="date-details-card">
                            {selectedDate ? (
                                <>
                                    <h3 className="selected-date">
                                        {new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </h3>
                                    
                                    <div className="events-section">
                                        <h4>Events</h4>
                                        {selectedDateEvents.length > 0 ? (
                                            <div className="events-list">
                                                {selectedDateEvents.map(event => (
                                                    <div key={event.id} className="event-item">
                                                        <div className="event-title">{event.name}</div>
                                                        {event.description && (
                                                            <div className="event-description">{event.description}</div>
                                                        )}
                                                        {event.time && (
                                                            <div className="event-time">{event.time}</div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="no-events">
                                                No events scheduled for this date
                                            </div>
                                        )}
                                    </div>

                                    {highlightedDates.includes(selectedDate) && (
                                        <div className="activity-badge">
                                            <span className="badge-icon">✓</span>
                                            <span>Workout scheduled</span>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="no-selection">
                                    <p>Select a date to view details</p>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>

                {/* Calendar Legend */}
                <Row className="mt-5">
                    <Col xs={12}>
                        <div className="calendar-legend">
                            <h5>Legend</h5>
                            <div className="legend-items">
                                <div className="legend-item">
                                    <div className="legend-highlight"></div>
                                    <span>Workout scheduled</span>
                                </div>
                                <div className="legend-item">
                                    <div className="legend-event"></div>
                                    <span>Has events</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
