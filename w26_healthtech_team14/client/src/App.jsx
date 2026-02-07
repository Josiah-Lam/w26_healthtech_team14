import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import PersonalRecords from './pages/PersonalRecords';
import Referrals from './pages/Referrals';
import Exercise from './pages/Exercise';
import Login from './pages/Login';
import Forbidden from './pages/Forbidden';
import SignUp from './pages/SignUp';
import VerifyAccount from './pages/VerifyAccount';
import Profile from './pages/Profile';
import AuthProvider from './auth/AuthProvider';
import RequireAuth from './auth/RequireAuth';
import RequireRole from './auth/RequireRole';

function App() {
    return (
        <AuthProvider>
            <AppNavbar />
            <Container className="pt-4">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/verify" element={<RequireAuth><VerifyAccount /></RequireAuth>} />
                    <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path="/forbidden" element={<Forbidden />} />

                    {/* Public/home route */}
                    <Route path="/" element={<Home />} />

                    {/* Protected routes: require authentication */}
                    <Route
                        path="/personal-records"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={["PATIENT", "COORDINATOR"]}>
                                    <PersonalRecords />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    <Route
                        path="/referrals"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={["COORDINATOR"]}>
                                    <Referrals />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />

                    <Route
                        path="/exercise"
                        element={
                            <RequireAuth>
                                <RequireRole allowed={["PATIENT", "COORDINATOR", "VOLUNTEER"]}>
                                    <Exercise />
                                </RequireRole>
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
