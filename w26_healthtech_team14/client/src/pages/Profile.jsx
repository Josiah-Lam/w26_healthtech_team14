import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../auth/AuthProvider';

export default function Profile() {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <Container className="mt-4">
            <h2>Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Verified:</strong> {user.isVerified ? 'Yes' : 'No'}</p>
            <Button variant="secondary" onClick={logout}>Log out</Button>
        </Container>
    );
}
