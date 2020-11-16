import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import BudgetCard from './BudgetCard'
import CustomerCard from './CustomerCard'
import LineChart from './LineChart'
import ProfitCard from './ProfitCard'
import TaskCard from './TaskCard'

function Row1Dashboard() {
    return (

        <Container>

        <Row xs={3} >
        <Col xs lg={3} ><BudgetCard/></Col>
        <Col xs lg={3}><CustomerCard/></Col>
        <Col>
                <div className="chart" >
                <LineChart />
                </div>
        </Col>
        <Col xs lg={3}><TaskCard/></Col>
        <Col xs lg={3}><ProfitCard/></Col>
        </Row>

        </Container>
    )
}

export default Row1Dashboard
