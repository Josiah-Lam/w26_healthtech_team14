import React from 'react';
import Button from 'react-bootstrap/Button';

export default function CTAButtons() {
    return (
        <section className="d-flex gap-3 my-4" aria-label="Primary calls to action">
            <Button href="#volunteer" variant="warning" style={{ background: '#FDB515', borderColor: '#FDB515' }}>
                Become a volunteer
            </Button>
            <Button href="#contact" variant="outline-dark">Contact us</Button>
            <Button href="#newsletter" variant="primary">Sign up for mailing list</Button>
        </section>
    );
}
