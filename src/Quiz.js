import React, { useEffect, useState } from 'react'
import Question from './Question.js'
import ChoicesBar from './ChoicesBar.js'
import './quiz.css'


function Quiz () {

  const [startTime, setTime] = useState(Date.now())
  const [clickTime, setClick] = useState()
  const [answeredCount, incrementCount] = useState(0)

  useEffect(() => {
    if (answeredCount === 1) {
      console.log(startTime);
      console.log(clickTime);
      console.log('math= ' + (clickTime-startTime)/1000)
    }

  }, [startTime, clickTime, answeredCount])

  return (
    <div id='pagegrid'>
      <div id='question'>
        <Question />
      </div>
      <div id='choices'>
        <ChoicesBar onClick={() => {
          setClick(Date.now())
          incrementCount(answeredCount + 1)
        }} />
      </div>
    </div>
  )

}

export default Quiz
