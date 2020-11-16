import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {FaBalanceScaleRight} from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Axios from 'axios'

function Budget() {

    const [buds,setBuds]= useState([])

   useEffect(() => {
    Axios
    .get('https://gist.githubusercontent.com/haikafaeq/45634ab512cc508d5b05de5cd2af4f6d/raw/80ef31263de913bb377b0f5cdd3ae398eb73a624/budget.json')
    .then (res => {
      console.log(res)
      setBuds(res.data)
    })
    .catch (err => {
      console.log(err)
    })
   }, [])

    return (
        
        <Card >
       <Card.Header><FaBalanceScaleRight size={30} style={{ fill: 'red' }} /></Card.Header>
        <Card.Body>
          <Card.Title>BUDGET</Card.Title>
          <Card.Text>
           {buds}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{ color: 'red' }}>< AiOutlineArrowDown/>15 %</small>
          <small className="text-muted"> Since Last Month</small>
        </Card.Footer>
      </Card>
    )
}

export default Budget
