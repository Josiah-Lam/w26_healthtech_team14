import React from 'react';
import './ProfileCard.scss';

/**
 * ProfileCard Component
 * Displays user photo and next workout date
 */
export function ProfileCard({ userImage = null, userName = 'User', nextWorkoutDate = 'Tomorrow' }) {
    return (
        <div className="profile-card">
            <div className="profile-avatar">
                {userImage ? (
                    <img src={userImage} alt={userName} className="profile-image" />
                ) : (
                    <div className="avatar-placeholder">👤</div>
                )}
            </div>
            <div className="profile-info">
                <h3 className="profile-name">{userName}</h3>
                <div className="next-workout">
                    <span className="label">Next Workout:</span>
                    <span className="date">{nextWorkoutDate}</span>
                </div>
            </div>
        </div>
    );
}
