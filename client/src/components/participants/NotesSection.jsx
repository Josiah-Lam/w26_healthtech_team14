import React, { useState } from 'react';
import './NotesSection.scss';

/**
 * NotesSection Component
 * Allows users to write and save notes
 */
export function NotesSection({ initialNotes = '', onNotesChange = () => { } }) {
    const [notes, setNotes] = useState(initialNotes);
    const [isSaved, setIsSaved] = useState(true);

    const handleNotesChange = (e) => {
        const newNotes = e.target.value;
        setNotes(newNotes);
        setIsSaved(false);
    };

    const handleSave = () => {
        onNotesChange(notes);
        setIsSaved(true);
    };

    return (
        <section className="notes-section">
            <div className="notes-header">
                <h3 className="notes-title">Notes</h3>
                {!isSaved && (
                    <span className="unsaved-indicator">Unsaved changes</span>
                )}
                {isSaved && (
                    <span className="saved-indicator">Saved</span>
                )}
            </div>

            <textarea
                className="notes-input"
                placeholder="Add your notes here... How are you feeling? Any progress to celebrate?"
                value={notes}
                onChange={handleNotesChange}
            />

            <button
                className={`save-button ${isSaved ? 'saved' : ''}`}
                onClick={handleSave}
                disabled={isSaved}
            >
                {isSaved ? '✓ Saved' : 'Save Notes'}
            </button>
        </section>
    );
}
