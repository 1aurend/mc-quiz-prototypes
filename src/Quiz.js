import React, { useEffect, useState, useRef } from 'react'
import Question from './Question.js'
import Choice from './Choice.js'
import './quiz.css'
import Results from './Results.js'
import { Link } from 'react-router-dom'


function Quiz (props) {

  const [currentQ, nextQ] = useState(props.data[0])

  const startTime = useRef([Date.now()])
  const clickTime = useRef([])
  const answeredCount = useRef(0)
  const timesLog = useRef([])
  const responsesLog = useRef([])
  const inputs = useRef([])
  const average = useRef(0)
  const correct = useRef(0)



  function handleClick(choice) {

    let now = Date.now()

    Promise.resolve(inputs.current = [...inputs.current, choice]).then(() => {
       if (currentQ.answers.length === inputs.current.length) {
        clickTime.current = [...clickTime.current, now]
        startTime.current = [...startTime.current, now]
        answeredCount.current = answeredCount.current+1
        nextQ(props.data[answeredCount.current]) //should this be further down the chain?
        responsesLog.current = [...responsesLog.current, {input: inputs.current, answer: currentQ.answers}]
      }}).then(() =>
        { if (currentQ.answers.length === inputs.current.length) {
        doMath()
      }}).then(() =>
        { if (currentQ.answers.length === inputs.current.length) {
        inputs.current = []
      }})

  }

  function doMath() {

    let time = (clickTime.current[(clickTime.current.length-1)]-startTime.current[(answeredCount.current-1)])/1000
    console.log('math= ' + time)
    timesLog.current = [...timesLog.current, time]

    console.log('reponses so far: ' + JSON.stringify(responsesLog.current));
    if (JSON.stringify(responsesLog.current[responsesLog.current.length-1].answer) === JSON.stringify(responsesLog.current[responsesLog.current.length-1].input)) {
      correct.current = correct.current+1
      console.log('number correct = ' + correct.current);
    }

    if (answeredCount.current === props.data.length) {
      const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
      average.current = mean(timesLog.current)
      nextQ(null)
    }

  }


  if (answeredCount.current < props.data.length) {
    return (
      <div id='pagegrid'>
        <div id='question'>
          <Question question={currentQ.question} />
        </div>
        <div id='choices'>
          {currentQ.choices.map(choice => {return (
            <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} />)})}
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
          <Link to='/'><button>Start Over</button></Link>
        </div>
      </div>
    )
  }


}

export default Quiz
