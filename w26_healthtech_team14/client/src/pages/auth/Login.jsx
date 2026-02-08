import React from 'react';
import Container from 'react-bootstrap/Container';
import Landing from '../../components/landing/Landing';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

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
        <div>
            <Landing />
            <Container className="mt-4 mb-5">
                <h2>Mock Login (dev)</h2>
                <p>Pick a role to sign in for local testing (client-side only).</p>
                <div className="d-flex gap-2">
                    <Button onClick={() => handleLogin('PATIENT')}>Sign in as Participant</Button>
                    <Button onClick={() => handleLogin('ADMIN')}>Sign in as Coordinator</Button>
                    <Button onClick={() => handleLogin('VOLUNTEER')}>Sign in as Volunteer</Button>
                </div>
            </Container>
        </div>
    );
}
