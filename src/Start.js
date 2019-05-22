import React, { useState } from 'react'
import './quiz.css'
import QuizSelector from './QuizSelector.js'
import Go from './Go.js'


function Start() {

  const [numQs, setNum] = useState(1)

  return (
    <div id='pagegrid'>
      <div id='question'>
        <h2>Flashcard App Prototype</h2>
        <h3>Choose a number of flashcards to try it.</h3>
      </div>
      <div id='startinputs'>
        <QuizSelector onChange={(e) => {setNum(e.target.value)}}/>
        <Go num={numQs}/>
      </div>
    </div>
  )

}

export default Start
