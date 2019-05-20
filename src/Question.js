import React from 'react'


function Question(props) {

  console.log(props.question);
  
  return (
    <>
      <h2 style={{margin: 'auto'}}>{props.question}</h2>
    </>
  )

}

export default Question
