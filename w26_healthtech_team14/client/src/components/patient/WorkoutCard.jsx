import React from 'react';
import './WorkoutCard.scss';

/**
 * WorkoutCard Component
 * Displays individual workout with checkbox for completion tracking
 */
export function WorkoutCard({
    category = 'Exercise',
    exercise = 'Exercise Name',
    reps = '10 reps',
    completed = false,
    onToggle = () => { }
}) {
    return (
        <div className={`workout-card ${completed ? 'completed' : ''}`}>
            <div className="workout-checkbox">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(!completed)}
                    className="checkbox-input"
                    id={`workout-${exercise}-${category}`}
                />
                <label htmlFor={`workout-${exercise}-${category}`} className="checkbox-label">
                    {completed && '✓'}
                </label>
            </div>

            <div className="workout-info">
                <span className="workout-category">{category}</span>
                <h4 className="workout-exercise">{exercise}</h4>
                <span className="workout-reps">{reps}</span>
            </div>

            <div className="workout-status">
                {completed && <span className="status-badge">Done</span>}
            </div>
        </div>
    );
}
