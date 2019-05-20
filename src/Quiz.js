import React, { useEffect, useState, useReducer } from 'react'
import Question from './Question.js'
import ChoicesBar from './ChoicesBar.js'
import Choice from './Choice.js'
import './quiz.css'


function Quiz (props) {

  console.log(props.data);

  const [startTime, setStart] = useState([Date.now()])
  const [clickTime, setClick] = useState([])
  const [answeredCount, incrementCount] = useState(0)
  const [timesLog, addLog] = useState([])
  const [currentQ, nextQ] = useState(props.data[0])
  const [responsesLog, addResponse] = useState([])

  useEffect(() => {
    if (answeredCount >= 1 && timesLog.length < answeredCount) {
      console.log('start array: ' + startTime);
      console.log('click array: ' + clickTime);
      let time = (clickTime[(answeredCount-1)]-startTime[(answeredCount-1)])/1000
      console.log('math= ' + time)
      addLog([...timesLog, time])
      console.log('reponses so far: ' + responsesLog);
    }

  }, [startTime, clickTime, answeredCount, timesLog])

  return (
    <div id='pagegrid'>
      <div id='question'>
        <Question question={currentQ.question} />
      </div>
      <div id='choices'>
        {currentQ.choices.map(choice => {return (
          <Choice onClick={() => {
              setClick([...clickTime, Date.now()])
              setStart([...startTime, Date.now()])
              incrementCount(answeredCount + 1)
              nextQ(props.data[answeredCount + 1])
              addResponse([...responsesLog, choice])
            }} choice={choice} key={choice} />)})}
      </div>
    </div>
  )

}

export default Quiz
