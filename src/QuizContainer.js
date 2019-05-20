import React, { useState, useEffect } from 'react'
import data from './quiz-data.js'
import Quiz from './Quiz.js'


async function loadQuiz(numQs) {

  let qs = []

  for (var i = 0; i < numQs; i++) {
    qs.push(data[i])
  }

  return qs
} //will eventually be a database fetch


function QuizContainer() {

  const [gotData, fetched] = useState(false)
  const [theQs, updateQs] = useState([])


  useEffect(() => {
    if (!gotData) {
    loadQuiz(3).then((qs) => {
        updateQs(qs)
        fetched(true)
      })
    }
  }, [gotData, theQs])


  if (!gotData) {
    return <h2>Loading...</h2>
  }
  else {
    return (
      <Quiz data={theQs} />
    )
  }

}

export default QuizContainer
