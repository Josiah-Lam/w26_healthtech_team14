/**
 * Role-Based Navigation Configuration
 * Defines navigation items and pages accessible by each user role
 */

export const ROLES = {
    PATIENT: 'PATIENT',
    VOLUNTEER: 'VOLUNTEER',
    ADMIN: 'ADMIN'
};

export const NAVIGATION_CONFIG = {
    [ROLES.PATIENT]: [
        { label: 'Home', path: '/', icon: 'home' },
        { label: 'Personal Records', path: '/patient/records', icon: 'file' },
        { label: 'Referrals', path: '/patient/referrals', icon: 'share' },
        { label: 'Exercise', path: '/patient/exercise', icon: 'running' },
        { label: 'My Progress', path: '/patient/progress', icon: 'chart' }
    ],
    [ROLES.VOLUNTEER]: [
        { label: 'Dashboard', path: '/volunteer/dashboard', icon: 'dashboard' },
        { label: 'Assigned Patients', path: '/volunteer/patients', icon: 'users' },
        { label: 'Schedules', path: '/volunteer/schedules', icon: 'calendar' },
        { label: 'My Assignments', path: '/volunteer/assignments', icon: 'tasks' },
        { label: 'Progress Reports', path: '/volunteer/reports', icon: 'chart' }
    ],
    [ROLES.ADMIN]: [
        { label: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
        { label: 'User Management', path: '/admin/users', icon: 'users' },
        { label: 'System Overview', path: '/admin/system', icon: 'settings' },
        { label: 'Approvals', path: '/admin/approvals', icon: 'check' },
        { label: 'Reports', path: '/admin/reports', icon: 'chart' }
    ]
};

/**
 * Get navigation items for a specific role
 */
export function getNavigation(role) {
    return NAVIGATION_CONFIG[role] || [];
}

/**
 * Check if a role has access to a path
 */
export function hasAccessToPath(userRole, path) {
    const navItems = getNavigation(userRole);
    return navItems.some(item => item.path === path);
}

/**
 * Get the default home path for a role
 */
export function getDefaultPath(role) {
    switch (role) {
        case ROLES.PATIENT:
            return '/';
        case ROLES.VOLUNTEER:
            return '/volunteer/dashboard';
        case ROLES.ADMIN:
            return '/admin/dashboard';
        default:
            return '/';
    }
}
