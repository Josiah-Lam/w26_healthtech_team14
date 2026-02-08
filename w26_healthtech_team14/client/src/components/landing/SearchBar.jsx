import React, { useState } from 'react';

export default function SearchBar() {
    const [q, setQ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // placeholder: would call /api/search?q=
        window.alert(`Search for: ${q}`);
    };

    return (
        <form role="search" onSubmit={handleSubmit} className="d-flex" aria-label="Site search">
            <input
                type="search"
                placeholder="Search site"
                aria-label="Search site"
                className="form-control me-2"
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>
    );
}
