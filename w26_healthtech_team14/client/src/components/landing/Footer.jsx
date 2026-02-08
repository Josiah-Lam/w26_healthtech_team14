import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-5 py-4 bg-light" aria-label="Site footer">
            <div className="container">
                <div className="d-flex justify-content-between align-items-start flex-column flex-md-row">
                    <div>
                        <h5>CCCARE</h5>
                        <p className="mb-0">Contact: cccare@example.edu | (555) 555-5555</p>
                    </div>
                    <div>
                        <a href="#facebook" aria-label="Facebook" className="me-2">Facebook</a>
                        <a href="#twitter" aria-label="Twitter" className="me-2">Twitter</a>
                        <a href="#instagram" aria-label="Instagram">Instagram</a>
                    </div>
                </div>
                <hr />
                <small>© {new Date().getFullYear()} University — <a href="#legal">Legal</a> · <a href="#accessibility">Accessibility</a></small>
            </div>
        </footer>
    );
}
