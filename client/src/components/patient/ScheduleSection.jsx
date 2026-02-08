import React from 'react';
import { WorkoutCard } from './WorkoutCard';
import './ScheduleSection.scss';

/**
 * ScheduleSection Component
 * Displays today's workout schedule with list of workout cards
 */
export function ScheduleSection({ workouts = [], onWorkoutToggle = () => { } }) {
    const handleToggle = (index, completed) => {
        onWorkoutToggle(index, completed);
    };

    const completedCount = workouts.filter(w => w.completed).length;
    const totalCount = workouts.length;

    return (
        <section className="schedule-section">
            <div className="section-header">
                <h2 className="section-title">Today's Workout Schedule</h2>
                <span className="progress-indicator">
                    {completedCount}/{totalCount} completed
                </span>
            </div>

            {totalCount > 0 && (
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                    ></div>
                </div>
            )}

            <div className="workout-list">
                {totalCount === 0 ? (
                    <p className="no-workouts">No workouts scheduled for today. Enjoy your rest day! 😊</p>
                ) : (
                    workouts.map((workout, index) => (
                        <WorkoutCard
                            key={index}
                            category={workout.category || 'Exercise'}
                            exercise={workout.exercise || 'Exercise'}
                            reps={workout.reps || '10 reps'}
                            completed={workout.completed || false}
                            onToggle={(completed) => handleToggle(index, completed)}
                        />
                    ))
                )}
            </div>
        </section>
    );
}
