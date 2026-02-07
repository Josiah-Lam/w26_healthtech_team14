import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { TodoListCard } from './components/TodoListCard';
import { Greeting } from './components/Greeting';
import { NewPage } from './components/NewPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <Container>
            {currentPage === 'home' && (
                <>
                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <Greeting />
                            <TodoListCard />
                            <Button 
                                onClick={() => setCurrentPage('newpage')}
                                className="mt-3"
                            >
                                Go to New Page
                            </Button>
                        </Col>
                    </Row>
                </>
            )}

            {currentPage === 'newpage' && (
                <>
                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <NewPage />
                            <Button 
                                onClick={() => setCurrentPage('home')}
                                variant="secondary"
                                className="mt-3"
                            >
                                Back to Home
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default App;