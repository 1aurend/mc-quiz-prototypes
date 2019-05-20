import React, { useEffect, useState } from 'react'
import Question from './Question.js'
import ChoicesBar from './ChoicesBar.js'
import './quiz.css'


function Quiz (props) {

  console.log(props.data);

  const [startTime, setStart] = useState([Date.now()])
  const [clickTime, setClick] = useState([])
  const [answeredCount, incrementCount] = useState(0)
  const [timesLog, addLog] = useState([])

  useEffect(() => {
    if (answeredCount >= 1 && timesLog.length < answeredCount) {
      console.log('start array: ' + startTime);
      console.log('click array: ' + clickTime);
      let time = (clickTime[(answeredCount-1)]-startTime[(answeredCount-1)])/1000
      console.log('math= ' + time)
      addLog([...timesLog, time])
    }

  }, [startTime, clickTime, answeredCount, timesLog])

  return (
    <div id='pagegrid'>
      <div id='question'>
        <Question question={props.data[0].question} />
      </div>
      <div id='choices'>
        <ChoicesBar onClick={() => {
          setClick([...clickTime, Date.now()])
          setStart([...startTime, Date.now()])
          incrementCount(answeredCount + 1)
        }} choices={props.data[0].choices}/>
      </div>
    </div>
  )

}

export default Quiz
