import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Participant');
    const [isLoading, setIsLoading] = useState(false);
    const { loginWithEmail } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            loginWithEmail(email, role);
            navigate('/verify', { replace: true });
            setIsLoading(false);
        }, 500);
    }

    return (
        <Container className="mt-4" style={{ maxWidth: 540 }}>
            <h2 className="mb-1">Welcome Back</h2>
            <p className="text-muted mb-4">Sign in to your account to continue</p>

            <Alert variant="info" className="mb-4">
                <strong>Demo Mode:</strong> Use any email and password to sign in. You'll be redirected to verify your account.
            </Alert>

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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="role">
                    <Form.Label>Sign In As</Form.Label>
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Participant</option>
                        <option>Volunteer</option>
                        <option>Coordinator</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Select your role to access the appropriate dashboard
                    </Form.Text>
                </Form.Group>

                <Button
                    type="submit"
                    className="w-100 mb-3"
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>

                <div className="text-center">
                    <p className="text-muted mb-0">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-decoration-none">
                            Create one here
                        </a>
                    </p>
                </div>
            </Form>
        </Container>
    );
}
