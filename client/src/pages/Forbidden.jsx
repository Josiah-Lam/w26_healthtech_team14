import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Forbidden() {
    return (
        <Container className="mt-4">
            <h2>Forbidden</h2>
            <p>You do not have permission to view this page.</p>
        </Container>
    );
}
