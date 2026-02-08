import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PersonalRecords() {
    const sections = [
        'Personal Information',
        'Current Diagnoses',
        'Medical History',
    ];

    return (
        <div>
            <h2>Personal Records</h2>

            <ListGroup className="mt-4">
                {sections.map((section, i) => (
                    <ListGroup.Item key={i} className="py-3">
                        <div className="fw-bold fs-5 mb-2">{section}</div>

                        {section === 'Personal Information' && (
                            <div className="d-flex flex-column">
                                <div><span className="fw-bold">First & Last name:</span></div>
                                <div><span className="fw-bold">Pronouns:</span></div>
                                <div><span className="fw-bold">Date of Birth (DD/MM/YYYY):</span></div>
                                <div><span className="fw-bold">Age:</span></div>
                                <div><span className="fw-bold">Sex:</span></div>
                            </div>
                        )}

                        {section === 'Current Diagnoses' && (
                            <div className="d-flex flex-column">
                                <div><span className="fw-bold">Preferred Contact Method:</span></div>
                                <div><span className="fw-bold">Contact Information:</span></div>
                                <div><span className="fw-bold">Emergency Contact & Relation:</span></div>
                                <div><span className="fw-bold">Emergency Contact Phone Number:</span></div>
                            </div>
                        )}

                        {section === 'Medical History' && (
                            <div className="d-flex flex-column">
                                <div><span className="fw-bold">Current Diagnoses:</span></div>
                                <div><span className="fw-bold">Past Diagnoses:</span></div>
                                <div><span className="fw-bold">Family History:</span></div>
                                <div><span className="fw-bold">Medications & Supplements:</span></div>
                                <div><span className="fw-bold">Allergies/Sensitivities:</span></div>
                            </div>
                        )}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
