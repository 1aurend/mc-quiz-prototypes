import React, { useEffect, useState, useRef } from 'react'
import Question from './Question.js'
import Choice from './Choice.js'
import './quiz.css'
import Results from './Results.js'


function Quiz (props) {

  console.log(props.data);

  const [startTime, setStart] = useState([Date.now()])
  const [clickTime, setClick] = useState([])
  const [answeredCount, incrementCount] = useState(0)
  const [timesLog, addLog] = useState([])
  const [currentQ, nextQ] = useState(props.data[0])
  const [responsesLog, addResponse] = useState([])
  const average = useRef(0)
  const correct = useRef(0)


  useEffect(() => {
    if (answeredCount >= 1 && timesLog.length < answeredCount) {

      let time = (clickTime[(answeredCount-1)]-startTime[(answeredCount-1)])/1000
      console.log('math= ' + time)
      addLog([...timesLog, time])

      console.log('reponses so far: ' + JSON.stringify(responsesLog));
      if (JSON.stringify(responsesLog[responsesLog.length-1].answer) === JSON.stringify(responsesLog[responsesLog.length-1].input)) {
        correct.current = correct.current+1
        console.log('number correct = ' + correct.current);
      }
      console.log(answeredCount);
    }
  }, [startTime, clickTime, answeredCount, timesLog, responsesLog, correct])

  useEffect(() => {
    if (answeredCount >= 1 && answeredCount === props.data.length) {
      const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
      average.current = mean(timesLog)
    }
  }, [answeredCount, timesLog, props.data.length])


  if (answeredCount < props.data.length) {
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
                addResponse([...responsesLog, {input: [choice], answer: currentQ.answers}])
              }} choice={choice} key={choice} />)})}
        </div>
      </div>
    )
  }
  else {
      return (
      <div id='pagegrid'>
        <div id='question'>
          <h2>End of Quiz!</h2>
        </div>
        <div id='results'>
          <Results average={average.current} correct={correct.current} totalQs={props.data.length}/>
        </div>
      </div>
    )
  }


}

export default Quiz
