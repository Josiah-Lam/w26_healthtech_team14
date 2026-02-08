import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './Exercise.scss';

export default function Exercise() {
    const exercises = [
        {
            name: 'Straight-Arm Tubing Pull Apart',
            image: 'Straight-Arm-Tubing Pull-Apart.png',
            instructions: [
                'Loop your hands through the resistance tubing handles and hold the tubing shoulder width apart with an overhand grip (palms facing down). Your arms should be straight out in front of you and parallel to the floor.',
                'Keeping your arms straight, pull the tubing apart by moving the arms straight out to the side making a \'T\' with your body.',
                'Slowly return to the starting position. This will count as 1 rep.',
                'Continue for target repetitions.',
            ],
        },
        {
            name: 'Seated Row',
            image: 'seated-row.png',
            instructions: [
                'Sit on bench with legs extended out in front of you and feet on the platform.',
                'Grab attachment piece with both hands.',
                'Maintain slight bend in knees while you pull the handle towards your lower rib cage keeping back straight, wrists straight and chest high.',
                'Slowly return to starting position while maintaining neutral postures.',
            ],
        },
        {
            name: 'Chest Press On Bench',
            image: 'chest-press-on-bench.png',
            instructions: [
                'Lay on bench and ensure your feet are still firmly on the floor. If this position bothers your low back, place 1 or both feet on the bench.',
                'Hold dumbbell at chest level slightly wider than shoulder width apart with palms facing forward and wrists in neutral position.',
                'Press dumbbells straight up above the chest in an arcing motion so that dumbbells come together at the top of the movement.',
                'Bend at the elbows to slowly lower dumbbells back to their starting position.',
            ],
        },
        {
            name: 'Leg Press',
            image: 'leg-press.png',
            instructions: [
                'Adjust the seat to appropriate setting. When you are in the starting position, your knees should be at a 90 degrees or slightly less.',
                'Place feet hip width apart on the footplate with feet parallel to each other.',
                'Keep trunk stabilizers contracted and pelvis stable while pushing to a straight leg and lifting the weight. Ensure to not lock the knees in the extended position.',
                'Slowly return to the start position.',
            ],
        },
        {
            name: 'Piston Pump Hammer Curl (DB)',
            image: 'Piston-Pump Hammer-Curl.png',
            instructions: [
                'Stand with feet hip-width apart, soft bend in the knee and weight on mid foot.',
                'Hold dumbbells in straight arms with palms facing inward.',
                'With one arm, hinge at elbow to curl the weight up to shoulder while keeping upper arm close to torso and wrists in neutral position. Ensure core is engaged to prevent any torso movement.',
                'Lower dumbbell under control to return to the starting position while raising the other dumbbell up towards your shoulder. This will count as 1 rep.',
                'Continue to raise/lower the dumbbells in alternating fashion for target repetitions.',
            ],
        },
    ];

    return (
        <div>
            <h2>Exercise Plan</h2>

            <ListGroup className="mt-3 exercise-list">
                {exercises.map((ex, i) => (
                    <ListGroup.Item key={i} className="exercise-item">
                        <div className="exercise-content">
                            <div className="exercise-text">
                                <div className="exercise-title-wrapper">
                                    <strong className="exercise-name">{ex.name}</strong>
                                    <img 
                                        src="/Speaker_Icon.svg.png" 
                                        alt="Audio" 
                                        className="speaker-icon"
                                        title="Speaker icon"
                                    />
                                </div>
                                {ex.instructions && (
                                    <div className="exercise-instructions">
                                        {ex.instructions.map((instr, j) => (
                                            <div key={j} className="instruction-line">
                                                {j + 1}. {instr}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="exercise-reps">
                                    Reps: 10-25 <span className="rest-label">Rest: 30-60 secs</span>
                                </div>
                            </div>
                            {ex.image && (
                                <div className="exercise-image">
                                    <img 
                                        src={`/${ex.image}`} 
                                        alt={ex.name}
                                        className="exercise-img"
                                    />
                                </div>
                            )}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
