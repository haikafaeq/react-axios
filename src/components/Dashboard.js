import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import DoughnutChart from './dashboard/DoughnutChart'
import Row1Dashboard from './dashboard/Row1Dashboard'
import Row2Dashboard from './dashboard/Row2Dashboard'

function Dashboard() {
    return (
       
            <Container className="themed-container" fluid={true}>
            
            <Row>
                <Col xs="auto"><h2>Dashboard</h2></Col>
            </Row>

            <Row1Dashboard />

            <Row2Dashboard />

            <Row>
                <Col>Map</Col>
                <Col><DoughnutChart /></Col>
            </Row>
            </Container>
                        
            
    
    )
}

export default Dashboard
