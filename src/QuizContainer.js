import React, { useState, useEffect } from 'react'
import Quiz from './Quiz.js'
import axios from 'axios'


function QuizContainer(props) {

  const [theQs, fetchedQs] = useState(null)


  useEffect( () => {
      loadQuiz(parseInt(props.location.state.numQs))
    }, [])


    function loadQuiz(numQs) {

      axios.post('https://www.secretmusiclab.com/tests', {
        num: numQs
      }).then(function (response) {
          console.log(response.data)
          fetchedQs(JSON.parse(response.data))
        })
        .catch(function (error) {
          console.log(error)
        })

    }


  if (!theQs) {
    return <h2>Loading...</h2>
  }
  else if (theQs) {
    console.log(theQs);
    return (
      <Quiz data={theQs} />
    )
  }

}

export default QuizContainer
