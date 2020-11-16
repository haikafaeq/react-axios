import React, {useState, useEffect} from 'react'
import {VscTasklist} from 'react-icons/vsc'
import {Card} from 'react-bootstrap'
import {ProgressBar} from 'react-bootstrap'
import Axios from 'axios'

function TaskCard() {

    const [task,setTask]= useState([])

      useEffect(() => {
      Axios
      .get('https://gist.githubusercontent.com/haikafaeq/562366d308837ae9307a112cc6e5ced2/raw/a639e168dbf971e63818620161b1284fb84ac59b/taskprogress.json')
      .then (res => {
        console.log(res)
        setTask(res.data)
      })
      .catch (err => {
        console.log(err)
      })
      }, [])

    return (
        <Card >
        <Card.Header><VscTasklist size={30} style={{ fill: 'orange' }} /></Card.Header>
         <Card.Body>
           <Card.Title>TASKS PROGRESS</Card.Title>
           <Card.Text>
             {task}
           </Card.Text>
         </Card.Body>
         <Card.Footer>
              <ProgressBar now={60} />
         </Card.Footer>
       </Card>
    )
}

export default TaskCard
