import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from '../auth/AuthProvider';
import { useCalendar } from '../context/CalendarContext';
import { WelcomeHeader } from '../components/patient/WelcomeHeader';
import { ProfileCard } from '../components/patient/ProfileCard';
import { CalendarWidget } from '../components/patient/CalendarWidget';
import { StreakTracker } from '../components/patient/StreakTracker';
import { ScheduleSection } from '../components/patient/ScheduleSection';
import { NotesSection } from '../components/patient/NotesSection';
import './Home.scss';

// Exercise data - shared with Exercise page
const EXERCISES_DATA = [
    {
        name: 'Straight-Arm Tubing Pull Apart',
        instructions: [
            'Loop your hands through the resistance tubing handles and hold the tubing shoulder width apart with an overhand grip (palms facing down). Your arms should be straight out in front of you and parallel to the floor.',
            'Keeping your arms straight, pull the tubing apart by moving the arms straight out to the side making a \'T\' with your body.',
            'Slowly return to the starting position. This will count as 1 rep.',
            'Continue for target repetitions.',
        ],
    },
    {
        name: 'Seated Row',
        instructions: [
            'Sit on bench with legs extended out in front of you and feet on the platform.',
            'Grab attachment piece with both hands.',
            'Maintain slight bend in knees while you pull the handle towards your lower rib cage keeping back straight, wrists straight and chest high.',
            'Slowly return to starting position while maintaining neutral postures.',
        ],
    },
    { name: 'Chest Press On Bench' },
    {
        name: 'Leg Press',
        instructions: [
            'Adjust the seat to appropriate setting. When you are in the starting position, your knees should be at a 90 degrees or slightly less.',
            'Place feet hip width apart on the footplate with feet parallel to each other.',
            'Keep trunk stabilizers contracted and pelvis stable while pushing to a straight leg and lifting the weight. Ensure to not lock the knees in the extended position.',
            'Slowly return to the start position.',
        ],
    },
    { name: 'Piston Pump Hammer Curl (DB)' },
];

export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { currentMonth, highlightedDates } = useCalendar();
    const [userName, setUserName] = useState('User');
    const [nextWorkoutDate, setNextWorkoutDate] = useState('Tomorrow');
    const [streakCount, setStreakCount] = useState(10);
    const [workouts, setWorkouts] = useState([
        {
            category: 'Warm-up',
            exercise: EXERCISES_DATA[0].name, // Straight-Arm Tubing Pull Apart
            reps: '15 reps',
            completed: true
        },
        {
            category: 'Exercises',
            exercise: EXERCISES_DATA[1].name, // Seated Row
            reps: '10-15 reps',
            completed: false
        },
        {
            category: 'Cool-down',
            exercise: EXERCISES_DATA[3].name, // Leg Press
            reps: '12 reps',
            completed: false
        }
    ]);
    const [notes, setNotes] = useState('');
    const [todayDate] = useState(new Date());

    useEffect(() => {
        // Extract username from email or use email as fallback
        if (user?.email) {
            const name = user.email.split('@')[0];
            // Capitalize first letter
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            setUserName(capitalizedName);
        } else {
            setUserName('User');
        }
        
        // Fetch additional user data from backend
        setNextWorkoutDate('Tomorrow at 10:00 AM');
        setStreakCount(10);
        setNotes('');
    }, [user]);

    const handleWorkoutToggle = (index, completed) => {
        const updatedWorkouts = [...workouts];
        updatedWorkouts[index].completed = completed;
        setWorkouts(updatedWorkouts);
    };

    const handleNotesChange = (newNotes) => {
        setNotes(newNotes);
        // Here you would save notes to your backend
    };

    const handleCalendarClick = () => {
        navigate('/patient/calendar');
    };

    return (
        <div className="home-page">
            <Container fluid>
                {/* Welcome Header */}
                <Row className="mb-4">
                    <Col xs={12}>
                        <WelcomeHeader userName={userName} />
                    </Col>
                </Row>

                {/* Main Content Area */}
                <Row>
                    {/* Sidebar */}
                    <Col lg={3} md={4} xs={12} className="sidebar">
                        <ProfileCard
                            userName={userName}
                            nextWorkoutDate={nextWorkoutDate}
                        />
                        <div 
                            className="calendar-widget-wrapper"
                            onClick={handleCalendarClick}
                            style={{ cursor: 'pointer' }}
                            title="Click to view full calendar"
                        >
                            <CalendarWidget
                                currentMonth={currentMonth}
                                highlightedDates={highlightedDates}
                            />
                        </div>
                        <StreakTracker
                            streakCount={streakCount}
                            message="Keep up the amazing work! 💪"
                        />
                    </Col>

                    {/* Main Content */}
                    <Col lg={9} md={8} xs={12} className="main-content">
                        <ScheduleSection
                            workouts={workouts}
                            onWorkoutToggle={handleWorkoutToggle}
                        />
                        <NotesSection
                            initialNotes={notes}
                            onNotesChange={handleNotesChange}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}