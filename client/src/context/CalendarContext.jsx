import React, { createContext, useContext, useState } from 'react';

/**
 * CalendarContext - Manages calendar state shared between Home and Calendar pages
 * Ensures synchronization of calendar data (highlighted dates, events) across components
 */
const CalendarContext = createContext();

export function CalendarProvider({ children }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState([20, 21, 22, 23, 24, 25, 26, 27, 28]); // Example dates
    const [calendarEvents, setCalendarEvents] = useState({});

    const addEvent = (date, event) => {
        setCalendarEvents(prev => ({
            ...prev,
            [date]: [...(prev[date] || []), event]
        }));
    };

    const removeEvent = (date, eventId) => {
        setCalendarEvents(prev => ({
            ...prev,
            [date]: prev[date]?.filter(e => e.id !== eventId) || []
        }));
    };

    const updateEvent = (date, eventId, updatedEvent) => {
        setCalendarEvents(prev => ({
            ...prev,
            [date]: prev[date]?.map(e => e.id === eventId ? updatedEvent : e) || []
        }));
    };

    const getEventsForDate = (date) => {
        return calendarEvents[date] || [];
    };

    const addHighlightedDate = (date) => {
        setHighlightedDates(prev => 
            prev.includes(date) ? prev : [...prev, date].sort((a, b) => a - b)
        );
    };

    const removeHighlightedDate = (date) => {
        setHighlightedDates(prev => prev.filter(d => d !== date));
    };

    const value = {
        currentMonth,
        setCurrentMonth,
        highlightedDates,
        setHighlightedDates,
        addHighlightedDate,
        removeHighlightedDate,
        calendarEvents,
        setCalendarEvents,
        addEvent,
        removeEvent,
        updateEvent,
        getEventsForDate
    };

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    );
}

export function useCalendar() {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendar must be used within CalendarProvider');
    }
    return context;
}
