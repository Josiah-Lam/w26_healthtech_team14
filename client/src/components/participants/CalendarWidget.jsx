import React, { useState } from 'react';
import { useCalendar } from '../../context/CalendarContext';
import './CalendarWidget.scss';

/**
 * CalendarWidget Component
 * Displays a mini calendar for date navigation
 * Synchronized with CalendarContext for data consistency
 */
export function CalendarWidget({ 
    currentMonth = new Date(), 
    highlightedDates = [], 
    onDateClick = null,
    isExpandedView = false 
}) {
    const { highlightedDates: contextHighlightedDates } = useCalendar();
    const [displayMonth, setDisplayMonth] = useState(currentMonth);
    
    // Use context data if available, otherwise use props
    const activeHighlightedDates = contextHighlightedDates.length > 0 ? contextHighlightedDates : highlightedDates;

    const daysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handlePrevMonth = () => {
        setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1));
    };

    const handleDateClick = (day) => {
        if (day && onDateClick) {
            onDateClick(day);
        }
    };

    const getDays = () => {
        const days = [];
        const totalDays = daysInMonth(displayMonth);
        const firstDay = firstDayOfMonth(displayMonth);

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Days of month
        for (let i = 1; i <= totalDays; i++) {
            days.push(i);
        }

        return days;
    };

    const days = getDays();
    const chunks = [];
    for (let i = 0; i < days.length; i += 7) {
        chunks.push(days.slice(i, i + 7));
    }

    return (
        <div className={`calendar-widget ${isExpandedView ? 'expanded-view' : 'mini-view'}`}>
            <div className="calendar-header">
                <button className="nav-button" onClick={handlePrevMonth}>←</button>
                <h4 className="month-year">
                    {monthNames[displayMonth.getMonth()]} {displayMonth.getFullYear()}
                </h4>
                <button className="nav-button" onClick={handleNextMonth}>→</button>
            </div>

            <div className="calendar-body">
                <div className="weekday-header">
                    {dayNames.map(day => (
                        <div key={day} className="weekday-name">{day}</div>
                    ))}
                </div>

                <div className="calendar-grid">
                    {chunks.map((week, weekIdx) => (
                        <div key={weekIdx} className="week">
                            {week.map((day, dayIdx) => (
                                <div
                                    key={dayIdx}
                                    className={`calendar-day ${!day ? 'empty' : ''} ${activeHighlightedDates.includes(day) ? 'highlighted' : ''} ${onDateClick && day ? 'clickable' : ''}`}
                                    onClick={() => handleDateClick(day)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
