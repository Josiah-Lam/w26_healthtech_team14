import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PersonalRecords.scss';

/**
 * PersonalRecords Component
 * Displays user's personal, contact, and medical information
 * with visually distinct buttons for accessibility
 */
export default function PersonalRecords() {
    // Sample data - would be fetched from backend in production
    const personalInfo = [
        {
            label: 'Name',
            value: 'Denise Smith',
            ariaLabel: 'First and last name'
        },
        {
            label: 'Pronouns',
            value: 'She/Her',
            ariaLabel: 'Pronouns'
        },
        {
            label: 'DOB',
            value: '01/01/1953',
            ariaLabel: 'Date of birth'
        },
        {
            label: 'Age',
            value: '73',
            ariaLabel: 'Age'
        },
        {
            label: 'Sex',
            value: 'Female',
            ariaLabel: 'Sex'
        }
    ];

    const contactInfo = [
        {
            label: 'Contact Method',
            value: 'Phone Number',
            ariaLabel: 'Preferred contact method'
        },
        {
            label: 'Contact Info',
            value: '(123) 456-7890',
            ariaLabel: 'Contact information'
        },
        {
            label: 'Emergency Contact',
            value: 'Daniel Smith (Grandson)',
            ariaLabel: 'Emergency contact and relation'
        },
        {
            label: 'Emergency Phone',
            value: '(098) 765-4321',
            ariaLabel: 'Emergency contact phone number'
        }
    ];

    const medicalHistory = [
        {
            label: 'Current Diagnoses',
            value: 'Gastric Cancer, Gastroparesis, Intestinal Metaplasia',
            ariaLabel: 'Current diagnoses'
        },
        {
            label: 'Past Diagnoses',
            value: 'Helicobacter pylori (H.pylori)',
            ariaLabel: 'Past diagnoses'
        },
        {
            label: 'Family History',
            value: 'Gastric Cancer, Type 1 Diabetes, Leukemia, Hyperthyroidism, High Blood Pressure',
            ariaLabel: 'Family history'
        },
        {
            label: 'Medications/Supplements',
            value: 'Lorazepam, Pantoprazole, Jamp-Fer, Ondansetron',
            ariaLabel: 'Medications and supplements'
        },
        {
            label: 'Allergies',
            value: 'N/A',
            ariaLabel: 'Allergies and sensitivities'
        }
    ];

    const RecordField = ({ label, value, ariaLabel }) => (
        <div className="record-field">
            <button
                className="record-button"
                aria-label={ariaLabel}
                title={ariaLabel}
            >
                {label}
            </button>
            <div className="record-value">
                {value}
            </div>
        </div>
    );

    const RecordSection = ({ title, fields }) => (
        <section className="record-section">
            <h3 className="section-title">{title}</h3>
            <div className="fields-container">
                {fields.map((field, index) => (
                    <RecordField
                        key={index}
                        label={field.label}
                        value={field.value}
                        ariaLabel={field.ariaLabel}
                    />
                ))}
            </div>
        </section>
    );

    return (
        <div className="personal-records-page">
            <Container>
                {/* Page Header */}
                <Row className="mb-5">
                    <Col xs={12}>
                        <h1 className="page-title">Personal Records</h1>
                        <p className="page-subtitle">
                            Your personal information, contact details, and medical history
                        </p>
                    </Col>
                </Row>

                {/* Content Sections */}
                <Row>
                    <Col xs={12} lg={10} xl={9} className="mx-auto">
                        {/* Personal Information Section */}
                        <RecordSection
                            title="Personal Information"
                            fields={personalInfo}
                        />

                        {/* Contact Information Section */}
                        <RecordSection
                            title="Contact Information"
                            fields={contactInfo}
                        />

                        {/* Medical History Section */}
                        <RecordSection
                            title="Medical History"
                            fields={medicalHistory}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
