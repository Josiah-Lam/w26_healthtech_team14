import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PersonalRecords() {
    const sections = [
        'Personal Information',
        'Current Diagnoses',
        'Medications & Supplements',
        'Allergies/Sensitivities',
    ];

    return (
        <div>
            <h2>Personal Records</h2>

            <ListGroup className="mt-4">
                {sections.map((section, i) => (
                    <ListGroup.Item key={i} className="py-3">
                        <div className="fw-bold fs-5">{section}</div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
