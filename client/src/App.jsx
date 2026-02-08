import Container from 'react-bootstrap/Container';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/shared/AppNavbar';
import Login from './pages/Login';
import Forbidden from './pages/Forbidden';
import SignUp from './pages/SignUp';
import VerifyAccount from './pages/VerifyAccount';
import Profile from './pages/Profile';
import AuthProvider from './auth/AuthProvider';
import RequireAuth from './auth/RequireAuth';
import RequireRole from './auth/RequireRole';

// Patient Pages
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

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import SystemOverview from './pages/admin/SystemOverview';
import Approvals from './pages/admin/Approvals';
import Reports from './pages/admin/Reports';

function App() {
    return (
        <AuthProvider>
            <AppNavbar />
            <Container className="pt-4">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forbidden" element={<Forbidden />} />

                    {/* Protected Routes - Profile */}
                    <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path="/verify" element={<RequireAuth><VerifyAccount /></RequireAuth>} />

                    {/* PATIENT ROUTES */}
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PATIENT']}>
                                    <Home />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/records"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PATIENT']}>
                                    <PersonalRecords />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/referrals"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PATIENT']}>
                                    <Referrals />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/exercise"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PATIENT']}>
                                    <Exercise />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/patient/progress"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['PATIENT']}>
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

                    {/* ADMIN ROUTES */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['ADMIN']}>
                                    <AdminDashboard />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/users"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['ADMIN']}>
                                    <UserManagement />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/system"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['ADMIN']}>
                                    <SystemOverview />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/approvals"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['ADMIN']}>
                                    <Approvals />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/admin/reports"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={['ADMIN']}>
                                    <Reports />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    {/* Catch all - redirect to forbidden */}
                    <Route path="*" element={<Navigate to="/forbidden" replace />} />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
