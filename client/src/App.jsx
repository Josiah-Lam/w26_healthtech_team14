import Container from 'react-bootstrap/Container';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AppNavbar from './components/shared/AppNavbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerifyAccount from './pages/VerifyAccount';
import Profile from './pages/Profile';
import AuthProvider from './auth/AuthProvider';
import RequireAuth from './auth/RequireAuth';
import RequireRole from './auth/RequireRole';

// Participant Pages
import Home from './pages/Home';
import PersonalRecords from './pages/PersonalRecords';
import Referrals from './pages/Referrals';
import Exercise from './pages/Exercise';
import MyProgress from './pages/MyProgress';

// Volunteer Pages
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard';
import AssignedPatients from './pages/volunteer/AssignedPatients';
import VolunteerSchedules from './pages/volunteer/VolunteerSchedules';
import MyAssignments from './pages/volunteer/MyAssignments';
import ProgressReports from './pages/volunteer/ProgressReports';
import PatientSession from './pages/volunteer/PatientSession';

// Coordinator Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import SystemOverview from './pages/admin/SystemOverview';
import Approvals from './pages/admin/Approvals';
import Reports from './pages/admin/Reports';

// Layout wrapper for conditional navbar
function AppLayout({ children }) {
    const location = useLocation();
    // Hide navbar on verification, authentication pages, and landing page
    const hideNavbarRoutes = ['/login', '/signup', '/verify', '/'];
    const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

    return (
        <>
            {shouldShowNavbar && <AppNavbar />}
            <Container className="pt-4">
                {children}
            </Container>
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppLayout>
                <Routes>
                    {/* Public Landing Page */}
                    <Route path="/" element={<Landing />} />

                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* Protected Routes - Profile */}
                    <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path="/verify" element={<RequireAuth><VerifyAccount /></RequireAuth>} />

                    {/* PARTICIPANT ROUTES */}
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PARTICIPANT']}>
                                    <Home />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/records"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PARTICIPANT']}>
                                    <PersonalRecords />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/referrals"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PARTICIPANT']}>
                                    <Referrals />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/exercise"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PARTICIPANT']}>
                                    <Exercise />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/progress"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PARTICIPANT']}>
                                    <MyProgress />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    {/* VOLUNTEER ROUTES */}
                    <Route
                        path="/volunteer/dashboard"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <VolunteerDashboard />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/volunteer/patients"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <AssignedPatients />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/volunteer/patient-session/:id"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <PatientSession />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/volunteer/schedules"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <VolunteerSchedules />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/volunteer/assignments"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <MyAssignments />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/volunteer/reports"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['VOLUNTEER']}>
                                    <ProgressReports />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    {/* COORDINATOR ROUTES */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['COORDINATOR']}>
                                    <AdminDashboard />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/users"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['COORDINATOR']}>
                                    <UserManagement />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/system"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['COORDINATOR']}>
                                    <SystemOverview />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/approvals"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['COORDINATOR']}>
                                    <Approvals />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/reports"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['COORDINATOR']}>
                                    <Reports />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    {/* Catch all - redirect to login */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </AppLayout>
        </AuthProvider>
    );
}

export default App;
