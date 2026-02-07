import React from 'react';
import './StreakTracker.scss';

/**
 * StreakTracker Component
 * Displays current streak and motivational message
 */
export function StreakTracker({ streakCount = 0, message = 'Keep it up!' }) {
    const getMotivation = (count) => {
        if (count === 0) return 'Start your streak today!';
        if (count < 5) return 'Great start! Keep going! 🚀';
        if (count < 10) return 'Very impressive! Keep up the momentum! 💪';
        if (count < 30) return 'Incredible dedication! You\'re on fire! 🔥';
        return 'You\'re a fitness champion! 🏆';
    };

    return (
        <div className="streak-tracker">
            <div className="streak-content">
                <span className="streak-label">Current Streak</span>
                <div className="streak-counter">
                    <span className="streak-number">{streakCount}</span>
                    <span className="streak-unit">days</span>
                </div>
            </div>
            <div className="streak-message">
                {message || getMotivation(streakCount)}
            </div>
        </div>
    );
}
