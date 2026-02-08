import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export default function Login() {
    const { loginAs } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    function handleLogin(role) {
        loginAs(role);
        navigate(from, { replace: true });
    }

    return (
        <Container className="mt-4">
            <h2>Mock Login</h2>
            <p>Pick a role to sign in for local testing (client-side only).</p>
            <div className="d-flex gap-2">
                <Button onClick={() => handleLogin('PATIENT')}>Sign in as Patient</Button>
                <Button onClick={() => handleLogin('COORDINATOR')}>Sign in as Coordinator</Button>
                <Button onClick={() => handleLogin('VOLUNTEER')}>Sign in as Volunteer</Button>
            </div>
        </Container>
    );
}
