import React from 'react'
import Choice from './Choice.js'


function ChoicesBar(props) {

  console.log(props);

  return (
    <>
      {props.choices.map(choice => {return (
        <Choice onClick={props.onClick} choice={choice} onAnswer={props.onAnswer}/>)})}
    </> //should Button be a component? probably yes eventually
  )

}

export default ChoicesBar
