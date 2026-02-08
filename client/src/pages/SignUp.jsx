import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('Participant');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setError('');

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            signup({ email, role });
            navigate('/verify', { replace: true });
            setIsLoading(false);
        }, 500);
    }

    return (
        <Container className="mt-4" style={{ maxWidth: 540 }}>
            <h2 className="mb-1">Create Account</h2>
            <p className="text-muted mb-4">Join CCCARE to get started</p>

            {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="At least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="role">
                    <Form.Label>Select Your Role</Form.Label>
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Participant</option>
                        <option>Volunteer</option>
                        <option>Coordinator</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        You can change your role later if needed
                    </Form.Text>
                </Form.Group>

                <Button
                    type="submit"
                    className="w-100 mb-3"
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>

                <div className="text-center">
                    <p className="text-muted mb-0">
                        Already have an account?{' '}
                        <a href="/login" className="text-decoration-none">
                            Sign in here
                        </a>
                    </p>
                </div>
            </Form>
        </Container>
    );
}
