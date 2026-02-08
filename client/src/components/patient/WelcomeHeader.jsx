import React from 'react';
import './WelcomeHeader.scss';

/**
 * WelcomeHeader Component
 * Displays a welcome message with user name and an exercise equipment illustration
 */
export function WelcomeHeader({ userName = 'User' }) {
    return (
        <div className="welcome-header">
            <div className="welcome-content">
                <h1 className="welcome-message">Welcome {userName}!</h1>
                <p className="welcome-subtitle">Ready to reach your fitness goals?</p>
            </div>
            <div className="welcome-illustration">
                <div className="illustration-placeholder">
                    💪
                </div>
            </div>
        </div>
    );
}
