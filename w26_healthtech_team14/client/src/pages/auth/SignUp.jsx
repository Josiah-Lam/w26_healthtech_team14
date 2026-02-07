import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Patient');
    const { signup } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        signup({ email, role });
        navigate('/verify');
    }

    return (
        <Container className="mt-4" style={{ maxWidth: 540 }}>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Patient</option>
                        <option>Volunteer</option>
                        <option>Admin</option>
                    </Form.Select>
                </Form.Group>

                <Button type="submit">Create account</Button>
            </Form>
        </Container>
    );
}
