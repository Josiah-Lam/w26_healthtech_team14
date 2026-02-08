// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// /**
//  * System Overview Page
//  * Displays system health, performance metrics, and logs
//  */
// export default function SystemOverview() {
//     const [systemMetrics, setSystemMetrics] = useState({
//         uptime: 99.98,
//         cpu: 35,
//         memory: 62,
//         database: 45,
//         storage: 28,
//         activeConnections: 234,
//         requestsPerMin: 1250
//     });

//     return (
//         <Container className="pt-4">
//             <h1 className="mb-4">System Overview</h1>

//             <Row>
//                 <Col md={6} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>System Performance</Card.Title>
//                             <div className="mb-3">
//                                 <div className="d-flex justify-content-between mb-2">
//                                     <span>CPU Usage</span>
//                                     <span>{systemMetrics.cpu}%</span>
//                                 </div>
//                                 <ProgressBar now={systemMetrics.cpu} variant="info" />
//                             </div>

//                             <div className="mb-3">
//                                 <div className="d-flex justify-content-between mb-2">
//                                     <span>Memory Usage</span>
//                                     <span>{systemMetrics.memory}%</span>
//                                 </div>
//                                 <ProgressBar now={systemMetrics.memory} variant="warning" />
//                             </div>

//                             <div className="mb-3">
//                                 <div className="d-flex justify-content-between mb-2">
//                                     <span>Database Usage</span>
//                                     <span>{systemMetrics.database}%</span>
//                                 </div>
//                                 <ProgressBar now={systemMetrics.database} variant="success" />
//                             </div>

//                             <div>
//                                 <div className="d-flex justify-content-between mb-2">
//                                     <span>Storage Usage</span>
//                                     <span>{systemMetrics.storage}%</span>
//                                 </div>
//                                 <ProgressBar now={systemMetrics.storage} variant="success" />
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={6} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>System Health</Card.Title>
//                             <p>
//                                 <strong>Uptime:</strong> {systemMetrics.uptime}%
//                             </p>
//                             <p>
//                                 <strong>Active Connections:</strong> {systemMetrics.activeConnections}
//                             </p>
//                             <p>
//                                 <strong>Requests/min:</strong> {systemMetrics.requestsPerMin}
//                             </p>
//                             <p>
//                                 <span className="badge bg-success">All Systems Operational</span>
//                             </p>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col xs={12}>
//                     <Card>
//                         <Card.Header>
//                             <Card.Title className="mb-0">System Logs</Card.Title>
//                         </Card.Header>
//                         <Card.Body>
//                             <p className="text-muted">No critical logs to display</p>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
