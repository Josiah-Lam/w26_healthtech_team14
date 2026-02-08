import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function RequireRole({ allowed = [], children }) {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" replace />;

    // Prevent access until account is verified
    if (!user.isVerified) {
        return <Navigate to="/verify" replace />;
    }

    if (!allowed.includes(user.role)) {
        return <Navigate to="/forbidden" replace />;
    }

    return children;
}
