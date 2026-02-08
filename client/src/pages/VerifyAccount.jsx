import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { getDefaultPath } from '../config/roleConfig';

export default function VerifyAccount() {
    const { user, verifyCurrent } = useAuth();
    const [verificationEmail, setVerificationEmail] = useState(user?.email || '');
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    // Mock phone number - last 4 digits of email hash
    const mockPhoneNumber = '+1 (***) ***-****';

    function handleSubmit(e) {
        e.preventDefault();
        setError('');

        // Validate email matches user's registered email
        if (verificationEmail !== user.email) {
            setError('Email does not match your registered email');
            return;
        }

        // Validate 6-digit code
        if (!/^\d{6}$/.test(verificationCode)) {
            setError('Please enter a valid 6-digit code');
            return;
        }

        setIsLoading(true);

        // Simulate verification API call
        setTimeout(() => {
            verifyCurrent();
            const defaultPath = getDefaultPath(user.role);
            navigate(defaultPath, { replace: true });
        }, 800);
    }

    function handleBackToLogin() {
        navigate('/login', { replace: true });
    }

    return (
        <Container className="mt-4" style={{ maxWidth: 540 }}>
            <h2 className="mb-1">Verify Your Account</h2>
            <p className="text-muted mb-4">Complete verification to access your dashboard</p>

            <Card className="mb-4 border-0 bg-light">
                <Card.Body>
                    <div className="text-center">
                        <p className="text-muted mb-2">Verification code sent to:</p>
                        <p className="h5 fw-bold mb-0">{mockPhoneNumber}</p>
                    </div>
                </Card.Body>
            </Card>

            <Alert variant="info" className="mb-4">
                <strong>Demo Mode:</strong> Enter any 6-digit number to complete verification. Your registered email has been auto-filled.
            </Alert>

            {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="verificationEmail">
                    <Form.Label>Registered Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={verificationEmail}
                        onChange={(e) => setVerificationEmail(e.target.value)}
                        required
                    />
                    <Form.Text className="text-muted">
                        Confirm your registered email address
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="verificationCode">
                    <Form.Label>Enter Verification Code</Form.Label>
                    <Form.Control
                        type="text"
                        inputMode="numeric"
                        placeholder="000000"
                        value={verificationCode}
                        onChange={(e) => {
                            // Only allow numbers
                            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setVerificationCode(value);
                        }}
                        maxLength="6"
                        className="text-center fs-5 font-monospace"
                        style={{ letterSpacing: '0.5em', padding: '12px' }}
                    />
                    <Form.Text className="text-muted">
                        You should have received a 6-digit code via SMS
                    </Form.Text>
                </Form.Group>

                <Button
                    type="submit"
                    className="w-100 mb-3"
                    disabled={isLoading || verificationCode.length !== 6}
                >
                    {isLoading ? 'Verifying...' : 'Verify Account'}
                </Button>

                <div className="text-center mb-3">
                    <p className="text-muted mb-2 small">
                        Didn't receive a code?
                    </p>
                    <Button variant="link" size="sm" className="text-decoration-none">
                        Resend verification code
                    </Button>
                </div>

                <hr />

                <div className="text-center">
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={handleBackToLogin}
                    >
                        Back to Login
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
