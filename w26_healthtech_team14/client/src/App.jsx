import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import PersonalRecords from './pages/PersonalRecords';
import Referrals from './pages/Referrals';
import Exercise from './pages/Exercise';

function App() {
    return (
        <>
            <AppNavbar />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personal-records" element={<PersonalRecords />} />
                    <Route path="/referrals" element={<Referrals />} />
                    <Route path="/exercise" element={<Exercise />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
