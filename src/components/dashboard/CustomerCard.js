import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'
import Axios from 'axios'

function CustomerCard() {

  const [cus,setCus]= useState([])

  useEffect(() => {
   Axios
   .get('https://gist.githubusercontent.com/haikafaeq/98dbf909f6a012eeda9a3aa4c1770822/raw/df4705c7b6e265f95f6823b5a059e813aab86a89/customer.json')
   .then (res => {
     console.log(res)
     setCus(res.data)
   })
   .catch (err => {
     console.log(err)
   })
  }, [])

    return (
        <Card >
        <Card.Header><IoIosPeople size={30} style={{ fill: 'green' }} /></Card.Header>
         <Card.Body>
           <Card.Title>TOTAL CUSTOMERS</Card.Title>
           <Card.Text>
            {cus} 
           </Card.Text>
         </Card.Body>
         <Card.Footer>
           <small style={{ color: 'green' }}>< AiOutlineArrowUp/>30 %</small>
           <small className="text-muted"> Since Last Month</small>
         </Card.Footer>
       </Card>
    )
}

export default CustomerCard
