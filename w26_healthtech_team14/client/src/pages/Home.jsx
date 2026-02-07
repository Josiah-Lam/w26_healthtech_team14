import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TodoListCard } from '../components/TodoListCard';
import { Greeting } from '../components/Greeting';

export default function Home() {
    return (
        <Row>
            <Col md={{ offset: 3, span: 6 }}>
                <Greeting />
                <TodoListCard />
            </Col>
        </Row>
    );
}
