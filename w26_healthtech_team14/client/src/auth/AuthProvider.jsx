import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

// Mock client-side auth provider for scaffolding. Stores users in localStorage.
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const raw = localStorage.getItem('mock_user');
        if (raw) setUser(JSON.parse(raw));
    }, []);

    function persistUser(u) {
        localStorage.setItem('mock_user', JSON.stringify(u));
        setUser(u);
    }

    function signup({ email, role = 'Patient' }) {
        // create a mock user record in local storage users pool
        const usersRaw = localStorage.getItem('mock_users');
        const users = usersRaw ? JSON.parse(usersRaw) : [];
        const newUser = {
            id: `user-${Date.now()}`,
            email,
            role: role.toUpperCase(),
            isVerified: false,
        };
        users.push(newUser);
        localStorage.setItem('mock_users', JSON.stringify(users));
        // set as current user
        persistUser(newUser);
        return newUser;
    }

    function login(email) {
        const usersRaw = localStorage.getItem('mock_users');
        const users = usersRaw ? JSON.parse(usersRaw) : [];
        const found = users.find((u) => u.email === email) || null;
        if (found) {
            persistUser(found);
            return found;
        }
        return null;
    }

    function loginAs(role) {
        // convenience for local testing
        const mock = { id: `mock-${role}`, role: role.toUpperCase(), isVerified: true, email: `${role}@example.com` };
        persistUser(mock);
    }

    function verifyCurrent() {
        if (!user) return null;
        const usersRaw = localStorage.getItem('mock_users');
        const users = usersRaw ? JSON.parse(usersRaw) : [];
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx >= 0) {
            users[idx].isVerified = true;
            localStorage.setItem('mock_users', JSON.stringify(users));
            const updated = { ...user, isVerified: true };
            persistUser(updated);
            return updated;
        }
        // if user was not in users pool (e.g., loginAs), just mark current
        const updated = { ...user, isVerified: true };
        persistUser(updated);
        return updated;
    }

    function logout() {
        localStorage.removeItem('mock_user');
        setUser(null);
    }

    const value = { user, signup, login, loginAs, verifyCurrent, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
