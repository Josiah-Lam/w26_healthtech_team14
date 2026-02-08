import React from 'react';

export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className="skip-link"
            style={{
                position: 'absolute',
                left: -1000,
                top: 0,
                background: '#000',
                color: '#fff',
                padding: '8px 12px',
                zIndex: 2000,
            }}
            onFocus={(e) => (e.currentTarget.style.left = 10)}
            onBlur={(e) => (e.currentTarget.style.left = -1000)}
        >
            Skip to main content
        </a>
    );
}
