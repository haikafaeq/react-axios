import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import Axios from 'axios'

function ProfitCard() {

  const [pro,setPro]= useState([])

      useEffect(() => {
      Axios
      .get('https://gist.githubusercontent.com/haikafaeq/8c8a1ee6b88513906b6db4a8027a422e/raw/1b4e0b91320ac85931ae3c4fa233a8bd39b1bb37/profit.json')
      .then (res => {
        console.log(res)
        setPro(res.data)
      })
      .catch (err => {
        console.log(err)
      })
      }, [])

    return (      
        <Card >
        <Card.Header><FaMoneyCheckAlt size={30} style={{ fill: 'blue' }} /></Card.Header>
         <Card.Body>
           <Card.Title>PROFIT</Card.Title>
           <Card.Text>
             {pro}
           </Card.Text>
         </Card.Body>
         <Card.Footer>
             <small className="text-muted"> Since Last Month</small>
         </Card.Footer>
       </Card>
    )
}

export default ProfitCard
