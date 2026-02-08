import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function VerifyAccount() {
    const { user, verifyCurrent } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    function handleVerify() {
        verifyCurrent();
        navigate('/');
    }

    return (
        <Container className="mt-4">
            <h2>Account Verification</h2>
            <p>We sent a verification code to <strong>{user.email}</strong>. (This is a mock.)</p>
            <Button onClick={handleVerify}>Mark as verified</Button>
        </Container>
    );
}
