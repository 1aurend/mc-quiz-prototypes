import React, { useState, useEffect } from 'react'
import data from './quiz-data.js'
import Quiz from './Quiz.js'

function loadQuiz(numQs) {

  let qs = []

  for (var i = 0; i < numQs; i++) {
    qs.push(data[i])
  }

  return qs
} //will eventually be a database fetch


function QuizContainer() {

  const [gotData, fetched] = useState(false)
  const [quizQs, updateQs] = useState([])


  useEffect(() => {
    if (!gotData) {
      const theQs = load().then((qs) => {
        updateQs(qs)
        fetched(true)
      })
    }
  }, [gotData, quizQs])

  async function load() {
    return await loadQuiz(3)
  }


  if (!gotData) {
    return <h2>Loading...</h2>
  }
  else {
    return (
      <Quiz data={quizQs} />
    )
  }

}

export default QuizContainer
