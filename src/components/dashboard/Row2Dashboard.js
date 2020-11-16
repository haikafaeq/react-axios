import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BarChart from './BarChart'
import Calendar from './Calendar'

function Row2Dashboard() {
    return (
        <Container>
        <Row>
        </Row>
        <Row>
            <Col>Weather</Col>
            <Col  xs={4} md={3}> <Calendar/> </Col>
            <Col xs={6} ><BarChart /></Col>
        </Row>
        </Container>
    )
}

export default Row2Dashboard
