import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Breadcrumbs({ items = [] }) {
    return (
        <nav aria-label="Breadcrumb">
            <Breadcrumb>
                {items.length === 0 ? (
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                ) : (
                    items.map((it, idx) => (
                        <Breadcrumb.Item key={idx} href={it.href} active={idx === items.length - 1}>
                            {it.label}
                        </Breadcrumb.Item>
                    ))
                )}
            </Breadcrumb>
        </nav>
    );
}
