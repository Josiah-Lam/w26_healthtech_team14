import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import PersonalRecords from './pages/PersonalRecords';
import Referrals from './pages/Referrals';
import Exercise from './pages/Exercise';
import MyProgress from './pages/MyProgress';

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
                    <Route path="/personal-records" element={<PersonalRecords />} />
                    <Route path="/referrals" element={<Referrals />} />
                    <Route path="/exercise" element={<Exercise />} />
                    <Route path="/my-progress" element={<MyProgress />} />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
